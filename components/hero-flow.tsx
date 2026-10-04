"use client"

import { useEffect, useRef } from "react"

// Slowly flowing orange/violet "smoke" rendered with a WebGL shader.
// Acts like a looping background video without any file to download.
const vertexShader = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentShader = `
precision mediump float;
uniform vec2 uResolution;
uniform float uTime;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 rotate = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p = rotate * p * 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec2 p = uv * vec2(uResolution.x / uResolution.y, 1.0) * 1.6;
  float t = uTime * 0.035;

  // Domain warping gives the smoke-like, folding motion
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, -t)));
  vec2 r = vec2(fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 1.5), fbm(p + 3.0 * q + vec2(8.3, 2.8) - t));
  float f = fbm(p + 3.0 * r);

  vec3 ember = vec3(1.0, 0.42, 0.15);
  vec3 violet = vec3(0.45, 0.25, 0.85);
  vec3 color = mix(violet, ember, smoothstep(0.2, 0.8, q.x));
  float intensity = smoothstep(0.35, 1.0, f) * (0.6 + 0.4 * r.y);

  // Fade towards the bottom so the section blends into the page
  intensity *= smoothstep(0.0, 0.55, uv.y);

  gl_FragColor = vec4(color * intensity, 1.0);
}
`

export function HeroFlow({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false })
    if (!gl) return

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const program = gl.createProgram()!
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShader))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentShader))
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const position = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

    const uResolution = gl.getUniformLocation(program, "uResolution")
    const uTime = gl.getUniformLocation(program, "uTime")

    // Render at reduced resolution: the effect is soft, so this costs nothing visually
    const scale = 0.4
    const resize = () => {
      const width = Math.max(1, Math.floor(canvas.clientWidth * scale))
      const height = Math.max(1, Math.floor(canvas.clientHeight * scale))
      canvas.width = width
      canvas.height = height
      gl.viewport(0, 0, width, height)
      gl.uniform2f(uResolution, width, height)
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const start = performance.now() - 20000
    let frame = 0
    let visible = true

    const draw = () => {
      gl.uniform1f(uTime, (performance.now() - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const loop = () => {
      draw()
      frame = requestAnimationFrame(loop)
    }

    const play = () => {
      cancelAnimationFrame(frame)
      if (reducedMotion) draw()
      else if (visible && !document.hidden) loop()
    }

    // Pause when the hero is off screen or the tab is hidden
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) play()
      else cancelAnimationFrame(frame)
    })
    intersection.observe(canvas)
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(frame) : play())
    document.addEventListener("visibilitychange", onVisibility)

    play()

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      intersection.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}

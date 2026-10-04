"use client"

import { useEffect, useRef } from "react"

// Background animation: wireframe website layouts drawing themselves like in a
// design tool — outline, content blocks, an accent button, then a selection box
// with dimensions and a cursor. Each sketch fades out and a new one appears.

const EMBER = "255, 107, 38"
const LINE = "255, 255, 255"
const LIFETIME = 10 // seconds
const COUNT = 5

type Block = { x: number; y: number; w: number; h: number; kind: "bar" | "image" | "button" | "card" }
type Sketch = { x: number; y: number; w: number; h: number; born: number; blocks: Block[]; target: number }

const rand = (min: number, max: number) => min + Math.random() * (max - min)
const clamp01 = (v: number) => Math.min(1, Math.max(0, v))
const ease = (t: number) => 1 - Math.pow(1 - clamp01(t), 3)

function makeLayout(w: number, h: number): Block[] {
  const pad = w * 0.07
  const blocks: Block[] = [
    { x: pad, y: h * 0.07, w: w * 0.18, h: h * 0.035, kind: "bar" },
    { x: w - pad - w * 0.14, y: h * 0.06, w: w * 0.14, h: h * 0.05, kind: "button" },
  ]
  const split = Math.random() > 0.5
  if (split) {
    blocks.push(
      { x: pad, y: h * 0.25, w: w * 0.4, h: h * 0.06, kind: "bar" },
      { x: pad, y: h * 0.34, w: w * 0.28, h: h * 0.06, kind: "bar" },
      { x: pad, y: h * 0.47, w: w * 0.16, h: h * 0.065, kind: "button" },
      { x: w * 0.55, y: h * 0.22, w: w * 0.38, h: h * 0.36, kind: "image" },
    )
  } else {
    blocks.push(
      { x: w * 0.2, y: h * 0.22, w: w * 0.6, h: h * 0.065, kind: "bar" },
      { x: w * 0.3, y: h * 0.32, w: w * 0.4, h: h * 0.04, kind: "bar" },
      { x: w * 0.42, y: h * 0.42, w: w * 0.16, h: h * 0.065, kind: "button" },
    )
  }
  const cardY = h * 0.66
  const gap = w * 0.03
  const cardW = (w - pad * 2 - gap * 2) / 3
  for (let i = 0; i < 3; i++) {
    blocks.push({ x: pad + i * (cardW + gap), y: cardY, w: cardW, h: h * 0.24, kind: "card" })
  }
  return blocks
}

function spawn(width: number, height: number, now: number, others: Sketch[]): Sketch {
  for (let attempt = 0; attempt < 20; attempt++) {
    const w = rand(220, 340) * Math.min(1, width / 1200 + 0.35)
    const h = w * rand(0.62, 0.75)
    // Keep to the sides so the headline in the middle stays clean
    const leftMin = -w * 0.3
    const leftMax = Math.max(leftMin, width * 0.24 - w * 0.75)
    const rightMax = width - w * 0.7
    const rightMin = Math.min(rightMax, width * 0.76 - w * 0.25)
    const x = Math.random() < 0.5 ? rand(leftMin, leftMax) : rand(rightMin, rightMax)
    const y = rand(height * 0.02, height * 0.72 - h)
    const overlaps = others.some(
      (o) => x < o.x + o.w + 30 && x + w + 30 > o.x && y < o.y + o.h + 30 && y + h + 30 > o.y,
    )
    if (!overlaps || attempt === 19) {
      const blocks = makeLayout(w, h)
      return { x, y, w, h, born: now, blocks, target: Math.floor(rand(2, blocks.length)) }
    }
  }
  throw new Error("unreachable")
}

// Draw a rectangle outline progressively (0..1 of its perimeter)
function strokeProgress(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, p: number) {
  if (p <= 0) return
  const perimeter = 2 * (w + h)
  ctx.setLineDash([perimeter * p, perimeter])
  ctx.strokeRect(x, y, w, h)
  ctx.setLineDash([])
}

function drawCursor(ctx: CanvasRenderingContext2D, x: number, y: number, alpha: number) {
  ctx.save()
  ctx.translate(x, y)
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(0, 15)
  ctx.lineTo(4, 11)
  ctx.lineTo(7, 17)
  ctx.lineTo(9.5, 16)
  ctx.lineTo(6.5, 10)
  ctx.lineTo(11.5, 10)
  ctx.closePath()
  ctx.fillStyle = `rgba(${LINE}, ${alpha})`
  ctx.fill()
  ctx.restore()
}

function drawSketch(ctx: CanvasRenderingContext2D, s: Sketch, now: number) {
  const t = (now - s.born) / 1000
  const fade = t < LIFETIME - 1.5 ? 1 : clamp01((LIFETIME - t) / 1.5)
  if (fade <= 0) return

  ctx.save()
  ctx.translate(s.x, s.y)
  ctx.globalAlpha = fade
  ctx.lineWidth = 1

  // Page outline + window dots
  ctx.strokeStyle = `rgba(${LINE}, 0.55)`
  strokeProgress(ctx, 0, 0, s.w, s.h, ease(t / 1.4))
  const dots = clamp01((t - 1) / 0.4)
  ctx.fillStyle = `rgba(${LINE}, ${0.4 * dots})`
  for (let i = 0; i < 3; i++) {
    ctx.beginPath()
    ctx.arc(8 + i * 7, -8, 2, 0, Math.PI * 2)
    ctx.fill()
  }

  // Content blocks appear one by one
  s.blocks.forEach((b, i) => {
    const start = 1.1 + i * 0.22
    const p = ease((t - start) / 0.7)
    if (p <= 0) return
    if (b.kind === "button") {
      ctx.fillStyle = `rgba(${EMBER}, ${0.85 * clamp01((t - start - 0.4) / 0.5)})`
      ctx.fillRect(b.x, b.y, b.w, b.h)
      ctx.strokeStyle = `rgba(${EMBER}, 0.9)`
      strokeProgress(ctx, b.x, b.y, b.w, b.h, p)
    } else if (b.kind === "bar") {
      ctx.fillStyle = `rgba(${LINE}, 0.35)`
      ctx.fillRect(b.x, b.y, b.w * p, b.h)
    } else {
      ctx.strokeStyle = `rgba(${LINE}, 0.4)`
      strokeProgress(ctx, b.x, b.y, b.w, b.h, p)
      if (b.kind === "image" && p >= 1) {
        const cross = ease((t - start - 0.7) / 0.5)
        ctx.beginPath()
        ctx.moveTo(b.x, b.y)
        ctx.lineTo(b.x + b.w * cross, b.y + b.h * cross)
        ctx.moveTo(b.x + b.w, b.y)
        ctx.lineTo(b.x + b.w - b.w * cross, b.y + b.h * cross)
        ctx.stroke()
      }
      if (b.kind === "card" && p >= 1) {
        ctx.fillStyle = `rgba(${LINE}, 0.25)`
        ctx.fillRect(b.x + 6, b.y + b.h - 14, (b.w - 12) * 0.7 * ease((t - start - 0.7) / 0.4), 4)
      }
    }
  })

  // Cursor glides to a block and selects it
  const target = s.blocks[s.target]
  const cursorT = ease((t - 3.4) / 1.2)
  if (t > 3.2) {
    const fromX = s.w * 0.9
    const fromY = s.h * 1.05
    const toX = target.x + target.w * 0.6
    const toY = target.y + target.h * 0.6
    const cx = fromX + (toX - fromX) * cursorT
    const cy = fromY + (toY - fromY) * cursorT
    const selected = clamp01((t - 4.7) / 0.25)
    if (selected > 0) {
      const m = 4
      ctx.strokeStyle = `rgba(${EMBER}, ${selected})`
      ctx.strokeRect(target.x - m, target.y - m, target.w + m * 2, target.h + m * 2)
      ctx.fillStyle = `rgba(${EMBER}, ${selected})`
      const corners = [
        [target.x - m, target.y - m],
        [target.x + target.w + m, target.y - m],
        [target.x - m, target.y + target.h + m],
        [target.x + target.w + m, target.y + target.h + m],
      ]
      for (const [hx, hy] of corners) ctx.fillRect(hx - 2.5, hy - 2.5, 5, 5)
      // Dimension label
      const label = `${Math.round(target.w * 4)} × ${Math.round(target.h * 4)}`
      ctx.font = "10px ui-monospace, SFMono-Regular, Menlo, monospace"
      const lw = ctx.measureText(label).width + 10
      const lx = target.x + target.w / 2 - lw / 2
      const ly = target.y + target.h + m + 6
      ctx.fillRect(lx, ly, lw, 15)
      ctx.fillStyle = `rgba(20, 20, 22, ${selected})`
      ctx.fillText(label, lx + 5, ly + 11)
    }
    drawCursor(ctx, cx, cy, 0.9 * clamp01((t - 3.2) / 0.4))
  }

  ctx.restore()
}

export function HeroSketch({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    let width = 0
    let height = 0
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isSmall = width < 640
    const count = isSmall ? 3 : COUNT
    const sketches: Sketch[] = []
    const start = performance.now()
    for (let i = 0; i < count; i++) {
      // Stagger births so the sketches are at different stages
      const born = reducedMotion ? start - 6000 : start - (i * LIFETIME * 1000) / count
      const s = spawn(width, height, born, sketches)
      sketches.push(s)
    }

    let frame = 0
    let visible = true

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < sketches.length; i++) {
        if (!reducedMotion && (now - sketches[i].born) / 1000 > LIFETIME) {
          sketches[i] = spawn(width, height, now, sketches.filter((_, j) => j !== i))
        }
        drawSketch(ctx, sketches[i], reducedMotion ? sketches[i].born + 6000 : now)
      }
    }

    const loop = (now: number) => {
      draw(now)
      frame = requestAnimationFrame(loop)
    }

    const play = () => {
      cancelAnimationFrame(frame)
      if (reducedMotion) draw(performance.now())
      else if (visible && !document.hidden) frame = requestAnimationFrame(loop)
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

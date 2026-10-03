"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { BarChart3, CalendarCheck, Gauge, LifeBuoy, PenTool, ShoppingBag, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

function Card({
  icon: Icon,
  title,
  text,
  className,
  children,
}: {
  icon: typeof Gauge
  title: string
  text: string
  className?: string
  children?: ReactNode
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "group relative flex flex-col p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 overflow-hidden",
        className,
      )}
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-ember/0 group-hover:bg-ember/10 blur-3xl transition-colors duration-500 pointer-events-none" />
      <div className="p-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50 w-fit mb-5">
        <Icon className="w-5 h-5 text-zinc-300" strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
      {children && <div className="mt-auto pt-6">{children}</div>}
    </motion.div>
  )
}

/* Wireframe that assembles itself, then switches to the final design */
function DesignCanvas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [final, setFinal] = useState(false)

  useEffect(() => {
    if (!inView) return
    const interval = setInterval(() => setFinal((f) => !f), 2800)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <div ref={ref} className="relative h-48 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 overflow-hidden">
      <div className="absolute top-3 right-3 flex gap-1 p-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono">
        <span className={cn("px-2 py-0.5 rounded-full transition-colors", !final ? "bg-zinc-700 text-white" : "text-zinc-500")}>
          wireframe
        </span>
        <span className={cn("px-2 py-0.5 rounded-full transition-colors", final ? "bg-ember text-zinc-950" : "text-zinc-500")}>
          design
        </span>
      </div>
      <div className="grid grid-cols-5 gap-3 h-full pt-6">
        <div className="col-span-3 flex flex-col justify-center gap-2">
          <motion.div
            animate={{ backgroundColor: final ? "#fafafa" : "#3f3f46" }}
            transition={{ duration: 0.5 }}
            className="h-4 w-full rounded-md"
          />
          <motion.div
            animate={{ backgroundColor: final ? "#71717a" : "#3f3f46", width: final ? "70%" : "85%" }}
            transition={{ duration: 0.5 }}
            className="h-4 rounded-md"
          />
          <div className="h-1.5 w-4/5 rounded-full bg-zinc-800 mt-1" />
          <div className="h-1.5 w-3/5 rounded-full bg-zinc-800" />
          <motion.div
            animate={{ backgroundColor: final ? "oklch(0.7 0.2 40)" : "rgba(0,0,0,0)", borderColor: final ? "oklch(0.7 0.2 40)" : "#52525b" }}
            transition={{ duration: 0.5 }}
            className="mt-2 h-6 w-20 rounded-full border border-dashed"
          />
        </div>
        <div className="col-span-2 relative rounded-xl border border-dashed border-zinc-700 overflow-hidden">
          <motion.div
            animate={{ opacity: final ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.7_0.2_40/_0.9),transparent_60%),radial-gradient(circle_at_80%_80%,oklch(0.55_0.2_300/_0.8),transparent_60%)]"
          />
          <motion.svg
            animate={{ opacity: final ? 0 : 1 }}
            className="absolute inset-0 w-full h-full text-zinc-700"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
          </motion.svg>
        </div>
      </div>
    </div>
  )
}

/* Mini booking widget — a slot gets picked and confirmed on a loop */
function BookingDemo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const slots = ["9:00", "10:30", "13:00", "14:30", "16:00", "17:30"]
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (!inView) return
    let i = 0
    const interval = setInterval(() => {
      setActive([1, 3, 4][i % 3])
      i++
    }, 1600)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <div ref={ref} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="text-zinc-300 font-medium">Pá 14. 11.</span>
        <span className="text-zinc-500">6 / 6</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {slots.map((slot, i) => (
          <motion.div
            key={slot}
            animate={active === i ? { scale: [1, 0.94, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "py-2 rounded-lg text-center text-xs font-medium border transition-colors duration-300",
              active === i ? "bg-ember border-ember text-zinc-950" : "border-zinc-800 text-zinc-400",
            )}
          >
            {slot}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ScoreRing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [score, setScore] = useState(0)
  const radius = 42
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    if (!inView) return
    let value = 0
    const interval = setInterval(() => {
      value += 2
      setScore(Math.min(value, 100))
      if (value >= 100) clearInterval(interval)
    }, 22)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <div ref={ref} className="flex items-center justify-center">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="rgb(39 39 42)" strokeWidth="6" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#34d399"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (score / 100) * circumference}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-3xl font-semibold text-emerald-400 tabular-nums">{score}</span>
        </div>
      </div>
    </div>
  )
}

function AnimatedChart() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const points = [
    { x: 0, y: 60 },
    { x: 20, y: 52 },
    { x: 40, y: 55 },
    { x: 60, y: 34 },
    { x: 80, y: 30 },
    { x: 100, y: 8 },
  ]
  const pathD = points.reduce((acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), "")

  return (
    <svg ref={ref} viewBox="0 0 100 70" className="w-full h-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id="seoGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.2 40)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.7 0.2 40)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {inView && (
        <>
          <path d={`${pathD} L 100 70 L 0 70 Z`} fill="url(#seoGradient)" />
          <path
            d={pathD}
            fill="none"
            stroke="oklch(0.7 0.2 40)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            className="draw-line"
          />
        </>
      )}
    </svg>
  )
}

function CartStack() {
  return (
    <div className="flex items-center gap-2">
      {["#f97316", "#a78bfa", "#34d399"].map((c, i) => (
        <motion.div
          key={c}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          className="flex-1 rounded-xl border border-zinc-800 bg-zinc-950/60 p-2"
        >
          <div className="aspect-square rounded-lg mb-2" style={{ background: `linear-gradient(135deg, ${c}, transparent)` }} />
          <div className="h-1.5 w-3/4 rounded-full bg-zinc-700 mb-1" />
          <div className="h-1.5 w-1/3 rounded-full bg-zinc-800" />
        </motion.div>
      ))}
    </div>
  )
}

function MotionDemo() {
  return (
    <div className="relative h-16 rounded-2xl border border-zinc-800 bg-zinc-950/60 overflow-hidden">
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-ember shadow-[0_0_30px_oklch(0.7_0.2_40/0.6)]"
        animate={{ left: ["8%", "82%", "8%"], borderRadius: ["50%", "28%", "50%"], rotate: [0, 180, 360] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
      />
    </div>
  )
}

function UptimeBars({ status }: { status: string }) {
  const bars = Array.from({ length: 36 }, (_, i) => (i === 21 ? "warn" : "ok"))

  return (
    <div>
      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="inline-flex items-center gap-2 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 text-emerald-500 pulse-glow" />
          {status}
        </span>
        <span className="font-mono text-zinc-500">99.99% uptime</span>
      </div>
      <div className="flex gap-1">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.015, duration: 0.3 }}
            className={cn("flex-1 h-8 rounded-sm origin-bottom", b === "ok" ? "bg-emerald-500/70" : "bg-amber-400/80")}
          />
        ))}
      </div>
    </div>
  )
}

export function Services() {
  const { t } = useI18n()
  const s = t.services

  return (
    <section id="sluzby" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={s.title} sub={s.sub} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <Card icon={PenTool} title={s.design.title} text={s.design.text} className="md:col-span-2">
            <DesignCanvas />
          </Card>
          <Card icon={Gauge} title={s.speed.title} text={s.speed.text}>
            <ScoreRing />
          </Card>
          <Card icon={CalendarCheck} title={s.dev.title} text={s.dev.text}>
            <BookingDemo />
          </Card>
          <Card icon={ShoppingBag} title={s.shop.title} text={s.shop.text}>
            <CartStack />
          </Card>
          <Card icon={BarChart3} title={s.seo.title} text={s.seo.text}>
            <AnimatedChart />
          </Card>
          <Card icon={Sparkles} title={s.motion.title} text={s.motion.text}>
            <MotionDemo />
          </Card>
          <Card icon={LifeBuoy} title={s.care.title} text={s.care.text} className="lg:col-span-2">
            <UptimeBars status={s.care.status} />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

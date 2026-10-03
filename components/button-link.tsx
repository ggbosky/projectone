import type React from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "accent" | "outline" | "ghost"

const variants: Record<Variant, string> = {
  primary:
    "btn-fill bg-white text-zinc-950 shadow-lg shadow-white/10 hover:shadow-[0_12px_40px_-12px_oklch(0.7_0.2_40/0.8)]",
  accent:
    "btn-fill [--btn-fill:#fff] bg-ember text-zinc-950 font-semibold shadow-[0_12px_40px_-12px_oklch(0.7_0.2_40/0.8)] hover:shadow-[0_16px_50px_-12px_oklch(0.7_0.2_40/0.9)]",
  outline:
    "border border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-600 hover:shadow-[0_12px_40px_-16px_rgb(255_255_255/0.25)]",
  ghost: "text-zinc-400 hover:text-white hover:bg-zinc-800",
}

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1",
    variants[variant],
    className,
  )
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return <a className={buttonClasses(variant, className)} {...props} />
}

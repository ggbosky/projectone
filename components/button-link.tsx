import type React from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "outline" | "ghost"

const variants: Record<Variant, string> = {
  primary: "shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 shadow-lg shadow-white/10",
  outline: "border border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700",
  ghost: "text-zinc-400 hover:text-white hover:bg-zinc-800",
}

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none",
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

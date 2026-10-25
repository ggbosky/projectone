import { cn } from "@/lib/utils"

// Brand mark — the angular "2", traced from the official logo.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="20 60 758 768" aria-hidden="true" className={cn("w-auto shrink-0", className)}>
      <path fill="#ff590e" d="M222 60H630L778 205V378L20 828V605L625 258H22Z M400 632H778V828H82Z" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-white", className)}>
      <LogoMark className="h-[1.15em]" />
      Project Two
    </span>
  )
}

import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("font-display text-lg font-semibold tracking-tight text-white", className)}>
      Project<span className="text-zinc-500"> One</span>
    </span>
  )
}

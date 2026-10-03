import { cn } from "@/lib/utils"

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative w-8 h-8 rounded-[10px] bg-zinc-50 flex items-center justify-center shrink-0">
        <span className="font-display font-bold text-[13px] tracking-tight text-zinc-950">P1</span>
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-ember ring-2 ring-zinc-950" />
      </span>
      {showText && (
        <span className="font-display font-semibold text-white tracking-tight">
          Project<span className="text-zinc-500"> One</span>
        </span>
      )}
    </span>
  )
}

"use client"

import type { ReactNode } from "react"
import { ArrowLeft, Mail } from "lucide-react"
import { I18nProvider } from "@/lib/i18n"
import { site } from "@/lib/site"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"

export type LegalSection = { id: string; title: string; content: ReactNode }

export function LegalPage({
  title,
  intro,
  summary,
  sections,
}: {
  title: string
  intro: string
  summary: string[]
  sections: LegalSection[]
}) {
  return (
    <I18nProvider>
      <div id="top" className="min-h-screen bg-zinc-950">
        <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" aria-label="Project Two">
              <Logo />
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-ember transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zpět na web
            </a>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 pt-16 pb-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Právní informace</p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white text-balance">
              {title}
            </h1>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">{intro}</p>
            <p className="mt-4 text-sm text-zinc-500">
              Účinné od {site.legal.effectiveDate} · {site.domain}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
            {/* Table of contents */}
            <nav aria-label="Obsah" className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500 mb-4">Obsah</p>
                <ol className="space-y-2.5 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="flex gap-3 text-zinc-500 hover:text-white transition-colors">
                        <span className="font-mono text-zinc-600 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <div className="max-w-3xl min-w-0">
              {/* Summary */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 mb-14">
                <h2 className="font-display text-lg font-semibold text-white mb-4">Ve zkratce</h2>
                <ul className="space-y-3">
                  {summary.map((item) => (
                    <li key={item} className="flex gap-3 text-zinc-300 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-ember shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-14">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className="scroll-mt-28">
                    <h2 className="flex items-baseline gap-4 font-display text-2xl font-semibold tracking-tight text-white mb-5">
                      <span className="font-mono text-sm text-ember tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </h2>
                    <div className="legal-prose">{s.content}</div>
                  </section>
                ))}
              </div>

              {/* Contact */}
              <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between">
                <div>
                  <p className="font-display text-lg font-semibold text-white">Máte dotaz?</p>
                  <p className="text-sm text-zinc-400 mt-1">Napište nám, odpovíme co nejdříve.</p>
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-zinc-700 text-white hover:border-ember hover:text-ember transition-colors w-fit"
                >
                  <Mail className="w-4 h-4" />
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </I18nProvider>
  )
}

/* Small building blocks for document content */
export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-zinc-800">
      <table className="w-full text-sm text-left">
        <thead className="bg-zinc-900/80 text-zinc-300">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {rows.map((row, i) => (
            <tr key={i} className="align-top">
              {row.map((cell, j) => (
                <td key={j} className={j === 0 ? "px-4 py-3 text-white font-medium min-w-[10rem]" : "px-4 py-3 text-zinc-400 min-w-[10rem]"}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import type React from "react"
import type { Metadata, Viewport } from "next"
import { Funnel_Display, Funnel_Sans } from "next/font/google"
import { dictionaries } from "@/lib/dictionary"
import "./globals.css"

const funnelSans = Funnel_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-funnel-sans",
  display: "swap",
})

const funnelDisplay = Funnel_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-funnel-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: dictionaries.cs.meta.title,
  description: dictionaries.cs.meta.description,
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: dictionaries.cs.meta.title,
    description: dictionaries.cs.meta.description,
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#09090b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className="dark">
      <body
        className={`${funnelSans.variable} ${funnelDisplay.variable} font-sans antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}

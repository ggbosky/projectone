import type React from "react"
import type { Metadata, Viewport } from "next"
import { preload } from "react-dom"
import { dictionaries } from "@/lib/dictionary"
import "./globals.css"

// Brand fonts are self-hosted in /public/fonts (declared in globals.css); warm up the ones above the fold.
const criticalFonts = ["inter-tight-latin-600-normal", "inter-tight-latin-ext-600-normal", "inter-latin-400-normal"]

export const metadata: Metadata = {
  metadataBase: new URL("https://projectwo.com"),
  title: dictionaries.cs.meta.title,
  description: dictionaries.cs.meta.description,
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
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
  for (const name of criticalFonts) {
    preload(`/fonts/${name}.woff2`, { as: "font", type: "font/woff2", crossOrigin: "anonymous" })
  }

  return (
    <html lang="cs" className="dark">
      <body
        className="font-sans antialiased"
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}

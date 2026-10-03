import type React from "react"
import type { Metadata, Viewport } from "next"
import { Manrope, Instrument_Sans, Instrument_Serif } from "next/font/google"
import { dictionaries } from "@/lib/dictionary"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
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
        className={`${manrope.variable} ${instrumentSans.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata, Viewport } from "next"
import { Mona_Sans } from "next/font/google"
import { dictionaries } from "@/lib/dictionary"
import "./globals.css"

// One variable family: normal width for text, expanded width for headings.
const monaSans = Mona_Sans({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-mona",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://projectwo.com"),
  title: dictionaries.cs.meta.title,
  description: dictionaries.cs.meta.description,
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
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
        className={`${monaSans.variable} font-sans antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}

"use client"

import { MotionConfig } from "framer-motion"
import { I18nProvider } from "@/lib/i18n"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <I18nProvider>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen bg-zinc-950">
            <Hero />
            <Services />
            <Work />
            <Process />
            <Pricing />
            <Faq />
            <Contact />
          </main>
          <Footer />
        </SmoothScroll>
      </MotionConfig>
    </I18nProvider>
  )
}

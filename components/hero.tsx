"use client"

import dynamic from "next/dynamic"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
const TradeGlobe = dynamic(() => import("./trade-globe"), { ssr: false, loading: () => <div className="globe-fallback" aria-hidden="true" /> })

export function Hero() {
  const { t, locale } = useLanguage()
  return <section id="top" className="hero">
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="hero-eyebrow"><span />{t.hero.eyebrow}</p>
        <h1>{t.hero.title}<br /><em>{t.hero.accent}</em></h1>
        <p className="hero-text">{t.hero.text}</p>
        <div className="hero-actions"><a href="#services" className="primary-button">{t.hero.primary}<ArrowUpRight aria-hidden="true" /></a><a href="#contact" className="secondary-button">{t.hero.secondary}</a></div>
        <a href="#about" className="scroll-link" aria-label={t.nav.about}><ArrowDown aria-hidden="true" /></a>
      </div>
      <div className="hero-visual"><TradeGlobe /><div className="scene-hint">{locale === "fa" ? "بکش و بچرخون" : "Drag to explore"}</div><div className="route-pill"><span>IR</span><i /><span>AT</span><small>{t.hero.route}</small></div></div>
    </div>
  </section>
}

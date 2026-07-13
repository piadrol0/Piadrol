"use client"

import dynamic from "next/dynamic"
import { Check, Ship, TrainFront, Truck } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
const LogisticsScene = dynamic(() => import("./visual-scenes").then(m => m.LogisticsScene), { ssr: false })

export function AboutServices() {
    const { t } = useLanguage()
    return <>
        <section id="about" className="section-shell about-section"><div className="section-intro"><p className="section-label">{t.about.label}</p><h2>{t.about.title}</h2></div><div className="about-body"><p>{t.about.text}</p><ul>{t.about.points.map(point => <li key={point}><Check aria-hidden="true" />{point}</li>)}</ul></div></section>
        <section id="services" className="soft-section"><div className="section-shell services-layout"><div className="services-copy"><div className="section-intro narrow"><p className="section-label">{t.services.label}</p><h2>{t.services.title}</h2></div><div className="services-grid">{t.services.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></div></section>
    </>
}

export function Logistics() {
    const { t, locale } = useLanguage()
    const modes = locale === "fa" ? ["جاده‌ای", "ریلی", "دریایی"] : ["Road", "Rail", "Maritime"]
    return <section id="logistics" className="dark-section"><div className="section-shell logistics-layout"><div className="logistics-copy"><p className="section-label light">{t.logistics.label}</p><h2>{t.logistics.title}</h2><p className="logistics-text">{t.logistics.text}</p><div className="transport-list"><span><Truck />{modes[0]}</span><span><TrainFront />{modes[1]}</span><span><Ship />{modes[2]}</span></div><div className="irisl-note"><Ship aria-hidden="true" /><div><h3>{t.logistics.irislTitle}</h3><p>{t.logistics.irisl}</p></div></div></div><div className="route-card"><LogisticsScene /><div className="route-cities"><div><small>IR</small><strong>{t.logistics.origin}</strong></div><span /><div><small>AT</small><strong>{t.logistics.gateway}</strong></div></div></div></div></section>
}

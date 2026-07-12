"use client"

import { type FormEvent, useEffect, useState } from "react"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { company } from "@/lib/site-data"
import { isEmailConfigured, notifyFirstVisit, sendEmail } from "@/lib/email"

export function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  useEffect(() => { void notifyFirstVisit() }, [])
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
    try { await sendEmail(data); setStatus("sent"); form.reset() } catch { setStatus("error") }
  }

  return <section id="contact" className="contact-section"><div className="section-shell contact-layout"><div><p className="section-label light">{t.contact.label}</p><h2>{t.contact.title}</h2><p className="contact-text">{t.contact.text}</p><div className="contact-details"><a href={`mailto:${company.email}`}><Mail />{company.email}</a><a href={`tel:${company.phone}`}><Phone />{company.phone}</a><p><MapPin />{company.austria}<br />{company.iran}</p></div></div><form onSubmit={submit} className="contact-form"><label>{t.contact.name}<input name="name" required autoComplete="name" /></label><label>{t.contact.company}<input name="company" autoComplete="organization" /></label><label>{t.contact.email}<input name="email" type="email" required autoComplete="email" /></label><label>{t.contact.topic}<select name="topic" required defaultValue=""><option value="" disabled>{t.contact.choose}</option><option>{t.contact.sourcing}</option><option>{t.contact.entry}</option><option>{t.contact.investment}</option><option>{t.contact.other}</option></select></label><label className="form-wide">{t.contact.message}<textarea name="message" rows={4} required /></label><div className="form-footer"><button type="submit" disabled={status === "sending"}>{status === "sending" ? t.contact.sending : t.contact.send}<ArrowUpRight /></button><p aria-live="polite">{status === "sent" ? t.contact.sent : status === "error" ? t.contact.error : !isEmailConfigured ? "EmailJS configuration required" : ""}</p></div></form></div></section>
}

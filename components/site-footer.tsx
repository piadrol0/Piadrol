"use client"

import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { company } from "@/lib/site-data"

export function SiteFooter() {
  const { t } = useLanguage()
  return <footer><div className="footer-inner"><div><p className="footer-brand">PIADROL</p><p>{t.footer.text}</p></div><a href="#top">{t.footer.top}<ArrowUp /></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {company.name}. {t.footer.rights}</p><p>Vienna · Tehran</p></div></footer>
}

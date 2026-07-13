import { AboutServices, Logistics } from "@/components/content-sections"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { LanguageProvider } from "@/components/language-provider"
import { Leadership } from "@/components/leadership"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { VisitNotifier } from "@/components/visit-notifier"

export default function Page() {
  return <LanguageProvider><VisitNotifier /><SiteHeader /><main><Hero /><AboutServices /><Logistics /><Leadership /><Contact /></main><SiteFooter /></LanguageProvider>
}

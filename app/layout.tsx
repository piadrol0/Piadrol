import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Manrope, Vazirmatn } from "next/font/google"
import "./globals.css"

const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope" })
const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600"] })
const persian = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazirmatn" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.piadrol.com"),
  title: { default: "Piadrol | International Trade Without Distance", template: "%s | Piadrol" },
  description: "Piadrol connects trusted food commodity producers with buyers and investors across Austria, Iran, Europe, and global markets.",
  alternates: { canonical: "/" },
  openGraph: { title: "Piadrol — Trade built on trust", description: "International sourcing, trade, advisory, and investment facilitation.", url: "/", siteName: "Piadrol", type: "website" },
  twitter: { card: "summary_large_image", title: "Piadrol — Trade built on trust", description: "International sourcing, trade, advisory, and investment facilitation." },
}

export const viewport: Viewport = { colorScheme: "light", themeColor: "#07111f", width: "device-width", initialScale: 1 }

const schema = { "@context": "https://schema.org", "@type": "Organization", name: "Piadrol", url: "https://www.piadrol.com", email: "trade@piadrol.com", description: "International commodity trading and market advisory company.", areaServed: ["Austria", "Iran", "European Union"] }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`bg-background ${sans.variable} ${serif.variable} ${persian.variable}`}><body className="font-sans antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}{process.env.NODE_ENV === "production" && <Analytics />}</body></html>
}

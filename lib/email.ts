import emailjs from "@emailjs/browser"

const config = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
}

export function isEmailConfigured() {
  return Boolean(config.publicKey && config.serviceId && config.templateId)
}

export async function sendEmail(params: Record<string, string>) {
  if (!isEmailConfigured()) throw new Error("Email service is not configured")
  return emailjs.send(config.serviceId!, config.templateId!, params, { publicKey: config.publicKey! })
}

export async function notifyFirstVisit() {
  if (typeof window === "undefined" || !isEmailConfigured()) return
  const key = "piadrol-visit-notified"
  if (window.localStorage.getItem(key)) return
  window.localStorage.setItem(key, "true")
  try {
    await sendEmail({
      message_type: "First website visit",
      page_url: window.location.href,
      referrer: document.referrer || "Direct",
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
      user_agent: navigator.userAgent,
    })
  } catch {
    window.localStorage.removeItem(key)
  }
}

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

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ params }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || "Unable to send email")
  }

  return response.json()
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

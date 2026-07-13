const config = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
}

export function isEmailConfigured() {
  return Boolean(config.publicKey && config.serviceId && config.templateId)
}

export async function sendEmail(params: Record<string, string>) {
  try {
    const normalized = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [key, String(value ?? "")]),
    )

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ params: normalized }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(error || "Unable to send email")
    }

    return response.json()
  } catch (error) {
    console.error("Email sending failed", error)
    throw error
  }
}

export async function notifyFirstVisit() {
  if (typeof window === "undefined") return

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
  } catch (error) {
    console.error("First visit notification failed", error)
    window.localStorage.removeItem(key)
  }
}

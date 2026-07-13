import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const rawBody = await request.text()
    let payload: { params?: Record<string, string> } = {}

    if (rawBody) {
      try {
        payload = JSON.parse(rawBody)
      } catch {
        payload = { params: { raw: rawBody } }
      }
    }

    const params = (payload.params ?? payload) as Record<string, string>
    const emailBody = Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => `<li><strong>${key}</strong>: ${String(value)}</li>`)
      .join("")
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    console.log("Mail env check", {
      hasServiceId: Boolean(serviceId),
      hasTemplateId: Boolean(templateId),
      hasPublicKey: Boolean(publicKey),
      hasSmtpHost: Boolean(process.env.SMTP_HOST || process.env.EMAIL_HOST),
      hasSmtpUser: Boolean(process.env.SMTP_USER || process.env.EMAIL_USER),
      hasSmtpPass: Boolean(process.env.SMTP_PASS || process.env.EMAIL_PASS),
    })

    if (serviceId && templateId && publicKey) {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: params,
        }),
      })

      if (response.ok) {
        return NextResponse.json({ ok: true })
      }

      const errorBody = await response.text()
      console.error("EmailJS request failed", errorBody)
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com"
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER || process.env.EMAIL_USER
    const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS
    const from = process.env.SMTP_FROM || process.env.EMAIL_FROM || user
    const to = process.env.SMTP_TO || process.env.EMAIL_TO || user

    if (!user || !pass) {
      return NextResponse.json({ error: "No mail provider configuration found" }, { status: 500 })
    }

    const { createTransport } = await import("nodemailer")
    const transporter = createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    console.log("Attempting SMTP send", { host, port, from, to })

    await transporter.sendMail({
      from,
      to,
      subject: params.message_type || "New message from Piadrol",
      html: `
        <h3>New message from Piadrol</h3>
        <ul>${emailBody}</ul>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to send email"
    console.error("Mail send failed", error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

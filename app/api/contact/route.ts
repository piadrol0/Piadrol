import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { params } = await request.json()
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      return NextResponse.json({ error: "EmailJS configuration is missing" }, { status: 500 })
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: params,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      return NextResponse.json({ error: errorBody || "Unable to send email" }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to send email"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

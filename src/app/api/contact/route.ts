import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, email, organisation, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Contact form is not configured' }, { status: 503 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'ISR Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `ISR Contact: ${name}${organisation ? ` (${organisation})` : ''}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation || 'N/A'}\n\nMessage:\n${message}`,
    })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}

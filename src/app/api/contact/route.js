import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json()

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kilonzojames198@gmail.com',
      subject: `New Inquiry from ${name} — ${service || 'General'}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
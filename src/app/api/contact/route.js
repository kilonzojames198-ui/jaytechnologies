import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // ── Option A: Resend (recommended for Vercel) ──────────────────────────
    // npm install resend  →  then uncomment below and add RESEND_API_KEY to Vercel env vars
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'jaysolutions@email.com',
    //   subject: `New Inquiry from ${name} — ${service || 'General'}`,
    //   text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
    // })

    // ── Option B: Nodemailer (self-hosted / VPS) ────────────────────────────
    // npm install nodemailer  →  then uncomment below and set env vars
    //
    // import nodemailer from 'nodemailer'
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: 587,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // })
    // await transporter.sendMail({
    //   from: email,
    //   to: 'jaysolutions@email.com',
    //   subject: `New Inquiry from ${name} — ${service || 'General'}`,
    //   text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
    // })

    // ── Current: Log to console (works on Vercel, check Function logs) ──────
    console.log('📩 New Contact Form Submission:')
    console.log({ name, email, service, message })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

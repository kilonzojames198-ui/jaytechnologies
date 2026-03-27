'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <h3>✅ Message Sent!</h3>
        <p>Thank you, {form.name || 'there'}! We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handle} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handle} required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Interested In</label>
        <select id="service" name="service" value={form.service} onChange={handle}>
          <option value="">Select a service...</option>
          <option>Web Development</option>
          <option>Graphic Design</option>
          <option>Branding</option>
          <option>Full Package</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Tell Us About Your Project</label>
        <textarea id="message" name="message" placeholder="Describe your project, goals, and timeline..." rows={5} value={form.message} onChange={handle} required />
      </div>
      <button type="submit" className="btn-primary btn-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message →'}
      </button>
      {status === 'error' && <p style={{ color: '#f87171', fontSize: '0.88rem' }}>Something went wrong. Please try again or WhatsApp us directly.</p>}
    </form>
  )
}

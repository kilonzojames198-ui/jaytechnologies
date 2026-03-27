# Jay Technologies — Next.js Website

Built with **Next.js 14** · Deployable on **Vercel** in minutes.

---

## 🚀 Deploy to Vercel (Step by Step)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit — Jay Technologies website"
git remote add origin https://github.com/YOUR_USERNAME/jaytechnologies.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `jaytechnologies` repository
4. Framework will auto-detect as **Next.js** ✅
5. Click **Deploy** — live in ~60 seconds!

---

## 📧 Enable Contact Form Emails

The contact form works out of the box (submissions log to Vercel Function logs).
To receive emails, add **Resend** (free, easiest):

1. Sign up at [resend.com](https://resend.com) — free tier: 100 emails/day
2. Get your API key
3. In Vercel dashboard → **Settings → Environment Variables**:
   ```
   RESEND_API_KEY = re_your_key_here
   ```
4. In `src/app/api/contact/route.js`, uncomment the Resend block

---

## 💻 Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
jaytechnologies/
├── public/
│   └── logo.png              # Brand logo
├── src/
│   ├── app/
│   │   ├── layout.js         # Root layout + fonts
│   │   ├── page.js           # Main page (all sections)
│   │   ├── globals.css       # All styles
│   │   └── api/
│   │       └── contact/
│   │           └── route.js  # Contact form API
│   └── components/
│       ├── Navbar.js         # Sticky navbar
│       ├── FloatingTools.js  # Animated background canvas
│       ├── ContactForm.js    # Contact form with state
│       └── PortfolioClient.js# Portfolio with filter
├── next.config.js
├── package.json
└── jsconfig.json
```

---

## ✏️ Customising Content

| What to change | Where |
|---|---|
| Phone / Email | `src/app/page.js` → Contact section |
| Pricing plans | `src/app/page.js` → Pricing section |
| Portfolio items | `src/app/page.js` → `portfolio` array |
| Testimonials | `src/app/page.js` → `testimonials` array |
| Brand colors | `src/app/globals.css` → `:root` variables |
| Logo | Replace `public/logo.png` |

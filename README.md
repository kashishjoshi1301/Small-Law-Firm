# Atlantic Trial Attorneys — Next.js Application

Modern, prestigious, high-converting law firm website built with **Next.js (App Router)**, **React**, **TypeScript**, and modular mobile-responsive CSS.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## ⚡ Deployment to Vercel

1. Push this repository to GitHub or drag-and-drop the folder into Vercel.
2. Vercel automatically detects **Next.js**:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
3. Click **Deploy**. Vercel will install dependencies and deploy the live site with zero configuration!

---

## 📁 Architecture & Routes

- `/` (`app/page.tsx`): Homepage with Hero, Landmark Verdicts ($680M+), Practice Areas, Senior Counsel, 4-Pillar Trial Protocol, Comparison Cards, and Testimonials.
- `/practices` (`app/practices/page.tsx`): Practice Disciplines with interactive category filter.
- `/verdicts` (`app/verdicts/page.tsx`): Landmark Verdicts & Settlements with category filtering and Co-Counsel referral box.
- `/attorneys` (`app/attorneys/page.tsx`): Senior Trial Counsel profiles with interactive dossier modals.
- `/fees` (`app/fees/page.tsx`): Fee Transparency Policy with interactive fee estimator calculator.
- `/contact` (`app/contact/page.tsx`): 3-step interactive case evaluation intake wizard with real-time validation and national office directory.

---

## 🎨 Design System

- **Primary**: Deep Admiralty Green (`#153B3A`)
- **Secondary**: Polished Bronze / Gold (`#BD967E`)
- **Background**: Soft Executive Alabaster (`#F3F0EB`)
- **Typography**: Playfair Display (Serif), Cinzel (Headings), Plus Jakarta Sans (Body)

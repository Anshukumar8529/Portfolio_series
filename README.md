# ANSHU — THE SERIES

A cinematic, streaming-inspired portfolio for **Anshu Kumar**: Software Engineer, Machine Learning Developer, and B.Tech CSE student at Lovely Professional University.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and is fully configured for deployment on GitHub Pages, Vercel, Netlify, or any static host.

## Central Data Configuration

**All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).** It is strictly generated from Anshu Kumar's verified resumes and actual projects.

| Section | Data Entry in `portfolio.ts` |
| --- | --- |
| Identity & Links | `profile` (Anshu Kumar, LPU, email, phone, LinkedIn, GitHub) |
| Projects & Originals | `projects` (CampusFix AI, Real Estate ML, Diabetes Risk, Poshan Tracker, Bank Management) |
| Achievements & Certs | `achievements` (Binary Blitz Hackathon), `certifications` (Oracle, Google, LPU, Fynd, CSE Pathshala) |
| Skills Universe | `skillCategories` (8 genres), `skillEvidence` (interactive cross-references) |
| My Journey | `seasons` (5 seasons spanning school, university, trainee development, and AI engineering) |
| Billboard Top 10 | `topPicks` |
| ▶ Play Intro Reel | `introSlides` |
| Resumes (Dual Download) | `generalResumePdf`, `specializedResumePdf` in `public/assets/` |

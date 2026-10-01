# Aryan Mishra — Portfolio

Personal site for Aryan Mishra, Junior DevOps Engineer. Built with React, Vite, and Tailwind CSS. Ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this folder to a Git repository.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. No extra environment variables are required.

## Update personal details

Edit `src/data.js` for email, phone, LinkedIn, GitHub, and project repository links. Keep `index.html` meta tags and JSON-LD in sync if the public profile text changes. The downloadable resume is `public/Aryan-Mishra-Resume.pdf`. Regenerate it with `node scripts/build-resume.mjs` after you change contact details in that script. After the site is live, add an absolute `link rel="canonical"` in `index.html`.

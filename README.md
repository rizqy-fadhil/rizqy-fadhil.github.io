# rizqy-fadhil.github.io

Personal portfolio of **Rizqy Fadhil Athallah**, AI Engineer & Full-Stack Developer.
Live: https://rizqy-fadhil.github.io

Built with Next.js (App Router, static export), TypeScript, Tailwind CSS v4, Framer Motion, Lucide & React Icons.

## Update content

All content (profile, journey, projects, skills, certifications) lives in **`src/data/portfolio.ts`**.
Edit that file, nothing else. Links set to `"#"` are placeholders and are hidden on the site.

Images go in `public/images/`, and the CV in `public/cv.pdf`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm start        # serve ./out locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `./out`
with `actions/deploy-pages`. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

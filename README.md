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

The default branch is **`master`**. Pushing to `master` (or running the workflow manually from the
Actions tab) triggers `.github/workflows/deploy.yml`, which builds the site and publishes `./out`
with `actions/deploy-pages`.

One-time setup:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Settings → Environments → github-pages → Deployment branches**: make sure `master` is allowed
   (if the environment was created earlier for another branch, it may only allow that one).

Typical flow: work on a feature branch → open a PR into `master` → merge → the site deploys automatically.

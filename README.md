# Dylan Pacitto Potapczuk Portfolio

Personal portfolio for Dylan Pacitto Potapczuk — product, operations, and engineering.

**Live site (after Pages is enabled):**  
https://Dylan-PacittoPotapczuk.github.io/Dylan-Pacitto-Potapczuk-Portfolio/

## Stack

- Vite + React + TypeScript
- Deployed with GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Resume

The Product resume ships as `public/resume.pdf` and is linked throughout the site as **Resume**.

## GitHub Pages setup

1. Merge this rebuild to `main` (or run the workflow from the default branch).
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Ensure the repo is **public** (required for free GitHub Pages on user accounts).
4. The workflow `.github/workflows/deploy-pages.yml` builds with base path `/Dylan-Pacitto-Potapczuk-Portfolio/`.

If the repository is renamed, update `base` in `vite.config.ts` to match the new repo name.

# Priyanshu Jain — Portfolio

A static personal portfolio for Priyanshu Jain, built with React, TypeScript, Vite, Tailwind CSS, Motion for React, and Lucide React.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The included workflow in `.github/workflows/deploy.yml` builds and deploys the `dist` directory whenever `main` is updated. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

For `pj1234567890.github.io`, the default root base path is correct. If this project is hosted in a repository named `portfolio`, set `VITE_BASE_PATH=/portfolio/` in the workflow build environment (or locally before running `npm run build`) so asset paths resolve correctly.

## Updating content

Project cards and skill groups live in `src/data.ts`. Update the typed data there when adding a project, changing a description, or replacing a link. Experience and education are kept in their section in `src/App.tsx` so the intentionally concise internship placeholder can be expanded when reliable details are available.

The portfolio intentionally does not include an email address because none was provided. Add one to the contact section only when an actual address is available.

# Abdul Basit Khan — Portfolio

Personal portfolio website for **Abdul Basit Khan**, DevOps & Cloud Engineer. Built with Next.js, Tailwind CSS, and Framer Motion. Auto-deployed to GitHub Pages on every push to `main`.

🌐 **Live:** [basitkhan32.github.io/portfolio](https://basitkhan32.github.io/portfolio/)

---

## Sections

- **Hero** — Name, title, tagline, GitHub / LinkedIn / Hire Me CTAs, stats bar
- **Skills & Technologies** — 9 categories: Cloud, Kubernetes, CI/CD, IaC, Observability, DevSecOps, Scripting, Deployment Strategies, Compliance
- **Work Experience** — NETS International Communications (Jul 2023–Present) + Gubloo Technologies
- **Portfolio Projects** — 4 featured open-source DevOps repos
- **Certifications** — AWS AI Practitioner (AIF-C01), AWS Solutions Architect (SAA-C03), CKA
- **Education** — BS Computer Engineering, NUTECH
- **Contact** — Email + WhatsApp CTA

---

## Featured Projects

| Repo | What it showcases |
|------|------------------|
| [terraform-aws-blueprints](https://github.com/basitkhan32/terraform-aws-blueprints) | Terraform modules — VPC, EKS Fargate, RDS, multi-env |
| [observability-stack-k8s](https://github.com/basitkhan32/observability-stack-k8s) | Prometheus, Grafana, Loki, Tempo, OpenTelemetry on K8s |
| [chaos-engineering-lab](https://github.com/basitkhan32/chaos-engineering-lab) | Litmus + Chaos Mesh experiments with SLO-gated CI |
| [internal-developer-platform](https://github.com/basitkhan32/internal-developer-platform) | Backstage IDP — catalog, TechDocs, scaffolder template |

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Language | TypeScript |
| Deployment | GitHub Pages (static export) |
| CI/CD | GitHub Actions |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Full single-page portfolio (all sections)
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── globals.css       # Global styles
└── layout/
    ├── navbar.tsx        # Sticky navbar with scroll-blur backdrop
    └── footer.tsx        # Social links footer
```

---

## Running Locally

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
# → http://localhost:3000
```

## Deployment

The site is deployed to GitHub Pages as a static export. Every push to `main` triggers the workflow automatically:

```
push to main
     ↓
.github/workflows/deploy.yml
     ↓
pnpm build  (next build → static export to /out)
     ↓
actions/deploy-pages  →  basitkhan32.github.io/portfolio
```

---

## Contact

| | |
|---|---|
| Email | work.basitkhan@gmail.com |
| LinkedIn | [linkedin.com/in/basit-pmp](https://linkedin.com/in/basit-pmp) |
| GitHub | [github.com/basitkhan32](https://github.com/basitkhan32) |
| WhatsApp | +92 300 0032320 |

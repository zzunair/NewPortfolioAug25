# Zunair Shahid — Portfolio

Portfolio site for a Shopify Plus developer, built with Next.js (App Router).

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS 4
- Nodemailer for the contact form

## Getting started

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

Other scripts:

```sh
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Environment variables

The contact form at `/contact` posts to `app/api/contact/route.ts`, which sends mail
through Gmail. Copy `.env.example` to `.env.local` for local development and set the
same three variables in your host's environment settings for production.

| Variable | Description |
| --- | --- |
| `EMAIL_USER` | Gmail address used to send the mail |
| `EMAIL_PASS` | Gmail [app password](https://support.google.com/accounts/answer/185833), not the account password |
| `RECIPIENT_EMAIL` | Address that receives contact form submissions |

Without these set, the form returns a 500 and no mail is sent. Everything else on the
site is statically prerendered and works without configuration.

## Project structure

```
app/                routes, layouts, and the contact API route
  case-study/[slug] generated from lib/data/projects.ts
  blog/[slug]       generated from lib/data/blog.ts
components/         shared UI components
lib/data/           site content (projects, blog, services, testimonials, faq, nav)
public/images/      project screenshots and other assets
```

Content is plain TypeScript data, so adding a project or post means editing the
matching file in `lib/data/` — the static routes are generated from it at build time.

## Deployment

Deployed on Vercel. `vercel.json` pins the framework to `nextjs` so the build output
is read from `.next`. If Vercel reports a missing output directory, clear any
**Output Directory** override in Project Settings → Build & Development Settings;
Next.js projects should use the auto-detected value.

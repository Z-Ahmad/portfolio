# zaki ahmad — portfolio

Personal site: a short manifesto, project essays, and a contact form. No analytics, no cookies.

**Stack:** Next.js 16 (App Router, fully static except the contact action), React 19, TypeScript, Tailwind CSS 4, Motion, Resend + React Email. Hosted on Vercel.

## Run it

Requires Node 22+ (`.nvmrc`).

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY to enable the contact form
npm run dev                  # http://localhost:3000
```

`npm run build` · `npm run lint` · `npm run typecheck`

## Add a project

1. Write the essay as a component in `content/work/<slug>.tsx` (plain JSX; `.essay` in `app/globals.css` styles it).
2. Put a cover image in `public/work/`.
3. Add an entry to `lib/work.ts`. The index, `/work/<slug>`, and the sitemap all read from that list.

Profile copy, principles, and experience live in `lib/site.ts`. Colors and type are tokens at the top of `app/globals.css`.

## Notes

- Without `RESEND_API_KEY` the form fails politely and points people to email.
- The form has a honeypot field and server-side validation; mail is sent from `onboarding@resend.dev` until a domain is verified in Resend.
- Old `/projects/:slug` URLs permanently redirect to `/work/:slug`.
- Next.js collects anonymous build telemetry by default; opt out locally with `npx next telemetry disable`.

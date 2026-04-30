# Upward Physio

Production-ready Next.js 15 marketing site for Upward Physio — a premium concierge physical therapy practice. Built with the App Router, TypeScript (strict), Tailwind CSS, Framer Motion, and Resend for contact form emails.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables and fill them in
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Tech stack

- **Next.js 15** — App Router, React Server Components
- **React 19** (RC)
- **TypeScript** in strict mode
- **Tailwind CSS** with custom brand palette
- **Framer Motion** for scroll-triggered and entry animations
- **Lucide React** for icons
- **Resend** for transactional email delivery

---

## Project structure

```
upward-physio/
├── app/
│   ├── (site)/                  # Route group — wraps marketing pages with Navbar/Footer
│   │   ├── layout.tsx           # Adds Navbar + Footer to every page in this group
│   │   ├── page.tsx             # Home
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx         # Blog index
│   │   │   └── [slug]/page.tsx  # Dynamic post page
│   │   └── contact/page.tsx
│   ├── api/contact/route.ts     # POST endpoint — sends email via Resend
│   ├── layout.tsx               # Root layout, font loading, metadata
│   └── globals.css
├── components/
│   ├── ContactForm.tsx          # Client component — form state + submission
│   ├── Footer.tsx
│   ├── Navbar.tsx               # Sticky nav with scroll behavior + mobile menu
│   ├── Reveal.tsx               # Fade-up scroll animation wrapper
│   ├── SectionHeading.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCarousel.tsx  # Auto-advancing carousel
├── lib/
│   ├── blog.ts                  # In-file sample posts (replace with MDX/CMS later)
│   └── utils.ts                 # `cn` Tailwind merge helper
├── public/
│   └── logo.png                 # Brand logo (used in Navbar + Footer)
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

### Why the `(site)` route group?

Anything inside `app/(site)/` shares the `Navbar + Footer` layout but the `(site)` segment doesn't appear in URLs — so `app/(site)/about/page.tsx` renders at `/about`. This is the cleanest way to apply a shared layout to most-but-not-all pages without affecting routing.

---

## Adding the logo

The provided logo PNG has already been placed at `public/logo.png`.

**To replace it later** (recommended: vector SVG for best scaling):
1. Drop your file into `public/` as `logo.svg` (or `logo.png`)
2. Update the `src` in `components/Navbar.tsx` and `components/Footer.tsx` if the filename or extension differs
3. SVG is strongly recommended for production — it scales without quality loss and is much smaller

---

## Configuring Resend (contact form)

The contact form posts to `/api/contact`, which uses [Resend](https://resend.com) to deliver email.

### 1. Create a Resend account and get an API key

- Sign up at [resend.com](https://resend.com)
- Create an API key in the dashboard
- Copy it into `.env.local` as `RESEND_API_KEY`

### 2. Configure the FROM address

For **local dev / testing**, use Resend's sandbox sender:

```
FROM_EMAIL=onboarding@resend.dev
```

For **production**, you must verify a domain in Resend's dashboard (DNS records — takes ~5 minutes). Then use a real address on that domain:

```
FROM_EMAIL=hello@upwardphysio.com
```

### 3. Set the destination

```
TO_EMAIL=info@upwardphysio.com
```

This is where contact form submissions are delivered.

### 4. Test it

Run `npm run dev`, navigate to `/contact`, and submit the form. Check your inbox (and spam folder for first-time sends).

---

## Deploy to Vercel

The fastest path:

1. **Push this code to GitHub** — see the GitHub section below
2. Go to [vercel.com/new](https://vercel.com/new), import the repo
3. Vercel auto-detects Next.js — accept the defaults
4. **Add environment variables** in the Vercel dashboard (Settings → Environment Variables):
   - `RESEND_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`
5. Click Deploy. Site goes live at `your-project.vercel.app`
6. Add your custom domain in Settings → Domains

### Production checklist

- [ ] Resend domain verified (so emails don't go to spam)
- [ ] All env vars set in Vercel for **Production, Preview, and Development**
- [ ] Replace placeholder team photos in `app/(site)/about/page.tsx` (currently using Unsplash)
- [ ] Replace blog post placeholder content in `lib/blog.ts`
- [ ] Replace map iframe with your real address embed in `app/(site)/contact/page.tsx`
- [ ] Update phone number, address, and email throughout (search for `(305) 555-0100` and `123 Wellness Way`)
- [ ] Update social links in `Footer.tsx`
- [ ] Update `metadataBase` URL in `app/layout.tsx`

---

## GitHub setup

```bash
# In project root
git init
git add .
git commit -m "Initial commit: Upward Physio site"

# Create repo on GitHub, then:
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/upward-physio.git
git push -u origin main
```

`.env.local` is already in `.gitignore` — your API keys won't leak.

---

## Common tasks

### Add a new blog post

Edit `lib/blog.ts` and add an entry to the `posts` array. The page will auto-generate at `/blog/your-slug`.

For richer content (real markdown, syntax highlighting, embedded media), swap to MDX with [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) — let me know if you want a guided walkthrough.

### Tweak brand colors

Edit `tailwind.config.ts` (the `theme.extend.colors` block) and `app/globals.css` (`:root` CSS variables). Changing both keeps Tailwind classes and any custom CSS in sync.

### Run type-checking

```bash
npm run type-check
```

---

## Scripts

| Command              | What it does                              |
| -------------------- | ----------------------------------------- |
| `npm run dev`        | Start dev server with hot reload          |
| `npm run build`      | Production build                          |
| `npm run start`      | Run the production build locally          |
| `npm run lint`       | ESLint                                    |
| `npm run type-check` | Verify TypeScript without emitting files  |

---

## Notes for hobbyist developers

A few things that may save you time as you learn this stack:

- **Server vs Client Components**: every file in `app/` is a Server Component by default. They run on the server, can `await` directly, and can't use `useState` / `useEffect` / event handlers. Add `"use client"` at the top of a file to opt into a Client Component (Navbar, ContactForm, TestimonialCarousel all do this — they need browser-side state).
- **`async params` in Next 15**: dynamic route params are now Promises. See `app/(site)/blog/[slug]/page.tsx` — `params` is awaited. This is a recent change worth knowing about.
- **Image optimization**: the `<Image>` component from `next/image` does heavy lifting (lazy loading, responsive sizing, format conversion). Always provide `alt` text and either fixed dimensions or `fill` + `sizes`.
- **Why no shadcn/ui?**: The original prompt suggested it, but shadcn requires `npx shadcn@latest init` to run interactively in your terminal — I can't do that for you. Custom Tailwind components keep the bundle smaller and the code easier to read. Add shadcn later if you want fancy modals or command palettes.

---

Built with care. Now go make people move better. 🚀

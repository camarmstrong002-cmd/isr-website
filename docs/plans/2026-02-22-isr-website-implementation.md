# ISR Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert the ISR static HTML site into a Next.js 15 + Sanity CMS application deployed on Vercel.

**Architecture:** Next.js 15 App Router with static generation. Sanity v3 for content management. Resend for contact form emails. All content initially hardcoded in React components, then migrated to Sanity in a later phase.

**Tech Stack:** Next.js 15, React 19, TypeScript, Sanity v3, Resend, Vercel

**Source files:** The original HTML files are at `/tmp/irs-files/` (extracted from `/Users/cameronarmstrong/Downloads/files.zip`). Reference these for exact content and styles.

---

## Phase 1: Project Scaffolding

### Task 1: Initialize Next.js project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, etc. (via create-next-app)
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`

**Step 1: Create Next.js app**

Run from `/Users/cameronarmstrong/Documents`:
```bash
npx create-next-app@latest isr-website --typescript --tailwind=no --eslint --app --src-dir --import-alias="@/*" --use-npm
```

Note: If the directory already exists (from the design doc commit), delete everything except `.git/` and `docs/` first, then run create-next-app in a temp location and move files over. Alternatively, initialize manually.

**Step 2: Verify it runs**

```bash
cd /Users/cameronarmstrong/Documents/isr-website
npm run dev
```
Expected: Dev server starts on localhost:3000

**Step 3: Clean up default files**

Remove default Next.js boilerplate content from:
- `src/app/page.tsx` — replace with simple "ISR" placeholder
- `src/app/globals.css` — clear default styles
- Remove `public/next.svg`, `public/vercel.svg`, `public/file.svg`, `public/globe.svg`, `public/window.svg`

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: initialize Next.js 15 project"
```

---

### Task 2: Set up design system (fonts + CSS custom properties)

**Files:**
- Create: `src/lib/fonts.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Step 1: Create font configuration**

Create `src/lib/fonts.ts`:
```typescript
import { Fraunces, DM_Sans } from 'next/font/google'

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz'],
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

**Step 2: Write globals.css with design tokens**

Copy the full `:root` CSS custom properties block from `/tmp/irs-files/index.html` (lines 18-68) into `src/app/globals.css`. Include:
- All `--navy-*` color variables
- All `--bg-*`, `--text-*`, `--accent-*`, `--border-*` variables
- `--font-display` and `--font-body` (these will be set by next/font classes)
- All `--sp-*` spacing variables
- `--max-w` and `--ease`
- Base reset: `*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }`
- `html`, `body`, `img`, `a` base styles
- `.container` class
- Scroll reveal classes (`.reveal`, `.visible`, `.rd1`-`.rd5`)
- `.overline` and `.overline-dark` classes
- All responsive breakpoints

Also copy these shared component styles from the source HTML:
- `.btn`, `.btn-light`, `.btn-ghost` button styles
- `.card`, `.card-grid`, `.card-arrow` styles
- `.page-hero` styles
- `.content-section`, `.section-heading`, `.prose` styles
- `.member-grid`, `.member-item` styles
- `.people-grid`, `.person-card` styles
- `.agenda-item`, `.agenda-time`, `.agenda-desc` styles
- `.meeting-notes` styles
- All responsive `@media` queries

**Step 3: Wire fonts into root layout**

Update `src/app/layout.tsx`:
```tsx
import type { Metadata } from 'next'
import { fraunces, dmSans } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'ISR — International Spine Registries',
  description: 'Collaboration for better spine care through standardized data collection across international registries.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

**Step 4: Verify fonts load**

Run `npm run dev`, check browser — text should render in DM Sans, headings in Fraunces.

**Step 5: Commit**

```bash
git add src/lib/fonts.ts src/app/globals.css src/app/layout.tsx
git commit -m "feat: add design system — fonts, CSS tokens, base styles"
```

---

### Task 3: Extract logo image

**Files:**
- Create: `public/isr-logo.png`

**Step 1: Extract base64 logo from source HTML**

The logo is embedded as a base64 data URI in the `<img>` tags inside `.nav-logo-icon` and `.hero-logo-img` in `/tmp/irs-files/index.html`. Find the largest instance (the hero logo, ~300x300). Extract the base64 string and decode it:

```bash
# Find the base64 image data in the HTML and extract it
grep -oP 'src="data:image/png;base64,\K[^"]+' /tmp/irs-files/index.html | head -1 | base64 -d > /Users/cameronarmstrong/Documents/isr-website/public/isr-logo.png
```

If grep doesn't work cleanly, open the HTML, find the `src="data:image/png;base64,..."` attribute in the hero logo `<img>` tag, copy the base64 string, and decode it manually.

**Step 2: Verify the image**

```bash
file public/isr-logo.png
```
Expected: PNG image data

**Step 3: Commit**

```bash
git add public/isr-logo.png
git commit -m "feat: extract ISR logo from source HTML"
```

---

## Phase 2: Shared Layout Components

### Task 4: Build Nav component

**Files:**
- Create: `src/components/Nav.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create Nav component**

Create `src/components/Nav.tsx` as a client component (`'use client'`). Reference `/tmp/irs-files/index.html` for the exact nav HTML structure (look for `.nav`, `.nav-inner`, `.nav-logo`, `.nav-links`). The nav must include:
- Fixed positioning with frosted glass effect on scroll (use `useEffect` + scroll listener to toggle `.scrolled` class)
- Logo icon (use `/isr-logo.png`) + "ISR" text
- Navigation links: Home, Agenda Setting Group, Member Organisations, Meetings, About, Library
- "Contact Us" CTA button (links to `/about`)
- Mobile hamburger toggle (hidden on desktop, shows/hides nav links on mobile)
- Use Next.js `<Link>` for all internal navigation
- Use `usePathname()` to set `.active` class on current page link

Add Nav CSS styles to `globals.css` if not already included (`.nav`, `.nav.scrolled`, `.nav-inner`, `.nav-logo`, `.nav-links`, `.nav-cta`, `.mobile-toggle`, mobile menu styles).

**Step 2: Add Nav to root layout**

Update `src/app/layout.tsx` to import and render `<Nav />` above `{children}`.

**Step 3: Verify**

Run dev server, check nav renders, links work, scroll effect works, mobile menu toggles.

**Step 4: Commit**

```bash
git add src/components/Nav.tsx src/app/layout.tsx src/app/globals.css
git commit -m "feat: add Nav component with scroll effect and mobile menu"
```

---

### Task 5: Build Footer component

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create Footer component**

Create `src/components/Footer.tsx`. Reference `/tmp/irs-files/index.html` footer HTML (search for `.footer`). Include:
- 4-column grid: Brand column (logo + description), Navigation column, Meetings column, Resources column
- Footer bottom bar with copyright "2025 International Spine Registries" and "Conceived by ODEP"
- Use Next.js `<Link>` for internal links
- Logo icon uses `/isr-logo.png`

Footer CSS should already be in `globals.css` from Task 2.

**Step 2: Add Footer to root layout**

Update `src/app/layout.tsx` to render `<Footer />` below `{children}`.

**Step 3: Verify**

Check footer renders correctly on all viewport sizes.

**Step 4: Commit**

```bash
git add src/components/Footer.tsx src/app/layout.tsx
git commit -m "feat: add Footer component"
```

---

### Task 6: Build reusable UI components

**Files:**
- Create: `src/components/PageHero.tsx`
- Create: `src/components/ScrollReveal.tsx`
- Create: `src/components/Card.tsx`
- Create: `src/components/PersonCard.tsx`
- Create: `src/components/MemberItem.tsx`
- Create: `src/components/AgendaItem.tsx`

**Step 1: Create PageHero**

Server component. Props: `title: string`, `subtitle?: string`, `overline?: string`. Renders the dark navy banner used on all sub-pages. Reference `.page-hero` HTML in any sub-page source file.

**Step 2: Create ScrollReveal**

Client component (`'use client'`). Wraps children in a `<div className="reveal">` and uses `IntersectionObserver` to add `.visible` class when element enters viewport. Props: `delay?: number` (maps to `rd1`-`rd5` classes), `children: React.ReactNode`.

Reference the JS at the bottom of `/tmp/irs-files/index.html` for the observer logic.

**Step 3: Create Card**

Server component. Props: `title: string`, `description: string`, `href: string`. Renders the hover-lift card with arrow icon. Reference `.card` HTML from the homepage explore section.

**Step 4: Create PersonCard**

Server component. Props: `name: string`, `role: string`, `bio: string`. Reference `.person-card` from `agenda-setting-group.html`.

**Step 5: Create MemberItem**

Server component. Props: `name: string`. Reference `.member-item` from `member-organisations.html`.

**Step 6: Create AgendaItem**

Server component. Props: `time: string`, `description: string | React.ReactNode`. Reference `.agenda-item` from `vienna-2024.html`.

**Step 7: Verify**

Import and render a test instance of each component on the homepage to confirm they look correct.

**Step 8: Commit**

```bash
git add src/components/
git commit -m "feat: add reusable UI components — PageHero, ScrollReveal, Card, PersonCard, MemberItem, AgendaItem"
```

---

## Phase 3: Pages (Static Content)

Build all pages with hardcoded content first. Sanity integration comes in Phase 4.

### Task 7: Build Homepage

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css` (if homepage-specific styles needed)

**Step 1: Build the homepage**

Reference `/tmp/irs-files/index.html` body content. The homepage has these sections in order:
1. **Hero** — dark navy full-height section with "International Spine Registries" heading, subtitle, two CTA buttons ("Our Mission" anchor, "Explore ISR" anchor), and floating logo image
2. **Welcome** — "Collaboration is vital to better spine care" heading with body text
3. **Mission** — 2-column grid: left has heading + body text about data quality, right has blockquote
4. **Divider**
5. **History Timeline** — 4 milestone cards (Conception, Early Findings, MDR Introduction, Post-COVID London Meeting). Create a simple Timeline component or inline the timeline HTML.
6. **Next Step** — "From London to Frankfurt" section
7. **Pillars** — 3 agreement cards (Minimum Data Set, PROMs, Implant Library) on light background
8. **Goals** — "Maximizing the usefulness of data"
9. **Position Statements** — ISR Agenda Setting Group documents with checklist items
10. **Explore** — 6-card grid linking to other pages

Copy the exact text content from the source HTML. Use `<ScrollReveal>` wrappers where the source uses `.reveal` classes. Use `<Card>` for the explore grid. Use `<Link>` for internal navigation.

Add any homepage-specific CSS classes to `globals.css` (`.hero`, `.hero-grid`, `.hero-content`, `.hero-subtitle`, `.hero-actions`, `.hero-logo-area`, `.hero-logo-img`, `.welcome`, `.mission`, `.mission-grid`, `.mission-quote`, `.pillars`, `.pillars-header`, timeline styles, etc.).

**Step 2: Verify**

Dev server — homepage should visually match the original HTML file. Check scroll animations, hero layout, responsive behavior.

**Step 3: Commit**

```bash
git add src/app/page.tsx src/app/globals.css
git commit -m "feat: build homepage with all sections"
```

---

### Task 8: Build About page

**Files:**
- Create: `src/app/about/page.tsx`

**Step 1: Build the About page**

Reference `/tmp/irs-files/about.html` body content. Includes:
- `<PageHero title="About" subtitle="Understanding who we are and how we started" />`
- "Who are we?" content section with prose text
- "When did it start?" content section with prose text

Use `<PageHero>`, `<ScrollReveal>`, and the `.content-section`, `.section-heading`, `.prose` CSS classes.

Add page-level metadata:
```tsx
export const metadata = { title: 'ISR — About' }
```

**Step 2: Verify**

Check the page at `/about`.

**Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: build About page"
```

---

### Task 9: Build Agenda Setting Group page

**Files:**
- Create: `src/app/agenda-setting-group/page.tsx`

**Step 1: Build the page**

Reference `/tmp/irs-files/agenda-setting-group.html` body content. Includes:
- `<PageHero>` with title and subtitle
- Overview section explaining the ASG
- Members section — 12 `<PersonCard>` components in a `.people-grid`
- Facilitators section — 2 `<PersonCard>` components with longer bios

Copy exact names, roles, countries, and bio text from the source HTML.

**Step 2: Verify at `/agenda-setting-group`**

**Step 3: Commit**

```bash
git add src/app/agenda-setting-group/page.tsx
git commit -m "feat: build Agenda Setting Group page"
```

---

### Task 10: Build Member Organisations page

**Files:**
- Create: `src/app/member-organisations/page.tsx`

**Step 1: Build the page**

Reference `/tmp/irs-files/member-organisations.html`. Includes:
- `<PageHero>` with title and subtitle
- Three categorized sections: International (1 member), National (12 members), Non-National (1 member)
- Each member rendered as `<MemberItem>`

**Step 2: Verify at `/member-organisations`**

**Step 3: Commit**

```bash
git add src/app/member-organisations/page.tsx
git commit -m "feat: build Member Organisations page"
```

---

### Task 11: Build Meetings pages

**Files:**
- Create: `src/app/meetings/page.tsx`
- Create: `src/app/meetings/[slug]/page.tsx`

**Step 1: Build meetings listing page**

Reference `/tmp/irs-files/meetings.html`. Includes:
- `<PageHero>` with title and subtitle
- Next meeting notice (Copenhagen, EUROSPINE, October 2025)
- 3 meeting `<Card>` components linking to `/meetings/vienna-2024`, `/meetings/frankfurt-2023`, `/meetings/london-2022`

**Step 2: Build dynamic meeting page**

Create `src/app/meetings/[slug]/page.tsx`. For now, use a static data object mapping slugs to content. Use `generateStaticParams` to pre-render the 3 meeting pages.

Each meeting page needs:
- `<PageHero>` with meeting title, date, venue
- For Vienna and Frankfurt: agenda days with `<AgendaItem>` components
- For London: narrative content sections (Key Outcomes, Key Topics, Attendees, Conclusions) using `.meeting-notes` and `.prose` classes

Reference the 3 meeting source HTML files for exact content:
- `/tmp/irs-files/vienna-2024.html`
- `/tmp/irs-files/frankfurt-2023.html`
- `/tmp/irs-files/london-2022.html`

Create a data file `src/data/meetings.ts` to hold all meeting content as typed objects, keeping page components clean.

**Step 3: Verify all meeting routes**

**Step 4: Commit**

```bash
git add src/app/meetings/ src/data/meetings.ts
git commit -m "feat: build Meetings listing and individual meeting pages"
```

---

### Task 12: Build Library page

**Files:**
- Create: `src/app/library/page.tsx`

**Step 1: Build the page**

Reference `/tmp/irs-files/library.html`. Includes:
- `<PageHero>` with title and subtitle
- Introduction text
- Single document card: MedTech Europe Presentation

**Step 2: Verify at `/library`**

**Step 3: Commit**

```bash
git add src/app/library/page.tsx
git commit -m "feat: build Library page"
```

---

## Phase 4: Contact Form

### Task 13: Build contact form

**Files:**
- Create: `src/components/ContactForm.tsx`
- Create: `src/app/api/contact/route.ts`
- Modify: `src/app/about/page.tsx` (add form to bottom)

**Step 1: Install Resend**

```bash
npm install resend
```

**Step 2: Create ContactForm component**

Client component (`'use client'`). Fields:
- Name (required, text input)
- Email (required, email input)
- Organisation (optional, text input)
- Message (required, textarea)

Use native HTML form validation. On submit, POST to `/api/contact` via fetch. Show loading state, success message, or error message. Style using the existing design system (navy buttons, card-style form container, DM Sans font).

Add contact form CSS to `globals.css`.

**Step 3: Create API route**

Create `src/app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, organisation, message } = await request.json()

  // Basic server-side validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'ISR Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `ISR Contact: ${name}${organisation ? ` (${organisation})` : ''}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation || 'N/A'}\n\nMessage:\n${message}`,
    })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
```

**Step 4: Add form to About page**

Add `<ContactForm />` at the bottom of the About page, in a new content section with heading "Get in Touch".

**Step 5: Create `.env.local`**

```
RESEND_API_KEY=re_placeholder
CONTACT_EMAIL=contact@example.com
```

Add `.env.local` to `.gitignore` (should already be there from create-next-app).

**Step 6: Verify form renders and submits**

Test with placeholder API key — form should render, submit, and show error (since key is placeholder). The form UI and validation should work.

**Step 7: Commit**

```bash
git add src/components/ContactForm.tsx src/app/api/contact/route.ts src/app/about/page.tsx src/app/globals.css
git commit -m "feat: add contact form with Resend email integration"
```

---

## Phase 5: Sanity CMS Integration

### Task 14: Set up Sanity

**Files:**
- Create: `sanity.config.ts` (project root)
- Create: `sanity/schemas/meeting.ts`
- Create: `sanity/schemas/member.ts`
- Create: `sanity/schemas/person.ts`
- Create: `sanity/schemas/libraryDocument.ts`
- Create: `sanity/schemas/page.ts`
- Create: `sanity/schemas/index.ts`
- Create: `src/app/studio/[[...tool]]/page.tsx`
- Create: `src/lib/sanity.ts`

**Step 1: Install Sanity packages**

```bash
npm install sanity next-sanity @sanity/image-url @sanity/vision
```

**Step 2: Create a Sanity project**

The developer needs to create a Sanity project at sanity.io/manage and note the project ID. For now, use a placeholder.

Add to `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token
```

**Step 3: Create Sanity schemas**

Create each schema file based on the content models in the design doc:

`sanity/schemas/meeting.ts` — defineType with fields: title, slug, date, location, venue, description, agendaDays (array of objects with dayTitle, room, items array), notes, attendees, conclusions

`sanity/schemas/member.ts` — defineType with fields: name, category (list of international/national/non-national), country, order

`sanity/schemas/person.ts` — defineType with fields: name, role, country, bio (block), group (list of member/facilitator), order

`sanity/schemas/libraryDocument.ts` — defineType with fields: title, description, file, publishedAt

`sanity/schemas/page.ts` — defineType with fields: title, slug, heroSubtitle, body (block)

`sanity/schemas/index.ts` — export all schemas as array

**Step 4: Create Sanity config**

Create `sanity.config.ts` at project root:
```typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'isr-website',
  title: 'ISR Website',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})
```

**Step 5: Create Sanity Studio route**

Create `src/app/studio/[[...tool]]/page.tsx` to embed Sanity Studio at `/studio`:
```tsx
'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

**Step 6: Create Sanity client library**

Create `src/lib/sanity.ts`:
```typescript
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
})
```

**Step 7: Update next.config.ts for Sanity**

Add Sanity image hostname to `next.config.ts` images config if needed.

**Step 8: Verify Studio loads**

Run dev server, navigate to `/studio`. It should load the Sanity Studio interface (may show auth prompt if project ID is placeholder).

**Step 9: Commit**

```bash
git add sanity/ sanity.config.ts src/app/studio/ src/lib/sanity.ts next.config.ts .env.local.example
git commit -m "feat: set up Sanity CMS with schemas and embedded Studio"
```

---

### Task 15: Migrate pages to fetch from Sanity

**Files:**
- Modify: `src/app/member-organisations/page.tsx`
- Modify: `src/app/agenda-setting-group/page.tsx`
- Modify: `src/app/meetings/page.tsx`
- Modify: `src/app/meetings/[slug]/page.tsx`
- Modify: `src/app/library/page.tsx`
- Modify: `src/lib/sanity.ts` (add query functions)

**Step 1: Add GROQ queries to sanity.ts**

Add typed query functions for each content type:
```typescript
export async function getMembers() {
  return client.fetch(`*[_type == "member"] | order(order asc)`)
}
export async function getPersons(group: string) {
  return client.fetch(`*[_type == "person" && group == $group] | order(order asc)`, { group })
}
export async function getMeetings() {
  return client.fetch(`*[_type == "meeting"] | order(date desc)`)
}
export async function getMeeting(slug: string) {
  return client.fetch(`*[_type == "meeting" && slug.current == $slug][0]`, { slug })
}
export async function getLibraryDocuments() {
  return client.fetch(`*[_type == "libraryDocument"] | order(publishedAt desc)`)
}
```

**Step 2: Update each page to fetch from Sanity**

For each page, replace hardcoded content with Sanity queries. Use `async` server components to fetch data at build time. Keep the hardcoded content as fallback initially — if Sanity returns empty results, fall back to static data.

**Step 3: Add revalidation tags**

Add `{ next: { tags: ['meetings'] } }` etc. to fetch calls for on-demand revalidation.

**Step 4: Create revalidation webhook route**

Create `src/app/api/revalidate/route.ts`:
```typescript
import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const type = body?._type
  if (type) revalidateTag(type)
  return NextResponse.json({ revalidated: true })
}
```

**Step 5: Verify pages still render with static fallback**

**Step 6: Commit**

```bash
git add src/lib/sanity.ts src/app/
git commit -m "feat: migrate pages to Sanity CMS with static fallback"
```

---

## Phase 6: Final Polish

### Task 16: SEO and metadata

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: Each page file (add metadata exports)
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

**Step 1: Add metadata to all pages**

Each page should export a `metadata` object with appropriate `title` and `description`.

**Step 2: Create sitemap.ts**

```typescript
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://isr-website.vercel.app'
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    // ... all routes
  ]
}
```

**Step 3: Create robots.ts**

```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/studio/' },
    sitemap: 'https://isr-website.vercel.app/sitemap.xml',
  }
}
```

**Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts src/app/
git commit -m "feat: add SEO metadata, sitemap, and robots.txt"
```

---

### Task 17: Production build verification

**Step 1: Run production build**

```bash
npm run build
```

Fix any TypeScript or build errors.

**Step 2: Test production server**

```bash
npm run start
```

Navigate through all pages, test contact form, verify no console errors.

**Step 3: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve production build issues"
```

---

### Task 18: Deployment setup

**Files:**
- Create: `.env.local.example`
- Create: `README.md` (if explicitly requested by user)

**Step 1: Create env example file**

Create `.env.local.example` with all required env vars (no values):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
RESEND_API_KEY=
CONTACT_EMAIL=
```

**Step 2: Verify .gitignore**

Ensure `.env.local` is in `.gitignore`.

**Step 3: Final commit**

```bash
git add .env.local.example .gitignore
git commit -m "chore: add env example and verify gitignore"
```

**Step 4: Deploy to Vercel**

Guide user through:
1. Push to GitHub: `git remote add origin <repo-url> && git push -u origin main`
2. Import project in Vercel dashboard
3. Set environment variables in Vercel project settings
4. Set up Sanity webhook pointing to `/api/revalidate`

---

## Task Summary

| # | Task | Phase | Estimated Complexity |
|---|------|-------|---------------------|
| 1 | Initialize Next.js project | Scaffolding | Small |
| 2 | Design system (fonts + CSS) | Scaffolding | Medium |
| 3 | Extract logo image | Scaffolding | Small |
| 4 | Nav component | Layout | Medium |
| 5 | Footer component | Layout | Medium |
| 6 | Reusable UI components | Layout | Medium |
| 7 | Homepage | Pages | Large |
| 8 | About page | Pages | Small |
| 9 | Agenda Setting Group page | Pages | Medium |
| 10 | Member Organisations page | Pages | Small |
| 11 | Meetings pages | Pages | Large |
| 12 | Library page | Pages | Small |
| 13 | Contact form | Form | Medium |
| 14 | Sanity setup | CMS | Medium |
| 15 | Migrate to Sanity | CMS | Large |
| 16 | SEO and metadata | Polish | Small |
| 17 | Production build | Polish | Small |
| 18 | Deployment setup | Polish | Small |

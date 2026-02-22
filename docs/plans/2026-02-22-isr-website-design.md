# ISR Website — Design Document

**Date**: 2026-02-22
**Status**: Approved

## Overview

Rebuild the International Spine Registries (ISR) website as a Next.js 15 application with Sanity CMS for content management, deployed on Vercel. The existing 9-page static HTML site is converted into a component-based React application while preserving the current design system exactly.

## Goals

1. Preserve the existing visual design and content exactly
2. Extract shared layout (nav, footer, styles) into reusable components
3. Enable non-technical team members to update content via Sanity Studio
4. Add a working contact form
5. Deploy on Vercel with automatic rebuilds on content changes

## Architecture

```
Browser → Vercel CDN → Next.js (Static HTML)
                           ↑ build-time fetch
                       Sanity CMS
                           ↑ content editing
                       Sanity Studio
```

- **Next.js 15** with App Router, static generation (`generateStaticParams`)
- **Sanity v3** headless CMS with embedded Studio
- **Vercel** hosting with on-demand revalidation via Sanity webhook
- **Resend** for contact form email delivery

## Pages

| Route | Source File | Content |
|-------|-----------|---------|
| `/` | `index.html` | Homepage — hero, mission, history timeline, pillars, position statements, explore grid |
| `/about` | `about.html` | Who we are, when it started |
| `/agenda-setting-group` | `agenda-setting-group.html` | Working group overview, 12 member profiles, 2 facilitator bios |
| `/member-organisations` | `member-organisations.html` | 14 member registries in 3 categories |
| `/meetings` | `meetings.html` | Meeting listing cards, next meeting notice |
| `/meetings/vienna-2024` | `vienna-2024.html` | 2-day agenda with detailed time slots |
| `/meetings/frankfurt-2023` | `frankfurt-2023.html` | 2-day agenda with detailed time slots |
| `/meetings/london-2022` | `london-2022.html` | Key outcomes, topics, attendees, conclusions |
| `/library` | `library.html` | Publications and reference documents |

## Project Structure

```
isr-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout: Nav + Footer
│   │   ├── page.tsx                # Homepage
│   │   ├── about/page.tsx
│   │   ├── agenda-setting-group/page.tsx
│   │   ├── member-organisations/page.tsx
│   │   ├── meetings/
│   │   │   ├── page.tsx            # Meetings listing
│   │   │   └── [slug]/page.tsx     # Individual meeting
│   │   ├── library/page.tsx
│   │   └── api/contact/route.ts    # Contact form POST handler
│   ├── components/
│   │   ├── Nav.tsx                 # Fixed nav with scroll behavior + mobile menu
│   │   ├── Footer.tsx              # 4-column footer
│   │   ├── PageHero.tsx            # Dark navy hero banner for sub-pages
│   │   ├── ScrollReveal.tsx        # Intersection Observer fade-in wrapper
│   │   ├── Card.tsx                # Hover-lift card with arrow
│   │   ├── PersonCard.tsx          # Name, role, bio
│   │   ├── MemberItem.tsx          # Registry name pill
│   │   ├── AgendaItem.tsx          # Time + description row
│   │   ├── Timeline.tsx            # Homepage history timeline
│   │   └── ContactForm.tsx         # Name, email, org, message form
│   ├── lib/
│   │   ├── sanity.ts               # Sanity client, queries, types
│   │   └── fonts.ts                # next/font/google — Fraunces + DM Sans
│   └── styles/
│       └── globals.css             # CSS custom properties + base styles
├── sanity/
│   ├── schemas/
│   │   ├── meeting.ts              # Meeting content type
│   │   ├── member.ts               # Member organisation
│   │   ├── person.ts               # ASG member / facilitator
│   │   ├── libraryDocument.ts      # PDF/document uploads
│   │   └── page.ts                 # Generic rich-text page
│   └── sanity.config.ts
├── public/
│   └── isr-logo.png                # Extracted from base64
├── package.json
├── tsconfig.json
├── next.config.ts
└── .env.local                      # Sanity project ID, dataset, Resend API key
```

## Sanity Content Models

### Meeting
- `title`: string
- `slug`: slug
- `date`: date
- `location`: string (e.g. "Vienna, Austria")
- `venue`: string (e.g. "Reed Messe Wien")
- `description`: text
- `agendaDays`: array of objects
  - `dayTitle`: string (e.g. "Thursday 3rd October")
  - `room`: string
  - `items`: array of { time: string, description: portable text }
- `notes`: portable text (for London-style narrative content)
- `attendees`: portable text (for London-style attendee lists)
- `conclusions`: portable text

### Member Organisation
- `name`: string
- `category`: string enum (international | national | non-national)
- `country`: string (optional)
- `order`: number (for display sorting)

### Person
- `name`: string
- `role`: string
- `country`: string
- `bio`: portable text
- `group`: string enum (member | facilitator)
- `order`: number

### Library Document
- `title`: string
- `description`: text
- `file`: file (PDF upload)
- `publishedAt`: date

### Page
- `title`: string
- `slug`: slug
- `heroSubtitle`: string
- `body`: portable text

## Design System

Preserved exactly from existing HTML files.

### Colors
- Navy: `#212f4a` (brand primary, derived from logo)
- Navy scale: 90/70/50/30/15/08/04 variants
- Background: `#fafbfc`
- Card background: `#ffffff`
- Accent: `#3d6cb4`

### Typography
- Display: Fraunces (serif) — headings, logo text
- Body: DM Sans (sans-serif) — body text, nav, labels
- Loaded via `next/font/google` for zero layout shift

### Spacing
- 8px base: 4/8/12/16/24/32/48/64/96/128/160px scale

### Components
- Fixed nav with frosted glass on scroll
- Scroll-reveal fade-up animations (Intersection Observer)
- Cards with hover lift + border highlight
- Dark navy page hero banners
- Overline labels (uppercase, tracked, accent color)

## Contact Form

- Fields: Name (required), Email (required), Organisation, Message (required)
- Client-side validation
- POST to `/api/contact` Next.js route handler
- Server sends email via Resend API
- Returns JSON success/error
- UI shows success confirmation or error message

## Deployment

- Vercel project linked to GitHub repository
- Automatic deploys on push to `main`
- Sanity webhook triggers on-demand revalidation (`revalidateTag`)
- Environment variables: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`, `RESEND_API_KEY`, `CONTACT_EMAIL`

## Out of Scope

- Authentication / user accounts
- Search functionality
- Multi-language support
- Analytics (can be added later via Vercel Analytics)
- Blog / news section

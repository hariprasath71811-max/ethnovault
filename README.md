# EthnoVault

**Living Indigenous Knowledge Archive** · EthnoHack 2026 submission

EthnoVault is a consent-first, community-governed archive for oral traditions, Indigenous languages, plant wisdom, and craft. It is a fully working front-end experience built to show what an archive looks like when the community keeps the keys: verified provenance, attributed audio, elder-approved translations, and a submission pipeline that publishes only after council review.

> **Demo notice:** audio playback, translations, uploads, endorsements, and council actions are simulated in the browser. The records are illustrative composites created for the hackathon — they are not real community records, and no real Indigenous knowledge is reproduced here.

**Live demo:** https://hariprasath71811-max.github.io/ethnovault/  
**Repository:** https://github.com/hariprasath71811-max/ethnovault  
**Demo video:** https://hariprasath71811-max.github.io/ethnovault/ethnovault_demo.mp4

---

## Overview

| | |
|---|---|
| **Project** | EthnoVault — Living Indigenous Knowledge Archive |
| **Event** | EthnoHack 2026 |
| **Type** | Static single-page web app (no build step, no backend) |
| **Status** | Interactive prototype / hackathon submission |
| **Live** | https://hariprasath71811-max.github.io/ethnovault/ |
| **Preview** | `http://localhost:8123` |

---

## Problem statement

Indigenous knowledge systems — oral histories, language, ethnopharmacology, land stewardship, and craft — are disappearing faster than they can be documented. At the same time, conventional digitisation often repeats a colonial pattern: outside institutions extract recordings, strip context, claim ownership, and publish without consent.

Communities need an archive that is:

- **Sovereign** — the originating community decides what is public, private, or withdrawn.
- **Attributed** — every record names its keepers, language, and reuse terms.
- **Verified** — knowledge is reviewed by elders and culture-bearers, not by anonymous moderators.
- **Living** — records can be updated, translated, contextualised, and removed over time.

## Solution

EthnoVault models the full lifecycle of respectful stewardship in one interface:

1. **Discover** records through a searchable, filterable archive and an interactive heritage map.
2. **Listen** to field recordings in an Oral Studio with original-language and English transcripts.
3. **Contribute** knowledge through a guided submission form with attribution and consent.
4. **Verify** new records through an Elder Council quorum before they are published.
5. **Withdraw** at any time — consent is revocable by design.

The prototype demonstrates this with 10 published records, 2 pending records, 4 featured recordings, 10 regional map pins, live filtering, and persistent local state.

---

## Core features

### 1. Ethnopharmacology repository

A dedicated knowledge category for plant medicine and land-based wisdom (labelled **Ethnomedicine** in the UI). Records carry the community, region, language, contributor, recording date, rights statement, and use context — never just a plant name. Entries such as Amazonian ayahuasca botany and Quechua potato planting wisdom show how ecological knowledge is inseparable from reciprocity, seasonality, and consent.

- Category filtering with live counts
- Region + status metadata on every card
- "Elder verified" and "Pending review" seals
- Explicit rights and attribution lines

### 2. Oral Studio

A featured audio experience for listening and translation:

- Simulated field-audio playback with play/pause, ±10-second skip, 0.75×–1.5× speed, and scrubbable waveform
- Keyboard-accessible waveform slider (`role="slider"`, arrow-key seeking)
- Original-language transcript ↔ community-approved English translation toggle
- Click any transcript line to seek to that moment
- Downloadable transcript text
- Four featured recordings across Sámi, Quechua, Toda, and Kānaka Maoli traditions

### 3. Elder Council verification

A trust layer modelled on community review rather than public voting:

- New submissions enter a **pending council verification** queue
- A **3-endorsement quorum** from elders/culture-bearers publishes a record
- Endorsement progress is visible as filled dots and counts
- Seeded pending records can be verified live in the demo
- Private-by-default wording and a clear "endorsement is trust, not a vote" framing

### 4. Submission pipeline

A complete, validated contribution flow:

- Knowledge type (Folklore, Dialect, Flora, Craft)
- Title, origin community, region, attribution name/collective
- Story/description with character counter and inline validation
- Optional simulated voice-recording upload with progress state
- Explicit consent + cultural attribution checkbox
- Success state with "View in archive" / "Submit another"
- New records appear immediately as pending and persist across reloads via `localStorage`

### Supporting experience features

- **Search** across titles, communities, regions, excerpts, and tags (e.g. "potato")
- **Interactive heritage map** with clickable regional pins that filter the archive
- **Story detail modals** with imagery, full narrative, transcript, metadata, and share
- **Impact stats** with animated counters: 3,420 stories · 48 dialects · 124 contributors · 100% attribution
- **Dark mode** with persisted preference
- **Responsive layout** verified from 390 px to 1440 px
- **Accessibility**: skip link, focus-trapped modals, Escape handling, ARIA labels, live-region toasts, reduced-motion support
- **Deep links** to records and the player

---

## Tech stack

| Layer | Choice |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Custom CSS3 + Tailwind CSS (Play CDN, inline theme config) |
| Behaviour | Vanilla JavaScript (ES2020, no framework) |
| Icons | Lucide (CDN) |
| Typography | Fraunces (display) + DM Sans (body) via Google Fonts |
| Imagery | Unsplash (remote, `loading="lazy"`) |
| Persistence | Browser `localStorage` (`ethnovault:records:v1`, `ethnovault-theme`) |
| Browser APIs | `requestAnimationFrame`, Pointer Events, IntersectionObserver, `Intl.NumberFormat`, `matchMedia`, Blob downloads, Clipboard |
| QA | Playwright + headless Chrome (interaction, layout, and overflow checks) |

**Architecture:** three static files, no build step, no server logic, no tracking. All state is local to the browser.

---

## Local setup

**Requirements:** a modern browser and Python 3 (or any static file server). Internet access is required for the Tailwind, Lucide, Google Fonts, and Unsplash CDNs.

```bash
# from the repository root
cd ethnovault
python -m http.server 8123
```

Open **http://localhost:8123**.

Alternatives:

```bash
# Node
npx serve .

# VS Code
Right-click index.html → "Open with Live Server"
```

Or simply open `index.html` directly — a server is recommended so that fonts, icons, and images load consistently.

### Resetting the demo

Submissions and endorsements persist in `localStorage`. To return to the seeded state, open DevTools → Application → Local Storage → delete `ethnovault:records:v1` (and `ethnovault-theme` for the theme), then reload.

---

## Project structure

```
ethnovault/
├── index.html      # Page structure, modals, player, forms, CDN setup, Tailwind theme
├── styles.css      # Design system, map, seals, waveforms, modals, responsive rules
├── app.js          # Records, rendering, filtering, audio engine, submissions, verification
├── README.md       # This file
├── SUBMISSION.md   # Devpost copy-paste submission text
└── DEMO_SCRIPT.md  # 2-minute screen-recording script
```

### Data model (per record)

`id`, `title`, `category`, `region`, `community`, `place`, `status`, `excerpt`, `story[]`, `image`, `language`, `contributor`, `recorded`, `duration`, `verified`, `rights`, `tags[]`, `map {x,y}`, `transcript {original[], english[]}`.

---

## Design principles

- **Consent before collection** — submissions require explicit consent and attribution.
- **Community owns the record** — rights and reuse terms are shown on every record.
- **Verification is relational** — elders decide, not engagement metrics.
- **Nothing is permanent** — communities can withdraw records at any time.
- **Warm, not clinical** — forest, sand, and terracotta palette; editorial typography; restrained motion.

---

## Accessibility & responsiveness

- Landmark regions, skip link, and logical heading order
- Focus trap and focus restoration in all modals; Escape closes
- Waveform seek slider operable by keyboard
- `aria-live` toast region and `aria-pressed` map pins
- `prefers-reduced-motion` disables non-essential animation
- Tested at 390, 768, 1024, 1280, and 1440 px with zero horizontal overflow and no console errors
- Navigation collapses to a labelled hamburger menu below 1280 px

---

## Deployment

The app is fully static and deploys anywhere:

**GitHub Pages**

```bash
git push -u origin main
# GitHub → Settings → Pages → Source: Deploy from a branch → main / (root)
```

Since the site lives in `ethnovault/`, either publish from that folder or move the three app files to the repository root for Pages.

**Netlify / Vercel:** drag-and-drop the `ethnovault` folder, or set it as the publish directory. No build command.

---

## Roadmap

- Real encrypted media storage with community-held keys and granular access policies
- Offline-first PWA for low-connectivity recording and playback
- Multi-language interface and community-authored translation workflows
- Elder identity and delegated verification roles (offline-first, reputation-scoped)
- Time-aligned transcripts, pronunciation guides, and language-learning views
- Export/withdrawal tooling that lets communities revoke and delete records completely
- Partnerships with local archives, language nests, and seed keepers

See `SUBMISSION.md` for the full Devpost narrative and `DEMO_SCRIPT.md` for the 2-minute walkthrough.

---

## Credits

- Design and build: EthnoHack 2026 team
- Icons: [Lucide](https://lucide.dev)
- Type: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- Photography: [Unsplash](https://unsplash.com) contributors
- Cultural framing informed by consent-first archival practice; demo records are illustrative and should not be cited as community sources

This repository is a hackathon prototype. Add an explicit open-source license before production reuse.

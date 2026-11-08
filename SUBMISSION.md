# Devpost submission — copy-paste text

> Everything below is written to be pasted directly into the matching Devpost fields. Edit team names, links, and video URL before submitting.

---

## Project title

**EthnoVault — Living Indigenous Knowledge Archive**

---

## Elevator pitch (short version, ~200 characters)

A consent-first living archive where Indigenous communities share oral traditions, plant wisdom, and craft on their own terms — with elder verification, attributed audio, and a submission pipeline that publishes only after council review.

---

## Elevator pitch (one-liner)

**The archive that listens:** community-governed preservation for oral traditions, languages, and ethnopharmacology — built so the knowledge keepers hold the keys.

---

## Inspiration

Indigenous knowledge systems are disappearing faster than they can be documented — languages, oral histories, medicinal plant knowledge, navigation, craft. But the usual response, "digitise everything," often repeats the same extraction pattern: outsiders record, strip context, claim ownership, and publish without consent.

We wanted to ask a different question: **what would an archive look like if the community kept the keys?** Not a museum catalogue, not a social feed, and not a download site — a living, revocable relationship between a community and its records.

EthnoVault is our answer: a warm, editorial archive where provenance, attribution, language, and consent are part of the interface, not fine print.

---

## What it does

EthnoVault demonstrates the full stewardship lifecycle in one responsive web app.

**Discover.** A searchable archive of oral folklore, native languages, ethnomedicine, and traditional crafts. Every card names the originating community, region, language, contributor, status, and reuse terms. Real-time search spans titles, tags, regions, and excerpts; category pills and an interactive heritage map filter the collection instantly.

**Listen.** The Oral Studio plays featured field recordings with a scrubbable waveform, ±10-second skip, variable speed, and a keyboard-accessible seek slider. A transcript panel toggles between the original language and a community-approved English translation; clicking any line seeks to that moment. Transcripts can be downloaded with their attribution intact.

**Contribute.** A guided submission pipeline captures knowledge type, origin community, region, attribution, narrative, and an optional voice recording (simulated for the demo). Inline validation, a character counter, and an explicit consent/cultural-attribution checkbox make the ethical contract visible. New records do not go live. They enter a pending queue and persist across reloads.

**Verify.** The Elder Council layer models a 3-endorsement quorum of elders and culture-bearers from the originating community. Endorsements are framed as trust signals, not public votes. Only after quorum does a record publish. Communities can withdraw records at any time.

**Understand impact.** Animated counters frame the mission: 3,420 stories preserved, 48 endangered dialects, 124 Indigenous contributors, 100% attribution secured.

The demo ships with 10 published records, 2 pending records, 4 featured recordings, and 10 regional map pins. Everything is interactive: playback, filtering, modals, submissions, endorsements, dark mode, and persistence.

> **Demo transparency:** audio, translations, uploads, endorsements, and council actions are simulated in the browser. Records are illustrative composites created for the hackathon; no real Indigenous knowledge is reproduced.

---

## How we built it

EthnoVault is deliberately dependency-light: **three static files, no build step, no backend, no tracking.**

- **HTML5** for semantic structure and accessible dialogs/forms
- **Tailwind CSS (Play CDN)** with a custom inline theme — forest, sand, terracotta, and obsidian tones — plus **custom CSS** for the map, seals, waveforms, and motion
- **Vanilla JavaScript** for all rendering and state: a deterministic record model, search/filter/sort pipeline, map pin aggregation, modal and focus management, and `localStorage` persistence
- **Lucide** icons and **Fraunces + DM Sans** typography for the editorial feel
- **Web APIs**: `requestAnimationFrame` for the simulated audio clock, Pointer Events for waveform scrubbing, `IntersectionObserver` for reveals, `Intl.NumberFormat` for counters, `matchMedia` for reduced motion, Blob downloads for transcripts
- **Playwright + headless Chrome** for interaction, accessibility, and overflow regression checks at 390/768/1024/1280/1440 px

The visual language — cream paper, deep forest, terracotta accents, physical "Elder verified" seals, waveform previews — is intended to feel like a community-held object rather than a database dashboard.

---

## Challenges we ran into

**1. Making audio feel real without shipping audio.** We built a deterministic simulated transport with play/pause, seeking, speed changes, and a moving playhead, all driven by a single animation frame loop. Keeping the waveform, timer, ARIA value, transcript cursor, and card previews in sync — while avoiding drift and cleaning up on track changes — was the hardest engineering piece.

**2. Consent-first UX in a static prototype.** A real verification quorum needs identity, roles, and a backend. We modelled the *experience* honestly: pending states, endorsement dots, quorum thresholds, private-queue language, and a visible disclaimer. The challenge was making the flow legible without pretending the simulation is real governance.

**3. Responsive waveform overflow.** On narrow phones, the waveform's flex bars and transcript initially pushed a few pixels past the player panel. We traced it to a grid track without a zero minimum, fixed it with `minmax(0, 1fr)` and per-bar `min-width`, then verified pixel bounds at 390 px.

**4. Cultural sensitivity.** Real community names and practices appear in the UI, so we kept every record illustrative, avoided reproducing ceremony or restricted knowledge, added rights statements, and placed the demo disclaimer in the player, story modal, and footer. Getting the tone right mattered more than adding features.

**5. State that survives reloads without a database.** Submissions, endorsements, and approved seeds are serialised to `localStorage` with defensive parsing and versioned keys. The demo must reset cleanly, tolerate private-mode quota errors, and never let invalid stored data break rendering.

**6. Accessibility under custom interactions.** Custom modals, map pins, toasts, and a waveform slider needed focus traps, focus restoration, Escape handling, `aria-pressed`, `aria-live`, and full keyboard operation — without a component library to lean on.

---

## Accomplishments we're proud of

- A complete, polished experience in three static files with zero console errors
- A genuinely usable simulated Oral Studio, including seek-by-transcript and keyboard scrubbing
- A submission → pending → endorsement → publication loop that persists and visibly updates counts
- A responsive layout with no horizontal overflow from 390 px to 1440 px
- An interface that communicates consent and provenance at every step, not in a legal footer
- Dark mode, reduced-motion support, focus management, and deep links throughout

---

## What we learned

- **Consent is an interface problem, not a policy page.** Showing who owns a record and what may be reused changes how the whole product feels.
- **Verification needs relationship design.** A quorum of elders is not the same as a like counter; the wording, privacy, and pacing of the review flow carry the ethics.
- **Constraints sharpen craft.** With no backend and no framework, every state transition had to be explicit — and the result is easy to audit, host, and demo.
- **Simulation must be labelled.** Trust grows when the prototype is honest about what is mocked and what is real.

---

## Future roadmap

**Next (0–3 months)**
- Real encrypted media storage with community-held keys and revocable access links
- Council identity, delegated roles, and offline endorsement records
- Production backend for submissions, audit trails, and withdrawal requests

**Then (3–9 months)**
- Offline-first PWA for recording and playback in low-connectivity regions
- Time-aligned transcripts, pronunciation guides, and language-learning views
- Multi-language interface with community-authored translations

**Later (9–18 months)**
- Partnerships with language nests, seed keepers, and local archives
- Granular licensing (listen-only, educational, community-internal) enforced at the media layer
- Impact dashboards co-designed with contributing communities
- Export and complete-deletion tooling so withdrawal is real, not cosmetic

---

## Built with

`html5` · `css3` · `javascript` · `tailwind-css` · `lucide` · `google-fonts` · `unsplash` · `localstorage` · `requestanimationframe` · `intersectionobserver` · `playwright`

---

## Try it out

- **Live demo:** `<add deployed URL>`
- **Local:** `cd ethnovault && python -m http.server 8123` → http://localhost:8123
- **Video:** `<add 2-minute demo video URL>`
- **Repository:** `<add GitHub URL>`

### Demo path (30 seconds)

1. Search **"potato"** → one record.
2. Click the **Nilgiris** map pin → Toda embroidery appears.
3. Play the featured recording → switch to **English** transcript.
4. **Share knowledge** → complete the form → submit → see the new **pending** card.
5. Open **Community Verification** → endorse to quorum → record publishes.

---

## Team

- `<Name>` — design, front-end, narrative
- `<Name>` — research, cultural framing, QA

---

## Notes for judges

- The app is fully client-side; submitted records and endorsements live in your browser's `localStorage`.
- Upload progress, audio, transcripts, and council actions are simulated and labelled as such in the UI.
- All records are illustrative and should not be treated as community sources.

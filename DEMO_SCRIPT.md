# EthnoVault — 2-minute demo video script

**Target length:** 2:00 (hard limit 2:10)
**Format:** 16:9 · 1600 × 900 browser window · 1080p export · 30 or 60 fps
**Tone:** calm, confident, documentary-editorial. Let the interface breathe; do not rush the cursor.

> The app's audio is simulated and silent. Record the visuals, then add a quiet, low-key music bed (−24 LUFS under voice) and light whooshes on section changes. Do not add fake field recordings.

---

## Before you record

1. **Server running**
   ```bash
   cd ethnovault
   python -m http.server 8123
   ```
2. **Reset the demo state** in DevTools → Console:
   ```js
   localStorage.removeItem('ethnovault:records:v1');
   localStorage.removeItem('ethnovault-theme');
   location.reload();
   ```
3. **Set the stage:** light theme (moon icon shows if dark), browser zoom 100%, bookmarks bar hidden, other tabs closed, notifications off, cursor visible, microphone tested.
4. **Window size:** 1600 × 900. The site's content is capped at 1280 px, so this leaves clean margins and keeps the full hero visible.
5. **Pre-write the submission text** so typing is quick:
   - Title: `Three Sisters Planting Songs`
   - Community: `Haudenosaunee growers`
   - Region: `Other`
   - Attribution: `Seed keeper collective`
   - Story: `Songs sung while planting corn, beans, and squash together, shared with permission for the next generation.`
6. **Dry-run the flow once** without recording, then reset `localStorage` again before the real take.

---

## Master timeline

| Time | On screen | Do this | Say this (exact talking points) |
|---|---|---|---|
| **0:00–0:08** | Hero: "The archive that listens." | Hold still, then drift the cursor slightly toward the hero. | "Knowledge disappears when it's recorded without consent. EthnoVault is the archive that listens." |
| **0:08–0:20** | Animated stat cards, then archive heading | Scroll slowly to the impact stats, pause one beat, continue to "Living knowledge, not artefacts." | "Oral histories, languages, and plant wisdom vanish every year. Most archives still extract first and ask later. We built the opposite: a living archive owned by the communities who keep it." |
| **0:20–0:34** | Sticky search + archive grid | Click the search field, type `potato`, pause on the single result. Clear with the ×. | "Search 'potato' and the archive narrows to Quechua planting wisdom — attributed to a Puno seed collective, with language, region, and reuse terms attached. Consent is part of the record, not the fine print." |
| **0:34–0:48** | Category pills → heritage map → filtered archive | Click **Traditional Crafts** (2 records), then **All**. Scroll to the map, click the **Nilgiris** pin. The page filters to the Toda embroidery record. | "Filter by craft, or click a map pin — here, Nilgiris — to bring the Toda embroidery record forward. Every card shows who it belongs to and whether elders have verified it." |
| **0:48–1:08** | Oral Studio (Listen & translate) | Scroll to the player. Click play. Let the waveform move for ~3 seconds. Click **English**. Click the third transcript line to seek. | "This is the Oral Studio. Play the recording, scrub the waveform, slow it down. Toggle from the original Sámi to the community-approved English translation — and click any line to jump there. Audio and uploads are simulated here, and clearly labelled." |
| **1:08–1:28** | Submission modal → success → new card | Press **Home**, click **Share knowledge**. Choose **Flora**, fill the four fields, paste the story, click the upload zone, wait for `3:13`, check consent, submit. On success, click **View in archive**. | "Anyone can contribute. Choose a knowledge type, name the community and attribution, add the story and a voice recording, then confirm consent. Submit — and the record does not go live. It enters the Elder Council queue as pending." |
| **1:28–1:45** | Community Verification modal → quorum toast | Press **Home**, click **Community Verification**. Find the Totonac star story (2 of 3). Click **Endorse** once. Show the filled dots and "Council quorum reached" toast. Close the modal. | "Verification is relational, not engagement. A three-elder quorum reviews each record; endorsement is trust, not a vote. When quorum is reached, it publishes. And the community can withdraw it at any time." |
| **1:45–1:54** | Impact band / "Knowledge belongs to its keepers" | Scroll to the sovereignty band and stat row. | "3,420 stories. 48 dialects. 124 contributors. 100% attribution. EthnoVault — a living archive where the knowledge keepers hold the keys." |
| **1:54–2:00** | End card over paused page | Fade in end card with URL and QR code. | "Try it at the link below." |

---

## Full script with screen directions

### 0:00 — Cold open (hero)

**Screen:** Top of page. Hero headline and the aurora card are fully visible. No motion for the first second.

**VO:**
> "Knowledge disappears when it's recorded without consent. EthnoVault is the archive that listens."

**On-screen text (optional, lower third):** `Consent-first · Community-governed`

---

### 0:08 — The problem, in numbers

**Screen:** Scroll down past the hero to the four animated counters. Hold for two seconds — let 3,420 / 48 / 124 / 100% finish counting. Continue to the archive heading.

**VO:**
> "Oral histories, languages, and plant wisdom vanish every year. Most archives still extract first and ask later. We built the opposite: a living archive owned by the communities who keep it."

**On-screen text:** `Most archives extract first. We don't.`

---

### 0:20 — Search: one record, full context

**Screen:**
1. The sticky search bar is visible at the top.
2. Click the search field.
3. Type `potato` at a natural pace (~110 ms per character).
4. Pause on the single **Quechua Potato Planting Wisdom** card. Slowly move the cursor across its community line, verified pill, and rights text.
5. Click the **×** to clear the search.

**VO:**
> "Search 'potato' and the archive narrows to Quechua planting wisdom — attributed to a Puno seed collective, with language, region, and reuse terms attached. Consent is part of the record, not the fine print."

**Do not:** open the story modal here; the full-screen modal would eat 8 seconds.

---

### 0:34 — Filter, then the map

**Screen:**
1. In the sticky toolbar, click **Traditional Crafts** — the grid drops to 2 records.
2. Click **All** to restore.
3. Scroll to the heritage map. Wait for the pins to settle.
4. Click the **Nilgiris** pin (south India). The page auto-scrolls to the filtered archive with the Toda embroidery record.
5. Leave the active filter chip visible for one beat.

**VO:**
> "Filter by craft, or click a map pin — here, Nilgiris — to bring the Toda embroidery record forward. Every card shows who it belongs to and whether elders have verified it."

**Tip:** If the pin click feels slow, pre-scroll so the map is centered before clicking.

---

### 0:48 — Oral Studio

**Screen:**
1. Scroll to **Listen & translate**.
2. Click the large cream **play** button. The waveform playhead advances; the timer counts up.
3. After ~3 seconds, click **English** in the transcript toggle.
4. Click the third transcript line. The playhead jumps and that line highlights.
5. Optionally click the speed control once (`1× → 0.75×`) for a half-second beat.

**VO:**
> "This is the Oral Studio. Play the recording, scrub the waveform, slow it down. Toggle from the original Sámi to the community-approved English translation — and click any line to jump there. Audio and uploads are simulated here, and clearly labelled."

**Note:** the page makes no sound. Keep the music bed going; never imply the waveform is a real recording.

---

### 1:08 — Submission pipeline

**Screen:**
1. Press **Home** to return to the top.
2. Click **Share knowledge** (forest-green header button).
3. In the modal, click the **Flora** type card.
4. Fill:
   - Title → `Three Sisters Planting Songs`
   - Origin community → `Haudenosaunee growers`
   - Region → `Other`
   - Attribution → `Seed keeper collective`
   - Story → paste the prepared sentence.
5. Click the **Add a voice recording** dropzone. Let the progress bar finish (~1.5 s) and the label change to **Voice recording attached** (`3:13`).
6. Check the **Consent & cultural attribution** box.
7. Click **Submit for council review**.
8. On the success screen, pause on "Received with respect." Then click **View in archive**.

**VO:**
> "Anyone can contribute. Choose a knowledge type, name the community and attribution, add the story and a voice recording, then confirm consent. Submit — and the record does not go live. It enters the Elder Council queue as pending."

**On-screen text:** `Submission → Elder Council → Published`

---

### 1:28 — Elder Council verification

**Screen:**
1. Press **Home**. Click **Community Verification** in the primary nav.
2. The modal opens with the demonstration-queue notice and pending records.
3. Scroll to the **Seventh Sister** Totonac record (2 of 3 endorsements).
4. Click **Endorse**. The third dot fills, the count reads 3 of 3, and a toast appears: **"Council quorum reached."**
5. Hold one beat on the toast, then close the modal with **×**.

**VO:**
> "Verification is relational, not engagement. A three-elder quorum reviews each record; endorsement is trust, not a vote. When quorum is reached, it publishes. And the community can withdraw it at any time."

**Optional B-roll if time allows:** close the modal and show the Totonac card now carrying the **Elder verified** seal.

---

### 1:45 — Impact and close

**Screen:**
1. Scroll to the dark green **"Knowledge belongs to its keepers"** band.
2. Continue slightly so the stat row (or footer) is visible.
3. Fade to end card at 1:54.

**VO:**
> "3,420 stories. 48 dialects. 124 contributors. 100% attribution. EthnoVault — a living archive where the knowledge keepers hold the keys."

**End card (1:54–2:00):**

```
EthnoVault
Living Indigenous Knowledge Archive
hariprasath71811-max.github.io/ethnovault
Try the demo · localhost:8123
```

Add a QR code if the video will be shown on a screen.

---

## Exact click targets (for the operator)

| Moment | Target |
|---|---|
| Search | Sticky toolbar field, placeholder "Search stories, plants, communities…" |
| Clear search | The **×** inside the search field |
| Craft filter | Pill **Traditional Crafts** (count 2) |
| Reset filter | Pill **All** |
| Map pin | **Nilgiris** pin in the heritage map |
| Player play | Cream circular **play** button under the waveform |
| Transcript language | **English** in the segmented toggle |
| Seek | Third transcript row |
| Submit | Header **Share knowledge** |
| Type card | **Flora** (second row of the type grid) |
| Upload | **Add a voice recording** dropzone |
| Consent | **Consent & cultural attribution** checkbox |
| Send | **Submit for council review** |
| View result | **View in archive** |
| Verification | Nav **Community Verification** |
| Endorse | **Endorse** on the Totonac record |

---

## If you run long

Cut in this order:

1. The **Traditional Crafts** pill demo (0:34–0:39) — keep the map.
2. The **speed control** beat in the player (0:56).
3. The **flag concern** mention — already not scripted.

Never cut: the consent checkbox, the pending state, or the quorum toast. Those are the story.

---

## Post-production checklist

- [ ] Voice normalized to −16 LUFS; music bed at −28 LUFS
- [ ] No dead air longer than 1.5 s
- [ ] Cursor never obscures the title or the consent checkbox
- [ ] Demo disclaimer readable in at least one shot (player or footer)
- [ ] End card visible for ≥5 s
- [ ] Export 1920 × 1080, H.264, AAC, 30 fps
- [ ] Upload to YouTube/Vimeo as **unlisted**, add to Devpost
- [ ] Watch once with sound off to confirm the story reads visually

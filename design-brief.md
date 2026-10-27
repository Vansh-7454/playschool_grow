# Design Brief: Little Steps Play School (Lucknow)

## 1. Theme Name & Concept
- **Theme Name**: Soft Nurture & Discovery (Adapted from the *Soft Care* and *Warm Editorial* presets).
- **One-Sentence Concept**: A calm, warm, and deeply trustworthy digital presence for Lucknow parents seeking a safe, structured, and joyful first educational step for their children aged 2–5.

## 2. Three Mood Words
- **Nurturing**: Gentle, safe, and emotionally reassuring for anxious first-time parents.
- **Calm**: Static, balanced, grounded, and free of chaotic animations or hyperactive primary colors.
- **Trustworthy**: Professional, clean, and transparent regarding safety protocols, daily schedules, and classroom environments.

## 3. Full Colour Palette & Contrast Ratios

| Token Name | Hex Code | Purpose / Usage | WCAG AA Contrast Compliance |
| :--- | :--- | :--- | :--- |
| **background** | `#FFFDF9` | Main page background (soft warm ivory) | Base canvas |
| **surface** | `#F7F2E9` | Alternating section surface, light cards | 1.1:1 with background, soft separation |
| **surface-2** | `#EFE6D8` | Chip badges, icon tile backdrops, subtle dividers | Subtle tactile layer |
| **text** | `#202D29` | Headings & primary body copy | **14.2:1** on `#FFFDF9` (Exceeds AAA 7.0:1) |
| **text-muted** | `#566762` | Secondary descriptions, captions, breadcrumbs | **5.4:1** on `#FFFDF9` (Exceeds AA 4.5:1) |
| **primary** | `#28584E` | Deep botanical pine (core brand & primary buttons) | **7.5:1** on `#FFFDF9` |
| **primary-contrast** | `#FFFFFF` | Text on primary buttons and badges | **7.4:1** on `#28584E` (Exceeds AAA 7.0:1) |
| **primary-hover** | `#1E443C` | Button hover and active states | **9.6:1** with `#FFFFFF` |
| **accent** | `#C25E2E` | Warm terracotta / cinnamon (secondary accents, highlights) | **4.7:1** on `#FFFDF9` |
| **accent-contrast** | `#FFFFFF` | Text on accent buttons | **4.6:1** on `#C25E2E` (Exceeds AA 4.5:1) |
| **accent-hover** | `#A84E23` | Accent button hover | **5.8:1** with `#FFFFFF` |
| **border** | `#E5DDD0` | 1px subtle cards, headers, divider borders | Clean, crisp, non-harsh borders |
| **dark-band** | `#192A25` | Deep forest night (contrast CTA bands & footer) | High-contrast foundation |
| **dark-band-text** | `#F6F4EE` | Headings & text in dark CTA and footer | **13.5:1** on `#192A25` (Exceeds AAA 7.0:1) |
| **dark-band-muted**| `#9EB3AC` | Secondary copy and links in dark bands | **6.1:1** on `#192A25` (Exceeds AA 4.5:1) |

*The 60-30-10 distribution is strictly maintained: 60% ivory background & warm sand surface, 30% deep pine and rich slate text, and 10% warm terracotta accent.*

## 4. Typography & Font Selection
- **Heading Font**: `Plus Jakarta Sans` (via `next/font/google`).
  - *Why it fits*: Modern geometric letterforms with subtle humanist curves that convey friendliness and early childhood approachability while maintaining impeccable institutional structure and authority.
- **Body Font**: `Inter` (via `next/font/google`).
  - *Why it fits*: Exceptionally legible at small and body sizes (14–18px), neutral, balanced x-height, and neutral optical properties that ensure stress-free reading for parents scanning schedules, admissions steps, and safety details.
- **Heading scale**:
  - Hero Display: `clamp(40px, 5vw, 68px)`, line-height `1.1`, letter-spacing `-0.02em`.
  - H1 (Inner pages): `clamp(34px, 4vw, 48px)`.
  - H2 (Section headings): `clamp(26px, 3vw, 36px)`, letter-spacing `-0.015em`.
  - H3 (Card headers): `22px` desktop / `20px` mobile.
  - Body: `18px` desktop / `16px` mobile, line-height `1.6`.
  - Small / captions: `14px`, line-height `1.5`.

## 5. Logo Concept
- **Icon Mark**: A geometric, dual-element emblem combining a rounded stepping-stone footprint with an unfurling tender leaf sprout. It reflects progressive childhood stages ("Little Steps") and supportive botanical nurturing. Set in dual-tone `#28584E` and `#C25E2E`.
- **Wordmark**: "Little Steps" set in `Plus Jakarta Sans` SemiBold with tightened tracking (`-0.02em`), accompanied by "PLAY SCHOOL & DAY CARE · LUCKNOW" set in tracked uppercase (`0.12em`) muted text below.
- **Tagline**: "Gentle first steps. Confident young minds." (7 words).

## 6. Hero Layout Choice & Hero Image
- **Choice**: **Layout A (Split)**
  - Left column (6 of 12 cols): Uppercase eyebrow badge (`LUCKNOW · AGES 2 TO 5`), fluid headline (*"Where curiosity blossoms and every little step is celebrated"*), concise intro paragraph highlighting guided early learning and safe day care, paired CTA buttons (*"Book a school visit on WhatsApp"* and *"Explore our programmes"*), and an immediate trust strip.
  - Right column (6 of 12 cols): Large 4:5 aspect ratio image with 24px radius, soft offset tone-on-tone frame in `#EFE6D8`, and a subtle warm radial backdrop glow.
  - Image idea: A sunlit, beautifully organized Montessori-inspired early learning room with natural wooden sensorial blocks, low open book cubbies, and clean child-height tables. *Strictly neutral environment without exposed children's faces, adhering to parental privacy consent standards.*

## 7. Image Plan (Which picture goes where)
*Strict Rule Applied: In accordance with parental privacy mandates, no child faces are displayed without documented consent. All photography showcases real learning environments, sensorial learning apparatus, outdoor activity areas, reading corners, and nap rooms.*

1. **Home Hero**: `/public/images/home/hero.webp` (4:5, 1200x1500) — Bright, orderly Montessori activity classroom with natural wooden toys, low shelving, and soft light.
2. **Home About Teaser**: `/public/images/home/about-campus.webp` (4:5, 1200x1500) — Safe indoor activity hall featuring soft floor mats, interactive tactile walls, and child-safe play apparatus.
3. **Home Safety Feature**: `/public/images/home/safety-environment.webp` (4:5, 1200x1500) — Well-lit entry corridor displaying CCTV security monitor display and sanitized wash station.
4. **Programmes Overview Hero**: `/public/images/programmes/hero.webp` (16:9, 1600x900) — Child-height round table with non-toxic art paints, wooden counting beads, and picture storybooks.
5. **Programmes Playgroup Card**: `/public/images/programmes/playgroup.webp` (4:3, 1200x900) — Sensorial tactile trays, soft textured stacking rings, and musical bells for toddlers aged 2–3.
6. **Programmes Nursery Card**: `/public/images/programmes/nursery.webp` (4:3, 1200x900) — Phonetic picture flashcards, alphabet wooden blocks, and fine-motor tracing boards for ages 3–4.
7. **Programmes Kindergarten Card**: `/public/images/programmes/kindergarten.webp` (4:3, 1200x900) — Early numeracy abacus, reading corner with illustrated classics, and mini science exploration tray for ages 4–5.
8. **Day Care Dedicated Hero**: `/public/images/daycare/hero.webp` (16:9, 1600x900) — Peaceful nap room with individualized hygienic cots, warm ambient light, and clean linen.
9. **Day Care Routine / Dining**: `/public/images/daycare/dining-routine.webp` (4:3, 1200x900) — Child-safe dining table setup with clean personal water bottles and nutritional meal routine chart.
10. **Gallery Showcase 1 to 6**: `/public/images/gallery/item-*.webp` (1:1 and 4:5, 1200x1200 / 1200x1500) —
    - Art & Craft display board with handprints and paper crafts.
    - Storytelling reading nook with plush cushions.
    - Outdoor soft-turf play corner with slide and mini tunnel.
    - Sensorial kinetic sand and shape-sorter station.
    - Clean washroom equipped with child-sized sanitized sinks.
    - Activity circle space with cheerful rug.
11. **About Page Campus Split**: `/public/images/about/campus.webp` (4:5, 1200x1500) — Welcoming school reception and parent discussion area in Lucknow.
12. **Contact Page Location Split**: `/public/images/contact/campus-gate.webp` (4:5, 1200x1500) — Safe, secured campus entrance with clear signage and visitor check-in desk.

## 8. Section Order of the Home Page
1. **Header**: Sticky 72px header with responsive SVG logo, navigation links, and primary CTA *"Book a visit"*.
2. **Hero (Layout A Split)**: Eyebrow, H1 headline, supporting copy, primary WhatsApp CTA + secondary Programmes CTA, right-side classroom visual.
3. **Trust Strip**: 4 factual highlight cards directly beneath hero (Ages 2–5, CCTV & Secure Campus, Structured Daily Routine, Trained Early Educators).
4. **Programmes Grid**: 4 key offerings (Playgroup, Nursery, Kindergarten, Day Care) with age brackets, timings, learning focus, and deep link.
5. **Safety & Infrastructure Feature Split**: Dedicated section covering verified safety measures (continuous CCTV, verified background checks, child-proof interiors, sanitization) with real parameters.
6. **Day Care & Daily Routine Split**: Overview of full-day care support, post-school supervision, wholesome rest time, and snack routine.
7. **About Little Steps Teaser**: The school philosophy in Lucknow, director's focus on gentle early socialisation, and child-to-carer ratio.
8. **Visitor FAQ Preview**: 4 essential questions parents ask before their first campus visit (admissions process, age criteria, timings, visit booking).
9. **CTA Band**: Full-width dark forest band (`#192A25`) with direct WhatsApp visit booking and phone enquiry buttons.
10. **Footer**: 4-column layout (Brand & Tagline, Quick Links, Programs, Lucknow Location & Visiting Hours) on `#192A25`.

## 9. Spacing and Type Tokens

### Spacing Tokens
- Spacing Scale: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`.
- Container Max Width: `1200px` with fluid gutter (`min(100% - 40px, 1200px)`).
- Section Padding (Vertical): `clamp(64px, 8vw, 120px)`. Compact sections: `64px`.
- Header Height: `72px` desktop, `64px` mobile.
- Card Padding: `24px` to `32px`.
- Grid Gutters: `24px` to `32px`.
- Rhythm:
  - Eyebrow to Heading: `12px`
  - Heading to Paragraph: `16px`
  - Paragraph to Action Buttons: `32px`
  - Section Header block to content: `48px` to `64px`

### Radius Tokens
- `rounded-input`: `8px` (inputs, small badges)
- `rounded-btn`: `10px` (buttons with 48px–52px height)
- `rounded-card`: `16px` (program cards, info tiles)
- `rounded-image`: `24px` (hero visuals, split feature images)

### Shadow Tokens
- `shadow-card`: `0 2px 8px -2px rgba(32, 45, 41, 0.05), 0 8px 24px -4px rgba(32, 45, 41, 0.07)`
- `shadow-raised`: `0 12px 36px -6px rgba(32, 45, 41, 0.12), 0 4px 12px -2px rgba(32, 45, 41, 0.06)`

### Static Design Guarantee
- Absolutely NO video, NO CSS animations, NO motion/parallax libraries, and NO sliders.
- Instant keyboard-accessible accordion for FAQ and robust focus-trapped mobile navigation drawer with zero layout shifts.

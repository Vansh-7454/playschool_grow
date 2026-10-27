# Little Steps Play School — Website Documentation (GROW Plan)

A high-performance, polished, accessible, static web platform for **Little Steps Play School**, Gomti Nagar, Lucknow, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Quick Start (Running Locally)

### Prerequisites
- Node.js 18.18+ or 20+
- npm (comes with Node)

### Installation and Development
```bash
# Clone or navigate to the repository folder
cd playschool_grow

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
# Open http://localhost:3000 in your browser
```

### Production Build & Local Preview
```bash
# Build static site bundle
npm run build

# Run production server
npm run start
# Or preview on a custom port:
# npx next start -p 3005
```

---

## 2. Content & Site Customization (Single Source of Truth)

All content, contact details, theme colors, navigation links, programmes, routine schedules, FAQs, and image metadata live in:
**`content/site.ts`**

### A. How to Edit Text
Open `content/site.ts`:
- **School Name / Tagline / Description**: Edit `siteConfig.brand.name` or `siteConfig.brand.tagline`.
- **Contact Details**: Update `siteConfig.contact.phone`, `siteConfig.contact.whatsapp`, `siteConfig.contact.email`, and `siteConfig.contact.address`.
- **Visiting Hours & Admissions Routine**: Update `siteConfig.contact.visitingHours` and `siteConfig.contact.daysOpen`.
- **Page Headings & Descriptions**: Edit `siteConfig.pages.<page_name>`.

### B. How to Change Colors or Fonts (One Place)
- **Colors**: Edit `siteConfig.theme.colors` in `content/site.ts` and the matching CSS variables in `app/globals.css`:
  - `--color-bg`: `#FFFDF9` (Ivory background)
  - `--color-surface`: `#F7F2E9` (Warm Sand surface)
  - `--color-surface-2`: `#EFE6D8` (Sand Accent surface)
  - `--color-primary`: `#28584E` (Deep Forest Green)
  - `--color-accent`: `#C25E2E` (Warm Terracotta)
  - `--color-dark-band`: `#192A25` (Dark Pine contrast band)
  - `--color-text`: `#202D29` (Deep Charcoal text)
  - `--color-text-muted`: `#566762` (Sage Muted text)
  - `--color-border`: `#E5DDD0` (Sand Border)
- **Fonts**: Defined in `app/layout.tsx` using `next/font/google`:
  - Headings: `Plus Jakarta Sans`
  - Body: `Inter`
  To change fonts, update the font loaders in `app/layout.tsx` and the `--font-heading` / `--font-body` variables.

### C. How to Swap the Logo
The logo component lives in `components/Logo.tsx` and reads from vector files in `/public`:
- Full logo: `/public/logo.svg`
- Icon mark: `/public/logo-mark.svg`
- Favicon: `/app/icon.svg`
- Social Open Graph image: `/public/og-image.svg`
To replace with a custom SVG or logo file, update these files while keeping clear space around the icon mark.

### D. How to Swap an Image (Same Name & Ratio)
All images are organized by page inside `/public/images/<page>/`.
To replace an image:
1. Refer to `photos-needed.md` for exact dimensions and focal points.
2. Ensure the image is exported in WebP format, 1600px max width, under 200 KB.
3. Save it with the exact matching filename (e.g. `/public/images/home/hero.webp` at 4:5 ratio).
4. **Child Safety Rule**: In accordance with the school's parental privacy directive, strictly refrain from publishing identifiable children's faces without explicit, signed parental photo release forms. Use atmospheric room, material, and facility shots.

### E. How to Add a Programme (Service)
1. In `content/site.ts`, find `siteConfig.programmes`.
2. Add a new object conforming to the `Programme` type:
   ```ts
   {
     id: "toddler-transition",
     title: "Toddler Transition Care",
     ageRange: "1.5 – 2 Years",
     timing: "9:30 AM – 12:00 PM",
     ratio: "1:4 Educator Ratio",
     shortDescription: "Gentle mother-toddler orientation and sensory settling.",
     description: "A calming transition bridge helping first-time learners...",
     included: [
       "Sensory tactile bins",
       "Gentle mother-toddler separation routines",
       "Music and rhythmic play"
     ],
     idealFor: "Toddlers taking their first gentle steps outside home care.",
     image: "/images/programmes/toddler.webp",
     icon: "Baby",
   }
   ```
3. TypeScript will validate the fields and the page will automatically render the new programme card and layout.

### F. How to Add an FAQ
1. In `content/site.ts`, find `siteConfig.faqs`.
2. Add a new question object:
   ```ts
   {
     q: "What is the procedure for emergency first aid?",
     a: "Our staff holds pediatric first-aid certification, an on-site dispensary kit is maintained, and immediate parent telephonic notification is standard protocol.",
     category: "Safety and Health"
   }
   ```
3. The interactive accordion on `/` and any dedicated FAQ sections will immediately render the question.

---

## 3. Deployment Instructions (Vercel)

The site is built as a static export / zero-server App Router bundle ready for one-click deployment on **Vercel**.

### Step 1: Push to Git Repository
```bash
git init
git add .
git commit -m "feat: complete Little Steps Play School website (GROW plan)"
git remote add origin https://github.com/<your-username>/playschool_grow.git
git branch -M main
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import the `playschool_grow` Git repository.
4. Framework Preset: **Next.js** (automatically detected).
5. Root Directory: `./`
6. Build Command: `next build` (default).
7. Output Directory: `.next` (default).
8. Environment Variables:
   - Add `NEXT_PUBLIC_SITE_URL`: `https://littlestepslucknow.in` (or your live domain).
9. Click **Deploy**.

### Step 3: Custom Domain & DNS Records
Once deployed, navigate to **Project Settings -> Domains**:
1. Add your custom domain (e.g. `littlestepslucknow.in` and `www.littlestepslucknow.in`).
2. Update your DNS records at your domain registrar (GoDaddy, Namecheap, Google Domains/Squarespace):
   - **Apex record (`@`)**: Type `A`, Value `76.76.21.21`
   - **Subdomain (`www`)**: Type `CNAME`, Value `cname.vercel-dns.com`
3. Vercel automatically generates and provisions an SSL/TLS HTTPS certificate within 5–10 minutes.

---

## 4. Status of the Visiting Card Job
*Per Section 21 of the project instructions, the physical business visiting card is a separate graphic design job and is not part of this website codebase. Layout guidelines, brand hex codes, and typography specifications have been prepared in `design-brief.md` and `content/site.ts` to make the visiting card design effortless when started.*

---

## 5. Visual QA & Verification
Responsive full-page screenshots at 375px (mobile), 768px (tablet), and 1440px (desktop) are saved in the `/qa` directory.

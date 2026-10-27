import fs from "fs";
import path from "path";
import puppeteer from "puppeteer-core";

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const images = [
  {
    dir: "home",
    name: "hero",
    ratio: [4, 5],
    title: "Montessori Classroom Setup",
    subtitle: "Low wooden shelving, sensorial blocks and circle rug",
    tag: "Ages 2–5 Learning Space",
    elements: `
      <!-- Window with warm morning light -->
      <rect x="520" y="80" width="220" height="280" rx="16" fill="#FFFDF9" stroke="#E5DDD0" stroke-width="3" />
      <line x1="630" y1="80" x2="630" y2="360" stroke="#E5DDD0" stroke-width="2" />
      <line x1="520" y1="200" x2="740" y2="200" stroke="#E5DDD0" stroke-width="2" />
      <circle cx="630" cy="140" r="30" fill="#F4D35E" opacity="0.3" />

      <!-- Bookshelf unit -->
      <rect x="60" y="320" width="300" height="420" rx="12" fill="#EFE6D8" stroke="#E5DDD0" stroke-width="3" />
      <line x1="60" y1="460" x2="360" y2="460" stroke="#E5DDD0" stroke-width="3" />
      <line x1="60" y1="600" x2="360" y2="600" stroke="#E5DDD0" stroke-width="3" />
      <!-- Books on shelf -->
      <rect x="80" y="360" width="24" height="100" rx="4" fill="#28584E" />
      <rect x="110" y="380" width="28" height="80" rx="4" fill="#C25E2E" />
      <rect x="144" y="350" width="22" height="110" rx="4" fill="#4E7E73" />
      <rect x="172" y="390" width="26" height="70" rx="4" fill="#E5DDD0" />
      <!-- Wooden toys on shelf -->
      <circle cx="120" cy="530" r="30" fill="#C25E2E" opacity="0.8" />
      <polygon points="200,500 230,560 170,560" fill="#28584E" />
      <rect x="260" y="510" width="50" height="50" rx="8" fill="#F4D35E" />

      <!-- Low child table -->
      <ellipse cx="500" cy="720" rx="200" ry="60" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="4" />
      <rect x="420" y="730" width="16" height="120" rx="4" fill="#EFE6D8" />
      <rect x="560" y="730" width="16" height="120" rx="4" fill="#EFE6D8" />
      <rect x="340" y="710" width="16" height="120" rx="4" fill="#EFE6D8" />
      <rect x="640" y="710" width="16" height="120" rx="4" fill="#EFE6D8" />

      <!-- Tabletop materials: wooden blocks and abacus -->
      <rect x="450" y="670" width="30" height="30" rx="4" fill="#28584E" />
      <rect x="490" y="660" width="30" height="40" rx="4" fill="#C25E2E" />
      <rect x="530" y="675" width="25" height="25" rx="4" fill="#4E7E73" />

      <!-- Floor rug -->
      <ellipse cx="400" cy="880" rx="360" ry="90" fill="#EFE6D8" stroke="#E5DDD0" stroke-width="3" stroke-dasharray="10 6" />
    `,
  },
  {
    dir: "home",
    name: "about-campus",
    ratio: [4, 5],
    title: "Indoor Campus and Play Hall",
    subtitle: "Sanitized soft play floor, tactile walls and open reception",
    tag: "Safe Lucknow Campus",
    elements: `
      <!-- Soft floor tiles grid -->
      <rect x="80" y="560" width="640" height="380" rx="20" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="2" />
      <line x1="80" y1="680" x2="720" y2="680" stroke="#E5DDD0" stroke-width="2" />
      <line x1="80" y1="800" x2="720" y2="800" stroke="#E5DDD0" stroke-width="2" />
      <line x1="240" y1="560" x2="240" y2="940" stroke="#E5DDD0" stroke-width="2" />
      <line x1="400" y1="560" x2="400" y2="940" stroke="#E5DDD0" stroke-width="2" />
      <line x1="560" y1="560" x2="560" y2="940" stroke="#E5DDD0" stroke-width="2" />

      <!-- Wall Art and Activity Wall -->
      <rect x="100" y="140" width="260" height="180" rx="14" fill="#FFFDF9" stroke="#28584E" stroke-width="3" />
      <circle cx="160" cy="200" r="25" fill="#C25E2E" opacity="0.6" />
      <circle cx="220" cy="240" r="30" fill="#28584E" opacity="0.4" />
      <circle cx="280" cy="190" r="20" fill="#F4D35E" opacity="0.8" />

      <!-- Soft play slide -->
      <path d="M440 480 L620 480 L680 720 L480 720 Z" fill="#28584E" />
      <rect x="420" y="320" width="80" height="180" rx="8" fill="#C25E2E" />
      <circle cx="460" cy="300" r="20" fill="#FFFDF9" stroke="#C25E2E" stroke-width="3" />
    `,
  },
  {
    dir: "home",
    name: "safety-environment",
    ratio: [4, 5],
    title: "Child Safety and Security Protocols",
    subtitle: "Continuous CCTV coverage, secure gate and hygiene wash",
    tag: "Safety Standard",
    elements: `
      <!-- CCTV Camera Icon and Console -->
      <rect x="120" y="180" width="560" height="340" rx="20" fill="#192A25" stroke="#28584E" stroke-width="3" />
      <!-- 4 Screen Grid -->
      <rect x="150" y="210" width="230" height="130" rx="8" fill="#28584E" opacity="0.4" />
      <rect x="420" y="210" width="230" height="130" rx="8" fill="#28584E" opacity="0.3" />
      <rect x="150" y="360" width="230" height="130" rx="8" fill="#28584E" opacity="0.3" />
      <rect x="420" y="360" width="230" height="130" rx="8" fill="#28584E" opacity="0.4" />
      <!-- Live blinking dots -->
      <circle cx="170" cy="230" r="5" fill="#C25E2E" />
      <circle cx="440" cy="230" r="5" fill="#C25E2E" />
      <circle cx="170" cy="380" r="5" fill="#C25E2E" />
      <circle cx="440" cy="380" r="5" fill="#C25E2E" />

      <!-- Safety Shield -->
      <g transform="translate(280, 600) scale(1.6)">
        <path d="M75 10 L130 35 V85 C130 130 75 160 75 160 C75 160 20 130 20 85 V35 Z" fill="#28584E" />
        <path d="M50 85 L70 105 L105 65" stroke="#FFFDF9" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>
    `,
  },
  {
    dir: "programmes",
    name: "hero",
    ratio: [16, 9],
    title: "Guided Early Childhood Programmes",
    subtitle: "Playgroup, Nursery and Kindergarten curriculum in Lucknow",
    tag: "Ages 2.0 to 5.0+ Years",
    elements: `
      <!-- Educational balance and study apparatus -->
      <g transform="translate(180, 80) scale(1.3)">
        <rect x="40" y="180" width="560" height="20" rx="6" fill="#EFE6D8" stroke="#E5DDD0" stroke-width="2" />
        <!-- Stacked blocks -->
        <rect x="80" y="100" width="70" height="80" rx="6" fill="#28584E" />
        <text x="115" y="150" fill="#FFFFFF" font-size="34" font-weight="bold" text-anchor="middle">A</text>
        <rect x="160" y="100" width="70" height="80" rx="6" fill="#C25E2E" />
        <text x="195" y="150" fill="#FFFFFF" font-size="34" font-weight="bold" text-anchor="middle">B</text>
        <rect x="240" y="100" width="70" height="80" rx="6" fill="#4E7E73" />
        <text x="275" y="150" fill="#FFFFFF" font-size="34" font-weight="bold" text-anchor="middle">C</text>

        <!-- Counting beads -->
        <circle cx="370" cy="140" r="16" fill="#C25E2E" />
        <circle cx="410" cy="140" r="16" fill="#28584E" />
        <circle cx="450" cy="140" r="16" fill="#F4D35E" />
        <circle cx="490" cy="140" r="16" fill="#4E7E73" />
      </g>
    `,
  },
  {
    dir: "programmes",
    name: "playgroup",
    ratio: [4, 3],
    title: "Playgroup Corner",
    subtitle: "Tactile discovery, soft blocks and sensory water-sand play",
    tag: "Ages 2.0 – 3.0",
    elements: `
      <g transform="translate(120, 80) scale(1.1)">
        <rect x="60" y="140" width="440" height="280" rx="16" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="3" />
        <!-- Soft stacking rings -->
        <ellipse cx="280" cy="340" rx="110" ry="30" fill="#28584E" />
        <ellipse cx="280" cy="305" rx="90" ry="25" fill="#C25E2E" />
        <ellipse cx="280" cy="275" rx="70" ry="20" fill="#4E7E73" />
        <ellipse cx="280" cy="250" rx="50" ry="16" fill="#F4D35E" />
        <ellipse cx="280" cy="225" rx="30" ry="12" fill="#EFE6D8" />
        <circle cx="280" cy="195" r="18" fill="#C25E2E" />
      </g>
    `,
  },
  {
    dir: "programmes",
    name: "nursery",
    ratio: [4, 3],
    title: "Nursery Phonics and Numbers",
    subtitle: "Pre-writing lines, language development and expressive arts",
    tag: "Ages 3.0 – 4.0",
    elements: `
      <g transform="translate(120, 80) scale(1.1)">
        <rect x="60" y="100" width="440" height="320" rx="16" fill="#FFFDF9" stroke="#E5DDD0" stroke-width="3" />
        <!-- Drawing palette and brushes -->
        <circle cx="200" cy="240" r="70" fill="#EFE6D8" />
        <circle cx="170" cy="220" r="14" fill="#C25E2E" />
        <circle cx="205" cy="205" r="14" fill="#28584E" />
        <circle cx="230" cy="235" r="14" fill="#F4D35E" />
        <circle cx="200" cy="265" r="14" fill="#4E7E73" />

        <!-- Abacus / Counting frame -->
        <rect x="330" y="160" width="130" height="180" rx="8" fill="#F7F2E9" stroke="#28584E" stroke-width="2" />
        <line x1="330" y1="200" x2="460" y2="200" stroke="#28584E" stroke-width="2" />
        <line x1="330" y1="250" x2="460" y2="250" stroke="#28584E" stroke-width="2" />
        <line x1="330" y1="300" x2="460" y2="300" stroke="#28584E" stroke-width="2" />
        <circle cx="360" cy="200" r="8" fill="#C25E2E" />
        <circle cx="390" cy="200" r="8" fill="#C25E2E" />
        <circle cx="430" cy="250" r="8" fill="#28584E" />
      </g>
    `,
  },
  {
    dir: "programmes",
    name: "kindergarten",
    ratio: [4, 3],
    title: "Kindergarten School Readiness",
    subtitle: "Formal reading readiness, logic puzzles and primary prep",
    tag: "Ages 4.0 – 5.0+",
    elements: `
      <g transform="translate(100, 70) scale(1.15)">
        <rect x="40" y="90" width="460" height="330" rx="16" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="3" />
        <!-- Open book with illustrations -->
        <path d="M120 280 Q250 260 250 160 Q250 260 380 280 L380 320 Q250 300 250 200 Q250 300 120 320 Z" fill="#28584E" />
        <line x1="250" y1="160" x2="250" y2="300" stroke="#FFFDF9" stroke-width="3" />
        <line x1="150" y1="230" x2="220" y2="230" stroke="#EFE6D8" stroke-width="3" />
        <line x1="150" y1="260" x2="230" y2="260" stroke="#EFE6D8" stroke-width="3" />
        <line x1="270" y1="230" x2="350" y2="230" stroke="#EFE6D8" stroke-width="3" />
        <line x1="270" y1="260" x2="340" y2="260" stroke="#EFE6D8" stroke-width="3" />
      </g>
    `,
  },
  {
    dir: "daycare",
    name: "hero",
    ratio: [16, 9],
    title: "Supervised Afternoon Care",
    subtitle: "Individualized sanitized cots, warm meals and restful routine",
    tag: "Day Care 8:30 AM – 5:30 PM",
    elements: `
      <g transform="translate(200, 80) scale(1.2)">
        <!-- Nap cot row -->
        <rect x="40" y="180" width="160" height="90" rx="12" fill="#EFE6D8" stroke="#E5DDD0" stroke-width="3" />
        <rect x="50" y="195" width="40" height="30" rx="6" fill="#FFFDF9" />
        <rect x="230" y="180" width="160" height="90" rx="12" fill="#EFE6D8" stroke="#E5DDD0" stroke-width="3" />
        <rect x="240" y="195" width="40" height="30" rx="6" fill="#FFFDF9" />
        <rect x="420" y="180" width="160" height="90" rx="12" fill="#EFE6D8" stroke="#E5DDD0" stroke-width="3" />
        <rect x="430" y="195" width="40" height="30" rx="6" fill="#FFFDF9" />
        <!-- Calming moon and stars -->
        <path d="M300 80 A30 30 0 1 0 330 130 A24 24 0 1 1 300 80 Z" fill="#C25E2E" opacity="0.8" />
      </g>
    `,
  },
  {
    dir: "daycare",
    name: "dining-routine",
    ratio: [4, 3],
    title: "Nutrition and Hydration Schedule",
    subtitle: "Child-height sanitized dining tables with hygienic assistance",
    tag: "Healthy Habits",
    elements: `
      <g transform="translate(120, 80) scale(1.1)">
        <rect x="40" y="120" width="480" height="280" rx="16" fill="#FFFDF9" stroke="#E5DDD0" stroke-width="3" />
        <ellipse cx="280" cy="280" rx="180" ry="50" fill="#F7F2E9" stroke="#28584E" stroke-width="2" />
        <!-- Plates and cups -->
        <circle cx="180" cy="270" r="30" fill="#EFE6D8" stroke="#C25E2E" stroke-width="2" />
        <circle cx="280" cy="270" r="30" fill="#EFE6D8" stroke="#28584E" stroke-width="2" />
        <circle cx="380" cy="270" r="30" fill="#EFE6D8" stroke="#C25E2E" stroke-width="2" />
        <rect x="135" y="255" width="10" height="30" rx="2" fill="#28584E" />
        <rect x="235" y="255" width="10" height="30" rx="2" fill="#C25E2E" />
      </g>
    `,
  },
  {
    dir: "daycare",
    name: "after-school",
    ratio: [4, 3],
    title: "Quiet Afternoon Recreation",
    subtitle: "Story reading, floor puzzles, and supervised relaxation",
    tag: "Post-School Care",
    elements: `
      <g transform="translate(100, 70) scale(1.15)">
        <rect x="40" y="100" width="460" height="300" rx="16" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="3" />
        <!-- Jigsaw puzzle tiles -->
        <rect x="180" y="180" width="60" height="60" rx="8" fill="#28584E" />
        <rect x="245" y="180" width="60" height="60" rx="8" fill="#C25E2E" />
        <rect x="180" y="245" width="60" height="60" rx="8" fill="#4E7E73" />
        <rect x="245" y="245" width="60" height="60" rx="8" fill="#F4D35E" />
      </g>
    `,
  },
  {
    dir: "gallery",
    name: "art-craft",
    ratio: [4, 3],
    title: "Art and Craft Display Wall",
    subtitle: "Student paper crafts, finger paintings and seasonal collages",
    tag: "Creative Work",
    elements: `
      <g transform="translate(100, 40) scale(1.05)">
        <rect x="40" y="40" width="560" height="420" rx="16" fill="#FFFDF9" stroke="#E5DDD0" stroke-width="3" />
        <rect x="70" y="70" width="180" height="150" rx="10" fill="#F7F2E9" stroke="#28584E" stroke-width="2" />
        <circle cx="160" cy="145" r="40" fill="#C25E2E" opacity="0.7" />
        <rect x="280" y="70" width="200" height="150" rx="10" fill="#EFE6D8" stroke="#C25E2E" stroke-width="2" />
        <polygon points="380,95 440,185 320,185" fill="#28584E" />
        <rect x="70" y="240" width="410" height="180" rx="10" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="2" />
        <path d="M110 330 Q230 260 310 350 Q390 280 430 330" stroke="#28584E" stroke-width="4" fill="none" />
      </g>
    `,
  },
  {
    dir: "gallery",
    name: "reading-corner",
    ratio: [4, 3],
    title: "Library and Story Corner",
    subtitle: "Low wooden bookshelves and comfortable floor seating",
    tag: "Early Literacy",
    elements: `
      <g transform="translate(100, 40) scale(1.05)">
        <rect x="40" y="40" width="560" height="420" rx="16" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="3" />
        <rect x="80" y="80" width="480" height="180" rx="12" fill="#EFE6D8" stroke="#28584E" stroke-width="2" />
        <line x1="80" y1="170" x2="560" y2="170" stroke="#28584E" stroke-width="2" />
        <!-- Books -->
        <rect x="110" y="100" width="28" height="70" rx="4" fill="#C25E2E" />
        <rect x="150" y="110" width="30" height="60" rx="4" fill="#28584E" />
        <rect x="195" y="95" width="26" height="75" rx="4" fill="#4E7E73" />
        <!-- Floor cushion -->
        <ellipse cx="320" cy="340" rx="140" ry="40" fill="#28584E" />
        <ellipse cx="320" cy="325" rx="100" ry="25" fill="#C25E2E" />
      </g>
    `,
  },
  {
    dir: "gallery",
    name: "outdoor-play",
    ratio: [4, 3],
    title: "Outdoor Safe Play Yard",
    subtitle: "Artificial grass lawn, mini slide and soft obstacle play",
    tag: "Gross Motor Play",
    elements: `
      <g transform="translate(100, 60) scale(1.15)">
        <rect x="40" y="60" width="480" height="380" rx="16" fill="#FFFDF9" stroke="#E5DDD0" stroke-width="3" />
        <!-- Green artificial turf floor -->
        <rect x="40" y="280" width="480" height="160" rx="12" fill="#4E7E73" opacity="0.3" />
        <!-- Mini playground slide -->
        <path d="M120 340 L260 160 L380 340" stroke="#28584E" stroke-width="12" stroke-linecap="round" fill="none" />
        <path d="M260 160 L420 320" stroke="#C25E2E" stroke-width="14" stroke-linecap="round" fill="none" />
        <circle cx="180" cy="120" r="26" fill="#F4D35E" opacity="0.8" />
      </g>
    `,
  },
  {
    dir: "gallery",
    name: "sensory-zone",
    ratio: [4, 3],
    title: "Montessori Sensory Zone",
    subtitle: "Natural wooden sorting trays and kinetic tactile exploration",
    tag: "Sensory Learning",
    elements: `
      <g transform="translate(100, 40) scale(1.05)">
        <rect x="40" y="40" width="560" height="420" rx="16" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="3" />
        <!-- Wooden sorting tray -->
        <rect x="80" y="70" width="480" height="290" rx="16" fill="#EFE6D8" stroke="#28584E" stroke-width="3" />
        <line x1="320" y1="70" x2="320" y2="360" stroke="#28584E" stroke-width="3" />
        <line x1="80" y1="210" x2="560" y2="210" stroke="#28584E" stroke-width="3" />
        <!-- Geometric shapes inside quadrants -->
        <circle cx="200" cy="140" r="35" fill="#28584E" />
        <rect x="410" y="110" width="60" height="60" rx="8" fill="#C25E2E" />
        <polygon points="200,250 240,320 160,320" fill="#C25E2E" />
        <ellipse cx="440" cy="285" rx="40" ry="25" fill="#28584E" />
      </g>
    `,
  },
  {
    dir: "gallery",
    name: "hygiene-wash",
    ratio: [4, 3],
    title: "Child-Sized Hygiene Wash Station",
    subtitle: "Low-height sanitized sinks, liquid soap and anti-slip mats",
    tag: "Campus Cleanliness",
    elements: `
      <g transform="translate(100, 60) scale(1.15)">
        <rect x="40" y="60" width="480" height="360" rx="16" fill="#FFFDF9" stroke="#E5DDD0" stroke-width="3" />
        <!-- Sink counters -->
        <rect x="90" y="240" width="160" height="90" rx="10" fill="#EFE6D8" stroke="#28584E" stroke-width="2" />
        <ellipse cx="170" cy="240" rx="50" ry="20" fill="#FFFDF9" stroke="#28584E" stroke-width="2" />
        <path d="M170 190 V225" stroke="#28584E" stroke-width="6" stroke-linecap="round" />
        <rect x="290" y="240" width="160" height="90" rx="10" fill="#EFE6D8" stroke="#28584E" stroke-width="2" />
        <ellipse cx="370" cy="240" rx="50" ry="20" fill="#FFFDF9" stroke="#28584E" stroke-width="2" />
        <path d="M370 190 V225" stroke="#28584E" stroke-width="6" stroke-linecap="round" />
        <!-- Mirrors above -->
        <rect x="110" y="90" width="120" height="80" rx="8" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="2" />
        <rect x="310" y="90" width="120" height="80" rx="8" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="2" />
      </g>
    `,
  },
  {
    dir: "gallery",
    name: "circle-time",
    ratio: [4, 3],
    title: "Morning Circle and Assembly Space",
    subtitle: "Colorful circle rug for morning greetings and social songs",
    tag: "Social Bonding",
    elements: `
      <g transform="translate(100, 40) scale(1.05)">
        <rect x="40" y="40" width="560" height="420" rx="16" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="3" />
        <circle cx="320" cy="250" r="160" fill="#FFFDF9" stroke="#E5DDD0" stroke-width="3" />
        <circle cx="320" cy="250" r="110" fill="#EFE6D8" />
        <circle cx="320" cy="250" r="60" fill="#28584E" />
        <!-- Seating dots -->
        <circle cx="320" cy="120" r="18" fill="#C25E2E" />
        <circle cx="430" cy="180" r="18" fill="#4E7E73" />
        <circle cx="440" cy="310" r="18" fill="#C25E2E" />
        <circle cx="370" cy="380" r="18" fill="#4E7E73" />
        <circle cx="270" cy="380" r="18" fill="#C25E2E" />
        <circle cx="200" cy="310" r="18" fill="#4E7E73" />
        <circle cx="210" cy="180" r="18" fill="#C25E2E" />
      </g>
    `,
  },
  {
    dir: "about",
    name: "campus",
    ratio: [4, 5],
    title: "Little Steps Lucknow Campus",
    subtitle: "Founded on gentle care, safety standards and parental trust",
    tag: "Gomti Nagar, Lucknow",
    elements: `
      <g transform="translate(80, 80) scale(1.2)">
        <rect x="40" y="60" width="480" height="580" rx="16" fill="#FFFDF9" stroke="#E5DDD0" stroke-width="3" />
        <!-- Campus architecture emblem -->
        <polygon points="280,120 440,240 120,240" fill="#28584E" />
        <rect x="140" y="240" width="280" height="260" fill="#F7F2E9" stroke="#28584E" stroke-width="2" />
        <rect x="240" y="360" width="80" height="140" rx="8" fill="#C25E2E" />
        <circle cx="280" cy="290" r="24" fill="#FFFDF9" stroke="#28584E" stroke-width="2" />
        <!-- Garden trees -->
        <circle cx="90" cy="430" r="40" fill="#4E7E73" />
        <rect x="85" y="470" width="10" height="40" fill="#C25E2E" />
        <circle cx="470" cy="430" r="40" fill="#4E7E73" />
        <rect x="465" y="470" width="10" height="40" fill="#C25E2E" />
      </g>
    `,
  },
  {
    dir: "contact",
    name: "campus-gate",
    ratio: [4, 5],
    title: "Campus Entrance and Visitor Check-In",
    subtitle: "Visitor identification register and supervised drop-off zone",
    tag: "Visitor Entrance",
    elements: `
      <g transform="translate(80, 80) scale(1.2)">
        <rect x="40" y="60" width="480" height="580" rx="16" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="3" />
        <!-- Entrance gate pillars -->
        <rect x="100" y="180" width="60" height="340" rx="8" fill="#28584E" />
        <rect x="400" y="180" width="60" height="340" rx="8" fill="#28584E" />
        <!-- Ornamental arch -->
        <path d="M100 180 Q280 90 460 180" stroke="#28584E" stroke-width="12" fill="none" />
        <!-- Signboard -->
        <rect x="180" y="120" width="200" height="50" rx="8" fill="#FFFDF9" stroke="#C25E2E" stroke-width="3" />
        <text x="280" y="152" fill="#28584E" font-size="16" font-weight="bold" text-anchor="middle">LITTLE STEPS</text>
        <!-- Gate grille -->
        <line x1="160" y1="280" x2="400" y2="280" stroke="#C25E2E" stroke-width="4" />
        <line x1="160" y1="360" x2="400" y2="360" stroke="#C25E2E" stroke-width="4" />
        <line x1="160" y1="440" x2="400" y2="440" stroke="#C25E2E" stroke-width="4" />
      </g>
    `,
  },
];

function escapeXML(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function generateSVG(img) {
  const [rx, ry] = img.ratio;
  const width = rx * 200;
  const height = ry * 200;

  const rawSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" fill="none">
  <!-- Clean background tone -->
  <rect width="${width}" height="${height}" fill="#FFFDF9" />
  <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="20" fill="#F7F2E9" stroke="#E5DDD0" stroke-width="2" />

  <!-- Atmospheric Vector Scene -->
  ${img.elements}

  <!-- Lower Branding and Atmosphere Overlay Strip -->
  <rect x="32" y="${height - 96}" width="${width - 64}" height="68" rx="12" fill="#192A25" opacity="0.95" />
  <text x="52" y="${height - 68}" fill="#F6F4EE" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="16" font-weight="700">${escapeXML(img.title)}</text>
  <text x="52" y="${height - 46}" fill="#9EB3AC" font-family="'Inter', system-ui, sans-serif" font-size="11.5">${escapeXML(img.subtitle)}</text>
  <rect x="${width - 190}" y="${height - 84}" width="140" height="26" rx="13" fill="#28584E" />
  <text x="${width - 120}" y="${height - 67}" fill="#FFFFFF" font-family="'Inter', system-ui, sans-serif" font-size="9.5" font-weight="600" text-anchor="middle">${escapeXML(img.tag)}</text>
</svg>`;

  // Thorough sanitization for any rogue ampersand in the SVG
  return rawSVG.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, "&amp;");
}

async function run() {
  console.log("Creating image directories and writing SVG assets...");
  for (const img of images) {
    const dirPath = path.join(process.cwd(), "public", "images", img.dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    const svgContent = generateSVG(img);
    const svgPath = path.join(dirPath, `${img.name}.svg`);
    fs.writeFileSync(svgPath, svgContent, "utf-8");
  }

  console.log("Launching Edge browser to rasterize WebP images...");
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  for (const img of images) {
    const [rx, ry] = img.ratio;
    const width = rx * 250;
    const height = ry * 250;
    await page.setViewport({ width, height, deviceScaleFactor: 2 });

    const svgPath = path.join(process.cwd(), "public", "images", img.dir, `${img.name}.svg`);
    const svgContent = fs.readFileSync(svgPath, "utf-8");
    await page.setContent(`<!DOCTYPE html><html><body style="margin:0;padding:0;overflow:hidden;background:#FFFDF9;">${svgContent}</body></html>`);

    const webpPath = path.join(process.cwd(), "public", "images", img.dir, `${img.name}.webp`);
    await page.screenshot({ path: webpPath, type: "webp", quality: 90 });
    console.log(`Generated fresh: ${img.dir}/${img.name}.webp (${width}x${height})`);
  }

  await browser.close();
  console.log("All photographic atmosphere assets created successfully!");
}

run().catch((err) => {
  console.error("Asset generation error:", err);
  process.exit(1);
});

# Content & Asset Migration Inventory: Unique Engineers Revamp

**Project:** Unique Engineers Website Revamp  
**Reference Legacy Source:** `legacy-website/`  
**Target:** Modern Next.js / React Architecture (`new-website/`)  
**Status Key:**
- **Retain:** Migrate content and essence as-is with modern formatting.
- **Redesign:** Re-architect, modernize UI/UX, and enhance capabilities.
- **Migrate:** Extract, optimize, and convert assets/copy for new system.
- **Retire:** Explicitly eliminate (dead code, security vulnerabilities, rogue/orphaned data).

---

## 1. Page & Route Inventory

| # | Legacy Route / File | Canonical URL / Entity | Primary Content / Purpose | Legacy Implementation | Revamp Action | Migration Notes |
|---|---|---|---|---|---|---|
| 1 | `iis6954.asp` | `/` (Home) | Hero slider, intro copy, 3 stat counters (20+ yrs, 50+ projects, 7500+ mandays), services grid preview, client logo carousel | Classic ASP + SSI + Revolution Slider | **Redesign** | Modern hero with responsive industrial imagery, animated counters, featured services, client logo wall, and call-to-action sections. |
| 2 | `about_us.asp` | `/about` | Company overview, 21 turnkey service bullet points, Mission Statement, Experience since 1999, Organization narrative | Classic ASP + SSI | **Retain & Redesign** | Structure into clean narrative sections with interactive tabs or timeline: Company Story, Core Competencies, Mission & Quality Policy, Milestones. |
| 3 | `services.asp` | `/services` | Overview index of 24 turnkey engineering services with thumbnail images and short summaries | Classic ASP + SSI | **Redesign** | Modern responsive grid with categorized filtering (Paint Finishing, Mechanical Handling, Fabrication & Piping, Special Operations). |
| 4 | `structure.asp` | `/services/[slug]` | Service detail template (MS Structures, Ducting, Tanks, Ovens, etc.) | Classic ASP + ADODB (broken DB call) | **Redesign** | Dynamic Next.js route powered by typed static content objects (MDX or JSON). Each service gets full scope, specs, and lightbox gallery. |
| 5 | `ms_structure.asp` | `/services/ms-structures` | MS Structures static page with 4 gallery photos | Classic ASP + Lightbox | **Migrate** | Consolidate content & images into `/services/ms-structures`. |
| 6 | `ducting.asp` | `/services/ducting` | Ducting static page with 4 gallery photos | Classic ASP + Lightbox | **Migrate** | Consolidate content & images into `/services/ducting`. |
| 7 | `platforms.asp` | `/services/platforms-and-under-guards` | Platforms static page with gallery photos | Classic ASP + Lightbox | **Migrate** | Consolidate content & images into `/services/platforms-and-under-guards`. |
| 8 | `maintanance.asp` | `/services/plant-maintenance` | Plant Maintenance static page with photos | Classic ASP + Lightbox | **Migrate** | Consolidate content & images into `/services/plant-maintenance`. |
| 9 | `services2.asp` | N/A | Duplicate / experimental service layout | Classic ASP + SSI | **Retire** | Redundant test file; delete from new architecture. |
| 10 | `services - Copy.asp` | N/A | Unfinished static service page links | Classic ASP + SSI | **Retire** | Unused backup copy. |
| 11 | `gallery.asp` | `/gallery` | Project portfolio with 100+ project images and category filter tabs | Classic ASP + MixItUp + Lightbox | **Redesign** | Fast, high-performance responsive gallery with Next/Image optimization, categorized filter pills, and accessible modal lightbox. |
| 12 | `gallery1.asp` | N/A | Contains profile for "Sumeet Trans Logistics Pvt Ltd (STLPL)" | Classic ASP + Webflow tabs | **Retire** | **CRITICAL:** Third-party rogue data accidentally left by web agency. Must NOT be migrated. |
| 13 | `clients.asp` | `/clients` | Showcase of 18 marquee industrial client logos + experience counters | Classic ASP + SSI + image grid | **Redesign** | High-fidelity logo grid with verified company names, industry sectors, and client testimonial / partner highlight cards. |
| 14 | `team.asp` | `/team` (or `/about#team`) | Leadership profiles for Mr. Gautam Basu, Mr. Vijay Bhide, Mr. D.G. Bhatt | Classic ASP + Webflow tabs | **Retain & Redesign** | Professional leadership cards with detailed technical bios, educational credentials, and verified corporate direct contact emails. |
| 15 | `team2.asp` | N/A | Duplicate MixItUp layout of team profiles | Classic ASP + SSI | **Retire** | Redundant test file. |
| 16 | `safety.asp` | `/safety` | Zero casualties record since 1999, PPE protocol, ISI standard equipment, 3 safety photos | Classic ASP + SSI | **Retain & Redesign** | Key corporate differentiator. Build dedicated EHS (Environmental Health & Safety) section with safety stats, protocol highlights, and certification badges. |
| 17 | `career.asp` | `/careers` | "Coming Soon" placeholder text | Classic ASP + SSI | **Redesign** | Create a functional careers page with job roles (Site Engineers, Fabricators, Project Managers, Draftsmen) and an applicant resume submission form. |
| 18 | `news.asp` | `/news` | "Coming Soon" placeholder text | Classic ASP + SSI | **Redesign / Retire** | Replace with a "Projects & Company Updates" section or defer until content is available. |
| 19 | `contact_us.asp` | `/contact` | Head Office & Work addresses, phone numbers, email, interactive contact form | Classic ASP + SSI + reCAPTCHA | **Redesign** | Modern contact page with interactive Google Map / OpenStreetMap embed, contact cards for both locations, and secure server-validated inquiry form. |
| 20 | `sendmail.asp` | `/api/contact` | Mailer endpoint executing CDO.Message with hardcoded agency Gmail credentials | Classic ASP | **Retire & Replace** | Replace entirely with Next.js Server Action / API Route using modern transactional email provider (Resend, SendGrid, Postmark, or secure company SMTP). |
| 21 | `privacy_policy.asp` | `/privacy-policy` | Standard corporate privacy policy | Classic ASP + SSI | **Retain & Update** | Clean semantic typography, updated for 2026 data compliance (DPDP Act India / GDPR). |
| 22 | `terms_condition.asp` | `/terms-of-use` | Comprehensive corporate terms of use | Classic ASP + SSI | **Retain & Update** | Clean semantic typography and updated company particulars. |
| 23 | `tolexo_scrap.asp` | N/A | 1680 links to third-party hardware supplier `tolexo.com` | Plain HTML | **Retire** | Unrelated web scraper utility; delete. |
| 24 | `Default.aspx` | N/A | Generic IIS placeholder page | ASP.NET | **Retire** | Unused hosting artifact; delete. |
| 25 | `old/*` | N/A | Entire legacy subfolder containing retired e-commerce store (`data_unique.mdb`, OpenCart, Hitachi/Stanley spares) | Classic ASP + Access DB | **Retire / Archive** | Keep in read-only legacy archive. Do not deploy to new website unless spares catalogue is specifically requested as a Phase 2 project. |
| 26 | `temp/*` | N/A | Contains scraper spreadsheets, mockups, design docx | Various | **Retire / Reference** | Reference `Website Changes ( Engineering ).docx` for client specifications; do not deploy to production. |

---

## 2. Engineering Services Inventory (24 Service Disciplines)

All 24 service disciplines listed in `services.asp` and `sidebar.asp` have corresponding image directories in `legacy-website/images/services/`.

| # | Service Category Name | Slug Identifier | Image Asset Directory | Scope of Work Summary | Migration Status |
|---|---|---|---|---|---|
| 1 | MS Structures | `ms-structures` | `images/services/ms_structures/` (4 images) | Fabrication and installation of heavy steel structures for industrial plants. | **Migrate & Enhance** |
| 2 | Process Tanks and Tunnel | `process-tanks-and-tunnel` | `images/services/tanks_tunnels/` (4 images) | Installation of pretreatment dip tanks, spray tunnels, and chemical holding units. | **Migrate & Enhance** |
| 3 | Ducting | `ducting` | `images/services/ducting/` (4 images) | Fabrication and erection of exhaust, fresh air, and recirculation ductwork. | **Migrate & Enhance** |
| 4 | Chimney | `chimney` | `images/services/chimney/` (4 images) | Heavy crane installation of high-altitude industrial exhaust chimneys. | **Migrate & Enhance** |
| 5 | Platforms and under guards | `platforms-and-under-guards` | `images/services/platforms/` (4 images) | Catwalks, elevated maintenance platforms, safety under-guard nets and meshes. | **Migrate & Enhance** |
| 6 | Bottom Conveyor | `bottom-conveyor` | `images/services/bottom_conveyor/` (4 images) | Inverted floor conveyors, slat conveyors, and skid transfer mechanisms. | **Migrate & Enhance** |
| 7 | Over Head Conveyor | `overhead-conveyor` | `images/services/overhead_conveyor/` (4 images) | Overhead Power & Free (P&F) conveyors and monorail continuous loops. | **Migrate & Enhance** |
| 8 | Conveyor Structure | `conveyor-structure` | `images/services/conveyor_structure/` (4 images) | Heavy-duty structural support tracks, headers, and sway bracing for material handling. | **Migrate & Enhance** |
| 9 | Conveyor and Handling Systems | `conveyor-and-handling-systems` | `images/services/conveyor_and_handeling_system/` (4 images) | End-to-end automated automotive body transfer and assembly line handling systems. | **Migrate & Enhance** |
| 10 | Drop Lifts | `drop-lifts` | `images/services/drop_lifts/` (4 images) | Vertical drop sections and scissor lifts for multi-tier paint shop transitions. | **Migrate & Enhance** |
| 11 | Booth | `booths` | `images/services/booths/` (6 images) | Spray booths, water-wash booths, Hydrospin booths, and dry filter enclosures. | **Migrate & Enhance** |
| 12 | Oven | `ovens` | `images/services/oven/` (4 images) | Gas-fired, electrical, and thermic fluid curing and drying ovens with turbulators. | **Migrate & Enhance** |
| 13 | Motors Fans and Plant Machinery | `motors-fans-and-plant-machinery` | `images/services/motor_fans/` (4 images) | Heavy industrial blowers, exhaust fans, centrifugal pumps, and pump skids. | **Migrate & Enhance** |
| 14 | Non Silicone PVC and EPDM Gaskets | `non-silicone-pvc-and-epdm-gaskets` | `images/services/silicon_pvc/` (4 images) | Specialized automotive-grade non-cratering seals and extruded profiles. | **Migrate & Enhance** |
| 15 | Painting Robot | `painting-robots` | `images/services/painting_robot/` (4 images) | Integration, booth mounting, and robotic painting arm installation. | **Migrate & Enhance** |
| 16 | Aluminum Doors and Windows | `aluminum-doors-and-windows` | `images/services/aluminium_doors/` (4 images) | Cleanroom-spec double-sealed industrial doors, viewing ports, and airlock windows. | **Migrate & Enhance** |
| 17 | Air supply units | `air-supply-units` | `images/services/air_supply/` (4 images) | Fresh air AHUs, temperature/humidity control units, and filtration banks. | **Migrate & Enhance** |
| 18 | Erection and Commissioning | `erection-and-commissioning` | `images/services/ercection_commissioning/` (4 images) | Full on-site mechanical erection, testing, cold trials, and commissioning. | **Migrate & Enhance** |
| 19 | Paint Shop Enclosures | `paint-shop-enclosures` | `images/services/paint_shop/` (4 images) | Insulated sandwich panel booths, air-sealed cleanrooms, and vestibules. | **Migrate & Enhance** |
| 20 | Critical Shut Down Jobs | `critical-shutdown-jobs` | `images/services/critical_shutdown/` (4 images) | High-speed 24/7 turnaround maintenance and overhaul during annual plant shutdowns. | **Migrate & Enhance** |
| 21 | Toughened Glasses | `toughened-glasses` | `images/services/toughed_glass/` (4 images) | High-durability safety laminated glass and inspection viewports for booths. | **Migrate & Enhance** |
| 22 | Plant Shifting and Re-location | `plant-shifting-and-relocation` | `images/services/plant_shifting/` (4 images) | Complete dismantling, cataloging, transport, re-erection, and re-commissioning. | **Migrate & Enhance** |
| 23 | Fire Fighting Systems | `fire-fighting-systems` | `images/services/fighting_systems/` (4 images) | Industrial sprinkler networks, hydrant piping, CO2 flooding systems for booths. | **Migrate & Enhance** |
| 24 | Piping | `piping` | `images/services/piping/` (4 images) | Process piping (SS/MS), utility lines, compressed air, and paint circulation loops. | **Migrate & Enhance** |

---

## 3. Brand Assets, Visuals & Static Media Inventory

### 3.1 Logos & Brand Identity
| Asset Path | Format / Size | Description | Revamp Action | Notes |
|---|---|---|---|---|
| `images/logo_new1.png` | PNG (300px width) | Current header logo | **Migrate / Vectorize** | Check vector source `temp/Unique Engineers website issues/UE Logo.cdr` for lossless SVG generation. |
| `images/favicon.png` | PNG (56x56) | Site favicon | **Migrate & Modernize** | Generate multi-resolution `favicon.ico`, `icon.png`, `apple-icon.png`. |
| `temp/Unique Engineers website issues/UE Logo.cdr` | CorelDraw Vector | Raw vector brand source | **Migrate** | Convert to scalable `.svg` for optimal resolution across Retina/4K displays. |
| `temp/Unique Engineers website issues/Unique_Engineers_Tshirt-1.jpg` | JPG | Staff apparel branding | **Archive** | Corporate reference. |

### 3.2 Client Logos (`images/clients/`)
| Asset Filename | Current File | Target Company / Entity | Recommendation |
|---|---|---|---|
| `clients1.png` to `clients18.png` | 18 PNG files | Automotive OEMs, Paint Finishers, Industrial Conglomerates | **Migrate & Vectorize/Clean:** Audit against client note: remove Hyundai, Reliance, Panalpina, Ingersoll Rand, L&T if requested; add MAG India logo. |

### 3.3 Safety & Facility Images
| Asset Path | Content | Recommendation |
|---|---|---|
| `images/s11.png` | Safety PPE & helmet | **Migrate & Optimize** to WebP/AVIF. |
| `images/s22.png` | Safety harnesses & height equipment | **Migrate & Optimize** to WebP/AVIF. |
| `images/s33.png` | Industrial glasses & face protection | **Migrate & Optimize** to WebP/AVIF. |

### 3.4 Discarded & Orphaned Archives
| Item | Size | Type | Recommendation |
|---|---|---|---|
| `services - Copy.zip` | 1.52 GB | Uncompressed duplicate image repository | **DO NOT MIGRATE TO NEW REPO.** Reference on local drive only. |
| `old/data_unique.mdb` | 29.3 MB | Jet 4.0 Access database for retired e-commerce | **DO NOT MIGRATE TO NEW REPO.** |
| `old/admin/test.mdb` | 557 KB | CuteEditor test database | **DO NOT MIGRATE.** |
| `temp/Tolexo all.xls` | 92.5 MB | Third-party web scraper data | **DO NOT MIGRATE.** |
| `temp/now_purchase xlx.xlsx` | 25.3 MB | Third-party web scraper data | **DO NOT MIGRATE.** |
| `temp/nowpurchase-selected category.xls` | 15.9 MB | Third-party web scraper data | **DO NOT MIGRATE.** |

---

## 4. Fonts, Styles & Scripts Inventory

### 4.1 Fonts & Icons
* **FontAwesome 4.x (`fonts/FontAwesome.otf`, `fonts/fontawesome-webfont.*`):**
  - *Recommendation:* Replace with modern tree-shaken SVG icons via `lucide-react` or `@heroicons/react`. Eliminates legacy font downloads.
* **Flaticon (`fonts/Flaticon.*`):**
  - *Recommendation:* Convert referenced industrial icons (call, envelope, map-pin, technician, badge, tools) into lightweight React SVG components.
* **Webflow typography styles:**
  - *Recommendation:* Replace with modern system typography stack (`Inter` or `Plus Jakarta Sans` via `next/font/google`).

### 4.2 Legacy Scripts to Retire
* `vendor/jquery-2.1.4.js` (Obsolete, security risk) -> Replace with native React 19 / Next.js state.
* `vendor/bootstrap/bootstrap.min.js` -> Replace with Tailwind CSS components.
* `vendor/revolution/*` (Slider Revolution jQuery plugins) -> Replace with accessible, touch-friendly carousel (e.g., Embla Carousel or Swiper React).
* `vendor/fancy-box/jquery.fancybox.pack.js` -> Replace with lightweight React Lightbox (`yet-another-react-lightbox`).
* `vendor/WOW-master/dist/wow.min.js` & `animate.css` -> Replace with performant Tailwind transitions or Framer Motion / Motion One.
* `vendor/jquery.countTo.js` -> Replace with lightweight React counter hook using `IntersectionObserver`.
* `vendor/gmaps.min.js` -> Replace with static Google Maps Embed iframe or interactive Mapbox/Google React wrapper without leaked keys.


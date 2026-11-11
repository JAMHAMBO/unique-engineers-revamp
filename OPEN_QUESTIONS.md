# Open Questions & Decisions for Stakeholder Approval: Unique Engineers Revamp

**Project:** Unique Engineers Website Revamp  
**Date:** November 2026  
**Status:** Awaiting User / Client Decisions Before Implementation  

---

The following architectural and business decisions require your confirmation before we proceed to build the new website in `new-website/`.

---

### Decision 1: Disposition of the Online Spares / E-Commerce System
* **Context:** In the legacy codebase (`legacy-website/old/`), there is a retired e-commerce application (`spares.asp`, cart, checkout, and a 29.3 MB `data_unique.mdb` Access database) previously linked in the footer as `http://spares.uniqueengineers.com/` for Hitachi, DeWalt, Stanley, and Black & Decker power tools and spares.
* **Options:**
  - **Option A (Recommended): Pure B2B Corporate Focus.** Formally retire the legacy spares store and focus 100% of the new site on Unique Engineers' core turnkey automotive paint shop and industrial engineering services.
  - **Option B: Inquiry-Based Spares Page.** Provide a static B2B spare parts catalog page (e.g. non-silicone gaskets, pumps, blowers, filters, replacement panels) with a direct RFQ (Request for Quote) inquiry form without e-commerce checkout.
  - **Option C: Phase 2 Standalone Store.** Defer the e-commerce store to an independent Phase 2 project on a modern platform (Shopify or Next.js Commerce).
* **Question for You:** *Should the revamp completely retire the spares store (Option A), or should we include a B2B spares catalog with an RFQ form (Option B)?*

---

### Decision 2: Contact Form Email Delivery & Service Provider
* **Context:** The legacy site used hardcoded cleartext credentials for an agency mailbox (`webenquiry@overtures-infotech.com`) sending via Gmail SMTP to `info@uniqueengineers.com`.
* **Options:**
  - **Option A (Recommended): Modern Transactional API (Resend / SendGrid / Postmark).** Requires setting up SPF/DKIM DNS records on the domain for 99.9% inbox delivery and zero maintenance.
  - **Option B: Corporate SMTP.** Provide authenticated SMTP credentials for the official corporate email server (e.g. Google Workspace, Microsoft 365, or Plesk/cPanel mail server for `uniqueengineers.com`).
  - **Option C: Serverless Form Endpoint (Web3Forms / Formspree).** For zero-backend deployment.
* **Question for You:** *Which email dispatch method and destination email address(es) should receive contact form submissions and quote requests?*

---

### Decision 3: Team Section & Direct Contact Emails
* **Context:** The legacy `team.asp` contains detailed technical biographies for key leadership:
  - **Mr. Gautam Basu** (Graduate Mechanical Engineer, 36+ yrs exp, ex-Eisenmann / Haden GM Projects)
  - **Mr. Vijay Bhide** (Chartered Engineer VJTI, 38+ yrs exp, ex-Haden / Eisenmann Handling Consultant)
  - **Mr. D.G. Bhatt** (Mechanical Engineer, 36+ yrs exp, ex-Eisenmann GM Material & Quality)  
  In the internal document `Website Changes ( Engineering ).docx`, individual emails (`gautambasu@uniqueengineers.com`, `vijaybhide@uniqueengineers.com`, `dgbhatt@uniqueengineers.com`) were specified.
* **Options:**
  - **Option A (Recommended): Showcase Leadership Profiles with General Contact routing.** Display the impressive professional bios to establish deep technical credibility, but route all inquiries through a central quote form to protect leadership from email harvesting and spam.
  - **Option B: Display Individual Direct Emails.** Publicly display the direct email addresses for all three executives as requested in the legacy document.
* **Question for You:** *Would you like individual executive email addresses displayed publicly on the leadership page, or should all inquiries route centrally to `info@uniqueengineers.com`?*

---

### Decision 4: Client Logo Roster Verification
* **Context:** In `Website Changes ( Engineering ).docx`, there is an explicit instruction:
  > *"Remove Hyundai, Reliance, Panalpina, Ingersoll Rand, L&T and add above Logos in Clients List. Add MAG India Logo."*
* **Question for You:** *Please confirm whether we should proceed with removing Hyundai, Reliance, Panalpina, Ingersoll Rand, and L&T from the client showcase, and whether you have a definitive list of approved client logos to feature.*

---

### Decision 5: Work Address Reconciliation
* **Context:** Two slightly different addresses appear in the project files:
  - **Legacy Footer / Contact Page:**  
    *Gram Panchayat Kalivali, Survey No. 32 & 33, Hissa No. 1A, Priya Complex Bldg No. F, 1st Floor, Gala No. 111, Bhiwandi, Thane - 421302, Maharashtra, INDIA*
  - **Internal Change Document (`Website Changes.docx`):**  
    *Gala no: 13 Priya Complex, Ground Floor, Kariwala Zakat Naka, Bhiwandi - 421302, Maharashtra*
* **Question for You:** *Which work / plant address is current: Gala 111 (1st Floor) or Gala 13 (Ground Floor)?*

---

### Decision 6: Careers Page & Resume Upload Handling
* **Context:** The legacy `career.asp` was an empty "Coming Soon" placeholder. In the revamp, we propose an interactive career application form.
* **Options:**
  - **Option A (Email Attachment):** Send resumes directly as PDF/DOC attachments with the application email (size limit ~5MB).
  - **Option B (Cloud Storage):** Store applicant resumes in secure cloud storage (AWS S3, Cloudflare R2, or Google Cloud Storage) and email a secure download link.
  - **Option C (Email Link / Mailto):** Provide open job descriptions and direct candidates to email their CV directly to `careers@uniqueengineers.com` or `info@uniqueengineers.com`.
* **Question for You:** *Which resume collection method do you prefer for the Careers page?*

---

### Decision 7: Production Hosting Target
* **Context:** The legacy site is hosted on GoDaddy / Plesk Windows Server. Next.js can be deployed either to modern serverless edge platforms or back into standard VPS / container environments.
* **Options:**
  - **Option A: Vercel / Netlify / Cloudflare Pages.** Automatic CI/CD, global CDN edge network, instant SSL, zero infrastructure maintenance.
  - **Option B: Linux VPS / Docker (DigitalOcean, AWS, Linode, Hetzner).** Self-hosted Node.js runtime behind Nginx.
  - **Option C: Existing Plesk / Windows Server.** Using the Plesk Node.js extension or running as a reverse-proxied Node service on IIS.
  - **Option D: Static HTML Export (`output: 'export'`).** 100% static files deployed directly to any standard Apache/IIS web server with serverless form handling.
* **Question for You:** *Where do you plan to host the new website?*


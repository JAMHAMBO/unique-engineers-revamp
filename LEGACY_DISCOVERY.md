# Legacy Website Discovery & Audit: Unique Engineers

**Project:** Unique Engineers Website Revamp  
**Reference Legacy Root:** `legacy-website/`  
**Live Public URL Reference:** `https://uniqueengineers.com`  
**Date of Audit:** November 2026  
**Auditor Mode:** Read-Only Legacy Discovery & Technical Investigation  

---

## 1. Executive Summary

A comprehensive, read-only architectural and code-level audit was conducted on the legacy codebase of Unique Engineers (`legacy-website/`). 

### Core Findings
1. **Platform & Runtime:** The active public website is built on **Classic ASP (Active Server Pages)** running on Microsoft IIS with Plesk hosting (`ultimamac.com` environment, GoDaddy shared hosting infrastructure).
2. **Default Entry Point:** Configured via `web.config` and `.htaccess` as `iis6954.asp`. Requests to `/` or non-existent URLs rewrite/route directly to `iis6954.asp`.
3. **Database Dependency Conclusion:** 
   - **The active public website does NOT have an active, functioning database.** 
   - All content across public pages (Home, About Us, Services overview, Gallery, Clients, Safety, Team, Career, Contact Us, Privacy Policy, Terms & Conditions) is hardcoded into HTML and Classic ASP files.
   - An attempted dynamic service template (`structure.asp?category=...`) references an Access database string `../data/data_unique1.mdb` via `connection.asp`. However, `../data/data_unique1.mdb` does not exist in the extracted deployment, and the site relies on static content or standalone pages.
   - A legacy e-commerce system exists inside `legacy-website/old/` with an embedded 29.3 MB Microsoft Access database (`data_unique.mdb`), but this represents a retired/orphaned spare parts store (`spares.uniqueengineers.com`) and is completely decoupled from the primary corporate identity site.
4. **Forms & Email Delivery:** The contact form submits to `sendmail.asp`, which utilizes **CDO.Message** over Gmail SMTP with **hardcoded, cleartext credentials** for an external agency account. Google reCAPTCHA v2 is superficially checked for non-empty string presence but **never verified against Google's verification API endpoint**.
5. **Artifacts & Debris:** The legacy directory contains over 1.5 GB of orphaned zip files, third-party agency scraper scripts (`tolexo_scrap.asp`, `nowpurchase_scrap.asp`), orphaned client templates from another logistics firm (`gallery1.asp` for STLPL), and test databases.

---

## 2. Server Configuration, Routing & Server-Side Architecture

### 2.1 Web Server & Hosting Configuration
* **`web.config`**:
  - Configures IIS `<defaultDocument>` with `<clear />` and prioritizes `iis6954.asp`, followed by `login.asp`, `cart.asp`, `Default.asp`, `index.asp`, `Default.aspx`.
  - Maps custom HTTP errors (400, 401, 403, 404, 405, 406, 407, 412, 414, 415, 500, 501, 502, 503) to absolute paths on Plesk hosting: `G:\PleskVhosts\ultimamac.com\error_docs\...`.
  - Sets ASP.NET compilation temporary directory to `G:\PleskVhosts\ultimamac.com\tmp`.
* **`.htaccess`**:
  - Apache mod_rewrite rules redirecting non-file and non-directory requests to `/iis6954.asp`.
* **`.user.ini`**:
  - PHP configuration specifying GoDaddy shared hosting parameters:
    - `SMTP = "relay-hosting.secureserver.net"`
    - `sendmail_from = "noreply@a2nwvpweb052.shr.prod.iad2.secureserver.net"`
    - `open_basedir = "G:/PleskVhosts/ultimamac.com\;C:\Windows\Temp\"`
    - `error_log = "G:\PleskVhosts\ultimamac.com\logs\php_errors\uniqueengineers.com\php_error.log"`
* **`Default.aspx`**:
  - Unused generic IIS/GoDaddy placeholder page ("Future home of something quite cool").

### 2.2 Server-Side Includes (SSI) Hierarchy
The active Classic ASP site relies on SSI directives `<!--#include file=...-->`:

```
                      +-------------------+
                      |   Page Request    |
                      +---------+---------+
                                |
             +------------------+------------------+
             |                                     |
   <!--#include file=top.asp-->          <!--#include file=footer.asp-->
             |                                     |
   - Logo (images/logo_new1.png)         - Quick Links (Home, About, Services)
   - Phone (+91-22-40036552)             - Head Office (Fort, Mumbai)
   - Email (info@uniqueengineers.com)    - Work Address (Bhiwandi, Thane)
   - Google Translate Widget             - Hardcoded Google Maps API key
   - Main Navigation Menu                - Vendor JS Bundles
             |                                     |
             +------------------+------------------+
                                |
                   <!--#include file=script.asp-->
                                |
                   - Favicon (images/favicon.png)
                   - css/style.css, css/responsive.css
                   - Conditional HTML5Shiv & Respond.js
                                |
                   <!--#include file=sidebar.asp-->
                                |
                   - Service sub-navigation:
                     Links to structure.asp?category=[Category]
```

---

## 3. Comprehensive Inventory of Legacy Routes & Pages

### 3.1 Active Corporate Site Pages (Web Root)

| Legacy File | Route / Purpose | Server Scripting | Data Sources | Status |
| :--- | :--- | :--- | :--- | :--- |
| `iis6954.asp` | **Home Page** (`/`, default document) | SSI: `top.asp`, `script.asp`, `footer.asp` | Hardcoded HTML; counters (20+ yrs, 50+ projects, 7500+ mandays); owl-carousel client logos | **Retain & Revamp** |
| `about_us.asp` | **About Us** (`#1` Profile, `#2` Mission, `#3` Experience, `#4` Organization) | SSI: `top.asp`, `script.asp`, `sidebar.asp`, `footer.asp` | Hardcoded HTML; 21 service bullet points | **Retain & Revamp** |
| `services.asp` | **Engineering Services Overview** | SSI: `top.asp`, `script.asp`, `footer.asp` | Hardcoded grid of 24 turnkey engineering services | **Retain & Revamp** |
| `structure.asp` | **Dynamic Service Detail Page** | SSI: `connection.asp`, `top.asp`, `sidebar.asp`, `footer.asp`; ADODB Recordset query | Attempts SQL query to `tblservices` via `data_unique1.mdb` (missing DB) | **Redesign into Static/Dynamic Next.js routes** |
| `ms_structure.asp` | Standalone MS Structures Service Page | SSI: `top.asp`, `script.asp`, `sidebar.asp`, `footer.asp` | Hardcoded static gallery & description | **Migrate content** |
| `ducting.asp` | Standalone Ducting Service Page | SSI: `top.asp`, `script.asp`, `sidebar.asp`, `footer.asp` | Hardcoded static gallery & description | **Migrate content** |
| `platforms.asp` | Standalone Platforms Service Page | SSI: `top.asp`, `script.asp`, `sidebar.asp`, `footer.asp` | Hardcoded static gallery & description | **Migrate content** |
| `maintanance.asp` | Standalone Maintenance Service Page | SSI: `top.asp`, `script.asp`, `sidebar.asp`, `footer.asp` | Hardcoded static gallery & description | **Migrate content** |
| `services2.asp` | Experimental service template | SSI | Duplicate service layout | **Retire** |
| `gallery.asp` | **Project Gallery** | SSI: `top.asp`, `script.asp`, `footer.asp`; MixItUp + Lightbox | 100+ images categorized across MS, Tanks, Ducting, Chimney, Platforms, Conveyors | **Retain & Modernize** |
| `gallery1.asp` | Tabbed corporate profile | SSI | **Rogue Content:** Contains company profile, mission, and leadership for *Sumeet Trans Logistics Pvt Ltd (STLPL)* | **Deliberately Retire** |
| `clients.asp` | **Client Showcase** | SSI: `top.asp`, `script.asp`, `sidebar.asp`, `footer.asp` | 18 Client logos (`clients1.png` to `clients18.png`) | **Retain & Modernize** |
| `team.asp` | **Leadership & Team** (Webflow Tabs) | SSI: `top.asp`, `script.asp`, `sidebar.asp`, `footer.asp` | Detailed bios for Mr. Gautam Basu, Mr. Vijay Bhide, Mr. D.G. Bhatt | **Retain & Elevate** |
| `team2.asp` | Team layout (MixItUp variant) | SSI | Duplicate bios using mixitup | **Retire** |
| `safety.asp` | **Safety Standards & Record** | SSI: `top.asp`, `script.asp`, `sidebar.asp`, `footer.asp` | Zero casualties record, PPE standards, ISI equipment | **Retain & Modernize** |
| `career.asp` | **Careers Page** | SSI: `top.asp`, `script.asp`, `sidebar.asp`, `footer.asp` | "Coming Soon" placeholder | **Redesign with Application Form** |
| `news.asp` | **News & Updates** | SSI: `top.asp`, `script.asp`, `sidebar.asp`, `footer.asp` | "Coming Soon" placeholder | **Redesign / Optional Blog** |
| `contact_us.asp` | **Contact Us & Inquiry Form** | SSI: `top.asp`, `script.asp`, `footer.asp`; POST form to `sendmail.asp` | Head Office & Work Address details, reCAPTCHA v2 | **Redesign with Secure Form** |
| `sendmail.asp` | Form Processing Endpoint | CDO.Message, SMTP over port 465 | Cleartext credentials, flawed captcha check | **Completely Replace** |
| `privacy_policy.asp` | Privacy Policy | SSI | Comprehensive legal copy | **Retain & Update** |
| `terms_condition.asp` | Terms & Conditions | SSI | Comprehensive legal copy | **Retain & Update** |
| `tolexo_scrap.asp` | External web scraper script | Plain HTML / links | 1680 links to `tolexo.com` products | **Deliberately Retire** |
| `connection.asp` | OLE DB Connection string | ASP connection script | Points to missing `../data/data_unique1.mdb` | **Retire** |

---

## 4. Deep-Dive Form & Dynamic Feature Analysis

### 4.1 Contact Form Flow (`contact_us.asp` -> `sendmail.asp`)
* **Input Fields:**
  - `name` (text, required)
  - `phone` (number, required)
  - `email` (email, required)
  - `message` (textarea, optional)
  - `g-recaptcha-response` (reCAPTCHA v2 token)
* **Client-Side Validation:** Basic HTML5 attributes (`required`, `type="email"`, `type="number"`).
* **Processing Flow in `sendmail.asp`:**
  1. **Flawed Captcha Check:**
     ```asp
     captcha = request.form("g-recaptcha-response")
     If captcha = "" Then 
         url = Request.ServerVariables ("HTTP_REFERER")
         Response.redirect url & "?t=Invalid Cpatcha"
     End if
     ```
     *Critical Flaw:* Only verifies that the string parameter is not blank. It never transmits `g-recaptcha-response` to `https://www.google.com/recaptcha/api/siteverify` using the Google secret key. Any automated script passing `g-recaptcha-response=dummy` completely bypasses protection.
  2. **Cleartext Email Credentials:**
     ```asp
     SMTPserver = "smtp.gmail.com"
     SMTPusername = "webenquiry@overtures-infotech.com"
     SMTPpassword = "webenquiry#@1234"
     ```
     *Critical Flaw:* Hardcoded SMTP credentials for an agency mailbox exposed in source files.
  3. **CDO.Message Dispatch:**
     - Sends HTML table formatted email to `info@uniqueengineers.com`.
     - Spoofed sender: `donotreply@donotreply.com`.
     - Checks `session("files")` for attachment at `attachments/` (dead code, no file upload input exists on `contact_us.asp`).
  4. **Redirect:** Redirects to `contact_us.asp?text=1`, displaying green banner: *"Your message has been submitted successfully. Our team shall soon get in touch with you."*

### 4.2 Dynamic Services Logic (`structure.asp`)
* **Invocation:** `structure.asp?category=MS%20Structures`
* **Mechanism:**
  - Includes `connection.asp`.
  - Reads `request.querystring("category")`.
  - Creates `ADODB.Connection` and executes:
    `SELECT * FROM tblservices WHERE category='<category>'` (Direct SQL injection vulnerability if DB was attached).
  - Iterates through recordset outputting `rs("service")` (description text) and `rs("image")` into gallery grid.
* **Failure Mode:** Because `../data/data_unique1.mdb` is absent, in an IIS environment this throws an unhandled 500 error unless error-handling intercepts it. The site appears to have transitioned to static pages (`ms_structure.asp`, `ducting.asp`, `platforms.asp`) or was broken on dynamic clicks.

---

## 5. Database Dependency & Data Source Audit

### 5.1 Investigation Matrix

| Investigation Area | Artifacts Inspected | Finding / Evidence |
| :--- | :--- | :--- |
| **Active Site SQL / ADODB** | `connection.asp`, `structure.asp` | Referenced `DRIVER={Microsoft Access Driver (*.mdb)};DBQ=../data/data_unique1.mdb`. File `data_unique1.mdb` does **NOT** exist in the workspace. |
| **Legacy Root App_Data** | `legacy-website/App_Data` | Completely empty. Zero `.mdf`, `.ldf`, or `.mdb` files. |
| **Legacy `old/` Sub-site** | `legacy-website/old/` | Contains `data_unique.mdb` (29,306,880 bytes). Confirmed via binary extraction: contains tables `products`, `tblorder`, `tbltemporder`, `tblusers`. Contains **no** `tblservices`. |
| **Admin Test MDB** | `legacy-website/old/admin/test.mdb` | Contains 557 KB Access database for `cute_editor` rich-text component tests. |
| **Flat-File / XML / JSON / Text Data** | Workspace search | Found `temp/nowpurchase sorted specification.xlsx`, `temp/Tolexo all.xls`, `old/irsfree_export_excel_bulk.xml`. All are third-party e-commerce scrapers or pricing catalogs. Zero operational CMS flat-files. |
| **API Endpoints** | All script files | No REST, GraphQL, or third-party web services invoked except client-side Google Maps script and Google Translate script. |

### 5.2 Definitive Conclusion on Database Dependency
**The new website has ZERO dependency on any legacy database.**
The active corporate website is completely static presentationally, with dynamic capabilities limited to email dispatch. There are no user accounts, no customer logins, no active shopping carts, and no dynamic CMS content requiring migration from a database.

---

## 6. Security & Migration Risk Assessment

### 6.1 Critical Vulnerabilities & Credentials Exposure
1. **Exposed SMTP Credentials (`sendmail.asp`):**
   - Host: `smtp.gmail.com:465`
   - User: `webenquiry@overtures-infotech.com`
   - Password: `webenquiry#@1234`
   - *Risk:* Account takeover, spam relay, reputation blacklisting.
2. **Exposed Google Maps API Key (`footer.asp`, `contact_us.asp`):**
   - Key: `AIzaSyBZ8VrXgGZ3QSC-0XubNhuB2uKKCwqVaD0`
   - *Risk:* Key leakage; potential billing unauthorized usage if unrestricted.
3. **Broken reCAPTCHA Verification (`sendmail.asp`):**
   - Sitekey: `6Lc5ykIUAAAAAMYM6UBTIFBJV15Xhe4wOvypKg9N`
   - The server code never contacts Google to validate the token, rendering CAPTCHA ineffective against bot attacks.
4. **Direct SQL Injection Vector (`structure.asp`):**
   - Code: `strSQL = "select * from tblservices where category='"&category&"'"`
   - Unsanitized URL parameter concatenated directly into SQL command string.

### 6.2 Architectural & Maintenance Risks
1. **Unversioned, Ancient Dependencies:**
   - jQuery 2.1.4 (released 2015, known security vulnerabilities).
   - Bootstrap 3.3.x.
   - Revolution Slider & FancyBox plugins dating back to 2014-2016.
2. **Hardcoded Hosting & Internal Paths:**
   - Absolute server paths (`G:\PleskVhosts\ultimamac.com\...`) exposed in error documents and `.user.ini`.
3. **Dead / Orphaned 1.5 GB Media Archive:**
   - `services - Copy.zip` (1.52 GB) stored directly in web root, accessible by public HTTP requests if not blocked by IIS rules.
4. **Third-Party Agency Scraper Scripts:**
   - `tolexo_scrap.asp` and `nowpurchase_scrap.asp` left in web root, bloating the site and presenting compliance/security issues.

---

## 7. Client Instructions Uncovered from Project Archive

From `legacy-website/temp/Website Changes ( Engineering ).docx`, key business requirements and stakeholder corrections were recovered:
* **Industry Benchmarks:** The client specifically requested styling, layout panels, and tone inspired by industrial leaders: **Dürr India** (`www.durr-india.com`) and **Eisenmann**.
* **Key Leadership Contacts:**
  - **Mr. Gautam Basu** (`gautambasu@uniqueengineers.com`) — GM Projects (ex-Eisenmann, Haden International, Josts).
  - **Mr. Vijay Bhide** (`vijaybhide@uniqueengineers.com`) — Material Handling Consultant (ex-Haden, Eisenmann, VJTI).
  - **Mr. D.G. Bhatt** (`dgbhatt@uniqueengineers.com`) — GM Material & Quality (ex-Eisenmann, 36+ yrs exp).
* **Corporate Metric Corrections:**
  - Safety Record: 7,500+ Safety Mandays (zero casualties since 1999).
  - Experience: 20+ Years.
  - Projects: 50+ Projects Executed.
* **Client Logo Corrections:**
  - Explicit instruction to remove outdated logos (Hyundai, Reliance, Panalpina, Ingersoll Rand, L&T) and feature verified automotive & industrial engineering clients.
  - Add MAG India.
* **Work Location Clarification:**
  - Head Office: 1st Floor, Khambati Bldg, 213 Bora Bazar Street, Fort, Near CST Railway Station, Mumbai 400001.
  - Work Address: Gala No. 13 (or Gala 111), Priya Complex, Ground Floor, Kariwala Zakat Naka / Kalivali, Bhiwandi - 421302.


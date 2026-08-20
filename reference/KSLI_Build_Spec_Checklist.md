# KSLI Website — Build Spec (Part by Part)

---

## PART 1 — Navbar & Routing Skeleton

- [ ] Header component with logo + nav bar
- [ ] Nav items: Home, Sustainability, Livelihood, Academic Programs, CoE & Partners, About KSLI, Submit a Project (button), Contact
- [ ] Dropdown menu component (used by Sustainability, Livelihood, Academic Programs, CoE & Partners, About KSLI)
- [ ] Routes created for all pages (empty/placeholder content):
  - `/`
  - `/sustainability`
  - `/sustainability/microcosm`
  - `/sustainability/research`
  - `/sustainability/projects`
  - `/sustainability/events`
  - `/livelihood`
  - `/livelihood/research`
  - `/livelihood/projects`
  - `/livelihood/events`
  - `/academic-programs`
  - `/academic-programs/degrees`
  - `/academic-programs/pathway`
  - `/academic-programs/prototyping`
  - `/academic-programs/certificates`
  - `/coe-partners`
  - `/coe-partners/centres-of-excellence`
  - `/coe-partners/our-partners`
  - `/about`
  - `/about/vision-mission`
  - `/about/purpose`
  - `/about/thrust-areas`
  - `/about/team`
  - `/submit-a-project`
  - `/contact`
- [ ] Footer component (basic links + copyright)
- [ ] Confirm every nav/dropdown link resolves correctly, no dead links

---

## PART 2 — Shared/Reusable Components

- [ ] Page container/layout wrapper
- [ ] Entry card component (title, image, short description) — reused on all listing pages
- [ ] Section heading component
- [ ] Stats strip component (label + number, repeatable)
- [ ] CTA card component (used for Sustainability/Livelihood cards on Home)
- [ ] Logo grid component (used for Partners)
- [ ] Tabs or grouped-list component (used for Focus Areas, Team groupings, Certificate categories)
- [ ] Roadmap/timeline component (used for Sustainability Pathway steps)

---

## PART 3 — Home Page

- [ ] Hero section (title, tagline, background image)
- [ ] Vision/Mission short summary block + link to About KSLI
- [ ] Stats strip (uses component from Part 2)
- [ ] Two CTA cards: Sustainability, Livelihood
- [ ] "Latest Updates" feed section (placeholder until ENTRY data model exists)
- [ ] Partner logos strip
- [ ] Footer CTA: "Submit a Project"

---

## PART 4 — Sustainability > Kumaraguru Microcosm

- [ ] Page intro block
- [ ] Focus Areas section (grid of tiles/cards)
- [ ] Resources section, grouped into:
  - [ ] Awards & Recognition
  - [ ] Policies
  - [ ] Downloadable Reports/Documents
- [ ] No project/research listing on this page (excluded by design)

---

## PART 5 — Sustainability > Overview

- [ ] Domain description block
- [ ] Focus Areas section (separate from Microcosm's Focus Areas — different heading/data set)

---

## PART 6 — Sustainability > Research / Projects / Events

- [ ] `/sustainability/research` — listing page using Entry Card component
- [ ] `/sustainability/projects` — listing page using Entry Card component
- [ ] `/sustainability/events` — listing page using Entry Card component
- [ ] Each listing page supports static/hardcoded entries for now (data model comes later in Part 12)

---

## PART 7 — Livelihood > Overview / Research / Projects / Events

- [ ] `/livelihood` — domain description + Focus Areas section
- [ ] `/livelihood/research` — listing page
- [ ] `/livelihood/projects` — listing page
- [ ] `/livelihood/events` — listing page

---

## PART 8 — Academic Programs

- [ ] `/academic-programs/degrees` — program listing
- [ ] `/academic-programs/pathway` — roadmap/timeline component populated
- [ ] `/academic-programs/prototyping` — info page
- [ ] `/academic-programs/certificates` — grouped listing (categories + program names)

---

## PART 9 — CoE & Partners

- [ ] `/coe-partners/centres-of-excellence` — listing (name, description, partners)
- [ ] `/coe-partners/our-partners` — logo grid grouped by category

---

## PART 10 — About KSLI

- [ ] `/about/vision-mission` — text blocks
- [ ] `/about/purpose` — text block
- [ ] `/about/thrust-areas` — card listing
- [ ] `/about/team` — grouped listing by vertical, open positions marked distinctly

---

## PART 11 — Contact

- [ ] Enquiry form (non-functional/UI only at this stage)
- [ ] Address/phone/email block
- [ ] Map embed

---

## PART 12 — Data Model & Backend

- [ ] Define `ENTRY` model: id, title, short_description, images[], domain, category, source, status, slug, submitted_by, rejection_reason, created_at, updated_at
- [ ] Define `MICROCOSM_CONTENT` model: id, section (focus_area/resource), title, description, images
- [ ] Set up database
- [ ] Build API endpoints: create entry, list entries (by domain/category/status), get single entry, update entry, delete entry
- [ ] Build API endpoints for MICROCOSM_CONTENT: list, create, update, delete

---

## PART 13 — Submit a Project Form

- [ ] Build `/submit-a-project` form UI: title, short description, image upload (2–3), domain select, category select, submitter name/email/phone
- [ ] Form validation (required fields, image count/size limits)
- [ ] On submit → create ENTRY with status "pending"
- [ ] Confirmation message shown to submitter after successful submission

---

## PART 14 — Admin Dashboard: Auth & Pending Queue

- [ ] Admin login/auth
- [ ] Pending submissions queue view
- [ ] Entry detail/preview view (all fields + images)

---

## PART 15 — Admin Actions

- [ ] Approve action → status = "approved," entry goes live
- [ ] Edit & Approve action → allow editing all fields (including domain/category) before approving
- [ ] Reject action → status = "rejected," optional reason field
- [ ] Admin interface to manage/edit existing seed entries
- [ ] Admin interface to manage MICROCOSM_CONTENT

---

## PART 16 — Wire Approved Entries to Live Pages

- [ ] Listing pages (Research/Projects/Events, both domains) fetch approved entries from API instead of static/hardcoded arrays
- [ ] Approved entries render alongside seed entries with no visual distinction
- [ ] Each entry has a working public detail page at its slug/URL

---

## PART 17 — Notifications

- [ ] Notify admin when a new submission comes in (email and/or dashboard badge)
- [ ] Notify submitter when their entry is approved
- [ ] Notify submitter when their entry is rejected (include reason if provided)

---

## Notes for Coding Agent

- Build strictly in part order — do not start Part 12+ (data/backend) before Parts 1–11 (skeleton + static UI) are complete.
- No actual page content/copy is included in this document — content gets filled in separately, page by page, once each part's structure is built.
- Flag any open questions (domain classification for shared research topics, admin roles, notification method, image storage service, whether seed content is dashboard-editable) before starting the part they affect.

# Ally Glicker — Professional E-Portfolio

## What this is
A personal portfolio site for Ally Glicker, built for the Grace Hopper Celebration (October 2026).
Recruiters will open it on their phones in the middle of a career-fair conversation, so it has to load fast,
work perfectly on mobile, and get to the point in 30 seconds.

Hosted on GitHub Pages at `https://<github-username>.github.io`.

## Hard rules
- Plain HTML, CSS, and vanilla JavaScript only. No frameworks, no build step, no npm. Ally needs to be
  able to read and explain every file in an interview.
- Mobile-first. Test at 375px wide before anything else.
- NEVER write Ally's bio, reflections, career goals, or project narratives. Those must be her own words
  (it's a requirement of the assignment). Where they go, leave a visible placeholder like
  `<!-- ALLY WRITES: bio, 150–200 words, third person -->` and a short gray "[Bio goes here]" on the page.
- Never invent facts, numbers, dates, links, or skills. Only use what's in the Content section below.
  If something is missing, leave a placeholder and tell Ally.
- Explain what you changed and why after each step, in plain language. Ally learns by doing.

## File structure
```
index.html          all six sections, anchor navigation
styles.css
script.js           only if needed (mobile nav toggle)
assets/
  headshot.jpg
  resume.pdf
  projects/         screenshots
  badges/           certification images
```

## Required sections (in this order)
1. Home / About Me — photo, name, degree + grad date, bio (ALLY WRITES), career goals (ALLY WRITES), links
2. Technical Skills — grouped categories, not skill bars
3. Projects — at least 4 project entries
4. Certifications & Badges — image, issuer, date, 1–2 sentence description (ALLY WRITES), verify link
5. Signature Project Spotlight — deep dive, 200–250 word narrative (ALLY WRITES), career connection (ALLY WRITES)
6. Resume & Contact — embedded/downloadable PDF, LinkedIn, GitHub, email

Each section except Contact also gets a reflection block (ALLY WRITES).

## Design direction
- Ally's brand palette: cool green, cream, charcoal. Editorial and intentional, minimalist, never cluttered
  or juvenile. Keep the cream on the cool side so it doesn't read as the generic warm-beige AI look.
- Starting tokens (Ally: swap in exact hex values from your brand guide if you have them):
  - `--green: #4F6F63` (primary accent)
  - `--sage: #A9BFB3` (secondary, borders, tags)
  - `--cream: #F5F4EE` (background)
  - `--charcoal: #2E3133` (text)
  - `--white: #FFFFFF` (cards, if any)
- One memorable element, everything else quiet. Suggested: the hero — her name set large, with one line
  saying what she does, and the headshot.
- Avoid template tells: no ALL-CAPS eyebrow labels over every heading, no "01 / 02 / 03" numbering
  (the sections aren't a sequence), no fade-in animation on every section, no identical rounded-card grid
  with soft shadows on everything.
- Accessibility floor: visible keyboard focus, alt text on every image, respects reduced motion,
  AA color contrast.

## Content (from resume — the only source of facts)

**Name:** Ally Glicker
**Email:** allyglicker@gmail.com
**LinkedIn:** https://linkedin.com/in/ally-glicker-306a60294
**GitHub:** [ALLY ADDS]
**Location:** Georgia

**Education**
- B.B.A., Management Information Systems, Data Analytics focus — Georgia College & State University, May 2027, GPA 3.8
- M.S., Artificial Intelligence Strategy — GCSU, anticipated 2028, selected as Graduate Assistant
- Study Abroad: AI Intensive, Spain — Summer 2026
- Honors: Dean's List (2023, 2024), President's List (2025)

**Skills (group into categories)**
- AI & automation: Claude Code, Cursor, MCP servers, AI prompting, context engineering, RAG building, Flowise, Base44, Google Apps Script
- Data: SQL, Microsoft Excel (pivot tables)
- Enterprise systems: SAP S/4HANA, Signavio
- Networking: Cisco Packet Tracer

**Certifications**
- CompTIA — Competency in Technology Fundamentals [date + verify link: ALLY ADDS]
- IBM SkillsBuild — Make Agentic AI Work for You [date + verify link: ALLY ADDS]

**Experience**
- AI Implementation Intern, Natural Intelligence Solutions (Eolas Labs), May–June 2026: built AI-powered
  client services with Claude Code and Cursor including MCP server integrations; authored an 11-lesson
  graduate-level course (AI-201: Data Engineering & Pipelines) with slide decks and workbooks under APA 7;
  documented and taught new AI workflows to senior staff, including a DESIGN.md field guide for the
  Claude Code + Cursor build process; researched client briefings for leadership.
- Senior Team Lead & Trainer, Ali's Cookies, 2021–present: leads onboarding and training for all new hires,
  wrote customer-service SOPs, supervises daily workflows for 50+ customers a day.

**Projects**
- Nexus 360 — Predictive Maintenance System. Study abroad team challenge for Hiperbaric
  (GCSU × Universidad de Valladolid), Summer 2026. Co-designed a predictive-maintenance concept for
  Hiperbaric's global HPP-machine fleet using real work-order, purchase-order, and inventory data.
  Risk-tiering framework that targets prediction only where lead time blocks reaction (e.g., a 46-day
  lead time on one part). Presented to Hiperbaric plant leadership and university faculty.
- Study Match — Peer-to-peer study matching app. Business Analysis course, GCSU, Spring 2026.
  Originated the concept, built the working prototype in Base44 as the team's sole developer, authored
  every ERD and DFD (context, Level-0, Level-1), and ran the user interviews that produced the requirements.
- ERP Project — Signavio process modeling + SAP ERPsim. Sales & Marketing lead for a semester-long
  simulated manufacturing company: configured material master data, analyzed regional sales every
  15 days to adjust pricing, coordinated with production and procurement.
- Photo-tracing web app — personal project. Free browser-based replacement for a ~$20/week tracing app,
  built for a friend on iPhone. Live rear camera, photo overlay with opacity/scale/rotate/drag,
  lock-to-trace, edge-detection outline mode. Built as a web app to avoid the $99/yr Apple developer fee.
- AI news digest agent — personal project. Google Apps Script + Anthropic API + Claude web search,
  pushing daily digests to Telegram (switched from ntfy.sh after hitting rate limits).
[For each: problem, role, tools, outcome, link, screenshot. ALLY confirms wording and adds links/images.]

**Signature Project:** [ALLY DECIDES — NIS internship work or Study Match]

**Leadership**
- President, AI Club, GCSU, Jan 2026–present
- President-Elect, Women in Tech, GCSU, 2026–present — mentored high school students in UiPath RPA,
  led VR and AI app development sessions at WIT Day

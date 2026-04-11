# Ashutosh Shukla - DevOps Portfolio PRD

## Original Problem Statement
Build a fully responsive, single-page DevOps portfolio website for Ashutosh Shukla, a CS Engineering student at Abdul Kalam Technical University. Retro terminal/OS theme inspired by PostHog design language. User wants to deploy on AWS S3 + CloudFront.

## Architecture & Tech Stack
- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 with custom `@theme` directive
- **Animations**: Framer Motion 12
- **Icons**: Lucide React + Simple Icons + Custom SVG brand icons
- **Fonts**: Space Grotesk (headings), JetBrains Mono (code), Inter (body)
- **Build Output**: Static export (`next export`) in `/app/portfolio/out/`
- **Deployment Target**: AWS S3 + CloudFront (user-managed)

## User Personas
- **Primary**: Tech recruiters, hiring managers viewing DevOps candidates
- **Secondary**: DevOps community members, potential freelance clients
- **Tertiary**: Fellow students and content followers

## Core Requirements (Static)
- [x] Single-page portfolio with smooth scroll
- [x] 7 sections: Hero, About, Skills, Projects, Experience, Education, Contact
- [x] Retro terminal/OS file-explorer theme
- [x] Dark theme (#1a1a2e bg, #f9bd2b amber accent, #e05c2d burnt orange)
- [x] File-explorer navigation (home.sh, about.md, etc.)
- [x] Framer Motion scroll-triggered animations
- [x] Profile photo integration
- [x] Mobile responsive (320px - 1440px+)
- [x] SEO meta tags (OG, Twitter cards)
- [x] Static export for S3 deployment

## What's Been Implemented (April 2026)
- Complete Next.js 14+ portfolio with TypeScript
- All 7 sections with retro terminal theme
- Custom brand SVG icons (GitHub, LinkedIn, X, Instagram, YouTube, AWS)
- Terminal window components with colored dots
- Typewriter animation in hero section
- Timeline in About section
- Skills with proficiency badges
- Projects with GitHub links (DevOps Roadmap + AWS Resource Tracker)
- Experience git-log style timeline
- Education as JSON syntax-highlighted display
- Contact with social links + disabled form placeholder
- Footer with tech stack badges
- Comprehensive README with AWS S3 + CloudFront deployment guide
- Build successful, static output in `/app/portfolio/out/`

## Testing Results
- Frontend: 98% pass rate
- All sections rendering correctly
- Responsive design verified at desktop, tablet, mobile
- 141 amber accent elements, 64 animated elements
- All GitHub links working

## Prioritized Backlog
### P0 (Done)
- [x] All 7 portfolio sections
- [x] Retro terminal theme
- [x] Static export build
- [x] Profile photo

### P1 (Next Phase)
- [ ] Contact form with Resend integration
- [ ] Update social media URLs with actual profile links
- [ ] GitHub Actions CI/CD workflow (.github/workflows/deploy.yml)
- [ ] AWS S3 deployment script automation

### P2 (Future)
- [ ] Blog/Notes section with MDX
- [ ] Analytics (Vercel Analytics or Umami)
- [ ] Project screenshots/demo GIFs
- [ ] More certifications as they're earned
- [ ] Testimonials section
- [ ] Dark/Light mode toggle

## Next Tasks List
1. User to deploy to AWS S3 + CloudFront using README instructions
2. Add actual social media URLs (Twitter, Instagram, YouTube)
3. Set up GitHub Actions CI/CD for auto-deployment
4. Implement contact form with Resend when ready

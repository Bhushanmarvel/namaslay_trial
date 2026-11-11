# NAMASLAY — Premium Fitness Coaching

Official source code for the NAMASLAY fitness coaching website.

**Trial Website:** https://namaslay-trial.vercel.app

**Main Website:** https://namaslay.co.in

**Digital Products:** https://plans.namaslay.co.in

## Project Overview

NAMASLAY is a fitness coaching platform focused on personalised workout programming, nutrition guidance, fat loss, muscle building, progress tracking and long-term lifestyle transformation.

The website provides information about coaching services, client transformations, program details and digital fitness products.

## Technology Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- React Icons
- Vercel deployment
- GitHub version control

## Website Sections

### 1. Home

The homepage features the NAMASLAY branding, hero image and transformation-focused introduction.

### 2. Client Transformations

Displays before-and-after client transformations in a responsive gallery.

Images are stored in `public/images/Transformations/`.

### 3. Program Details and Digital Products

Two cards provide navigation to the main offerings:

**Program Details**

Scrolls to the detailed coaching information on the same page.

**Digital Products**

Links to https://plans.namaslay.co.in, where visitors can explore fitness products.

### 4. Detailed Coaching Program

The Program Details section explains six key areas:

1. Enrollment and onboarding through Kahunas.
2. Personalised workout and nutrition plans, including Fat Loss and Muscle Building blocks, with daily habit monitoring.
3. One-on-one onboarding session with Bhushan.
4. Daily WhatsApp group communication and accountability.
5. Weekly progress check-in analysis and feedback.
6. Blood work report review to inform coaching decisions where appropriate.

The section includes a sample weekly check-in video and information about Kahunas, Hevy, Strava and WhatsApp.

### 5. Contact and WhatsApp

The original enquiry form has been replaced with a direct WhatsApp contact button.

**WhatsApp:** https://wa.me/917020443962

The Stay Connected section retains the existing social-media links.

## Changes Made in the Trial Version

- Replaced the original eight service cards with Program Details and Digital Products cards.
- Added a detailed, responsive coaching program section.
- Added same-page scrolling to the program section.
- Included a sample weekly check-in video.
- Added Blood Work Analysis to the coaching explanation.
- Included daily habit monitoring within the personalised plan.
- Commented out the Newsletter navigation item.
- Corrected the sixth transformation image's filename reference.
- Replaced the enquiry form with a direct WhatsApp button.
- Maintained the existing NAMASLAY black, white and gold visual theme.

## Project Structure

```text
namaslay_trial/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Transformations.tsx
│   ├── Intro.tsx
│   ├── TransformationPillars.tsx
│   ├── ProgramDetails.tsx
│   ├── EnquiryForm.tsx
│   ├── SocialLinks.tsx
│   └── FloatingWhatsApp.tsx
├── public/
│   └── images/
├── package.json
├── package-lock.json
├── next.config.ts
└── tsconfig.json
```

## Local Development

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 to preview the website.

To check the production build:

```bash
npm run build
```

## Deployment

The trial repository is connected to Vercel.

Changes committed to the connected production branch can trigger automatic deployments.

Trial deployment:

https://namaslay-trial.vercel.app

The trial deployment is separate from the main NAMASLAY website.

**Do not transfer the main domain or modify its DNS configuration without explicitly planning and verifying the production migration.**

## Security Notes

- Never commit `.env.local`, API keys, passwords or private credentials.
- Keep environment variables configured securely in the hosting platform.
- Review integrations before deploying updates to production.
- Keep a backup of the previous working website before publishing significant changes.

## Future Updates

Potential future improvements include updating the weekly check-in sample video and refining the coaching information.

Changes should be tested on the trial deployment before being published to the main website.

---

**NAMASLAY — Premium Fitness Coaching**

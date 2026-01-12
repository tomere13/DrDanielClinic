# Dr. Daniel Clinic - Aesthetic Treatments Landing Page

A high-performance, fully accessible landing page for Dr. Daniel Clinic, specializing in Botox and aesthetic treatments, built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🎯 Features

### Core Functionality

- **Hero Section**: Professional design with "Expert Botox & Aesthetic Treatments" tagline and clear CTA
- **About Section**: Professional biography highlighting medical expertise and patient care
- **Treatments Section**: Card-based display of aesthetic services (Botox, Dermal Fillers, Facial Aesthetics, Medical Treatments)
- **Contact Form**: Fully validated form using React Hook Form + Zod with accessible error messages
- **Custom Accessibility Widget**: Floating accessibility menu with comprehensive options
- **WhatsApp Integration**: Direct link to clinic WhatsApp (+972-54-818-5506)
- **Google Maps**: Embedded map showing clinic location

### Accessibility Features (WCAG 2.1 AA Compliant)

- ✅ **Text Sizing**: Toggle between 1x, 1.25x, and 1.5x font sizes
- ✅ **High Contrast Modes**: Yellow on Black / White on Black options
- ✅ **Reduce Motion**: Toggle for users with vestibular disorders
- ✅ **Hearing Support**: Explicit SMS/WhatsApp availability for hearing-impaired clients
- ✅ **Semantic HTML**: Proper use of `<main>`, `<section>`, `<h1>-<h6>`, etc.
- ✅ **Focus Management**: Visible focus rings for keyboard navigation
- ✅ **ARIA Labels**: Comprehensive ARIA attributes for screen readers
- ✅ **Color Contrast**: All colors pass WCAG AA contrast ratios

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📋 Prerequisites

⚠️ **Important**: This project requires **Node.js >= 20.9.0**

Check your Node version:

```bash
node --version
```

If you need to upgrade, we recommend using [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 20
nvm use 20
```

## 🚀 Getting Started

### Installation

```bash
# Navigate to the project directory
cd yulia-law-landing

# Install dependencies
npm install

# Set up environment variables (for email functionality)
# Get your FREE Web3Forms key from https://web3forms.com
# See QUICK_START.md for 2-minute setup guide

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Email Setup (100% FREE!)

The contact form sends emails to **yuliamosh.law@gmail.com** using Web3Forms (completely free, unlimited emails).

**Quick Setup (2 minutes):**

1. Go to [Web3Forms.com](https://web3forms.com)
2. Enter email: `yuliamosh.law@gmail.com`
3. Get your free access key from email
4. Add to `.env.local`:
   ```bash
   WEB3FORMS_ACCESS_KEY=your_access_key
   ```
5. Restart dev server: `npm run dev`

✅ **FREE Forever** | ✅ **Unlimited Emails** | ✅ **No Domain Required**

For detailed instructions, see [QUICK_START.md](./QUICK_START.md) or [FREE_EMAIL_SETUP.md](./FREE_EMAIL_SETUP.md).

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🔧 Code Quality & DevOps

### ESLint Configuration

ESLint is configured with Next.js recommended rules and Prettier integration. See `eslint.config.mjs`.

### Prettier Configuration

Code formatting is enforced via `.prettierrc` with consistent style rules.

### Husky Git Hooks

Pre-commit hooks are configured to automatically:

- Run ESLint and fix issues
- Format code with Prettier
- Prevent bad code from being committed

Configuration: `.husky/pre-commit`

### Lint-Staged

Automatically runs linters only on staged files for faster commits. Configuration in `package.json`.

## 📁 Project Structure

```
yulia-law-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with accessibility provider
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles & accessibility classes
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── About.tsx           # About section
│   │   ├── Services.tsx        # Practice areas cards
│   │   ├── ContactForm.tsx     # Validated contact form
│   │   ├── Footer.tsx          # Footer component
│   │   └── AccessibilityWidget.tsx  # Floating accessibility menu
│   ├── contexts/
│   │   └── AccessibilityContext.tsx  # Global accessibility state
│   └── lib/
│       └── utils.ts            # Utility functions (cn helper)
├── .husky/
│   └── pre-commit             # Git pre-commit hook
├── eslint.config.mjs          # ESLint configuration
├── .prettierrc                # Prettier configuration
├── package.json               # Dependencies & scripts
└── README.md                  # This file
```

## 🎨 Accessibility Implementation

### Font Size Control

Applied globally via HTML class names:

- `font-size-normal` (16px)
- `font-size-large` (20px)
- `font-size-extra-large` (24px)

### High Contrast Modes

Applied globally via HTML class names:

- `contrast-high-yellow` (Yellow text on Black background)
- `contrast-high-white` (White text on Black background)

### Reduce Motion

Applied globally via `reduce-motion` class, disabling animations and transitions.

### Settings Persistence

All accessibility preferences are saved to `localStorage` and restored on page reload.

## 🚀 Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Vercel Dashboard

1. Push code to GitHub
2. Import repository in [Vercel Dashboard](https://vercel.com/new)
3. Vercel auto-detects Next.js and deploys

### Option 3: Vercel Git Integration

Connect your GitHub repository to Vercel for automatic deployments on push.

### Environment Variables for Production

When deploying to Vercel, add these environment variables:

```bash
WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Go to Project Settings → Environment Variables in Vercel Dashboard.

## 📝 Customization Guide

### Update Contact Information

Current contact details:

- **Phone**: +972-52-306-4062
- **WhatsApp**: +972-52-306-4062 (with green WhatsApp icon and clickable link)
- **Email**: yuliamosh.law@gmail.com
- Office hours: Sunday-Thursday 9:00-17:00, Friday 9:00-13:00

To change these:

- Contact display info: Edit `src/components/ContactForm.tsx`
- Email recipient: Edit `src/app/api/contact/route.ts` (line 17, the `to:` field)

### Update Practice Areas

Edit `src/components/Services.tsx`:

- Modify the `services` array to add/remove/edit practice areas

### Update Professional Information

Edit `src/components/About.tsx`:

- Professional biography text
- Credentials and highlights

### Branding & Colors

Edit `src/app/globals.css` and Tailwind classes in components to customize:

- Primary color (currently blue-600)
- Typography
- Spacing

## 🧪 Testing Accessibility

### Manual Testing

1. **Keyboard Navigation**: Press `Tab` to navigate, `Enter` to activate
2. **Screen Reader**: Test with NVDA (Windows) or VoiceOver (macOS)
3. **High Contrast**: Enable high contrast mode in accessibility widget
4. **Font Scaling**: Test with browser zoom and widget font controls

### Automated Testing Tools

- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (built into Chrome DevTools)

## 📄 License

© 2026 Yulia Moshinsky Biton Law Office. All rights reserved.

## 🤝 Support

For questions or issues with this codebase, please open an issue in the repository.

---

**Built with accessibility, performance, and user experience in mind.**

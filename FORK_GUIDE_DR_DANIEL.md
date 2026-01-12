# 🔄 Fork Guide: Adapting for Dr. Daniel Botox Business

Complete guide to adapt this landing page for Dr. Daniel's botox/cosmetic business.

---

## Step 1: Copy the Project

### Create New Directory:

```bash
# Go to parent directory
cd /Users/tomer/Documents/Tomer/Yuila

# Copy entire project
cp -r yulia-law-landing dr-daniel-botox

# Go to new project
cd dr-daniel-botox
```

---

## Step 2: Initialize New Git Repository

```bash
# Remove old git history
rm -rf .git

# Initialize fresh git
git init

# Create new repo on GitHub:
# Go to https://github.com/new
# Name: dr-daniel-botox
# Keep private
# Don't initialize with README

# Add new remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/dr-daniel-botox.git

# First commit
git add .
git commit -m "Initial commit: Dr. Daniel Botox landing page forked from law template"
git branch -M main
git push -u origin main
```

---

## Step 3: Update package.json

```bash
cd dr-daniel-botox
```

**Edit `package.json`:**

```json
{
  "name": "dr-daniel-botox",
  "version": "0.1.0",
  "private": true,
  // ... rest stays the same
}
```

---

## Step 4: Content Changes Checklist

### 📝 Files to Modify:

#### 1. **`src/app/layout.tsx`** - Metadata

```typescript
export const metadata: Metadata = {
  title: "Dr. Daniel - Expert Botox & Aesthetic Treatments | Beer Sheva",
  description:
    "Professional botox and aesthetic treatments by Dr. Daniel. Expert injections, dermal fillers, and cosmetic procedures in Beer Sheva.",
  keywords: [
    "botox",
    "aesthetic treatments",
    "dermal fillers",
    "cosmetic injections",
    "Dr. Daniel",
    "Beer Sheva",
    "anti-aging",
    "facial aesthetics",
  ],
};
```

---

#### 2. **`src/components/Hero.tsx`** - Hero Section

```typescript
// Line 23-27: Update name and tagline
<h1>
  Dr. Daniel
  <span className="mt-2 block text-3xl text-blue-300 md:text-4xl lg:text-5xl">
    Expert Botox & Aesthetic Treatments
  </span>
</h1>

// Line 28-31: Update description
<p>
  Professional aesthetic treatments with precision, care, and natural-looking
  results. Your beauty goals deserve expert attention.
</p>

// Line 38: Update CTA
<button>
  Book Consultation
</button>
```

---

#### 3. **`src/components/Header.tsx`** - Navigation

```typescript
// Line 63-65: Update logo text
<span className="text-base font-bold text-gray-900 sm:text-xl">
  <span className="hidden sm:inline">Dr. Daniel Aesthetics</span>
  <span className="sm:hidden">Dr. Daniel</span>
</span>
```

---

#### 4. **`src/components/About.tsx`** - About Section

```typescript
// Update heading
<h2>About Dr. Daniel</h2>

// Update paragraphs
<p>
  As a licensed aesthetic physician with extensive experience in cosmetic
  procedures, Dr. Daniel brings a combination of medical expertise, artistic
  vision, and dedication to natural-looking results.
</p>

<p>
  With a track record of satisfied patients and beautiful outcomes, Dr. Daniel
  provides personalized treatment plans tailored to your unique features,
  ensuring safe and effective aesthetic enhancements.
</p>

// Update feature cards:
const features = [
  {
    icon: Award, // or use Stethoscope from lucide-react
    title: "Medical Expertise",
    description:
      "Board-certified physician specializing in aesthetic treatments and cosmetic procedures.",
  },
  {
    icon: Star, // or use Sparkles
    title: "Natural Results",
    description:
      "Focus on subtle enhancements that preserve your unique features and natural beauty.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description:
      "Personalized consultations and transparent communication throughout your treatment.",
  },
];
```

---

#### 5. **`src/components/Services.tsx`** - Services/Treatments

```typescript
import { Syringe, Sparkles, Heart, Shield } from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "Botox Injections",
    description:
      "FDA-approved botox treatments for wrinkles, fine lines, and facial rejuvenation with natural-looking results.",
  },
  {
    icon: Sparkles,
    title: "Dermal Fillers",
    description:
      "Volume restoration, lip enhancement, and facial contouring using premium hyaluronic acid fillers.",
  },
  {
    icon: Heart,
    title: "Facial Aesthetics",
    description:
      "Complete facial rejuvenation treatments including skin tightening, lifting, and anti-aging procedures.",
  },
  {
    icon: Shield,
    title: "Medical-Grade Treatments",
    description:
      "Advanced aesthetic procedures including PRP therapy, chemical peels, and laser treatments.",
  },
];

// Update section heading
<h2>Our Treatments</h2>
```

---

#### 6. **`src/components/ContactForm.tsx`** - Contact Info

```typescript
// Line 86-97: Update phone
<a href="tel:+972501234567">  // Replace with Dr. Daniel's number
  +972-50-123-4567
</a>

// Line 114-121: Update email
<a href="mailto:dr.daniel@aesthetics.co.il">
  dr.daniel@aesthetics.co.il
</a>

// Line 132-134: Update office hours
<p>Sunday - Thursday: 9:00 - 19:00</p>
<p>Friday: 9:00 - 14:00</p>

// Update WhatsApp link (if different number)
// Line 155
href="https://wa.me/972501234567"

// Update contact form subject line
// Line 47
subject: `New Consultation Request - ${data.name}`,

// Update Web3Forms - get NEW access key for Dr. Daniel's email
// Line 46
access_key: "GET_NEW_KEY_FROM_WEB3FORMS_FOR_DR_DANIEL_EMAIL",

// Update office address
<address className="mt-2 not-italic text-gray-700" dir="rtl" lang="he">
  [Dr. Daniel's Clinic Address]<br />
  באר שבע
</address>

// Update Google Maps link
href="https://www.google.com/maps/search/?api=1&query=[DR_DANIEL_ADDRESS]"
```

---

#### 7. **`src/components/FloatingActions.tsx`** - Floating Buttons

```typescript
// Line 9: Update WhatsApp number
window.open("https://wa.me/972501234567", "_blank", "noopener,noreferrer");

// Line 14: Update location
window.open(
  "https://www.google.com/maps/search/?api=1&query=[DR_DANIEL_ADDRESS]",
  "_blank",
  "noopener,noreferrer"
);

// Line 56: Update tooltip
WhatsApp: +972-50-123-4567
```

---

#### 8. **`src/components/Footer.tsx`** - Footer

```typescript
// Line 9: Update name
<span className="text-xl font-bold">Dr. Daniel Aesthetics</span>

// Line 13-14: Update description
<p className="mb-2">Board-Certified Aesthetic Physician</p>
<p className="text-sm">
  Professional botox, dermal fillers, and advanced aesthetic treatments in Beer Sheva.
</p>

// Line 19-21: Update copyright
<p>
  &copy; {currentYear} Dr. Daniel Aesthetics Clinic. All rights reserved.
</p>
```

---

#### 9. **`README.md`** - Documentation

Update entire README with:
- Dr. Daniel's business name
- Botox/aesthetics focus
- New contact information
- Update screenshots (after design is done)

---

#### 10. **`public/`** - Images & Icons

Replace:
- Favicon (`favicon.ico`)
- Add Dr. Daniel's logo
- Add clinic photos (optional)
- Update any placeholder images

---

## Step 5: Design/Color Adjustments (Optional)

### Consider updating colors for medical/aesthetic feel:

**`src/app/globals.css` and components:**

```css
/* Instead of blue-600, consider: */

/* Medical Blue */
--primary: #0891b2; /* cyan-600 - medical/clean feel */

/* Luxury Purple */
--primary: #9333ea; /* purple-600 - premium/luxury */

/* Medical Green */
--primary: #059669; /* emerald-600 - health/wellness */
```

**Update in components:**
- Search for `blue-600` → Replace with your chosen color
- Search for `blue-500` → Replace accordingly
- Update gradient colors in Hero section

---

## Step 6: Get New Web3Forms Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter: **Dr. Daniel's email** (e.g., `dr.daniel@aesthetics.co.il`)
3. Get new access key
4. Update in `src/components/ContactForm.tsx` line 46

---

## Step 7: Update Environment Variables

```bash
# If using .env.local
# Update with new Web3Forms key
WEB3FORMS_ACCESS_KEY=new_key_for_dr_daniel
```

---

## Step 8: Test Everything

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Test at http://localhost:3000
```

### Testing Checklist:
- [ ] Hero section shows Dr. Daniel's name
- [ ] Services show botox/aesthetic treatments
- [ ] Contact form sends to Dr. Daniel's email
- [ ] WhatsApp opens with correct number
- [ ] Location opens Dr. Daniel's clinic on map
- [ ] About section describes Dr. Daniel
- [ ] Footer has correct copyright
- [ ] All links work

---

## Step 9: Commit Changes

```bash
git add .
git commit -m "Customize for Dr. Daniel Botox business"
git push origin main
```

---

## Step 10: Deploy to Vercel

Follow same deployment steps in `DEPLOYMENT_GUIDE.md`:

1. Go to [https://vercel.com](https://vercel.com)
2. Import the NEW repository (`dr-daniel-botox`)
3. Deploy
4. Get new URL: `https://dr-daniel-botox.vercel.app`

---

## Quick Find & Replace Guide

**Use your code editor's "Find in Files" to replace:**

| Find | Replace With |
|------|--------------|
| `Yulia Moshinsky Biton` | `Dr. Daniel` |
| `yuliamosh.law@gmail.com` | `dr.daniel@aesthetics.co.il` |
| `+972-52-306-4062` | `+972-50-123-4567` (new number) |
| `Advocate` | `Aesthetic Physician` |
| `Legal` | `Aesthetic` or `Medical` |
| `law` | `aesthetics` or `botox` |
| `הנרייטה סולד 8, בניין A` | `[Dr. Daniel's Address]` |

---

## Additional Improvements for Medical Business

### Consider Adding:

1. **Before/After Gallery** (if legally allowed with patient consent)
2. **Treatment Pricing** (optional)
3. **Insurance Information** (if applicable)
4. **Medical Certifications** section
5. **FAQ Section** about treatments
6. **Video testimonials** (with consent)
7. **Treatment duration/recovery info**

---

## Important Medical/Legal Notes

### ⚠️ Medical Compliance:

- [ ] Ensure all medical claims are accurate
- [ ] Include appropriate disclaimers
- [ ] Patient testimonials need consent
- [ ] Before/after photos need releases
- [ ] Check local medical advertising regulations
- [ ] Include medical license numbers if required

---

## Support Files to Update

- [ ] `SECURITY.md` - Update contact info
- [ ] `EMAIL_SETUP.md` - New Web3Forms setup
- [ ] `DEPLOYMENT_GUIDE.md` - Update project name
- [ ] `ACCESSIBILITY_GUIDE.md` - Keep as-is (universal)
- [ ] `EFFECTS_GUIDE.md` - Keep as-is (universal)

---

## Estimated Time

- **Quick Adaptation**: 2-3 hours (text changes only)
- **Full Customization**: 1 day (colors, images, thorough testing)
- **With New Features**: 2-3 days (gallery, pricing, etc.)

---

## Need Help?

This template includes all the same features:
- ✅ Fully responsive
- ✅ Accessibility widget
- ✅ Contact form
- ✅ WhatsApp integration
- ✅ Google Maps
- ✅ Animations
- ✅ Security features

Just update the content and deploy!

---

**Ready to fork? Follow Step 1 and let me know if you need help with any customization!** 🚀💉✨

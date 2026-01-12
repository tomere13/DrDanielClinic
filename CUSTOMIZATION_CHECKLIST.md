# ✅ Dr. Daniel Botox - Customization Checklist

## 📋 Quick Customization Tasks

### 🔴 CRITICAL (Must Do Before Launch)

- [ ] **Get New Web3Forms Key**
  - Go to: https://web3forms.com
  - Enter Dr. Daniel's email
  - Update in `src/components/ContactForm.tsx` line 46

- [ ] **Update Contact Info**
  - [ ] Phone number: `src/components/ContactForm.tsx` (line 89, 155)
  - [ ] Email: `src/components/ContactForm.tsx` (line 114)
  - [ ] WhatsApp: `src/components/FloatingActions.tsx` (line 9)
  - [ ] Office address: `src/components/ContactForm.tsx` (line 357)
  - [ ] Google Maps: `src/components/ContactForm.tsx` (line 368) + `FloatingActions.tsx` (line 13)

- [ ] **Update Business Name** 
  - [ ] Hero: `src/components/Hero.tsx` (line 23)
  - [ ] Header: `src/components/Header.tsx` (line 63-65)
  - [ ] Footer: `src/components/Footer.tsx` (line 9)
  - [ ] Metadata: `src/app/layout.tsx` (line 16-28)

### 🟡 IMPORTANT (Content Updates)

- [ ] **Hero Section** (`src/components/Hero.tsx`)
  - [ ] Update tagline to "Expert Botox & Aesthetic Treatments"
  - [ ] Update description paragraph
  - [ ] Change button text to "Book Consultation"

- [ ] **About Section** (`src/components/About.tsx`)
  - [ ] Update heading to "About Dr. Daniel"
  - [ ] Rewrite bio paragraphs for medical practice
  - [ ] Update feature cards (Medical Expertise, Natural Results, Patient-Centered)

- [ ] **Services Section** (`src/components/Services.tsx`)
  - [ ] Replace with: Botox Injections, Dermal Fillers, Facial Aesthetics, Medical Treatments
  - [ ] Update icons (Syringe, Sparkles, Heart, Shield)
  - [ ] Update heading to "Our Treatments"

- [ ] **Contact Form**
  - [ ] Update office hours
  - [ ] Update form subject line
  - [ ] Update office location details

- [ ] **Footer**
  - [ ] Update to "Board-Certified Aesthetic Physician"
  - [ ] Update description for botox/aesthetics
  - [ ] Update copyright

### 🟢 OPTIONAL (Nice to Have)

- [ ] Change color scheme (blue → cyan/purple/emerald for medical feel)
- [ ] Add Dr. Daniel's logo to `public/`
- [ ] Update favicon
- [ ] Add clinic photos
- [ ] Add before/after gallery (with patient consent)
- [ ] Add pricing section
- [ ] Add FAQ section

---

## 🚀 Quick Start Commands

### Test Locally:
```bash
cd /Users/tomer/Documents/Tomer/Yuila/dr-daniel-botox
npm install
npm run dev
# Open http://localhost:3000
```

### Push to GitHub:
```bash
# Create repo on GitHub first: https://github.com/new
# Name: dr-daniel-botox

git add .
git commit -m "Initial commit: Dr. Daniel Botox landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/dr-daniel-botox.git
git push -u origin main
```

### Deploy to Vercel:
1. Go to https://vercel.com
2. Import GitHub repo: dr-daniel-botox
3. Click Deploy
4. Done! ✅

---

## 📞 Dr. Daniel - Contact Info to Update

**Update these in all files:**

| Item | Current (Yulia) | New (Dr. Daniel) |
|------|----------------|------------------|
| Name | Yulia Moshinsky Biton | Dr. Daniel |
| Title | Advocate/Lawyer | Aesthetic Physician |
| Phone | +972-52-306-4062 | `[NEW_NUMBER]` |
| Email | yuliamosh.law@gmail.com | `[NEW_EMAIL]` |
| Address | הנרייטה סולד 8, בניין A | `[NEW_ADDRESS]` |
| Business | Law Office | Aesthetic Clinic |
| Services | Legal Services | Botox & Aesthetics |

---

## 🔍 Find & Replace Suggestions

Use VS Code "Find in Files" (Cmd+Shift+F):

1. Find: `Yulia Moshinsky Biton` → Replace: `Dr. Daniel`
2. Find: `yuliamosh.law@gmail.com` → Replace: `dr.daniel@email.com`
3. Find: `+972-52-306-4062` → Replace: `[new phone]`
4. Find: `Advocate` → Replace: `Aesthetic Physician`
5. Find: `Legal` → Replace: `Aesthetic` or `Medical`

---

## ✨ Everything Else Works As-Is!

These features don't need changes:
- ✅ Accessibility widget
- ✅ Responsive design
- ✅ Animations
- ✅ Security features
- ✅ Form validation
- ✅ Mobile menu
- ✅ Floating buttons

Just update the content and you're ready to go! 🚀

---

**See `FORK_GUIDE_DR_DANIEL.md` for detailed instructions.**

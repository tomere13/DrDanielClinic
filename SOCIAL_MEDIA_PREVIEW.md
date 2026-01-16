# 🔗 Social Media Link Preview Setup

## ✅ What Was Done

Your site is now configured to show the **logo** when you share links on:

- 📘 Facebook
- 💬 WhatsApp
- 🐦 Twitter/X
- 💼 LinkedIn
- 📱 iMessage
- 📧 Email clients
- And other platforms that support Open Graph metadata

## 🔍 How to Test

### 1. **Facebook Sharing Debugger**

```
https://developers.facebook.com/tools/debug/
```

- Paste your URL: `https://drdaniel-clinic.com`
- Click "Debug" to see how your link will appear
- Click "Scrape Again" if you make changes

### 2. **Twitter Card Validator**

```
https://cards-dev.twitter.com/validator
```

- Enter your URL
- See the preview

### 3. **LinkedIn Post Inspector**

```
https://www.linkedin.com/post-inspector/
```

- Enter your URL
- Check the preview

### 4. **WhatsApp**

Just send the link to yourself and see how it appears!

---

## 🎨 Current Setup

Your metadata now includes:

```typescript
openGraph: {
  images: [
    {
      url: "/logo.png",
      width: 1200,
      height: 630,
      alt: "קליניקת ד״ר דניאל - לוגו",
    },
  ];
}
```

---

## 🚀 Optimal Social Media Image

### Current Status:

- ✅ Logo is set as the preview image
- ⚠️ Logo might not be perfectly sized for social media

### Recommended: Create an Optimized OG Image

**Ideal dimensions:** 1200px × 630px

#### Option 1: Simple Logo on Background (Recommended)

Create a 1200×630 image with:

- Your rose color background (`#b7748d` or gradient)
- Your logo centered
- Optional: Add text like "קליניקת ד״ר דניאל"

#### Option 2: Use Existing Logo

Your current `logo.png` will work, but might have white space or not fill the preview box perfectly.

---

## 📸 How to Create the Perfect OG Image

### Using Canva (Free & Easy):

1. Go to https://canva.com
2. Create custom size: **1200 × 630 pixels**
3. Add your rose background color: `#b7748d`
4. Upload and center your logo
5. Optional: Add text "ד״ר דניאל ורשקוב - בוטוקס באר שבע"
6. Download as PNG
7. Save as `/public/og-image.png`

### Using Photoshop/Figma:

1. Create new file: 1200×630px
2. Background: `#b7748d` or gradient
3. Import logo, center it
4. Add text if desired
5. Export as PNG: `/public/og-image.png`

### Then Update Your Code:

```typescript
// In src/app/layout.tsx
images: [
  {
    url: "/og-image.png", // Instead of /logo.png
    width: 1200,
    height: 630,
    alt: "קליניקת ד״ר דניאל - לוגו",
  },
];
```

---

## 🎯 What Each Platform Shows

### Facebook & WhatsApp

- **Image**: 1200×630 recommended
- **Title**: First line of text
- **Description**: Preview text
- **Domain**: Shows your website URL

### Twitter/X

- **Image**: 1200×630 for "summary_large_image"
- **Title**: Tweet text or card title
- **Description**: Card description

### LinkedIn

- **Image**: 1200×627 recommended
- **Title**: Post headline
- **Description**: Preview text

---

## 🔧 Troubleshooting

### "My logo doesn't appear when I share the link"

**1. Clear Social Media Cache:**

- Facebook: Use the Sharing Debugger and click "Scrape Again"
- Twitter: Wait 1-2 hours or use the Card Validator
- WhatsApp: Wait ~24 hours for cache to clear

**2. Check the Image Path:**

```bash
# Make sure the file exists
ls -la dr-daniel-botox/public/logo.png
```

**3. Image Requirements:**

- ✅ Format: PNG or JPG
- ✅ Size: Under 8MB
- ✅ Dimensions: At least 200×200, recommended 1200×630
- ✅ No transparent background for best results

### "The image looks stretched or cropped"

- Solution: Create a properly sized 1200×630 image (see above)
- Each platform crops differently
- Safe zone: Keep important content in the center 1000×500 area

---

## 📱 Preview on Different Platforms

### Desktop:

```
Facebook:  Full image with title & description below
Twitter:   Large card with image on top
LinkedIn:  Image with title overlay
```

### Mobile:

```
WhatsApp:  Small thumbnail with title
iMessage:  Rich preview with image
Telegram:  Full image preview
```

---

## 🌟 Pro Tips

### 1. **Use High-Quality Images**

- At least 1200×630 pixels
- 72 DPI is fine for web
- Keep file size under 1MB for fast loading

### 2. **Test on Multiple Platforms**

Before announcing your site, test on:

- WhatsApp (most used in Israel!)
- Facebook
- Instagram Stories (when sharing link)
- LinkedIn

### 3. **Update Regularly**

- Change OG image seasonally
- Update for special promotions
- Test after each change

### 4. **Keep It Simple**

- Logo + background color works great
- Don't add too much text
- High contrast for readability

---

## 🎨 Design Ideas for Your OG Image

### Option 1: Minimal Elegance

```
Background: Rose gradient (#b7748d to #d4a5b8)
Logo: Centered, white or dark version
Text: None (logo speaks for itself)
```

### Option 2: Professional Card

```
Background: White or light rose
Logo: Top center
Text: "ד״ר דניאל ורשקוב"
Subtitle: "בוטוקס | פילר | אסתטיקה רפואית"
Footer: Phone number
```

### Option 3: Bold Statement

```
Background: Dark rose (#3b2330)
Logo: Large, centered
Text: "באר שבע | 054-818-5506"
Accent: Rose border or frame
```

---

## 📦 Files You Can Use

### Current Files:

```
✅ /public/logo.png          - Your main logo
✅ /public/botox-cover.jpeg  - Alternative background
✅ /public/favicon.svg       - Icon (too small for OG)
```

### Recommended to Add:

```
📸 /public/og-image.png      - 1200×630 optimized social preview
📸 /public/og-logo-square.png - 500×500 for platforms that prefer square
```

---

## 🔄 How to Update in the Future

### To Change the Preview Image:

1. **Add new image** to `/public/` folder
2. **Update** `src/app/layout.tsx`:
   ```typescript
   images: [
     {
       url: "/your-new-image.png",
       width: 1200,
       height: 630,
       alt: "Your new description",
     },
   ];
   ```
3. **Deploy** to Vercel
4. **Clear cache** on social platforms (see above)

---

## ✅ Checklist

- [x] Logo set as Open Graph image
- [x] Twitter Card configured
- [x] Image dimensions specified (1200×630)
- [x] Alt text added for accessibility
- [ ] (Optional) Create optimized 1200×630 OG image
- [ ] Test on Facebook Debugger
- [ ] Test on Twitter Card Validator
- [ ] Test by sharing in WhatsApp
- [ ] Clear social media cache if needed

---

## 🆘 Need Help?

### If the logo still doesn't show:

1. **Wait 1-2 hours** after deployment
2. **Use Facebook Debugger** to force refresh
3. **Check browser console** for errors
4. **Verify file exists** at `https://yourdomain.com/logo.png`
5. **Check file permissions** on server

### Common Issues:

❌ **"Image not found"**
→ Make sure `/public/logo.png` exists

❌ **"Image too small"**
→ Use at least 200×200 pixels (1200×630 recommended)

❌ **"Wrong aspect ratio"**
→ Create a 1200×630 version for perfect display

❌ **"Old image still shows"**
→ Clear cache using Facebook Debugger

---

## 🎉 You're All Set!

Your logo will now appear when you share your website link on social media!

**Test it:**

1. Share your link in WhatsApp to a friend
2. See your beautiful logo appear! ✨

**Remember:**

- Social media platforms cache images for 24-48 hours
- Use the debugger tools to force refresh
- Create a 1200×630 version for best results

---

**Last Updated:** January 2026
**Status:** ✅ Logo configured as social preview
**Next Step:** (Optional) Create optimized 1200×630 OG image

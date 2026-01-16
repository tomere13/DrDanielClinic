# Favicon Information

## Current Favicon: Botox Syringe Icon 💉

Your website now uses a custom botox syringe icon in your brand rose color (#b7748d).

### Files:

- `favicon.svg` - Modern SVG format (scalable, looks perfect on all screens)
- `favicon.ico` - You may want to add this for older browser compatibility

## Optional: Create favicon.ico (for older browsers)

If you want to support very old browsers, convert the SVG to ICO:

### Option 1: Online Converter

1. Go to: https://convertio.co/svg-ico/ or https://favicon.io/
2. Upload `public/favicon.svg`
3. Download the `.ico` file
4. Save it as `public/favicon.ico`

### Option 2: Use Favicon Generator

1. Go to: https://realfavicongenerator.net/
2. Upload `public/favicon.svg`
3. Generate all sizes (includes ICO, Apple Touch Icon, Android icons, etc.)
4. Download and replace files in `public/`

## The SVG Favicon Design

The current favicon features:

- Rose background circle (#b7748d) - your brand color
- White syringe with realistic details
- Measurement marks
- Needle tip
- Professional medical aesthetic

## Current Implementation

The favicon is configured in `/src/app/layout.tsx`:

```typescript
icons: {
  icon: [
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon.ico", sizes: "any" },
  ],
  apple: "/favicon.svg",
}
```

This setup:

- ✅ Uses SVG for modern browsers (crisp on all screens)
- ✅ Falls back to ICO for older browsers (when you add it)
- ✅ Works on Apple devices
- ✅ Automatically updates when you change the SVG

## Browser Support

- **SVG Favicon**: Chrome 80+, Firefox 4+, Safari 9+, Edge 79+
- **ICO Favicon**: All browsers (including IE)

Since 99%+ of users have modern browsers, the SVG alone is fine!

## Customization

Want to change the icon? Edit `public/favicon.svg`:

- Change background color: Modify the `fill="#b7748d"` in the circle
- Change syringe color: Modify `fill="white"` in the syringe parts
- Adjust size/position: Modify the coordinates

---

**Your favicon is ready and working!** 🎨
Modern browsers will show your beautiful botox syringe icon.

# 🚀 COMPLETE RESTORATION GUIDE

**Last Updated:** March 11, 2026  
**For:** DARLA UX/UI Portfolio Complete Backup

---

## ⚡ QUICK RESTORE (Emergency - 5 Minutes)

If everything crashes and you need to get back online FAST:

### Step 1: Restore Core Files (2 min)
```bash
# Copy main homepage
cp /backup/main-app/App.tsx /src/app/App.tsx

# Copy router
cp /backup/routes/routes.tsx /src/app/routes.tsx

# Copy package.json
cp /backup/config/package.json /package.json
```

### Step 2: Install Dependencies (2 min)
```bash
npm install
```

### Step 3: Start Development Server (1 min)
```bash
npm run dev
```

✅ **Your homepage should now be live!**

---

## 🔧 FULL RESTORE (Complete - 15 Minutes)

For a complete restoration of everything:

### Phase 1: Restore Main Application (5 min)

1. **Homepage**
   ```bash
   cp /backup/main-app/App.tsx /src/app/App.tsx
   ```

2. **Router**
   ```bash
   cp /backup/routes/routes.tsx /src/app/routes.tsx
   ```

3. **Configuration**
   ```bash
   cp /backup/config/package.json /package.json
   cp /backup/config/vite.config.ts /vite.config.ts
   cp /backup/config/postcss.config.mjs /postcss.config.mjs
   ```

### Phase 2: Restore Case Studies (5 min)

1. **Automobile POS**
   ```bash
   cp /backup/case-studies/automobile-pos/AutomobilePOS.tsx /src/app/case-studies/automobile-pos/AutomobilePOS.tsx
   cp /backup/case-studies/automobile-pos/BuildingDamageFormPrototype.tsx /src/app/case-studies/automobile-pos/BuildingDamageFormPrototype.tsx
   cp /backup/case-studies/automobile-pos/CourierFormPrototype.tsx /src/app/case-studies/automobile-pos/CourierFormPrototype.tsx
   ```

2. **Automobile Mobile App**
   ```bash
   cp /backup/case-studies/automobile-mobile-app/AutomobileMobileApp.tsx /src/app/case-studies/automobile-mobile-app/AutomobileMobileApp.tsx
   ```

3. **Sports Stadium Experience**
   ```bash
   cp /backup/case-studies/sports-stadium-experience/SportsStadiumExperience.tsx /src/app/case-studies/sports-stadium-experience/SportsStadiumExperience.tsx
   ```

### Phase 3: Restore Components & Styles (3 min)

1. **Components**
   ```bash
   cp -r /backup/components/* /src/app/components/
   ```

2. **Styles**
   ```bash
   cp /backup/styles/fonts.css /src/styles/fonts.css
   cp /backup/styles/index.css /src/styles/index.css
   cp /backup/styles/tailwind.css /src/styles/tailwind.css
   cp /backup/styles/theme.css /src/styles/theme.css
   ```

### Phase 4: Install & Verify (2 min)

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Verify Everything Works:**
   - ✅ Homepage loads
   - ✅ Theme toggle works (dark/light)
   - ✅ All images display
   - ✅ All icons display
   - ✅ All 3 case studies open
   - ✅ Navigation works
   - ✅ Animations play smoothly

---

## 📋 FILE-BY-FILE RESTORATION

### Critical Files (Must Restore First):

#### 1. App.tsx (Homepage)
- **Location:** `/backup/main-app/App.tsx`
- **Restore to:** `/src/app/App.tsx`
- **Size:** 1,000+ lines
- **Contains:** Homepage with 9 sections

#### 2. routes.tsx (Navigation)
- **Location:** `/backup/routes/routes.tsx`
- **Restore to:** `/src/app/routes.tsx`
- **Contains:** React Router configuration for all pages

#### 3. package.json (Dependencies)
- **Location:** `/backup/config/package.json`
- **Restore to:** `/package.json`
- **Contains:** All npm packages including lucide-react, motion/react

### Case Study Files:

#### 4. AutomobilePOS.tsx
- **Location:** `/backup/case-studies/automobile-pos/AutomobilePOS.tsx`
- **Restore to:** `/src/app/case-studies/automobile-pos/AutomobilePOS.tsx`
- **Size:** ~800 lines
- **Sections:** 17 sections (Hero to Impact)

#### 5. BuildingDamageFormPrototype.tsx
- **Location:** `/backup/case-studies/automobile-pos/BuildingDamageFormPrototype.tsx`
- **Restore to:** `/src/app/case-studies/automobile-pos/BuildingDamageFormPrototype.tsx`
- **Type:** Interactive prototype component

#### 6. CourierFormPrototype.tsx
- **Location:** `/backup/case-studies/automobile-pos/CourierFormPrototype.tsx`
- **Restore to:** `/src/app/case-studies/automobile-pos/CourierFormPrototype.tsx`
- **Type:** Interactive prototype component

#### 7. AutomobileMobileApp.tsx
- **Location:** `/backup/case-studies/automobile-mobile-app/AutomobileMobileApp.tsx`
- **Restore to:** `/src/app/case-studies/automobile-mobile-app/AutomobileMobileApp.tsx`
- **Size:** 2,442 lines
- **Assets:** 28 Figma assets

#### 8. SportsStadiumExperience.tsx
- **Location:** `/backup/case-studies/sports-stadium-experience/SportsStadiumExperience.tsx`
- **Restore to:** `/src/app/case-studies/sports-stadium-experience/SportsStadiumExperience.tsx`
- **Size:** 2,381 lines
- **Assets:** 14 Figma assets

---

## 🎨 EXTERNAL RESOURCES

### Images (Auto-Restore)
All images are hosted externally and will load automatically:
- **Unsplash images:** 14 images (URLs in code)
- **Figma assets:** 42 images (imported via figma:asset scheme)
- **See:** `/backup/IMAGES_MANIFEST.md` for complete list

### Icons (Auto-Restore)
All icons from lucide-react package:
- Install via `npm install` (in package.json dependencies)
- **See:** `/backup/ICONS_MANIFEST.md` for complete list

---

## ⚠️ COMMON ISSUES & FIXES

### Issue 1: Images Not Loading
**Problem:** Unsplash images show broken links  
**Solution:** 
- Check internet connection
- Verify URLs haven't changed
- Clear browser cache

### Issue 2: Icons Not Displaying
**Problem:** Lucide icons don't render  
**Solution:**
```bash
npm install lucide-react --save
```

### Issue 3: Figma Assets Not Loading
**Problem:** figma:asset imports fail  
**Solution:**
- Verify import statements don't have `./` or `../` prefixes
- Correct: `import img from "figma:asset/abc123.png"`
- Wrong: `import img from "./figma:asset/abc123.png"`

### Issue 4: Router Not Working
**Problem:** Navigation between pages broken  
**Solution:**
- Ensure routes.tsx is restored
- Verify react-router package is installed
- Check App.tsx imports router correctly

### Issue 5: Styles Not Applied
**Problem:** Website looks unstyled  
**Solution:**
- Restore all 4 style files from `/backup/styles/`
- Verify Tailwind CSS is processing correctly
- Check theme.css for custom properties

---

## 🧪 VERIFICATION CHECKLIST

After restoration, verify each item:

### Homepage:
- [ ] Page loads without errors
- [ ] Dark/light theme toggle works
- [ ] Hero section displays with animations
- [ ] 5 project cards display with images
- [ ] Design process section shows all 7 steps
- [ ] Design tools section shows all 5 tools
- [ ] About section displays designer photo
- [ ] Metrics animate on scroll
- [ ] Testimonials display correctly
- [ ] Contact section with email button
- [ ] Footer with social links
- [ ] Smooth scroll animations
- [ ] Progress bar at top

### Case Studies:
- [ ] Automobile POS opens from homepage
- [ ] All 17 sections render
- [ ] 2 interactive prototypes work
- [ ] Back button returns to portfolio
- [ ] All 8 images load

- [ ] Automobile Mobile App opens
- [ ] All sections render
- [ ] 28 Figma assets load
- [ ] Animations work

- [ ] Sports Stadium opens
- [ ] All 13 sections render
- [ ] 14 Figma assets load
- [ ] Interactive features work

### Navigation:
- [ ] DARLA logo navigates home
- [ ] All navigation links work
- [ ] Mobile menu works
- [ ] Case study links work
- [ ] Back buttons work

### Responsive:
- [ ] Desktop view works (1920px+)
- [ ] Tablet view works (768px-1024px)
- [ ] Mobile view works (375px-768px)
- [ ] All breakpoints render correctly

---

## 📞 EMERGENCY CONTACT

If restoration fails completely:

1. **Check Backup Integrity:**
   - Verify `/backup/` folder exists
   - Check file sizes aren't 0 bytes
   - Confirm all manifest files are present

2. **Re-read Manifests:**
   - COMPLETE_BACKUP_MANIFEST.md
   - IMAGES_MANIFEST.md
   - ICONS_MANIFEST.md

3. **Manual Restore:**
   - Copy files one by one
   - Test after each major file
   - Check browser console for errors

4. **Nuclear Option (Rebuild from Docs):**
   - All backup documentation is complete
   - Can rebuild from manifests if needed
   - All external resources are documented

---

## 🎯 SUCCESS CRITERIA

Restoration is complete when:
- ✅ Homepage displays correctly
- ✅ All 3 case studies open and display
- ✅ All images load (Unsplash + Figma)
- ✅ All icons display (lucide-react)
- ✅ Dark/light theme works
- ✅ Navigation works across all pages
- ✅ Animations play smoothly
- ✅ Mobile responsive design works
- ✅ No console errors

---

## 💾 POST-RESTORATION

After successful restoration:

1. **Test Everything:**
   - Click every link
   - Toggle theme multiple times
   - Test on mobile device
   - Verify all animations

2. **Update Backup:**
   - Note restoration date in manifest
   - Document any issues encountered
   - Update this guide if needed

3. **Create New Backup:**
   - Consider creating incremental backup
   - Update BACKUP_LOG with restoration event

---

**🎉 YOUR PORTFOLIO IS NOW FULLY RESTORED!**

---

**Last Updated:** March 11, 2026  
**Estimated Restoration Time:** 5-15 minutes  
**Success Rate:** 100% if following guide  
**Support:** Refer to backup manifests for details

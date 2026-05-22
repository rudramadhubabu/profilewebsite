# 🌳 COMPLETE FOLDER STRUCTURE

**DARLA Portfolio - Complete File Tree**  
**Generated:** March 10, 2026

---

## 📁 FULL PROJECT STRUCTURE

```
DARLA-PORTFOLIO/
│
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📄 App.tsx                    ⭐ MAIN APPLICATION (800+ lines)
│   │   │
│   │   ├── 📂 components/
│   │   │   └── 📂 figma/
│   │   │       └── 📄 ImageWithFallback.tsx  🔒 PROTECTED - DO NOT MODIFY
│   │   │
│   │   └── 📂 case-studies/              📦 ALL CASE STUDIES HERE
│   │       │
│   │       ├── 📂 automobile-pos/        🚗 POS System
│   │       │   └── 📄 README.md
│   │       │
│   │       ├── 📂 automobile-mobile-app/ 📱 iOS App
│   │       │   └── 📄 README.md
│   │       │
│   │       ├── 📂 teachers-mobile-app/   👩‍🏫 Android App
│   │       │   └── 📄 README.md
│   │       │
│   │       ├── 📂 data-center-website-revamp/ 🌐 Web Design
│   │       │   └── 📄 README.md
│   │       │
│   │       ├── 📂 fitness-tracker/       💪 Health App
│   │       │   └── 📄 README.md
│   │       │
│   │       └── 📂 banking-platform/      💰 FinTech
│   │           └── 📄 README.md
│   │
│   ├── 📂 imports/
│   │   └── (Figma imported assets)
│   │
│   └── 📂 styles/
│       ├── 📄 theme.css
│       └── 📄 fonts.css
│
├── 📂 backup/                            🛡️ YOUR SAFETY NET!
│   │
│   ├── 📄 README.md                      📖 Main overview
│   ├── 📄 BACKUP_MANIFEST.md             📋 Detailed manifest
│   ├── 📄 RESTORE_GUIDE.md               🔄 Restoration steps
│   ├── 📄 BACKUP_INDEX.md                📊 Complete index
│   ├── 📄 BACKUP_SUCCESS.md              ✅ Success confirmation
│   ├── 📄 FOLDER_STRUCTURE.md            🌳 This file!
│   │
│   └── 📂 case-studies/                  💾 BACKUP COPIES
│       │
│       ├── 📂 automobile-pos/
│       │   └── 📄 README.md
│       │
│       ├── 📂 automobile-mobile-app/
│       │   └── 📄 README.md
│       │
│       ├── 📂 teachers-mobile-app/
│       │   └── 📄 README.md
│       │
│       ├── 📂 data-center-website-revamp/
│       │   └── 📄 README.md
│       │
│       ├── 📂 fitness-tracker/
│       │   └── 📄 README.md
│       │
│       └── 📂 banking-platform/
│           └── 📄 README.md
│
└── 📄 package.json                       ⚙️ Dependencies

```

---

## 📊 FOLDER BREAKDOWN

### Production Folders (Where You Work)
```
/src/app/case-studies/
├── automobile-pos/               Location: /src/app/case-studies/automobile-pos/
├── automobile-mobile-app/        Location: /src/app/case-studies/automobile-mobile-app/
├── teachers-mobile-app/          Location: /src/app/case-studies/teachers-mobile-app/
├── data-center-website-revamp/   Location: /src/app/case-studies/data-center-website-revamp/
├── fitness-tracker/              Location: /src/app/case-studies/fitness-tracker/
└── banking-platform/             Location: /src/app/case-studies/banking-platform/
```

### Backup Folders (Your Safety Net)
```
/backup/case-studies/
├── automobile-pos/               Backup: /backup/case-studies/automobile-pos/
├── automobile-mobile-app/        Backup: /backup/case-studies/automobile-mobile-app/
├── teachers-mobile-app/          Backup: /backup/case-studies/teachers-mobile-app/
├── data-center-website-revamp/   Backup: /backup/case-studies/data-center-website-revamp/
├── fitness-tracker/              Backup: /backup/case-studies/fitness-tracker/
└── banking-platform/             Backup: /backup/case-studies/banking-platform/
```

---

## 🎯 FILE LOCATIONS REFERENCE

### Main Application
- **Location:** `/src/app/App.tsx`
- **Backup:** (To be added when needed)
- **Status:** ✅ Active
- **Lines:** ~800+
- **Type:** Main React component

### Case Study: Automobile POS
- **Production:** `/src/app/case-studies/automobile-pos/`
- **Backup:** `/backup/case-studies/automobile-pos/`
- **Category:** POS System
- **Platform:** Desktop/Tablet

### Case Study: Automobile Mobile App
- **Production:** `/src/app/case-studies/automobile-mobile-app/`
- **Backup:** `/backup/case-studies/automobile-mobile-app/`
- **Category:** iOS App
- **Platform:** Mobile (iOS)

### Case Study: Teachers Mobile App
- **Production:** `/src/app/case-studies/teachers-mobile-app/`
- **Backup:** `/backup/case-studies/teachers-mobile-app/`
- **Category:** Android App
- **Platform:** Mobile (Android)

### Case Study: Data Center Website Revamp
- **Production:** `/src/app/case-studies/data-center-website-revamp/`
- **Backup:** `/backup/case-studies/data-center-website-revamp/`
- **Category:** Web Design
- **Platform:** Responsive Web

### Case Study: Fitness Tracker
- **Production:** `/src/app/case-studies/fitness-tracker/`
- **Backup:** `/backup/case-studies/fitness-tracker/`
- **Category:** Health & Wellness
- **Platform:** Mobile

### Case Study: Banking Platform
- **Production:** `/src/app/case-studies/banking-platform/`
- **Backup:** `/backup/case-studies/banking-platform/`
- **Category:** FinTech
- **Platform:** Web/Mobile

---

## 📝 FUTURE CASE STUDY TEMPLATE

When adding new case studies, follow this structure:

```
/src/app/case-studies/[project-name]/
├── 📄 README.md                  Project overview
├── 📄 [ProjectName].tsx          Main case study component
├── 📄 data.ts                    Project data (optional)
└── 📂 assets/                    Images and assets (optional)
    ├── hero-image.jpg
    ├── mockup-1.png
    └── wireframe.png
```

**Then immediately backup to:**
```
/backup/case-studies/[project-name]/
└── (copy all files from production folder)
```

---

## 🔍 QUICK FIND

### Need to Find Something?

| What | Where |
|------|-------|
| Main app | `/src/app/App.tsx` |
| Case studies (work) | `/src/app/case-studies/` |
| Case studies (backup) | `/backup/case-studies/` |
| Components | `/src/app/components/` |
| Styles | `/src/styles/` |
| Backup docs | `/backup/` |
| Restore guide | `/backup/RESTORE_GUIDE.md` |

---

## 📏 SIZE METRICS

### Current State
- **Total Folders:** 12 (6 production + 6 backup)
- **Documentation Files:** 6
- **Case Study READMEs:** 12 (6 + 6 backup)
- **Protected Files:** 2
- **Total Files:** ~20+

### Future Growth
As you add case study content:
- Each case study will have: Component + Assets + Data
- Backup will mirror production exactly
- Documentation will stay synchronized

---

## 🎨 PORTFOLIO SECTIONS (in App.tsx)

The main `/src/app/App.tsx` file contains these sections:

1. **Navigation** - Sticky header with dark/light toggle
2. **Hero Section** - Cinematic intro with parallax
3. **Case Studies Grid** - 6 project cards
4. **Design Process** - 7-step workflow
5. **Skills & Tools** - 5 design tools showcase
6. **About Designer** - DARLA's profile
7. **Impact & Results** - Metrics (5M+ users, 98% satisfaction)
8. **Testimonials** - Client feedback
9. **Contact Section** - Email, LinkedIn, Dribbble
10. **Footer** - Copyright and links

---

## 🛠️ WORKING WITH FILES

### Creating New Case Study
```
1. Create folder: /src/app/case-studies/new-project/
2. Add files in that folder
3. Copy to: /backup/case-studies/new-project/
4. Update BACKUP_INDEX.md
```

### Modifying Existing Case Study
```
1. Edit files in: /src/app/case-studies/[project]/
2. Test changes
3. Copy updated files to: /backup/case-studies/[project]/
```

### Restoring Files
```
1. Open: /backup/RESTORE_GUIDE.md
2. Follow instructions
3. Copy from /backup/ to /src/app/
```

---

## ✅ FOLDER VERIFICATION CHECKLIST

Run this monthly:

- [ ] `/src/app/case-studies/` has 6 folders
- [ ] `/backup/case-studies/` has 6 folders
- [ ] Each folder has README.md
- [ ] `/backup/` has 6 documentation files
- [ ] All paths match this structure document
- [ ] No unauthorized files in backup folder

---

## 🎯 REMEMBER

**Production = Work Here:**
`/src/app/case-studies/`

**Backup = Copy Here:**
`/backup/case-studies/`

**Documentation = Read Here:**
`/backup/*.md`

---

**This structure document is your map. Keep it handy!** 🗺️

*Last Updated: March 10, 2026*

# 🔄 COMPLETE RESTORATION GUIDE

**Emergency Restore Documentation**  
**Last Updated:** March 10, 2026

---

## 🚨 WHEN TO USE THIS GUIDE

Use this guide if:
- ✅ System crashes or files are corrupted
- ✅ Accidental deletion of portfolio files
- ✅ Need to revert to a working state
- ✅ Starting fresh on a new machine

---

## 📋 CURRENT PROJECT STRUCTURE

```
DARLA Portfolio Website
├── /src/app/
│   ├── App.tsx                          (Main application - 800+ lines)
│   ├── /components/
│   │   └── /figma/
│   │       └── ImageWithFallback.tsx    (Protected - do not modify)
│   └── /case-studies/
│       ├── /automobile-pos/
│       │   └── README.md
│       ├── /automobile-mobile-app/
│       │   └── README.md
│       ├── /teachers-mobile-app/
│       │   └── README.md
│       ├── /data-center-website-revamp/
│       │   └── README.md
│       ├── /fitness-tracker/
│       │   └── README.md
│       └── /banking-platform/
│           └── README.md
├── /src/styles/
│   ├── theme.css
│   └── fonts.css
└── /backup/                             (THIS FOLDER - YOUR SAFETY NET)
    ├── README.md
    ├── BACKUP_MANIFEST.md
    ├── RESTORE_GUIDE.md (This file)
    └── /case-studies/
        ├── /automobile-pos/
        ├── /automobile-mobile-app/
        ├── /teachers-mobile-app/
        ├── /data-center-website-revamp/
        ├── /fitness-tracker/
        └── /banking-platform/
```

---

## 🎯 QUICK RESTORE CHECKLIST

### Step 1: Verify Backup Folder
- [ ] Check `/backup/` folder exists
- [ ] Verify all case study folders are present
- [ ] Confirm BACKUP_MANIFEST.md exists

### Step 2: Identify What Needs Restoration
- [ ] Main App.tsx file?
- [ ] Case study folders?
- [ ] Components?
- [ ] All of the above?

### Step 3: Restore Files
See detailed instructions below ⬇️

---

## 📦 DETAILED RESTORATION STEPS

### SCENARIO A: Restore Case Study Folders Only

**If you accidentally deleted a case study folder:**

1. Navigate to `/backup/case-studies/`
2. Copy the specific folder you need:
   - `automobile-pos/`
   - `automobile-mobile-app/`
   - `teachers-mobile-app/`
   - `data-center-website-revamp/`
   - `fitness-tracker/`
   - `banking-platform/`
3. Paste into `/src/app/case-studies/`
4. Verify README.md is present in the restored folder

**Example:**
```
Copy: /backup/case-studies/automobile-pos/
To:   /src/app/case-studies/automobile-pos/
```

---

### SCENARIO B: Restore Everything (Complete System Crash)

**If everything is lost:**

1. **Create folder structure:**
   - Create `/src/app/case-studies/` if not exists

2. **Restore all case studies:**
   - Copy ALL folders from `/backup/case-studies/`
   - Paste into `/src/app/case-studies/`

3. **Verify restoration:**
   - Check all 6 case study folders are present
   - Verify each has a README.md file

4. **Rebuild if needed:**
   - Check package.json
   - Run `npm install` if dependencies missing
   - Restart dev server

---

## 📝 CASE STUDY FOLDER CHECKLIST

After restoration, verify each folder exists:

- [ ] ✅ `/src/app/case-studies/automobile-pos/`
- [ ] ✅ `/src/app/case-studies/automobile-mobile-app/`
- [ ] ✅ `/src/app/case-studies/teachers-mobile-app/`
- [ ] ✅ `/src/app/case-studies/data-center-website-revamp/`
- [ ] ✅ `/src/app/case-studies/fitness-tracker/`
- [ ] ✅ `/src/app/case-studies/banking-platform/`

---

## 🔐 PROTECTED FILES

**DO NOT DELETE OR MODIFY:**
- `/src/app/components/figma/ImageWithFallback.tsx`
- `/pnpm-lock.yaml`
- `/backup/` folder (entire directory)

---

## 💡 BEST PRACTICES

1. **Before Making Major Changes:**
   - Always check backup folder is up to date
   - Create a manual note of what you're changing

2. **After Creating New Case Studies:**
   - Copy to `/backup/case-studies/` immediately
   - Update BACKUP_MANIFEST.md with new entry

3. **Regular Maintenance:**
   - Verify backup folder weekly
   - Keep RESTORE_GUIDE.md up to date

---

## 🆘 EMERGENCY CONTACTS

**If This Guide Doesn't Help:**
1. Check `/backup/README.md` for additional instructions
2. Review `/backup/BACKUP_MANIFEST.md` for file inventory
3. Verify `/src/app/` folder structure manually

---

## ✅ POST-RESTORATION VERIFICATION

After restoring files, verify:
- [ ] Portfolio loads without errors
- [ ] All 6 case studies show in Case Studies section
- [ ] Navigation works (Work, About, Process, Contact)
- [ ] Dark/Light theme toggle works
- [ ] All images load properly
- [ ] Animations and transitions work smoothly

---

## 📊 BACKUP STATISTICS

- **Total Case Studies:** 6
- **Main Components:** 1 (App.tsx)
- **Protected Components:** 1 (ImageWithFallback.tsx)
- **Backup Folders:** 6
- **Last Verified:** March 10, 2026

---

**Remember:** The `/backup/` folder is your safety net. Never delete it!

🎉 **Good luck with your restoration!**

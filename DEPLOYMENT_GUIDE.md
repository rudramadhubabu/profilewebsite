# 🚀 Website Launch & Deployment Guide

Complete guide to launch your Apple-level UX/UI Portfolio Website

---

## 📋 TABLE OF CONTENTS

1. [Local Development Setup](#-local-development-setup)
2. [Production Build](#-production-build)
3. [Deployment Options](#-deployment-options)
4. [Custom Domain Setup](#-custom-domain-setup)
5. [Troubleshooting](#-troubleshooting)

---

## 💻 LOCAL DEVELOPMENT SETUP

### **Prerequisites:**
- Node.js 18+ installed ([Download here](https://nodejs.org/))
- npm or pnpm package manager
- Code editor (VS Code recommended)

### **Step 1: Install Dependencies**

```bash
# Navigate to your project folder
cd your-project-folder

# Install all dependencies
npm install
# OR if using pnpm
pnpm install
```

### **Step 2: Start Development Server**

```bash
# Start the local development server
npm run dev
# OR
pnpm dev
```

### **Step 3: View Your Website**

Open your browser and go to:
```
http://localhost:5173
```

Your portfolio website is now running locally! 🎉

---

## 🏗️ PRODUCTION BUILD

Before deploying, create an optimized production build:

### **Build Command:**

```bash
npm run build
# OR
pnpm build
```

This creates a `dist/` folder with optimized files.

### **Preview Production Build Locally:**

```bash
npm run preview
# OR
pnpm preview
```

Open: `http://localhost:4173`

---

## 🌐 DEPLOYMENT OPTIONS

### **Option 1: Vercel (RECOMMENDED - Easiest) ⭐**

**Best for:** Lightning-fast deployment, automatic HTTPS, free tier

#### **Method A: Deploy via Vercel Dashboard**

1. **Create Account:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Import Project:**
   - Click "Add New" → "Project"
   - Import your Git repository
   - Or drag & drop your project folder

3. **Configure Settings:**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes ⏳
   - Your site is live! 🎉

**Your URL:** `https://your-project.vercel.app`

#### **Method B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project folder
cd your-project-folder

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? your-portfolio
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

---

### **Option 2: Netlify**

**Best for:** Easy drag-and-drop, great for beginners

#### **Method A: Drag & Drop**

1. **Build First:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag the `dist/` folder to Netlify Drop zone
   - Done! Site is live in 30 seconds

**Your URL:** `https://random-name-12345.netlify.app`

#### **Method B: Git Integration**

1. **Connect Repository:**
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select your repository

2. **Configure Build:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Deploy:**
   - Click "Deploy site"
   - Wait for deployment

---

### **Option 3: GitHub Pages**

**Best for:** Free hosting with GitHub

#### **Step 1: Install gh-pages**

```bash
npm install --save-dev gh-pages
```

#### **Step 2: Update package.json**

Add these scripts:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://your-username.github.io/your-repo-name"
}
```

#### **Step 3: Update vite.config.ts**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Add this line
})
```

#### **Step 4: Deploy**

```bash
# Deploy to GitHub Pages
npm run deploy
```

**Your URL:** `https://your-username.github.io/your-repo-name/`

#### **Step 5: Enable GitHub Pages**

1. Go to repository Settings
2. Click "Pages" in sidebar
3. Source: `gh-pages` branch
4. Click Save

---

### **Option 4: Cloudflare Pages**

**Best for:** Global CDN, unlimited bandwidth

1. **Go to:** [pages.cloudflare.com](https://pages.cloudflare.com)
2. **Sign up** and click "Create a project"
3. **Connect Git** repository
4. **Configure:**
   ```
   Build command: npm run build
   Build output directory: dist
   ```
5. **Deploy** - Done!

**Your URL:** `https://your-project.pages.dev`

---

### **Option 5: Firebase Hosting**

**Best for:** Google infrastructure, custom domains

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Configure:
# - Public directory: dist
# - Single-page app: Yes
# - GitHub auto-deploys: Optional

# Build
npm run build

# Deploy
firebase deploy
```

**Your URL:** `https://your-project.web.app`

---

## 🌍 CUSTOM DOMAIN SETUP

### **For Vercel:**

1. Go to Project Settings → Domains
2. Add your domain: `www.yourportfolio.com`
3. Update DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait 24-48 hours for DNS propagation

### **For Netlify:**

1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic)

### **For GitHub Pages:**

1. Add `CNAME` file to your project root:
   ```
   www.yourportfolio.com
   ```
2. Update DNS at your registrar:
   ```
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```
3. Enable HTTPS in repository settings

---

## 🔧 BUILD OPTIMIZATION

### **Optimize Before Deployment:**

```bash
# Install compression
npm install --save-dev vite-plugin-compression

# Update vite.config.ts
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression() // Add gzip compression
  ]
})
```

### **Image Optimization:**

All images are already optimized through Unsplash.

### **Performance Tips:**

- ✅ Lazy loading: Already implemented
- ✅ Code splitting: Automatic with Vite
- ✅ Minification: Automatic in production build
- ✅ Tree shaking: Automatic with Vite

---

## 📊 ANALYTICS SETUP (OPTIONAL)

### **Google Analytics:**

Add to `/index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Vercel Analytics:**

```bash
npm install @vercel/analytics

# Add to your main App.tsx
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  )
}
```

---

## 🐛 TROUBLESHOOTING

### **Issue: 404 on refresh**

**Fix:** Add redirect rules

**For Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

**For Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### **Issue: Images not loading**

- Check if images use relative paths
- Verify `figma:asset` imports are working
- Run `npm run build` and check `dist/` folder

### **Issue: Slow build times**

```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install

# Or use pnpm (faster)
npm install -g pnpm
pnpm install
```

### **Issue: Module not found**

```bash
# Reinstall dependencies
npm install
```

---

## ✅ PRE-DEPLOYMENT CHECKLIST

Before going live, verify:

- [ ] All case studies are working
- [ ] Navigation works on all pages
- [ ] Forms submit successfully (if applicable)
- [ ] Mobile responsive design works
- [ ] All images load properly
- [ ] No console errors in browser
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Analytics setup (optional)
- [ ] Custom domain configured (optional)

---

## 🎯 RECOMMENDED WORKFLOW

### **For First-Time Deployment:**

1. ✅ Test locally (`npm run dev`)
2. ✅ Build production (`npm run build`)
3. ✅ Preview build (`npm run preview`)
4. ✅ Deploy to **Vercel** (easiest)
5. ✅ Test deployed site
6. ✅ Add custom domain (optional)

### **For Updates:**

**With Git Integration (Vercel/Netlify):**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
# Auto-deploys in 1-2 minutes! 🚀
```

**Manual Deployment:**
```bash
npm run build
vercel --prod
# OR drag dist/ to Netlify
```

---

## 🚀 QUICK START COMMANDS

### **Local Development:**
```bash
npm install      # Install dependencies
npm run dev      # Start dev server
```

### **Production:**
```bash
npm run build    # Build for production
npm run preview  # Preview production build
vercel          # Deploy to Vercel
```

---

## 📞 DEPLOYMENT PLATFORMS COMPARISON

| Platform | Speed | Free Tier | Custom Domain | Auto-Deploy | Best For |
|----------|-------|-----------|---------------|-------------|----------|
| **Vercel** | ⚡⚡⚡ | ✅ Generous | ✅ Free | ✅ Yes | React/Vite apps |
| **Netlify** | ⚡⚡ | ✅ Good | ✅ Free | ✅ Yes | Beginners |
| **GitHub Pages** | ⚡ | ✅ Free | ✅ Free | ⚠️ Manual | GitHub users |
| **Cloudflare** | ⚡⚡⚡ | ✅ Unlimited | ✅ Free | ✅ Yes | Global CDN |
| **Firebase** | ⚡⚡ | ✅ Good | ✅ Free | ⚠️ Manual | Google ecosystem |

---

## 🎉 FINAL STEPS

### **After Deployment:**

1. **Share Your Portfolio:**
   - LinkedIn: Add to profile
   - Resume: Include URL
   - Email signature: Add link
   - Social media: Share launch post

2. **Monitor Performance:**
   - Use Lighthouse: Chrome DevTools
   - Check PageSpeed Insights
   - Monitor analytics

3. **Keep Updated:**
   - Add new projects
   - Update case studies
   - Refresh testimonials

---

## 🔗 USEFUL LINKS

- **Vercel:** https://vercel.com
- **Netlify:** https://netlify.com
- **GitHub Pages:** https://pages.github.com
- **Cloudflare Pages:** https://pages.cloudflare.com
- **Firebase Hosting:** https://firebase.google.com/docs/hosting

---

## 💡 NEED HELP?

### **Documentation:**
- Vite: https://vitejs.dev/guide/
- React Router: https://reactrouter.com/
- Tailwind CSS: https://tailwindcss.com/docs

### **Support:**
- Vercel Discord: https://vercel.com/discord
- Netlify Forums: https://answers.netlify.com

---

**🚀 Ready to Launch? Let's go!**

Choose **Vercel** for the easiest deployment, or any other platform based on your needs. Your portfolio is production-ready!

---

**Last Updated:** March 12, 2026  
**Website Status:** ✅ Production Ready  
**Case Studies:** 4 Complete & Tested

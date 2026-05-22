# DARLA - Portfolio Website (HTML Version)

Complete HTML version of the DARLA Product Designer Portfolio including all case studies, animations, and effects.

## 📁 Contents

This HTML package contains the **complete portfolio website** with:

- **Homepage** (`index.html`) - Full portfolio with all sections
- **5 Case Study Pages** - Detailed project showcases
- **Responsive Design** - Works on all devices
- **Dark/Light Mode** - Theme toggle functionality
- **Smooth Animations** - Scroll reveals, transitions, and effects
- **100% Static** - No build process or dependencies required

## 🚀 How to Use

### Option 1: Open Directly in Browser

1. Simply double-click `index.html` to open in your default browser
2. Or right-click → "Open with" → Choose your browser

### Option 2: Use a Local Server (Recommended)

For best performance, use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 📂 File Structure

```
html/
├── index.html                          # Main portfolio homepage
├── css/
│   └── styles.css                      # All styles (with dark/light mode)
├── js/
│   └── main.js                         # Animations & interactions
├── case-studies/
│   ├── automobile-pos.html             # Automobile POS case study
│   ├── automobile-mobile-app.html      # Automobile Mobile App case study
│   ├── sports-stadium-experience.html  # Sports Stadium Experience case study
│   ├── school-erp.html                 # School ERP case study
│   └── industrial-safety.html          # Industrial Safety Ecosystem case study
└── README.md                           # This file
```

## ✨ Features

### Homepage

- **Hero Section** - Animated gradient background with parallax effects
- **Case Studies Grid** - 5 interactive project cards
- **Design Process** - 7-step visual workflow
- **Design Tools** - Showcasing skills and software
- **About Section** - Designer bio with stats
- **Testimonials** - Client feedback section
- **Contact Form** - Call-to-action button
- **Responsive Navigation** - Mobile menu with smooth transitions
- **Dark/Light Mode Toggle** - Persistent theme switching

### Case Study Pages

Each case study includes:

- Full-screen hero with overlay
- Project overview with key details
- Problem statement and challenges
- User research insights
- User personas
- Key features and solutions
- Design process breakdown
- Impact metrics and results
- Responsive design
- Scroll progress indicator
- Back-to-portfolio navigation

## 🎨 Customization

### Change Colors

Edit `css/styles.css` and modify the `:root` and `.dark` CSS variables:

```css
:root {
  --background: #FFFFFF;
  --foreground: #1d1d1f;
  /* ... other variables */
}

.dark {
  --background: #0A0A0A;
  --foreground: #f5f5f7;
  /* ... other variables */
}
```

### Update Content

All content is in the HTML files. Simply open any `.html` file in a text editor and update the text, images, or links.

### Add Images

Replace image URLs in the `<img>` tags. Currently using Unsplash images:

```html
<img src="https://images.unsplash.com/..." alt="Description">
```

Replace with your own images:

```html
<img src="assets/my-image.jpg" alt="Description">
```

## 🔧 Animations & Effects

All animations are pure CSS and Vanilla JavaScript (no libraries):

- **Scroll Progress Bar** - Shows reading progress
- **Scroll Reveal** - Elements fade in on scroll
- **Parallax** - Mouse-tracking floating elements
- **Smooth Scroll** - Anchor link navigation
- **Hover Effects** - Interactive cards and buttons
- **Mobile Menu** - Animated hamburger menu

## 📱 Browser Support

Works on all modern browsers:

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment

### GitHub Pages

1. Create a new GitHub repository
2. Upload all files from the `html` folder
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://username.github.io/repo-name`

### Netlify

1. Drag and drop the `html` folder to netlify.com/drop
2. Your site is instantly live!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the `html` directory
3. Follow the prompts

### Traditional Web Host

Upload all files via FTP to your web hosting's `public_html` or `www` folder.

## 📋 Navigation Map

```
Homepage (index.html)
├── Section: Hero
├── Section: Case Studies
│   ├── → Automobile POS (automobile-pos.html)
│   ├── → Automobile Mobile App (automobile-mobile-app.html)
│   ├── → Sports Stadium Experience (sports-stadium-experience.html)
│   ├── → School ERP (school-erp.html)
│   └── → Industrial Safety Ecosystem (industrial-safety.html)
├── Section: Design Process
├── Section: Design Tools
├── Section: About
├── Section: Testimonials
└── Section: Contact
```

## 🎯 Key Highlights

- **100% Complete** - All pages, all sections, all content
- **Fully Functional** - All navigation works perfectly
- **Responsive** - Mobile, tablet, and desktop optimized
- **Animated** - Smooth transitions and scroll effects
- **Accessible** - Semantic HTML and ARIA labels
- **Fast** - No frameworks, just HTML/CSS/JS
- **Self-Contained** - No external dependencies

## 🐛 Troubleshooting

### Issue: Styles not loading

**Solution:** Make sure you're opening from the html folder root. The CSS file is referenced as `css/styles.css`.

### Issue: Navigation not working

**Solution:** If using file:// protocol, some features may be limited. Use a local server instead.

### Issue: Images not loading

**Solution:** Images use external Unsplash URLs. Check your internet connection or replace with local images.

### Issue: Dark mode not persisting

**Solution:** Dark/light mode preference is saved to localStorage. Ensure your browser allows localStorage.

## 📝 License

© 2026 DARLA. All rights reserved.

This is a portfolio showcase. Content and design are for demonstration purposes.

## 💡 Tips

1. **Test Locally First** - Always test on a local server before deploying
2. **Optimize Images** - Replace Unsplash links with optimized local images for faster loading
3. **Update Meta Tags** - Add proper SEO meta tags for better search visibility
4. **Add Analytics** - Insert Google Analytics or similar tracking code
5. **Custom Domain** - Point your domain to your hosting for a professional URL

## 🆘 Support

For questions or issues:
- Check browser console for errors
- Ensure all files are in correct folders
- Verify file permissions (should be readable)
- Try a different browser
- Use developer tools to inspect elements

---

**Enjoy your complete HTML portfolio! 🎉**

All navigation links work. All pages are interconnected. Everything is ready to deploy.

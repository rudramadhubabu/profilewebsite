// ==================== THEME TOGGLE ====================
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Update theme toggle icon
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  if (sunIcon && moonIcon) {
    if (isDark) {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
}

// ==================== SCROLL PROGRESS ====================
function updateScrollProgress() {
  const scrollProgress = document.querySelector('.progress-bar');
  if (scrollProgress) {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  }
}

// ==================== NAVIGATION SCROLL ====================
function handleNavScroll() {
  const nav = document.querySelector('nav');
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  
  if (mobileMenu && mobileMenuButton) {
    mobileMenu.classList.toggle('open');
    mobileMenuButton.classList.toggle('open');
  }
}

function closeMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  
  if (mobileMenu && mobileMenuButton) {
    mobileMenu.classList.remove('open');
    mobileMenuButton.classList.remove('open');
  }
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.scroll-reveal');
  
  const revealOnScroll = () => {
    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('revealed');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        closeMobileMenu();
        
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==================== LOGO CLICK ====================
function initLogoClick() {
  const logos = document.querySelectorAll('.logo, .footer-logo');
  logos.forEach(logo => {
    logo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}

// ==================== PROJECT CARD NAVIGATION ====================
function initProjectCards() {
  const cards = document.querySelectorAll('.project-card');
  const cardData = {
    'Automobile POS': 'case-studies/automobile-pos.html',
    'Automobile Mobile App': 'case-studies/automobile-mobile-app.html',
    'Sports Stadium Experience Feature': 'case-studies/sports-stadium-experience.html',
    'School ERP': 'case-studies/school-erp.html',
    'Industrial Safety Ecosystem': 'case-studies/industrial-safety.html'
  };
  
  cards.forEach(card => {
    const title = card.querySelector('.project-title')?.textContent;
    if (title && cardData[title]) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.location.href = cardData[title];
      });
    }
  });
}

// ==================== PARALLAX EFFECT ====================
let mouseX = 0;
let mouseY = 0;

function initParallax() {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function updateParallax() {
    const floatingElements = document.querySelectorAll('.floating-element');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    floatingElements.forEach(element => {
      const offsetX = (mouseX - centerX) / 50;
      const offsetY = (mouseY - centerY) / 50;
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
    
    requestAnimationFrame(updateParallax);
  }
  
  updateParallax();
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
  // Init theme
  initTheme();
  
  // Init scroll effects
  initScrollReveal();
  initSmoothScroll();
  initLogoClick();
  initProjectCards();
  initParallax();
  
  // Add event listeners
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    handleNavScroll();
  });
  
  // Mobile menu
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }
  
  // Mobile menu links
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Initial calls
  updateScrollProgress();
  handleNavScroll();
});

// ==================== CONTACT & TESTIMONIAL MODALS ====================
function openContactModal() {
  alert('Contact form would open here. In a full implementation, this would open a modal with a contact form.');
}

function openTestimonialModal() {
  alert('Testimonial submission form would open here. In a full implementation, this would open a modal with a testimonial submission form.');
}

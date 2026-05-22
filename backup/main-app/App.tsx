import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'motion/react';
import { 
  Moon, Sun, ArrowRight, Mail, Linkedin, Github, 
  Download, Figma, Layers, PenTool, Palette, Zap,
  Search, Target, Lightbulb, Layout, TestTube, Rocket,
  ChevronDown, ExternalLink, Star, Users, TrendingUp, Image, Grid3x3
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { RouterProvider, useNavigate } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}

export function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />

      {/* Navigation */}
      <Navigation isDark={isDark} setIsDark={setIsDark} />

      {/* 1. Cinematic Hero Section */}
      <HeroSection mousePosition={mousePosition} />

      {/* 5. Featured Projects Grid */}
      <FeaturedProjectsGrid />

      {/* 4. Design Process Section */}
      <DesignProcessSection />

      {/* 6. Skills & Tools Section */}
      <SkillsToolsSection />

      {/* 7. About Designer Section */}
      <AboutDesignerSection />

      {/* 8. Testimonials / Impact Metrics */}
      <TestimonialsMetricsSection />

      {/* 9. Contact Section */}
      <ContactSection />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

/* ==================== NAVIGATION ==================== */
function Navigation({ isDark, setIsDark }: { isDark: boolean; setIsDark: (value: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={handleLogoClick}
          className="text-xl sm:text-2xl tracking-tight cursor-pointer hover:opacity-70 transition-opacity"
          style={{ fontWeight: 600 }}
        >
          DARLA
        </motion.div>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {['Work', 'About', 'Process', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-sm lg:text-base text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => setIsDark(!isDark)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 sm:p-3 rounded-full bg-surface hover:bg-accent transition-all duration-300"
          >
            {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-surface hover:bg-accent transition-all duration-300"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-foreground transition-all"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-foreground transition-all"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-foreground transition-all"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="px-4 py-6 space-y-4">
          {['Work', 'About', 'Process', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

/* ==================== 1. HERO SECTION ==================== */
function HeroSection({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const parallaxX = useTransform(() => (mousePosition.x - window.innerWidth / 2) / 50);
  const parallaxY = useTransform(() => (mousePosition.y - window.innerHeight / 2) / 50);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.3), transparent 50%)',
              'radial-gradient(circle at 40% 20%, rgba(120, 119, 198, 0.3), transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl"
        style={{ x: parallaxX, y: parallaxY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"
        style={{ x: parallaxX, y: parallaxY }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-surface text-xs sm:text-sm tracking-wide">
            Product Designer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-tight"
          style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          Crafting Digital
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
          style={{ lineHeight: 1.6 }}
        >
          Transforming complex problems into elegant, user-centered solutions
          that delight millions of users worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-foreground text-background rounded-full text-base sm:text-lg group"
            style={{ fontWeight: 600 }}
          >
            View Case Studies
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== 5. FEATURED PROJECTS GRID ==================== */
function FeaturedProjectsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Automobile POS',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1770319942638-a5989632f2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwcG9pbnQlMjBvZiUyMHNhbGV8ZW58MXx8fHwxNzczMjAzMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Automobile Mobile App',
      category: 'iOS App',
      image: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhdXRvbW90aXZlJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3MzE0NjQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Teachers Mobile App',
      category: 'Android App',
      image: 'https://images.unsplash.com/photo-1767449280971-46e438b1ce4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwZWR1Y2F0aW9uJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3MzE0NjQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Data Center Website Revamp',
      category: 'Web',
      image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzMxMzE0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Sports Stadium Experience Feature',
      category: 'iOS App',
      image: 'https://images.unsplash.com/photo-1649523724045-2e715c6237de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3MzIwMzQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="work" ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Case Studies
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl" style={{ lineHeight: 1.6 }}>
            Real-world solutions across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <GridProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GridProjectCard({ project, index, isInView }: { project: any; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (project.title === 'Automobile Mobile App') {
      navigate('/case-studies/automobile-mobile-app');
    } else if (project.title === 'Automobile POS') {
      navigate('/case-studies/automobile-pos');
    } else if (project.title === 'Sports Stadium Experience Feature') {
      navigate('/case-studies/sports-stadium-experience');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ y: -12 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-surface">
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="aspect-[4/3] overflow-hidden"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        <motion.div
          initial={{ backgroundColor: 'rgba(120, 119, 198, 0)' }}
          animate={{
            backgroundColor: isHovered ? 'rgba(120, 119, 198, 0.2)' : 'rgba(120, 119, 198, 0)',
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-end p-6"
        >
          <div className="relative z-10">
            <div className="text-sm text-white/80 mb-1">{project.category}</div>
            <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
              {project.title}
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            boxShadow: isHovered
              ? '0 20px 40px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(120, 119, 198, 0.3)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
        />
      </div>
    </motion.div>
  );
}

/* ==================== 4. DESIGN PROCESS SECTION ==================== */
function DesignProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const processSteps = [
    { icon: Search, label: 'Research', description: 'User insights & market analysis' },
    { icon: Target, label: 'Define', description: 'Problem framing & goals' },
    { icon: Lightbulb, label: 'Ideate', description: 'Creative solutions' },
    { icon: Layout, label: 'Wireframe', description: 'Structure & flow' },
    { icon: Palette, label: 'UI Design', description: 'Visual polish' },
    { icon: TestTube, label: 'Testing', description: 'Validation & iteration' },
    { icon: Rocket, label: 'Launch', description: 'Ship & monitor' },
  ];

  return (
    <section id="process" ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Design Process
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-4" style={{ lineHeight: 1.6 }}>
            A systematic approach to creating meaningful experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.label} step={step} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, isInView }: { step: any; index: number; isInView: boolean }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
      >
        <Icon className="w-10 h-10" />
      </motion.div>
      <h4 className="mb-2 text-lg" style={{ fontWeight: 600 }}>
        {step.label}
      </h4>
      <p className="text-xs text-foreground/60">{step.description}</p>
    </motion.div>
  );
}

/* ==================== 6. SKILLS & TOOLS SECTION ==================== */
function SkillsToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tools = [
    { name: 'Figma', icon: Figma, color: 'from-purple-500 to-pink-500' },
    { name: 'Adobe Photoshop', icon: Image, color: 'from-blue-500 to-cyan-500' },
    { name: 'Adobe XD', icon: PenTool, color: 'from-pink-500 to-rose-500' },
    { name: 'Miro', icon: Grid3x3, color: 'from-orange-500 to-yellow-500' },
    { name: 'After Effects', icon: Palette, color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Design Tools
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-4" style={{ lineHeight: 1.6 }}>
            Leveraging industry-leading tools to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool, index, isInView }: { tool: any; index: number; isInView: boolean }) {
  const Icon = tool.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.05 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
        className={`w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg`}
      >
        <Icon className="w-12 h-12 text-white" />
      </motion.div>
      <h4 className="text-lg" style={{ fontWeight: 600 }}>
        {tool.name}
      </h4>
    </motion.div>
  );
}

/* ==================== 7. ABOUT DESIGNER SECTION ==================== */
function AboutDesignerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1740128041121-ae0e6be2fa43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzAzMTg4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Designer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
              About Me
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/70" style={{ lineHeight: 1.7 }}>
              <p>
                I'm DARLA, a product designer passionate about creating
                experiences that seamlessly blend form and function. With over 5 years
                of experience, I've had the privilege of working with startups and
                Fortune 500 companies alike.
              </p>
              <p>
                My design philosophy centers on empathy, simplicity, and impact.
                I believe great design should be invisible—solving problems so
                elegantly that users never have to think twice.
              </p>
              <p>
                When I'm not pushing pixels, you'll find me mentoring junior designers,
                speaking at design conferences, or exploring the latest in AI and
                design automation.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <span className="text-sm sm:text-base text-foreground/60">5 Years Experience</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                <span className="text-sm sm:text-base text-foreground/60">10+ Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ==================== 8. TESTIMONIALS / IMPACT METRICS ==================== */
function TestimonialsMetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { value: 5, suffix: 'M+', label: 'Users Impacted', icon: Users },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Star },
    { value: 150, suffix: '%', label: 'Avg. ROI Increase', icon: TrendingUp },
  ];

  const testimonials = [
    {
      quote: "Alex's design work transformed our product. The user engagement increased by 200% within the first quarter.",
      author: 'Sarah Chen',
      role: 'CEO, FinanceFlow',
    },
    {
      quote: 'Working with Alex was a game-changer. The attention to detail and user empathy is unmatched.',
      author: 'Michael Rodriguez',
      role: 'Product Lead, HealthSync',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        {/* Metrics */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="mb-6" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Impact & Results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="mb-6" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Client Testimonials
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index, isInView }: { metric: any; index: number; isInView: boolean }) {
  const Icon = metric.icon;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = metric.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          setCount(metric.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, metric.value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
      >
        <Icon className="w-10 h-10" />
      </motion.div>
      <div className="text-6xl mb-4" style={{ fontWeight: 700 }}>
        {count}
        {metric.suffix}
      </div>
      <div className="text-lg text-foreground/60">{metric.label}</div>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, index, isInView }: { testimonial: any; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="p-8 rounded-3xl bg-background"
    >
      <div className="mb-6">
        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
      </div>
      <p className="text-lg mb-6 text-foreground/70" style={{ lineHeight: 1.7 }}>
        "{testimonial.quote}"
      </p>
      <div>
        <div className="mb-1" style={{ fontWeight: 600 }}>
          {testimonial.author}
        </div>
        <div className="text-sm text-foreground/60">{testimonial.role}</div>
      </div>
    </motion.div>
  );
}

/* ==================== 9. CONTACT SECTION ==================== */
function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8" style={{ fontSize: '4rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Let's Create
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <p className="text-xl text-foreground/70 mb-16 max-w-2xl mx-auto" style={{ lineHeight: 1.6 }}>
            I'm always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>

          <motion.a
            href="mailto:alex@designstudio.com"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full text-lg"
            style={{ fontWeight: 600 }}
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== 10. FOOTER ==================== */
function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div 
              onClick={handleLogoClick}
              className="text-2xl mb-2 cursor-pointer hover:opacity-70 transition-opacity" 
              style={{ fontWeight: 600 }}
            >
              DARLA
            </div>
            <div className="text-foreground/60">
              © {currentYear} All rights reserved.
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="#work" className="text-foreground/70 hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#process" className="text-foreground/70 hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            {[Linkedin, Github, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="p-3 rounded-full bg-surface hover:bg-accent transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

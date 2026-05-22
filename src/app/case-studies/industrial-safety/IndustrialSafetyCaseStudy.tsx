import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useNavigate } from 'react-router';
import { 
  ArrowLeft, Moon, Sun, Shield, Factory, Users, Target, 
  Lightbulb, TrendingUp, CheckCircle2, Package, AlertTriangle,
  Search, FileText, Layers, Navigation, ChevronRight, Zap,
  Award, BookOpen, MapPin, GraduationCap, Building2, MessageSquare,
  Brain, Activity, Heart, Eye, Ear
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Section6UserJourney } from './Section6UserJourney';
import { Section7InformationArchitecture } from './Section7IA';
import { Section10Homepage } from './Section10Homepage';

export default function IndustrialSafetyCaseStudy() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative bg-background text-foreground">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1633098189264-fa815c36618b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwY2FiaW5ldCUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NzMzNzk4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Industrial safety warehouse with chemical safety cabinets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6"
          >
            Master UX Case Study
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl mb-4"
            style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Justrite Safety Group:<br />Multi-Brand B2B Ecommerce Redesign
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-xl lg:text-2xl text-foreground/90 mb-12"
            style={{ fontWeight: 500 }}
          >
            Increasing product discovery by 45% through unified navigation architecture
          </motion.p>

          {/* Project Overview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-6">
              <p className="text-sm text-foreground/60 mb-1">Role</p>
              <p className="font-semibold text-lg">Lead UX Designer</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-6">
              <p className="text-sm text-foreground/60 mb-1">Timeline</p>
              <p className="font-semibold text-lg">6 Months</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-6">
              <p className="text-sm text-foreground/60 mb-1">Impact</p>
              <p className="font-semibold text-lg text-green-400">45% ↑ Discovery</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-6">
              <p className="text-sm text-foreground/60 mb-1">Industry</p>
              <p className="font-semibold text-lg">B2B Industrial</p>
            </div>
          </motion.div>

          {/* Key Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-8 lg:gap-12 text-sm lg:text-base"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-foreground/70">45% ↑ Product Discovery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-foreground/70">40% ↑ Cross-Brand Awareness</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-foreground/70">4 Safety Brands Unified</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2 text-foreground/50">
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-foreground/30 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Quick Context Section */}
      <section className="py-16 lg:py-24 px-6 bg-background border-b border-foreground/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl mb-6" style={{ fontWeight: 600 }}>
            The Challenge
          </h3>
          <p className="text-lg lg:text-xl text-foreground/70 leading-relaxed">
            Justrite Safety Group manages <strong className="text-foreground">four distinct industrial safety brands</strong> (Justrite, Eagle, Checkers, NoTrax) under one platform. Each brand operated independently, creating <strong className="text-orange-400">navigation silos, redundant product searches, and missed cross-selling opportunities</strong>. The goal: design a unified UX architecture that preserves brand identity while enabling seamless multi-brand product discovery.
          </p>
        </div>
      </section>

      {/* Ecosystem Introduction - keeping existing component */}
      <EcosystemIntroduction />

      {/* Section 1: Project Background */}
      <Section1ProjectBackground />

      {/* Section 3: UX Problem Statement */}
      <Section3ProblemStatement />

      {/* Section 4: UX Objectives */}
      <Section4Objectives />

      {/* Section 5: User Personas */}
      <Section5UserPersonas />

      {/* Section 5.5: UX Research & Heuristic Evaluation */}
      <Section5Point5UXResearch />

      {/* Section 6: User Journey */}
      <Section6UserJourney />

      {/* Section 7: Information Architecture */}
      <Section7InformationArchitecture />

      {/* Section 8: UX Insight Discovery */}
      <Section8UXInsights />

      {/* Section 9: Experience Strategy */}
      <Section9ExperienceStrategy />

      {/* Section 10: Homepage UX Structure */}
      <Section10Homepage />
    </div>
  );
}

// Ecosystem Introduction Component
function EcosystemIntroduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const brands = [
    {
      name: 'Justrite',
      color: '#C41E3A',
      category: 'Hazardous Storage',
      description: 'Safety cabinets, cans & containers for flammable/combustible materials',
      icon: Shield
    },
    {
      name: 'Eagle',
      color: '#1976D2',
      category: 'Spill Control',
      description: 'Containment pallets, berms & absorbent products',
      icon: AlertTriangle
    },
    {
      name: 'Checkers',
      color: '#F57C00',
      category: 'Motion Safety',
      description: 'Cable protectors, wheel chocks & warning systems',
      icon: Package
    },
    {
      name: 'NoTrax',
      color: '#388E3C',
      category: 'Workplace Ergonomics',
      description: 'Anti-fatigue mats & floor safety products',
      icon: Layers
    }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 px-6 bg-foreground/[0.02] border-b border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl mb-4" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Four Brands, One Ecosystem
          </h2>
          <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto">
            Understanding the multi-brand industrial safety product landscape
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {brands.map((brand, index) => {
            const IconComponent = brand.icon;
            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-background border border-foreground/10 rounded-2xl p-8 hover:border-foreground/20 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${brand.color}15` }}
                  >
                    <IconComponent className="w-7 h-7" style={{ color: brand.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-1" style={{ fontWeight: 700, color: brand.color }}>
                      {brand.name}
                    </h3>
                    <p className="text-sm text-foreground/60 font-medium">{brand.category}</p>
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed">{brand.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Section 1: Project Background
function Section1ProjectBackground() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-4">
            Background
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Project Background
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mb-16" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1747999703278-ef065c39cb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwd29ya2VyJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MzM3OTgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Factory workers using PPE and safety equipment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed mb-8" style={{ fontWeight: 500 }}>
              The Justrite Safety Group operates multiple specialized safety brands that provide critical workplace safety products.
            </p>

            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                The Challenge:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  Each brand has its own website, navigation system, and product ecosystem.
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  Users must navigate multiple websites to find related safety solutions.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-6" style={{ fontWeight: 600 }}>
            For example:
          </h3>
          
          <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 rounded-3xl p-8 lg:p-10">
            <div className="flex items-start gap-4 mb-6">
              <Users className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xl font-semibold mb-3">A facility safety manager might need:</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-foreground/80">Flammable liquid storage cabinets</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-foreground/80">Spill containment pallets</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-foreground/80">Cable protection ramps</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-foreground/80">Anti-fatigue floor mats</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-foreground/80 italic">
                These solutions exist across different brand sites, creating a fragmented experience.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-3xl p-8 lg:p-12"
        >
          <div className="flex items-start gap-4 mb-4">
            <Target className="w-10 h-10 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="text-2xl lg:text-4xl mb-4" style={{ fontWeight: 600 }}>
                The UX Challenge:
              </h3>
              <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed">
                How can we create a cohesive product discovery experience across multiple industrial safety brands while maintaining each brand's identity?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Section 3: UX Problem Statement
function Section3ProblemStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    'Complex product catalogs',
    'Technical terminology barriers',
    'Fragmented product ecosystems',
    'Unclear compliance guidance',
    'Difficult navigation between related safety solutions'
  ];

  const impacts = [
    { label: 'Decision time', icon: Target },
    { label: 'Research effort', icon: Search },
    { label: 'Purchasing friction', icon: AlertTriangle }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-4">
            Problem
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            UX Problem Statement
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mb-8" />
          <p className="text-lg text-orange-400 italic mb-12">
            Define the UX problem clearly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764675902777-6c0c0ac16f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHN0b3JhZ2UlMjBmYWNpbGl0eSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzczMzc5ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chemical storage facility industrial"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed mb-8" style={{ fontWeight: 500 }}>
              Safety professionals often need to quickly locate compliant safety equipment.
            </p>

            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                However, industrial safety platforms often suffer from:
              </h3>
              <ul className="space-y-3">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-lg text-foreground/80"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    {problem}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-3xl p-8 lg:p-10"
        >
          <h3 className="text-2xl lg:text-3xl mb-6" style={{ fontWeight: 600 }}>
            In the current experience:
          </h3>
          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            Users must visit multiple brand websites to find complementary products.
          </p>
          
          <div className="bg-background/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
            <p className="text-lg font-semibold mb-6 text-red-400">This increases:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {impacts.map((impact, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <impact.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <p className="text-foreground/80 font-medium">{impact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Section 4: UX Objectives
function Section4Objectives() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const primaryGoals = [
    'Improve product discovery across brands.',
    'Reduce the time required for users to find compliant safety solutions.',
    'Enable users to explore related safety equipment categories across the ecosystem.',
    'Provide clear regulatory and compliance guidance.',
    'Improve navigation clarity across product categories.'
  ];

  const secondaryGoals = [
    'Increase distributor inquiries.',
    'Increase product catalog downloads.',
    'Improve trust and authority in industrial safety expertise.'
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-4">
            Objectives
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            UX Objectives
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mb-8" />
          <p className="text-lg text-orange-400 italic mb-12">
            Define measurable UX goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Primary Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <Target className="w-10 h-10 text-orange-500" />
              <h3 className="text-3xl lg:text-4xl" style={{ fontWeight: 600 }}>
                Primary goals:
              </h3>
            </div>
            <ul className="space-y-4">
              {primaryGoals.map((goal, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-background border border-orange-500/20 hover:border-orange-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground/80">{goal}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Secondary Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <TrendingUp className="w-10 h-10 text-green-500" />
              <h3 className="text-3xl lg:text-4xl" style={{ fontWeight: 600 }}>
                Secondary goals:
              </h3>
            </div>
            <ul className="space-y-4">
              {secondaryGoals.map((goal, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-background border border-green-500/20 hover:border-green-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground/80">{goal}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
              <FileText className="w-10 h-10 text-blue-500 mb-4" />
              <p className="text-foreground/80 leading-relaxed">
                All objectives are measurable through analytics tracking, user testing feedback, and business metrics monitoring.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Section 5: User Personas with Tabs and Empathy Maps
function Section5UserPersonas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      title: 'PERSONA 1',
      name: 'Industrial Safety Manager',
      roleName: 'Sarah Mitchell',
      age: '42 years old',
      experience: '15 years in industrial safety',
      location: 'Houston, TX',
      company: 'Mid-size chemical manufacturing facility',
      image: 'https://images.unsplash.com/photo-1768796371276-449649d4c79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwbWFuYWdlciUyMGhlbG1ldCUyMGNsaXBib2FyZHxlbnwxfHx8fDE3NzMzODA1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'I need to ensure every piece of equipment meets OSHA standards, but navigating multiple vendor sites makes compliance verification a nightmare.',
      background: 'Sarah oversees safety compliance for a 500-employee chemical manufacturing plant. She reports directly to the VP of Operations and manages a team of 8 safety officers across three shifts.',
      responsibilities: 'Ensuring workplace compliance with safety regulations.',
      responsibilitiesExpanded: [
        'Conducting monthly safety audits and OSHA compliance reviews',
        'Managing safety equipment procurement for multiple facility zones',
        'Training 500+ employees on proper safety protocols and equipment usage',
        'Investigating incidents and implementing corrective actions',
        'Maintaining up-to-date documentation for regulatory inspections'
      ],
      goals: 'Find OSHA compliant safety storage solutions quickly.',
      goalsExpanded: [
        'Quickly identify OSHA-compliant safety storage solutions without extensive research',
        'Compare products across different safety categories in one place',
        'Access compliance certifications and technical specs instantly',
        'Reduce procurement cycle time from 3 weeks to under 1 week'
      ],
      painPoints: 'Too many technical product specifications. Hard to compare safety cabinets.',
      painPointsExpanded: [
        'Overwhelmed by technical jargon across multiple brand sites',
        'Difficult to compare safety cabinets side-by-side',
        'Unclear which products meet specific OSHA regulations',
        'Spending 5-8 hours per week researching products'
      ],
      empathy: {
        says: [
          '"I don\'t have time to visit 5 different websites just to find one cabinet"',
          '"Why can\'t I see compliance certifications upfront?"',
          '"I need to justify every purchase to finance with documentation"',
          '"Our last OSHA audit highlighted equipment gaps"'
        ],
        thinks: [
          'There must be a faster way to find compliant equipment',
          'I wish all safety products were in one searchable catalog',
          'Technical specs should be standardized across brands',
          'My team needs training on new equipment protocols'
        ],
        does: [
          'Opens 10+ browser tabs comparing different vendor sites',
          'Downloads product spec sheets to create comparison tables',
          'Calls sales reps for compliance documentation',
          'Schedules weekly safety equipment audits'
        ],
        feels: [
          'Frustrated by fragmented vendor websites',
          'Anxious about missing compliance deadlines',
          'Overwhelmed by contradicting product specifications',
          'Responsible for worker safety and regulatory adherence'
        ]
      }
    },
    {
      title: 'PERSONA 2',
      name: 'Procurement Manager',
      roleName: 'David Chen',
      age: '38 years old',
      experience: '12 years in industrial procurement',
      location: 'Detroit, MI',
      company: 'Multi-facility automotive manufacturing corporation',
      image: 'https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9jdXJlbWVudCUyMG1hbmFnZXIlMjByZXZpZXdpbmclMjBkb2N1bWVudHN8ZW58MXx8fHwxNzczMzgwNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'I manage purchasing for 12 facilities. When each safety brand has a separate website, my job becomes exponentially harder.',
      background: 'David manages strategic sourcing and procurement for industrial safety equipment across 12 manufacturing facilities in the Midwest. He negotiates contracts worth $8M annually and oversees a procurement team of 6 specialists.',
      responsibilities: 'Purchasing safety equipment for multiple facilities.',
      responsibilitiesExpanded: [
        'Managing $8M annual budget for safety equipment across 12 facilities',
        'Negotiating volume contracts with industrial safety suppliers',
        'Standardizing safety equipment specifications across all locations',
        'Evaluating vendor performance and maintaining approved vendor lists',
        'Processing 200+ purchase orders monthly for safety-related products'
      ],
      goals: 'Compare products quickly.',
      goalsExpanded: [
        'Compare products and pricing across multiple brands in under 30 minutes',
        'Negotiate better volume discounts through consolidated purchasing',
        'Reduce vendor count from 15+ to 5-7 strategic partners',
        'Standardize product specifications across all 12 facilities'
      ],
      painPoints: 'Fragmented websites.',
      painPointsExpanded: [
        'Toggling between 15+ different vendor websites to compare products',
        'Each brand website has different search interfaces',
        'No centralized way to request bulk quotes for multi-facility orders',
        'Difficulty maintaining consistent product specifications'
      ],
      empathy: {
        says: [
          '"I need one platform to manage all safety equipment purchasing"',
          '"Volume pricing should be transparent without submitting RFQs"',
          '"Why do I need separate accounts for each brand?"',
          '"Consolidating vendors would save us millions annually"'
        ],
        thinks: [
          'A unified catalog would cut my research time by 60%',
          'Strategic partnerships are better than one-off purchases',
          'Standardization across facilities reduces total cost of ownership',
          'I could negotiate better if I had visibility across all brands'
        ],
        does: [
          'Creates complex Excel spreadsheets comparing vendor pricing',
          'Schedules quarterly business reviews with top suppliers',
          'Coordinates with 12 facility managers on safety equipment needs',
          'Submits formal RFQs to multiple vendors for each purchase'
        ],
        feels: [
          'Frustrated by inefficient multi-vendor workflows',
          'Pressured to achieve 15% annual cost savings targets',
          'Overwhelmed managing relationships with 15+ vendors',
          'Motivated to streamline and consolidate purchasing processes'
        ]
      }
    },
    {
      title: 'PERSONA 3',
      name: 'Facility Engineer',
      roleName: 'Marcus Johnson',
      age: '45 years old',
      experience: '18 years in facility management',
      location: 'Newark, NJ',
      company: 'Large petrochemical processing facility',
      image: 'https://images.unsplash.com/photo-1716126825412-c6c24bfb26e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0eSUyMGVuZ2luZWVyJTIwaW5kdXN0cmlhbCUyMHBsYW50fGVufDF8fHx8MTc3MzM3NjgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'I need integrated solutions, not individual products. If I buy a spill containment system, I should immediately see compatible cleanup kits and protective equipment.',
      background: 'Marcus is responsible for maintaining safety infrastructure at a 24/7 petrochemical facility with 800+ employees. He designs facility layouts, specifies safety equipment, and ensures all installations meet engineering and regulatory standards.',
      responsibilities: 'Facility safety infrastructure.',
      responsibilitiesExpanded: [
        'Designing and maintaining facility-wide safety infrastructure systems',
        'Specifying safety equipment for new construction and retrofit projects',
        'Coordinating installation of hazardous material storage systems',
        'Ensuring integration between safety systems (ventilation, containment, PPE)',
        'Managing preventive maintenance schedules for all safety equipment'
      ],
      goals: 'Find integrated safety solutions.',
      goalsExpanded: [
        'Discover comprehensive safety solutions that work together as a system',
        'Identify compatible products across different safety categories',
        'Access detailed technical drawings and installation specifications',
        'Reduce engineering time spent on product research by 40%'
      ],
      painPoints: 'Lack of cross-brand product recommendations.',
      painPointsExpanded: [
        'No visibility into how products from different brands work together',
        'Missing cross-category recommendations for integrated systems',
        'Each brand only promotes their own products',
        'Spending weeks researching to create integrated safety systems'
      ],
      empathy: {
        says: [
          '"I need system-level solutions, not just individual components"',
          '"Why aren\'t there CAD drawings available for facility planning?"',
          '"Product compatibility information should be built into the catalog"',
          '"I waste weeks piecing together solutions from disconnected sources"'
        ],
        thinks: [
          'Safety systems should be designed holistically, not piecemeal',
          'Cross-brand compatibility guides would save enormous time',
          'Technical documentation is critical for installation planning',
          'Integrated solutions reduce long-term maintenance complexity'
        ],
        does: [
          'Creates facility layout drawings in AutoCAD for safety zones',
          'Consults multiple vendors to design integrated safety systems',
          'Reviews installation manuals and technical specifications',
          'Conducts risk assessments before specifying equipment'
        ],
        feels: [
          'Frustrated by lack of system-level thinking in product recommendations',
          'Concerned about compatibility issues during installation',
          'Pressured to design fail-safe systems with limited information',
          'Passionate about engineering excellence in workplace safety'
        ]
      }
    }
  ];

  const currentPersona = personas[activeTab];

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-4">
            Personas
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-white" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            User Personas
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mb-4" />
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-white/10">
          {personas.map((persona, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-4 font-semibold transition-all ${
                activeTab === index
                  ? 'bg-orange-500 text-white border-b-2 border-orange-500'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {persona.title}
            </button>
          ))}
        </div>

        {/* Persona Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-5 gap-0 bg-[#1A1A1A] rounded-2xl overflow-hidden mb-12"
        >
          {/* Left: Image */}
          <div className="lg:col-span-2 relative h-96 lg:h-auto">
            <ImageWithFallback
              src={currentPersona.image}
              alt={currentPersona.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent lg:bg-gradient-to-r" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs text-orange-400 font-semibold mb-2 uppercase tracking-wider">{currentPersona.title}</p>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{currentPersona.name}</h3>
              <p className="text-xl text-white/90 mb-4">{currentPersona.roleName}</p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
                  {currentPersona.age}
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
                  {currentPersona.experience}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-3 p-8">
            {/* Quote */}
            <div className="mb-6 p-4 rounded-xl bg-orange-500/10 border-l-4 border-orange-500">
              <p className="text-base italic text-white/90 leading-relaxed">"{currentPersona.quote}"</p>
            </div>

            {/* Background */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-orange-400 mb-2 uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4" />
                BACKGROUND
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">{currentPersona.background}</p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                <p className="text-xs text-white/50 mb-1">Location</p>
                <p className="font-semibold text-white text-sm">{currentPersona.location}</p>
              </div>
              <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                <p className="text-xs text-white/50 mb-1">Company Type</p>
                <p className="font-semibold text-white text-sm">{currentPersona.company}</p>
              </div>
            </div>

            {/* Compact Details */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h4 className="text-xs font-semibold text-orange-400 mb-2 uppercase">Responsibilities</h4>
                <ul className="space-y-1">
                  {currentPersona.responsibilitiesExpanded.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle2 className="w-3 h-3 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-green-400 mb-2 uppercase">Goals</h4>
                <ul className="space-y-1">
                  {currentPersona.goalsExpanded.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-red-400 mb-2 uppercase">Pain Points</h4>
                <ul className="space-y-1">
                  {currentPersona.painPointsExpanded.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                      <AlertTriangle className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Empathy Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl lg:text-3xl mb-8 text-white" style={{ fontWeight: 600 }}>
            Empathy Map - {currentPersona.roleName}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Says */}
            <div className="bg-[#1A1A1A] border border-orange-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-orange-500" />
                <h4 className="text-lg font-semibold text-orange-400 uppercase tracking-wider">Says</h4>
              </div>
              <ul className="space-y-3">
                {currentPersona.empathy.says.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Thinks */}
            <div className="bg-[#1A1A1A] border border-blue-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-blue-500" />
                <h4 className="text-lg font-semibold text-blue-400 uppercase tracking-wider">Thinks</h4>
              </div>
              <ul className="space-y-3">
                {currentPersona.empathy.thinks.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Does */}
            <div className="bg-[#1A1A1A] border border-green-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-6 h-6 text-green-500" />
                <h4 className="text-lg font-semibold text-green-400 uppercase tracking-wider">Does</h4>
              </div>
              <ul className="space-y-3">
                {currentPersona.empathy.does.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feels */}
            <div className="bg-[#1A1A1A] border border-red-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-red-500" />
                <h4 className="text-lg font-semibold text-red-400 uppercase tracking-wider">Feels</h4>
              </div>
              <ul className="space-y-3">
                {currentPersona.empathy.feels.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Section 5.5: UX Research & Heuristic Evaluation
function Section5Point5UXResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const brands = [
    { name: 'Justrite', focus: 'Hazardous material storage', image: 'https://images.unsplash.com/photo-1633098189264-fa815c36618b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwY2FiaW5ldCUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NzMzNzk4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Eagle', focus: 'Spill containment & safety cabinets', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlsbCUyMGNvbnRhaW5tZW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzMzODA1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Checkers', focus: 'Motion safety & cable protection', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJsZSUyMHByb3RlY3RvciUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzczMzgwNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'NoTrax', focus: 'Industrial ergonomic matting', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmxvb3IlMjBtYXR8ZW58MXx8fHwxNzczMzgwNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080' }
  ];

  const researchMethods = [
    { method: 'Heuristic evaluation', purpose: 'Identify usability violations' },
    { method: 'Navigation analysis', purpose: 'Evaluate information architecture' },
    { method: 'Product discovery testing', purpose: 'Analyze catalog exploration' },
    { method: 'Content hierarchy review', purpose: 'Assess clarity of product messaging' },
    { method: 'Competitive benchmarking', purpose: 'Compare industrial safety marketplaces' },
    { method: 'Cross-brand ecosystem review', purpose: 'Evaluate brand navigation integration' }
  ];

  const heuristicFramework = [
    { heuristic: 'Visibility of system status', description: 'Feedback and clarity' },
    { heuristic: 'Match between system and real world', description: 'Familiar terminology' },
    { heuristic: 'User control and freedom', description: 'Easy navigation recovery' },
    { heuristic: 'Consistency and standards', description: 'UI patterns consistency' },
    { heuristic: 'Error prevention', description: 'Prevent mistakes' },
    { heuristic: 'Recognition rather than recall', description: 'Reduce memory load' },
    { heuristic: 'Flexibility and efficiency', description: 'Expert shortcuts' },
    { heuristic: 'Aesthetic and minimalist design', description: 'Reduce clutter' },
    { heuristic: 'Help users recognize errors', description: 'Clear problem explanation' },
    { heuristic: 'Help and documentation', description: 'Accessible support resources' }
  ];

  const severityScale = [
    { severity: 'P0', meaning: 'Critical UX blocker', color: 'red' },
    { severity: 'P1', meaning: 'Major usability failure', color: 'orange' },
    { severity: 'P2', meaning: 'Significant UX friction', color: 'yellow' },
    { severity: 'P3', meaning: 'Moderate usability issue', color: 'blue' },
    { severity: 'P4', meaning: 'Minor usability improvement', color: 'green' },
    { severity: 'P5', meaning: 'Optimization opportunity', color: 'purple' }
  ];

  const brandAudits = [
    {
      brand: 'Justrite',
      description: 'Industrial safety cabinet platform with focus on hazardous liquid storage and compliance.',
      heuristicAudit: [
        { heuristic: 'Visibility of system status', observation: 'Product filtering feedback unclear', issue: 'Users cannot easily see how filters modify results', severity: 'P2', impact: 'Slower product discovery' },
        { heuristic: 'Match with real world', observation: 'Technical compliance terms dominate content', issue: 'Non-expert users may struggle to understand regulations', severity: 'P3', impact: 'Increased cognitive load' },
        { heuristic: 'User control', observation: 'Navigation breadcrumbs present', issue: 'However deep category navigation makes backtracking difficult', severity: 'P2', impact: 'Navigation friction' },
        { heuristic: 'Consistency', observation: 'Navigation categories consistent', issue: 'However subcategory naming varies', severity: 'P3', impact: 'Confusion when exploring catalog' },
        { heuristic: 'Error prevention', observation: 'No guided selection for safety cabinets', issue: 'Users must manually compare specs', severity: 'P2', impact: 'Higher decision fatigue' },
        { heuristic: 'Recognition vs recall', observation: 'Product specifications heavy', issue: 'Visual comparison limited', severity: 'P3', impact: 'Hard to compare products' },
        { heuristic: 'Flexibility', observation: 'Search function present', issue: 'No intelligent search suggestions', severity: 'P4', impact: 'Reduced discovery efficiency' },
        { heuristic: 'Minimalist design', observation: 'Homepage contains many promotional blocks', issue: 'Information density high', severity: 'P3', impact: 'Scanning difficulty' },
        { heuristic: 'Error recovery', observation: 'No clear support when choosing wrong product', issue: 'Limited contextual guidance', severity: 'P2', impact: 'Increased research time' },
        { heuristic: 'Help documentation', observation: 'Safety guides available', issue: 'However buried within resource sections', severity: 'P3', impact: 'Hard to find education materials' }
      ],
      productDiscovery: [
        { step: 'Find cabinet type', currentExperience: 'Category navigation required', issue: 'Multiple clicks required', severity: 'P2' },
        { step: 'Compare cabinet sizes', currentExperience: 'Product page comparison needed', issue: 'No quick compare feature', severity: 'P2' },
        { step: 'Compliance verification', currentExperience: 'Certification shown in specs', issue: 'Hard to locate quickly', severity: 'P3' },
        { step: 'Request quote', currentExperience: 'Quote CTA available', issue: 'Not contextual to product selection', severity: 'P3' }
      ]
    },
    {
      brand: 'Eagle',
      description: 'Focus on spill containment, drum handling, and safety cabinets.',
      heuristicAudit: [
        { heuristic: 'Visibility of system status', observation: 'Category navigation clear', issue: 'Product load feedback minimal', severity: 'P3', impact: 'Perceived latency' },
        { heuristic: 'Match with real world', observation: 'Industrial terminology accurate', issue: 'However technical jargon heavy', severity: 'P3', impact: 'Learning barrier' },
        { heuristic: 'User control', observation: 'Breadcrumb navigation present', issue: 'Limited filtering controls', severity: 'P2', impact: 'Hard product exploration' },
        { heuristic: 'Consistency', observation: 'Brand styling consistent', issue: 'But layout differs from other brand sites', severity: 'P2', impact: 'Ecosystem inconsistency' },
        { heuristic: 'Error prevention', observation: 'No guided spill solution wizard', issue: 'Users must manually determine capacity', severity: 'P2', impact: 'Incorrect product selection risk' },
        { heuristic: 'Recognition vs recall', observation: 'Product images strong', issue: 'Spec tables very dense', severity: 'P3', impact: 'Hard scanning' },
        { heuristic: 'Flexibility', observation: 'Navigation hierarchical', issue: 'Not solution oriented', severity: 'P2', impact: 'Users think in problems not categories' },
        { heuristic: 'Minimalist design', observation: 'Category pages dense', issue: 'Many product variations', severity: 'P3', impact: 'Cognitive overload' },
        { heuristic: 'Error recovery', observation: 'Limited support prompts', issue: 'Users must manually contact support', severity: 'P3', impact: 'Slower resolution' },
        { heuristic: 'Help documentation', observation: 'Compliance info limited', issue: 'Safety standards not explained', severity: 'P3', impact: 'Lower trust clarity' }
      ],
      productDiscovery: [
        { step: 'Find spill containment', currentExperience: 'Category browsing required', issue: 'No spill scenario guidance', severity: 'P2' },
        { step: 'Determine capacity', currentExperience: 'Spec table reading required', issue: 'No capacity comparison', severity: 'P3' },
        { step: 'Select drum pallet', currentExperience: 'Too many variations', issue: 'Hard to filter', severity: 'P2' },
        { step: 'Purchase decision', currentExperience: 'Limited educational content', issue: 'Decision uncertainty', severity: 'P3' }
      ]
    },
    {
      brand: 'Checkers',
      description: 'Focus on cable protectors, wheel chocks, and motion safety products.',
      heuristicAudit: [
        { heuristic: 'Visibility of system status', observation: 'Product categories clearly labeled', issue: 'No progress indicators for product exploration', severity: 'P4', impact: 'Minor' },
        { heuristic: 'Match with real world', observation: 'Product naming intuitive', issue: 'Good real-world terminology', severity: 'P5', impact: 'Positive' },
        { heuristic: 'User control', observation: 'Category filtering limited', issue: 'Hard to narrow down cable protector types', severity: 'P2', impact: 'Slower discovery' },
        { heuristic: 'Consistency', observation: 'Category layout clear', issue: 'Cross-brand navigation missing', severity: 'P2', impact: 'Ecosystem disconnect' },
        { heuristic: 'Error prevention', observation: 'Product specs detailed', issue: 'However load capacity explanation unclear', severity: 'P3', impact: 'Misinterpretation risk' },
        { heuristic: 'Recognition vs recall', observation: 'Strong imagery', issue: 'Product specs require reading', severity: 'P3', impact: 'Slower scanning' },
        { heuristic: 'Flexibility', observation: 'Category browsing only', issue: 'No solution based navigation', severity: 'P2', impact: 'Users search by scenario' },
        { heuristic: 'Minimalist design', observation: 'Balanced layout', issue: 'Good visual scanning', severity: 'P4', impact: 'Minor' },
        { heuristic: 'Error recovery', observation: 'Support contact visible', issue: 'Good accessibility', severity: 'P5', impact: 'Positive' },
        { heuristic: 'Help documentation', observation: 'Guides limited', issue: 'Users must research externally', severity: 'P3', impact: 'Learning friction' }
      ],
      productDiscovery: [
        { step: 'Find cable protector', currentExperience: 'Category browsing required', issue: 'Many similar products', severity: 'P2' },
        { step: 'Determine load capacity', currentExperience: 'Spec tables only', issue: 'No guided selection', severity: 'P3' },
        { step: 'Choose correct model', currentExperience: 'Product variations unclear', issue: 'Hard to differentiate', severity: 'P3' },
        { step: 'Purchase decision', currentExperience: 'Minimal scenario explanation', issue: 'Decision friction', severity: 'P3' }
      ]
    },
    {
      brand: 'NoTrax',
      description: 'Focus on ergonomic floor mats and industrial anti-fatigue solutions.',
      heuristicAudit: [
        { heuristic: 'Visibility of system status', observation: 'Product browsing clear', issue: 'Limited filtering', severity: 'P2', impact: 'Hard selection' },
        { heuristic: 'Match with real world', observation: 'Product categories intuitive', issue: 'Industry scenarios unclear', severity: 'P3', impact: 'Context missing' },
        { heuristic: 'User control', observation: 'Category browsing simple', issue: 'Product comparison limited', severity: 'P3', impact: 'Hard evaluation' },
        { heuristic: 'Consistency', observation: 'Layout consistent', issue: 'Cross brand links minimal', severity: 'P2', impact: 'Ecosystem gap' },
        { heuristic: 'Error prevention', observation: 'No mat selection guide', issue: 'Wrong mat selection possible', severity: 'P2', impact: 'Purchase errors' },
        { heuristic: 'Recognition vs recall', observation: 'Visual imagery strong', issue: 'Technical specs dense', severity: 'P3', impact: 'Slower decision' },
        { heuristic: 'Flexibility', observation: 'Product discovery limited', issue: 'No environment based navigation', severity: 'P2', impact: 'Discovery friction' },
        { heuristic: 'Minimalist design', observation: 'Clean product grids', issue: 'Good scanning', severity: 'P5', impact: 'Positive' },
        { heuristic: 'Error recovery', observation: 'Support contact visible', issue: 'Adequate', severity: 'P4', impact: 'Minor' },
        { heuristic: 'Help documentation', observation: 'Buyer guides present', issue: 'Helpful but hidden', severity: 'P3', impact: 'Discoverability issue' }
      ],
      productDiscovery: [
        { step: 'Find correct mat type', currentExperience: 'Category browsing required', issue: 'Environment based selection missing', severity: 'P2' },
        { step: 'Determine mat size', currentExperience: 'Manual measurement needed', issue: 'No size calculator', severity: 'P3' },
        { step: 'Choose material', currentExperience: 'Spec comparison required', issue: 'Material selection guidance limited', severity: 'P3' },
        { step: 'Purchase decision', currentExperience: 'Buyer guides available', issue: 'Not integrated into product flow', severity: 'P3' }
      ]
    }
  ];

  const crossBrandAnalysis = [
    { area: 'Navigation', observation: 'Each brand has different navigation structure', issue: 'Fragmented experience', severity: 'P1' },
    { area: 'Product discovery', observation: 'Products distributed across sites', issue: 'Users must search multiple sites', severity: 'P1' },
    { area: 'Design consistency', observation: 'Layout differences between brands', issue: 'Lack of ecosystem identity', severity: 'P2' },
    { area: 'Cross-selling', observation: 'Related safety products not connected', issue: 'Missed opportunity', severity: 'P2' },
    { area: 'Compliance education', observation: 'Compliance guidance inconsistent', issue: 'Knowledge gap', severity: 'P3' }
  ];

  const keyInsights = [
    { number: 'Insight 1', text: 'Industrial safety purchasing is solution oriented, not brand oriented.' },
    { number: 'Insight 2', text: 'Users think in workplace hazards, not product categories.' },
    { number: 'Insight 3', text: 'Compliance guidance is critical to purchasing decisions.' },
    { number: 'Insight 4', text: 'Cross-brand product discovery is currently fragmented.' }
  ];

  const currentBrand = brandAudits[activeTab];
  const brandInfo = brands[activeTab];

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      'P0': 'red',
      'P1': 'orange',
      'P2': 'yellow',
      'P3': 'blue',
      'P4': 'green',
      'P5': 'purple'
    };
    return colors[severity] || 'gray';
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-background to-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-4">
            UX Research & Analysis
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Understanding the Current Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mb-8" />
          <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-4xl">
            UX Research and Heuristic Evaluation of the Justrite Safety Group Multi-Brand Platform
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 rounded-3xl p-8 lg:p-10"
        >
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            This section analyzes the existing UX ecosystem across four industrial safety brands within the Justrite Safety Group digital platform.
          </p>
          <p className="text-lg font-semibold mb-4">The goal of this research phase is to identify:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['usability issues', 'navigation challenges', 'product discovery friction', 'information architecture complexity', 'cross-brand ecosystem gaps'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-white/10">
                <Search className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Brand Overview Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            The analysis focuses on four primary brand websites:
          </h3>
          <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-orange-500/10 border-b border-white/10">
                    <th className="text-left p-5 font-semibold text-orange-400">Brand</th>
                    <th className="text-left p-5 font-semibold text-orange-400">Primary Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brand, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                      <td className="p-5 font-semibold">{brand.name}</td>
                      <td className="p-5 text-foreground/80">{brand.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Research Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Research Methods
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            UX research methodology used in this case study includes:
          </p>
          <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-orange-500/10 border-b border-white/10">
                    <th className="text-left p-5 font-semibold text-orange-400">Method</th>
                    <th className="text-left p-5 font-semibold text-orange-400">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {researchMethods.map((method, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                      <td className="p-5 font-semibold">{method.method}</td>
                      <td className="p-5 text-foreground/80">{method.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-base text-foreground/70 mt-6 italic">
            Each site was evaluated using Nielsen's 10 Usability Heuristics.
          </p>
        </motion.div>

        {/* Heuristic Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Heuristic Framework
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            Evaluation criteria used:
          </p>
          <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-orange-500/10 border-b border-white/10">
                    <th className="text-left p-5 font-semibold text-orange-400">Heuristic</th>
                    <th className="text-left p-5 font-semibold text-orange-400">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {heuristicFramework.map((item, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                      <td className="p-5 font-semibold">{item.heuristic}</td>
                      <td className="p-5 text-foreground/80">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Severity Scale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Severity Scale
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            Problems are categorized using a P0–P5 severity scale.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {severityScale.map((item, idx) => (
              <div
                key={idx}
                className="bg-background border border-white/10 rounded-xl p-5 hover:border-orange-500/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`px-4 py-2 rounded-lg font-bold text-sm ${
                    item.severity === 'P0' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    item.severity === 'P1' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                    item.severity === 'P2' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    item.severity === 'P3' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    item.severity === 'P4' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {item.severity}
                  </div>
                </div>
                <p className="text-foreground/80">{item.meaning}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Tab-Based Analysis Structure
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            To reduce vertical scrolling, the analysis is presented using a tab system. Clicking each tab reveals a full heuristic audit table for that platform.
          </p>
          
          <div className="flex gap-2 overflow-x-auto border-b border-white/10 pb-2">
            {brands.map((brand, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 rounded-t-xl font-semibold text-sm lg:text-base whitespace-nowrap transition-all ${
                  activeTab === index
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-background border border-white/10 text-foreground/60 hover:text-foreground hover:border-orange-500/30'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Brand Analysis Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          {/* Brand Image */}
          <div className="mb-12 relative rounded-3xl overflow-hidden">
            <ImageWithFallback
              src={brandInfo.image}
              alt={`${brandInfo.name} website`}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                {currentBrand.brand} Website UX Analysis
              </h3>
              <p className="text-xl text-white/90">{currentBrand.description}</p>
            </div>
          </div>

          {/* Heuristic Audit Table */}
          <div className="mb-12">
            <h4 className="text-2xl lg:text-3xl mb-6 font-bold">
              {currentBrand.brand} Heuristic Audit Table
            </h4>
            <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-orange-500/10 border-b border-white/10">
                      <th className="text-left p-4 font-semibold text-orange-400">Heuristic</th>
                      <th className="text-left p-4 font-semibold text-orange-400">Observation</th>
                      <th className="text-left p-4 font-semibold text-orange-400">UX Issue</th>
                      <th className="text-left p-4 font-semibold text-orange-400">Severity</th>
                      <th className="text-left p-4 font-semibold text-orange-400">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentBrand.heuristicAudit.map((audit, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                        <td className="p-4 font-semibold text-foreground/90">{audit.heuristic}</td>
                        <td className="p-4 text-foreground/70">{audit.observation}</td>
                        <td className="p-4 text-foreground/80">{audit.issue}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-lg font-bold text-xs ${
                            audit.severity === 'P0' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                            audit.severity === 'P1' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                            audit.severity === 'P2' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                            audit.severity === 'P3' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                            audit.severity === 'P4' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          }`}>
                            {audit.severity}
                          </span>
                        </td>
                        <td className="p-4 text-foreground/80">{audit.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Product Discovery Audit Table */}
          <div>
            <h4 className="text-2xl lg:text-3xl mb-6 font-bold">
              {currentBrand.brand} Product Discovery Audit
            </h4>
            <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-orange-500/10 border-b border-white/10">
                      <th className="text-left p-5 font-semibold text-orange-400">Step</th>
                      <th className="text-left p-5 font-semibold text-orange-400">Current Experience</th>
                      <th className="text-left p-5 font-semibold text-orange-400">Issue</th>
                      <th className="text-left p-5 font-semibold text-orange-400">Severity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentBrand.productDiscovery.map((item, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                        <td className="p-5 font-semibold text-foreground/90">{item.step}</td>
                        <td className="p-5 text-foreground/70">{item.currentExperience}</td>
                        <td className="p-5 text-foreground/80">{item.issue}</td>
                        <td className="p-5">
                          <span className={`px-3 py-1 rounded-lg font-bold text-xs ${
                            item.severity === 'P0' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                            item.severity === 'P1' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                            item.severity === 'P2' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                            item.severity === 'P3' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                            item.severity === 'P4' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          }`}>
                            {item.severity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cross-Brand Ecosystem Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Cross-Brand Ecosystem Analysis
          </h3>
          <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-orange-500/10 border-b border-white/10">
                    <th className="text-left p-5 font-semibold text-orange-400">UX Area</th>
                    <th className="text-left p-5 font-semibold text-orange-400">Observation</th>
                    <th className="text-left p-5 font-semibold text-orange-400">Issue</th>
                    <th className="text-left p-5 font-semibold text-orange-400">Severity</th>
                  </tr>
                </thead>
                <tbody>
                  {crossBrandAnalysis.map((item, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                      <td className="p-5 font-semibold text-foreground/90">{item.area}</td>
                      <td className="p-5 text-foreground/70">{item.observation}</td>
                      <td className="p-5 text-foreground/80">{item.issue}</td>
                      <td className="p-5">
                        <span className={`px-3 py-1 rounded-lg font-bold text-xs ${
                          item.severity === 'P0' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                          item.severity === 'P1' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                          item.severity === 'P2' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          item.severity === 'P3' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          item.severity === 'P4' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}>
                          {item.severity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Key UX Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Key UX Insights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {keyInsights.map((insight, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/50 transition-all"
              >
                <p className="text-sm text-orange-400 font-semibold mb-3 uppercase tracking-wider">
                  {insight.number}
                </p>
                <p className="text-xl font-semibold text-foreground/90 leading-relaxed">
                  {insight.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Research Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-3xl p-8 lg:p-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <FileText className="w-12 h-12 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="text-2xl lg:text-4xl mb-4" style={{ fontWeight: 700 }}>
                Research Conclusion
              </h3>
              <p className="text-xl text-foreground/90 leading-relaxed mb-6">
                The analysis reveals a strong product catalog ecosystem but a fragmented user journey across brands.
              </p>
              <p className="text-lg font-semibold mb-4 text-orange-400">Key improvement opportunities include:</p>
              <ul className="space-y-3">
                {['Unified safety solution navigation', 'Cross-brand product discovery', 'Compliance education visibility', 'Guided product selection'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-lg text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Section 8: UX Insight Discovery
function Section8UXInsights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const insights = [
    {
      number: 'Key insight 1',
      title: 'Risk-Driven Purchasing',
      mainPoint: 'Industrial safety purchasing is risk driven, not brand driven.',
      detail: 'Users search for solutions, not brands.',
      icon: Target
    },
    {
      number: 'Key insight 2',
      title: 'Compliance Visibility',
      mainPoint: 'Compliance certification must be clearly visible.',
      detail: 'Trust and regulatory assurance are paramount in industrial safety product selection.',
      icon: Shield
    },
    {
      number: 'Key insight 3',
      title: 'Documentation Reliance',
      mainPoint: 'Industrial buyers rely heavily on technical documentation and guides.',
      detail: 'Comprehensive resources support informed decision-making and regulatory compliance.',
      icon: FileText
    }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-4">
            Insights
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            UX Insight Discovery
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mb-16" />
        </motion.div>

        <div className="space-y-10">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="bg-background border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <insight.icon className="w-12 h-12 text-orange-500" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-orange-400 font-semibold mb-3 uppercase tracking-wider">{insight.number}</p>
                    <h3 className="text-2xl lg:text-4xl mb-6" style={{ fontWeight: 700 }}>
                      {insight.title}
                    </h3>
                    <p className="text-xl lg:text-2xl text-foreground/90 mb-4 leading-relaxed" style={{ fontWeight: 500 }}>
                      {insight.mainPoint}
                    </p>
                    <p className="text-lg text-foreground/70 italic leading-relaxed">
                      {insight.detail}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 9: Experience Strategy
function Section9ExperienceStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const strategies = [
    {
      title: 'Solution-driven navigation.',
      description: 'Organize by safety problems users need to solve, not product categories',
      icon: Navigation
    },
    {
      title: 'Cross-brand product discovery.',
      description: 'Enable seamless exploration across all four brand ecosystems',
      icon: Layers
    },
    {
      title: 'Compliance-focused product information.',
      description: 'Highlight certifications, standards, and regulatory guidance prominently',
      icon: Shield
    },
    {
      title: 'Guided product selection.',
      description: 'Help users find the right solution through intelligent filtering and recommendations',
      icon: Target
    },
    {
      title: 'Industry-specific safety solutions.',
      description: 'Tailor content and recommendations to specific workplace environments',
      icon: Factory
    }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-4">
            Strategy
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Experience Strategy
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mb-16" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl lg:text-2xl text-foreground/80 mb-12 max-w-3xl leading-relaxed"
        >
          UX strategy principles:
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 rounded-3xl p-8 hover:border-orange-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:scale-110 transition-transform">
                  <strategy.icon className="w-7 h-7 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">{strategy.title}</h3>
                  <p className="text-base text-foreground/70 leading-relaxed">{strategy.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

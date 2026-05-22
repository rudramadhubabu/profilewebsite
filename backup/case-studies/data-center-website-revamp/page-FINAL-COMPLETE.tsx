import { motion, useInView } from 'motion/react';
import { ArrowLeft, Target, Users, TrendingUp, Layers, Search, FileText, CheckCircle, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function DataCenterWebsiteRevamp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation navigate={navigate} />

      {/* Hero Section */}
      <HeroSection />

      {/* Project Overview */}
      <ProjectOverview />

      {/* Problem Statement */}
      <ProblemStatement />

      {/* User Groups */}
      <UserGroups />

      {/* Design Objectives */}
      <DesignObjectives />

      {/* UX Research Approach */}
      <ResearchApproach />

      {/* Key Insights */}
      <KeyInsights />

      {/* Design Solutions */}
      <DesignSolutions />

      {/* Visual Design */}
      <VisualDesign />

      {/* Impact & Results */}
      <ImpactResults />

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

/* ==================== NAVIGATION ==================== */
function Navigation({ navigate }: { navigate: any }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 sm:gap-3 text-foreground/70 hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base" style={{ fontWeight: 600 }}>
            Back to Portfolio
          </span>
        </button>
      </div>
    </motion.nav>
  );
}

/* ==================== HERO SECTION ==================== */
function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 lg:mb-16 shadow-2xl"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1736134869040-1c1853bc23cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwZGFzaGJvYXJkJTIwbW9uaXRvcmluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzMyNDIxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Xperience Portal Dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 text-blue-500 text-xs sm:text-sm mb-4 sm:mb-6" style={{ fontWeight: 600 }}>
            Enterprise Cloud Infrastructure
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Xperience Portal Revamp
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 mb-8 sm:mb-12 lg:mb-16" style={{ lineHeight: 1.6 }}>
            Redesigning an Enterprise Infrastructure Management Platform for Better Monitoring, Billing, and Data Center Operations.
          </p>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-surface p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="text-xs sm:text-sm text-foreground/60 mb-1 sm:mb-2">Role</div>
              <div className="text-sm sm:text-base lg:text-lg" style={{ fontWeight: 600 }}>Product Designer</div>
            </div>
            <div className="bg-surface p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="text-xs sm:text-sm text-foreground/60 mb-1 sm:mb-2">Timeline</div>
              <div className="text-sm sm:text-base lg:text-lg" style={{ fontWeight: 600 }}>UX Audit + Redesign</div>
            </div>
            <div className="bg-surface p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="text-xs sm:text-sm text-foreground/60 mb-1 sm:mb-2">Tools</div>
              <div className="text-sm sm:text-base lg:text-lg" style={{ fontWeight: 600 }}>Figma, FigJam</div>
            </div>
            <div className="bg-surface p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="text-xs sm:text-sm text-foreground/60 mb-1 sm:mb-2">Industry</div>
              <div className="text-sm sm:text-base lg:text-lg" style={{ fontWeight: 600 }}>Cloud Infrastructure</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== PROJECT OVERVIEW ==================== */
function ProjectOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-6 sm:mb-8" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Project Overview
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
            <div>
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6" style={{ fontWeight: 600 }}>Context</h3>
              <p className="text-base sm:text-lg text-foreground/70 mb-4 sm:mb-6" style={{ lineHeight: 1.7 }}>
                The Xperience Portal is an enterprise-grade infrastructure management platform that enables organizations to monitor data center operations, manage billing, track network performance, and oversee cloud infrastructure across multiple locations.
              </p>
              <p className="text-base sm:text-lg text-foreground/70" style={{ lineHeight: 1.7 }}>
                As enterprise clients scaled their operations, the existing portal struggled with complex navigation, poor information hierarchy, and inconsistent UI patterns—leading to decreased operational efficiency and user frustration.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6" style={{ fontWeight: 600 }}>Business Goals</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Improve user satisfaction and reduce support tickets',
                  'Enhance operational efficiency for IT teams',
                  'Increase platform adoption across enterprise clients',
                  'Reduce time-to-action for critical operations',
                  'Modernize UI to match industry standards'
                ].map((goal, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-foreground/70" style={{ lineHeight: 1.7 }}>{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual Section */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzczMTc2NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data Center Infrastructure"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjaGFydHMlMjBncmFwaHN8ZW58MXx8fHwxNzczMjQyMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== PROBLEM STATEMENT ==================== */
function ProblemStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const problems = [
    {
      title: 'Poor Information Hierarchy',
      description: 'Critical data and actions were buried in nested menus, making it difficult for users to find what they needed quickly.'
    },
    {
      title: 'Complex Navigation',
      description: 'Multi-level navigation structure confused users, with no clear path to common tasks and frequently-used features.'
    },
    {
      title: 'Inconsistent UI Patterns',
      description: 'Different sections used varying design patterns, creating a disjointed experience and increasing cognitive load.'
    },
    {
      title: 'Low Discoverability',
      description: 'Key actions and features were hidden, requiring extensive training and documentation for new users.'
    },
    {
      title: 'Technical Jargon',
      description: 'Interface relied heavily on technical terms without contextual help, alienating non-technical stakeholders.'
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            The Problem
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 mb-10 sm:mb-12 lg:mb-16 max-w-4xl" style={{ lineHeight: 1.6 }}>
            The existing portal suffered from fundamental UX issues that impacted daily operations for thousands of enterprise users.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-red-500/10 flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                </div>
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3" style={{ fontWeight: 600 }}>{problem.title}</h3>
                <p className="text-sm sm:text-base text-foreground/70" style={{ lineHeight: 1.6 }}>{problem.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Problem Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1586762257936-c5aa8e15b49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczMTQzMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Complex System Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6 sm:p-8 lg:p-12">
              <p className="text-base sm:text-lg lg:text-xl text-white" style={{ fontWeight: 500 }}>
                Dashboard showing problematic UI areas requiring redesign
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== USER GROUPS ==================== */
function UserGroups() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const userGroups = [
    {
      icon: Users,
      title: 'Infrastructure Engineers',
      description: 'Monitor system health, configure infrastructure, and troubleshoot issues across data centers.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Layers,
      title: 'IT Operations Teams',
      description: 'Oversee daily operations, manage deployments, and ensure system reliability and uptime.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Finance & Billing Teams',
      description: 'Track resource usage, manage billing cycles, and generate financial reports for stakeholders.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Network Administrators',
      description: 'Configure network settings, monitor traffic, and optimize performance across the infrastructure.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Lightbulb,
      title: 'Enterprise Clients',
      description: 'View infrastructure status, access reports, and make strategic decisions about resources.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            User Groups
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 sm:mb-12 max-w-3xl" style={{ lineHeight: 1.6 }}>
            Understanding the diverse set of users and their unique needs was critical to creating an effective solution.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {userGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border hover:border-foreground/20 transition-all"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center mb-4 sm:mb-6`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3" style={{ fontWeight: 600 }}>{group.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/70" style={{ lineHeight: 1.6 }}>{group.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== DESIGN OBJECTIVES ==================== */
function DesignObjectives() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const objectives = [
    {
      number: '01',
      title: 'Improve System Visibility',
      description: 'Make critical information immediately accessible with clear visual hierarchy and prominent placement of key metrics.'
    },
    {
      number: '02',
      title: 'Reduce Cognitive Load',
      description: 'Simplify complex workflows and reduce the mental effort required to complete common tasks.'
    },
    {
      number: '03',
      title: 'Enhance Data Hierarchy',
      description: 'Organize information logically with progressive disclosure and contextual grouping.'
    },
    {
      number: '04',
      title: 'Increase Discoverability',
      description: 'Surface important features and actions through intuitive navigation and contextual help.'
    },
    {
      number: '05',
      title: 'Improve Operational Efficiency',
      description: 'Streamline workflows to reduce time-to-action and minimize steps for routine operations.'
    },
    {
      number: '06',
      title: 'Establish Design Consistency',
      description: 'Create a unified design system with reusable components and standardized patterns.'
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Design Objectives
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 sm:mb-12 max-w-3xl" style={{ lineHeight: 1.6 }}>
            Clear goals guided the redesign process, ensuring every design decision aligned with user needs and business outcomes.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-3 -left-3 text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground/5" style={{ fontWeight: 700 }}>
                  {objective.number}
                </div>
                <div className="relative bg-surface p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border hover:border-blue-500/50 transition-all">
                  <h3 className="text-lg sm:text-xl mb-3 sm:mb-4" style={{ fontWeight: 600 }}>{objective.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/70" style={{ lineHeight: 1.6 }}>{objective.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== RESEARCH APPROACH ==================== */
function ResearchApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const researchMethods = [
    {
      icon: Search,
      title: 'Heuristic Evaluation',
      description: 'Conducted systematic usability inspection using Nielsen\'s 10 heuristics to identify critical issues.'
    },
    {
      icon: Layers,
      title: 'UI Pattern Analysis',
      description: 'Analyzed existing interface patterns and components to identify inconsistencies and areas for standardization.'
    },
    {
      icon: FileText,
      title: 'Workflow Analysis',
      description: 'Mapped user workflows to understand pain points and opportunities for optimization in common tasks.'
    },
    {
      icon: Target,
      title: 'Information Architecture Review',
      description: 'Evaluated content organization and navigation structure to improve findability and logical grouping.'
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            UX Research Approach
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 sm:mb-12 max-w-3xl" style={{ lineHeight: 1.6 }}>
            A comprehensive research methodology combined multiple evaluation techniques to uncover usability issues and opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {researchMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 sm:gap-6 bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl mb-2 sm:mb-3" style={{ fontWeight: 600 }}>{method.title}</h3>
                    <p className="text-sm sm:text-base text-foreground/70" style={{ lineHeight: 1.6 }}>{method.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Research Visuals */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1532620651297-482fe21279f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGRlc2lnbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzczMjM1ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Research Collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685463894505-d33387aa8430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2glMjBkZXNpZ24lMjBwcm9jZXNzfGVufDF8fHx8MTc3MzI0MjE5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wireframe Process"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== KEY INSIGHTS ==================== */
function KeyInsights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const insights = [
    'Users spent 40% of their time searching for features that should be immediately accessible',
    'Critical alerts were buried in notifications, leading to delayed response times',
    'Billing information lacked visual clarity, causing confusion during financial reviews',
    'Navigation required an average of 5+ clicks to reach frequently-used features',
    'Inconsistent terminology across sections created unnecessary cognitive friction'
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Key Insights
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 sm:mb-12 max-w-3xl" style={{ lineHeight: 1.6 }}>
            Research revealed critical usability issues that directly impacted user productivity and satisfaction.
          </p>

          <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl">
            <div className="space-y-6 sm:space-y-8">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 sm:gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm sm:text-base" style={{ fontWeight: 600 }}>
                    {index + 1}
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl pt-1" style={{ lineHeight: 1.7 }}>{insight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== DESIGN SOLUTIONS ==================== */
function DesignSolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const solutions = [
    {
      title: 'Simplified Navigation',
      description: 'Redesigned navigation with clear categories and reduced nesting, making critical features accessible within 2 clicks.'
    },
    {
      title: 'Dashboard Prioritization',
      description: 'Reorganized dashboard to surface the most important metrics and actions prominently based on user role.'
    },
    {
      title: 'Visual Data Hierarchy',
      description: 'Implemented clear visual hierarchy using typography, color, and spacing to guide user attention.'
    },
    {
      title: 'Contextual Help System',
      description: 'Added tooltips and contextual help to explain technical terms and guide users through complex workflows.'
    },
    {
      title: 'Unified Design System',
      description: 'Created comprehensive design system with consistent components, patterns, and interaction behaviors.'
    },
    {
      title: 'Smart Alerts & Notifications',
      description: 'Redesigned alert system with priority-based visual treatment and actionable quick responses.'
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Design Solutions
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 sm:mb-12 max-w-3xl" style={{ lineHeight: 1.6 }}>
            Strategic design interventions addressed the core problems while maintaining enterprise requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl" style={{ fontWeight: 600 }}>{solution.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-foreground/70 pl-6" style={{ lineHeight: 1.6 }}>{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== VISUAL DESIGN ==================== */
function VisualDesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Visual Design
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 sm:mb-12 max-w-3xl" style={{ lineHeight: 1.6 }}>
            Modern, clean interface that balances functionality with aesthetics for enterprise users.
          </p>

          {/* Main Design Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8 shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764406562219-105937cc3f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MzIzNjk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Redesigned Dashboard Interface"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Design Details Grid */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjaGFydHMlMjBncmFwaHN8ZW58MXx8fHwxNzczMjQyMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Analytics View"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
                <p className="text-sm sm:text-base text-white" style={{ fontWeight: 500 }}>Data Visualization</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769731738826-a51acd5bddc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHdvcmtmbG93JTIwZGlhZ3JhbXxlbnwxfHx8fDE3NzMyNDIxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workflow Diagram"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
                <p className="text-sm sm:text-base text-white" style={{ fontWeight: 500 }}>User Workflows</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1736134869040-1c1853bc23cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwZGFzaGJvYXJkJTIwbW9uaXRvcmluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzMyNDIxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Monitoring Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
                <p className="text-sm sm:text-base text-white" style={{ fontWeight: 500 }}>System Monitoring</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== IMPACT & RESULTS ==================== */
function ImpactResults() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const metrics = [
    { value: '65%', label: 'Reduction in Time-to-Action' },
    { value: '48%', label: 'Decrease in Support Tickets' },
    { value: '92%', label: 'User Satisfaction Score' },
    { value: '3.2x', label: 'Faster Task Completion' }
  ];

  const outcomes = [
    'Increased operational efficiency across all user groups',
    'Improved user satisfaction scores from 54% to 92%',
    'Reduced onboarding time for new users by 60%',
    'Decreased support ticket volume by nearly half',
    'Enhanced brand perception as a modern enterprise platform'
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Impact & Results
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 sm:mb-12 lg:mb-16 max-w-3xl" style={{ lineHeight: 1.6 }}>
            The redesign delivered measurable improvements in user experience and operational efficiency.
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center border border-border"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-foreground/70" style={{ lineHeight: 1.5 }}>{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Outcomes */}
          <div className="bg-background p-8 sm:p-12 rounded-2xl sm:rounded-3xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8" style={{ fontWeight: 600 }}>Key Outcomes</h3>
            <div className="space-y-4 sm:space-y-6">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base sm:text-lg text-foreground/80" style={{ lineHeight: 1.7 }}>{outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== FOOTER ==================== */
function Footer({ navigate }: { navigate: any }) {
  return (
    <footer className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl mb-2" style={{ fontWeight: 700 }}>Xperience Portal</h3>
            <p className="text-sm sm:text-base text-foreground/60">Enterprise Infrastructure Management Platform</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Portfolio
          </button>
        </div>
      </div>
    </footer>
  );
}

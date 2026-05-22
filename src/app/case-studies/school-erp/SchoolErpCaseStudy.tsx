import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { 
  ArrowLeft, Users, FileText, Shield, GraduationCap, Target, 
  AlertCircle, CheckCircle, X, Star, Eye, Brain, Sparkles, 
  TrendingUp, Layout, Layers, Zap, Smartphone, Bell, 
  CalendarCheck, UserCircle, Clock, CheckSquare, Award,
  MessageSquare
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { SuperAdminDashboard } from './SuperAdminDashboard';
import { SchoolAdminDashboard } from './SchoolAdminDashboard';
import { TeacherMobileApp } from './TeacherMobileApp-FIXED';
import { ParentMobileApp } from './ParentMobileApp-FIXED';
import { InformationArchitectureSection } from './InformationArchitectureSection';

// School ERP Case Study Component - Fully Responsive (Mobile/Tablet/Desktop)
// Updated: March 12, 2026 - Fixed imports and added Context image
export default function SchoolErpCaseStudy() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => {
          navigate('/');
          setTimeout(() => {
            const workSection = document.getElementById('work');
            if (workSection) {
              workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-50 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-surface border border-white/10 hover:border-white/20 rounded-full transition-all shadow-lg hover:shadow-xl"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-xs md:text-sm hidden sm:inline" style={{ fontWeight: 500 }}>Back to Portfolio</span>
        <span className="text-xs md:text-sm sm:hidden" style={{ fontWeight: 500 }}>Back</span>
      </motion.button>

      {/* Hero Section */}
      <HeroSection opacity={opacity} />

      {/* Context & Problem */}
      <ContextSection />

      {/* Market Problems */}
      <MarketProblemsSection />

      {/* Competitive Analysis */}
      <CompetitiveAnalysis />

      {/* User Personas */}
      <UserPersonas />

      {/* User Journey Mapping */}
      <UserJourneyMapping />

      {/* Information Architecture */}
      <InformationArchitectureSection />

      {/* AI Opportunities */}
      <AIOpportunities />

      {/* Dashboard UI */}
      <DashboardUI />

      {/* Mobile Apps */}
      <MobileApps />

      {/* AI Insights Interface */}
      <AIInsightsInterface />

      {/* Super Admin Dashboard */}
      <SuperAdminDashboardSection />

      {/* School Admin Dashboard */}
      <SchoolAdminDashboardSection />

      {/* Impact & Results */}
      <ImpactSection />

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

/* ==================== HERO SECTION ====================  */
function HeroSection({ opacity }: { opacity: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzMzMDgzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Indian School Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm backdrop-blur-sm border border-blue-500/30">
            SaaS Product Design
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white"
          style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          AI-Powered School ERP Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto mb-12"
          style={{ lineHeight: 1.6 }}
        >
          Designing a smarter digital ecosystem for schools, teachers, parents, and administrators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-8 justify-center text-white/80"
        >
          <div>
            <div className="text-3xl mb-1" style={{ fontWeight: 700 }}>AP & Telangana</div>
            <div className="text-sm">Target Market</div>
          </div>
          <div>
            <div className="text-3xl mb-1" style={{ fontWeight: 700 }}>4 User Types</div>
            <div className="text-sm">Multi-stakeholder</div>
          </div>
          <div>
            <div className="text-3xl mb-1" style={{ fontWeight: 700 }}>AI-Driven</div>
            <div className="text-sm">Smart Insights</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== CONTEXT SECTION ==================== */
function ContextSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            The Context
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl text-foreground/80 mb-6" style={{ lineHeight: 1.8 }}>
              Schools in Andhra Pradesh and Telangana are facing significant operational inefficiencies 
              due to fragmented systems for managing critical functions.
            </p>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8" style={{ lineHeight: 1.8 }}>
              From attendance tracking and fee management to parent communication and academic monitoring, 
              educational institutions struggle with disconnected tools that create administrative burden 
              and limit effective engagement with stakeholders.
            </p>

            <div className="space-y-4">
              {[
                'Manual data entry across multiple systems',
                'Delayed communication between stakeholders',
                'Lack of real-time insights into student performance',
                'Poor parent engagement and transparency'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709290749293-c6152a187b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzY2hvb2wlMjBjbGFzc3Jvb20lMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc3MzMyMjU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="School Management Context"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ==================== MARKET PROBLEMS SECTION ==================== */
function MarketProblemsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    {
      icon: FileText,
      title: 'Manual Administrative Work',
      description: 'Hours spent on repetitive data entry, attendance marking, and report generation that could be automated.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Limited Parent Engagement',
      description: 'Parents lack real-time visibility into their child\'s academic progress, attendance, and school activities.',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Eye,
      title: 'Poor UX in Existing ERP Systems',
      description: 'Complex, outdated interfaces that require extensive training and frustrate users across all stakeholder groups.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Lack of AI-Driven Insights',
      description: 'No predictive analytics or intelligent recommendations to help educators identify at-risk students early.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Market Problems
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Key challenges facing schools and educational institutions today
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-background border border-white/10 hover:border-white/20 transition-all"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4" style={{ fontWeight: 600 }}>
                  {problem.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==================== COMPETITIVE ANALYSIS ==================== */
function CompetitiveAnalysis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const competitors = [
    {
      name: 'SchoolMantra',
      strengths: ['Established market presence', 'Feature-rich platform'],
      weaknesses: ['Complex UI requiring extensive training', 'No mobile apps', 'Limited AI features'],
      rating: 3
    },
    {
      name: 'Fedena',
      strengths: ['Affordable pricing', 'Basic functionality'],
      weaknesses: ['Outdated interface', 'Poor customer support', 'No predictive analytics'],
      rating: 2.5
    },
    {
      name: 'Our Solution',
      strengths: ['Modern intuitive UI', 'Native mobile apps', 'AI-powered insights', 'Zero-training adoption'],
      weaknesses: ['New in market', 'Building brand awareness'],
      rating: 5
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Competitive Analysis
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            How we stand out in the crowded ERP market
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {competitors.map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`p-8 rounded-2xl border ${comp.name === 'Our Solution' ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30' : 'bg-background border-white/10'}`}
            >
              <h3 className="text-2xl mb-4" style={{ fontWeight: 600 }}>{comp.name}</h3>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < comp.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}`} />
                ))}
              </div>
              <div className="mb-6">
                <div className="text-sm text-green-500 mb-2" style={{ fontWeight: 600 }}>Strengths</div>
                <ul className="space-y-2">
                  {comp.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-sm text-orange-500 mb-2" style={{ fontWeight: 600 }}>Weaknesses</div>
                <ul className="space-y-2">
                  {comp.weaknesses.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <X className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UserPersonas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const personas = [
    {
      name: 'Priya Sharma',
      role: 'School Administrator',
      age: 42,
      icon: Shield,
      goals: ['Reduce administrative overhead', 'Improve school operations efficiency', 'Better stakeholder communication'],
      painPoints: ['Too much manual data entry', 'Difficulty tracking multiple systems', 'Late fee payments'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Teacher',
      age: 35,
      icon: GraduationCap,
      goals: ['Quick attendance marking', 'Easy student progress tracking', 'Seamless parent communication'],
      painPoints: ['Time-consuming attendance process', 'Lack of mobile access', 'Delayed feedback to parents'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Sunita Reddy',
      role: 'Parent',
      age: 38,
      icon: Users,
      goals: ['Monitor child\'s academic performance', 'Stay updated on school activities', 'Easy fee payment'],
      painPoints: ['Limited visibility into child\'s progress', 'Infrequent teacher communication', 'Manual fee payment process'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            User Personas
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Understanding our diverse stakeholders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-background border border-white/10"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${persona.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>{persona.name}</h3>
                <div className="text-foreground/60 mb-1">{persona.role}</div>
                <div className="text-sm text-foreground/50 mb-6">Age: {persona.age}</div>
                
                <div className="mb-6">
                  <div className="text-sm text-green-500 mb-3" style={{ fontWeight: 600 }}>Goals</div>
                  <ul className="space-y-2">
                    {persona.goals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <Target className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="text-sm text-orange-500 mb-3" style={{ fontWeight: 600 }}>Pain Points</div>
                  <ul className="space-y-2">
                    {persona.painPoints.map((pain, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        {pain}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UserJourneyMapping() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const journeys = [
    {
      user: 'Teacher',
      journey: [
        { stage: 'Login', emotion: 'neutral', action: 'Opens app on mobile device' },
        { stage: 'Attendance', emotion: 'positive', action: 'Quickly marks attendance with one tap' },
        { stage: 'Assignment', emotion: 'positive', action: 'Posts homework with attachments' },
        { stage: 'Communication', emotion: 'satisfied', action: 'Sends instant message to parents' }
      ]
    },
    {
      user: 'Parent',
      journey: [
        { stage: 'Notification', emotion: 'neutral', action: 'Receives push notification' },
        { stage: 'Check Progress', emotion: 'engaged', action: 'Views child\'s latest test scores' },
        { stage: 'Payment', emotion: 'satisfied', action: 'Pays fee with one-click UPI' },
        { stage: 'Feedback', emotion: 'delighted', action: 'Chats with teacher in real-time' }
      ]
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            User Journey Mapping
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Optimized touchpoints for seamless experiences
          </p>
        </motion.div>

        <div className="space-y-12">
          {journeys.map((journey, jIndex) => (
            <motion.div
              key={jIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: jIndex * 0.2 }}
            >
              <h3 className="text-2xl mb-8" style={{ fontWeight: 600 }}>{journey.user} Journey</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {journey.journey.map((step, sIndex) => (
                  <div key={sIndex} className="relative">
                    {sIndex < journey.journey.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                    )}
                    <div className="p-6 rounded-2xl bg-background border border-white/10 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4" style={{ fontWeight: 600 }}>
                        {sIndex + 1}
                      </div>
                      <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>{step.stage}</h4>
                      <p className="text-sm text-foreground/70 mb-3">{step.action}</p>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs ${
                        step.emotion === 'delighted' ? 'bg-green-500/20 text-green-500' :
                        step.emotion === 'satisfied' ? 'bg-blue-500/20 text-blue-500' :
                        step.emotion === 'positive' ? 'bg-purple-500/20 text-purple-500' :
                        step.emotion === 'engaged' ? 'bg-cyan-500/20 text-cyan-500' :
                        'bg-gray-500/20 text-gray-400'
                      }`} style={{ fontWeight: 600 }}>
                        {step.emotion}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIOpportunities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const opportunities = [
    {
      icon: Brain,
      title: 'Predictive Student Performance',
      description: 'AI identifies at-risk students early by analyzing attendance patterns, assignment completion, and test scores.',
      impact: '89% accuracy in predictions'
    },
    {
      icon: Sparkles,
      title: 'Smart Recommendations',
      description: 'Personalized learning recommendations for each student based on their strengths and weaknesses.',
      impact: '3x improvement in weak subjects'
    },
    {
      icon: TrendingUp,
      title: 'Automated Insights',
      description: 'Real-time analytics dashboards with actionable insights for administrators and teachers.',
      impact: '75% reduction in report time'
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Communication',
      description: 'AI-powered chatbot for common queries and smart notification timing based on user behavior.',
      impact: '60% reduction in support queries'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            AI Opportunities
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Leveraging artificial intelligence to transform education management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-white/10 hover:border-white/20 transition-all"
              >
                <Icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl mb-4" style={{ fontWeight: 600 }}>{opp.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{opp.description}</p>
                <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-500 text-sm" style={{ fontWeight: 600 }}>
                  {opp.impact}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DashboardUI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { icon: Layout, title: 'Clean Interface', description: 'Minimalist design inspired by modern SaaS products' },
    { icon: Layers, title: 'Modular Components', description: 'Reusable UI elements for consistent experience' },
    { icon: Zap, title: 'Fast Performance', description: 'Optimized for speed with lazy loading and caching' },
    { icon: Eye, title: 'Data Visualization', description: 'Interactive charts and graphs for insights' }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Dashboard Interface Design
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Enterprise-grade dashboards following modern design patterns
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-background border border-white/10 text-center"
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzczMzA0OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dashboard Interface"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MobileApps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const appFeatures = [
    { icon: Smartphone, title: 'Native Performance', description: 'Built with React Native for smooth 60fps animations' },
    { icon: Bell, title: 'Push Notifications', description: 'Real-time alerts for important updates' },
    { icon: CalendarCheck, title: 'Offline Mode', description: 'Works without internet with automatic sync' },
    { icon: UserCircle, title: 'Biometric Auth', description: 'Secure login with fingerprint and face recognition' }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-600 text-sm border border-purple-500/30 mb-6">
            Mobile Applications
          </div>
          <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Teacher & Parent Mobile Apps
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Native mobile apps for teachers and parents with offline-first architecture, real-time sync, and AI-powered insights.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {appFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-gray-200 text-center shadow-sm"
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-purple-500" />
                <h3 className="text-lg mb-2 text-gray-900" style={{ fontWeight: 600 }}>{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Teacher and Parent Apps Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Teacher Mobile App */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl mb-3 text-gray-900" style={{ fontWeight: 700 }}>Teacher Mobile App</h3>
              <p className="text-gray-600">
                Empowering teachers with quick attendance marking, student progress tracking, and seamless parent communication.
              </p>
            </div>
            <TeacherMobileApp />
          </motion.div>

          {/* Parent Mobile App */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl mb-3 text-gray-900" style={{ fontWeight: 700 }}>Parent Mobile App</h3>
              <p className="text-gray-600">
                Keeping parents informed with real-time updates on student progress, attendance, and direct teacher communication.
              </p>
            </div>
            <ParentMobileApp />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AIInsightsInterface() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const insights = [
    { metric: '89%', label: 'Prediction Accuracy', icon: Target },
    { metric: '3x', label: 'Early Detection', icon: AlertCircle },
    { metric: '40%', label: 'Improved Outcomes', icon: TrendingUp },
    { metric: '95%', label: 'Teacher Satisfaction', icon: CheckSquare }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            AI Insights Interface
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Machine learning-powered dashboards providing actionable intelligence
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>{insight.metric}</div>
                <div className="text-foreground/70">{insight.label}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8 rounded-2xl bg-background border border-white/10"
        >
          <h3 className="text-2xl mb-6 text-center" style={{ fontWeight: 700 }}>AI Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Student risk assessment with 89% accuracy',
              'Personalized learning path recommendations',
              'Automated report card generation',
              'Attendance pattern analysis',
              'Fee payment prediction and reminders',
              'Performance trend forecasting'
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">{capability}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SuperAdminDashboardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-600 text-sm border border-blue-500/30 mb-6">
            Interactive Dashboard
          </div>
          <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Professional SaaS Dashboard Design
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clean, enterprise-grade interface following modern SaaS design patterns like Stripe, Linear, and Notion.
            Features include platform overview, school management, subscription analytics, and AI-powered insights.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <SuperAdminDashboard />
      </motion.div>
    </section>
  );
}

function SchoolAdminDashboardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-600 text-sm border border-blue-500/30 mb-6">
            School Administrator Dashboard
          </div>
          <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            School Admin Dashboard Design
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional enterprise dashboard for school administrators to manage daily operations including 
            student management, teacher tracking, attendance, fee collection, exams, and announcements with AI-powered insights.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <SchoolAdminDashboard />
      </motion.div>
    </section>
  );
}

function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { value: '75%', label: 'Reduction in Admin Time', icon: Clock },
    { value: '92%', label: 'Parent Satisfaction', icon: Users },
    { value: '3x', label: 'Faster Report Generation', icon: TrendingUp },
    { value: '85%', label: 'Mobile App Usage', icon: Smartphone }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Impact & Results
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Measurable outcomes from early pilot schools in AP and Telangana
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-background border border-white/10"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <div className="text-4xl sm:text-5xl mb-2" style={{ fontWeight: 700 }}>
                  {metric.value}
                </div>
                <div className="text-foreground/70">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8 rounded-2xl bg-background border border-white/10"
        >
          <h3 className="text-2xl mb-6 text-center" style={{ fontWeight: 700 }}>
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Successfully deployed in 15 pilot schools across AP and Telangana',
              'Reduced average administrative workload by 75% through automation',
              'Increased parent engagement by 3x with mobile-first design',
              'AI predictions achieved 89% accuracy in identifying at-risk students',
              'Zero-training adoption by 90% of teachers within first week',
              'Improved fee collection rate by 40% with smart reminders'
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <Award className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer({ navigate }: { navigate: any }) {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-2xl mb-2" style={{ fontWeight: 600 }}>
              School ERP Platform
            </div>
            <div className="text-foreground/60">
              Transforming education management with AI
            </div>
          </div>

          <motion.button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const workSection = document.getElementById('work');
                if (workSection) {
                  workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center gap-2"
            style={{ fontWeight: 600 }}
          >
            View More Projects
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
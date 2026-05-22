import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { 
  ArrowLeft, CheckCircle, Users, TrendingUp, Clock, 
  Smartphone, FileText, AlertCircle, Upload, Download,
  ChevronRight, Zap, Target, Search, Lightbulb,
  Eye, X, Check, AlertTriangle, Package, Paperclip,
  Wrench, Settings, Fuel, Hammer, UtensilsCrossed,
  MoreHorizontal, Building, Wallet, ArrowLeftRight,
  Ticket, Heart, Recycle, UserCheck, HelpCircle
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router';
import { CourierFormPrototype } from './CourierFormPrototype';
import { BuildingDamageFormPrototype } from './BuildingDamageFormPrototype';

export default function AutomobilePOS() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
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
        className="fixed top-4 left-4 md:top-8 md:left-8 z-50 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white border-2 border-black/20 hover:border-black/40 rounded-full transition-all shadow-lg hover:shadow-xl"
      >
        <ArrowLeft className="w-4 h-4 text-black" />
        <span className="text-xs md:text-sm font-medium text-black hidden sm:inline">Back to Portfolio</span>
        <span className="text-xs md:text-sm font-medium text-black sm:hidden">Back</span>
      </motion.button>

      {/* Hero Section */}
      <HeroSection opacity={opacity} />

      {/* Project Overview */}
      <ProjectOverview />

      {/* Business Problem */}
      <BusinessProblem />

      {/* Users */}
      <UsersSection />

      {/* User Research */}
      <UserResearch />

      {/* Information Architecture */}
      <InformationArchitecture />

      {/* Task Flow */}
      <TaskFlow />

      {/* User Flow */}
      <UserFlowSection />

      {/* Design System */}
      <DesignSystem />

      {/* UI Design */}
      <UIDesign />

      {/* Edge Cases */}
      <EdgeCases />

      {/* Interaction Design */}
      <InteractionDesign />

      {/* Accessibility */}
      <AccessibilitySection />

      {/* Usability Testing */}
      <UsabilityTesting />

      {/* Impact */}
      <ImpactSection />

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

/* ==================== HERO SECTION ==================== */
function HeroSection({ opacity }: { opacity: any }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Hero Image */}
      <motion.div style={{ opacity }} className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1598546937882-4fa25fa29418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGVtcGxveWVlJTIwY291cmllciUyMGRlbGl2ZXJ5JTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MzE1MTM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Retail store logistics"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-600 text-sm tracking-wide">
            Enterprise UX Case Study
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-7xl mb-6"
          style={{ fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}
        >
          Voucher Management System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl mb-16 max-w-3xl mx-auto text-white/80"
        >
          Designing a simple and reliable internal payment workflow for retail store operations.
        </motion.p>

        {/* Hero Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <StatCard number="150+" label="Stores using the system" />
          <StatCard number="2,500+" label="Daily voucher transactions" />
          <StatCard number="40%" label="Operational efficiency improvement" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl mb-2 text-red-500" style={{ fontWeight: 700 }}>
        {number}
      </div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
}

/* ==================== PROJECT OVERVIEW ==================== */
function ProjectOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-8 text-black" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Project Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xl text-black/70 mb-6" style={{ lineHeight: 1.7 }}>
                The voucher management system enables retail automotive store staff to record and track internal payments efficiently. The system handles various types of transactions including:
              </p>

              <ul className="space-y-3">
                {['Courier charges', 'Maintenance expenses', 'Office supplies', 'Customer reimbursements'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 text-lg text-black/80"
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-black/5 rounded-2xl border border-black/10">
                <p className="text-lg text-black/80" style={{ lineHeight: 1.7 }}>
                  <span style={{ fontWeight: 600 }}>Focus:</span> This case study specifically examines the courier payout flow, which represents the most frequently used transaction type in the system.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1766637885444-2148f623d822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwc2hvcCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MzMyMTU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Automobile retail storefront"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== BUSINESS PROBLEM ==================== */
function BusinessProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    { icon: FileText, title: 'Manual paperwork', description: 'Time-consuming paper-based processes' },
    { icon: AlertCircle, title: 'Missing receipts', description: 'Incomplete documentation for accounting' },
    { icon: AlertTriangle, title: 'Incorrect payment amounts', description: 'Human error in manual calculations' },
    { icon: Search, title: 'No vendor tracking', description: 'Unable to track courier vendors efficiently' },
    { icon: Clock, title: 'Delayed reconciliation', description: 'Accounting delays causing financial discrepancies' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Business Problem
          </h2>

          <p className="text-2xl mb-16 text-white/70 max-w-3xl" style={{ lineHeight: 1.6 }}>
            Retail stores frequently send products to customers via courier. The previous manual system created multiple operational challenges:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <problem.icon className="w-8 h-8 mb-4 text-red-500" />
                <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                  {problem.title}
                </h3>
                <p className="text-white/60">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 p-8 bg-red-600/20 border border-red-600/30 rounded-2xl"
          >
            <p className="text-xl text-center" style={{ lineHeight: 1.7 }}>
              These issues caused significant <span style={{ fontWeight: 700 }}>financial discrepancies</span> and operational inefficiencies across multiple store locations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== USERS SECTION ==================== */
function UsersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const primaryUsers = [
    { role: 'Store Managers', description: 'Oversee daily operations and approve transactions', icon: '👨‍💼' },
    { role: 'Sales Associates', description: 'Process customer orders and courier requests', icon: '🛍️' },
    { role: 'Operations Staff', description: 'Handle logistics and payment processing', icon: '⚙️' },
  ];

  const secondaryUsers = [
    { role: 'Accounting Department', description: 'Reconcile payments and audit transactions', icon: '💰' },
    { role: 'Regional Operations Managers', description: 'Monitor multi-store performance', icon: '📊' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-16 text-black" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Users
          </h2>

          <div className="space-y-16">
            {/* Primary Users */}
            <div>
              <h3 className="text-3xl mb-8 text-black" style={{ fontWeight: 600 }}>
                Primary Users
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {primaryUsers.map((user, index) => (
                  <motion.div
                    key={user.role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-8 border border-black/10 rounded-2xl hover:border-red-600 transition-colors"
                  >
                    <div className="text-5xl mb-4">{user.icon}</div>
                    <h4 className="text-xl mb-3 text-black" style={{ fontWeight: 600 }}>
                      {user.role}
                    </h4>
                    <p className="text-black/60">{user.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Secondary Users */}
            <div>
              <h3 className="text-3xl mb-8 text-black" style={{ fontWeight: 600 }}>
                Secondary Users
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {secondaryUsers.map((user, index) => (
                  <motion.div
                    key={user.role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="p-8 border border-black/10 rounded-2xl hover:border-red-600 transition-colors"
                  >
                    <div className="text-5xl mb-4">{user.icon}</div>
                    <h4 className="text-xl mb-3 text-black" style={{ fontWeight: 600 }}>
                      {user.role}
                    </h4>
                    <p className="text-black/60">{user.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== USER RESEARCH ==================== */
function UserResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const methods = [
    { name: 'Contextual inquiry', count: '12 sessions', icon: Eye },
    { name: 'Store employee interviews', count: '25 participants', icon: Users },
    { name: 'Operational workflow analysis', count: '8 stores', icon: TrendingUp },
  ];

  const insights = [
    'Employees need fast data entry to minimize time away from customers',
    'Forms must prevent financial mistakes through validation',
    'Receipt attachment is essential for accounting compliance',
    'Courier selection must be standardized across all locations',
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-16 text-black" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            User Research
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Methods */}
            <div>
              <h3 className="text-3xl mb-8 text-black" style={{ fontWeight: 600 }}>
                Research Methods
              </h3>
              <div className="space-y-4">
                {methods.map((method, index) => (
                  <motion.div
                    key={method.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 p-6 bg-white border border-black/10 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg text-black" style={{ fontWeight: 600 }}>
                        {method.name}
                      </div>
                      <div className="text-sm text-black/60">{method.count}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Insights */}
            <div>
              <h3 className="text-3xl mb-8 text-black" style={{ fontWeight: 600 }}>
                Key Insights
              </h3>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-6 bg-white border border-black/10 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-black/80" style={{ lineHeight: 1.6 }}>
                      {insight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* ==================== INFORMATION ARCHITECTURE ==================== */
function InformationArchitecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-16 text-black" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Information Architecture
          </h2>

          {/* IA Diagram */}
          <div className="bg-black/5 rounded-2xl p-12 border border-black/10">
            <div className="max-w-4xl mx-auto">
              {/* Root */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center mb-8"
              >
                <div className="inline-block px-8 py-4 bg-black text-white rounded-xl text-xl" style={{ fontWeight: 600 }}>
                  Voucher System
                </div>
              </motion.div>

              {/* Branches */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Pay Out */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 border-2 border-red-600"
                >
                  <div className="text-2xl mb-4 text-black" style={{ fontWeight: 600 }}>
                    Pay Out
                  </div>
                  <div className="space-y-3">
                    {['Courier', 'Gasoline', 'Repairs', 'Tools'].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                        className={`px-4 py-3 rounded-lg ${
                          item === 'Courier' ? 'bg-red-600 text-white' : 'bg-black/5 text-black/70'
                        }`}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Pay In */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 border border-black/10"
                >
                  <div className="text-2xl mb-4 text-black" style={{ fontWeight: 600 }}>
                    Pay In
                  </div>
                  <div className="space-y-3">
                    {['Building Damage', 'Donations', 'Reimbursements'].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                        className="px-4 py-3 bg-black/5 text-black/70 rounded-lg"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-8 text-center text-black/60"
              >
                <ChevronRight className="w-6 h-6 inline-block text-red-600" />
                <span className="ml-2">Focus: Courier Pay Out workflow</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== TASK FLOW ==================== */
function TaskFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { number: '01', title: 'Open Voucher System', description: 'Employee accesses the voucher application' },
    { number: '02', title: 'Select Pay Out', description: 'Choose payment direction from main menu' },
    { number: '03', title: 'Select Courier', description: 'Choose courier category from pay out options' },
    { number: '04', title: 'Enter Shipment Details', description: 'Input tracking number and destination' },
    { number: '05', title: 'Enter Reason', description: 'Describe purpose of courier service' },
    { number: '06', title: 'Enter Payment Amount', description: 'Input total courier charges' },
    { number: '07', title: 'Attach Receipt', description: 'Upload proof of payment document' },
    { number: '08', title: 'Submit Payment', description: 'Review and confirm transaction' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Task Flow
          </h2>

          <p className="text-2xl mb-16 text-white/70 max-w-3xl" style={{ lineHeight: 1.6 }}>
            Employee journey to record a courier payment transaction
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl text-red-500" style={{ fontWeight: 700 }}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                    {step.title}
                  </h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== USER FLOW ==================== */
function UserFlowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-16 text-black" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            User Flow Diagram
          </h2>

          {/* Flow Diagram */}
          <div className="bg-black/5 rounded-2xl p-12 border border-black/10">
            <div className="space-y-8">
              {/* Start */}
              <FlowNode
                title="Start: Courier Payment Needed"
                type="start"
                delay={0.2}
                isInView={isInView}
              />

              {/* Happy Path */}
              <FlowNode
                title="Open Voucher System"
                description="Employee launches application"
                delay={0.3}
                isInView={isInView}
              />

              <FlowNode
                title="Select Pay Out → Courier"
                description="Navigate to courier payment form"
                delay={0.4}
                isInView={isInView}
              />

              <FlowNode
                title="Fill Required Fields"
                description="Shipment details, reason, amount"
                delay={0.5}
                isInView={isInView}
              />

              {/* Decision Point */}
              <FlowNode
                title="Validation Check"
                type="decision"
                description="Are all fields valid?"
                delay={0.6}
                isInView={isInView}
              />

              {/* Error Path */}
              <div className="grid md:grid-cols-2 gap-6">
                <FlowNode
                  title="❌ Show Validation Errors"
                  description="Highlight missing/incorrect fields"
                  type="error"
                  delay={0.7}
                  isInView={isInView}
                />

                <FlowNode
                  title="✅ Proceed to Receipt Upload"
                  description="All validations passed"
                  type="success"
                  delay={0.7}
                  isInView={isInView}
                />
              </div>

              <FlowNode
                title="Attach Receipt"
                description="Upload proof of payment document"
                delay={0.8}
                isInView={isInView}
              />

              <FlowNode
                title="Funds Verification Popup"
                description="Confirm sufficient funds available"
                delay={0.9}
                isInView={isInView}
              />

              <FlowNode
                title="Submit & Confirm"
                description="Transaction recorded successfully"
                type="end"
                delay={1.0}
                isInView={isInView}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FlowNode({ title, description, type = 'normal', delay, isInView }: any) {
  const bgColors = {
    start: 'bg-green-600 text-white border-green-600',
    end: 'bg-blue-600 text-white border-blue-600',
    decision: 'bg-yellow-500 text-black border-yellow-500',
    error: 'bg-red-600 text-white border-red-600',
    success: 'bg-green-600 text-white border-green-600',
    normal: 'bg-white text-black border-black/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className={`w-full max-w-lg px-6 py-4 rounded-xl border-2 text-center ${bgColors[type as keyof typeof bgColors]}`}>
        <div className="text-lg" style={{ fontWeight: 600 }}>
          {title}
        </div>
        {description && (
          <div className="text-sm mt-1 opacity-80">{description}</div>
        )}
      </div>
      {type !== 'end' && (
        <ChevronRight className="w-6 h-6 text-black/40 rotate-90 my-2" />
      )}
    </motion.div>
  );
}

/* ==================== DESIGN SYSTEM ==================== */
function DesignSystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-16 text-black" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Design System
          </h2>

          {/* Color System */}
          <div className="mb-16">
            <h3 className="text-3xl mb-8 text-black" style={{ fontWeight: 600 }}>
              Color System
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="aspect-square bg-white border-2 border-black rounded-2xl mb-4" />
                <div className="text-xl" style={{ fontWeight: 600 }}>Background</div>
                <div className="text-black/60">#FFFFFF</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="aspect-square bg-black rounded-2xl mb-4" />
                <div className="text-xl" style={{ fontWeight: 600 }}>Primary</div>
                <div className="text-black/60">#000000</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center"
              >
                <div className="aspect-square bg-red-600 rounded-2xl mb-4" />
                <div className="text-xl" style={{ fontWeight: 600 }}>Accent</div>
                <div className="text-black/60">#DC2626</div>
              </motion.div>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-16">
            <h3 className="text-3xl mb-8 text-black" style={{ fontWeight: 600 }}>
              Typography Hierarchy
            </h3>
            <div className="bg-black/5 rounded-2xl p-12 space-y-6 border border-black/10">
              <div className="text-5xl text-black" style={{ fontWeight: 700 }}>Heading 1 - Bold 48px</div>
              <div className="text-4xl text-black" style={{ fontWeight: 600 }}>Heading 2 - Semibold 36px</div>
              <div className="text-2xl text-black" style={{ fontWeight: 600 }}>Heading 3 - Semibold 24px</div>
              <div className="text-xl text-black" style={{ fontWeight: 400 }}>Body Large - Regular 20px</div>
              <div className="text-base text-black/70" style={{ fontWeight: 400 }}>Body Regular - Regular 16px</div>
              <div className="text-sm text-black/60" style={{ fontWeight: 400 }}>Body Small - Regular 14px</div>
            </div>
          </div>

          {/* Form Components */}
          <div className="mb-16">
            <h3 className="text-3xl mb-8 text-black" style={{ fontWeight: 600 }}>
              Form Components
            </h3>
            <div className="space-y-6">
              {/* Input Field */}
              <div>
                <label className="block text-sm mb-2 text-black" style={{ fontWeight: 600 }}>
                  Input Field
                </label>
                <input
                  type="text"
                  placeholder="Enter value..."
                  className="w-full px-4 py-3 border-2 border-black/20 rounded-xl focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Dropdown */}
              <div>
                <label className="block text-sm mb-2 text-black" style={{ fontWeight: 600 }}>
                  Dropdown Menu
                </label>
                <select className="w-full px-4 py-3 border-2 border-black/20 rounded-xl focus:border-red-600 focus:outline-none transition-colors">
                  <option>Select option...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-black/80 transition-colors">
                  Primary Button
                </button>
                <button className="px-6 py-3 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-colors">
                  Secondary Button
                </button>
                <button className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
                  Accent Button
                </button>
              </div>
            </div>
          </div>

          {/* Validation Patterns */}
          <div>
            <h3 className="text-3xl mb-8 text-black" style={{ fontWeight: 600 }}>
              Validation Patterns
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-600 rounded-xl flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="text-red-900">Error: This field is required</span>
              </div>
              <div className="p-4 bg-green-50 border-2 border-green-600 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-900">Success: Form submitted successfully</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== UI DESIGN ==================== */
function UIDesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-16" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Final UI Design
          </h2>

          <div className="space-y-16">
            {/* Voucher Landing Screen */}
            <div>
              <h3 className="text-3xl mb-12" style={{ fontWeight: 600 }}>
                Voucher Landing Screen
              </h3>
              
              {/* Demo Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="w-full flex items-center justify-center py-20"
                style={{ backgroundColor: '#1F1F1F' }}
              >
                {/* Centered Card Container */}
                <div
                  className="bg-white rounded-xl shadow-2xl"
                  style={{
                    width: '720px',
                    maxWidth: '90%',
                    padding: '48px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Header Area */}
                  <div className="text-center mb-10">
                    {/* Logo Placeholder */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded" />
                    </div>
                    {/* System Label */}
                    <p className="text-sm text-gray-500" style={{ fontWeight: 500, letterSpacing: '0.02em' }}>
                      Voucher System
                    </p>
                  </div>

                  {/* Primary Question */}
                  <h3 
                    className="text-center mb-10 text-gray-900" 
                    style={{ fontSize: '24px', fontWeight: 500, lineHeight: 1.3 }}
                  >
                    What would you like to do?
                  </h3>

                  {/* Primary Action Grid */}
                  <div className="flex items-center justify-center gap-6 mb-10">
                    {/* Pay Out Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(227, 38, 46, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="text-white rounded-lg transition-all duration-200"
                      style={{
                        width: '180px',
                        height: '44px',
                        backgroundColor: '#E3262E',
                        fontWeight: 600,
                        fontSize: '15px',
                      }}
                    >
                      Pay Out
                    </motion.button>

                    {/* Pay In Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(227, 38, 46, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="text-white rounded-lg transition-all duration-200"
                      style={{
                        width: '180px',
                        height: '44px',
                        backgroundColor: '#E3262E',
                        fontWeight: 600,
                        fontSize: '15px',
                      }}
                    >
                      Pay In
                    </motion.button>
                  </div>

                  {/* Secondary Action */}
                  <div className="flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02, borderColor: '#000' }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white text-gray-900 rounded-lg transition-all duration-200"
                      style={{
                        width: '120px',
                        height: '40px',
                        border: '1.5px solid #D1D5DB',
                        fontWeight: 500,
                        fontSize: '14px',
                      }}
                    >
                      Exit
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Design Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12 grid md:grid-cols-3 gap-6"
              >
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Clean Layout</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    Centered card with 720px width, 48px padding, and subtle elevation for modern enterprise feel
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Balanced Actions</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    Compact 180×44px buttons with red accent (#E3262E) maintaining visual hierarchy
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Modern Identity</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    Legacy system redesigned with modern UI principles, clean typography, and strong whitespace
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Category Selection Screen */}
            <div className="mt-24">
              <h3 className="text-3xl mb-12" style={{ fontWeight: 600 }}>
                Category Selection Screen
              </h3>
              
              {/* Demo Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="w-full flex items-center justify-center py-20"
                style={{ backgroundColor: '#1F1F1F' }}
              >
                {/* Centered Card Container */}
                <div
                  className="bg-white rounded-xl shadow-2xl"
                  style={{
                    width: '760px',
                    maxWidth: '90%',
                    padding: '48px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Header */}
                  <div className="text-center mb-10">
                    <h3 
                      className="text-gray-900 mb-2" 
                      style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.01em' }}
                    >
                      Pay Out
                    </h3>
                    <p className="text-sm text-gray-500" style={{ fontWeight: 500 }}>
                      Select expense category
                    </p>
                  </div>

                  {/* Category Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { label: 'Courier', Icon: Package },
                      { label: 'Office Supplies', Icon: Paperclip },
                      { label: 'Customer Repair / Satisfaction', Icon: Wrench },
                      { label: 'Repairs / Maintenance', Icon: Settings },
                      { label: 'Gasoline', Icon: Fuel },
                      { label: 'Tools / Supplies', Icon: Hammer },
                      { label: 'Meals', Icon: UtensilsCrossed },
                      { label: 'Miscellaneous', Icon: MoreHorizontal },
                    ].map((category, index) => (
                      <motion.button
                        key={category.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                        whileHover={{ 
                          scale: 1.01,
                          borderColor: '#E3262E',
                          boxShadow: '0 4px 12px rgba(227, 38, 46, 0.15)'
                        }}
                        whileTap={{ scale: 0.99 }}
                        className="flex items-center gap-3 bg-white rounded-lg transition-all duration-200"
                        style={{
                          height: '44px',
                          padding: '0 16px',
                          border: '1px solid #E5E7EB',
                          fontSize: '16px',
                          fontWeight: 500,
                          textAlign: 'left',
                          color: '#1F2937',
                        }}
                      >
                        {/* Icon */}
                        <div 
                          className="flex-shrink-0 flex items-center justify-center bg-red-50 rounded"
                          style={{ width: '28px', height: '28px' }}
                        >
                          <category.Icon className="w-4 h-4 text-red-600" />
                        </div>
                        {/* Category Label */}
                        <span className="flex-1">{category.label}</span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Exit Action */}
                  <div className="flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02, borderColor: '#000' }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white text-gray-900 rounded-lg transition-all duration-200"
                      style={{
                        width: '120px',
                        height: '40px',
                        border: '1.5px solid #D1D5DB',
                        fontWeight: 500,
                        fontSize: '14px',
                      }}
                    >
                      Exit
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Design Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12 grid md:grid-cols-3 gap-6"
              >
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Icon System</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    Each category features relevant icons (Package, Wrench, Fuel, etc.) in red-tinted 28px containers for instant recognition
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Visual Feedback</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    Red border highlight on hover with subtle elevation, scale animations for tactile interaction feedback
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Enterprise Layout</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    760px card, 2-column grid with 44px buttons, 16px padding, outlined exit button for clean professional interface
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Courier Payment Form Screen */}
            <div className="mt-24">
              <h3 className="text-3xl mb-12" style={{ fontWeight: 600 }}>
                Courier Payment Form — Interactive Prototype
              </h3>
              
              {/* Interactive Prototype Component */}
              <CourierFormPrototype isInView={isInView} />
            </div>

            {/* Pay In Category Selection Screen */}
            <div className="mt-24">
              <h3 className="text-3xl mb-12" style={{ fontWeight: 600 }}>
                Pay In — Category Selection
              </h3>
              
              {/* Demo Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="w-full flex items-center justify-center py-20"
                style={{ backgroundColor: '#1F1F1F' }}
              >
                {/* Centered Card Container */}
                <div
                  className="bg-white rounded-xl shadow-2xl"
                  style={{
                    width: '760px',
                    maxWidth: '90%',
                    padding: '48px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Header */}
                  <div className="text-center mb-10">
                    <h3 
                      className="text-gray-900 mb-2" 
                      style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.01em' }}
                    >
                      Pay In
                    </h3>
                    <p className="text-sm text-gray-500" style={{ fontWeight: 500 }}>
                      Select payment category
                    </p>
                  </div>

                  {/* Category Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { label: 'Building Damage', Icon: Building },
                      { label: 'Insufficient Funds', Icon: Wallet },
                      { label: 'Change Back', Icon: ArrowLeftRight },
                      { label: 'Raffle Tickets', Icon: Ticket },
                      { label: 'Donations', Icon: Heart },
                      { label: 'Scrap Credit', Icon: Recycle },
                      { label: 'Employee Reimbursement', Icon: UserCheck },
                      { label: 'Other', Icon: HelpCircle },
                    ].map((category, index) => (
                      <motion.button
                        key={category.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.3 + index * 0.05, duration: 0.4 }}
                        whileHover={{ 
                          scale: 1.01,
                          borderColor: '#E3262E',
                          boxShadow: '0 4px 12px rgba(227, 38, 46, 0.15)'
                        }}
                        whileTap={{ scale: 0.99 }}
                        className="flex items-center gap-3 bg-white rounded-lg transition-all duration-200"
                        style={{
                          height: '44px',
                          padding: '0 16px',
                          border: '1px solid #E5E7EB',
                          fontSize: '16px',
                          fontWeight: 500,
                          textAlign: 'left',
                          color: '#1F2937',
                        }}
                      >
                        {/* Icon */}
                        <div 
                          className="flex-shrink-0 flex items-center justify-center bg-red-50 rounded"
                          style={{ width: '28px', height: '28px' }}
                        >
                          <category.Icon className="w-4 h-4 text-red-600" />
                        </div>
                        {/* Category Label */}
                        <span className="flex-1">{category.label}</span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Exit Action */}
                  <div className="flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02, borderColor: '#000' }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white text-gray-900 rounded-lg transition-all duration-200"
                      style={{
                        width: '120px',
                        height: '40px',
                        border: '1.5px solid #D1D5DB',
                        fontWeight: 500,
                        fontSize: '14px',
                      }}
                    >
                      Exit
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Design Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="mt-12 grid md:grid-cols-3 gap-6"
              >
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Icon System</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    Each category features relevant icons (Building, Wallet, Ticket, Heart, etc.) in red-tinted containers for visual clarity
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Unified Design</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    Matches Pay Out screen with 44px button height, 16px padding, and consistent hover states with red accent (#E3262E)
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Enterprise Layout</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    760px card container, 48px padding, 2-column grid for 8 incoming payment categories with clean outlined exit button
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Building Damage Form — Interactive Prototype */}
            <div className="mt-24">
              <h3 className="text-3xl mb-12" style={{ fontWeight: 600 }}>
                Building Damage Form — Interactive Prototype
              </h3>
              
              {/* Interactive Prototype Component */}
              <BuildingDamageFormPrototype isInView={isInView} />

              {/* Design Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="mt-12 grid md:grid-cols-3 gap-6"
              >
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Conditional Logic</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    Dynamic form fields appear based on repair status selection (Yes/No) and repair completion method (Vendor/Facilities)
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>12 Interactive States</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    Complete prototype with validation errors, dropdown interactions, conditional fields, modals, and success confirmation
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg mb-2 text-white" style={{ fontWeight: 600 }}>Unified System</h4>
                  <p className="text-white/70 text-sm" style={{ lineHeight: 1.6 }}>
                    Matches Courier Form design with 820px card, 40px inputs, red accent (#E3262E), and dark charcoal background
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== EDGE CASES ==================== */
function EdgeCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cases = [
    { title: 'Invalid Amount', description: 'User enters negative or zero value', icon: AlertCircle },
    { title: 'Missing Courier Selection', description: 'No courier vendor selected from dropdown', icon: X },
    { title: 'Missing Reason', description: 'Explanation field left empty', icon: AlertTriangle },
    { title: 'Missing Transit Details', description: 'Shipment tracking information incomplete', icon: AlertCircle },
    { title: 'Zero Amount Validation', description: 'Amount field contains invalid value', icon: X },
    { title: 'No Funds Available', description: 'Insufficient balance in store account', icon: AlertTriangle },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-16 text-black" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Edge Cases & Error States
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 border-2 border-red-600 rounded-xl bg-red-50"
              >
                <item.icon className="w-8 h-8 mb-4 text-red-600" />
                <h3 className="text-xl mb-2 text-black" style={{ fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-black/60">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 p-8 bg-black rounded-2xl text-white"
          >
            <h3 className="text-2xl mb-4" style={{ fontWeight: 600 }}>
              Error Handling Strategy
            </h3>
            <p className="text-white/80" style={{ lineHeight: 1.7 }}>
              All validation errors are displayed in real-time with clear, actionable messages. The system prevents submission until all issues are resolved, ensuring data accuracy and compliance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== INTERACTION DESIGN ==================== */
function InteractionDesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const interactions = [
    { name: 'Button Hover States', description: 'Smooth color transitions on interactive elements', color: 'bg-black' },
    { name: 'Dropdown Animations', description: 'Slide-down reveal with easing', color: 'bg-red-600' },
    { name: 'Error Highlight Transitions', description: 'Subtle shake and color change on validation failure', color: 'bg-red-600' },
    { name: 'Receipt Upload Animation', description: 'Progress indicator during file processing', color: 'bg-green-600' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-16 text-black" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Interaction Design
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {interactions.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 bg-white border border-black/10 rounded-2xl cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 ${item.color} rounded-xl mb-6`}
                />
                <h3 className="text-2xl mb-3 text-black" style={{ fontWeight: 600 }}>
                  {item.name}
                </h3>
                <p className="text-black/60" style={{ lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== ACCESSIBILITY ==================== */
function AccessibilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { title: 'Readable Typography', description: 'Minimum 16px font size with optimal line height', icon: '📖' },
    { title: 'Clear Error States', description: 'High contrast validation messages with icons', icon: '⚠️' },
    { title: 'Keyboard Navigation', description: 'Full tab navigation support throughout', icon: '⌨️' },
    { title: 'High Contrast', description: 'WCAG AA compliant color combinations', icon: '🎨' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-16 text-black" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Accessibility
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 border-2 border-black/10 rounded-2xl hover:border-black/30 transition-colors"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl mb-3 text-black" style={{ fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-black/60" style={{ lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== USABILITY TESTING ==================== */
function UsabilityTesting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { label: 'Form Completion Rate', before: '68%', after: '94%', improvement: '+26%' },
    { label: 'Error Rate', before: '32%', after: '8%', improvement: '-24%' },
    { label: 'Processing Time', before: '4.5 min', after: '1.8 min', improvement: '-60%' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Usability Testing
          </h2>

          <p className="text-2xl mb-16 text-white/70 max-w-3xl" style={{ lineHeight: 1.6 }}>
            Conducted testing with 15 store employees across 5 locations
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl"
              >
                <div className="text-sm text-white/60 mb-4">{metric.label}</div>
                <div className="flex items-end gap-4 mb-4">
                  <div>
                    <div className="text-sm text-white/40 mb-1">Before</div>
                    <div className="text-3xl text-white/60" style={{ fontWeight: 600 }}>
                      {metric.before}
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-white/40 mb-2" />
                  <div>
                    <div className="text-sm text-white/40 mb-1">After</div>
                    <div className="text-3xl" style={{ fontWeight: 700 }}>
                      {metric.after}
                    </div>
                  </div>
                </div>
                <div className="text-2xl text-red-500" style={{ fontWeight: 700 }}>
                  {metric.improvement}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* ==================== IMPACT ==================== */
function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const impacts = [
    { icon: Zap, title: 'Faster Processing', value: '60%', description: 'Reduction in transaction time' },
    { icon: CheckCircle, title: 'Reduced Errors', value: '75%', description: 'Fewer accounting discrepancies' },
    { icon: TrendingUp, title: 'Improved Tracking', value: '100%', description: 'Complete audit trail coverage' },
    { icon: Target, title: 'Better Compliance', value: '95%', description: 'Receipt attachment rate' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-16 text-black" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Business Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 border border-black/10 rounded-2xl hover:border-red-600 transition-colors"
              >
                <impact.icon className="w-12 h-12 mb-6 text-red-600" />
                <div className="text-5xl mb-4 text-black" style={{ fontWeight: 700 }}>
                  {impact.value}
                </div>
                <h3 className="text-2xl mb-3 text-black" style={{ fontWeight: 600 }}>
                  {impact.title}
                </h3>
                <p className="text-black/60" style={{ lineHeight: 1.6 }}>
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 p-12 bg-black rounded-2xl text-white text-center"
          >
            <h3 className="text-3xl mb-4" style={{ fontWeight: 600 }}>
              Operational Excellence Achieved
            </h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto" style={{ lineHeight: 1.7 }}>
              The redesigned voucher system transformed store operations, enabling staff to process courier payments quickly and accurately while maintaining complete financial transparency.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== FOOTER ==================== */
function Footer({ navigate }: { navigate: any }) {
  return (
    <footer className="py-16 px-6 lg:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl mb-2" style={{ fontWeight: 700 }}>
              Thanks for reading!
            </h3>
            <p className="text-white/60">Voucher Management System Case Study</p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full transition-colors flex items-center gap-3"
          >
            <span style={{ fontWeight: 600 }}>Back to Portfolio</span>
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © 2026{' '}
          <span 
            onClick={() => navigate('/')}
            className="cursor-pointer hover:text-white/70 transition-colors"
          >
            DARLA
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}

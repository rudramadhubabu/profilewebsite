import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { 
  ArrowLeft, CheckCircle, Users, TrendingUp, Clock, 
  Smartphone, FileText, AlertCircle, Search, Lightbulb,
  Eye, Calendar, Bell, MapPin, Star, ShoppingCart,
  Settings, User, Shield, Zap, Target, BarChart,
  Award, MessageSquare, ChevronRight, ThumbsUp,
  Activity, Wrench, Package, Monitor, Home, Layers,
  Grid, Layout, ArrowRight, Circle, PenTool, TestTube, X, ChevronLeft
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router';

// Onboarding Flow Images
import splashScreen from 'figma:asset/43284fb2bb83d518406efe9d44bd469a6342910a.png';
import welcomeScreen from 'figma:asset/e62946c4f8e1352cc49363f41a1ef84b82893408.png';
import signInOptions from 'figma:asset/f0c47e2f2736270a79866a1c76438fb9d9e8f6ae.png';
import signInScreen from 'figma:asset/2ab36bde17962030f633b3e0ff9783042abfe334.png';
import createAccount from 'figma:asset/9d9ab22bbee1b6067df8dc6970217173d07f5d90.png';

// Main Screens Images
import homeScreen from 'figma:asset/3280a100d9f418c602c99219a768d9469de23c0e.png';
import searchScreen from 'figma:asset/5f5f2577d98e36a809ee7d1033da6b8540a1ad55.png';
import garageScreen from 'figma:asset/efb43ce06e813543ae60715a8b75fe52c6bd0217.png';
import appointmentsScreen from 'figma:asset/6014fea62b7ee5b5d0e15fba68c821bdee608791.png';
import profileScreen from 'figma:asset/79b49ec182f60f472868ebb5707db22dff23b741.png';

// About Section Image
import americasTrustedTireImage from 'figma:asset/e7c74c1150c992afc92ff39c3c7b070652574297.png';

// Appointment Flow Images
import appointmentsList from 'figma:asset/9d5ceb1eda3bf667379be277bb38673c44851e62.png';
import installationStatus from 'figma:asset/2465a2e52e09496ec57e8fc92531b4fcb009e0ab.png';
import scheduleInstallation from 'figma:asset/715a875ad65ac2e8014843c2afe737436e4a64f7.png';
import chooseStore from 'figma:asset/55a0c8fdb1271c975b5cfcc1c4459a50c01f2438.png';
import selectDate from 'figma:asset/7a9ec0bf60d7f581f43c30b692db09bfc258caf5.png';
import selectTime from 'figma:asset/3801e2731311beced81b3f66f8b3f473133cacd9.png';
import reviewBooking from 'figma:asset/a7ffc15a826381bf4ea93a77a7f42068a5476f86.png';
import appointmentConfirmed from 'figma:asset/dbb38442c78b3f43174da975c4789c77ea027477.png';

// Add Vehicle Flow Images
import myGarage from 'figma:asset/620ccdd660b2bca0ce66f031728c8a62c7589d20.png';
import selectVehicleDetails from 'figma:asset/b1e0bba621e8cefd8bb856efbd7ea64220e6d871.png';
import selectTrim from 'figma:asset/e26c3574bb5b63aec4b8c5c9666cdeb46ba7014d.png';
import confirmVehicle from 'figma:asset/ea311cf13b300dccb0a756a24065a9938f816dbb.png';
import vehicleAdded from 'figma:asset/ac83739a6c859d33a86efa56f415e80f2d29b6a7.png';

// Tire Browse and Compare Flow Images
import garageStart from 'figma:asset/69f02ea8dd9028ebfec97bb88f7dd25bb45f506e.png';
import browseTires from 'figma:asset/ff746b3fc96a95fcd52cf68aba02a8e7fdaaae2d.png';
import productDetails from 'figma:asset/a7a7ce2debc8efc6d3fe886d8800ca604ea3428a.png';
import browseTiresCompare from 'figma:asset/c0eb01f286569e274097a75301c16028aa534b94.png';
import compareTires from 'figma:asset/22b4a4182b0183a2c8151b3d381f11a83be8af70.png';

export default function AutomobileMobileApp() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
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

      {/* Company Overview */}
      <CompanyOverview />

      {/* Problem Statement */}
      <ProblemStatement />

      {/* User Research */}
      <UserResearch />

      {/* User Personas */}
      <UserPersonas />

      {/* User Journey */}
      <UserJourney />

      {/* Product Opportunity */}
      <ProductOpportunity />

      {/* Information Architecture */}
      <InformationArchitecture />

      {/* Task Flows */}
      <TaskFlows />

      {/* User Flow Diagram */}
      <UserFlowDiagram />

      {/* Design System */}
      <DesignSystemSection />

      {/* Final UI Design */}
      <FinalUIDesign />

      {/* Usability Testing */}
      <UsabilityTesting />

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

/* ==================== HERO SECTION ==================== */
function HeroSection({ opacity }: { opacity: any }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Hero Image */}
      <motion.div style={{ opacity }} className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764015805414-df7de89d405b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwc2hvcCUyMHRlY2huaWNpYW5zJTIwaW5zdGFsbGluZyUyMHRpcmVzfGVufDF8fHx8MTc3MzE1NjM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tire shop technicians installing tires"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Discount Tire<br />Mobile App
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Designing a smarter way for drivers to buy tires, schedule services, and maintain vehicle safety.
          </p>

          {/* Project Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <MetricCard number="1,200+" label="Retail Locations" />
            <MetricCard number="Millions" label="Annual Customers" />
            <MetricCard number="Nationwide" label="Tire Service Network" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function MetricCard({ number, label }: { number: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
    >
      <div className="text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-blue-200">{label}</div>
    </motion.div>
  );
}

/* ==================== COMPANY OVERVIEW ==================== */
function CompanyOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    { icon: Wrench, title: 'Tire Installation', description: 'Professional mounting and balancing' },
    { icon: Settings, title: 'Tire Repair', description: 'Quick fixes for punctures and damage' },
    { icon: AlertCircle, title: 'Flat Tire Repair', description: 'Emergency roadside assistance' },
    { icon: Activity, title: 'Tire Pressure Checks', description: 'Free safety inspections' },
    { icon: Package, title: 'Wheel Installation', description: 'Custom wheel fitting services' },
    { icon: Monitor, title: 'TPMS Maintenance', description: 'Tire pressure monitoring systems' },
  ];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            About Discount Tire
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            America's Trusted<br />Tire Retailer
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Discount Tire is one of the largest independent tire and wheel retailers in the United States, 
            with hundreds of locations nationwide serving millions of customers annually.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 rounded-3xl overflow-hidden"
        >
          <img
            src={americasTrustedTireImage}
            alt="America's Trusted Tire Retailer"
            className="w-full h-[500px] object-cover"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
              <p className="text-black/60">{service.description}</p>
            </motion.div>
          ))}
        </div>
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
      icon: Search,
      title: 'Difficulty Choosing the Right Tire',
      description: 'Customers struggle to find tires that match their vehicle specifications and driving needs.',
      impact: 'High bounce rate on website'
    },
    {
      icon: Calendar,
      title: 'Unclear Service Scheduling',
      description: 'The appointment booking process is confusing and requires multiple phone calls.',
      impact: 'Increased call center volume'
    },
    {
      icon: Eye,
      title: 'Limited Service Status Visibility',
      description: 'Customers have no real-time updates on their vehicle service progress.',
      impact: 'Frequent status inquiry calls'
    },
    {
      icon: FileText,
      title: 'No Centralized Maintenance History',
      description: 'Vehicle tire maintenance records are scattered across receipts and emails.',
      impact: 'Poor maintenance tracking'
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            The Challenge
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Understanding<br />Customer Pain Points
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Customers currently rely heavily on the website and physical store visits, 
            facing multiple friction points throughout their tire service journey.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-7 h-7 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-3">{problem.title}</h3>
                  <p className="text-black/60 mb-4">{problem.description}</p>
                  <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    {problem.impact}
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

/* ==================== USER RESEARCH ==================== */
function UserResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const methods = [
    { icon: Users, title: 'Customer Interviews', count: '24 participants' },
    { icon: MapPin, title: 'Field Research', count: '8 service centers' },
    { icon: Monitor, title: 'Website Usability Analysis', count: '3 weeks of data' }
  ];

  const insights = [
    {
      icon: Search,
      title: 'Tire Matching Confusion',
      description: 'Customers are unsure which tires fit their vehicles',
      percentage: '78%',
      color: 'blue'
    },
    {
      icon: Calendar,
      title: 'Scheduling Friction',
      description: 'Service scheduling should be easier and more flexible',
      percentage: '85%',
      color: 'green'
    },
    {
      icon: Bell,
      title: 'Real-Time Updates',
      description: 'Customers want real-time service updates and notifications',
      percentage: '92%',
      color: 'purple'
    },
    {
      icon: AlertCircle,
      title: 'Maintenance Reminders',
      description: 'Drivers want proactive reminders for tire maintenance',
      percentage: '68%',
      color: 'orange'
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Discovery Phase
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            User Research<br />&amp; Insights
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            We conducted comprehensive research to understand customer needs, 
            behaviors, and pain points throughout the tire service journey.
          </p>
        </motion.div>

        {/* Research Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{method.title}</h3>
              <p className="text-blue-600 font-semibold">{method.count}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black text-center mb-12">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    insight.color === 'blue' ? 'bg-blue-100' :
                    insight.color === 'green' ? 'bg-green-100' :
                    insight.color === 'purple' ? 'bg-purple-100' :
                    insight.color === 'orange' ? 'bg-orange-100' : 'bg-gray-100'
                  }`}>
                    <insight.icon className={`w-7 h-7 ${
                      insight.color === 'blue' ? 'text-blue-600' :
                      insight.color === 'green' ? 'text-green-600' :
                      insight.color === 'purple' ? 'text-purple-600' :
                      insight.color === 'orange' ? 'text-orange-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-4xl font-bold mb-2 ${
                      insight.color === 'blue' ? 'text-blue-600' :
                      insight.color === 'green' ? 'text-green-600' :
                      insight.color === 'purple' ? 'text-purple-600' :
                      insight.color === 'orange' ? 'text-orange-600' : 'text-gray-600'
                    }`}>
                      {insight.percentage}
                    </div>
                    <h4 className="text-xl font-bold text-black mb-2">{insight.title}</h4>
                    <p className="text-black/60">{insight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">24</div>
              <div className="text-blue-200">Interviews</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">156</div>
              <div className="text-blue-200">Survey Responses</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">8</div>
              <div className="text-blue-200">Service Centers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-blue-200">Hours of Research</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== USER PERSONAS ==================== */
function UserPersonas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const personas = [
    {
      name: 'Sarah Martinez',
      role: 'Busy Commuter',
      age: '34',
      location: 'Phoenix, AZ',
      image: 'https://images.unsplash.com/photo-1769980633054-db588efc844c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXN5JTIwY29tbXV0ZXIlMjBkcml2aW5nJTIwY2FyfGVufDF8fHx8MTc3MzE1NjM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Working mother who drives 45 minutes to work daily and needs reliable tire service.',
      goals: [
        'Quick and convenient service scheduling',
        'Minimal time spent at the shop',
        'Trustworthy tire recommendations'
      ],
      frustrations: [
        'Long wait times without updates',
        'Difficulty finding appointment slots',
        'Forgetting tire maintenance schedules'
      ],
      techSavvy: 4,
      frequency: 'Uses app daily for various tasks'
    },
    {
      name: 'Mike Thompson',
      role: 'Car Enthusiast',
      age: '28',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1758739416074-ae6505406a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbnhudXNpYXN0JTIwcGVyZm9ybWFuY2UlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MzE1NjM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Performance car owner who researches tire specs and wants the best options for his vehicle.',
      goals: [
        'Detailed tire specifications',
        'Compare performance metrics',
        'Access to premium tire brands'
      ],
      frustrations: [
        'Limited technical information online',
        'Generic tire recommendations',
        'Lack of customization options'
      ],
      techSavvy: 5,
      frequency: 'Early adopter of new technology'
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Target Users
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            User Personas
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            We identified two primary user types based on our research, 
            each with distinct needs and behaviors.
          </p>
        </motion.div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Header */}
              <div className="relative h-64">
                <ImageWithFallback
                  src={persona.image}
                  alt={persona.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-1">{persona.name}</h3>
                  <p className="text-blue-200">{persona.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Demographics */}
                <div className="flex gap-6 mb-6 pb-6 border-b border-gray-100">
                  <div>
                    <div className="text-sm text-black/60 mb-1">Age</div>
                    <div className="font-semibold text-black">{persona.age}</div>
                  </div>
                  <div>
                    <div className="text-sm text-black/60 mb-1">Location</div>
                    <div className="font-semibold text-black">{persona.location}</div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-black/70 mb-6">{persona.bio}</p>

                {/* Goals */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-black">Goals</h4>
                  </div>
                  <ul className="space-y-2">
                    {persona.goals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-black/70">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Frustrations */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <h4 className="font-bold text-black">Frustrations</h4>
                  </div>
                  <ul className="space-y-2">
                    {persona.frustrations.map((frustration, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-black/70">
                        <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        </div>
                        {frustration}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Savviness */}
                <div>
                  <div className="text-sm text-black/60 mb-2">Tech Savviness</div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full ${
                          i < persona.techSavvy ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-black/60">{persona.frequency}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== USER JOURNEY ==================== */
function UserJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const journeySteps = [
    {
      step: '01',
      title: 'Need New Tires',
      description: 'Customer notices worn tires or warning light',
      emotion: 'worried',
      painPoints: ['Unsure about urgency', 'Don\'t know tire size'],
      opportunities: ['Tire health assessment', 'Educational content']
    },
    {
      step: '02',
      title: 'Research Online',
      description: 'Browses website for tire options',
      emotion: 'confused',
      painPoints: ['Too many options', 'Complex specifications'],
      opportunities: ['Smart tire finder', 'Personalized recommendations']
    },
    {
      step: '03',
      title: 'Compare Options',
      description: 'Evaluates different tire brands and prices',
      emotion: 'overwhelmed',
      painPoints: ['Difficult to compare', 'Unclear pricing'],
      opportunities: ['Side-by-side comparison', 'Transparent pricing']
    },
    {
      step: '04',
      title: 'Schedule Installation',
      description: 'Attempts to book service appointment',
      emotion: 'frustrated',
      painPoints: ['Limited availability shown', 'Multiple steps required'],
      opportunities: ['Real-time availability', 'One-tap booking']
    },
    {
      step: '05',
      title: 'Visit Store',
      description: 'Arrives at service center for installation',
      emotion: 'anxious',
      painPoints: ['No service updates', 'Unknown wait time'],
      opportunities: ['Live service tracking', 'Wait time estimates']
    },
    {
      step: '06',
      title: 'Receive Service',
      description: 'Tires installed and vehicle ready',
      emotion: 'satisfied',
      painPoints: ['No maintenance reminders', 'Lost paperwork'],
      opportunities: ['Digital service history', 'Maintenance alerts']
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Customer Experience
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            User Journey Map
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Mapping the complete tire service experience from initial need recognition 
            to post-service maintenance.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-green-400" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journeySteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative z-10 w-24 h-24 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">{item.step}</span>
                </div>

                {/* Content Card */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-black/60 text-sm mb-4">{item.description}</p>

                  {/* Emotion Indicator */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <div className="text-xs text-black/60 mb-1">Emotional State</div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
                      item.emotion === 'satisfied' ? 'bg-green-100 text-green-700' :
                      item.emotion === 'worried' ? 'bg-yellow-100 text-yellow-700' :
                      item.emotion === 'anxious' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {item.emotion}
                    </div>
                  </div>

                  {/* Pain Points */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-red-600 mb-2">Pain Points</div>
                    <ul className="space-y-1">
                      {item.painPoints.map((point, i) => (
                        <li key={i} className="text-xs text-black/70 flex items-start gap-2">
                          <AlertCircle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Opportunities */}
                  <div>
                    <div className="text-xs font-semibold text-green-600 mb-2">Opportunities</div>
                    <ul className="space-y-1">
                      {item.opportunities.map((opp, i) => (
                        <li key={i} className="text-xs text-black/70 flex items-start gap-2">
                          <Lightbulb className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {opp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== PRODUCT OPPORTUNITY ==================== */
function ProductOpportunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Search,
      title: 'Vehicle Tire Matching',
      description: 'Automatically find tires that fit your specific vehicle using VIN or license plate',
      benefit: 'Eliminates guesswork and ensures perfect fit'
    },
    {
      icon: Lightbulb,
      title: 'Tire Recommendations',
      description: 'Smart suggestions based on driving habits, climate, and budget',
      benefit: 'Personalized options tailored to your needs'
    },
    {
      icon: Calendar,
      title: 'Store Appointment Booking',
      description: 'Book service appointments with real-time availability and instant confirmation',
      benefit: 'No more phone calls or waiting'
    },
    {
      icon: Activity,
      title: 'Service Tracking',
      description: 'Live updates on your vehicle\'s service status from check-in to completion',
      benefit: 'Know exactly when your car will be ready'
    },
    {
      icon: Bell,
      title: 'Maintenance Reminders',
      description: 'Proactive alerts for tire rotation, pressure checks, and seasonal changes',
      benefit: 'Never miss important maintenance'
    },
    {
      icon: FileText,
      title: 'Digital Service History',
      description: 'Complete maintenance records and receipts stored in one place',
      benefit: 'Easy access to your vehicle\'s history'
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            The Solution
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mobile App Solution
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A comprehensive mobile app that transforms the tire service experience, 
            making it seamless from research to maintenance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-blue-100 mb-4 text-sm">{feature.description}</p>
              <div className="flex items-start gap-2 text-sm text-green-300">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{feature.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 text-center"
        >
          <Smartphone className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transitioning to Design Exploration
          </h3>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto mb-8">
            With a clear understanding of user needs and pain points, we moved forward to design 
            a mobile experience that addresses each challenge while delighting our customers.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Award className="w-6 h-6 text-yellow-300" />
            <span className="text-blue-50">Next: Design System &amp; Prototyping</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== INFORMATION ARCHITECTURE ==================== */
function InformationArchitecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const navItems = [
    { icon: Home, title: 'Home', description: 'Dashboard with vehicle status, alerts, and quick actions' },
    { icon: Search, title: 'Shop Tires', description: 'Browse, search, and compare tire options for your vehicle' },
    { icon: Wrench, title: 'My Vehicle', description: 'Vehicle information, maintenance history, and tire health' },
    { icon: Calendar, title: 'Appointments', description: 'Schedule and manage service appointments' },
    { icon: User, title: 'Account', description: 'Profile settings, preferences, and support' }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            App Structure
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Information Architecture
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Designing a clear and intuitive app structure that helps users accomplish their goals efficiently.
          </p>
        </motion.div>

        {/* Primary Navigation */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black text-center mb-12">Primary Navigation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-black mb-2">{item.title}</h4>
                <p className="text-sm text-black/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IA Diagram Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="flex flex-col items-center">
            {/* Root Level */}
            <div className="bg-blue-600 text-white rounded-2xl px-8 py-4 mb-8">
              <h4 className="text-xl font-bold">Discount Tire App</h4>
            </div>

            {/* Main Sections */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
              {navItems.map((item) => (
                <div key={item.title} className="flex flex-col items-center">
                  <div className="w-1 h-8 bg-blue-300 mb-2" />
                  <div className="bg-blue-100 border-2 border-blue-600 rounded-xl px-4 py-3 text-center w-full">
                    <item.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-black">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== TASK FLOWS ==================== */
function TaskFlows() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const flows = [
    {
      title: 'Flow 1: Find Compatible Tires',
      icon: Search,
      steps: [
        { label: 'Launch App', description: 'User opens Discount Tire app' },
        { label: 'Add Vehicle', description: 'Enter VIN or select make/model/year' },
        { label: 'View Matches', description: 'App displays compatible tires' },
        { label: 'Compare Options', description: 'Review specs, prices, and ratings' },
        { label: 'Select Tire', description: 'Choose preferred tire option' }
      ]
    },
    {
      title: 'Flow 2: Schedule Installation Appointment',
      icon: Calendar,
      steps: [
        { label: 'Select Service', description: 'Choose tire installation service' },
        { label: 'Pick Location', description: 'Find nearest service center' },
        { label: 'Choose Date/Time', description: 'Select available appointment slot' },
        { label: 'Confirm Booking', description: 'Review and confirm appointment' },
        { label: 'Receive Confirmation', description: 'Get appointment details and reminders' }
      ]
    },
    {
      title: 'Flow 3: Track Tire Maintenance',
      icon: Activity,
      steps: [
        { label: 'Access Vehicle', description: 'Navigate to My Vehicle section' },
        { label: 'View Health', description: 'Check tire health status' },
        { label: 'Review History', description: 'See past maintenance records' },
        { label: 'Set Reminders', description: 'Enable maintenance alerts' },
        { label: 'Track Progress', description: 'Monitor tire lifespan' }
      ]
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            User Flows
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Task Flows
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Defining the step-by-step paths users follow to accomplish their primary goals.
          </p>
        </motion.div>

        {/* Flow Diagrams */}
        <div className="space-y-12">
          {flows.map((flow, flowIndex) => (
            <motion.div
              key={flow.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: flowIndex * 0.2 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8"
            >
              {/* Flow Title */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <flow.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">{flow.title}</h3>
              </div>

              {/* Flow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {flow.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="relative">
                    {/* Step Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                        <span className="text-blue-600 font-bold text-sm">{stepIndex + 1}</span>
                      </div>
                      <h4 className="font-bold text-black mb-2">{step.label}</h4>
                      <p className="text-sm text-black/60">{step.description}</p>
                    </div>

                    {/* Arrow Connector */}
                    {stepIndex < flow.steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
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

/* ==================== USER FLOW DIAGRAM ==================== */
function UserFlowDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const flowSteps = [
    { title: 'User adds vehicle', icon: Wrench, color: 'blue' },
    { title: 'App detects compatible tires', icon: Search, color: 'green' },
    { title: 'User compares tire options', icon: BarChart, color: 'purple' },
    { title: 'User schedules installation', icon: Calendar, color: 'orange' },
    { title: 'User receives service confirmation', icon: CheckCircle, color: 'teal' }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Complete User Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            User Flow Diagram
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            A comprehensive view of the complete user journey from vehicle setup to service confirmation.
          </p>
        </motion.div>

        {/* Detailed Flow Visualization */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="space-y-8">
            {flowSteps.map((step, index) => (
              <div key={step.title}>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center gap-6"
                >
                  {/* Step Number */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    step.color === 'blue' ? 'bg-blue-600' :
                    step.color === 'green' ? 'bg-green-600' :
                    step.color === 'purple' ? 'bg-purple-600' :
                    step.color === 'orange' ? 'bg-orange-600' :
                    step.color === 'teal' ? 'bg-teal-600' : 'bg-gray-600'
                  }`}>
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                    <div className="flex items-center gap-4">
                      <step.icon className="w-8 h-8 text-blue-600" />
                      <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                    </div>
                  </div>
                </motion.div>

                {/* Connector Arrow */}
                {index < flowSteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-1 h-8 bg-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Flow Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-black/60">Key Steps</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">~3 min</div>
            <div className="text-black/60">Average Completion Time</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
            <div className="text-black/60">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== DESIGN SYSTEM ==================== */
function DesignSystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const designPrinciples = [
    { title: 'Clarity', description: 'Clear visual hierarchy and easy-to-understand layouts', icon: Eye },
    { title: 'Speed', description: 'Fast interactions and minimal loading states', icon: Zap },
    { title: 'Trust', description: 'Professional design that builds customer confidence', icon: Shield },
    { title: 'Automotive Expertise', description: 'Industry-focused UI that reflects tire knowledge', icon: Wrench },
    { title: 'Service Transparency', description: 'Open communication of pricing and processes', icon: FileText }
  ];

  const colors = [
    { name: 'Primary Brand Red', hex: '#DC0000', usage: 'Primary buttons, Promotions, Important highlights, Call-to-action elements' },
    { name: 'Black', hex: '#000000', usage: 'Headers and navigation' },
    { name: 'Dark Gray', hex: '#4A4A4A', usage: 'Secondary text and icons' },
    { name: 'Light Gray', hex: '#E5E5E5', usage: 'Dividers and background sections' },
    { name: 'White', hex: '#FFFFFF', usage: 'Primary application background' }
  ];

  const typography = [
    { name: 'Hero Title', size: '32px', weight: '700', usage: 'Marketing banners and key messages' },
    { name: 'Section Headers', size: '24px', weight: '700', usage: 'Tires, Wheels, Appointments categories' },
    { name: 'Body Text', size: '16px', weight: '400', usage: 'Product descriptions and service details' },
    { name: 'Small UI Labels', size: '12px', weight: '600', usage: 'Filters, tags, and vehicle specifications' }
  ];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Brand Adaptation
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Design System
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            The mobile design system was built by adapting the existing Discount Tire brand language 
            into a scalable mobile interface, maintaining brand familiarity while improving usability.
          </p>
        </motion.div>

        {/* Design Principles */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-black text-center mb-12">Design Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-black mb-2">{principle.title}</h4>
                <p className="text-sm text-black/60">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-black text-center mb-12">Color Palette</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div 
                  className="w-full h-32 rounded-xl mb-4 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
                <h4 className="text-xl font-bold text-black mb-1">{color.name}</h4>
                <p className="text-sm font-mono text-black/60 mb-2">{color.hex}</p>
                <p className="text-sm text-black/60">{color.usage}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Typography System */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-black text-center mb-12">Typography</h3>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="space-y-8">
              {typography.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-8 pb-8 border-b border-gray-100 last:border-0"
                >
                  <div className="flex-1">
                    <h4 
                      className="text-black mb-1"
                      style={{ fontSize: type.size, fontWeight: type.weight }}
                    >
                      {type.name}
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-black">{type.size} / {type.weight}</div>
                    <div className="text-sm text-black/60">{type.usage}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Component Examples */}
        <div>
          <h3 className="text-3xl font-bold text-black text-center mb-12">Component Library</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h4 className="text-xl font-bold text-black mb-6">Buttons</h4>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors">
                  Book Appointment
                </button>
                <button className="w-full px-6 py-3 bg-white text-red-600 border-2 border-red-600 rounded-xl font-semibold hover:bg-red-50 transition-colors">
                  View Tire Details
                </button>
                <button className="w-full px-6 py-3 text-red-600 font-semibold hover:underline">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h4 className="text-xl font-bold text-black mb-6">Product Cards</h4>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6">
                <div className="w-full h-32 bg-gray-200 rounded-xl mb-4" />
                <h5 className="font-bold text-black mb-2">Tire Name</h5>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-black/60">(245 reviews)</span>
                </div>
                <div className="text-2xl font-bold text-red-600">$129.99</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== APPOINTMENT FLOW CAROUSEL ==================== */
function AppointmentFlowCarousel({ selectedScreen, setSelectedScreen, isInView }: { 
  selectedScreen: { image: string; title: string } | null; 
  setSelectedScreen: (screen: { image: string; title: string } | null) => void;
  isInView: boolean;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const appointmentFlowScreens = [
    {
      title: 'Appointments List',
      description: 'View all upcoming and past appointments',
      image: appointmentsList
    },
    {
      title: 'Installation Status',
      description: 'Real-time installation progress tracking',
      image: installationStatus
    },
    {
      title: 'Schedule Installation',
      description: 'Review vehicle and tire selection',
      image: scheduleInstallation
    },
    {
      title: 'Choose Store',
      description: 'Select nearby installation location',
      image: chooseStore
    },
    {
      title: 'Select Date',
      description: 'Pick preferred installation date',
      image: selectDate
    },
    {
      title: 'Select Time',
      description: 'Choose available time slot',
      image: selectTime
    },
    {
      title: 'Review Booking',
      description: 'Confirm all appointment details',
      image: reviewBooking
    },
    {
      title: 'Appointment Confirmed',
      description: 'Booking confirmation with order details',
      image: appointmentConfirmed
    }
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <div className="relative mb-16">
      {/* Left Scroll Button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {appointmentFlowScreens.map((screen, index) => (
          <motion.div
            key={screen.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="flex-shrink-0 w-64 group cursor-pointer"
            onClick={() => setSelectedScreen({ image: screen.image, title: screen.title })}
          >
            {/* Screen Image - Natural size with shadow */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-4">
              <ImageWithFallback
                src={screen.image}
                alt={screen.title}
                className="w-full h-auto"
              />
            </div>
            
            {/* Screen Info - Outside card */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-black mb-2">{screen.title}</h4>
              <p className="text-sm text-black/60">{screen.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right Scroll Button */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

/* ==================== ADD VEHICLE FLOW CAROUSEL ==================== */
function AddVehicleFlowCarousel({ selectedScreen, setSelectedScreen, isInView }: { 
  selectedScreen: { image: string; title: string } | null; 
  setSelectedScreen: (screen: { image: string; title: string } | null) => void;
  isInView: boolean;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const vehicleFlowScreens = [
    {
      title: 'My Garage',
      description: 'View all saved vehicles',
      image: myGarage
    },
    {
      title: 'Select Vehicle Details',
      description: 'Choose year, make, and model',
      image: selectVehicleDetails
    },
    {
      title: 'Select Trim',
      description: 'Pick specific vehicle trim level',
      image: selectTrim
    },
    {
      title: 'Confirm Vehicle',
      description: 'Review and confirm vehicle details',
      image: confirmVehicle
    },
    {
      title: 'Vehicle Added',
      description: 'Success confirmation screen',
      image: vehicleAdded
    }
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <div className="relative mb-16">
      {/* Left Scroll Button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {vehicleFlowScreens.map((screen, index) => (
          <motion.div
            key={screen.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="flex-shrink-0 w-64 group cursor-pointer"
            onClick={() => setSelectedScreen({ image: screen.image, title: screen.title })}
          >
            {/* Screen Image - Natural size with shadow */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-4">
              <ImageWithFallback
                src={screen.image}
                alt={screen.title}
                className="w-full h-auto"
              />
            </div>
            
            {/* Screen Info - Outside card */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-black mb-2">{screen.title}</h4>
              <p className="text-sm text-black/60">{screen.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right Scroll Button */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

/* ==================== TIRE BROWSE AND COMPARE FLOW CAROUSEL ==================== */
function TireBrowseCompareCarousel({ selectedScreen, setSelectedScreen, isInView }: { 
  selectedScreen: { image: string; title: string } | null; 
  setSelectedScreen: (screen: { image: string; title: string } | null) => void;
  isInView: boolean;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const tireFlowScreens = [
    {
      title: 'My Garage',
      description: 'Starting point with vehicle selection',
      image: garageStart
    },
    {
      title: 'Browse Tires',
      description: 'Search and filter compatible tires',
      image: browseTires
    },
    {
      title: 'Product Details',
      description: 'View detailed tire specifications',
      image: productDetails
    },
    {
      title: 'Compare Selection',
      description: 'Add tires to comparison list',
      image: browseTiresCompare
    },
    {
      title: 'Compare Tires',
      description: 'Side-by-side tire comparison',
      image: compareTires
    }
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <div className="relative mb-16">
      {/* Left Scroll Button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tireFlowScreens.map((screen, index) => (
          <motion.div
            key={screen.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="flex-shrink-0 w-64 group cursor-pointer"
            onClick={() => setSelectedScreen({ image: screen.image, title: screen.title })}
          >
            {/* Screen Image - Natural size with shadow */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-4">
              <ImageWithFallback
                src={screen.image}
                alt={screen.title}
                className="w-full h-auto"
              />
            </div>
            
            {/* Screen Info - Outside card */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-black mb-2">{screen.title}</h4>
              <p className="text-sm text-black/60">{screen.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right Scroll Button */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

/* ==================== FINAL UI DESIGN ==================== */
function FinalUIDesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedScreen, setSelectedScreen] = useState<{ image: string; title: string } | null>(null);

  const onboardingScreens = [
    {
      title: 'Splash Screen',
      description: 'Brand introduction with loading animation',
      image: splashScreen
    },
    {
      title: 'Welcome Screen',
      description: 'Compelling value proposition with visual imagery',
      image: welcomeScreen
    },
    {
      title: 'Sign In Options',
      description: 'Flexible authentication with multiple entry points',
      image: signInOptions
    },
    {
      title: 'Sign In',
      description: 'Streamlined login with social authentication',
      image: signInScreen
    },
    {
      title: 'Create Account',
      description: 'Simple registration with minimal required fields',
      image: createAccount
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Final Design
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Final UI Design
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            The polished user interface that brings our research, insights, and design principles together 
            into a cohesive and delightful mobile experience.
          </p>
        </motion.div>

        {/* Onboarding Flow Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Onboarding Flow
            </h3>
            <p className="text-lg text-black/60 max-w-4xl">
              A seamless first-time user experience designed to quickly demonstrate value while 
              reducing friction in the sign-up process. The onboarding flow prioritizes progressive 
              disclosure and offers flexible authentication options.
            </p>
          </motion.div>

          {/* Onboarding Screens Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {onboardingScreens.map((screen, index) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedScreen({ image: screen.image, title: screen.title })}
              >
                {/* Screen Image - Natural size with shadow */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-4">
                  <ImageWithFallback
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Screen Info - Outside card */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-black mb-2">{screen.title}</h4>
                  <p className="text-sm text-black/60">{screen.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Onboarding Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12"
          >
            <h4 className="text-2xl font-bold text-black text-center mb-12">
              Onboarding Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-black mb-2">Quick Setup</h5>
                <p className="text-sm text-black/60">
                  Users can get started in under 60 seconds with social sign-in or guest access
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-black mb-2">Flexible Authentication</h5>
                <p className="text-sm text-black/60">
                  Multiple sign-in options including Google, Apple, and traditional email/password
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-black mb-2">Clear Value Prop</h5>
                <p className="text-sm text-black/60">
                  Compelling visuals and messaging that immediately communicate app benefits
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Screens Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Main Screens
            </h3>
            <p className="text-lg text-black/60 max-w-4xl">
              Core app screens that deliver the primary functionality - from finding nearby stores 
              and searching for tires to managing vehicles, scheduling appointments, and accessing 
              user profile settings.
            </p>
          </motion.div>

          {/* Main Screens Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {[
              {
                title: 'Home',
                description: 'Store finder with nearby locations and quick actions',
                image: homeScreen
              },
              {
                title: 'Search',
                description: 'Intelligent tire search with recent and trending options',
                image: searchScreen
              },
              {
                title: 'Garage',
                description: 'Vehicle management with tire specifications and history',
                image: garageScreen
              },
              {
                title: 'Appointments',
                description: 'Installation scheduling with real-time tracking',
                image: appointmentsScreen
              },
              {
                title: 'Profile',
                description: 'User account management and settings hub',
                image: profileScreen
              }
            ].map((screen, index) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedScreen({ image: screen.image, title: screen.title })}
              >
                {/* Screen Image - Natural size with shadow */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-4">
                  <ImageWithFallback
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Screen Info - Outside card */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-black mb-2">{screen.title}</h4>
                  <p className="text-sm text-black/60">{screen.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Screens Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12"
          >
            <h4 className="text-2xl font-bold text-black text-center mb-12">
              Core Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-black mb-2">Location Services</h5>
                <p className="text-sm text-black/60">
                  Smart store finder with real-time availability and distance calculations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-black mb-2">Intelligent Search</h5>
                <p className="text-sm text-black/60">
                  Advanced tire search with filters, recent searches, and trending recommendations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-black mb-2">Appointment Management</h5>
                <p className="text-sm text-black/60">
                  Seamless scheduling with confirmation tracking and installation updates
                </p>
              </div>
            </div>
          </motion.div>

          {/* Appointment Flow Screens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-12 mt-20"
          >
            <h4 className="text-3xl font-bold text-black mb-4">
              Appointment Flow
            </h4>
            <p className="text-lg text-black/60 max-w-4xl mb-8">
              Complete appointment booking journey from viewing appointments to confirmation - 
              guiding users through vehicle review, store selection, date/time scheduling, and 
              final booking confirmation with real-time tracking capabilities.
            </p>
          </motion.div>

          <AppointmentFlowCarousel selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen} isInView={isInView} />

          {/* Add Vehicle Flow Screens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-12 mt-20"
          >
            <h4 className="text-3xl font-bold text-black mb-4">
              Add Vehicle Flow
            </h4>
            <p className="text-lg text-black/60 max-w-4xl mb-8">
              Seamless vehicle addition process from garage overview to successful confirmation - 
              enabling users to select vehicle details, choose specific trim levels, and save their 
              vehicles for personalized tire recommendations and quick reordering.
            </p>
          </motion.div>

          <AddVehicleFlowCarousel selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen} isInView={isInView} />
        </div>

        {/* Tire Browse and Compare Flow Screens */}
        <div className="max-w-[1800px] mx-auto px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mb-12 mt-20"
          >
            <h4 className="text-3xl font-bold text-black mb-4">
              Tire View Details and Compare
            </h4>
            <p className="text-lg text-black/60 max-w-4xl mb-8">
              Comprehensive tire browsing and comparison experience - from viewing compatible tires 
              for vehicles in the garage to detailed product specifications with image galleries, 
              ratings, and pricing. The comparison feature enables users to evaluate multiple tire 
              options side-by-side with key metrics like price, customer ratings, tread life, and 
              performance characteristics to make informed purchasing decisions.
            </p>
          </motion.div>

          <TireBrowseCompareCarousel selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen} isInView={isInView} />
        </div>

        {/* Design Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-red-200 transition-colors">
            <div className="text-4xl font-bold text-red-600 mb-2">5</div>
            <div className="text-sm text-black/60 mb-4">Onboarding Steps</div>
            <p className="text-xs text-black/60">
              Streamlined flow from splash to main app
            </p>
          </div>
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-red-200 transition-colors">
            <div className="text-4xl font-bold text-red-600 mb-2">3</div>
            <div className="text-sm text-black/60 mb-4">Authentication Methods</div>
            <p className="text-xs text-black/60">
              Email, Google, and Apple sign-in options
            </p>
          </div>
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-red-200 transition-colors">
            <div className="text-4xl font-bold text-red-600 mb-2">60s</div>
            <div className="text-sm text-black/60 mb-4">Average Completion Time</div>
            <p className="text-xs text-black/60">
              Quick and effortless user registration
            </p>
          </div>
        </motion.div>

        {/* Fullscreen Modal */}
        {selectedScreen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-8"
            onClick={() => setSelectedScreen(null)}
          >
            <button
              onClick={() => setSelectedScreen(null)}
              className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative max-h-[90vh] max-w-2xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <ImageWithFallback
                src={selectedScreen.image}
                alt={selectedScreen.title}
                className="max-h-[80vh] w-auto rounded-2xl shadow-2xl"
              />
              <p className="text-white text-center mt-6 text-xl font-semibold">
                {selectedScreen.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ==================== USABILITY TESTING ==================== */
function UsabilityTesting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const participants = [
    { type: 'Drivers', count: '12', icon: Users, description: 'Daily commuters and casual drivers' },
    { type: 'Car Owners', count: '8', icon: Wrench, description: 'Vehicle maintenance enthusiasts' },
    { type: 'Mechanics', count: '4', icon: Settings, description: 'Professional tire technicians' }
  ];

  const testResults = [
    {
      title: 'Quick Appointment Booking',
      icon: CheckCircle,
      finding: 'Users preferred the streamlined booking flow over traditional phone calls',
      impact: 'Reduced booking time by 65%',
      score: 94,
      color: 'green'
    },
    {
      title: 'Vehicle Scanning Feature',
      icon: Zap,
      finding: 'VIN scanning significantly improved tire matching accuracy',
      impact: 'Increased correct tire selection by 78%',
      score: 89,
      color: 'blue'
    },
    {
      title: 'Comparison View',
      icon: BarChart,
      finding: 'Side-by-side comparison helped users make confident purchase decisions',
      impact: 'Improved decision confidence by 82%',
      score: 91,
      color: 'purple'
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Validation
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Usability Testing
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Testing with real users to validate design decisions and identify areas for improvement.
          </p>
        </motion.div>

        {/* Participants */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black text-center mb-12">Test Participants</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {participants.map((participant, index) => (
              <motion.div
                key={participant.type}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <participant.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{participant.count}</div>
                <h4 className="text-xl font-bold text-black mb-2">{participant.type}</h4>
                <p className="text-sm text-black/60">{participant.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black text-center mb-12">Key Insights</h3>
          <div className="space-y-8">
            {testResults.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    result.color === 'green' ? 'bg-green-100' :
                    result.color === 'blue' ? 'bg-blue-100' :
                    result.color === 'purple' ? 'bg-purple-100' : 'bg-gray-100'
                  }`}>
                    <result.icon className={`w-8 h-8 ${
                      result.color === 'green' ? 'text-green-600' :
                      result.color === 'blue' ? 'text-blue-600' :
                      result.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-black mb-2">{result.title}</h4>
                    <p className="text-black/70 mb-3">{result.finding}</p>
                    <div className="flex items-center gap-3">
                      <TrendingUp className={`w-5 h-5 ${
                        result.color === 'green' ? 'text-green-600' :
                        result.color === 'blue' ? 'text-blue-600' :
                        result.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                      }`} />
                      <span className={`font-semibold ${
                        result.color === 'green' ? 'text-green-600' :
                        result.color === 'blue' ? 'text-blue-600' :
                        result.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                      }`}>{result.impact}</span>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="text-center">
                    <div className="relative w-24 h-24">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke={
                            result.color === 'green' ? '#16a34a' :
                            result.color === 'blue' ? '#2563eb' :
                            result.color === 'purple' ? '#9333ea' : '#4b5563'
                          }
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - result.score / 100)}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-black">{result.score}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testing Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Testing Outcome</h3>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto mb-8">
            All usability tests validated our design decisions, with users praising the app's 
            intuitive interface, quick booking process, and helpful comparison features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">24</div>
              <div className="text-blue-100">Total Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">91%</div>
              <div className="text-blue-100">Average Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3.2min</div>
              <div className="text-blue-100">Avg. Task Time</div>
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
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Discount Tire Mobile App</h3>
            <p className="text-white/60">iOS Automobile Mobile App Case Study</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </div>
      </div>
    </footer>
  );
}
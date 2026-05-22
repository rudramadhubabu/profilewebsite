import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Layout, Server, Users, Shield, GraduationCap, UserCheck,
  School, Smartphone, Brain, BarChart3, Settings, Database,
  Calendar, IndianRupee, BookOpen, Bell, MessageSquare, FileText,
  TrendingUp, Target, Zap, Activity, Award, Layers, Network,
  GitBranch, Box, CircleDot, ArrowRight, CheckCircle
} from 'lucide-react';

export function InformationArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Hero Banner */}
        <IAHeroBanner isInView={isInView} />

        {/* Section 2: Product Ecosystem */}
        <ProductEcosystem isInView={isInView} />

        {/* Section 3: Role-Based Product Structure */}
        <RoleBasedStructure isInView={isInView} />

        {/* Section 4: Super Admin IA */}
        <SuperAdminIA isInView={isInView} />

        {/* Section 5: School Admin IA */}
        <SchoolAdminIA isInView={isInView} />

        {/* Section 6: Teacher App IA */}
        <TeacherAppIA isInView={isInView} />

        {/* Section 7: Parent App IA */}
        <ParentAppIA isInView={isInView} />

        {/* Section 8: AI Features Architecture */}
        <AIFeaturesArchitecture isInView={isInView} />

        {/* Section 9: System Scalability */}
        <SystemScalability isInView={isInView} />

        {/* Section 10: Key IA Insights */}
        <KeyIAInsights isInView={isInView} />
      </div>
    </section>
  );
}

/* ==================== SECTION 1: IA HERO BANNER ==================== */
function IAHeroBanner({ isInView }: { isInView: boolean }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl mb-6 text-foreground" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
          Information Architecture
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
        
        <p className="text-xl text-foreground/80 mb-6" style={{ lineHeight: 1.8 }}>
          Designing a scalable system structure for an AI-powered School ERP platform supporting administrators, teachers, and parents.
        </p>
        
        <p className="text-lg text-foreground/70" style={{ lineHeight: 1.8 }}>
          The platform was designed to support multiple user roles and workflows while maintaining clarity and scalability across the system.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="p-8 rounded-2xl bg-background border border-white/10">
          <div className="text-center mb-8">
            <div className="text-sm text-foreground/60 mb-2">High-Level System Architecture</div>
          </div>
          
          {/* System Architecture Diagram */}
          <div className="space-y-6">
            {/* Central AI Engine */}
            <div className="flex justify-center">
              <div className="px-6 py-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white font-semibold flex items-center gap-2">
                <Brain className="w-5 h-5" />
                AI Engine
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-blue-500" />
            </div>

            {/* User Roles */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: 'Super Admin', color: 'from-blue-600 to-blue-700' },
                { icon: School, label: 'School Admin', color: 'from-green-600 to-green-700' },
                { icon: UserCheck, label: 'Teacher App', color: 'from-orange-600 to-orange-700' },
                { icon: Users, label: 'Parent App', color: 'from-purple-600 to-purple-700' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className={`p-4 rounded-lg bg-gradient-to-br ${item.color} text-white text-center`}>
                    <Icon className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-medium">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ==================== SECTION 2: PRODUCT ECOSYSTEM ==================== */
function ProductEcosystem({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
          Product Ecosystem
        </h3>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Understanding how all components connect within the centralized system
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-background border border-white/10">
        {/* Central Platform */}
        <div className="flex justify-center mb-12">
          <div className="px-8 py-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Server className="w-6 h-6" />
              <div className="text-xl font-semibold">School ERP Platform</div>
            </div>
            <div className="text-sm text-white/80 text-center">Central SaaS System</div>
          </div>
        </div>

        {/* Connected Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: Shield, 
              title: 'Super Admin Platform',
              desc: 'SaaS Owner Management',
              features: ['Multi-school oversight', 'Subscription billing', 'Platform analytics']
            },
            { 
              icon: School, 
              title: 'School Admin Dashboard',
              desc: 'School Operations',
              features: ['Student management', 'Fee collection', 'Academic tracking']
            },
            { 
              icon: Smartphone, 
              title: 'Teacher Mobile App',
              desc: 'Android Application',
              features: ['Attendance marking', 'Grade entry', 'Parent communication']
            },
            { 
              icon: Users, 
              title: 'Parent Mobile App',
              desc: 'Android Application',
              features: ['Progress tracking', 'Fee payments', 'School updates']
            }
          ].map((module, index) => {
            const Icon = module.icon;
            return (
              <div key={index} className="p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{module.title}</h4>
                <p className="text-sm text-foreground/60 mb-4">{module.desc}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-foreground/70">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Data Flow */}
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {[
            { label: 'School Data', icon: Database, color: 'text-blue-400' },
            { label: 'Student Data', icon: Users, color: 'text-green-400' },
            { label: 'AI Analytics', icon: Brain, color: 'text-purple-400' },
            { label: 'Notifications', icon: Bell, color: 'text-orange-400' }
          ].map((flow, index) => {
            const Icon = flow.icon;
            return (
              <div key={index} className="flex items-center justify-center gap-2 p-3 rounded-lg bg-surface border border-white/10">
                <Icon className={`w-4 h-4 ${flow.color}`} />
                <span className="text-sm text-foreground/70">{flow.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

/* ==================== SECTION 3: ROLE-BASED PRODUCT STRUCTURE ==================== */
function RoleBasedStructure({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
          Role-Based Product Structure
        </h3>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Four distinct user roles with specific access levels and features
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-background border border-white/10">
        {/* Hierarchy Diagram */}
        <div className="space-y-8">
          {/* Level 1: Super Admin */}
          <div className="flex justify-center">
            <div className="px-8 py-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white max-w-md w-full text-center">
              <Shield className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold mb-1">Super Admin</div>
              <div className="text-xs text-white/80">Platform-wide access • Multi-school oversight</div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-green-500" />
          </div>

          {/* Level 2: School Admin */}
          <div className="flex justify-center">
            <div className="px-8 py-4 rounded-xl bg-gradient-to-br from-green-600 to-green-700 text-white max-w-md w-full text-center">
              <School className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold mb-1">School Admin</div>
              <div className="text-xs text-white/80">School-specific access • Operations management</div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <div className="w-px h-12 bg-gradient-to-b from-green-500 to-orange-500" />
            <div className="w-px h-12 bg-gradient-to-b from-green-500 to-purple-500" />
          </div>

          {/* Level 3: Teachers & Parents */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="px-8 py-4 rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 text-white text-center">
              <UserCheck className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold mb-1">Teacher</div>
              <div className="text-xs text-white/80">Class-specific access • Mobile-first</div>
            </div>
            <div className="px-8 py-4 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 text-white text-center">
              <Users className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold mb-1">Parent</div>
              <div className="text-xs text-white/80">Student-specific access • Mobile-first</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ==================== SECTION 4: SUPER ADMIN IA ==================== */
function SuperAdminIA({ isInView }: { isInView: boolean }) {
  const modules = [
    {
      name: 'Platform Dashboard',
      icon: BarChart3,
      features: ['Total schools', 'Platform revenue', 'Active users', 'System health']
    },
    {
      name: 'School Management',
      icon: School,
      features: ['View schools', 'Approve new schools', 'Suspend accounts', 'School analytics']
    },
    {
      name: 'Subscription Management',
      icon: IndianRupee,
      features: ['Active plans', 'Billing cycles', 'Revenue tracking', 'Plan upgrades']
    },
    {
      name: 'Platform Analytics',
      icon: TrendingUp,
      features: ['Usage metrics', 'Performance data', 'AI insights', 'Growth trends']
    },
    {
      name: 'User Management',
      icon: Users,
      features: ['Admin users', 'Role permissions', 'Access control', 'Activity logs']
    },
    {
      name: 'System Configuration',
      icon: Settings,
      features: ['Platform settings', 'Email templates', 'Payment gateway', 'Regional settings']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
          Super Admin Information Architecture
        </h3>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Platform-level features for SaaS owners to manage multiple schools
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <div key={index} className="p-6 rounded-xl bg-background border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="font-semibold text-foreground">{module.name}</h4>
              </div>
              <ul className="space-y-2">
                {module.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                    <ArrowRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ==================== SECTION 5: SCHOOL ADMIN IA ==================== */
function SchoolAdminIA({ isInView }: { isInView: boolean }) {
  const modules = [
    {
      name: 'Dashboard',
      icon: Layout,
      features: ['School overview', 'Today\'s metrics', 'Quick actions', 'Recent activity']
    },
    {
      name: 'Student Management',
      icon: GraduationCap,
      features: ['Student profiles', 'Enrollment management', 'Academic records', 'Attendance reports']
    },
    {
      name: 'Teacher Management',
      icon: UserCheck,
      features: ['Teacher profiles', 'Class assignments', 'Performance tracking', 'Workload analytics']
    },
    {
      name: 'Attendance',
      icon: Calendar,
      features: ['Daily attendance', 'Absence tracking', 'Reports generation', 'Trend analysis']
    },
    {
      name: 'Fees',
      icon: IndianRupee,
      features: ['Fee collection', 'Payment tracking', 'Invoice generation', 'Reminders']
    },
    {
      name: 'Exams & Results',
      icon: BookOpen,
      features: ['Exam scheduling', 'Result entry', 'Grade calculation', 'Report cards']
    },
    {
      name: 'Announcements',
      icon: Bell,
      features: ['School notices', 'Event updates', 'Targeted messages', 'Notification history']
    },
    {
      name: 'Transport Management',
      icon: Activity,
      features: ['Route planning', 'Vehicle tracking', 'Driver management', 'Student allocation']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
          School Admin Information Architecture
        </h3>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Comprehensive modules for managing day-to-day school operations
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <div key={index} className="p-6 rounded-xl bg-background border border-white/10 hover:border-green-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{module.name}</h4>
              </div>
              <ul className="space-y-2">
                {module.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/70">
                    <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ==================== SECTION 6: TEACHER APP IA ==================== */
function TeacherAppIA({ isInView }: { isInView: boolean }) {
  const sections = [
    { name: 'Teacher Dashboard', icon: Layout, desc: 'Quick overview of classes and tasks' },
    { name: 'Class Attendance', icon: Calendar, desc: 'Fast daily attendance marking' },
    { name: 'Assignments', icon: FileText, desc: 'Create and track homework' },
    { name: 'Lesson Plans', icon: BookOpen, desc: 'Manage teaching schedules' },
    { name: 'Student Performance', icon: TrendingUp, desc: 'Track grades and progress' },
    { name: 'Class Announcements', icon: Bell, desc: 'Post updates to students' },
    { name: 'Parent Communication', icon: MessageSquare, desc: 'Direct messaging with parents' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
            Teacher App Information Architecture
          </h3>
          <p className="text-foreground/70 mb-8">
            Mobile-first design supporting fast daily workflows for teachers. Optimized for quick attendance marking, grade entry, and parent communication.
          </p>
          <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="w-5 h-5 text-orange-400" />
              <div className="font-semibold text-foreground">Design Focus</div>
            </div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-orange-400 mt-2" />
                <span>One-tap actions for common tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-orange-400 mt-2" />
                <span>Offline mode for poor connectivity areas</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-orange-400 mt-2" />
                <span>Voice input for quick note-taking</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm mb-1">{section.name}</div>
                  <div className="text-xs text-foreground/60">{section.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

/* ==================== SECTION 7: PARENT APP IA ==================== */
function ParentAppIA({ isInView }: { isInView: boolean }) {
  const sections = [
    { name: 'Parent Dashboard', icon: Layout, desc: 'Child\'s daily overview' },
    { name: 'Student Profile', icon: GraduationCap, desc: 'Academic and personal information' },
    { name: 'Attendance Tracking', icon: Calendar, desc: 'Daily attendance history' },
    { name: 'Homework & Assignments', icon: FileText, desc: 'Track pending work' },
    { name: 'Academic Performance', icon: Award, desc: 'Grades and progress reports' },
    { name: 'Fee Payments', icon: IndianRupee, desc: 'View and pay fees online' },
    { name: 'School Announcements', icon: Bell, desc: 'Important school updates' },
    { name: 'Parent-Teacher Communication', icon: MessageSquare, desc: 'Direct chat with teachers' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 lg:order-2">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm mb-1">{section.name}</div>
                  <div className="text-xs text-foreground/60">{section.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:order-1">
          <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
            Parent App Information Architecture
          </h3>
          <p className="text-foreground/70 mb-8">
            Designed to maximize transparency and engagement. Parents get real-time updates on their child's academic progress, attendance, and school activities.
          </p>
          <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-purple-400" />
              <div className="font-semibold text-foreground">Key Features</div>
            </div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400 mt-2" />
                <span>Real-time push notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400 mt-2" />
                <span>Integrated payment gateway</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400 mt-2" />
                <span>Multi-child support for families</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ==================== SECTION 8: AI FEATURES ARCHITECTURE ==================== */
function AIFeaturesArchitecture({ isInView }: { isInView: boolean }) {
  const aiModules = [
    { 
      name: 'Student Performance Prediction',
      desc: 'ML models predict academic outcomes',
      impact: '89% accuracy in identifying at-risk students'
    },
    { 
      name: 'Attendance Risk Detection',
      desc: 'Pattern analysis flags chronic absenteeism',
      impact: '72% early intervention success rate'
    },
    { 
      name: 'Automated Parent Notifications',
      desc: 'Smart routing based on urgency and relevance',
      impact: '3x improvement in parent engagement'
    },
    { 
      name: 'AI Teaching Assistant',
      desc: 'Personalized study recommendations',
      impact: '40% improvement in weak subject scores'
    },
    { 
      name: 'Administrative Insights',
      desc: 'Operational efficiency recommendations',
      impact: '75% reduction in manual reporting time'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
          AI Features Architecture
        </h3>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Integrated AI system enhances decision-making across all platform modules
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-purple-400" />
          <div className="text-xl font-semibold">Central AI Engine</div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {aiModules.map((module, index) => (
            <div key={index} className="p-6 rounded-xl bg-background border border-white/10">
              <div className="text-sm font-semibold text-foreground mb-2">{module.name}</div>
              <p className="text-xs text-foreground/60 mb-3">{module.desc}</p>
              <div className="pt-3 border-t border-white/10">
                <div className="text-xs text-green-400">{module.impact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-foreground/60">
        AI insights are integrated across Super Admin, School Admin, Teacher, and Parent interfaces
      </div>
    </motion.div>
  );
}

/* ==================== SECTION 9: SYSTEM SCALABILITY ==================== */
function SystemScalability({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
          System Scalability Structure
        </h3>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Multi-tenant SaaS architecture designed to support hundreds of schools efficiently
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-background border border-white/10">
        {/* Top Layer: SaaS Platform */}
        <div className="flex justify-center mb-8">
          <div className="px-8 py-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <Server className="w-6 h-6 mx-auto mb-2" />
            <div className="font-semibold text-center">Multi-Tenant SaaS Platform</div>
          </div>
        </div>

        {/* Connecting Line */}
        <div className="flex justify-center mb-8">
          <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-green-500" />
        </div>

        {/* Multiple Schools */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
              <School className="w-5 h-5 mx-auto mb-2 text-green-400" />
              <div className="text-sm font-medium text-foreground">School {num}</div>
              <div className="text-xs text-foreground/60">Isolated data</div>
            </div>
          ))}
        </div>

        {/* Shared Infrastructure */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <Brain className="w-6 h-6 text-purple-400 mb-3" />
            <div className="font-semibold text-foreground mb-2">Shared AI Engine</div>
            <p className="text-xs text-foreground/60">
              Single AI model serves all schools while maintaining data isolation
            </p>
          </div>
          <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <Database className="w-6 h-6 text-blue-400 mb-3" />
            <div className="font-semibold text-foreground mb-2">Shared Infrastructure</div>
            <p className="text-xs text-foreground/60">
              Cloud-based resources scale automatically with demand
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ==================== SECTION 10: KEY IA INSIGHTS ==================== */
function KeyIAInsights({ isInView }: { isInView: boolean }) {
  const insights = [
    {
      title: 'Role-Based System Structure',
      desc: 'Clear separation of access and features based on user roles ensures security and usability',
      icon: Shield
    },
    {
      title: 'Clear Separation of Responsibilities',
      desc: 'Each module has a distinct purpose, reducing cognitive load and improving navigation',
      icon: Layers
    },
    {
      title: 'Mobile-First Experience',
      desc: 'Teacher and parent apps prioritize mobile UX for on-the-go access and real-time updates',
      icon: Smartphone
    },
    {
      title: 'AI Insights Integration',
      desc: 'AI features are seamlessly embedded across all modules rather than siloed',
      icon: Brain
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
          Key IA Insights
        </h3>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Critical design decisions that shaped the platform's architecture
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-background to-surface border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{insight.title}</h4>
              <p className="text-foreground/70 leading-relaxed">{insight.desc}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
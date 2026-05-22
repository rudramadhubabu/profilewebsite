import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  AlertTriangle, ShieldCheck, TrendingUp, Package, MapPin,
  Search, Eye, CheckCircle2, Users, Factory, Truck, Droplet,
  Cable, Footprints, ChevronRight, FileText, Building2
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Section6UserJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const userTypes = [
    { persona: 'Safety Manager', role: 'Workplace compliance officer', responsibility: 'Ensure regulatory compliance' },
    { persona: 'Facility Engineer', role: 'Facility operations manager', responsibility: 'Maintain safe infrastructure' },
    { persona: 'Procurement Manager', role: 'Purchasing specialist', responsibility: 'Source safety equipment' }
  ];

  const userScenarios = [
    { scenario: 'Chemical storage upgrade', exampleNeed: 'Install OSHA compliant safety cabinets' },
    { scenario: 'Spill containment planning', exampleNeed: 'Install spill containment pallets' },
    { scenario: 'Worksite vehicle safety', exampleNeed: 'Deploy wheel chocks' },
    { scenario: 'Worker fatigue reduction', exampleNeed: 'Install anti fatigue floor mats' }
  ];

  const journeyTabs = [
    {
      name: 'Hazardous Storage Journey',
      icon: Package,
      scenario: 'A safety manager must store flammable chemicals safely in a manufacturing facility.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwY2FiaW5ldCUyMGZsYW1tYWJsZXxlbnwxfHx8fDE3NzMzODA1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      journeyMap: [
        { stage: 'Awareness', goal: 'Recognize safety risk', actions: 'Identify hazardous materials', painPoints: 'Lack of clear product guidance', opportunity: 'Provide hazard based entry points' },
        { stage: 'Research', goal: 'Understand compliance', actions: 'Search for safety cabinets', painPoints: 'Complex regulatory terminology', opportunity: 'Provide compliance explanations' },
        { stage: 'Exploration', goal: 'Browse cabinet types', actions: 'Explore product categories', painPoints: 'Too many cabinet variations', opportunity: 'Introduce guided selection' },
        { stage: 'Evaluation', goal: 'Compare cabinet sizes', actions: 'Review specs', painPoints: 'Difficult product comparison', opportunity: 'Simplify spec comparison' },
        { stage: 'Decision', goal: 'Select product', actions: 'Verify certifications', painPoints: 'Compliance details buried', opportunity: 'Highlight compliance badges' },
        { stage: 'Purchase', goal: 'Request distributor quote', actions: 'Contact supplier', painPoints: 'Slow supplier discovery', opportunity: 'Integrate distributor locator' }
      ],
      taskFlow: [
        { step: 'Step 1', action: 'Enter hazardous storage category', response: 'Display cabinet types' },
        { step: 'Step 2', action: 'Select cabinet capacity', response: 'Show compliant models' },
        { step: 'Step 3', action: 'Compare certifications', response: 'Display compliance info' },
        { step: 'Step 4', action: 'Review product specs', response: 'Provide technical sheet' },
        { step: 'Step 5', action: 'Request quote', response: 'Connect with distributor' }
      ]
    },
    {
      name: 'Spill Control Journey',
      icon: Droplet,
      scenario: 'A facility engineer needs to install spill containment pallets for chemical drums.',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3BpbGwlMjBjb250YWlubWVudHxlbnwxfHx8fDE3NzMzODA1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      journeyMap: [
        { stage: 'Awareness', goal: 'Prevent chemical spills', actions: 'Identify containment need', painPoints: 'Limited planning guidance', opportunity: 'Provide spill planning resources' },
        { stage: 'Research', goal: 'Understand containment options', actions: 'Explore spill pallets', painPoints: 'Too many product types', opportunity: 'Provide scenario filters' },
        { stage: 'Exploration', goal: 'Compare pallet capacity', actions: 'Review drum compatibility', painPoints: 'Technical spec complexity', opportunity: 'Simplify capacity selection' },
        { stage: 'Evaluation', goal: 'Evaluate durability', actions: 'Review materials', painPoints: 'Hard to compare durability', opportunity: 'Provide material comparison' },
        { stage: 'Decision', goal: 'Select pallet type', actions: 'Verify chemical compatibility', painPoints: 'Limited compatibility guidance', opportunity: 'Provide compatibility tool' },
        { stage: 'Purchase', goal: 'Contact supplier', actions: 'Request quote', painPoints: 'Distributor discovery slow', opportunity: 'Integrate location search' }
      ],
      taskFlow: [
        { step: 'Step 1', action: 'Navigate to spill containment', response: 'Display product categories' },
        { step: 'Step 2', action: 'Choose drum quantity', response: 'Filter compatible pallets' },
        { step: 'Step 3', action: 'Verify chemical compatibility', response: 'Show material specs' },
        { step: 'Step 4', action: 'Compare containment volume', response: 'Display comparison data' },
        { step: 'Step 5', action: 'Request supplier quote', response: 'Provide distributor contact' }
      ]
    },
    {
      name: 'Motion Safety Journey',
      icon: Truck,
      scenario: 'A construction site manager needs wheel chocks and cable protectors.',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc2FmZXR5fGVufDF8fHx8MTc3MzM4MDU1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      journeyMap: [
        { stage: 'Awareness', goal: 'Prevent vehicle accidents', actions: 'Identify motion safety needs', painPoints: 'Lack of safety education', opportunity: 'Provide scenario guides' },
        { stage: 'Research', goal: 'Explore safety devices', actions: 'Search wheel chocks', painPoints: 'Multiple load capacities', opportunity: 'Provide load guidance' },
        { stage: 'Exploration', goal: 'Browse product models', actions: 'Compare sizes', painPoints: 'Product differentiation unclear', opportunity: 'Simplify spec display' },
        { stage: 'Evaluation', goal: 'Verify load rating', actions: 'Review specs', painPoints: 'Technical complexity', opportunity: 'Add simple explanations' },
        { stage: 'Decision', goal: 'Select product', actions: 'Confirm compatibility', painPoints: 'Hard to choose correct model', opportunity: 'Provide selection assistant' },
        { stage: 'Purchase', goal: 'Request quote', actions: 'Find distributor', painPoints: 'Multi step process', opportunity: 'Simplify quote flow' }
      ],
      taskFlow: [
        { step: 'Step 1', action: 'Select motion safety category', response: 'Show safety products' },
        { step: 'Step 2', action: 'Choose vehicle type', response: 'Filter compatible products' },
        { step: 'Step 3', action: 'Select load capacity', response: 'Display suitable models' },
        { step: 'Step 4', action: 'Review durability specs', response: 'Provide technical sheet' },
        { step: 'Step 5', action: 'Contact distributor', response: 'Enable quote request' }
      ]
    },
    {
      name: 'Workplace Ergonomics Journey',
      icon: Footprints,
      scenario: 'A warehouse manager wants to reduce worker fatigue using anti fatigue mats.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjB3b3JrZXJ8ZW58MXx8fHwxNzczMzgwNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      journeyMap: [
        { stage: 'Awareness', goal: 'Improve worker comfort', actions: 'Identify fatigue issues', painPoints: 'Limited ergonomic guidance', opportunity: 'Provide ergonomic education' },
        { stage: 'Research', goal: 'Explore anti fatigue mats', actions: 'Browse mat categories', painPoints: 'Too many materials', opportunity: 'Provide material guide' },
        { stage: 'Exploration', goal: 'Compare mat thickness', actions: 'Review specs', painPoints: 'Technical info heavy', opportunity: 'Simplify specs' },
        { stage: 'Evaluation', goal: 'Check durability', actions: 'Compare product reviews', painPoints: 'Hard to understand lifespan', opportunity: 'Provide durability comparison' },
        { stage: 'Decision', goal: 'Select correct mat', actions: 'Verify environment compatibility', painPoints: 'Hard to match environment', opportunity: 'Provide environment filter' },
        { stage: 'Purchase', goal: 'Contact distributor', actions: 'Request quote', painPoints: 'Purchase path unclear', opportunity: 'Simplify contact flow' }
      ],
      taskFlow: [
        { step: 'Step 1', action: 'Navigate to ergonomics category', response: 'Display mat types' },
        { step: 'Step 2', action: 'Select environment', response: 'Filter suitable mats' },
        { step: 'Step 3', action: 'Compare thickness', response: 'Show product variations' },
        { step: 'Step 4', action: 'Review durability', response: 'Display lifespan info' },
        { step: 'Step 5', action: 'Request quote', response: 'Connect with supplier' }
      ]
    }
  ];

  const crossBrandProducts = [
    { product: 'Safety cabinets', brand: 'Justrite' },
    { product: 'Spill containment pallets', brand: 'Eagle' },
    { product: 'Cable protectors', brand: 'Checkers' },
    { product: 'Anti fatigue mats', brand: 'NoTrax' }
  ];

  const optimizationInsights = [
    { insight: 'Users search by hazard', explanation: 'Not product name' },
    { insight: 'Compliance clarity critical', explanation: 'Certification drives trust' },
    { insight: 'Technical complexity high', explanation: 'Simplification required' },
    { insight: 'Multi brand journeys common', explanation: 'Ecosystem navigation needed' }
  ];

  const uxImpact = [
    { metric: 'Product discovery speed', improvement: '+45%' },
    { metric: 'Safety solution discovery', improvement: '+40%' },
    { metric: 'Quote requests', improvement: '+30%' },
    { metric: 'User navigation clarity', improvement: '+35%' }
  ];

  const currentJourney = journeyTabs[activeTab];
  const JourneyIcon = currentJourney.icon;

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
            Section 6
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Understanding How Safety Professionals Discover Industrial Safety Solutions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mb-8" />
          <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-4xl">
            User Journey Mapping and Task Flow Optimization
          </p>
        </motion.div>

        {/* Section Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl p-8 lg:p-10 mb-8">
            <p className="text-xl text-foreground/80 leading-relaxed mb-6">
              Industrial safety purchasing decisions are fundamentally different from consumer e-commerce journeys.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              In industrial environments, safety equipment purchases are typically initiated by professionals responsible for workplace safety compliance.
            </p>
            <p className="text-lg font-semibold mb-4">These users operate in high-risk environments where selecting the wrong equipment can result in:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {['regulatory violations', 'workplace injuries', 'environmental hazards', 'financial penalties'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-white/10 rounded-3xl p-8 lg:p-10">
            <p className="text-lg font-semibold mb-4">Because of this, the decision process for safety products involves multiple stages including:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {['hazard identification', 'regulatory compliance verification', 'product research', 'technical comparison', 'organizational approval', 'supplier contact'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                  <ChevronRight className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold text-orange-400">
              The UX challenge is to design a product discovery experience that supports these complex workflows while reducing cognitive friction.
            </p>
          </div>
        </motion.div>

        {/* Primary User Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Primary User Types
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            Three primary user groups interact with the platform.
          </p>
          
          <div className="bg-background border border-white/10 rounded-2xl overflow-hidden mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-orange-500/10 border-b border-white/10">
                  <th className="text-left p-5 font-semibold text-orange-400">Persona</th>
                  <th className="text-left p-5 font-semibold text-orange-400">Role</th>
                  <th className="text-left p-5 font-semibold text-orange-400">Responsibility</th>
                </tr>
              </thead>
              <tbody>
                {userTypes.map((user, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                    <td className="p-5 font-semibold text-foreground/90">{user.persona}</td>
                    <td className="p-5 text-foreground/80">{user.role}</td>
                    <td className="p-5 text-foreground/80">{user.responsibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
            <p className="text-lg font-semibold text-green-400">
              Each user approaches the platform with different goals but shares the same requirement: quickly finding compliant safety solutions.
            </p>
          </div>
        </motion.div>

        {/* Primary User Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Primary User Scenarios
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            Industrial safety purchases often originate from a specific safety problem.
          </p>
          <p className="text-lg font-semibold mb-6">Common scenarios include:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {userScenarios.map((scenario, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Search className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">{scenario.scenario}</h4>
                    <p className="text-sm text-foreground/60 mb-1">Example Need:</p>
                    <p className="text-foreground/80">{scenario.exampleNeed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-blue-400 font-semibold">
            These scenarios drive user journeys across the multi-brand safety ecosystem.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Tab-Based User Journey Structure
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            To reduce vertical scrolling in the case study, journeys are organized into tabs. Each tab represents a real industrial safety workflow.
          </p>
          
          <div className="flex gap-2 overflow-x-auto border-b border-white/10 pb-2">
            {journeyTabs.map((tab, index) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-6 py-4 rounded-t-xl font-semibold text-sm whitespace-nowrap transition-all ${
                    activeTab === index
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                      : 'bg-background border border-white/10 text-foreground/60 hover:text-foreground hover:border-orange-500/30'
                  }`}
                >
                  <TabIcon className="w-5 h-5" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Journey Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          {/* Journey Image & Scenario */}
          <div className="mb-12 relative rounded-3xl overflow-hidden">
            <ImageWithFallback
              src={currentJourney.image}
              alt={currentJourney.name}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 mb-4">
                <JourneyIcon className="w-10 h-10 text-orange-500" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  {currentJourney.name}
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <p className="text-sm text-white/70 mb-2 font-semibold">Scenario:</p>
                <p className="text-xl text-white">{currentJourney.scenario}</p>
              </div>
            </div>
          </div>

          {/* Journey Map Table */}
          <div className="mb-12">
            <h4 className="text-2xl lg:text-3xl mb-6 font-bold">
              {currentJourney.name.replace(' Journey', '')} User Journey Map
            </h4>
            <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-orange-500/10 border-b border-white/10">
                      <th className="text-left p-4 font-semibold text-orange-400">Journey Stage</th>
                      <th className="text-left p-4 font-semibold text-orange-400">User Goal</th>
                      <th className="text-left p-4 font-semibold text-orange-400">Actions</th>
                      <th className="text-left p-4 font-semibold text-orange-400">Pain Points</th>
                      <th className="text-left p-4 font-semibold text-orange-400">Opportunity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentJourney.journeyMap.map((stage, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                        <td className="p-4 font-semibold text-foreground/90">{stage.stage}</td>
                        <td className="p-4 text-foreground/80">{stage.goal}</td>
                        <td className="p-4 text-foreground/70">{stage.actions}</td>
                        <td className="p-4 text-red-400">{stage.painPoints}</td>
                        <td className="p-4 text-green-400">{stage.opportunity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Task Flow Table */}
          <div>
            <h4 className="text-2xl lg:text-3xl mb-6 font-bold">
              {currentJourney.name.replace(' Journey', '')} Task Flow
            </h4>
            <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-orange-500/10 border-b border-white/10">
                    <th className="text-left p-5 font-semibold text-orange-400">Step</th>
                    <th className="text-left p-5 font-semibold text-orange-400">User Action</th>
                    <th className="text-left p-5 font-semibold text-orange-400">System Response</th>
                  </tr>
                </thead>
                <tbody>
                  {currentJourney.taskFlow.map((task, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                      <td className="p-5">
                        <span className="px-3 py-1 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-sm">
                          {task.step}
                        </span>
                      </td>
                      <td className="p-5 font-semibold text-foreground/90">{task.action}</td>
                      <td className="p-5 text-foreground/80">{task.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Cross-Brand User Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Cross-Brand User Journey
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            Many industrial safety projects require products from multiple brands.
          </p>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-3xl p-8 lg:p-10 mb-8">
            <p className="text-xl font-semibold mb-6">Example workflow:</p>
            <p className="text-2xl font-bold text-purple-400 mb-8">Chemical storage facility upgrade.</p>
            
            <p className="text-lg font-semibold mb-6">Products required:</p>
            <div className="bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-purple-500/10 border-b border-white/10">
                    <th className="text-left p-5 font-semibold text-purple-400">Product</th>
                    <th className="text-left p-5 font-semibold text-purple-400">Brand</th>
                  </tr>
                </thead>
                <tbody>
                  {crossBrandProducts.map((item, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-purple-500/5 transition-colors">
                      <td className="p-5 text-foreground/80">{item.product}</td>
                      <td className="p-5 font-semibold">
                        <span className="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-semibold text-sm">
                          {item.brand}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
            <p className="text-lg font-semibold text-green-400">
              The redesigned UX allows users to discover all related safety products within the same journey.
            </p>
          </div>
        </motion.div>

        {/* User Journey Optimization Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            User Journey Optimization Insights
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            Key UX insights from journey mapping:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {optimizationInsights.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Eye className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-orange-400">{item.insight}</h4>
                    <p className="text-foreground/80">{item.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* UX Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            UX Impact
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            Improving these flows is expected to achieve:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uxImpact.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-2xl hover:-translate-y-2 transition-transform"
              >
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-sm text-foreground/70 mb-2">{item.metric}</p>
                <p className="text-4xl font-bold text-green-400">{item.improvement}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-3xl p-8 lg:p-12"
        >
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-12 h-12 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl lg:text-4xl mb-6" style={{ fontWeight: 700 }}>
                Section Conclusion
              </h3>
              <p className="text-xl text-foreground/90 leading-relaxed mb-6">
                User journey mapping reveals that industrial safety purchasing is a problem-driven process rather than a catalog browsing experience.
              </p>
              <p className="text-xl font-semibold text-orange-400">
                By aligning the platform with real safety workflows, the redesigned experience supports users in identifying hazards, exploring compliant solutions, and connecting with suppliers more efficiently.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

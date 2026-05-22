import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  AlertTriangle, Package, Lightbulb, CheckCircle2, ChevronRight,
  Factory, FileText, BookOpen, TrendingUp, Navigation
} from 'lucide-react';

export function Section7InformationArchitecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const productDistribution = [
    { productType: 'Hazardous storage cabinets', brand: 'Justrite' },
    { productType: 'Spill containment systems', brand: 'Eagle' },
    { productType: 'Cable protectors & wheel chocks', brand: 'Checkers' },
    { productType: 'Anti fatigue safety mats', brand: 'NoTrax' }
  ];

  const uxProblems = [
    { issue: 'Fragmented navigation', description: 'Users must switch sites to find related products', severity: 'P1' },
    { issue: 'Brand driven architecture', description: 'Navigation reflects company structure instead of user goals', severity: 'P1' },
    { issue: 'Redundant product categories', description: 'Similar products appear across multiple brand sites', severity: 'P2' },
    { issue: 'Poor cross selling', description: 'Related products not connected across brands', severity: 'P2' },
    { issue: 'Knowledge fragmentation', description: 'Compliance resources scattered', severity: 'P3' }
  ];

  const crossBrandMapping = [
    { category: 'Hazardous Storage', productType: 'Safety Cabinets', brand: 'Justrite' },
    { category: 'Hazardous Storage', productType: 'Safety Cans', brand: 'Justrite' },
    { category: 'Spill Control', productType: 'Spill Containment', brand: 'Eagle' },
    { category: 'Spill Control', productType: 'Drum Handling', brand: 'Eagle' },
    { category: 'Motion Safety', productType: 'Cable Protectors', brand: 'Checkers' },
    { category: 'Motion Safety', productType: 'Wheel Chocks', brand: 'Checkers' },
    { category: 'Workplace Ergonomics', productType: 'Anti Fatigue Mats', brand: 'NoTrax' },
    { category: 'Workplace Ergonomics', productType: 'Entrance Mats', brand: 'NoTrax' }
  ];

  const globalNavigation = [
    { category: 'Hazardous Storage', purpose: 'Safe storage of flammable liquids' },
    { category: 'Spill Control', purpose: 'Chemical spill containment' },
    { category: 'Motion Safety', purpose: 'Vehicle and equipment movement safety' },
    { category: 'Workplace Ergonomics', purpose: 'Worker fatigue and flooring safety' },
    { category: 'Safety Resources', purpose: 'Compliance education' }
  ];

  const categoryTabs = [
    {
      name: 'Hazardous Storage',
      brand: 'Justrite',
      sections: [
        { section: 'Category overview', purpose: 'Explains safety problem' },
        { section: 'Product categories', purpose: 'Displays available solutions' },
        { section: 'Compliance standards', purpose: 'OSHA and regulatory info' },
        { section: 'Product guides', purpose: 'Help users select products' },
        { section: 'Related safety products', purpose: 'Cross brand recommendations' }
      ]
    },
    {
      name: 'Spill Control',
      brand: 'Eagle',
      sections: [
        { section: 'Category overview', purpose: 'Explains safety problem' },
        { section: 'Product categories', purpose: 'Displays available solutions' },
        { section: 'Compliance standards', purpose: 'OSHA and regulatory info' },
        { section: 'Product guides', purpose: 'Help users select products' },
        { section: 'Related safety products', purpose: 'Cross brand recommendations' }
      ]
    },
    {
      name: 'Motion Safety',
      brand: 'Checkers',
      sections: [
        { section: 'Category overview', purpose: 'Explains safety problem' },
        { section: 'Product categories', purpose: 'Displays available solutions' },
        { section: 'Compliance standards', purpose: 'OSHA and regulatory info' },
        { section: 'Product guides', purpose: 'Help users select products' },
        { section: 'Related safety products', purpose: 'Cross brand recommendations' }
      ]
    },
    {
      name: 'Workplace Ergonomics',
      brand: 'NoTrax',
      sections: [
        { section: 'Category overview', purpose: 'Explains safety problem' },
        { section: 'Product categories', purpose: 'Displays available solutions' },
        { section: 'Compliance standards', purpose: 'OSHA and regulatory info' },
        { section: 'Product guides', purpose: 'Help users select products' },
        { section: 'Related safety products', purpose: 'Cross brand recommendations' }
      ]
    }
  ];

  const industrySolutions = [
    { industry: 'Manufacturing', safetyNeeds: 'Chemical storage + floor mats' },
    { industry: 'Construction', safetyNeeds: 'Cable protection + ground protection' },
    { industry: 'Oil and Gas', safetyNeeds: 'Spill containment' },
    { industry: 'Laboratories', safetyNeeds: 'Hazardous material storage' }
  ];

  const uxImpact = [
    { metric: 'Product discovery speed', improvement: '+50%' },
    { metric: 'Cross brand exploration', improvement: '+40%' },
    { metric: 'User navigation clarity', improvement: '+35%' },
    { metric: 'Safety solution awareness', improvement: '+30%' }
  ];

  const currentTab = categoryTabs[activeTab];

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-foreground/[0.02] to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-4">
            Section 7
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Re-Architecting the Industrial Safety Ecosystem
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mb-8" />
          <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-4xl">
            Designing a Unified Navigation Structure Across Four Safety Brands
          </p>
        </motion.div>

        {/* Section Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl lg:text-3xl mb-6" style={{ fontWeight: 600 }}>
              The research phase revealed a major usability challenge:
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Although the Justrite Safety Group provides a wide range of industrial safety solutions, these products are distributed across multiple independent brand websites.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Each brand operates its own navigation system, product catalog structure, and category taxonomy.
            </p>
            <p className="text-xl font-semibold text-red-400">
              This fragmentation forces users to navigate multiple websites when searching for complete safety solutions.
            </p>
          </div>
        </motion.div>

        {/* Example Scenario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            For example:
          </h3>
          <div className="bg-background border border-white/10 rounded-3xl p-8 mb-8">
            <p className="text-lg font-semibold mb-6">A facility safety manager may require:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {['Flammable liquid storage cabinets', 'Spill containment pallets', 'Cable protection ramps', 'Anti-fatigue workstation mats'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <Package className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg font-semibold mb-6">However, these products are distributed across different brand sites:</p>
            <div className="bg-foreground/5 border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-orange-500/10 border-b border-white/10">
                    <th className="text-left p-5 font-semibold text-orange-400">Product Type</th>
                    <th className="text-left p-5 font-semibold text-orange-400">Brand</th>
                  </tr>
                </thead>
                <tbody>
                  {productDistribution.map((item, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                      <td className="p-5 text-foreground/80">{item.productType}</td>
                      <td className="p-5 font-semibold">{item.brand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-red-400 mb-2">The result:</p>
                <p className="text-foreground/80">
                  Because these solutions exist across multiple brand platforms, users must repeatedly restart their navigation journey when exploring related safety products.
                </p>
                <p className="text-lg font-semibold mt-4 text-red-400">
                  Increased research time, fragmented product discovery, and reduced purchasing efficiency.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core UX Problem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            The Core UX Problem
          </h3>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-3xl p-8 lg:p-10 mb-8">
            <p className="text-2xl lg:text-3xl font-bold mb-6 text-orange-400">
              The ecosystem is currently organized around brand identity rather than safety solutions.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              However, user research shows that industrial buyers think in terms of:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['hazards', 'workplace environments', 'safety problems', 'compliance requirements'].map((item, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl bg-background border border-orange-500/20">
                  <p className="text-lg font-semibold text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-foreground/70 mt-6 italic">
              Rather than brand ownership.
            </p>
          </div>
          <p className="text-xl font-semibold text-orange-400">
            This insight led to a strategic redesign of the platform's information architecture.
          </p>
        </motion.div>

        {/* UX Strategy Principle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-3xl p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-6">
              <Lightbulb className="w-12 h-12 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl lg:text-4xl mb-4" style={{ fontWeight: 700 }}>
                  UX Strategy Principle
                </h3>
                <p className="text-xl lg:text-2xl font-bold text-green-400 mb-6">
                  Solution-Driven Architecture
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Instead of organizing navigation around brand websites, the platform should organize content around workplace safety solutions.
                </p>
                <p className="text-lg font-semibold mb-4">This allows users to explore products based on:</p>
                <div className="space-y-3">
                  {['Workplace hazards', 'Operational environments', 'Safety compliance requirements'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <span className="text-lg text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Current IA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Current Information Architecture
          </h3>
          <p className="text-lg text-foreground/70 mb-8 italic">Existing Ecosystem Structure</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-background border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6 text-orange-400">Justrite.com</h4>
              <ul className="space-y-3">
                {['Safety Cabinets', 'Safety Cans', 'Chemical Storage', 'Secondary Containment'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6 text-blue-400">Eagle.justrite.com</h4>
              <ul className="space-y-3">
                {['Spill Containment', 'Drum Handling', 'Safety Cabinets'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Checkers.justrite.com</h4>
              <ul className="space-y-3">
                {['Cable Protectors', 'Wheel Chocks', 'Ground Protection', 'Warning Whips'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6 text-green-400">Notrax.justrite.com</h4>
              <ul className="space-y-3">
                {['Anti Fatigue Mats', 'Entrance Mats', 'Electrical Safety Mats'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
            <p className="text-lg font-semibold text-red-400">Problem:</p>
            <p className="text-foreground/80 mt-2">Each brand operates independently.</p>
          </div>
        </motion.div>

        {/* UX Problem Analysis Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            UX Problem Analysis
          </h3>
          <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-orange-500/10 border-b border-white/10">
                  <th className="text-left p-5 font-semibold text-orange-400">UX Issue</th>
                  <th className="text-left p-5 font-semibold text-orange-400">Description</th>
                  <th className="text-left p-5 font-semibold text-orange-400">Severity</th>
                </tr>
              </thead>
              <tbody>
                {uxProblems.map((problem, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                    <td className="p-5 font-semibold text-foreground/90">{problem.issue}</td>
                    <td className="p-5 text-foreground/80">{problem.description}</td>
                    <td className="p-5">
                      <span className={`px-3 py-1 rounded-lg font-bold text-xs ${
                        problem.severity === 'P1' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        problem.severity === 'P2' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {problem.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Proposed IA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Proposed Information Architecture
          </h3>
          <p className="text-lg text-foreground/70 mb-8 italic">Unified Industrial Safety Ecosystem</p>
          
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-3xl p-8 lg:p-10">
            <h4 className="text-3xl font-bold mb-8 text-center text-green-400">Industrial Safety Solutions</h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                <h5 className="text-xl font-bold mb-4 text-green-400">Hazardous Material Storage</h5>
                <ul className="space-y-2">
                  {['Safety Cabinets', 'Chemical Storage', 'Safety Cans'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                <h5 className="text-xl font-bold mb-4 text-green-400">Spill Control</h5>
                <ul className="space-y-2">
                  {['Spill Containment', 'Drum Handling', 'Spill Kits'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                <h5 className="text-xl font-bold mb-4 text-green-400">Motion Safety</h5>
                <ul className="space-y-2">
                  {['Cable Protectors', 'Wheel Chocks', 'Ground Protection'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                <h5 className="text-xl font-bold mb-4 text-green-400">Workplace Ergonomics</h5>
                <ul className="space-y-2">
                  {['Anti Fatigue Mats', 'Entrance Mats', 'Electrical Safety Mats'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                <h5 className="text-xl font-bold mb-4 text-green-400">Safety Resources</h5>
                <ul className="space-y-2">
                  {['Compliance Guides', 'Safety Standards', 'Product Manuals'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                <h5 className="text-xl font-bold mb-4 text-green-400">Expert Support</h5>
                <ul className="space-y-2">
                  {['Safety Consultation', 'Distributor Locator', 'Site Safety Survey'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg text-green-400 font-semibold mt-8">
            This architecture organizes the ecosystem around user goals rather than brand divisions.
          </p>
        </motion.div>

        {/* Cross-Brand Product Mapping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Cross-Brand Product Mapping
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            To support the new architecture, products are mapped across brands.
          </p>
          <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-orange-500/10 border-b border-white/10">
                  <th className="text-left p-5 font-semibold text-orange-400">Safety Category</th>
                  <th className="text-left p-5 font-semibold text-orange-400">Product Type</th>
                  <th className="text-left p-5 font-semibold text-orange-400">Brand</th>
                </tr>
              </thead>
              <tbody>
                {crossBrandMapping.map((item, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                    <td className="p-5 font-semibold text-foreground/90">{item.category}</td>
                    <td className="p-5 text-foreground/80">{item.productType}</td>
                    <td className="p-5">
                      <span className="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-semibold text-sm">
                        {item.brand}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-lg text-green-400 font-semibold mt-6">
            This structure allows users to explore all relevant safety solutions without switching websites.
          </p>
        </motion.div>

        {/* Cross-Brand Navigation System */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Cross-Brand Navigation System
          </h3>
          <p className="text-lg text-foreground/80 mb-12">
            To reduce complexity, the ecosystem introduces two levels of navigation.
          </p>

          {/* Level 1 */}
          <div className="mb-12">
            <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold">
                  LEVEL 1
                </div>
                <h4 className="text-2xl font-bold text-blue-400">Global Safety Navigation</h4>
              </div>
              <p className="text-foreground/80 mb-6">
                Top level navigation focuses on safety solutions.
              </p>
            </div>

            <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-500/10 border-b border-white/10">
                    <th className="text-left p-5 font-semibold text-blue-400">Navigation Category</th>
                    <th className="text-left p-5 font-semibold text-blue-400">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {globalNavigation.map((item, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-blue-500/5 transition-colors">
                      <td className="p-5 font-semibold text-foreground/90">{item.category}</td>
                      <td className="p-5 text-foreground/80">{item.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-lg text-blue-400 font-semibold mt-6">
              This creates a solution driven navigation system.
            </p>
          </div>

          {/* Level 2 */}
          <div>
            <div className="bg-purple-500/10 border-2 border-purple-500/30 rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 font-bold">
                  LEVEL 2
                </div>
                <h4 className="text-2xl font-bold text-purple-400">Brand Specialization Navigation</h4>
              </div>
              <p className="text-foreground/80 mb-6">
                Each category reveals products organized by brand expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background border border-purple-500/20 rounded-2xl p-6">
                <h5 className="text-lg font-bold mb-3 text-purple-400">Example:</h5>
                <div className="space-y-4">
                  {[
                    { category: 'Hazardous Storage', brand: 'Justrite' },
                    { category: 'Spill Control', brand: 'Eagle' },
                    { category: 'Motion Safety', brand: 'Checkers' },
                    { category: 'Workplace Ergonomics', brand: 'NoTrax' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                      <p className="font-semibold text-foreground/90 mb-1">{item.category}</p>
                      <p className="text-sm text-purple-400">Products powered by {item.brand}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <CheckCircle2 className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-purple-400">
                    This approach maintains brand authority while simplifying navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab-Based Category Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Tab-Based Category Structure
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            To reduce scrolling, the platform uses tab based exploration. Users can switch between categories without leaving the page.
          </p>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto border-b border-white/10 pb-2 mb-8">
            {categoryTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 rounded-t-xl font-semibold text-sm whitespace-nowrap transition-all ${
                  activeTab === index
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-background border border-white/10 text-foreground/60 hover:text-foreground hover:border-orange-500/30'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-background border border-white/10 rounded-2xl p-8 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold">{currentTab.name}</h4>
                <span className="px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-semibold">
                  Powered by {currentTab.brand}
                </span>
              </div>

              <h5 className="text-lg font-semibold mb-4">Category Tab Content Structure</h5>
              <p className="text-foreground/70 mb-6">Each tab contains structured safety information:</p>

              <div className="bg-foreground/5 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-orange-500/10 border-b border-white/10">
                      <th className="text-left p-5 font-semibold text-orange-400">Section</th>
                      <th className="text-left p-5 font-semibold text-orange-400">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTab.sections.map((section, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-orange-500/5 transition-colors">
                        <td className="p-5 font-semibold text-foreground/90">{section.section}</td>
                        <td className="p-5 text-foreground/80">{section.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Industry Solution Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Industry Solution Navigation
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            Another discovery pathway is industry specific navigation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {industrySolutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Factory className="w-8 h-8 text-orange-500" />
                  <h4 className="text-xl font-bold">{item.industry}</h4>
                </div>
                <p className="text-sm text-foreground/60 mb-2">Safety Needs:</p>
                <p className="text-lg font-semibold text-foreground/90">{item.safetyNeeds}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Safety Resource Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Safety Resource Architecture
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            Industrial buyers require extensive safety education. Resources are organized into a dedicated knowledge center.
          </p>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-3xl p-8 lg:p-10">
            <h4 className="text-3xl font-bold mb-8 text-center text-blue-400">Safety Knowledge Center</h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                <h5 className="text-xl font-bold mb-4 text-blue-400">Compliance Standards</h5>
                <ul className="space-y-2">
                  {['OSHA', 'NFPA', 'EPA'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <FileText className="w-4 h-4 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                <h5 className="text-xl font-bold mb-4 text-blue-400">Safety Guides</h5>
                <ul className="space-y-2">
                  {['Chemical storage safety', 'Spill containment planning', 'Workplace ergonomics'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                <h5 className="text-xl font-bold mb-4 text-blue-400">Technical Resources</h5>
                <ul className="space-y-2">
                  {['Product manuals', 'installation guides', 'maintenance documentation'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <FileText className="w-4 h-4 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cross-Brand Product Discovery Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            Cross-Brand Product Discovery Flow
          </h3>
          <p className="text-lg text-foreground/80 mb-8">Example user scenario:</p>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-3xl p-8 lg:p-10 mb-8">
            <p className="text-xl font-semibold mb-8">
              A safety manager needs to equip a chemical storage area.
            </p>
            
            <h4 className="text-lg font-semibold mb-6 text-purple-400">User journey:</h4>
            
            <div className="space-y-6">
              {[
                { step: 'Step 1', action: 'Navigate to Hazardous Storage' },
                { step: 'Step 2', action: 'Explore safety cabinets' },
                { step: 'Step 3', action: 'Discover related products', items: ['Spill containment pallets', 'Anti fatigue mats', 'Cable protectors'] }
              ].map((item, idx) => (
                <div key={idx} className="bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-purple-400 font-semibold mb-2">{item.step}</p>
                      <p className="text-lg font-semibold text-foreground/90 mb-3">{item.action}</p>
                      {item.items && (
                        <ul className="space-y-2">
                          {item.items.map((subItem, subIdx) => (
                            <li key={subIdx} className="flex items-center gap-2 text-sm text-foreground/70">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
            <p className="text-lg font-semibold text-green-400">
              These recommendations are sourced from multiple brands.
            </p>
          </div>
        </motion.div>

        {/* UX Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl mb-8" style={{ fontWeight: 600 }}>
            UX Impact of New Architecture
          </h3>
          <p className="text-lg text-foreground/80 mb-8">Expected improvements:</p>

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

        {/* Storytelling Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-3xl p-8 lg:p-12"
        >
          <div className="flex items-start gap-4">
            <Lightbulb className="w-12 h-12 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl lg:text-4xl mb-6" style={{ fontWeight: 700 }}>
                Storytelling Conclusion
              </h3>
              <p className="text-xl text-foreground/90 leading-relaxed mb-6">
                By reorganizing the ecosystem around safety solutions rather than brand websites, the platform becomes easier to navigate and more aligned with how industrial safety professionals actually think about workplace hazards.
              </p>
              <p className="text-xl font-semibold text-orange-400">
                The new architecture transforms the platform from a collection of separate websites into a unified industrial safety knowledge and product ecosystem.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

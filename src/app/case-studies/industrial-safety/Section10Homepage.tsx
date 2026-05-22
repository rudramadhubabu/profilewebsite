import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Globe, MapPin, Phone, User, Search, ChevronDown, ChevronRight,
  ShoppingCart, FileText, Star, TrendingUp, Package, Shield,
  Truck, Users, BookOpen, Award, ExternalLink, ArrowRight, 
  Flame, Droplet, Cable, Grid3x3, Building2, Factory, Beaker, Zap, ShieldCheck,
  Boxes, Container, TestTube, Recycle, Wrench, FileCheck, Video, Download,
  HelpCircle, Filter, Eye, Clock, CheckCircle, AlertCircle, Info, Sparkles
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import justriteLogo from '../../../imports/justrite_store.svg';
import eagleLogo from '../../../imports/eagle_store.svg';
import checkersLogo from '../../../imports/checkers_store.svg';
import notraxLogo from '../../../imports/notrax_store.svg';

export function Section10Homepage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (item: string) => {
    setActiveMegaMenu(null);
    // Simulate navigation
    console.log(`Navigating to: ${item}`);
    // Auto-dismiss after 3 seconds
    setTimeout(() => setActiveMegaMenu(null), 3000);
  };

  // Comprehensive Mega Menu Structure from actual Justrite websites
  const megaMenus = [
    {
      id: 'hazardous-storage',
      title: 'Hazardous Storage',
      brand: 'Justrite',
      brandColor: '#C41E3A',
      description: 'Safety storage cabinets, containers, and gas cylinder solutions for hazardous materials',
      columns: [
        {
          title: 'Safety Cabinets',
          items: [
            'Flammable Cabinets',
            'Combustible Cabinets',
            'Corrosive Cabinets',
            'Hazardous Material Cabinets',
            'Laboratory Cabinets',
            'Pesticide Cabinets',
            'Waste Cabinets'
          ]
        },
        {
          title: 'Safety Cans & Containers',
          items: [
            'Type I Safety Cans',
            'Type II Safety Cans',
            'Plastic Safety Cans',
            'DOT Safety Cans',
            'Oily Waste Containers',
            'Waste Disposal Containers'
          ]
        },
        {
          title: 'Gas Cylinder Storage',
          items: [
            'Cylinder Cabinets',
            'Cylinder Carts',
            'Cylinder Racks',
            'Cylinder Stands'
          ]
        },
        {
          title: 'Resources',
          items: [
            'Chemical Storage Guide',
            'Cabinet Selection Guide',
            'OSHA Storage Standards'
          ]
        }
      ]
    },
    {
      id: 'spill-control',
      title: 'Spill Control',
      brand: 'Eagle',
      brandColor: '#1976D2',
      description: 'Spill containment, response kits, and absorbent solutions for workplace safety',
      columns: [
        {
          title: 'Spill Containment',
          items: [
            'Drum Spill Pallets',
            'IBC Spill Pallets',
            'Spill Decks',
            'Spill Berms'
          ]
        },
        {
          title: 'Spill Response',
          items: [
            'Spill Kits',
            'Chemical Spill Kits',
            'Oil Spill Kits',
            'Universal Spill Kits'
          ]
        },
        {
          title: 'Absorbents',
          items: [
            'Absorbent Pads',
            'Absorbent Rolls',
            'Absorbent Socks',
            'Spill Pillows'
          ]
        },
        {
          title: 'Resources',
          items: [
            'Spill Prevention Guide',
            'EPA Compliance Guide',
            'Secondary Containment Guide'
          ]
        }
      ]
    },
    {
      id: 'motion-safety',
      title: 'Motion Safety',
      brand: 'Checkers',
      brandColor: '#F57C00',
      description: 'Wheel chocks, cable protection, and ground protection for jobsite safety',
      columns: [
        {
          title: 'Wheel Chocks',
          items: [
            'Rubber Wheel Chocks',
            'Polyurethane Chocks',
            'Aircraft Chocks',
            'Heavy Equipment Chocks'
          ]
        },
        {
          title: 'Cable Protection',
          items: [
            'Cable Protector Ramps',
            'Heavy Duty Cable Protectors',
            'Hose Protectors',
            'Modular Cable Protectors'
          ]
        },
        {
          title: 'Ground Protection',
          items: [
            'Ground Protection Mats',
            'Temporary Roadway Systems',
            'Construction Access Mats'
          ]
        },
        {
          title: 'Resources',
          items: [
            'Vehicle Safety Guide',
            'Cable Protection Guide',
            'Jobsite Safety Guide'
          ]
        }
      ]
    },
    {
      id: 'workplace-ergonomics',
      title: 'Workplace Ergonomics',
      brand: 'NoTrax',
      brandColor: '#388E3C',
      description: 'Anti-fatigue mats, entrance matting, and specialty mats for workplace comfort',
      columns: [
        {
          title: 'Anti Fatigue Mats',
          items: [
            'Industrial Anti Fatigue Mats',
            'Workstation Mats',
            'Static Dissipative Mats'
          ]
        },
        {
          title: 'Entrance Matting',
          items: [
            'Scraper Mats',
            'Indoor Entrance Mats',
            'Outdoor Entrance Mats'
          ]
        },
        {
          title: 'Specialty Mats',
          items: [
            'Electrical Safety Mats',
            'Chemical Resistant Mats',
            'Food Processing Mats'
          ]
        },
        {
          title: 'Resources',
          items: [
            'Workplace Ergonomics Guide',
            'Slip Prevention Guide',
            'Mat Selection Guide'
          ]
        }
      ]
    },
    {
      id: 'industries',
      title: 'Industries',
      brand: 'Multi-Brand',
      brandColor: '#424242',
      description: 'Industry-specific safety solutions tailored to unique workplace hazards',
      columns: [
        {
          title: 'Manufacturing',
          items: [
            'Chemical Storage',
            'Spill Containment',
            'Floor Safety Mats',
            'Industrial Equipment'
          ]
        },
        {
          title: 'Construction',
          items: [
            'Cable Protectors',
            'Spill Containment',
            'Ground Protection Mats',
            'Outdoor Storage'
          ]
        },
        {
          title: 'Laboratories',
          items: [
            'Chemical Cabinets',
            'Corrosive Storage',
            'Spill Response Kits',
            'Safety Cans'
          ]
        },
        {
          title: 'More Industries',
          items: [
            'Warehousing',
            'Oil & Gas',
            'Food Processing',
            'Healthcare'
          ]
        }
      ]
    },
    {
      id: 'resources',
      title: 'Safety Resources',
      brand: 'Knowledge Center',
      brandColor: '#5E35B1',
      description: 'Safety guides, compliance documentation, and expert support resources',
      columns: [
        {
          title: 'Compliance',
          items: [
            'OSHA Regulations',
            'NFPA Standards',
            'EPA Requirements',
            'Safety Certifications'
          ]
        },
        {
          title: 'Education',
          items: [
            'Safety Training Videos',
            'Product Installation Guides',
            'Best Practices Library',
            'Webinar Series'
          ]
        },
        {
          title: 'Tools & Downloads',
          items: [
            'Product Catalogs',
            'CAD Drawings',
            'Safety Data Sheets',
            'Compliance Checklists'
          ]
        },
        {
          title: 'Support',
          items: [
            'Talk to Safety Expert',
            'Site Safety Assessment',
            'Custom Solutions',
            'Technical Support'
          ]
        }
      ]
    }
  ];

  const shopByCategory = [
    {
      name: 'Safety Cans & Containers',
      image: 'https://images.unsplash.com/photo-1764231502962-a246b3fca4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      icon: Flame
    },
    {
      name: 'Safety Cabinets & Storage',
      image: 'https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      icon: Package
    },
    {
      name: 'Spills, Storms & Leaks',
      image: 'https://images.unsplash.com/photo-1706440327339-a56601e98e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      icon: Droplet
    },
    {
      name: 'Secondary Containment',
      image: 'https://images.unsplash.com/photo-1657031968558-1b01f921143d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      icon: Shield
    },
    {
      name: 'Cable & Ground Protection',
      image: 'https://images.unsplash.com/photo-1489689680823-fdc334aa73a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      icon: Cable
    },
    {
      name: 'Workplace Ergonomics',
      image: 'https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      icon: Grid3x3
    },
    {
      name: 'Facilities & Buildings',
      image: 'https://images.unsplash.com/photo-1758789667762-56175fe4601c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      icon: Building2
    },
    {
      name: 'Industrial Equipment',
      image: 'https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      icon: Factory
    }
  ];

  const featuredProducts = [
    {
      name: 'Sure-Grip® EX Flammable Safety Cabinet',
      model: '894500',
      price: 'Request Quote',
      rating: 4.9,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      badge: 'Best Seller',
      badgeColor: 'bg-[#C41E3A]'
    },
    {
      name: 'Type I AccuFlow™ Steel Safety Can',
      model: '7150110',
      price: 'Request Quote',
      rating: 4.8,
      reviews: 289,
      image: 'https://images.unsplash.com/photo-1764231502962-a246b3fca4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      badge: 'Popular',
      badgeColor: 'bg-yellow-500'
    },
    {
      name: 'EcoPolyBlend™ Spill Pallet',
      model: '28654',
      price: 'Request Quote',
      rating: 4.7,
      reviews: 215,
      image: 'https://images.unsplash.com/photo-1706440327339-a56601e98e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      badge: 'New',
      badgeColor: 'bg-green-600'
    },
    {
      name: 'Diamond Sof-Tred™ Anti-Fatigue Mat',
      model: '479S0035BL',
      price: 'Request Quote',
      rating: 4.9,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      badge: 'Top Rated',
      badgeColor: 'bg-blue-600'
    }
  ];

  const mostPopular = [
    { name: 'Yellow Flammable Cabinet', model: '45 Gal', image: 'https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Type II Safety Can', model: '5 Gallon Red', image: 'https://images.unsplash.com/photo-1764231502962-a246b3fca4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Spill Containment Pallet', model: '4-Drum Capacity', image: 'https://images.unsplash.com/photo-1706440327339-a56601e98e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Cable Protector Ramp', model: '2-Channel Heavy Duty', image: 'https://images.unsplash.com/photo-1489689680823-fdc334aa73a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Anti-Fatigue Mat', model: '3x5 ft Industrial', image: 'https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { name: 'Cylinder Storage Locker', model: '9-Cylinder Vertical', image: 'https://images.unsplash.com/photo-1583193123517-09ef9447412c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 px-6 bg-background">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded bg-[#C41E3A]/10 border border-[#C41E3A]/30 text-[#C41E3A] text-xs font-bold uppercase tracking-wide mb-6">
            Section 10 — Homepage UX Structure (Updated v2.0)
          </div>
          <h2 className="text-3xl lg:text-5xl mb-4 text-foreground font-bold">
            Justrite Safety Group Ecommerce Homepage
          </h2>
          <div className="h-1 w-16 bg-[#C41E3A] mb-6" />
          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
            Professional B2B industrial ecommerce homepage with Amazon-style product discovery, redesigned 4-column mega menus with exact document content, and Justrite brand guidelines
          </p>
        </motion.div>

        {/* HOMEPAGE PROTOTYPE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[1440px] mx-auto border border-foreground/20 rounded-lg shadow-2xl bg-white overflow-hidden relative"
        >
          {/* UTILITY BAR */}
          <div className="bg-[#2D2D2D] text-white h-[36px] flex items-center justify-between px-12 text-sm">
            <div className="flex items-center gap-6">
              <span className="text-white/90">Protecting people, property, and the planet.</span>
            </div>
            <div className="flex items-center gap-5">
              <button className="hover:text-[#FDB927] transition-colors flex items-center gap-1.5 text-xs">
                <MapPin className="w-3.5 h-3.5" />
                Distributor Locator
              </button>
              <button className="hover:text-[#FDB927] transition-colors flex items-center gap-1.5 text-xs">
                <Phone className="w-3.5 h-3.5" />
                Technical Support
              </button>
              <button className="hover:text-[#FDB927] transition-colors flex items-center gap-1.5 text-xs">
                <User className="w-3.5 h-3.5" />
                Contact Safety Expert
              </button>
              <button className="hover:text-[#FDB927] transition-colors flex items-center gap-1.5 text-xs">
                <Globe className="w-3.5 h-3.5" />
                Language Selector
              </button>
            </div>
          </div>

          {/* MAIN HEADER */}
          <div 
            className={`bg-white transition-all ${isSticky ? 'sticky top-0 z-50 shadow-lg' : ''}`}
          >
            {/* Top Header Row */}
            <div className="border-b border-gray-200 px-12 py-4 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C41E3A] rounded flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C41E3A] tracking-tight leading-none">Justrite</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider font-semibold">Safety Group</div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl mx-12">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Search products, part numbers, or hazards"
                    className="w-full px-4 py-3 pl-12 pr-24 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#FDB927] transition-colors"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-[#FDB927] text-gray-900 text-sm font-bold rounded hover:bg-[#E5A820] transition-colors">
                    Search
                  </button>
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-5">
                <button className="text-sm font-semibold text-gray-700 hover:text-[#C41E3A] transition-colors flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Account
                </button>
                <button className="relative text-sm font-semibold text-gray-700 hover:text-[#C41E3A] transition-colors flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Cart
                </button>
                <button className="px-6 py-2.5 bg-[#C41E3A] text-white text-sm font-bold rounded hover:bg-[#A01729] transition-colors shadow-sm">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Navigation Bar with Mega Menus */}
            <div className="bg-gray-50 border-b border-gray-200 relative">
              <div className="px-12 flex items-center justify-start">
                {megaMenus.map((menu) => (
                  <div 
                    key={menu.id}
                    className="relative"
                    onMouseEnter={() => setActiveMegaMenu(menu.id)}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                  >
                    <button className="px-3 py-3 text-xs font-bold text-gray-700 hover:text-[#C41E3A] hover:bg-white transition-all uppercase tracking-wide whitespace-nowrap flex items-center gap-1">
                      {menu.title}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Mega Menu Panel - Positioned Below Nav Bar */}
              {activeMegaMenu && (
                <div 
                  className="absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-lg z-[100]"
                  onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  {/* NEW UNIFIED MEGA MENU FOR ALL CATEGORIES */}
                  {megaMenus.map((menu) => (
                    activeMegaMenu === menu.id && (
                      <div key={menu.id} className="px-8 py-6">
                        {/* Brand Header */}
                        <div className="mb-5 pb-3 border-b border-gray-200">
                          <div className="flex items-center gap-3 mb-2">
                            {/* Brand Logo Image for 4 main brands */}
                            {menu.id === 'hazardous-storage' && (
                              <>
                                <img 
                                  src={justriteLogo} 
                                  alt="Justrite" 
                                  className="h-6 w-auto"
                                />
                                <div className="w-1 h-4 bg-gray-300" />
                              </>
                            )}
                            {menu.id === 'spill-control' && (
                              <>
                                <img 
                                  src={eagleLogo} 
                                  alt="Eagle" 
                                  className="h-7 w-auto"
                                />
                                <div className="w-1 h-4 bg-gray-300" />
                              </>
                            )}
                            {menu.id === 'motion-safety' && (
                              <>
                                <img 
                                  src={checkersLogo} 
                                  alt="Checkers" 
                                  className="h-6 w-auto"
                                />
                                <div className="w-1 h-4 bg-gray-300" />
                              </>
                            )}
                            {menu.id === 'workplace-ergonomics' && (
                              <>
                                <img 
                                  src={notraxLogo} 
                                  alt="NoTrax" 
                                  className="h-6 w-auto"
                                />
                                <div className="w-1 h-4 bg-gray-300" />
                              </>
                            )}
                            {/* For non-brand menus */}
                            {!['hazardous-storage', 'spill-control', 'motion-safety', 'workplace-ergonomics'].includes(menu.id) && (
                              <>
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: menu.brandColor }} />
                                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: menu.brandColor }}>
                                  {menu.brand}
                                </span>
                                <div className="w-1 h-4 bg-gray-300 ml-1" />
                              </>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{menu.description}</p>
                        </div>

                        {/* Dynamic Column Layout */}
                        <div className="grid gap-5" style={{ gridTemplateColumns: `repeat(${menu.columns.length}, 1fr)` }}>
                          {menu.columns.map((column, idx) => (
                            <div key={idx}>
                              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5 pb-1 border-b border-gray-300">
                                {column.title}
                              </h4>
                              <ul className="space-y-1.5">
                                {column.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <button className="text-sm text-gray-700 hover:text-[#C41E3A] transition-colors text-left w-full group flex items-start gap-1">
                                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 flex-shrink-0" />
                                      <span className="leading-tight">{item}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Featured Products */}
                        {menu.featuredProducts && (
                          <div className="mt-8 pt-6 border-t border-gray-200">
                            <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                              Featured Products
                            </h5>
                            <div className="grid grid-cols-4 gap-4">
                              {menu.featuredProducts.map((product, idx) => (
                                <button key={idx} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-[#C41E3A] hover:shadow-lg transition-all group text-left">
                                  <div className="aspect-square bg-white p-4 overflow-hidden">
                                    <ImageWithFallback
                                      src={product.image}
                                      alt={product.name}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <div className="p-3">
                                    <h6 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#C41E3A] transition-colors">{product.name}</h6>
                                    <p className="text-xs text-gray-600">{product.description}</p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* HERO SECTION */}
          <div className="relative h-[620px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763665814842-f2526387dfb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Industrial manufacturing facility"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="relative h-full px-12 flex items-center max-w-[1280px] mx-auto">
              <div className="max-w-2xl">
                <div className="inline-block px-3 py-1 bg-[#FDB927] text-gray-900 text-xs font-bold uppercase tracking-wider rounded mb-6">
                  Industrial Safety Solutions
                </div>
                <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                  Safer Workplaces Start With the Right Safety Equipment
                </h1>
                <p className="text-xl text-white/90 mb-10 leading-relaxed">
                  Industrial safety equipment designed to help organizations manage hazardous materials, prevent spills, and protect workers.
                </p>
                <div className="flex items-center gap-4">
                  <button className="px-8 py-4 bg-[#C41E3A] text-white font-bold rounded hover:bg-[#A01729] transition-all shadow-lg text-base">
                    Explore Safety Solutions
                  </button>
                  <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded hover:bg-gray-100 transition-all text-base">
                    Find a Product
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2 - QUICK SOLUTION CATEGORIES */}
          <div className="py-20 px-12 bg-white">
            <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-4 gap-8">
                {[
                  { 
                    title: 'Hazardous Storage',
                    description: 'Safety cabinets, cans, and gas cylinder storage solutions',
                    icon: Flame,
                    color: '#C41E3A',
                    image: 'https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
                  },
                  { 
                    title: 'Spill Control',
                    description: 'Containment pallets, spill kits, and absorbent solutions',
                    icon: Droplet,
                    color: '#1976D2',
                    image: 'https://images.unsplash.com/photo-1706440327339-a56601e98e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
                  },
                  { 
                    title: 'Motion Safety',
                    description: 'Wheel chocks, cable protectors, and ground protection',
                    icon: Cable,
                    color: '#F57C00',
                    image: 'https://images.unsplash.com/photo-1489689680823-fdc334aa73a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
                  },
                  { 
                    title: 'Workplace Ergonomics',
                    description: 'Anti-fatigue mats, entrance matting, and specialty mats',
                    icon: Grid3x3,
                    color: '#388E3C',
                    image: 'https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
                  }
                ].map((category, idx) => (
                  <button key={idx} className="group relative h-80 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-[#C41E3A] hover:shadow-2xl transition-all">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                      <category.icon 
                        className="w-12 h-12 mb-4" 
                        style={{ color: category.color }}
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-sm text-white/80">{category.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SHOP BY CATEGORY - Amazon Style */}
          <div className="py-16 px-12 bg-white">
            <div className="max-w-[1280px] mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Shop by Category</h2>
              <div className="grid grid-cols-4 gap-5">
                {shopByCategory.map((category, idx) => (
                  <button key={idx} className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-[#C41E3A] hover:shadow-lg transition-all">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#C41E3A] transition-colors text-center">
                        {category.name}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FEATURED PRODUCTS - Amazon Style */}
          <div className="py-16 px-12 bg-gray-50">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
                <button className="text-sm font-bold text-[#C41E3A] hover:underline flex items-center gap-2">
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-6">
                {featuredProducts.map((product, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all group relative">
                    {product.badge && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className={`${product.badgeColor} text-white px-2.5 py-1 text-xs font-bold uppercase rounded shadow-sm`}>
                          {product.badge}
                        </span>
                      </div>
                    )}
                    <div className="aspect-square bg-gray-50 p-6 overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-[#FDB927] text-[#FDB927]' : 'text-gray-300'}`} />
                        ))}
                        <span className="text-xs text-gray-600 ml-2">({product.reviews})</span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 min-h-[40px]">{product.name}</h3>
                      <p className="text-xs text-gray-600 mb-4">Model: {product.model}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-sm font-bold text-[#C41E3A]">{product.price}</span>
                        <button className="px-4 py-2 bg-[#C41E3A] text-white text-xs font-bold rounded hover:bg-[#A01729] transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOST POPULAR / QUICK BUY - Amazon Style */}
          <div className="py-16 px-12 bg-white">
            <div className="max-w-[1280px] mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Most Popular Products</h2>
              <p className="text-gray-600 mb-10">Frequently purchased items by safety professionals</p>
              <div className="grid grid-cols-6 gap-4">
                {mostPopular.map((product, idx) => (
                  <button key={idx} className="group p-4 border border-gray-200 rounded-lg hover:border-[#C41E3A] hover:shadow-md transition-all bg-white">
                    <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xs font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-[10px] text-gray-600">{product.model}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CROSS-BRAND SOLUTION SYSTEM */}
          <div className="py-16 px-12 bg-gray-900 text-white">
            <div className="max-w-[1280px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Integrated Safety Solutions</h2>
                <p className="text-white/80">Complete workplace safety scenarios with products from our multi-brand ecosystem</p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { 
                    title: 'Chemical Storage Area',
                    products: ['Safety Cabinet', 'Spill Pallet', 'Anti-Fatigue Mat'],
                    image: 'https://images.unsplash.com/photo-1648765338076-fbe07014ccd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
                  },
                  { 
                    title: 'Loading Dock Safety',
                    products: ['Wheel Chocks', 'Cable Protectors', 'Ground Protection'],
                    image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
                  },
                  { 
                    title: 'Manufacturing Floor',
                    products: ['Drum Storage', 'Spill Containment', 'Safety Matting'],
                    image: 'https://images.unsplash.com/photo-1763665814842-f2526387dfb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
                  }
                ].map((scenario, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#FDB927] transition-all group">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={scenario.image}
                        alt={scenario.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">{scenario.title}</h3>
                      <ul className="space-y-2 mb-5">
                        {scenario.products.map((product, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2 text-sm text-white/80">
                            <ChevronRight className="w-4 h-4 text-[#FDB927]" />
                            {product}
                          </li>
                        ))}
                      </ul>
                      <button className="text-sm font-bold text-[#FDB927] hover:underline">
                        View Complete Solution →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INDUSTRY SOLUTIONS */}
          <div className="py-16 px-12 bg-white">
            <div className="max-w-[1280px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions by Industry</h2>
                <p className="text-gray-600">Tailored safety solutions for industry-specific hazards and regulations</p>
              </div>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { name: 'Manufacturing', icon: Factory, image: 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
                  { name: 'Construction', icon: Building2, image: 'https://images.unsplash.com/photo-1768678123167-4c8347817f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
                  { name: 'Warehousing', icon: Package, image: 'https://images.unsplash.com/photo-1725781535657-29d825bc7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
                  { name: 'Laboratories', icon: Beaker, image: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' }
                ].map((industry, idx) => (
                  <button key={idx} className="group relative h-64 rounded-lg overflow-hidden border border-gray-200 hover:border-[#C41E3A] hover:shadow-xl transition-all">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <industry.icon className="w-10 h-10 text-[#FDB927] mb-3" />
                      <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                      <span className="text-sm text-white/80 hover:text-[#FDB927] font-semibold">
                        Explore Solutions →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SAFETY KNOWLEDGE CENTER */}
          <div className="py-16 px-12 bg-gray-50">
            <div className="max-w-[1280px] mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Safety Knowledge & Resources</h2>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { title: 'OSHA Compliance Guide', icon: ShieldCheck, description: 'Stay compliant with latest OSHA regulations' },
                  { title: 'Chemical Storage Safety', icon: Flame, description: 'Best practices for hazardous material storage' },
                  { title: 'Spill Response Planning', icon: Droplet, description: 'Emergency response protocols and procedures' }
                ].map((resource, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#C41E3A] hover:shadow-lg transition-all group">
                    <resource.icon className="w-12 h-12 text-[#C41E3A] mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                    <button className="text-sm font-bold text-[#C41E3A] hover:underline flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TRUST & COMPLIANCE */}
          <div className="py-16 px-12 bg-white border-t border-gray-200">
            <div className="max-w-[1280px] mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Designed for Compliance & Safety</h2>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                Our products are designed to meet regulatory compliance and workplace safety standards
              </p>
              <div className="flex items-center justify-center gap-12">
                {[
                  { name: 'OSHA', icon: ShieldCheck },
                  { name: 'NFPA', icon: Flame },
                  { name: 'EPA', icon: Droplet },
                  { name: 'ISO', icon: Award }
                ].map((cert, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-300">
                      <cert.icon className="w-8 h-8 text-[#C41E3A]" />
                    </div>
                    <span className="text-sm font-bold text-gray-700">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* EXPERT CONSULTATION */}
          <div className="py-16 px-12 bg-gradient-to-r from-[#C41E3A] to-[#A01729] text-white">
            <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 hover:bg-white/20 transition-all cursor-pointer">
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Talk to Safety Expert</h3>
                  <p className="text-white/90 mb-5">Get personalized guidance from our safety professionals</p>
                  <button className="text-sm font-bold text-[#FDB927] hover:underline">
                    Contact Expert →
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 hover:bg-white/20 transition-all cursor-pointer">
                  <FileText className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Request Site Assessment</h3>
                  <p className="text-white/90 mb-5">Professional evaluation of your workplace safety needs</p>
                  <button className="text-sm font-bold text-[#FDB927] hover:underline">
                    Schedule Assessment →
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 hover:bg-white/20 transition-all cursor-pointer">
                  <MapPin className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Find Distributor</h3>
                  <p className="text-white/90 mb-5">Locate authorized distributors in your area</p>
                  <button className="text-sm font-bold text-[#FDB927] hover:underline">
                    Search Now →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="bg-[#2D2D2D] text-white py-12 px-12">
            <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-5 gap-8 mb-10">
                <div>
                  <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-[#FDB927]">Products</h4>
                  <ul className="space-y-2.5 text-sm text-white/80">
                    <li><button className="hover:text-white transition-colors">Hazardous Storage</button></li>
                    <li><button className="hover:text-white transition-colors">Spill Control</button></li>
                    <li><button className="hover:text-white transition-colors">Motion Safety</button></li>
                    <li><button className="hover:text-white transition-colors">Ergonomics</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-[#FDB927]">Industries</h4>
                  <ul className="space-y-2.5 text-sm text-white/80">
                    <li><button className="hover:text-white transition-colors">Manufacturing</button></li>
                    <li><button className="hover:text-white transition-colors">Construction</button></li>
                    <li><button className="hover:text-white transition-colors">Warehousing</button></li>
                    <li><button className="hover:text-white transition-colors">Laboratories</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-[#FDB927]">Resources</h4>
                  <ul className="space-y-2.5 text-sm text-white/80">
                    <li><button className="hover:text-white transition-colors">Safety Guides</button></li>
                    <li><button className="hover:text-white transition-colors">Compliance Docs</button></li>
                    <li><button className="hover:text-white transition-colors">Product Catalogs</button></li>
                    <li><button className="hover:text-white transition-colors">Training Videos</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-[#FDB927]">Brands</h4>
                  <ul className="space-y-2.5 text-sm text-white/80">
                    <li><button className="hover:text-white transition-colors">Justrite</button></li>
                    <li><button className="hover:text-white transition-colors">Eagle</button></li>
                    <li><button className="hover:text-white transition-colors">Checkers</button></li>
                    <li><button className="hover:text-white transition-colors">NoTrax</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-[#FDB927]">Company</h4>
                  <ul className="space-y-2.5 text-sm text-white/80">
                    <li><button className="hover:text-white transition-colors">About Us</button></li>
                    <li><button className="hover:text-white transition-colors">Contact</button></li>
                    <li><button className="hover:text-white transition-colors">Careers</button></li>
                    <li><button className="hover:text-white transition-colors">News</button></li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <div>© 2024 Justrite Safety Group. All rights reserved.</div>
                <div className="flex gap-6">
                  <button className="hover:text-white transition-colors">Privacy Policy</button>
                  <button className="hover:text-white transition-colors">Terms of Use</button>
                  <button className="hover:text-white transition-colors">Accessibility</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* EXPECTED UX OUTCOME */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-foreground/10"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">Expected UX Outcome</h3>
          <div className="grid grid-cols-4 gap-6">
            {[
              { metric: 'Product Discovery', value: '+45%', description: 'Improved product findability' },
              { metric: 'Cross-Brand Discovery', value: '+40%', description: 'Multi-brand awareness' },
              { metric: 'Quote Requests', value: '+30%', description: 'Lead generation increase' },
              { metric: 'Navigation Clarity', value: '+35%', description: 'Easier site navigation' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-2 border-green-500/20 rounded-lg hover:border-green-500/40 transition-all">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-sm text-foreground/60 mb-2">{item.metric}</div>
                <div className="text-5xl font-bold text-green-600 mb-2">{item.value}</div>
                <div className="text-xs text-foreground/50">{item.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
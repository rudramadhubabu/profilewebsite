// Enhanced Mega Menu Data Structure with ALL UX Improvements
import { 
  Boxes, Container, TestTube, Recycle, Wrench, FileCheck, Video, Download,
  HelpCircle, Flame, Droplet, ShieldCheck, Package
} from 'lucide-react';

export const enhancedHazardousStorageMegaMenu = {
  id: 'hazardous-storage',
  title: 'HAZARDOUS STORAGE',
  brand: 'Justrite',
  brandColor: '#C41E3A',
  description: 'Hazardous Storage solutions help organizations safely store flammable liquids, corrosive chemicals, and hazardous materials while complying with OSHA and NFPA safety regulations.',
  
  // Recently Viewed Products
  recentlyViewed: [
    {
      name: 'Sure-Grip® EX Cabinet',
      model: '894500',
      image: 'https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      badge: 'Recently Viewed'
    }
  ],
  
  // Industry Filters
  industryFilters: [
    { name: 'All Industries', icon: Package, active: true },
    { name: 'Manufacturing', icon: Boxes, active: false },
    { name: 'Construction', icon: Wrench, active: false },
    { name: 'Laboratories', icon: TestTube, active: false }
  ],
  
  columns: [
    {
      title: 'Safety Storage Cabinets',
      icon: Boxes,
      itemCount: 45,
      tooltip: 'OSHA and NFPA compliant storage solutions for hazardous materials',
      subGroups: [
        {
          name: 'Cabinet Types',
          items: [
            { 
              name: 'Flammable Liquid Storage Cabinets', 
              badge: 'Popular',
              badgeColor: '#C41E3A',
              thumbnail: 'https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=40',
              compliance: ['OSHA', 'NFPA'],
              count: 24
            },
            { 
              name: 'Combustible Liquid Storage Cabinets',
              count: 18
            },
            { 
              name: 'Corrosive Chemical Storage Cabinets',
              badge: 'New',
              badgeColor: '#10B981',
              thumbnail: 'https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=40',
              compliance: ['EPA'],
              count: 15
            },
            { 
              name: 'Hazardous Material Storage Cabinets',
              count: 12
            },
            { 
              name: 'Laboratory Safety Cabinets',
              compliance: ['OSHA', 'NFPA'],
              count: 20
            },
            { 
              name: 'Pesticide & Insecticide Storage Cabinets',
              count: 8
            },
            { 
              name: 'Flammable Waste Storage Cabinets',
              count: 10
            }
          ]
        },
        {
          name: 'Specialized Formats',
          items: [
            { 
              name: 'Under-counter Safety Cabinets',
              badge: 'Best Seller',
              badgeColor: '#F59E0B',
              thumbnail: 'https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=40',
              count: 14
            },
            { name: 'Slim Safety Cabinets', count: 9 },
            { name: 'Outdoor Safety Cabinets', count: 11 },
            { name: 'Drum Storage Cabinets', count: 7 }
          ]
        },
        {
          name: 'Accessories',
          items: [
            { name: 'Cabinet Shelving' },
            { name: 'Cabinet Grounding Kits' },
            { name: 'Seismic Brackets' },
            { name: 'Safety Labels & Compliance Tags' }
          ]
        }
      ],
      viewAllLink: '/products/safety-cabinets',
      helpCTA: {
        text: 'Need help choosing the right cabinet?',
        link: '/cabinet-selection-guide'
      }
    },
    {
      title: 'Safety Cans & Containers',
      icon: Container,
      itemCount: 38,
      tooltip: 'Safe dispensing and transport of hazardous liquids',
      subGroups: [
        {
          name: 'Safety Cans',
          items: [
            { 
              name: 'Type I Safety Cans',
              badge: 'Popular',
              badgeColor: '#C41E3A',
              thumbnail: 'https://images.unsplash.com/photo-1764231502962-a246b3fca4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=40',
              compliance: ['OSHA', 'DOT'],
              count: 32
            },
            { 
              name: 'Type II Safety Cans',
              thumbnail: 'https://images.unsplash.com/photo-1764231502962-a246b3fca4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=40',
              compliance: ['OSHA'],
              count: 28
            },
            { name: 'DOT Safety Cans', compliance: ['DOT'], count: 18 },
            { name: 'Plastic Safety Cans', count: 15 }
          ]
        },
        {
          name: 'Waste Containers',
          items: [
            { 
              name: 'Waste Disposal Safety Containers',
              badge: 'Best Seller',
              badgeColor: '#F59E0B',
              count: 22
            },
            { name: 'Oily Waste Cans', count: 16 },
            { name: 'Self-Closing Waste Containers', count: 14 }
          ]
        },
        {
          name: 'Laboratory Containers',
          items: [
            { name: 'HPLC Safety Containers', count: 12 },
            { name: 'Laboratory Solvent Waste Systems', count: 10 },
            { name: 'Laboratory Carboys', count: 8 }
          ]
        },
        {
          name: 'Cleaning Equipment',
          items: [
            { name: 'Parts Cleaning Tanks' },
            { name: 'Surface Cleaning Containers' }
          ]
        }
      ],
      viewAllLink: '/products/safety-cans',
      helpCTA: {
        text: 'Which safety can do I need?',
        link: '/safety-can-guide'
      }
    },
    {
      title: 'Chemical & Gas Storage',
      icon: TestTube,
      itemCount: 28,
      tooltip: 'Cylinders, aerosols, and hazardous waste solutions',
      subGroups: [
        {
          name: 'Gas Cylinder Safety',
          items: [
            { 
              name: 'Gas Cylinder Storage Cabinets',
              thumbnail: 'https://images.unsplash.com/photo-1583193123517-09ef9447412c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=40',
              compliance: ['OSHA'],
              count: 16
            },
            { name: 'Gas Cylinder Racks', count: 12 },
            { name: 'Gas Cylinder Carts', count: 10 },
            { name: 'Gas Cylinder Stands & Brackets', count: 8 },
            { name: 'Forklift Cylinder Pallets', count: 6 }
          ]
        },
        {
          name: 'Hazardous Waste Handling',
          items: [
            { name: 'Hazardous Waste Collection Containers', count: 14 },
            { name: 'Drum Funnels' },
            { name: 'Drum Pumps' }
          ]
        },
        {
          name: 'Aerosol Container Handling',
          items: [
            { 
              name: 'Aerosol Can Disposal Systems',
              badge: 'Eco-Friendly',
              badgeColor: '#10B981'
            },
            { name: 'Aerosol Recycling Systems' },
            { name: 'Propane Cylinder Recycling' }
          ]
        }
      ],
      viewAllLink: '/products/gas-storage',
      helpCTA: {
        text: 'Cylinder storage requirements?',
        link: '/cylinder-storage-guide'
      }
    },
    {
      title: 'Safety Resources',
      icon: FileCheck,
      itemCount: 12,
      tooltip: 'Compliance guides and educational materials',
      subGroups: [
        {
          name: 'Guides',
          items: [
            { 
              name: 'Flammable Liquid Storage Guide',
              type: 'PDF',
              icon: Download,
              downloads: '12.4k'
            },
            { 
              name: 'Chemical Compatibility Guide',
              type: 'PDF',
              icon: Download,
              downloads: '8.7k'
            },
            { 
              name: 'Safety Cabinet Selection Guide',
              type: 'Interactive',
              icon: HelpCircle,
              badge: 'Popular'
            },
            { 
              name: 'Hazardous Material Storage Regulations',
              type: 'PDF'
            }
          ]
        },
        {
          name: 'Compliance',
          items: [
            { 
              name: 'OSHA Storage Requirements',
              type: 'Video',
              icon: Video,
              duration: '12 min'
            },
            { 
              name: 'NFPA Safety Cabinet Standards',
              type: 'PDF'
            },
            { 
              name: 'EPA Hazardous Waste Storage Regulations',
              type: 'PDF'
            }
          ]
        }
      ],
      viewAllLink: '/resources/safety-guides',
      helpCTA: {
        text: 'Talk to a safety expert',
        link: '/contact-expert',
        primary: true
      }
    }
  ],
  
  // Enhanced Featured Products Section
  featuredProducts: [
    {
      name: 'Flammable Safety Cabinet',
      description: 'Sure-Grip® EX 45 Gal Cabinet',
      model: '894500',
      image: 'https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      badge: 'Best Seller',
      badgeColor: '#C41E3A',
      rating: 4.9,
      reviews: 342,
      compliance: ['OSHA', 'NFPA'],
      availability: 'In Stock',
      price: 'Request Quote'
    },
    {
      name: 'Type I Safety Can',
      description: 'AccuFlow™ 5 Gal Steel Can',
      model: '7150110',
      image: 'https://images.unsplash.com/photo-1764231502962-a246b3fca4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      badge: 'Popular',
      badgeColor: '#F59E0B',
      rating: 4.8,
      reviews: 289,
      compliance: ['OSHA', 'DOT'],
      availability: 'In Stock',
      price: 'Request Quote'
    },
    {
      name: 'Corrosive Storage Cabinet',
      description: 'Polyethylene 30 Gal Cabinet',
      model: 'CRR3020',
      image: 'https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      badge: 'New',
      badgeColor: '#10B981',
      rating: 4.7,
      reviews: 156,
      compliance: ['EPA'],
      availability: 'Made to Order',
      price: 'Request Quote'
    }
  ],
  
  // Related Products Suggestions
  relatedProducts: {
    title: 'Customers Also Viewed',
    items: [
      {
        name: 'Spill Containment Pallet',
        image: 'https://images.unsplash.com/photo-1706440327339-a56601e98e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200'
      },
      {
        name: 'Anti-Fatigue Mat',
        image: 'https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200'
      }
    ]
  }
};

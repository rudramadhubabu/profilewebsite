import { ChevronRight, Shield, FileText, Download, HelpCircle, BookOpen, ExternalLink } from 'lucide-react';

interface PremiumMegaMenuProps {
  menuData: any;
  brandColor: string;
}

export function PremiumMegaMenu({ menuData, brandColor }: PremiumMegaMenuProps) {
  
  const ComplianceBadge = ({ type }: { type: string }) => {
    const badges: Record<string, { color: string; bg: string }> = {
      'OSHA': { color: '#DC2626', bg: '#FEE2E2' },
      'NFPA': { color: '#EA580C', bg: '#FFEDD5' },
      'EPA': { color: '#059669', bg: '#D1FAE5' },
      'DOT': { color: '#2563EB', bg: '#DBEAFE' }
    };
    const badge = badges[type] || badges['OSHA'];
    
    return (
      <span 
        className="inline-block px-2 py-0.5 rounded text-[10px] font-bold"
        style={{ 
          color: badge.color,
          backgroundColor: badge.bg
        }}
      >
        {type}
      </span>
    );
  };

  return (
    <div className="bg-white">
      {/* Premium Header with Logo & Description */}
      <div className="px-12 py-6 bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-200">
        <div className="flex items-start justify-between">
          {/* Left: Brand Logo & Info */}
          <div className="flex items-start gap-5">
            {/* Logo */}
            <div className="w-16 h-16 bg-[#C41E3A] rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            {/* Brand Name & Description */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold" style={{ color: brandColor }}>
                  {menuData.title}
                </h3>
                <span className="text-xs text-gray-500 font-semibold px-2 py-1 bg-gray-100 rounded">
                  {menuData.brand}
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {menuData.description}
              </p>
            </div>
          </div>
          
          {/* Right: Quick Action */}
          <button className="px-6 py-3 bg-[#C41E3A] text-white text-sm font-bold rounded-lg hover:bg-[#A01729] transition-all shadow-md hover:shadow-lg flex items-center gap-2 flex-shrink-0">
            <HelpCircle className="w-4 h-4" />
            Talk to Safety Expert
          </button>
        </div>
      </div>

      {/* Main Content: 4-Column Premium Layout */}
      <div className="px-12 py-8">
        <div className="grid grid-cols-4 gap-10">
          {menuData.columns.map((column: any, colIdx: number) => (
            <div key={colIdx}>
              {/* Column Header */}
              <div className="mb-6 pb-3 border-b-2 border-gray-300">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  {column.title}
                </h4>
              </div>

              {/* Categories */}
              <div className="space-y-7">
                {column.categories.map((category: any, catIdx: number) => (
                  <div key={catIdx} className="group">
                    {/* Category Name - Clickable */}
                    <button className="w-full text-left mb-3 hover:text-[#C41E3A] transition-colors">
                      <h5 className="text-sm font-bold text-gray-900 group-hover:text-[#C41E3A] flex items-center justify-between">
                        {category.name}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h5>
                      {category.description && (
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {category.description}
                        </p>
                      )}
                    </button>

                    {/* Sub-categories */}
                    {category.subCategories && (
                      <ul className="space-y-2 mb-3">
                        {category.subCategories.map((subCat: any, subIdx: number) => (
                          <li key={subIdx}>
                            <button className="text-sm text-gray-700 hover:text-[#C41E3A] hover:underline transition-colors text-left w-full">
                              {subCat.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Configurations */}
                    {category.configurations && (
                      <div className="mb-3">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
                          Configurations
                        </div>
                        <ul className="space-y-1.5">
                          {category.configurations.map((config: any, idx: number) => (
                            <li key={idx}>
                              <button className="text-sm text-gray-700 hover:text-[#C41E3A] transition-colors text-left">
                                {config.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Accessories */}
                    {category.accessories && (
                      <div className="mb-3">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
                          Accessories
                        </div>
                        <ul className="space-y-1.5">
                          {category.accessories.map((accessory: any, idx: number) => (
                            <li key={idx}>
                              <button className="text-sm text-gray-700 hover:text-[#C41E3A] transition-colors text-left">
                                {accessory.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Special Containers */}
                    {category.specialContainers && (
                      <div className="mb-3">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
                          Special Containers
                        </div>
                        <ul className="space-y-1.5">
                          {category.specialContainers.map((container: any, idx: number) => (
                            <li key={idx}>
                              <button className="text-sm text-gray-700 hover:text-[#C41E3A] transition-colors text-left">
                                {container.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Laboratory Containers */}
                    {category.laboratoryContainers && (
                      <div className="mb-3">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
                          Laboratory Containers
                        </div>
                        <ul className="space-y-1.5">
                          {category.laboratoryContainers.map((container: any, idx: number) => (
                            <li key={idx}>
                              <button className="text-sm text-gray-700 hover:text-[#C41E3A] transition-colors text-left">
                                {container.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Examples */}
                    {category.examples && (
                      <ul className="space-y-1.5">
                        {category.examples.map((example: any, idx: number) => (
                          <li key={idx}>
                            <button className="text-sm text-gray-700 hover:text-[#C41E3A] transition-colors text-left">
                              {example.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Guides */}
                    {category.guides && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-4 h-4 text-[#C41E3A]" />
                          <div className="text-xs font-semibold text-gray-700 uppercase">
                            Safety Guides
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {category.guides.map((guide: any, idx: number) => (
                            <li key={idx}>
                              <button className="text-sm text-gray-700 hover:text-[#C41E3A] transition-colors text-left flex items-center gap-2 group">
                                <FileText className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#C41E3A]" />
                                {guide.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Regulatory Information */}
                    {category.regulatoryInfo && (
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <Shield className="w-4 h-4 text-[#C41E3A]" />
                          <div className="text-xs font-bold text-gray-900 uppercase">
                            Regulatory Standards
                          </div>
                        </div>
                        <ul className="space-y-2.5">
                          {category.regulatoryInfo.map((info: any, idx: number) => (
                            <li key={idx}>
                              <button className="text-sm text-gray-700 hover:text-[#C41E3A] transition-colors text-left w-full group">
                                <div className="flex items-start justify-between gap-2">
                                  <span className="flex-1">{info.name}</span>
                                  <ComplianceBadge type={info.cert} />
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                        
                        <button className="mt-4 w-full px-4 py-2.5 bg-[#C41E3A] text-white text-xs font-bold rounded hover:bg-[#A01729] transition-colors flex items-center justify-center gap-2">
                          <Download className="w-3.5 h-3.5" />
                          Download Compliance Guide
                        </button>
                      </div>
                    )}

                    {/* Note */}
                    {category.note && (
                      <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                        <p className="text-xs text-blue-900 leading-relaxed">
                          {category.note}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* UX Benefits Footer */}
        {menuData.uxBenefits && (
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                UX Benefits of This Structure
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {menuData.uxBenefits.map((benefit: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] mt-1.5 flex-shrink-0"></div>
                  <p className="text-xs text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

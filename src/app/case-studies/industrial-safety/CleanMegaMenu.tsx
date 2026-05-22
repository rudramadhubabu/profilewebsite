import { ChevronRight, Download, Video, HelpCircle, Shield, ExternalLink } from 'lucide-react';

interface CleanMegaMenuProps {
  menuData: any;
  brandColor: string;
}

export function CleanMegaMenu({ menuData, brandColor }: CleanMegaMenuProps) {
  
  const ComplianceBadge = ({ type }: { type: string }) => {
    const badges: Record<string, { color: string }> = {
      'OSHA': { color: '#DC2626' },
      'NFPA': { color: '#EA580C' },
      'EPA': { color: '#059669' },
      'DOT': { color: '#2563EB' }
    };
    const badge = badges[type] || badges['OSHA'];
    
    return (
      <span 
        className="inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold border"
        style={{ 
          borderColor: badge.color,
          color: badge.color,
          backgroundColor: 'transparent'
        }}
      >
        {type}
      </span>
    );
  };

  return (
    <div className="px-12 py-8 bg-white">
      {/* Brand Header with Logo Space */}
      <div className="flex items-start justify-between mb-8 pb-5 border-b-2 border-gray-200">
        {/* Left: Brand Logo & Info */}
        <div className="flex items-start gap-4">
          {/* Logo Space */}
          <div className="w-16 h-16 bg-[#C41E3A] rounded flex items-center justify-center flex-shrink-0">
            <Shield className="w-10 h-10 text-white" />
          </div>
          
          {/* Brand Name & Description */}
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold mb-2" style={{ color: brandColor }}>
              {menuData.brand} Hazardous Storage
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {menuData.description}
            </p>
          </div>
        </div>
        
        {/* Right: Quick Action */}
        <button className="px-6 py-3 bg-[#C41E3A] text-white text-sm font-bold rounded hover:bg-[#A01729] transition-colors flex items-center gap-2 flex-shrink-0">
          <HelpCircle className="w-4 h-4" />
          Talk to Safety Expert
        </button>
      </div>

      {/* Clean 4-Column Layout with Better Spacing */}
      <div className="grid grid-cols-4 gap-12">
        {menuData.columns.map((column: any, colIdx: number) => (
          <div key={colIdx}>
            {/* Column Header - Larger & More Visible */}
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5 pb-2.5 border-b-2 border-gray-300">
              {column.title}
            </h4>

            {/* Sub-groups with Items */}
            <div className="space-y-6">
              {column.subGroups?.map((group: any, groupIdx: number) => (
                <div key={groupIdx}>
                  {/* Sub-group Name - More Visible */}
                  {group.name && (
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                      {group.name}
                    </div>
                  )}
                  
                  {/* Items - Improved Spacing & Size */}
                  <ul className="space-y-2.5">
                    {group.items.slice(0, 7).map((item: any, itemIdx: number) => (
                      <li key={itemIdx}>
                        <button className="text-sm text-gray-700 hover:text-[#C41E3A] transition-colors text-left w-full group leading-relaxed">
                          <div className="flex items-start justify-between gap-3">
                            <span className="flex-1">{item.name}</span>
                            
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              {/* Item Count - Larger */}
                              {item.count && (
                                <span className="text-xs text-gray-400 font-semibold">({item.count})</span>
                              )}
                              
                              {/* Compliance Badges - Only for top 3 items */}
                              {itemIdx < 3 && item.compliance && item.compliance.length > 0 && (
                                <div className="flex gap-1">
                                  {item.compliance.slice(0, 2).map((cert: string, certIdx: number) => (
                                    <ComplianceBadge key={certIdx} type={cert} />
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Show "View All" if more than 7 items */}
                  {group.items.length > 7 && (
                    <button className="mt-3 text-xs text-[#C41E3A] hover:underline font-bold flex items-center gap-1">
                      View All {group.name} ({group.items.length})
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Products - Cleaner Layout */}
      {menuData.featuredProducts && (
        <div className="mt-10 pt-8 border-t-2 border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Featured Products
            </h5>
            <button className="text-sm text-[#C41E3A] hover:underline font-bold flex items-center gap-1">
              View All Featured
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {menuData.featuredProducts.map((product: any, idx: number) => (
              <div key={idx} className="group">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[#C41E3A] hover:shadow-lg transition-all">
                  <div className="flex gap-5">
                    {/* Product Image - Slightly Larger */}
                    <div className="w-24 h-24 bg-white rounded border border-gray-200 flex-shrink-0 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    
                    {/* Product Info - Better Spacing */}
                    <div className="flex-1 min-w-0">
                      <h6 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#C41E3A] transition-colors line-clamp-2">
                        {product.name}
                      </h6>
                      <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                      
                      {/* Compliance Badges */}
                      {product.compliance && (
                        <div className="flex gap-1.5 mb-3">
                          {product.compliance.map((cert: string, certIdx: number) => (
                            <ComplianceBadge key={certIdx} type={cert} />
                          ))}
                        </div>
                      )}
                      
                      <button className="text-sm font-bold text-[#C41E3A] hover:underline flex items-center gap-1">
                        View Details
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
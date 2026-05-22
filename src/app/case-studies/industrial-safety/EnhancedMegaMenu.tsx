import { 
  ChevronRight, ShieldCheck, CheckCircle, Download, Video, 
  HelpCircle, Eye, Info, Sparkles, Clock
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';

interface EnhancedMegaMenuProps {
  menuData: any;
  brandColor: string;
}

export function EnhancedMegaMenu({ menuData, brandColor }: EnhancedMegaMenuProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [tooltip, setTooltip] = useState<string | null>(null);

  const ComplianceBadge = ({ type }: { type: string }) => {
    const badges: Record<string, { color: string; icon: any }> = {
      'OSHA': { color: '#C41E3A', icon: ShieldCheck },
      'NFPA': { color: '#F59E0B', icon: ShieldCheck },
      'EPA': { color: '#10B981', icon: ShieldCheck },
      'DOT': { color: '#3B82F6', icon: ShieldCheck }
    };
    const badge = badges[type] || badges['OSHA'];
    const Icon = badge.icon;
    
    return (
      <div 
        className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold"
        style={{ backgroundColor: `${badge.color}15`, color: badge.color }}
      >
        <Icon className="w-2.5 h-2.5" />
        {type}
      </div>
    );
  };

  return (
    <div className="px-8 py-6">
      {/* Brand Header */}
      <div className="mb-5 pb-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandColor }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: brandColor }}>
                {menuData.brand}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{menuData.description}</p>
          </div>
          
          {/* Recently Viewed - if exists */}
          {menuData.recentlyViewed && menuData.recentlyViewed.length > 0 && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <div className="flex gap-2">
                {menuData.recentlyViewed.map((product: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-8 h-8 object-cover rounded"
                    />
                    <div>
                      <div className="text-[10px] text-gray-500">Recently Viewed</div>
                      <div className="text-xs font-semibold text-gray-900">{product.model}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Industry Filters */}
        {menuData.industryFilters && (
          <div className="flex items-center gap-2 mt-3">
            <Eye className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[10px] text-gray-500 font-semibold uppercase">Filter by Industry:</span>
            {menuData.industryFilters.map((filter: any, idx: number) => {
              const Icon = filter.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIndustry(filter.name)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-bold transition-all ${
                    selectedIndustry === filter.name
                      ? 'bg-[#C41E3A] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {filter.name}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Columns with Sub-groups */}
      <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${menuData.columns.length}, 1fr)` }}>
        {menuData.columns.map((column: any, colIdx: number) => {
          const Icon = column.icon;
          return (
            <div key={colIdx} className="relative">
              {/* Column Header with Icon */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-gray-300">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" style={{ color: brandColor }} />
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    {column.title}
                  </h4>
                  {column.itemCount && (
                    <span className="text-[10px] text-gray-500 font-semibold">({column.itemCount})</span>
                  )}
                </div>
                
                {/* Tooltip Icon */}
                {column.tooltip && (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setTooltip(column.tooltip)}
                      onMouseLeave={() => setTooltip(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>
                    {tooltip === column.tooltip && (
                      <div className="absolute top-full right-0 mt-1 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-50">
                        {column.tooltip}
                        <div className="absolute -top-1 right-2 w-2 h-2 bg-gray-900 transform rotate-45" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sub-groups */}
              <div className="space-y-4">
                {column.subGroups?.map((group: any, groupIdx: number) => (
                  <div key={groupIdx}>
                    {/* Sub-group Name */}
                    {group.name && (
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                        {group.name}
                      </div>
                    )}
                    
                    {/* Items */}
                    <ul className="space-y-1.5">
                      {group.items.map((item: any, itemIdx: number) => (
                        <li key={itemIdx}>
                          <button className="text-sm text-gray-700 hover:text-[#C41E3A] transition-colors text-left w-full group flex items-start gap-2">
                            {/* Thumbnail if exists */}
                            {item.thumbnail && (
                              <ImageWithFallback
                                src={item.thumbnail}
                                alt={item.name}
                                className="w-10 h-10 object-cover rounded border border-gray-200 flex-shrink-0"
                              />
                            )}
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                <span className="leading-tight">{item.name}</span>
                                
                                {/* Badge */}
                                {item.badge && (
                                  <span 
                                    className="px-1.5 py-0.5 rounded text-[9px] font-bold text-white flex-shrink-0"
                                    style={{ backgroundColor: item.badgeColor }}
                                  >
                                    {item.badge}
                                  </span>
                                )}
                                
                                {/* Item Count */}
                                {item.count && (
                                  <span className="text-[10px] text-gray-400">({item.count})</span>
                                )}
                                
                                {/* Resource Type */}
                                {item.type && (
                                  <span className="text-[9px] text-gray-500 font-semibold px-1.5 py-0.5 bg-gray-100 rounded">
                                    {item.type}
                                  </span>
                                )}
                                
                                {/* Downloads/Duration */}
                                {item.downloads && (
                                  <span className="text-[9px] text-gray-400 flex items-center gap-0.5">
                                    <Download className="w-2.5 h-2.5" />
                                    {item.downloads}
                                  </span>
                                )}
                                {item.duration && (
                                  <span className="text-[9px] text-gray-400">{item.duration}</span>
                                )}
                              </div>
                              
                              {/* Compliance Badges */}
                              {item.compliance && (
                                <div className="flex gap-1 mt-1">
                                  {item.compliance.map((cert: string, certIdx: number) => (
                                    <ComplianceBadge key={certIdx} type={cert} />
                                  ))}
                                </div>
                              )}
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Divider between sub-groups */}
                    {groupIdx < column.subGroups.length - 1 && (
                      <div className="h-px bg-gray-200 my-3" />
                    )}
                  </div>
                ))}
              </div>

              {/* View All Link */}
              {column.viewAllLink && (
                <button className="mt-4 text-xs font-bold hover:underline flex items-center gap-1" style={{ color: brandColor }}>
                  View All {column.title} →
                </button>
              )}

              {/* Help CTA */}
              {column.helpCTA && (
                <div className={`mt-4 p-3 rounded-lg border ${column.helpCTA.primary ? 'bg-[#C41E3A]/5 border-[#C41E3A]/30' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: column.helpCTA.primary ? brandColor : '#6B7280' }} />
                    <div>
                      <div className="text-xs font-semibold text-gray-900 mb-1">
                        {column.helpCTA.text}
                      </div>
                      <button className="text-xs font-bold hover:underline" style={{ color: column.helpCTA.primary ? brandColor : '#4B5563' }}>
                        Get Expert Help →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Enhanced Featured Products */}
      {menuData.featuredProducts && (
        <div className="mt-8 pt-6 border-t-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" style={{ color: brandColor }} />
              <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                Featured Products
              </h5>
            </div>
            <button className="text-xs font-bold hover:underline" style={{ color: brandColor }}>
              View All Featured →
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-5">
            {menuData.featuredProducts.map((product: any, idx: number) => (
              <div key={idx} className="bg-gray-50 border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#C41E3A] hover:shadow-xl transition-all group">
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span 
                      className="px-2.5 py-1 text-[10px] font-bold uppercase rounded shadow-sm text-white"
                      style={{ backgroundColor: product.badgeColor }}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}
                
                {/* Availability Badge */}
                {product.availability && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`flex items-center gap-1 px-2 py-1 text-[10px] font-bold rounded ${
                      product.availability === 'In Stock' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      <CheckCircle className="w-3 h-3" />
                      {product.availability}
                    </span>
                  </div>
                )}
                
                <div className="relative aspect-square bg-white p-4 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-sm ${
                              i < Math.floor(product.rating) ? 'bg-[#FDB927]' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  )}
                  
                  <h6 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#C41E3A] transition-colors">
                    {product.name}
                  </h6>
                  <p className="text-xs text-gray-600 mb-2">{product.description}</p>
                  <p className="text-[10px] text-gray-500 mb-3">Model: {product.model}</p>
                  
                  {/* Compliance Badges */}
                  {product.compliance && (
                    <div className="flex gap-1 mb-3">
                      {product.compliance.map((cert: string, certIdx: number) => (
                        <ComplianceBadge key={certIdx} type={cert} />
                      ))}
                    </div>
                  )}
                  
                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-sm font-bold" style={{ color: brandColor }}>
                      {product.price}
                    </span>
                    <button 
                      className="px-4 py-2 text-xs font-bold rounded transition-colors text-white hover:opacity-90"
                      style={{ backgroundColor: brandColor }}
                    >
                      Quick Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Products Section */}
      {menuData.relatedProducts && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-4 h-4 text-blue-600" />
            <h6 className="text-xs font-bold text-blue-900">{menuData.relatedProducts.title}</h6>
          </div>
          <div className="flex gap-3">
            {menuData.relatedProducts.items.map((item: any, idx: number) => (
              <button key={idx} className="flex items-center gap-2 px-3 py-2 bg-white border border-blue-200 rounded-lg hover:border-blue-400 transition-all">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 object-cover rounded"
                />
                <span className="text-xs font-semibold text-gray-900">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

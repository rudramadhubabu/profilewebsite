export const hazardousStorageMegaMenu = {
  title: "HAZARDOUS STORAGE",
  brand: "Justrite",
  description: "Provide safe storage and handling of flammable liquids, corrosive chemicals, hazardous waste, and compressed gases in industrial workplaces.",
  
  columns: [
    // COLUMN 1: Safety Cabinets & Safety Cans
    {
      title: "Storage Solutions",
      categories: [
        {
          name: "Safety Cabinets",
          description: "Primary storage solution for hazardous chemicals and flammable liquids.",
          subCategories: [
            { name: "Flammable Liquid Storage Cabinets" },
            { name: "Combustible Liquid Storage Cabinets" },
            { name: "Corrosive Chemical Cabinets" },
            { name: "Hazardous Material Cabinets" },
            { name: "Pesticide & Insecticide Cabinets" },
            { name: "Laboratory Safety Cabinets" },
            { name: "Flammable Waste Storage Cabinets" }
          ],
          configurations: [
            { name: "Under-counter cabinets" },
            { name: "Slim cabinets" },
            { name: "Drum storage cabinets" },
            { name: "Outdoor safety cabinets" }
          ],
          accessories: [
            { name: "Cabinet shelving" },
            { name: "Grounding kits" },
            { name: "Seismic brackets" },
            { name: "Cabinet safety labels" }
          ]
        },
        {
          name: "Safety Cans & Liquid Containers",
          description: "Used for safe transport, dispensing, and storage of hazardous liquids.",
          subCategories: [
            { name: "Type I Safety Cans" },
            { name: "Type II Safety Cans" },
            { name: "DOT Safety Cans" },
            { name: "Plastic Safety Cans" }
          ],
          specialContainers: [
            { name: "Oily Waste Cans" },
            { name: "Waste Disposal Safety Containers" },
            { name: "Self-Closing Waste Containers" }
          ],
          laboratoryContainers: [
            { name: "HPLC Containers" },
            { name: "Solvent Waste Systems" },
            { name: "Chemical Carboys" }
          ]
        }
      ]
    },
    
    // COLUMN 2: Chemical Handling & Gas Cylinder Storage
    {
      title: "Handling & Transport",
      categories: [
        {
          name: "Chemical Handling & Waste Containers",
          description: "Solutions designed for hazardous chemical handling and disposal.",
          subCategories: [
            { name: "Hazardous Waste Containers" },
            { name: "Chemical Disposal Containers" },
            { name: "Drum Funnels" },
            { name: "Drum Pumps" },
            { name: "Waste Collection Containers" }
          ],
          note: "These products help ensure safe collection and disposal of hazardous chemicals."
        },
        {
          name: "Gas Cylinder Storage",
          description: "Products designed for safe storage and transportation of compressed gas cylinders.",
          subCategories: [
            { name: "Gas Cylinder Storage Cabinets" },
            { name: "Gas Cylinder Racks" },
            { name: "Gas Cylinder Carts" },
            { name: "Gas Cylinder Stands" },
            { name: "Cylinder Wall Brackets" },
            { name: "Forklift Cylinder Storage Pallets" }
          ]
        }
      ]
    },
    
    // COLUMN 3: Aerosol Safety & Cleaning
    {
      title: "Specialized Solutions",
      categories: [
        {
          name: "Aerosol & Pressurized Container Safety",
          description: "Solutions designed to safely manage pressurized containers.",
          subCategories: [
            { name: "Aerosol Can Disposal Systems" },
            { name: "Aerosol Recycling Systems" },
            { name: "Propane Cylinder Recycling Systems" }
          ],
          note: "These systems help safely puncture and recycle aerosol containers."
        },
        {
          name: "Cleaning & Solvent Handling",
          description: "Used for safe handling of industrial solvents.",
          subCategories: [
            { name: "Parts Cleaning Tanks" },
            { name: "Solvent Cleaning Containers" },
            { name: "Surface Cleaning Containers" }
          ],
          note: "Often used in maintenance workshops and manufacturing facilities."
        },
        {
          name: "Accessories & Replacement Parts",
          description: "Support products for hazardous storage equipment.",
          examples: [
            { name: "Replacement funnels" },
            { name: "Pump components" },
            { name: "Cabinet accessories" },
            { name: "Grounding accessories" },
            { name: "Replacement lids and parts" }
          ]
        }
      ]
    },
    
    // COLUMN 4: Compliance & Safety Resources
    {
      title: "Compliance & Resources",
      categories: [
        {
          name: "Compliance & Safety Resources",
          description: "Educational resources to help organizations meet safety regulations.",
          guides: [
            { name: "Chemical storage safety guide" },
            { name: "Safety cabinet selection guide" },
            { name: "Hazardous material handling guide" }
          ],
          regulatoryInfo: [
            { name: "OSHA storage standards", cert: "OSHA" },
            { name: "NFPA flammable storage guidelines", cert: "NFPA" },
            { name: "EPA hazardous waste rules", cert: "EPA" }
          ]
        }
      ]
    }
  ],
  
  uxBenefits: [
    "Clear hazard-based organization",
    "Logical grouping of related safety products",
    "Reduced navigation depth",
    "Supports both industrial experts and new buyers"
  ]
};

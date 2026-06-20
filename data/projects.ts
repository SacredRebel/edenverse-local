import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    slug: "thriving-orchard",
    title: "Thriving Orchard Restoration",
    description:
      "A comprehensive orchard restoration project that transformed struggling fruit trees into a thriving, productive ecosystem using regenerative agriculture principles.",
    category: "Orchard Care",
    location: "Sonoma County, CA",
    duration: "6 months",
    completedDate: "September 2023",
    clientName: "Sarah & Michael Thompson",
    clientTestimonial:
      "The transformation has been incredible. Our trees went from barely producing fruit to giving us more than we can handle. The soil feels alive again, and we've seen so much wildlife return to our property.",
    challenge:
      "The 20-year-old orchard was suffering from depleted soil, poor drainage, and pest issues. Trees were producing minimal fruit and showing signs of disease.",
    solution:
      "Implemented a holistic approach combining soil remineralization, strategic pruning, companion planting, and natural pest management to restore the ecosystem balance.",
    materials: [
      "Organic compost (15 cubic yards)",
      "Rock dust minerals",
      "Beneficial mycorrhizal fungi",
      "Native companion plants",
      "Natural mulch materials",
      "Organic pest deterrent plants",
    ],
    techniques: [
      "Soil testing and remineralization",
      "Strategic pruning for air circulation",
      "Companion planting with herbs",
      "Mulching for moisture retention",
      "Beneficial insect habitat creation",
      "Natural drainage improvement",
    ],
    results: [
      "300% increase in fruit production",
      "Elimination of pest issues without chemicals",
      "Improved soil health and water retention",
      "Return of beneficial wildlife",
      "Reduced maintenance requirements",
      "Enhanced property value",
    ],
    images: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Before: Struggling fruit trees",
        caption: "Before: Trees struggling with poor soil conditions and minimal fruit production",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Soil analysis and treatment",
        caption: "Comprehensive soil analysis revealed nutrient deficiencies",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Companion planting installation",
        caption: "Installing companion plants to support tree health",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "After: Abundant harvest",
        caption: "After: Abundant fruit production and healthy, vibrant trees",
      },
    ],
    steps: [
      {
        title: "Assessment & Planning",
        description:
          "Comprehensive site evaluation including soil testing, tree health assessment, and ecosystem analysis.",
        duration: "2 weeks",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Site assessment",
            caption: "Initial site evaluation and soil testing",
          },
        ],
      },
      {
        title: "Soil Restoration",
        description:
          "Applied organic amendments, minerals, and beneficial microorganisms to restore soil health and fertility.",
        duration: "1 month",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Soil treatment",
            caption: "Applying organic soil amendments and minerals",
          },
        ],
      },
      {
        title: "Tree Care & Pruning",
        description: "Strategic pruning to improve air circulation, light penetration, and overall tree structure.",
        duration: "3 weeks",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Tree pruning",
            caption: "Professional pruning for optimal tree health",
          },
        ],
      },
      {
        title: "Companion Planting",
        description: "Installed beneficial companion plants to support tree health and create a balanced ecosystem.",
        duration: "2 weeks",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Companion planting",
            caption: "Strategic companion planting around fruit trees",
          },
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "peaceful-altar",
    title: "Sacred Meditation Altar",
    description:
      "A tranquil sacred space designed for meditation and spiritual connection, featuring natural stone arrangements and crystal energy grids.",
    category: "Sacred Spaces",
    location: "Marin County, CA",
    duration: "3 weeks",
    completedDate: "June 2023",
    clientName: "Elena Rodriguez",
    clientTestimonial:
      "This space has become the heart of my daily practice. The energy here is palpable, and I feel so much more grounded and centered since it was completed.",
    challenge:
      "Creating a sacred space that felt both powerful and peaceful while working with the natural slope and existing vegetation of the hillside location.",
    solution:
      "Designed a multi-level stone altar using local materials, incorporated sacred geometry principles, and created natural seating areas that blend seamlessly with the landscape.",
    materials: [
      "Local river stones",
      "Quartz crystal points",
      "Native California plants",
      "Reclaimed cedar wood",
      "Natural sand and gravel",
      "Organic mulch",
    ],
    techniques: [
      "Sacred geometry layout",
      "Natural stone placement",
      "Crystal grid installation",
      "Native plant integration",
      "Energy flow optimization",
      "Sustainable landscaping",
    ],
    results: [
      "Peaceful meditation environment",
      "Enhanced spiritual practice space",
      "Harmonious landscape integration",
      "Low-maintenance design",
      "Increased property tranquility",
      "Wildlife-friendly habitat",
    ],
    images: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Stone altar construction",
        caption: "Carefully placed stones forming the sacred altar base",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Crystal grid installation",
        caption: "Sacred geometry crystal grid arrangement for energy amplification",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Completed meditation space",
        caption: "Completed altar with surrounding native plants and seating areas",
      },
    ],
    steps: [
      {
        title: "Site Preparation",
        description: "Cleared and prepared the hillside location while preserving existing native vegetation.",
        duration: "3 days",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Site clearing",
            caption: "Gentle site preparation preserving natural features",
          },
        ],
      },
      {
        title: "Stone Altar Construction",
        description: "Carefully selected and placed river stones to create the central altar structure.",
        duration: "1 week",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Stone placement",
            caption: "Precise stone placement following sacred geometry principles",
          },
        ],
      },
      {
        title: "Crystal Grid & Finishing",
        description: "Installed crystal grid and completed landscaping with native plants and natural pathways.",
        duration: "1 week",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Final touches",
            caption: "Adding final touches and crystal grid installation",
          },
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "regenerative-garden",
    title: "Regenerative Vegetable Garden",
    description:
      "A complete garden transformation using permaculture principles, companion planting, and natural soil building techniques to create a self-sustaining food production system.",
    category: "Garden Design",
    location: "Napa Valley, CA",
    duration: "4 months",
    completedDate: "August 2023",
    clientName: "The Johnson Family",
    clientTestimonial:
      "We're amazed by how productive our garden has become. We're growing more food than ever before, and the soil just keeps getting better each season.",
    challenge:
      "Converting a traditional lawn area into a productive food garden while dealing with clay soil and limited water access.",
    solution:
      "Implemented raised bed systems with improved drainage, established water-wise irrigation, and created a closed-loop composting system for ongoing soil improvement.",
    materials: [
      "Reclaimed wood for raised beds",
      "Organic compost and amendments",
      "Drip irrigation system",
      "Mulch and cover crop seeds",
      "Beneficial insect plants",
      "Rainwater collection barrels",
    ],
    techniques: [
      "Permaculture design principles",
      "Companion planting strategies",
      "Water-wise irrigation",
      "Soil building methods",
      "Integrated pest management",
      "Season extension techniques",
    ],
    results: [
      "Year-round food production",
      "90% reduction in water usage",
      "Elimination of chemical inputs",
      "Improved soil fertility",
      "Increased biodiversity",
      "Educational family experience",
    ],
    images: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Garden planning phase",
        caption: "Initial site assessment and permaculture design planning",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Raised bed construction",
        caption: "Building raised beds with reclaimed materials and improved soil",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Companion planting",
        caption: "Strategic companion planting for natural pest control and soil health",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Mature garden harvest",
        caption: "Abundant harvest from the mature regenerative garden system",
      },
    ],
    steps: [
      {
        title: "Design & Planning",
        description: "Created detailed permaculture design considering sun patterns, water flow, and family needs.",
        duration: "2 weeks",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Design process",
            caption: "Collaborative design process with the family",
          },
        ],
      },
      {
        title: "Infrastructure Installation",
        description: "Built raised beds, installed irrigation system, and established composting areas.",
        duration: "1 month",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Infrastructure work",
            caption: "Installing raised beds and irrigation infrastructure",
          },
        ],
      },
      {
        title: "Soil Building",
        description: "Added organic matter, beneficial microorganisms, and established cover crops.",
        duration: "1 month",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Soil preparation",
            caption: "Building healthy soil with organic amendments",
          },
        ],
      },
      {
        title: "Planting & Establishment",
        description: "Planted vegetables, herbs, and companion plants according to seasonal timing.",
        duration: "1 month",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Planting phase",
            caption: "Planting diverse crops and companion plants",
          },
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "earthen-floor",
    title: "Earthen Floor Installation",
    description:
      "Beautiful natural flooring that connects inhabitants to the earth, using traditional techniques with modern applications for durability and comfort.",
    category: "Natural Building",
    location: "Mendocino County, CA",
    duration: "2 weeks",
    completedDate: "October 2023",
    clientName: "David & Lisa Chen",
    clientTestimonial:
      "Walking on this floor feels like being connected to the earth itself. It's beautiful, comfortable, and has held up perfectly through our first winter.",
    challenge:
      "Installing an earthen floor in a modern home while ensuring durability, moisture resistance, and integration with existing systems.",
    solution:
      "Used a three-layer system with proper moisture barriers, incorporated modern sealers for durability, and created custom color blends to match the home's aesthetic.",
    materials: [
      "Local clay soil",
      "Fine sand aggregate",
      "Chopped straw fiber",
      "Natural sealers",
      "Moisture barrier materials",
      "Natural pigments",
    ],
    techniques: [
      "Traditional earthen floor methods",
      "Modern moisture management",
      "Natural pigment integration",
      "Hand-troweling techniques",
      "Natural sealing methods",
      "Quality control testing",
    ],
    results: [
      "Beautiful natural flooring",
      "Excellent thermal mass",
      "Non-toxic indoor environment",
      "Unique artistic finish",
      "Durable long-term surface",
      "Enhanced home value",
    ],
    images: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Floor preparation",
        caption: "Preparing the base and moisture barrier for earthen floor installation",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Clay mixture application",
        caption: "Applying the clay and sand mixture with traditional hand tools",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Finished earthen floor",
        caption: "Completed earthen floor with natural finish and beautiful color variation",
      },
    ],
    steps: [
      {
        title: "Preparation & Testing",
        description: "Prepared substrate, tested clay mixtures, and established moisture barriers.",
        duration: "3 days",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Preparation work",
            caption: "Substrate preparation and material testing",
          },
        ],
      },
      {
        title: "Base Layer Installation",
        description: "Applied the rough base layer with proper thickness and compression.",
        duration: "4 days",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Base layer",
            caption: "Installing the structural base layer",
          },
        ],
      },
      {
        title: "Finish Layer & Sealing",
        description: "Applied smooth finish layer, integrated pigments, and sealed for durability.",
        duration: "1 week",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Finishing work",
            caption: "Hand-troweling the final finish layer",
          },
        ],
      },
    ],
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

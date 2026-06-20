import { TreePine, Sprout, Leaf, Flower2, Circle, Home, Zap, Dumbbell } from "lucide-react"

const services = [
  {
    icon: TreePine,
    title: "Fruit Tree & Orchard Care",
    description: "Pruning, planting, and nurturing your trees to thrive naturally.",
  },
  {
    icon: Sprout,
    title: "Soil Remineralization",
    description: "Healing your soil with natural minerals for resilience and growth.",
  },
  {
    icon: Leaf,
    title: "Organic Compost & Fertilizers",
    description: "Rich, natural blends to feed your land sustainably.",
  },
  {
    icon: Flower2,
    title: "Planting & Transplanting",
    description: "Bringing new life to your space with care and intention.",
  },
  {
    icon: Circle,
    title: "Sacred Spaces",
    description: "Designing meditation spots, altars, or crystal grids for peace and energy.",
  },
  {
    icon: Home,
    title: "Earthen Floors & Cobb Work",
    description: "Earth-based building for grounded, natural vibes.",
  },
  {
    icon: Zap,
    title: "Garden Beds & Electroculture",
    description: "Creative gardens boosted by energy techniques.",
  },
  {
    icon: Dumbbell,
    title: "Outdoor Gym Spaces",
    description: "Ropes, carved weights, and natural fitness zones.",
  },
]

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {services.map((service, index) => {
        const IconComponent = service.icon
        return (
          <div
            key={index}
            className="bg-[#e8e8d8] p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
          >
            <IconComponent size={48} className="mx-auto mb-4 text-[#6b8e23]" />
            <h3 className="font-semibold mb-3 text-lg">{service.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
          </div>
        )
      })}
    </div>
  )
}

"use client"

interface NavigationProps {
  onNavigate: (sectionId: string) => void
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const navItems = [
    { id: "services", label: "Services" },
    { id: "booking", label: "Book Now" },
    { id: "shop", label: "Shop" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav>
      <ul className="flex flex-wrap justify-center gap-4 md:gap-8 px-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavigate(item.id)}
              className="text-white hover:underline transition-all duration-200 py-2"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

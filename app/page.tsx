"use client"

import { useState } from "react"
import { Phone, Mail, ExternalLink } from "lucide-react"
import ServiceGrid from "@/components/service-grid"
import PortfolioGrid from "@/components/portfolio-grid"
import Navigation from "@/components/navigation"

export default function EdenverseLocal() {
  const [activeSection, setActiveSection] = useState("")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const handleCallClick = () => {
    window.location.href = "tel:+11234567890"
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:edenverse.local@gmail.com"
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-gray-800">
      {/* Header */}
      <header className="bg-[#2d5e2d] text-white text-center py-8 sticky top-0 z-50">
        <Navigation onNavigate={scrollToSection} />
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Welcome to Edenverse Local</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto px-4">
            Transform your land into a regenerative sanctuary with creative, conscious care.
          </p>
          <button
            onClick={() => scrollToSection("booking")}
            className="bg-[#6b8e23] hover:bg-[#556b2f] text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-6">Local Services</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Hey, I'm here to help you co-create something magical with your property. Here's what I offer:
        </p>
        <ServiceGrid />
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Book Me or Say Hi</h2>
          <p className="text-lg mb-8">Want to transform your space? Let's make it happen.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleCallClick}
              className="bg-[#6b8e23] hover:bg-[#556b2f] text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Me: (123) 456-7890
            </button>
            <button
              onClick={handleEmailClick}
              className="bg-[#6b8e23] hover:bg-[#556b2f] text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Request a Quote
            </button>
          </div>

          <p className="text-gray-600">
            Or fill out a quick form{" "}
            <a
              href="https://forms.gle/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b8e23] hover:text-[#556b2f] underline inline-flex items-center gap-1"
            >
              here <ExternalLink size={16} />
            </a>
          </p>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-6">Online Shop</h2>
        <p className="text-lg text-center mb-8">Grab some goods to start your own regenerative journey:</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#e8e8d8] p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Organic Compost</h3>
            <p className="text-2xl font-bold text-[#6b8e23]">$20</p>
          </div>
          <div className="bg-[#e8e8d8] p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Crystal Grid Kit</h3>
            <p className="text-2xl font-bold text-[#6b8e23]">$35</p>
          </div>
          <div className="bg-[#e8e8d8] p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Natural Fertilizer Blend</h3>
            <p className="text-2xl font-bold text-[#6b8e23]">$15</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://shopify.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6b8e23] hover:bg-[#556b2f] text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium inline-flex items-center gap-2"
          >
            Visit the Shop <ExternalLink size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm a creative guy who loves working with the land and bringing visions to life. Whether it's healing soil,
            crafting sacred spaces, or building something totally unique, I'm here to collaborate and make magic with
            you.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Past Projects</h2>
        <PortfolioGrid />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-8">Contact Me</h2>
          <div className="space-y-4">
            <p className="text-lg flex items-center justify-center gap-2">
              <Mail size={20} className="text-[#6b8e23]" />
              <a href="mailto:edenverse.local@gmail.com" className="text-[#6b8e23] hover:text-[#556b2f]">
                edenverse.local@gmail.com
              </a>
            </p>
            <p className="text-lg flex items-center justify-center gap-2">
              <Phone size={20} className="text-[#6b8e23]" />
              <a href="tel:+11234567890" className="text-[#6b8e23] hover:text-[#556b2f]">
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5e2d] text-white text-center py-8">
        <p>
          <a
            href="https://v0-edenverse.vercel.app"
            className="hover:underline inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Back to Edenverse <ExternalLink size={16} />
          </a>
        </p>
      </footer>
    </div>
  )
}

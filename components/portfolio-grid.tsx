"use client"

import type React from "react"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import Link from "next/link"
import { projects } from "@/data/projects"

interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

interface Project {
  title: string
  description: string
  images: ProjectImage[]
  category: string
  slug: string
}

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openGallery = (project: Project, imageIndex = 0) => {
    setSelectedProject(project)
    setCurrentImageIndex(imageIndex)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden" // Prevent background scrolling
  }

  const closeGallery = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeGallery()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#e8e8d8] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 group"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative">
                <img
                  src={project.images[0]?.src || "/placeholder.svg"}
                  alt={project.images[0]?.alt || project.title}
                  className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3">
                    <ZoomIn size={24} className="text-[#2d5e2d]" />
                  </button>
                </div>
                {project.images.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    +{project.images.length - 1} more
                  </div>
                )}
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-[#6b8e23] bg-[#6b8e23] bg-opacity-10 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-[#2d5e2d]">{project.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => openGallery(project, 0)}
                  className="text-[#6b8e23] hover:text-[#556b2f] font-medium flex items-center gap-2 transition-colors duration-200"
                >
                  View Gallery ({project.images.length} photos)
                  <ZoomIn size={16} />
                </button>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-[#2d5e2d] hover:text-[#6b8e23] font-medium transition-colors duration-200"
                >
                  Full Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Gallery */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeGallery}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedProject.images[currentImageIndex]?.src || "/placeholder.svg"}
                alt={selectedProject.images[currentImageIndex]?.alt}
                className="w-full max-h-[70vh] object-contain"
              />

              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#2d5e2d]">{selectedProject.title}</h3>
                  <span className="text-sm text-gray-500">
                    {currentImageIndex + 1} of {selectedProject.images.length}
                  </span>
                </div>

                {selectedProject.images[currentImageIndex]?.caption && (
                  <p className="text-gray-700 mb-4">{selectedProject.images[currentImageIndex].caption}</p>
                )}

                {/* Thumbnail Navigation */}
                {selectedProject.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all duration-200 ${
                          index === currentImageIndex
                            ? "border-[#6b8e23] opacity-100"
                            : "border-gray-300 opacity-60 hover:opacity-80"
                        }`}
                      >
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

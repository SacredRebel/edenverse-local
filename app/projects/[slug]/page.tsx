import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, MapPin, Clock, User, CheckCircle } from "lucide-react"
import Link from "next/link"
import { getProjectBySlug } from "@/data/projects"
import ProjectGallery from "@/components/project-gallery"
import ProjectTimeline from "@/components/project-timeline"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header */}
      <div className="bg-[#2d5e2d] text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-[#6b8e23] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">{project.title}</h1>
              <p className="text-lg text-gray-200 leading-relaxed">{project.description}</p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#6b8e23]" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-[#6b8e23]" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-[#6b8e23]" />
                  <span>Completed {project.completedDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <User size={18} className="text-[#6b8e23]" />
                  <span>{project.clientName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Gallery */}
        <section className="mb-16">
          <ProjectGallery images={project.images} title={project.title} />
        </section>

        {/* Challenge & Solution */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-serif text-[#2d5e2d] mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-serif text-[#2d5e2d] mb-4">Our Solution</h2>
              <p className="text-gray-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2d5e2d] text-center mb-12">Project Process</h2>
          <ProjectTimeline steps={project.steps} />
        </section>

        {/* Materials & Techniques */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#2d5e2d] mb-6">Materials Used</h3>
              <ul className="space-y-3">
                {project.materials.map((material, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#6b8e23] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#2d5e2d] mb-6">Techniques Applied</h3>
              <ul className="space-y-3">
                {project.techniques.map((technique, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#6b8e23] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{technique}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <div className="bg-[#e8e8d8] rounded-lg p-8">
            <h3 className="text-2xl font-serif text-[#2d5e2d] text-center mb-8">Project Results</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#6b8e23] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Note */}
        <section className="mb-16">
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <h3 className="text-2xl font-serif text-[#2d5e2d] mb-6">Client Note</h3>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
              "{project.clientTestimonial}"
            </blockquote>
            <cite className="text-[#6b8e23] font-medium">— {project.clientName}</cite>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-[#2d5e2d] text-white rounded-lg p-8">
            <h3 className="text-2xl font-serif mb-4">Ready to Transform Your Space?</h3>
            <p className="text-lg mb-6">Send photos or call to request a practical local quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#booking"
                className="bg-[#6b8e23] hover:bg-[#556b2f] text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                Request a Quote
              </Link>
              <Link
                href="/#portfolio"
                className="border border-white text-white hover:bg-white hover:text-[#2d5e2d] px-8 py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

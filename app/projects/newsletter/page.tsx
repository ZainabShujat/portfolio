import Link from 'next/link'

export default function Newsletter() {
  return (
    <div className="min-h-screen px-6 sm:px-8 lg:px-12 pt-12 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/projects"
          className="inline-flex items-center text-sm text-accent-600 hover:text-accent-700 mb-8 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl text-gray-900 mb-4 font-extrabold tracking-tight">
            Notes From a B.Tech Brain
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A tech and reflection newsletter
          </p>
          <div className="w-24 h-1.5 bg-accent-600"></div>
        </div>

        {/* Preview Section */}
        <section className="mb-16">
          <div className="aspect-video bg-gradient-to-br from-accent-100 via-accent-50 to-gray-50 rounded-xl border border-gray-200 flex items-center justify-center">
            <p className="text-gray-400">Preview coming soon</p>
          </div>
        </section>

        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl text-gray-900 mb-4 font-semibold">About This Project</h2>
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              A long-running tech and reflection newsletter where I share thoughts on building, learning, 
              and navigating the intersection of technology and human experience.
            </p>
            <p>
              Each issue explores different aspects of development, design thinking, and the personal journey 
              of being a student developer.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl text-gray-900 mb-4 font-semibold">Platform</h2>
          <div className="flex flex-wrap gap-3">
            {['Writing', 'Substack'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 text-white text-base font-medium rounded-lg hover:bg-accent-700 transition-colors duration-200"
            >
              Read the Newsletter
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

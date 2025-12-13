export default function Contact() {
  return (
    <div className="min-h-screen px-6 sm:px-8 lg:px-12 pt-12 pb-12 bg-accent-50/30">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl sm:text-6xl text-gray-900 mb-6 font-extrabold tracking-tight">
            Let's Talk
          </h1>
          <div className="w-24 h-1.5 bg-accent-600 mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm always open to interesting conversations and collaboration opportunities.
            Drop me a line if you'd like to work together or just say hello.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Email */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
            <p className="text-sm font-medium text-accent-600 mb-3">Email</p>
            <a
              href="mailto:your.email@example.com"
              className="text-2xl text-gray-900 hover:text-accent-600 transition-colors duration-200 font-medium"
            >
              your.email@example.com
            </a>
          </div>

          {/* Social Links */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
            <p className="text-sm font-medium text-accent-600 mb-4">Elsewhere</p>
            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg text-gray-900 hover:text-accent-600 transition-colors duration-200 w-fit group"
              >
                GitHub
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg text-gray-900 hover:text-accent-600 transition-colors duration-200 w-fit group"
              >
                LinkedIn
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Navigation from '@/components/Navigation'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="px-6 sm:px-8 lg:px-16 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-green-400">Available for opportunities</span>
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8">
              Let's Talk
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              I'm always open to interesting conversations and collaboration opportunities.
              Drop me a line if you'd like to work together or just say hello.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Email Card */}
            <div className="border border-purple-500/20 bg-purple-500/5 rounded-xl p-10 hover:bg-purple-500/10 transition-colors duration-300">
              <p className="text-sm font-mono text-purple-400 mb-4 uppercase tracking-wider">
                Email
              </p>
              <a
                href="mailto:your.email@example.com"
                className="text-2xl sm:text-3xl font-bold text-white hover:text-purple-400 transition-colors duration-200 break-all"
              >
                your.email@example.com
              </a>
            </div>

            {/* Social Links Card */}
            <div className="border border-white/10 rounded-xl p-10 hover:bg-white/5 transition-colors duration-300">
              <p className="text-sm font-mono text-gray-400 mb-6 uppercase tracking-wider">
                Connect
              </p>
              <div className="space-y-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group text-white hover:text-gray-400 transition-colors duration-200"
                >
                  <span className="text-xl font-bold">GitHub</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group text-white hover:text-gray-400 transition-colors duration-200"
                >
                  <span className="text-xl font-bold">LinkedIn</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
              Response Time
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I typically respond within 24-48 hours. If you don't hear back, 
              feel free to send a follow-up—sometimes messages get lost in the digital void.
            </p>
          </div>

          {/* Status Badge */}
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 border border-green-500/20 bg-green-500/5 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-mono text-green-400 uppercase tracking-wider">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

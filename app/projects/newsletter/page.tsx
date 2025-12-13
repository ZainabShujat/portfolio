import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="px-6 sm:px-8 lg:px-16 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white mb-12 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider rounded-full">
                Worlds & Ideas
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
              Notes From a<br />B.Tech Brain
            </h1>
            <p className="text-2xl sm:text-3xl text-orange-400 font-medium mb-8">
              Thinking out loud
            </p>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              A 3-piece ecosystem spanning LinkedIn newsletter, LinkedIn page, and blog archive. 
              The messy, unpolished process of building and learning in public.
            </p>
          </div>

          {/* Preview Section */}
          <section className="mb-12">
            <div className="h-[400px] bg-gradient-to-br from-orange-900/20 to-pink-900/20 border border-white/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 text-lg mb-4">Preview coming soon</p>
                <p className="text-sm text-gray-500 font-mono">Honest reflections on building</p>
              </div>
            </div>
          </section>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What It Does */}
              <section>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                  About the Platform
                </h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Built a fully functional, multi-page blog platform hosting 50+ newsletter editions for the Notes 
                    From a B. Tech Brain publication.
                  </p>
                  <p>
                    A 3-piece ecosystem spanning LinkedIn newsletter for weekly thoughts, LinkedIn page for community 
                    engagement, and a blog website that archives everything.
                  </p>
                </div>
              </section>

              {/* Features */}
              <section className="border-t border-white/10 pt-12">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                  Features
                </h2>
                <ul className="space-y-3 text-base text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">•</span>
                    <span>Custom homepage + category sections (Friday Insights, Tech Pulse, World News)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">•</span>
                    <span>All 50+ editions integrated with a clean reading experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">•</span>
                    <span>Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">•</span>
                    <span>Optimized navigation + UX for long-form content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">•</span>
                    <span>SEO-ready structure for LinkedIn + organic traffic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">•</span>
                    <span>Deployed on Vercel (previously on Netlify)</span>
                  </li>
                </ul>
              </section>

              {/* Impact */}
              <section className="border-t border-white/10 pt-12">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                  Impact
                </h2>
                <ul className="space-y-3 text-base text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">•</span>
                    <span>13–15 average engagement users/day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">•</span>
                    <span>Early reader retention boosted via clean UX</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">•</span>
                    <span>Serves as the public hub for a growing writing brand with 40k+ impressions</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-10">
              {/* Platforms */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                  Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Vercel'].map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-md text-sm"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Timeline
                </h3>
                <p className="text-xl font-bold">Sep 2025 - Dec 2025</p>
              </div>

              {/* Status */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Status
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-mono">Active</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://btechbrain.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors duration-200"
              >
                Read Archive
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

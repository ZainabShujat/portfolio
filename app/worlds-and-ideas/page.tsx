'use client'

import Link from 'next/link'

export default function WorldsAndIdeas() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 via-amber-950/10 to-black"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider rounded-full">
              Category Two
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95]">
            Worlds &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
              Ideas
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Thinking out loud, building in public, and sharing the messy process of learning. 
            Not polished. Not perfect. Just honest.
          </p>
          <div className="animate-bounce">
            <svg className="w-8 h-8 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Project: Notes From a B.Tech Brain */}
      <section className="relative py-12 sm:py-14 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/15 via-black to-black"></div>
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="mb-4">
                  <span className="text-xs font-mono text-orange-400/60 uppercase tracking-wider">The Thinking Space</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
                  Notes From a<br />B.Tech Brain
                </h2>
                <p className="text-lg sm:text-xl text-orange-300 font-normal mb-6">
                  A 3-piece ecosystem
                </p>
                <div className="space-y-6 text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
                  <p>
                    A long-running project spanning multiple platforms—LinkedIn newsletter for weekly thoughts, 
                    LinkedIn page for community, and a blog website that archives everything. The messy, 
                    unpolished process of building and learning in public.
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-4 py-4">
                    <div className="p-5 bg-orange-950/20 border border-orange-500/20 rounded-xl hover:bg-orange-950/30 transition-colors duration-300">
                      <div className="text-orange-400/60 text-xs font-mono mb-2">Platform 01</div>
                      <p className="text-orange-300 font-medium">LinkedIn Newsletter</p>
                      <p className="text-gray-500 text-xs mt-1">Weekly thoughts</p>
                    </div>
                    <div className="p-5 bg-orange-950/20 border border-orange-500/20 rounded-xl hover:bg-orange-950/30 transition-colors duration-300">
                      <div className="text-orange-400/60 text-xs font-mono mb-2">Platform 02</div>
                      <p className="text-orange-300 font-medium">LinkedIn Page</p>
                      <p className="text-gray-500 text-xs mt-1">Community hub</p>
                    </div>
                    <div className="p-5 bg-orange-950/20 border border-orange-500/20 rounded-xl hover:bg-orange-950/30 transition-colors duration-300">
                      <div className="text-orange-400/60 text-xs font-mono mb-2">Platform 03</div>
                      <p className="text-orange-300 font-medium">Blog Archive</p>
                      <p className="text-gray-500 text-xs mt-1">Long-form writing</p>
                    </div>
                  </div>
                  
                  <p className="text-orange-400/60 italic text-sm">
                    "Not polished. Not perfect. Just honest reflections on building, learning, 
                    and growing as a developer."
                  </p>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="border-l-2 border-orange-500/20 pl-6 py-3">
                    <p className="text-sm text-gray-500 mb-1">Topics I explore:</p>
                    <p className="text-gray-300">Tech · Design · Learning · Building in Public · Career Thoughts</p>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href="/projects/newsletter"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-orange-600/50 hover:bg-orange-600/10 text-orange-300 font-medium rounded-lg transition-all duration-200"
                  >
                    Explore the ecosystem →
                  </Link>
                </div>
              </div>
              
              <div className="order-first lg:order-last">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/20 flex items-center justify-center p-8">
                  <div className="text-center space-y-8">
                    <div className="space-y-3">
                      <div className="w-16 h-px bg-orange-400/40 mx-auto"></div>
                      <p className="text-orange-300 text-xl font-mono tracking-wider">Reflection</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-16 h-px bg-orange-400/40 mx-auto"></div>
                      <p className="text-orange-300 text-xl font-mono tracking-wider">Growth</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-16 h-px bg-orange-400/40 mx-auto"></div>
                      <p className="text-orange-300 text-xl font-mono tracking-wider">Honesty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="relative py-16 sm:py-20 px-6 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/10 via-black to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-12">
            What You'll Find
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-orange-950/10 border border-orange-500/10 rounded-2xl hover:bg-orange-950/20 transition-colors duration-300">
              <div className="text-orange-400/60 text-sm font-mono mb-4">01</div>
              <h4 className="text-xl font-bold mb-3 text-white">Learning Logs</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Raw notes on what I'm learning—new technologies, design patterns, problem-solving approaches.
              </p>
            </div>
            <div className="p-8 bg-orange-950/10 border border-orange-500/10 rounded-2xl hover:bg-orange-950/20 transition-colors duration-300">
              <div className="text-orange-400/60 text-sm font-mono mb-4">02</div>
              <h4 className="text-xl font-bold mb-3 text-white">Build Stories</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Behind-the-scenes of projects—what worked, what didn't, decisions made along the way.
              </p>
            </div>
            <div className="p-8 bg-orange-950/10 border border-orange-500/10 rounded-2xl hover:bg-orange-950/20 transition-colors duration-300">
              <div className="text-orange-400/60 text-sm font-mono mb-4">03</div>
              <h4 className="text-xl font-bold mb-3 text-white">Career Reflections</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thoughts on growth, navigating the tech world as a student, and figuring out the path forward.
              </p>
            </div>
            <div className="p-8 bg-orange-950/10 border border-orange-500/10 rounded-2xl hover:bg-orange-950/20 transition-colors duration-300">
              <div className="text-orange-400/60 text-sm font-mono mb-4">04</div>
              <h4 className="text-xl font-bold mb-3 text-white">Design Thinking</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Exploring UX decisions, accessibility considerations, and why design matters beyond aesthetics.
              </p>
            </div>
            <div className="p-8 bg-orange-950/10 border border-orange-500/10 rounded-2xl hover:bg-orange-950/20 transition-colors duration-300">
              <div className="text-orange-400/60 text-sm font-mono mb-4">05</div>
              <h4 className="text-xl font-bold mb-3 text-white">Honest Mistakes</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Things I got wrong, lessons learned the hard way, and why failure is part of the process.
              </p>
            </div>
            <div className="p-8 bg-orange-950/10 border border-orange-500/10 rounded-2xl hover:bg-orange-950/20 transition-colors duration-300">
              <div className="text-orange-400/60 text-sm font-mono mb-4">06</div>
              <h4 className="text-xl font-bold mb-3 text-white">Random Thoughts</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Observations, ideas, and musings that don't fit neatly into categories but needed to be shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/10 to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-8">
            Explore More
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Return Home
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-orange-900/50"
            >
              View All Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

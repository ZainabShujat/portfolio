'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function ToolsForHumans() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-12 pt-[140px]">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-pink-950/10 to-black"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider rounded-full">
              Category One
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95]">
            Tools for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
              Humans
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Apps that understand people. Each one addresses something difficult—shame, loneliness, 
            confusion. Built to make technology feel more human.
          </p>
          <div className="animate-bounce">
            <svg className="w-8 h-8 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Project 1: SibsLove */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/40 via-pink-950/10 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
              <div className="lg:col-span-3 space-y-8">
                <div className="space-y-6">
                  <div className="overflow-hidden">
                    <span className="inline-block text-sm font-mono text-pink-300/60 uppercase tracking-wider">
                      The Comfort Space
                    </span>
                  </div>
                  
                  <div className="overflow-hidden">
                    <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                      SibsLove
                    </h2>
                  </div>
                  
                  <p className="text-3xl sm:text-4xl lg:text-5xl text-pink-300 font-light leading-[1.2]">
                    When you need<br />someone to listen
                  </p>
                </div>

                <div className="space-y-8">
                  <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light">
                    Not therapy. Not advice.<br />
                    Just comfort when you need it.
                  </p>
                  
                  <div className="w-16 h-px bg-pink-500/30"></div>
                </div>

                <div className="border-l-2 border-pink-500/20 pl-8 py-6 space-y-6 hover:border-pink-500/40 transition-colors duration-500">
                  <p className="text-pink-300/90 italic text-lg leading-relaxed">
                    "Inspired by my sister's struggles and the kind of presence she needed—someone 
                    who would just be there, without judgment."
                  </p>
                  <p className="text-gray-500 text-sm">
                    — The origin
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="group p-6 rounded-xl bg-pink-950/20 border border-pink-500/10 hover:bg-pink-950/30 hover:border-pink-500/20 transition-all duration-500">
                    <div className="text-pink-400/60 text-sm font-mono mb-3 group-hover:text-pink-400/80 transition-colors duration-500">
                      01
                    </div>
                    <p className="text-gray-300 font-light">
                      A warm presence when you're alone
                    </p>
                  </div>
                  <div className="group p-6 rounded-xl bg-pink-950/20 border border-pink-500/10 hover:bg-pink-950/30 hover:border-pink-500/20 transition-all duration-500">
                    <div className="text-pink-400/60 text-sm font-mono mb-3 group-hover:text-pink-400/80 transition-colors duration-500">
                      02
                    </div>
                    <p className="text-gray-300 font-light">
                      Listening without solving
                    </p>
                  </div>
                  <div className="group p-6 rounded-xl bg-pink-950/20 border border-pink-500/10 hover:bg-pink-950/30 hover:border-pink-500/20 transition-all duration-500">
                    <div className="text-pink-400/60 text-sm font-mono mb-3 group-hover:text-pink-400/80 transition-colors duration-500">
                      03
                    </div>
                    <p className="text-gray-300 font-light">
                      Comfort in vulnerability
                    </p>
                  </div>
                  <div className="group p-6 rounded-xl bg-pink-950/20 border border-pink-500/10 hover:bg-pink-950/30 hover:border-pink-500/20 transition-all duration-500">
                    <div className="text-pink-400/60 text-sm font-mono mb-3 group-hover:text-pink-400/80 transition-colors duration-500">
                      04
                    </div>
                    <p className="text-gray-300 font-light">
                      Space without judgment
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href="/projects/sibslove"
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-pink-500/70 hover:bg-pink-500/90 text-white font-medium rounded-2xl transition-all duration-500 shadow-2xl shadow-pink-900/60 hover:shadow-pink-900/80 hover:scale-[1.02]"
                  >
                    <span>Step into this space</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <p className="text-pink-300/40 text-sm mt-4 font-mono">
                    A place to be, not just read about
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 order-first lg:order-last">
                <div className="sticky top-32 space-y-8">
                  <div className="group relative aspect-square rounded-3xl bg-gradient-to-br from-pink-500/20 via-rose-500/10 to-pink-900/20 border border-pink-500/20 overflow-hidden transition-all duration-700 hover:border-pink-500/40">
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/0 via-pink-400/5 to-rose-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full p-12">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-pink-500/10 blur-2xl animate-pulse"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-6 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="space-y-2">
                              <div className="w-12 h-px bg-pink-400/40 mx-auto"></div>
                              <p className="text-pink-300 text-lg font-mono tracking-wider">Warmth</p>
                            </div>
                            <div className="space-y-2">
                              <div className="w-12 h-px bg-pink-400/40 mx-auto"></div>
                              <p className="text-pink-300 text-lg font-mono tracking-wider">Presence</p>
                            </div>
                            <div className="space-y-2">
                              <div className="w-12 h-px bg-pink-400/40 mx-auto"></div>
                              <p className="text-pink-300 text-lg font-mono tracking-wider">Listening</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-pink-950/20 border border-pink-500/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      <span className="text-pink-300/60 text-xs font-mono uppercase tracking-wider">Atmosphere</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      This space holds you gently. No pressure. No expectations. Just presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2: PennyPath */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/25 via-indigo-950/10 to-black"></div>
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-first">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/15 to-indigo-500/10 border border-purple-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-purple-300 text-lg font-mono">[ Clarity · Freedom · Calm ]</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <span className="text-sm font-mono text-purple-400/70 uppercase tracking-wider">The Money Space</span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
                  PennyPath
                </h2>
                <p className="text-2xl sm:text-3xl text-purple-300 font-normal mb-8">
                  Finance without the shame
                </p>
                <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
                  <p>
                    A beginner-friendly personal finance app that removes judgment from money tracking. 
                    No jargon. No guilt. Just clarity.
                  </p>
                  <p className="text-purple-300/80 italic">
                    "Most finance apps make you feel bad about your choices. This one just helps 
                    you understand them."
                  </p>
                  <p className="text-gray-400 text-sm">
                    The Problem: Financial anxiety often comes from shame and complexity, not 
                    lack of information.
                  </p>
                </div>
                <Link
                  href="/projects/pennypath"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-purple-900/50 hover:shadow-xl hover:shadow-purple-900/60"
                >
                  Find your path
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 3: CareerIQ */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/25 via-cyan-950/5 to-black"></div>
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div>
                <div className="mb-5">
                  <span className="text-xs font-mono text-blue-400/70 uppercase tracking-widest">The Clarity Space</span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-5">
                  CareerIQ
                </h2>
                <p className="text-xl sm:text-2xl text-blue-400 font-semibold mb-8">
                  Navigate career confusion
                </p>
                <div className="space-y-5 text-base text-gray-300 leading-relaxed mb-9">
                  <p>
                    A full-stack career exploration platform with skill tests, personality analysis, 
                    and actionable insights. Helps you organize your thoughts, not predict your future.
                  </p>
                  <p className="text-blue-400/70 italic text-sm">
                    "Career advice is everywhere. Clarity is rare. This tool helps you think, 
                    not just react."
                  </p>
                  <p className="text-gray-400 text-sm">
                    The Problem: Career overwhelm comes from too many options and unclear self-understanding.
                  </p>
                </div>
                <Link
                  href="/projects/careeriq"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/50 hover:shadow-xl hover:shadow-blue-900/60"
                >
                  Map your direction
                </Link>
              </div>
              <div className="order-first lg:order-last">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-blue-400 text-lg font-mono">[ Direction · Insight · Purpose ]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/10 to-black"></div>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-purple-900/50"
            >
              View All Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

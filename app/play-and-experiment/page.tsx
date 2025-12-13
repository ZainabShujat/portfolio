'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function PlayAndExperiment() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-12 pt-[140px]">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 via-green-950/10 to-black"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider rounded-full">
              Category Three
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95]">
            Play &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400">
              Experiment
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Technical exploration and learning through building. Not every project needs to solve 
            a human problem—some exist purely to explore what's possible.
          </p>
          <div className="animate-bounce">
            <svg className="w-8 h-8 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Project 1: Sentiment Analysis */}
      <section className="relative py-12 sm:py-14 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/15 via-black to-black"></div>
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-first">
                <div className="aspect-video lg:aspect-square rounded-xl bg-gradient-to-br from-teal-500/10 to-green-500/5 border border-teal-500/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-teal-400/70 text-base font-mono">[ Understanding · Patterns · Insight ]</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <span className="text-xs font-mono text-teal-400/60 uppercase tracking-wider">NLP Experiment</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
                  Sentiment Analysis
                </h2>
                <p className="text-lg sm:text-xl text-teal-300 font-normal mb-6">
                  Understanding what people feel
                </p>
                <div className="space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
                  <p>
                    A tool that analyzes emotional patterns in text, helping understand sentiment 
                    and tone. Built to make emotional intelligence more accessible through natural 
                    language processing.
                  </p>
                  <p className="text-teal-400/60 italic text-sm">
                    "Words carry emotion. This tool helps decode what's being said beneath the surface."
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-teal-950/20 border border-teal-500/10 rounded-lg">
                    <div className="text-teal-400/60 text-xs font-mono mb-2">What I Learned</div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">→</span>
                        <span>Natural language processing fundamentals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">→</span>
                        <span>Pattern recognition in text data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">→</span>
                        <span>Building ML-powered user interfaces</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/projects/sentiment-analysis"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-teal-600/50 hover:bg-teal-600/10 text-teal-300 font-medium rounded-lg transition-all duration-200"
                >
                  View experiment →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2: Suika Lite */}
      <section className="relative py-16 sm:py-20 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/15 via-black to-black"></div>
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-first">
                <div className="aspect-video lg:aspect-square rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-green-400/70 text-base font-mono">[ Joy · Physics · Play ]</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <span className="text-xs font-mono text-green-400/60 uppercase tracking-wider">Game Mechanics</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
                  Suika Lite
                </h2>
                <p className="text-lg sm:text-xl text-green-300 font-normal mb-6">
                  Learning through play
                </p>
                <div className="space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
                  <p>
                    A deliberate experiment in game mechanics, canvas physics, and collision detection. 
                    Built by reverse-engineering the viral fruit merge game to understand interactive systems.
                  </p>
                  <p className="text-green-400/60 italic text-sm">
                    "Not every project needs to solve a human problem. Some exist to solve technical ones—or 
                    just to explore what's possible when you build something purely for the craft."
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-green-950/20 border border-green-500/10 rounded-lg">
                    <div className="text-green-400/60 text-xs font-mono mb-2">Technical Deep Dive</div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">→</span>
                        <span>Canvas API and 2D rendering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">→</span>
                        <span>Physics simulation & collision detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">→</span>
                        <span>Game state management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">→</span>
                        <span>Animation loops and performance optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/projects/suika-lite"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-green-600/50 hover:bg-green-600/10 text-green-300 font-medium rounded-lg transition-all duration-200"
                >
                  Try experiment →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Experiments Matter */}
      <section className="relative py-16 sm:py-20 px-6 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/10 via-green-950/5 to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-8">
            Why Experiments Matter
          </h3>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              Not every project needs to solve a pressing human problem. Some exist purely to learn, 
              to push technical boundaries, or to satisfy curiosity.
            </p>
            <p>
              These experiments are where I test new technologies, explore unfamiliar domains, and 
              learn by building. They're not meant to be perfect—they're meant to teach.
            </p>
            <div className="pt-6 border-l-2 border-teal-500/20 pl-6">
              <p className="text-teal-300/90 italic">
                "The best way to learn is to build something slightly beyond your current abilities. 
                That's where growth happens."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/10 to-black"></div>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-teal-900/50"
            >
              View All Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

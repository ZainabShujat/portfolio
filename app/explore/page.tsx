'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Home() {
  const worlds = [
    {
      title: 'Tools for Humans',
      description: 'Apps that try to understand people',
      link: '/tools-for-humans',
      color: 'from-purple-600 to-blue-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverBg: 'hover:bg-purple-100',
    },
    {
      title: 'Words & Ideas',
      description: 'Thinking out loud in a newsletter',
      link: '/worlds-and-ideas',
      color: 'from-orange-500 to-pink-600',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverBg: 'hover:bg-orange-100',
    },
    {
      title: 'Play & Experiments',
      description: 'Things built just to see how they work',
      link: '/play-and-experiment',
      color: 'from-green-500 to-teal-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverBg: 'hover:bg-green-100',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      {/* Massive Typography Hero */}
      <section className="px-6 sm:px-8 lg:px-16 py-8 pt-[90px]">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to entry
          </Link>
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Zainab Shujat
            </h2>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-4">
            Building<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              Worlds
            </span><br />
            That Work
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 max-w-3xl font-light leading-relaxed">
            Developer. Designer. Student.
            <br />Making things that feel intentional.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-green-400">Available for opportunities</span>
            </span>
          </div>
        </div>
      </section>

      {/* Portal Section - Large Entry Points */}
      <section className="px-6 sm:px-8 lg:px-16 py-12 lg:py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
            Enter
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Three different portals. Three different ways I build.
          </p>
          
          <div className="space-y-4">
            {worlds.map((world, index) => (
              <Link
                key={index}
                href={world.link}
                className={`block group ${world.bgColor} ${world.hoverBg} transition-all duration-300 rounded-2xl overflow-hidden`}
              >
                <div className="px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                      <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 ${world.textColor} group-hover:scale-105 transition-transform duration-300 origin-left`}>
                        {world.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-700 font-light">
                        {world.description}
                      </p>
                    </div>
                    <div className={`flex-shrink-0 w-16 h-16 ${world.textColor} group-hover:translate-x-2 transition-transform duration-300`}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="px-6 sm:px-8 lg:px-16 py-12 lg:py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-8">
                Who Am I?
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-gray-400 leading-relaxed">
                <p>
                  A student developer who cares about why something exists, not just how it looks.
                </p>
                <p>
                  I build web apps that try to understand people—finance tools that remove shame, 
                  emotional companions that offer comfort, career platforms that provide clarity.
                </p>
                <p>
                  Still figuring it out, but making thoughtful decisions along the way.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 mt-10 text-lg font-medium text-white hover:text-purple-400 transition-colors duration-200 group"
              >
                More about me
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="lg:pt-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-wider">Current Mode</h3>
                  <p className="text-2xl font-bold">Building & Learning</p>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-wider">Tech Stack</h3>
                  <p className="text-xl text-gray-400">React · Next.js · TypeScript · Tailwind</p>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-wider">Focus Areas</h3>
                  <p className="text-xl text-gray-400">UX · Accessibility · Thoughtful Design</p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import Link from 'next/link'

export default function Entry() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-pink-950/10 to-orange-950/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name Badge */}
          <div className="mb-4 animate-[fadeIn_0.6s_ease-out]">
            <span className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-mono uppercase tracking-wider rounded-full">
              Portfolio 2025
            </span>
          </div>

          {/* Massive Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-4 animate-[fadeIn_0.8s_ease-out_0.2s_backwards]">
            Zainab<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              Shujat
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed mb-8 animate-[fadeIn_1s_ease-out_0.4s_backwards]">
            Developer · Designer · Writer · Student
            <br />
            <span className="text-gray-500 text-base sm:text-lg">
              Building worlds that work
            </span>
          </p>

          {/* Divider */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8 animate-[fadeIn_1.2s_ease-out_0.6s_backwards]"></div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeIn_1.4s_ease-out_0.8s_backwards]">
            <Link
              href="/explore"
              className="group relative px-8 py-4 bg-white text-black font-bold text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/50"
            >
              <span className="relative z-10">Enter the Experience</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/portfolio"
              className="group px-8 py-4 border-2 border-white/20 text-white font-bold text-base rounded-xl transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <span>View Portfolio</span>
            </Link>
          </div>

          {/* Subtle hint */}
          <p className="mt-8 text-xs text-gray-600 font-mono animate-[fadeIn_1.6s_ease-out_1s_backwards]">
            Two ways to explore — choose your journey
          </p>
        </div>
      </div>

      {/* Footer note */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs text-gray-600 font-mono">
          © 2025 · Thoughtfully built
        </p>
      </div>
    </div>
  )
}

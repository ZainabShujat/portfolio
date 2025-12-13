import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function SuikaLite() {
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
              <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-wider rounded-full">
                Play & Experiment
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
              Suika Lite
            </h1>
            <p className="text-2xl sm:text-3xl text-green-400 font-medium mb-8">
              Learning through play
            </p>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              A deliberate experiment in game mechanics, canvas physics, and collision detection. 
              Built by reverse-engineering the viral fruit merge game.
            </p>
          </div>

          {/* Preview Section */}
          <section className="mb-12">
            <div className="h-[400px] bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-white/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 text-lg mb-4">Preview coming soon</p>
                <p className="text-sm text-gray-500 font-mono">Built purely for the craft</p>
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
                  What It Is
                </h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Drop fruits, watch them bounce, merge identical ones, and chase the biggest watermelon before 
                    the bowl overflows — all right in your browser.
                  </p>
                  <p>
                    It's a desktop-first build for now — mobile version is next on my list 🔥
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
                    <span className="text-green-400 text-xl">•</span>
                    <span>Realistic 2D physics (no engine shortcuts!)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">•</span>
                    <span>Merge chronology log</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">•</span>
                    <span>Local high-score tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">•</span>
                    <span>Clean overlays + custom fruit sprites</span>
                  </li>
                </ul>
              </section>

              {/* Tech Stack Details */}
              <section className="border-t border-white/10 pt-12">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                  Built With
                </h2>
                <p className="text-base text-gray-300 leading-relaxed">
                  Matter.js, p5.js and +2 skills
                </p>
              </section>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-10">
              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'HTML5 Canvas', 'Physics Engine', 'Game Mechanics'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Timeline
                </h3>
                <p className="text-xl font-bold">Oct 2025</p>
              </div>

              {/* Status */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Status
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-mono">Playable</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://zainabshujat.github.io/Suika-Lite/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors duration-200"
              >
                Play Game
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

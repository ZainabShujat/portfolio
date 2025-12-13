import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="px-6 sm:px-8 lg:px-16 py-12 lg:py-16 pt-[140px]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
              About Me
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Main Bio */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  I'm Zainab Shujat, a student developer who cares about <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">why</span> something exists, not just how it looks.
                </p>
                <p>
                  I build web applications with a focus on clarity and usability. Finance tools designed 
                  to reduce anxiety. Emotional companion apps. Full-stack career platforms.
                </p>
                <p>
                  What connects them is an interest in understanding who the product is for and what 
                  they actually need. I think good products are clear, approachable, and don't make 
                  people feel stupid or overwhelmed.
                </p>
                <p>
                  I spend a lot of time thinking about how interfaces should behave, how information 
                  should be structured, and whether something feels intuitive or just looks nice.
                </p>
                <p className="text-gray-400 italic">
                  Still figuring things out, but making thoughtful decisions along the way.
                </p>
              </div>

              {/* Philosophy Section */}
              <div className="pt-12 border-t border-white/10">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                  What I Believe
                </h2>
                <ul className="space-y-4 text-lg text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-2xl">→</span>
                    <span>Technology should make people feel capable, not confused.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 text-2xl">→</span>
                    <span>Good design is invisible—it just works.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-2xl">→</span>
                    <span>Empathy is a technical skill.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-2xl">→</span>
                    <span>Building small, thoughtful things beats chasing trends.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-bold mb-1">Frontend</p>
                    <p className="text-gray-400">React · Next.js · TypeScript</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">Styling</p>
                    <p className="text-gray-400">Tailwind CSS · CSS-in-JS</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">Backend</p>
                    <p className="text-gray-400">Node.js · Express · MongoDB</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">Tools</p>
                    <p className="text-gray-400">Git · Figma · VS Code</p>
                  </div>
                </div>
              </div>

              {/* Experience Highlights */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                  Recent Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-bold text-sm">Frontend Developer Intern</p>
                    <p className="text-gray-400 text-sm">Unified Mentor · Oct 2025 - Present</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Creator & Author</p>
                    <p className="text-gray-400 text-sm">Notes From A B. Tech Brain · Apr 2025 - Present</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Freelance Web Developer</p>
                    <p className="text-gray-400 text-sm">Aug 2025 - Oct 2025</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">AI Intern</p>
                    <p className="text-gray-400 text-sm">IBM · Jul 2025 - Aug 2025</p>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                  Currently Learning
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>→ Accessibility best practices</li>
                  <li>→ Animation & micro-interactions</li>
                  <li>→ Design systems</li>
                  <li>→ Performance optimization</li>
                </ul>
              </div>

              {/* Status */}
              <div className="border border-green-500/20 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-sm font-mono text-green-400 uppercase tracking-wider">
                    Available
                  </p>
                </div>
                <p className="text-gray-300">
                  Open to collaborations and interesting projects.
                </p>
              </div>

              {/* CTA */}
              <div>
                <Link
                  href="/contact"
                  className="block w-full text-center px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

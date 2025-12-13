export default function About() {
  return (
    <div className="min-h-screen px-6 sm:px-8 lg:px-12 pt-12 pb-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl sm:text-6xl text-gray-900 mb-6 font-extrabold tracking-tight">
            About
          </h1>
          <div className="w-24 h-1.5 bg-accent-600"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Bio Section */}
          <section>
            <div className="space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                I'm Zainab Shujat, a student developer who builds web applications with a focus on 
                clarity and usability. I've worked on projects that range from finance tools designed 
                to reduce anxiety, to emotional companion apps, to full-stack career platforms.
              </p>
              <p>
                What connects them is an interest in understanding who the product is for and what 
                they actually need. I think good products are clear, approachable, and don't make 
                people feel stupid or overwhelmed.
              </p>
              <p>
                I spend a lot of time thinking about how interfaces should behave, how information 
                should be structured, and whether something feels intuitive or just looks nice. 
                I'm still figuring things out, but I try to make thoughtful decisions along the way.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="pt-12 border-t border-gray-200">
            <h2 className="text-2xl text-gray-900 mb-6 font-semibold">
              What I work with
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-sm font-medium text-accent-600 mb-3">Frontend</p>
                <p className="text-base text-gray-700">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-sm font-medium text-accent-600 mb-3">Tools</p>
                <p className="text-base text-gray-700">
                  Git, Figma, VS Code
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-sm font-medium text-accent-600 mb-3">Currently learning</p>
                <p className="text-base text-gray-700">
                  Accessibility practices, animation, design systems
                </p>
              </div>
            </div>
          </section>

          {/* Contact Note */}
          <section className="pt-8">
            <p className="text-sm text-gray-600">
              If you'd like to work together or just chat, feel free to{' '}
              <a href="/contact" className="text-accent-600 hover:text-accent-700 transition-colors duration-200 underline decoration-accent-200 hover:decoration-accent-600">
                reach out
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

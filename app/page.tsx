import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: 'PennyPath',
      description: 'A beginner-friendly personal finance web app designed to remove shame and jargon from money tracking.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      link: '/projects/pennypath',
    },
    {
      id: 2,
      title: 'SibsLove',
      description: 'A fully usable emotional companion web app designed as a warm, supportive presence — inspired by my sister\'s real-life struggles and the kind of comfort she needed.',
      techStack: ['React (via Base44)', 'Prompt Design', 'UX Flow Design'],
      link: '/projects/sibslove',
    },
    {
      id: 3,
      title: 'CareerIQ',
      description: 'A full-stack career exploration platform with skill tests, personality analysis, and insights.',
      techStack: ['React', 'Express', 'PostgreSQL'],
      link: '/projects/careeriq',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 sm:px-8 lg:px-12 pt-12 pb-16 bg-gradient-to-b from-accent-50/50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 text-sm font-medium rounded-full mb-6">
              Student Developer
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight font-extrabold tracking-tight">
              Hi, I'm <span className="text-accent-600">Zainab Shujat</span>.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed">
              I'm building web applications that try to understand people—from finance tools 
              that remove shame, to emotional companions that offer comfort, to platforms that help with career clarity. 
              I care about making things that feel thoughtful and actually useful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-600 text-white text-base font-medium rounded-lg hover:bg-accent-700 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                View Projects
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-600 text-accent-600 text-base font-medium rounded-lg hover:bg-accent-50 transition-all duration-200 hover:-translate-y-1"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Text */}
      <section className="px-6 sm:px-8 lg:px-12 py-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-base text-gray-500">
            Each project explores a different way to help people navigate something difficult.
          </p>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="px-6 sm:px-8 lg:px-12 pb-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4 font-extrabold tracking-tight">
              Featured Work
            </h2>
            <div className="w-24 h-1.5 bg-accent-600"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                link={project.link}
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <a
              href="/projects"
              className="inline-flex items-center text-base text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200 group"
            >
              View all projects
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Git', 'Figma', 'REST APIs'].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-gray-50 rounded-lg text-center font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
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
    {
      id: 4,
      title: 'Notes From a B.Tech Brain',
      description: 'A long-running tech and reflection newsletter.',
      techStack: ['Writing', 'Substack'],
      link: '/projects/newsletter',
    },
    {
      id: 5,
      title: 'suika lite',
      description: 'A clone of the fruit merge game Suika.',
      techStack: ['JavaScript', 'HTML5 Canvas'],
      link: '/projects/suika-lite',
    },
  ]

  return (
    <div className="min-h-screen px-6 sm:px-8 lg:px-12 pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl text-gray-900 mb-6 font-extrabold tracking-tight">
            Projects
          </h1>
          <div className="w-24 h-1.5 bg-accent-600 mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Selected work from recent years.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

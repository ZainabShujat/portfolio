interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  link?: string
}

export default function ProjectCard({ title, description, techStack, link }: ProjectCardProps) {
  return (
    <article className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-accent-300">
      {/* Project Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-accent-100 via-accent-50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-600/5 group-hover:bg-accent-600/10 transition-colors duration-300"></div>
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
            <div className="w-6 h-6 bg-accent-600 rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h2 className="text-xl text-gray-900 mb-3 font-semibold group-hover:text-accent-600 transition-colors">
          {title}
        </h2>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Link */}
        {link ? (
          <a
            href={link}
            className="inline-flex items-center text-sm text-accent-600 hover:text-accent-700 font-medium transition-all duration-200 group/link"
          >
            View Project
            <svg className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center text-sm text-gray-400 cursor-not-allowed">
            Coming Soon
          </span>
        )}
      </div>
    </article>
  )
}

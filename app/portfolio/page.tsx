import Link from 'next/link'

export default function Portfolio() {
  const projects = [
    {
      title: 'CareerIQ',
      category: 'Tools for Humans',
      description: 'Built a full-stack MERN career recommendation platform combining psychometric analysis, skill assessments, and rule-based AI insights. Features include 24-question personality assessment, weighted career-matching algorithm, interactive insights dashboard, and secure JWT authentication. Fully deployed in production.',
      tagline: 'Clarity in career confusion',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs'],
      year: '2025',
      color: 'blue',
      link: 'https://careeriq-ten.vercel.app/',
    },
    {
      title: 'Notes From a B.Tech Brain',
      category: 'Worlds & Ideas',
      description: 'Built a fully functional, multi-page blog platform hosting 50+ newsletter editions. Features custom homepage with category sections, mobile-responsive design, optimized navigation for long-form content, and SEO-ready structure. Serves 13-15 average engagement users/day with 40k+ impressions.',
      tagline: 'Thinking out loud',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Vercel'],
      year: 'Sep 2025 - Dec 2025',
      color: 'orange',
      link: 'https://btechbrain.vercel.app/',
      additionalLinks: [
        { label: 'LinkedIn Newsletter', url: 'https://www.linkedin.com/newsletters/7319367808327303168/' },
        { label: 'LinkedIn Page', url: 'https://www.linkedin.com/company/notes-from-a-b-tech-brain/' },
      ],
    },
    {
      title: 'Sentiment Analysis',
      category: 'Play & Experiment',
      description: 'Analyzing customer reviews from Amazon and Flipkart using Naive Bayes algorithm and NLP preprocessing techniques (tokenization, TF-IDF). Processed thousands of data points from e-commerce datasets, achieving ~87% model accuracy validated through confusion matrix, precision, and recall metrics.',
      tagline: 'Understanding what people feel',
      tech: ['Project Management', 'pandas', 'Python', 'NLP', 'Machine Learning'],
      year: 'Jul 2025 - Aug 2025',
      color: 'teal',
      link: 'https://zainab-sentiment-analysis.streamlit.app/',
    },
    {
      title: 'PennyPath',
      category: 'Tools for Humans',
      description: 'A simple, beginner-friendly personal finance web app built with Base44, designed to help students and freelancers track income, expenses, and goals without jargon or judgment. Features include plain-language categories, recurring rules, monthly summaries, goal setting, and CSV export.',
      tagline: 'Finance without the shame',
      tech: ['Base44', 'HTML', 'CSS', 'JavaScript', 'React'],
      year: 'May 2025 - Jun 2025',
      color: 'purple',
      link: 'https://penny-path-34bd8a3e.base44.app/',
    },
    {
      title: 'SibsLove',
      category: 'Tools for Humans',
      description: 'Built with Base44. Originally created exclusively as a gift for my sister, SibsLove is a deeply personalized web app designed as a "digital hug" and supportive companion. Features include customizable onboarding quiz, journaling space, mood tracker, Pomodoro study corner, and playful comfort tabs.',
      tagline: 'When you need someone to listen',
      tech: ['React', 'Base44', 'UX Design', 'Emotional Design'],
      year: 'Aug 2025',
      color: 'pink',
      link: 'https://sibs-love-068d4e42.base44.app/',
    },
    {
      title: 'Suika Lite',
      category: 'Play & Experiment',
      description: 'Drop fruits, watch them bounce, merge identical ones, and chase the biggest watermelon before the bowl overflows. Features realistic 2D physics (no engine shortcuts), merge chronology log, local high-score tracking, and clean overlays with custom fruit sprites. Built with Matter.js and p5.js.',
      tagline: 'Learning through play',
      tech: ['Matter.js', 'p5.js', 'JavaScript', 'Physics Engine'],
      year: 'Oct 2025',
      color: 'green',
      link: 'https://zainabshujat.github.io/Suika-Lite/',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="px-6 sm:px-8 lg:px-16 py-8 border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-black mb-4 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to entry
          </Link>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-2">
            Zainab Shujat
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xl text-gray-600">
              Developer · Designer · Student
            </p>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-green-700">Available for opportunities</span>
            </span>
          </div>
          <nav className="flex gap-6 text-sm font-mono">
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-black transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-gray-600 hover:text-black transition-colors">
              Experience
            </a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="px-6 sm:px-8 lg:px-16 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-6">About</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div>
              <p className="mb-4">
                A student developer who cares about why something exists, not just how it looks.
                I build web applications with a focus on clarity and usability.
              </p>
              <p>
                Finance tools designed to reduce anxiety. Emotional companion apps. Full-stack career platforms.
                What connects them is an interest in understanding who the product is for and what they actually need.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-3">Tech Stack</h3>
              <p className="text-sm mb-4">
                <span className="font-medium">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS<br/>
                <span className="font-medium">Backend:</span> Node.js, Express, MongoDB, PostgreSQL<br/>
                <span className="font-medium">Tools:</span> Git, Figma, VS Code
              </p>
              <h3 className="font-bold text-black mb-3">Contact</h3>
              <p className="text-sm">
                <a href="mailto:zainabshujatali@gmail.com" className="underline hover:no-underline">zainabshujatali@gmail.com</a><br/>
                <a href="https://github.com/ZainabShujat" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">GitHub</a> · 
                <a href="https://www.linkedin.com/in/zainab-shujat-web-developer/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline ml-2">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 sm:px-8 lg:px-16 py-12 border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-8">Selected Work</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="border-b border-black/10 pb-12 last:border-0">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="mb-2">
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black mb-2">
                      {project.title}
                    </h3>
                    <p className={`text-lg font-medium mb-4 text-${project.color}-600`}>
                      {project.tagline}
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="text-sm text-gray-600 mb-4">
                      <p className="font-mono">Year: {project.year}</p>
                      <p className="font-mono">Status: Live</p>
                    </div>
                    <div className="space-y-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors w-fit"
                      >
                        View Live
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      {project.additionalLinks && project.additionalLinks.map((link: any, i: number) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-gray-600 hover:text-black underline"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 sm:px-8 lg:px-16 py-12 border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-8">Experience</h2>
          <div className="space-y-10">
             {/* Knowledge Builder - Smartly */}
            <div className="border-l-2 border-gray-300 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-black">Knowledge Builder</h3>
                  <p className="text-gray-600">Smartly Creators Program</p>
                </div>
                <span className="text-sm text-gray-500 font-mono">Jan 2026 - Present</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Remote</p>
              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>• Engaged with fellow tech creators, Topic Moderators, and Topic Lead by participating in reviews, challenges, and community activities</li>
                <li>• Improved my content through structured feedback and best practices</li>
                <li>• Contributed to GitHub and shared knowledge with the community</li>
                <li>• Wrote and reviewed knowledge articles, shared best practices, and showcased contributions on GitHub</li>
                <li>• Focused on security, structured content, and community visibility while improving overall content quality</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3 italic">Learn Git, GitHub, and content writing best practices. Showcase your contributions on GitHub and your resume.</p>
            </div>


           
            {/* Creator and Author */}
            <div className="border-l-2 border-gray-300 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-black">Creator and Author</h3>
                  <p className="text-gray-600">Notes From A B. Tech Brain · Self-employed</p>
                </div>
                <span className="text-sm text-gray-500 font-mono">Apr 2025 - Present</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">India · Remote · 9 months</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Building a multi-format writing platform focused on tech clarity, student finance, soft skills, and STEM girlhood
              </p>
              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>• Writing long-form and bite-sized reflections on AI/ML concepts, student life, career growth, and productivity</li>
                <li>• Designing original newsletter banners, icons, and page visuals</li>
                <li>• Managing a consistent posting schedule (daily/weekly) across LinkedIn and Medium</li>
                <li>• Creating technical explainers on AI/ML topics with simplified diagrams and real-world parallels</li>
                <li>• Developed and launched a dedicated <a href="https://www.linkedin.com/company/notes-from-a-b-tech-brain/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">LinkedIn Page</a> in November 2025</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3 italic">Focus: Writing, Technical Communication, AI/ML Simplification, UX for Content, Visual Design, Personal Branding</p>
            </div>
             {/* Unified Mentor */}
            <div className="border-l-2 border-gray-300 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-black">Frontend Developer Intern</h3>
                  <p className="text-gray-600">Unified Mentor · Internship</p>
                </div>
                <span className="text-sm text-gray-500 font-mono">Oct 2025 - Jan 2026</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Remote · 3 months</p>
              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>• Developing and optimizing responsive web components using the MERN stack, improving UI speed and load efficiency across test builds by ~25%</li>
                <li>• Collaborating with mentors and peers on real-world client projects, following Agile sprints and Git-based version control</li>
                <li>• Focused on implementing clean design systems, accessibility, and component reusability to enhance front-end performance</li>
              </ul>
            </div>


           
            {/* Freelance Web Developer */}
            <div className="border-l-2 border-gray-300 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-black">Freelance Web Developer</h3>
                  <p className="text-gray-600">Freelance</p>
                </div>
                <span className="text-sm text-gray-500 font-mono">Aug 2025 - Oct 2025</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Uttar Pradesh, India · Remote · 3 months</p>
              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>• Designed and delivered custom web projects for student and creator clients using React, Matter.js, and p5.js, focusing on functionality and visual appeal</li>
                <li>• Created interactive front-end prototypes, including a physics-based mini game and a portfolio site, improving client engagement and usability</li>
                <li>• Managed end-to-end deployment, from concept to hosting, maintaining 100% on-time delivery across freelance projects</li>
                <li>• Built client relations through iterative feedback loops, maintaining 5/5 satisfaction ratings on initial projects</li>
              </ul>
            </div>

            {/* IBM AI Intern */}
            <div className="border-l-2 border-gray-300 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-black">Artificial Intelligence Intern</h3>
                  <p className="text-gray-600">IBM · Internship</p>
                </div>
                <span className="text-sm text-gray-500 font-mono">Jul 2025 - Aug 2025</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Remote · 2 months</p>
              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>• Completed a sentiment analysis project analyzing product reviews using the Naive Bayes algorithm and NLP preprocessing techniques (tokenization, TF-IDF)</li>
                <li>• Processed thousands of data points from e-commerce datasets to classify reviews as positive, neutral, or negative</li>
                <li>• Achieved a model accuracy of ~87%, validated through confusion matrix, precision, and recall metrics</li>
                <li>• Gained hands-on experience in machine learning pipelines, pandas data handling, and AI project documentation under IBM mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-8 lg:px-16 py-8 border-t border-black/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2025 Zainab Shujat. Building thoughtful things.
          </p>
        </div>
      </footer>
    </div>
  )
}

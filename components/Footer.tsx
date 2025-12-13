export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/ZainabShujat' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/zainab-shujat-web-developer' },
    { name: 'LinkedIn Page', href: 'https://www.linkedin.com/company/notes-from-a-b-tech-brain/' },
    { name: 'Email', href: 'mailto:zainabshujatali@gmail.com' },
  ]

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Info */}
          <div className="space-y-3">
            <p className="text-xl font-black tracking-tight">
              ZS
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} Zainab Shujat
            </p>
            <p className="text-sm text-gray-600">
              Built with intention
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

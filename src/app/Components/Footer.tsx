import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Heart, 
  MapPin, 
  Phone,
  Sparkles,
  ArrowUpRight,
  Code2,
  Palette,
  Zap
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/Pages/About' },
    { name: 'Skills', href: '/Pages/Skills' },
    { name: 'Projects', href: '/Pages/Project' },
    { name: 'Certificate', href: '/Pages/Certificate' },
    { name: 'Contact', href: '/Pages/Contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github, color: 'from-gray-400 to-gray-600' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'from-blue-400 to-blue-600' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'from-cyan-400 to-blue-500' },
    { name: 'Email', href: '#', icon: Mail, color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 mt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Enitech
              </div>
            </div>
            
            <p className="text-black font-bold text-lg max-w-md leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions and beautiful user experiences with modern technologies.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex items-center space-x-4 text-black font-bold">
              <div className="flex items-center space-x-2 hover:text-cyan-300 transition-colors duration-300">
                <Code2 className="w-5 h-5" />
                <span className="text-sm">Full Stack</span>
              </div>
              {/* <div className="w-1 h-1 bg-black rounded-full"></div> */}
              
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300">
                <Zap className="w-5 h-5" />
                <span className="text-sm">Performance</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon, color }) => (
                <a
                  key={name}
                  href={href}
                  className="group relative p-4 bg-white/5 backdrop-blur-md rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl"
                  aria-label={name}
                >
                  <Icon className={`w-5 h-5 text-black font-bold group-hover:text-white transition-all duration-300 group-hover:scale-110`} />
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/20 group-hover:to-blue-400/20 blur transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-center space-x-2 text-black font-bold hover:text-cyan-300 transition-all duration-300 py-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-cyan-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black">
              Let's Connect
            </h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-black font-bold">Email</p>
                    <p className="text-black font-bold text-sm group-hover:text-cyan-300 transition-colors duration-300">badmus.eniola@enitech.dev</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg">
                    <MapPin className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-black font-bold">Location</p>
                    <p className="text-black font-bold text-sm group-hover:text-green-300 transition-colors duration-300">Ibadan, Nigeria</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <Phone className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-black font-bold">Phone</p>
                    <p className="text-black font-bold text-sm group-hover:text-purple-300 transition-colors duration-300">+234 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-black font-bold text-sm">
                © {currentYear} Badmus Eniola (Enitech). All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <p className="text-black font-bold text-sm flex items-center">
                Built with 
                <Heart className="w-4 h-4 mx-2 text-red-400 animate-pulse" /> 
                using Next.js & Tailwind CSS
              </p>
              <div className="flex items-center space-x-2 text-xs text-black font-bold">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
    </footer>
  );
}
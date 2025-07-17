'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code, 
  FolderOpen, 
  FileText, 
  Mail, 
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/Pages/About', label: 'About', icon: User },
  { href: '/Pages/Skills', label: 'Skills', icon: Code },
  { href: '/Pages/Project', label: 'Projects', icon: FolderOpen },
  { href: '/Pages/Resume', label: 'Resume', icon: FileText },
  { href: '/Pages/Certificate', label: 'Certificate', icon: Award },
  { href: '/Pages/Contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with enhanced styling */}
          <Link href="/" className="group relative">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                Enitech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`group relative flex items-center space-x-2 px-4 py-2.5 rounded-full transition-all duration-300 font-medium ${
                  pathname === href
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20'
                    : 'hover:bg-white/10 text-gray-300 hover:text-cyan-300'
                }`}
              >
                <Icon className={`w-4 h-4 transition-all duration-300 ${
                  pathname === href 
                    ? 'text-cyan-400 drop-shadow-lg' 
                    : 'group-hover:text-cyan-400 group-hover:scale-110'
                }`} />
                <span className="text-sm">{label}</span>
                {pathname === href && (
                  <>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-pulse"></div>
                  </>
                )}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden group relative p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-cyan-400 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/10">
            <div className="flex flex-col space-y-2 mt-6">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 font-medium ${
                    pathname === href
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20 border border-cyan-500/20'
                      : 'hover:bg-white/10 text-gray-300 hover:text-cyan-300 border border-transparent hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      pathname === href
                        ? 'bg-cyan-500/20 shadow-lg shadow-cyan-500/20'
                        : 'group-hover:bg-white/10'
                    }`}>
                      <Icon className={`w-5 h-5 transition-all duration-300 ${
                        pathname === href 
                          ? 'text-cyan-400' 
                          : 'text-gray-400 group-hover:text-cyan-400'
                      }`} />
                    </div>
                    <span className="text-base">{label}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                    pathname === href
                      ? 'text-cyan-400 translate-x-0 opacity-100'
                      : 'text-gray-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-cyan-400'
                  }`} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
    </nav>
  );
}
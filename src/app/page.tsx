"use client";
import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Server, 
  Layers, 
  Smartphone,
  ChevronRight,
  ArrowDown,
  Mail,
  Download,
  Github,
  Monitor,
  Calendar,
  Zap,
  Star
} from 'lucide-react';

const Homepage = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'Frontend Engineer',
    'Backend Engineer',
    'Mobile App Developer',
    'Tech Entrepreneur',
    'Startup Buidler',
  ];

  const stats = [
    { label: 'Projects Completed', value: '5+', icon: Code2 },
    { label: 'Years Experience', value: '3+', icon: Calendar },
    { label: 'Technologies', value: '15+', icon: Zap },
    { label: 'Happy Clients', value: '5+', icon: Star }
  ];

  const services = [
    {
      icon: Monitor,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, Next.js, and TypeScript',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with Node.js, Express, NestJS, and Java',
      skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'PHP/MYSQL', 'Firebase', 'Supabase', 'PostgreSQL', 'MySQL', 'MongoDB'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Layers,
      title: 'Full Stack Development',
      description: 'End-to-end application development from database to user interface',
      skills: ['MERN Stack', 'PHP/MYSQL', 'Next.js', 'Database Design', 'API Development'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with React Native and backend integration',
      skills: ['React Native', 'Mobile Backend', 'API Integration', 'Firebase', 'Supabase'],
      color: 'from-orange-400 to-red-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden mt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Available for projects</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Badmus Eniola
            </h1>
            
            <div className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6 h-12">
              <span className="inline-block transition-all duration-500">
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technologies. 
              Specialized in full-stack development, mobile applications, and scalable backend solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              <span className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Delivering comprehensive development solutions across the full technology stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your next project and create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                <span className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Start a Project</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                <span className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>View GitHub</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
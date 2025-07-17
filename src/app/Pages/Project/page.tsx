"use client";
import React from 'react';
import { Code2, ExternalLink, Github, ArrowRight, Zap, Star, Sparkles, Mail } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
};

const ProjectsPage = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart, checkout, and admin dashboard built with Next.js and Stripe integration.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/ecommerce.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with drag-and-drop interface, real-time updates, and team collaboration features.",
      tags: ["React", "Firebase", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/taskapp.jpg"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Web application leveraging OpenAI API to generate marketing content and blog posts.",
      tags: ["Next.js", "OpenAI API", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/aigenerator.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Health & Fitness Tracker",
      description: "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.",
      tags: ["React Native", "GraphQL", "Node.js"],
      githubUrl: "#",
      image: "/fitness.jpg"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Custom designed portfolio website with animations and dark/light mode (this website).",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/portfolio.jpg"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media managers with data visualization and reporting.",
      tags: ["React", "D3.js", "Express"],
      githubUrl: "#",
      image: "/dashboard.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm">My Work</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Projects Portfolio
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A collection of my recent work showcasing full-stack development skills and design thinking.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-8 flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-400/90 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center z-20">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex flex-col justify-between bg-white/5 backdrop-blur-md">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/10 hover:bg-white/20 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 flex items-center">
          <Code2 className="w-5 h-5 mr-2 text-cyan-400" />
          All Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 bg-white/5 backdrop-blur-md">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs border border-white/10 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <a 
                    href={`/project/${project.id}`} 
                    className="text-sm flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    View details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl p-12 border border-white/10">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Have a project in mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's collaborate to bring your ideas to life with cutting-edge technology and design.
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            <span className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
"use client";
import React, { useState } from 'react';
import {
  Code2,
  Server,
  Smartphone,
  Layers,
  Database,
  Cpu,
  Palette,
  Zap,
  Globe,
  GitBranch,
  Shield,
  Terminal,
  Type,
  Figma,
  Github,
  Gitlab,
  Codepen,
  Codesandbox,
  Package,
  Youtube,
  Twitter,
  Linkedin,
  Mail,
  ChevronRight,
  Download,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillCategories = [
    { id: 'frontend', label: 'Frontend', icon: <Code2 className="w-5 h-5" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-5 h-5" /> },
    // { id: 'mobile', label: 'Mobile', icon: <Smartphone className="w-5 h-5" /> },
    // { id: 'design', label: 'Design', icon: <Palette className="w-5 h-5" /> }
  ];

  const skillsData: { [key: string]: Skill[] } = {
    frontend: [
      { name: 'React', icon: <Cpu className="w-6 h-6 text-blue-400" />, color: 'from-blue-400 to-blue-600' },
      { name: 'Next.js', icon: <Layers className="w-6 h-6 text-gray-300" />, color: 'from-gray-600 to-gray-800' },
      { name: 'TypeScript', icon: <Type className="w-6 h-6 text-blue-600" />, color: 'from-blue-500 to-blue-700' },
      { name: 'JavaScript', icon: <Code2 className="w-6 h-6 text-yellow-400" />, color: 'from-yellow-400 to-yellow-600' },
      { name: 'HTML5', icon: <Terminal className="w-6 h-6 text-orange-500" />, color: 'from-orange-400 to-red-500' },
      { name: 'CSS3', icon: <Palette className="w-6 h-6 text-cyan-400" />, color: 'from-cyan-400 to-blue-500' },
      { name: 'TailwindCSS', icon: <Palette className="w-6 h-6 text-cyan-400" />, color: 'from-cyan-400 to-blue-500' },
      { name: 'Bootstrap', icon: <Palette className="w-6 h-6 text-cyan-400" />, color: 'from-cyan-400 to-blue-500' },
      { name: 'Material UI', icon: <Palette className="w-6 h-6 text-cyan-400" />, color: 'from-cyan-400 to-blue-500' },

    ],
    backend: [
      { name: 'Node.js', icon: <Terminal className="w-6 h-6 text-green-500" />, color: 'from-green-400 to-green-600' },
      { name: 'Express', icon: <GitBranch className="w-6 h-6 text-gray-300" />, color: 'from-gray-500 to-gray-700' },
      // { name: 'NestJS', icon: <Shield className="w-6 h-6 text-red-500" />, color: 'from-red-500 to-red-700' },
      { name: 'Java', icon: <Server className="w-6 h-6 text-green-400" />, color: 'from-green-500 to-green-700' },
      { name: 'Spring Boot', icon: <Code2 className="w-6 h-6 text-blue-500" />, color: 'from-blue-500 to-blue-700' },
      { name: 'PostgreSQL', icon: <Database className="w-6 h-6 text-indigo-400" />, color: 'from-indigo-400 to-indigo-600' },
      { name: 'MySQL', icon: <Database className="w-6 h-6 text-blue-400" />, color: 'from-blue-400 to-blue-600' },
      { name: 'MongoDB', icon: <Database className="w-6 h-6 text-green-400" />, color: 'from-green-400 to-emerald-600' }
    ],
    // mobile: [
    //   { name: 'React Native', icon: <Smartphone className="w-6 h-6 text-blue-400" />, color: 'from-blue-400 to-purple-500' },
    //   { name: 'Expo', icon: <Smartphone className="w-6 h-6 text-gray-300" />, color: 'from-gray-500 to-gray-700' },
    //   { name: 'Mobile UI', icon: <Palette className="w-6 h-6 text-pink-400" />, color: 'from-pink-400 to-purple-500' },
    //   { name: 'Firebase', icon: <Globe className="w-6 h-6 text-yellow-500" />, color: 'from-yellow-400 to-yellow-600' },
    //   { name: 'Supabase', icon: <Smartphone className="w-6 h-6 text-blue-500" />, color: 'from-blue-500 to-blue-700' }
    // ],
    
  };

  const tools = [
    { name: 'Git/GitHub', icon: <Github className="w-6 h-6 text-gray-300" /> },
    { name: 'GitLab', icon: <Gitlab className="w-6 h-6 text-orange-500" /> },
    { name: 'VS Code', icon: <Code2 className="w-6 h-6 text-blue-500" /> },
    { name: 'IntelliJ Idea', icon: <Code2 className="w-6 h-6 text-blue-500" /> },
    { name: 'Postman', icon: <Globe className="w-6 h-6 text-orange-400" /> },
    { name: 'NPM', icon: <Package className="w-6 h-6 text-red-500" /> },
    { name: 'Docker', icon: <Codesandbox className="w-6 h-6 text-blue-400" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Technical Expertise</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Skills & Tools
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my technical capabilities across different domains of development
            </p>
          </div>
        </div>
      </section>

      {/* Skills Navigation */}
      <section className="py-12 bg-white/5 backdrop-blur-md sticky top-0 z-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Display */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData[activeTab].map((skill: Skill, index: number) => (
              <div key={index} className="group p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-lg`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button className="text-sm flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Development Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The tools and platforms I use daily to build amazing products
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl p-12 border border-white/10">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Have a project in mind? Let's discuss how I can help bring your ideas to life with my technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
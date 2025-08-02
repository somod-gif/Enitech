"use client";
import React from "react";
import {
  Code2,
  Server,
  Laptop,
  ChevronRight,
  Mail,
  Download,
  Award,
  Star,
  Rocket,
  Cpu,
  Terminal,
  Truck,
  Printer,
  ShoppingCart,
} from "lucide-react";

const AboutPage = () => {
  const timeline = [
    {
      year: "Jan 2025 - Present",
      title: "Full Stack Web Developer",
      company: "59Minutes Prints",
      description:
        "Leading frontend development and backend integration for a print-on-demand platform. Built with Next.js, Firebase Auth, Node.js, and MongoDB.",
      icon: <Printer className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
    },
    {
      year: "June 2025 - Present",
      title: "Full Stack Web Developer",
      company: "Meu Deliver",
      description:
        "Developing a delivery and logistics web app using modern stacks like Next.js, Express.js, and Tailwind. Focused on performance and user experience.",
      icon: <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />,
    },
    {
      year: "May 2025 - Present",
      title: "Frontend Engineer Intern",
      company: "Accessivo",
      description:
        "Collaborating with the product team to deliver responsive user interfaces and frontend features for a fintech education platform using Next.js and Tailwind CSS.",
      icon: <Laptop className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />,
    },
    {
      year: "May 2025 - Present",
      title: "Frontend Engineer",
      company: "Kaihma Startup",
      description:
        "Architecting scalable components for Kaihma — a commerce operating system for African vendors. Focused on a mobile-first, trust-oriented UI using Next.js.",
      icon: <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />,
    },
    {
      year: "2023 - Present",
      title: "Frontend Developer (Freelance)",
      company: "Self-Employed",
      description:
        "Worked on multiple freelance projects delivering responsive UIs using Next.js, Tailwind CSS, and Firebase. Delivered clean, maintainable codebases.",
      icon: <Laptop className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />,
    },
    {
      year: "2022 - Present",
      title: "Student Developer",
      company: "FUTMinna",
      description:
        "Pursuing a degree in Information Technology while contributing to software development projects and internships, sharpening both frontend and backend skills.",
      icon: <Server className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />,
    },
  ];

  const technologies = [
    {
      name: "React/Next.js",
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      category: "Frontend",
    },
    {
      name: "Node.js/Express.js",
      icon: <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />,
      category: "Backend",
    },
    {
      name: "TypeScript",
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />,
      category: "Language",
    },
    {
      name: "MongoDB",
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
      category: "Database",
    },
    {
      name: "MySQL",
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
      category: "Database",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm text-gray-300">About Me</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                My Developer Journey
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I'm Badmus Eniola, a passionate full-stack developer with{" "}
                {new Date().getFullYear() - 2022}+ years of experience crafting
                digital experiences. My journey has taken me from backend
                systems to interactive frontends and cross-platform mobile
                applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                <button className="group relative px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex-1 sm:flex-none">
                  <span className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Contact Me</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button className="group px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-md flex-1 sm:flex-none">
                  <span className="flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Download CV</span>
                  </span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-1 backdrop-blur-md border border-white/10 max-w-md mx-auto lg:max-w-none">
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 animate-pulse" />
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-2xl">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Professional Timeline
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              My career progression and key milestones in tech
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 relative">
            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-blue-500/30 to-purple-500/30"></div>
            
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-blue-500/30 to-purple-500/30"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Mobile Layout */}
                <div className="md:hidden flex items-start space-x-4">
                  <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border-2 border-white/10 group-hover:border-cyan-400 transition-all flex-shrink-0 mt-2">
                    {item.icon}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                      <span className="text-xs sm:text-sm font-medium text-cyan-400 block mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-300 mb-2 sm:mb-3 text-sm sm:text-base">{item.company}</p>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <div className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'}`}>
                    <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                      <span className="text-sm font-medium text-cyan-400 block mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-300 mb-3">{item.company}</p>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Desktop timeline dot */}
                    <div className="absolute top-8 w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border-2 border-white/10 group-hover:border-cyan-400 transition-all" 
                         style={{
                           [index % 2 === 0 ? 'right' : 'left']: '-21px'
                         }}>
                      {item.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              My Tech Stack
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                  {tech.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10 text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Development Philosophy
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              "I'm passionate about building web applications that are scalable,
              high-performing, and reliable. My focus is on clean code
              architecture, cloud integration, and seamless full-stack
              development that powers real-world solutions."
            </p>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent my-4 sm:my-6 md:my-8"></div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Currently on a continuous journey learning:{" "}
              <span className="text-cyan-300">Cloud Engineering</span>,{" "}
              <span className="text-blue-300">DevOps Practices</span>,{" "}
              <span className="text-emerald-300">
                Enterprise Application Architecture
              </span>
              , and <span className="text-fuchsia-300">AI Integration</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
"use client";
import React from "react";
import {
  Code2,
  Server,
  Layers,
  Smartphone,
  ChevronRight,
  Mail,
  Download,
  Github,
  ExternalLink,
  Calendar,
  Zap,
  Database,
  Globe,
  Monitor,
  Coffee,
  Award,
  Star,
  TrendingUp,
  Rocket,
  Cpu,
  Terminal,
  Truck,
  Printer,
} from "lucide-react";

const AboutPage = () => {
  const timeline = [
    {
      year: "June 2025 - Present",
      title: "Full Stack Web Developer",
      company: "Meu Deliver",
      description:
        "Developing a delivery and logistics web app using modern stacks like Next.js, Express.js, and Tailwind. Focused on performance and user experience.",
      icon: <Truck className="w-5 h-5 text-yellow-500" />,
    },
    {
      year: "Jan 2025 - Present",
      title: "Full Stack Web Developer",
      company: "59Minutes Prints",
      description:
        "Leading frontend development and backend integration for a print-on-demand platform. Built with Next.js, Firebase Auth, Node.js, and MongoDB.",
      icon: <Printer className="w-5 h-5 text-purple-400" />,
    },
    {
      year: "2024 - Present",
      title: "Full Stack Developer Intern",
      company: "Infinity Soltech",
      description:
        "Building full-stack web applications using the MERN stack, focusing on real-world projects and best practices in modern development workflows.",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    },
    {
      year: "2023 - Present",
      title: "Frontend Developer (Freelance)",
      company: "Self-Employed",
      description:
        "Designed and developed responsive UIs for client projects using Next.js, Tailwind CSS, and Firebase. Delivered optimized, production-ready code.",
      icon: <Monitor className="w-5 h-5 text-blue-400" />,
    },
    {
      year: "2022 - Present",
      title: "Student Developer",
      company: "FUTMinna",
      description:
        "Studying Information Technology while actively working on personal and team-based software projects. Strengthening skills in backend, frontend, and DevOps tools.",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
    },
  ];

  const technologies = [
    {
      name: "React/Next.js",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      category: "Frontend",
    },
    {
      name: "Node.js/Express.js",
      icon: <Terminal className="w-6 h-6 text-green-400" />,
      category: "Backend",
    },
    {
      name: "React Native",
      icon: <Smartphone className="w-6 h-6 text-purple-400" />,
      category: "Mobile",
    },
    {
      name: "TypeScript",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      category: "Language",
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      category: "Database",
    },
    {
      name: "MongoDB",
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      category: "Database",
    },
    {
      name: "MySQL",
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      category: "Database",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">About Me</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Developer Journey
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                I'm Badmus Eniola, a passionate full-stack developer with{" "}
                {new Date().getFullYear() - 2022}+ years of experience crafting
                digital experiences. My journey has taken me from backend
                systems to interactive frontends and cross-platform mobile
                applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  <span className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Contact Me</span>
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

            <div className="md:w-1/2 relative">
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-1 backdrop-blur-md border border-white/10">
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  {/* Replace with your actual image */}
                  <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <Rocket className="w-16 h-16 text-cyan-400 animate-pulse" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-2xl">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Professional Timeline
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My career progression and key milestones in tech
            </p>
          </div>

          <div className="space-y-8 relative">
            <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/30 via-blue-500/30 to-purple-500/30"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative group ${
                  index % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:pl-16 md:text-left"
                }`}
              >
                <div
                  className={`p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-cyan-400">
                      {item.year}
                    </span>
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center absolute -left-4 md:left-1/2 md:-translate-x-1/2 top-6 border-2 border-white/10 group-hover:border-cyan-400 transition-all">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-blue-300 mb-3">{item.company}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              My Tech Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl p-12 border border-white/10">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Development Philosophy
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              "I’m passionate about building web applications that are scalable,
              high-performing, and reliable. My focus is on clean code
              architecture, cloud integration, and seamless full-stack
              development that powers real-world solutions."
            </p>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent my-8"></div>
            <p className="text-gray-400">
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

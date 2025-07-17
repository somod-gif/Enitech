"use client";
import React from 'react';
import { Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, Globe, Award, Star } from 'lucide-react';

const ResumePage = () => {
  const personalInfo = {
    name: "Badmus Eniola",
    title: "Full Stack Developer",
    email: "badmus.eniola@enitech.dev",
    phone: "+234 XXX XXX XXXX",
    location: "Ibadan, Nigeria",
    about: "Passionate full-stack developer with 5+ years of experience building modern web applications. Specialized in JavaScript technologies across the whole stack with a focus on performance and user experience."
  };

  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Node.js/Express", level: 88 },
    { name: "Java Spring Boot", level: 85 },
    { name: "PostgreSQL/MySQL", level: 87 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 }
  ];

  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: [
        "Led development of e-commerce platform serving 50k+ monthly users",
        "Implemented CI/CD pipeline reducing deployment time by 70%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2021",
      description: [
        "Built responsive UIs for 15+ client projects",
        "Optimized web performance achieving 90+ Lighthouse scores",
        "Collaborated with designers to implement design systems"
      ]
    },
    {
      role: "Junior Developer",
      company: "Startup Ventures",
      period: "2017 - 2019",
      description: [
        "Developed RESTful APIs for mobile applications",
        "Implemented authentication systems",
        "Fixed bugs and improved existing codebase"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Sc Computer Science",
      institution: "University of Ibadan",
      period: "2013 - 2017",
      description: "Graduated with First Class Honors"
    },
    {
      degree: "AWS Certified Developer",
      institution: "Amazon Web Services",
      period: "2020",
      description: "Specialization in cloud architecture"
    }
  ];

  const achievements = [
    "Won 1st place at National Hackathon 2020",
    "Open source contributor with 500+ GitHub stars",
    "Speaker at React Conference 2022",
    "Published technical articles with 50k+ views"
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm">Professional Summary</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          My Resume
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my professional journey, skills, and accomplishments.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-8">
          {/* Personal Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold">BE</span>
              </div>
              <h2 className="text-2xl font-bold">{personalInfo.name}</h2>
              <p className="text-cyan-400">{personalInfo.title}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>{personalInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 group flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Skills */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Code2 className="w-5 h-5 mr-2 text-cyan-400" />
              Skills
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-400" />
              Achievements
            </h3>
            
            <ul className="space-y-3">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-purple-400" />
              About Me
            </h3>
            <p className="text-gray-300 leading-relaxed">{personalInfo.about}</p>
          </div>

          {/* Experience */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-blue-400" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l border-white/10 last:border-l-0 last:pb-0">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h4 className="text-lg font-bold">{exp.role}</h4>
                      <p className="text-cyan-400">{exp.company}</p>
                    </div>
                    <div className="mt-1 sm:mt-0 px-3 py-1 bg-white/10 rounded-full text-sm">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-green-400" />
              Education & Certifications
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l border-white/10 last:border-l-0 last:pb-0">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <p className="text-green-400">{edu.institution}</p>
                    </div>
                    <div className="mt-1 sm:mt-0 px-3 py-1 bg-white/10 rounded-full text-sm">
                      {edu.period}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl p-12 border border-white/10">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how I can contribute to your team or project.
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            <span className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
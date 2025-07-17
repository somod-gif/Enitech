"use client";
import React from 'react';
import { Award, BadgeCheck, BookOpen, Code, Zap, Download, ArrowRight, Mail } from 'lucide-react';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
  image: string;
  featured?: boolean;
};

const CertificatePage = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "June 2023",
      description: "Demonstrated ability to develop and maintain applications on AWS",
      skills: ["Cloud Computing", "AWS Services", "Serverless Architecture"],
      credentialUrl: "#",
      image: "/aws-cert.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Professional React Developer",
      issuer: "Meta",
      date: "March 2023",
      description: "Advanced React concepts including hooks, context, and performance optimization",
      skills: ["React", "JavaScript", "Frontend Development"],
      credentialUrl: "#",
      image: "/react-cert.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Node.js Certified Developer",
      issuer: "OpenJS Foundation",
      date: "January 2023",
      description: "Backend development with Node.js and Express framework",
      skills: ["Node.js", "Express", "REST APIs"],
      credentialUrl: "#",
      image: "/node-cert.jpg"
    },
    {
      id: 4,
      title: "TypeScript Masterclass",
      issuer: "Microsoft",
      date: "November 2022",
      description: "Advanced TypeScript patterns and best practices",
      skills: ["TypeScript", "Static Typing", "TS Config"],
      credentialUrl: "#",
      image: "/typescript-cert.jpg"
    },
    {
      id: 5,
      title: "Java Spring Boot Professional",
      issuer: "VMware",
      date: "September 2022",
      description: "Building enterprise applications with Spring Boot",
      skills: ["Java", "Spring Boot", "Microservices"],
      credentialUrl: "#",
      image: "/spring-cert.jpg"
    },
    {
      id: 6,
      title: "Database Design Specialist",
      issuer: "MongoDB University",
      date: "July 2022",
      description: "NoSQL database design and optimization",
      skills: ["MongoDB", "Database Design", "Aggregation"],
      credentialUrl: "#",
      image: "/mongodb-cert.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm">Professional Certifications</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          My Certifications
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Validated proof of my technical expertise and continuous learning journey.
        </p>
      </section>

      {/* Featured Certificates */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-8 flex items-center">
          <BadgeCheck className="w-5 h-5 mr-2 text-yellow-400" />
          Featured Certifications
        </h2>
        
        <div className="grid grid-cols-1 gap-8">
          {certificates.filter(c => c.featured).map((cert) => (
            <div key={cert.id} className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 z-10"></div>
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {cert.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-400/90 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center z-20">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex flex-col justify-between bg-white/5 backdrop-blur-md">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-blue-400">{cert.issuer}</span>
                      <span className="text-gray-400 text-sm">{cert.date}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{cert.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/10 hover:bg-white/20 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {cert.credentialUrl && (
                      <a 
                        href={cert.credentialUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="w-5 h-5" />
                        <span>View Credential</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Certificates */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 flex items-center">
          <Award className="w-5 h-5 mr-2 text-cyan-400" />
          All Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.filter(c => !c.featured).map((cert) => (
            <div 
              key={cert.id} 
              className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 bg-white/5 backdrop-blur-md">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {cert.title}
                </h3>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-sm text-blue-400">{cert.issuer}</span>
                  <span className="text-xs text-gray-400">{cert.date}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs border border-white/10 hover:bg-white/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      className="text-sm flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  )}
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
            Ready to Verify My Skills?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Contact me for credential verification or to discuss how I can apply these skills to your projects.
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

export default CertificatePage;
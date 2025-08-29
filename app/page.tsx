
"use client";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Mani2453", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mani-freelance-developer-980289381/", icon: Linkedin },
];
// Allowed color keys for projects
type ProjectColor = 'purple' | 'blue' | 'green' | 'pink';

// Project data array
interface Project {
  title: string;
  description: string;
  image: string;
  color: ProjectColor;
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Task Management App",
    description:
      "A modern, full-stack web application for organizing work efficiently. Features secure authentication (JWT), project and task management, real-time feedback, and a clean, responsive dashboard. Built with Next.js, MongoDB, and Tailwind CSS. All data is private to each user.",
    image: "/next.svg",
    color: "purple",
    live: "https://task-management-seven-pearl.vercel.app/",
    github: "https://github.com/Mani2453/task-management"
  }
];

// Map color names to Tailwind border/text/bg classes
const colorClassMap: Record<ProjectColor, { border: string; text: string; hoverBg: string }> = {
  purple: {
    border: "border-purple-100",
    text: "text-purple-700",
    hoverBg: "hover:bg-purple-50"
  },
  blue: {
    border: "border-blue-100",
    text: "text-blue-700",
    hoverBg: "hover:bg-blue-50"
  },
  green: {
    border: "border-green-100",
    text: "text-green-700",
    hoverBg: "hover:bg-green-50"
  },
  pink: {
    border: "border-pink-100",
    text: "text-pink-700",
    hoverBg: "hover:bg-pink-50"
  },
};
export default function Portfolio() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-900 font-sans relative overflow-x-hidden pt-20 pb-24">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-lg flex justify-center rounded-b-2xl transition-all">
        <ul className="flex gap-8 py-4 text-lg font-medium">
          {[
            { href: "#hero", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative transition text-gray-900 hover:text-primary focus:text-primary px-1"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-full h-[2.5px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left pointer-events-none" />
              </a>
            </li>
          ))}
        </ul>
        <style jsx global>{`
      nav ul li a {
        position: relative;
        display: inline-block;
      }
      nav ul li a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2.5px;
        background: linear-gradient(to right, #3b82f6, #a21caf);
        border-radius: 9999px;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s;
      }
      nav ul li a:hover::after, nav ul li a:focus::after {
        transform: scaleX(1);
      }
    `}</style>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6 animate-fade-in relative">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Hi, I&apos;m Manikanta <span className="inline-block animate-wave">👋</span>
        </h1>
        <h2 className="text-2xl mb-6 text-gray-700 font-semibold">
          Freelance Full Stack Developer <span className="text-primary">|</span> React <span className="text-primary">|</span> Next.js <span className="text-primary">|</span> Node.js
        </h2>
        <div className="flex gap-4 justify-center mb-6">
          {socialLinks.map((link) => {
            const LucideIcon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform text-gray-700 hover:text-primary"
                aria-label={link.name}
              >
                <LucideIcon className="w-8 h-8" />
              </a>
            );
          })}
        </div>
        <a
          href="mailto:mani3481300@gmail.com"
          className="inline-block mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400 animate-bounce"
        >
          Hire Me
        </a>
        {/* Decorative wave */}
        <svg className="absolute bottom-0 left-0 w-full" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f3f4f6" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center px-6 animate-fade-in-up relative">
        {/* Decorative wave top */}
        <svg className="absolute -top-16 left-0 w-full" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f3f4f6" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          I am a passionate and results-driven Full Stack Developer with a proven track record of delivering high-quality, scalable web applications. With expertise in <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">Next.js</span>, <span className="text-primary font-semibold">Node.js</span>, and <span className="text-primary font-semibold">MongoDB</span>, I help businesses and startups transform their ideas into robust digital solutions. My focus is on clean code, modern UI/UX, and seamless user experiences. I thrive in collaborative environments and am always eager to learn and implement the latest technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-100 via-white to-blue-50 text-center px-6 animate-fade-in-up relative">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            "React.js", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "JavaScript", "GitHub",
            "Python", "TypeScript", "MySQL", "PostgreSQL"
          ].map((skill) => (
            <Card key={skill} className="hover:scale-110 transition-transform shadow-lg bg-white/70 backdrop-blur border border-blue-100">
              <CardContent className="p-4 font-medium text-lg text-blue-900 tracking-wide flex items-center justify-center">
                {skill}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Decorative wave */}
        <svg className="absolute -bottom-16 left-0 w-full" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </section>

      {/* Projects Section */}
  <section id="projects" className="py-20 bg-white text-center px-6 animate-fade-in-up relative mb-8">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => {
            const colorClasses = colorClassMap[project.color];
            return (
              <Card
                key={project.title}
                className={`hover:shadow-2xl transition-shadow group bg-white/80 backdrop-blur border ${colorClasses.border}`}
              >
                <CardContent className="p-6 rounded-2xl">
                  <img src={project.image} alt={project.title} className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className={`text-2xl font-semibold mb-2 ${colorClasses.text} group-hover:text-primary transition-colors duration-300`}>{project.title}</h3>
                  <p className="mb-4 text-gray-700">{project.description}</p>
                  <div className="flex justify-center gap-4">
                    <Button asChild variant="outline" className={colorClasses.hoverBg}>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </Button>
                    <Button asChild variant="outline" className={colorClasses.hoverBg}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Decorative wave */}
        <svg className="absolute -bottom-16 left-0 w-full" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f3f4f6" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </section>
      {/* Floating Back-to-Top Button */}
      {showTopBtn && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-2xl hover:scale-110 focus:scale-110 transition-transform animate-fade-in-up focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs'
import Link from 'next/link'

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all")
  
  const projects = [
    
    {
      title: "Credit Hero Frontend",
      description: "A credit management platform that allows users to track and manage their credit scores, view credit reports, and receive personalized recommendations to improve their financial health. An Interacticve responsive design built with Next.js and Tailwind CSS based on Typescript.",
      image: "/projects/Credit-Hero.png",
      tags: ["Typescript", "Next.js", "Tailwind.css"],
      category: "backend",
      demoLink: "https://research-credit-frontend.vercel.app/",
      githubLink: "https://github.com/Arif-Ur-Rahman/credit-hero"
    },
    {
      title: "Foody Moody",
      description: "A restaurant website with menu browsing, online ordering, and user reviews. Built with React and interactive design.",
      image: "/projects/Foodymoody.png",
      tags: ["Typescript", "Express", "MongoDB", "JWT"],
      category: "backend",
      demoLink: "https://foody-moody-restaurant.web.app/",
      githubLink: "#https://github.com/Arif-Ur-Rahman/foody-moody-shakil"
    },
    {
      title: "Dr. Sarwar Kamal Portfolio",
      description: "Its a portfolio website for Dr. Sarwar Kamal, showcasing his work, achievements, and services as a researcher in Australia. I worked on it as a freelance project to help him establish an online presence.",
      image: "/projects/sarwar-sir.png",
      tags: ["Typescript", "Next.js", "Express.js", "MongoDB"],
      category: "fullstack",
      demoLink: "https://dr-sarwar-sir.vercel.app/",
      githubLink: "https://github.com/Arif-Ur-Rahman/dr-sarwar-sir",
      backend: "https://github.com/engWaliullah/real-state-backend"
    },
    {
      title: "Simple Authentication System",
      description: "A simple authentication system built with Next.js for the frontend and Python with Fast API for the backend. It includes user registration, login, and protected routes using JWT for secure access.",
      image: "/projects/authentication.png",
      tags: ["React", "Next.js", "Tailwind CSS", "Fast API", "Python", "JWT"],
      category: "backend",
      demoLink: "https://jwt-cors-middlewares-7dj1-lks09j6mi-arif-ur-rahmans-projects.vercel.app/login",
      githubLink: "https://github.com/Arif-Ur-Rahman/jwt-cors-middlewares"
    }
  ]

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            A selection of my recent work showcasing my skills and expertise in web development.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors duration-300"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </Link>
                    <Link
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <Button asChild variant="outline">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  )
}
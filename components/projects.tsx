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
    // {
    //   title: "Task Management App",
    //   description: "A productivity app for managing tasks with features like drag-and-drop, filtering, and team collaboration.",
    //   image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   tags: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    //   category: "fullstack",
    //   demoLink: "#",
    //   githubLink: "#"
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "A weather dashboard showing current conditions and forecasts using data from a weather API.",
    //   image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   tags: ["React", "API Integration", "Chart.js"],
    //   category: "frontend",
    //   demoLink: "#",
    //   githubLink: "#"
    // },
    // {
    //   title: "Blog Platform",
    //   description: "A content management system for creating and publishing blog posts with user authentication.",
    //   image: "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   tags: ["React", "Node.js", "Express", "MongoDB"],
    //   category: "fullstack",
    //   demoLink: "#",
    //   githubLink: "#"
    // },
    {
      title: "RESTful API Service",
      description: "A backend service providing RESTful APIs for a mobile application with authentication and data validation.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Typescript", "Express", "MongoDB", "JWT"],
      category: "backend",
      demoLink: "https://github.com/engWaliullah/University_Management",
      githubLink: "#https://github.com/engWaliullah/University_Management"
    },
    {
      title: "Real Estate Project",
      description: "A full-featured Real Estate Project with product listings, cart functionality, payment integration, and user authentication.",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Typescript", "Next.js", "Express.js", "MongoDB"],
      category: "fullstack",
      demoLink: "https://real-state-client-peach.vercel.app",
      githubLink: "https://github.com/engWaliullah/real-state-project-client",
      backend: "https://github.com/engWaliullah/real-state-backend"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing work experience, skills, and projects.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Next.js", "Tailwind CSS"],
      category: "frontend",
      demoLink: "https://dev-waliullah.vercel.app/",
      githubLink: "https://github.com/gowaliullah/portfolio"
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
"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ChevronRight,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Experience() {
  const workExperience = [
    {
      company: "DataCrunch Ltd",
      location: "Gulshan 1, Dhaka",
      title: "Software Engineer",
      period: "September, 2025 - Present",
      description:
        "I'm working as a Software Engineer at DataCrunch Ltd, focusing on building scalable web applications using modern technologies. I also collaborate with cross-functional teams to deliver high-quality software solutions.",
      responsibilities: [
        "Built interactive user interfaces with Next.js",
        "Implemented RESTful APIs using Express.js and Node.js",
        "Implemented database solutions using MongoDB and Mongoose",
        "Collaborated with UX designers to implement intuitive user interfaces",
        "Optimized application performance and scalability",
        "Wrote unit and integration tests to ensure code quality",
      ],
    },
    {
      company: "Leadsync AI",
      location: "Uttara 9, Dhaka",
      title: "Frontend Software Engineer",
      period: "January, 2025 - August, 2025",
      description:
        "I worked as a Frontend Software Engineer at Leadsync AI, where I was responsible for developing and maintaining the frontend of their AI-powered lead generation platform. I collaborated closely with designers and backend developers to create a seamless user experience.",
      responsibilities: [
        "Built interactive user interfaces from Figma to Next.js",
        "Implemented RESTful APIs using Express.js and Node.js",
        "Implemented lead generation business logic to Next.js pages",
        "Collaborated with UX designers to implement intuitive user interfaces",
        
      ],
    },
    {
      company: "Dream Diver",
      location: "Uttara 9, Dhaka",
      title: "Process Development Engineer",
      period: "January, 2024 - December, 2024",
      description:
        "I co-operated with the clients accross different time zones and noted their requiremnets and pain-points to develop web applications that meet their business needs. Then, I maintained the development team workflow to ensure timely delivery of high-quality software solutions.",
      responsibilities: [
        "Clients Business Requirement Analysis and pointing their pain-points",
        "Co-operation with the development team to deliver high-quality software solutions",
        "Fullfilled clients requirements using web technologies",
        "Maintained project documentation and reports",
        
      ],
    },
    {
      company: "Ultra -X Asia Pacific",
      location: "Baridhara J Block, Dhaka",
      title: "Software Engineer",
      period: "September, 2022 - December, 2023",
      description:
        "I worked at Ultra-X Asia Pacific as a Software Engineer, where I was responsible for developing and maintaining web applications using Angular, React.js. Most of our clients were from Japan. So, Software Quality and timely delivery were my top priorities.",
      responsibilities: [
        "Clients Business Requirement Analysis and pointing their pain-points",
        "Co-operation with the development team to deliver high-quality software solutions",
        "Fullfilled clients requirements using web technologies",
        "Maintained project documentation and reports",
        
      ],
    },
  ];

  const education = [
    {
      degree: "MERN Stack Development Course",
      institution: "Programming Hero",
      location: "Dhaka",
      period: "January, 2022 - December, 2022",
      description:
        "In 2022, I completed a comprehensive MERN Stack Development Course from Programming Hero. This course provided me with in-depth knowledge and hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Throughout the course, I worked on various projects that enhanced my skills in frontend and backend development, database management, and deployment strategies.I also learned best practices for coding, version control with Git, and collaborative development workflows. Next.js and Tailwind CSS were also covered in this course, which further enriched my web development expertise.",
    },
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "East West University",
      location: "Dhaka",
      period: "September, 2014 - December, 2020",
      description:
        "I have completed my B.Sc. in Computer Science & Engineering from East West University. During my studies, I gained a solid foundation in computer science principles and practical experience in software development. My coursework included data structures, algorithms, database management, and web development.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Udayan ",
      location: "Dhaka, Bangladesh",
      period: "2011 - 2013",
      description:
        "I completed my Higher Secondary Certificate (HSC) from Udayan in Dhaka, Bangladesh. During this period, I focused on science subjects, which laid the groundwork for my future studies in computer science and engineering.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Willes Little Flower School & College",
      location: "Kakrail, Dhaka, Bangladesh",
      period: "2009 - 2011",
      description:
        "I had my Secondary School Certificate (SSC) from Willes Little Flower School & College in Kakrail, Dhaka, Bangladesh. This phase of my education provided me with a strong academic foundation and prepared me for higher studies in the field of science and technology.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            My professional journey and educational background that have shaped
            my expertise in web development.
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="work" className="text-sm sm:text-base">
              <Briefcase className="mr-2 h-4 w-4" />
              Work Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="text-sm sm:text-base">
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="mt-0">
            <div className="space-y-8">
              {workExperience.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {job.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {job.company}
                          </p>
                        </div>
                        <div className="mt-2 sm:mt-0 flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {job.period}
                        </div>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <MapPin className="mr-1 h-4 w-4" />
                        {job.location}
                      </div>

                      <p className="mb-4 text-muted-foreground">
                        {job.description}
                      </p>

                      <h4 className="font-medium mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {job.responsibilities.map((resp, j) => (
                          <li key={j} className="flex items-start">
                            <ChevronRight className="mr-2 h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="mt-2 sm:mt-0 flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <MapPin className="mr-1 h-4 w-4" />
                        {edu.location}
                      </div>

                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

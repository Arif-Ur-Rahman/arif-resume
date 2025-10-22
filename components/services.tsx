"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Laptop,
  Layout,
  Search,
  Server,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    // {
    //   icon: <Layout className="h-10 w-10 text-primary" />,
    //   title: "Frontend Development",
    //   description:
    //     "Building responsive, interactive user interfaces using React.js, Next.js, and modern CSS frameworks.",
    // },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Node.js, Express.js, and RESTful API design.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Database Design",
      description:
        "Designing efficient and scalable database schemas using MongoDB and implementing with Mongoose.",
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description:
        "End-to-end application development from frontend to backend using the complete MERN stack.",
    },
    // {
    //   icon: <Smartphone className="h-10 w-10 text-primary" />,
    //   title: "Responsive Web Design",
    //   description:
    //     "Creating websites that work seamlessly across all devices and screen sizes.",
    // },
    // {
    //   icon: <Search className="h-10 w-10 text-primary" />,
    //   title: "Performance Optimization",
    //   description:
    //     "Improving application speed and efficiency through code optimization and best practices.",
    // },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Specialized web development services tailored to meet your specific
            needs and requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="h-full border-2 hover:border-primary hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 rounded-full bg-primary/10 inline-block group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <div className="absolute bottom-28 left-56 pointer-events-none transition-all duration-500 ease-in-out opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100">
                  <div className="relative w-[536px] h-[536px] opacity-40">
                    <div className="absolute w-[488px] h-[488px] left-[48px] top-0 rounded-full bg-blue-500 opacity-20 transition-all duration-500" />
                    <div className="absolute w-[488px] h-[488px] left-[32px] top-[16px] rounded-full bg-blue-500 opacity-20 transition-all duration-500" />
                    <div className="absolute w-[488px] h-[488px] left-[16px] top-[32px] rounded-full bg-blue-500 opacity-20 transition-all duration-500" />
                    <div className="absolute w-[488px] h-[488px] left-0 top-[48px] rounded-full bg-blue-500 opacity-20 transition-all duration-500" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 p-8 bg-card border-2 border-border rounded-lg shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  Need a custom web application?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your project requirements and how I can help
                  bring your ideas to life. I'm dedicated to delivering
                  high-quality solutions tailored to your specific needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Globe className="h-5 w-5 mr-3 text-primary" />
                    <span>Customized solutions for your business needs</span>
                  </li>
                  <li className="flex items-center">
                    <Laptop className="h-5 w-5 mr-3 text-primary" />
                    <span>Modern, responsive, and user-friendly design</span>
                  </li>
                  <li className="flex items-center">
                    <Code2 className="h-5 w-5 mr-3 text-primary" />
                    <span>Clean, efficient, and maintainable code</span>
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0 w-full lg:w-auto text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

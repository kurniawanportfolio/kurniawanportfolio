import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Separator } from "./components/ui/separator";
import { Icons } from "./components/ui/icons";

export default function Portfolio() {
  const projects = [
    {
      title: "Laravel Web Apps",
      description: "Built multiple web applications using Laravel, focusing on clean architecture, REST APIs, and user-friendly UIs.",
      tags: ["Laravel", "PHP", "MySQL", "Vue.js"],
      icon: "laravel"
    },
    {
      title: "AI & IoT Integrations",
      description: "Developed a remote keyboard and file transfer system via Bluetooth. Bridging Android and Windows using Unity & native libraries.",
      tags: ["Python", "TensorFlow", "Arduino", "BLE"],
      icon: "ai"
    },
    {
      title: "Game Engine Experiments",
      description: "Currently exploring the internals of game engines, physics simulations, and rendering pipelines.",
      tags: ["C++", "OpenGL", "Unity", "Unreal"],
      icon: "game"
    },
    {
      title: "Neural Networks",
      description: "Handcrafted a neural network from scratch in C++, focusing on low-level optimization and learning dynamics.",
      tags: ["C++", "Linear Algebra", "CUDA", "ML"],
      icon: "neural"
    }
  ];

  const skills = [
    { name: "Laravel", level: 90 },
    { name: "PHP", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "C++", level: 70 },
    { name: "AI/ML", level: 65 },
    { name: "Unity", level: 60 },
    { name: "IoT", level: 75 }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-12">
      <motion.div
        className="max-w-6xl mx-auto space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <motion.section 
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Avatar className="w-40 h-40 border-4 border-white shadow-lg">
            <AvatarImage src="./vite.svg" />
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-4xl font-bold">
              MA
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-4 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Muhammad Ade Kurniawan
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Bachelor of Computer Science | Full-Stack Developer | AI & IoT Specialist | Game Technology Enthusiast
            </motion.p>
            
            <motion.div
              className="flex gap-3 justify-center md:justify-start flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button variant="default" className="shadow-md">
                View Projects
              </Button>
              <Button variant="outline" className="shadow-md">
                Download CV
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <Separator className="my-8" />

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-6 border border-border"
        >
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Passionate computer scientist with expertise in web development, artificial intelligence, 
                and emerging technologies. I thrive on solving complex problems and building innovative solutions.
              </p>
              <Separator />
              <p className="text-muted-foreground">
                Currently exploring the intersection of AI and game development, with a focus on optimizing 
                neural networks for real-time applications.
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Education</h3>
                <p className="text-muted-foreground">Bachelor of Computer Science - University of XYZ (2024)</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-semibold">Current Focus</h3>
                <p className="text-muted-foreground">Game Engine Architecture & AI Integration</p>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator className="my-8" />

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Separator className="my-8" />

        {/* Projects Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Button variant="ghost" className="text-blue-600">
              View All Projects
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                icon={project.icon}
              />
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="bg-white rounded-xl shadow-sm p-6 border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
            </div>
            <Separator />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" rows={5} />
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="text-center pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-4 mb-4">
            <Button variant="ghost" size="icon">
              <Icons.github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icons.linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icons.twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icons.mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Muhammad Ade Kurniawan. All rights reserved.</p>
        </motion.footer>
      </motion.div>
    </main>
  );
}

function ProjectCard({ title, description, tags, icon }:any) {
  const IconComponent = Icons[icon];
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full group hover:border-blue-500 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-3">
            {IconComponent && (
              <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <IconComponent className="h-6 w-6 text-blue-600" />
              </div>
            )}
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag:any, index:any) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
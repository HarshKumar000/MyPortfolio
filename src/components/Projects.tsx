import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout } from 'lucide-react';

const ProjectCard = ({ title, description, tech, icon: Icon, index }: { title: string; description: string; tech: string; icon: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-25 group-hover:opacity-75 transition-opacity duration-500"></div>
      <div className="relative glass p-8 rounded-xl hover:translate-y-[-5px] transition-all duration-300">
        <motion.div 
          className="text-purple-400 mb-6"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={40} />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.split(', ').map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm glass rounded-full text-purple-200 hover:text-white transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Household Services Application V2",
      description: "Multi-user platform for home services with Redis caching, reducing server load by 25% and improving response time by 40%.",
      tech: "Flask, SQLite, Redis, Celery, VueJS, Bootstrap",
      icon: Layout
    },
    {
      title: "WonCourse",
      description: "AI-powered learning platform with integrated video lectures and coding assistance. Improved query resolution time by 50%.",
      tech: "VueJS, Flask, Python, Generative AI",
      icon: Code2
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
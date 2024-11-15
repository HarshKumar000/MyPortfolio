import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon, index }: { title: string; skills: string[]; icon: any; index: number }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="glass rounded-xl p-8 hover:bg-white/10 transition-colors duration-300"
    >
      <motion.div 
        className="flex items-center gap-3 mb-6"
        whileHover={{ scale: 1.05 }}
      >
        <Icon className="text-purple-400" size={32} />
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
          {title}
        </h3>
      </motion.div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            variants={itemVariants}
            className="glass px-4 py-2 rounded-full text-purple-200 hover:text-white hover:bg-purple-600/30 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["Python", "JavaScript", "Java", "SQL", "ReactJS", "Flask", "VueJS", "Bootstrap"]
    },
    {
      title: "Data Science & AI",
      icon: Brain,
      skills: ["scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "TensorFlow", "LangChain", "RAG"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQLite", "Redis", "PostgreSQL"]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "Docker", "Google Cloud Platform", "Celery"]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-violet-900 via-purple-900 to-blue-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
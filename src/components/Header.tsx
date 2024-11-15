import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Brain, Code2, Database } from 'lucide-react';

export default function Header() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <header className="min-h-screen relative flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={item} className="flex gap-4 mb-8">
            {[Brain, Code2, Database].map((Icon, index) => (
              <div key={index} className="glass-card p-3 rounded-lg">
                <Icon className="w-6 h-6 text-indigo-400" />
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={item}
            className="text-sm font-medium text-indigo-400 mb-6 tracking-wider"
          >
            AI ENGINEER & FULL-STACK DEVELOPER
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-glow"
          >
            Harsh Kumar
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
          >
            Crafting intelligent solutions at the intersection of AI and software engineering, 
            turning complex challenges into elegant solutions.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-wrap gap-4"
          >
            {[
              { icon: Mail, text: "Email", href: "mailto:22f3001316@ds.study.iitm.ac.in" },
              { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/harsh-kumar-b20633233" },
              { icon: Github, text: "GitHub", href: "https://github.com/HarshKumar000" }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="glass-card hover:bg-indigo-950/50 transition-all duration-300 rounded-lg px-6 py-3 flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={20} className="text-indigo-400 group-hover:text-indigo-300" />
                <span className="text-gray-200 group-hover:text-white">{link.text}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-indigo-400 w-8 h-8 animate-pulse-slow" />
      </motion.div>
    </header>
  );
}
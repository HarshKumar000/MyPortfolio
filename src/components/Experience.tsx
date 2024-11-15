import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceItem = ({ title, company, date, points }: { title: string; company: string; date: string; points: string[] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-8 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
    >
      <h3 className="text-xl font-semibold text-purple-300">{title}</h3>
      <p className="text-lg text-blue-200">{company}</p>
      <p className="text-sm text-gray-400 mb-4">{date}</p>
      <ul className="list-disc list-inside space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-gray-300">{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function Experience() {
  const experiences = [
    {
      title: "Machine Learning Engineer Intern",
      company: "Infosys Springboard, Bengaluru",
      date: "Sep 2024 – Nov 2024",
      points: [
        "Engineered an AI-driven fraud detection system achieving 99% accuracy using TensorFlow",
        "Created real-time fraud analytics dashboard with Streamlit, enhancing user engagement by 35%",
        "Optimized application design, improving system performance by 20%"
      ]
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC)",
      date: "Oct 2024 – Nov 2024",
      points: [
        "Supported 3 machine learning projects using Postman API and TensorFlow",
        "Ranked in top 0.7% out of 70,000+ participants globally",
        "Developed Agratas: AI-based Decentralized Content Authenticity System"
      ]
    }
  ];

  const education = [
    {
      title: "Bachelors in Data Science and Applications",
      company: "Indian Institute of Technology Chennai",
      date: "Sep 2022 – May 2026",
      points: []
    },
    {
      title: "Senior Secondary",
      company: "Central Public School Samastipur, Bihar",
      date: "Aug 2021 – May 2022",
      points: []
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-purple-400" />
              <span className="text-white">Experience</span>
            </h2>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-purple-400" />
              <span className="text-white">Education</span>
            </h2>
            {education.map((edu, index) => (
              <ExperienceItem key={index} {...edu} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
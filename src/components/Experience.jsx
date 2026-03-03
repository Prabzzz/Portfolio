'use client';
import { motion } from "framer-motion";

const experiences = [
    {
      role: "Senior Full-Stack Developer",
      company: "Diafoni Technology Services Pvt Ltd",
      location: "Pondicherry, India",
      date: "Mar 2026 – Present",
      highlights: [
        "Leading architecture for scalable AI-driven cloud platforms.",
        "Optimized distributed systems improving overall performance by 35%.",
        "Designed microfrontend ecosystem for faster feature releases.",
        "Mentoring engineers and driving DevOps best practices across teams."
      ],
      skills: [
        "System Design",
        "Microfrontends",
        "AWS Architecture",
        "Performance Optimization",
        "CI/CD Strategy",
        "ChatBots & AI Services",
        "Cloud Security",
        "AI Integrations"
      ]
    },
  
    {
      role: "Cloud Full-Stack Developer",
      company: "Diafoni Technology Services Pvt Ltd",
      location: "Pondicherry, India",
      date: "Mar 2024 – Feb 2026",
      highlights: [
        "Improved response time by 25% using AWS Lambda & API Gateway.",
        "Built AI interview modules with Bedrock & Transcribe (+40% engagement).",
        "Implemented OAuth 2.0 & Cognito authentication.",
        "Reduced deployment errors by 40% via CI/CD automation."
      ],
      skills: [
        "React",
        "TypeScript",
        "Node.js",
        "AWS Lambda",
        "API Gateway",
        "Bedrock",
        "Cognito",
        "CI/CD"
      ]
    }
  ];

export default function Experience() {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden bg-white/0" id="experience">

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,black_1px,transparent_1px),
        linear-gradient(to_bottom,black_1px,transparent_1px)]
        bg-[size:60px_60px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-black mb-16"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative bg-white border border-black/10 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500"
            >

              {/* Animated Top Accent Bar */}
              <motion.div
                animate={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-[3px] 
                bg-gradient-to-r from-black via-gray-500 to-black 
                bg-[length:200%_100%]"
              />

              <h3 className="text-lg font-semibold text-black">
                {exp.role}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                {exp.company} • {exp.location}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {exp.date}
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-3 text-sm text-gray-800">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Section */}
              <div className="mt-8 border-t border-black/10 pt-5">

                <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">
                  Skills & Tech
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-xs border border-black/20 rounded-full 
                      text-gray-700 hover:bg-black hover:text-white 
                      transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
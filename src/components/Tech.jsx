import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAmazonapigateway,
  SiAmazondynamodb,
  SiGithubactions,
  SiWebpack,
} from "react-icons/si";

function Tech() {
  const technologies = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "AWS", icon: FaAws },
    { name: "API Gateway", icon: SiAmazonapigateway },
    { name: "AWS Lambda", icon: FaAws },
    { name: "DynamoDB", icon: SiAmazondynamodb },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Webpack (Microfrontend)", icon: SiWebpack },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Serverless Architecture", icon: FaDatabase },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 170,
        damping: 14,
      },
    },
  };

  return (
    <section className="relative pt-24 pb-20 bg-white/0 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-zinc-900 mb-14 tracking-tight"
        >
          Technical Expertise
          <span className="block mt-3 text-lg font-normal text-zinc-500">
            Cloud • Serverless • Full Stack • AI Integration
          </span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-rows-2 grid-flow-col auto-cols-[160px] gap-6 overflow-x-auto no-scrollbar pb-2">
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  variants={item}
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:shadow-xl hover:border-zinc-300 min-h-[120px]"
                >
                  <div className="absolute inset-0 rounded-2xl bg-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 text-3xl text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300">
                    <Icon />
                  </div>

                  <span className="relative z-10 mt-3 text-xs font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors text-center">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Tech;
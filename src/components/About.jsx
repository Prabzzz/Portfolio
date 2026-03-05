'use client';
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, Twitter, Phone, ArrowRight, Code } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Prabzzz', color: '#000000' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/prabhakaran-j-55895a1a1/', color: '#0077b5' },
  { name: 'LeetCode', icon: Code, href: 'https://leetcode.com/u/PrabzCode/', color: '#FFA116' }, 
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/1GiCSPpFs5/', color: '#1877f2' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/pk__prabha_?igsh=YjJoN2NyM3E5ZnAy/', color: '#e1306c' },
  { name: 'WhatsApp', icon: Phone, href: 'https://wa.me/+918110978757', color: '#25D366' },
  { name: 'X', icon: Twitter, href: 'https://x.com/PK_prabha_/', color: '#1DA1F2' },
];

const cards = [
  {
    title: "AI Engineering",
    content: [
      "Building intelligent cloud-native systems.",
      "LLM integrations & automation pipelines."
    ],
    skills: "Bedrock • OpenAI • Vector DB • Prompt Eng"
  },
  {
    title: "Cloud Architecture",
    content: [
      "Serverless infrastructure on AWS.",
      "Highly scalable & secure deployments."
    ],
    skills: "Lambda • API Gateway • S3 • DynamoDB"
  },
  {
    title: "Full-Stack Systems",
    content: [
      "High-performance React applications.",
      "Clean backend architecture."
    ],
    skills: "React • Node • TypeScript • PostgreSQL"
  }
];

export default function About() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  const nextCard = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const icons = Array.from(container.querySelectorAll('.social-icon'));

    icons.forEach((icon) => {
      const color = icon.getAttribute('data-color');

      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          y: -6,
          scale: 1.15,
          boxShadow: `0 0 20px ${color}40`,
          borderColor: `${color}60`,
          duration: 0.3,
          ease: 'back.out(2)',
        });
      });

      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          y: 0,
          scale: 1,
          boxShadow: 'none',
          borderColor: 'rgba(0,0,0,0.1)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  return (
    <section className="relative w-full mx-auto overflow-hidden py-20 bg-white/0" id="about">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,black_1px,transparent_1px),
        linear-gradient(to_bottom,black_1px,transparent_1px)]
        bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-6 md:px-12 relative">

        {/* 🔥 LEFT SIDE – Swipeable Stacked Cards */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-[340px] h-[400px]">

            {cards.map((card, index) => {
              const offset = (index - active + cards.length) % cards.length;

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: offset === 0 ? 0 : offset === 1 ? 25 : -25,
                    y: offset === 0 ? 0 : 15,
                    rotate: offset === 0 ? 0 : offset === 1 ? 6 : -6,
                    scale: offset === 0 ? 1 : 0.95,
                    zIndex: offset === 0 ? 20 : 10,
                    opacity: offset > 2 ? 0 : 1
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="absolute w-full h-full bg-white border border-black/15 
                  rounded-xl shadow-xl p-6"
                >
                  {/* Arrow Button */}
                  {offset === 0 && (
                    <button
                      onClick={nextCard}
                      className="absolute top-4 right-4 p-2 rounded-full 
                      border border-black/20 hover:bg-black hover:text-white 
                      transition duration-300"
                    >
                      <ArrowRight size={14} />
                    </button>
                  )}

                  {/* Top Indicator */}
                  <div className="flex gap-2 mb-6">
                    {cards.map((_, dotIndex) => (
                      <motion.span
                        key={dotIndex}
                        animate={{
                          backgroundColor:
                            dotIndex === active
                              ? "rgba(0,0,0,0.8)"
                              : "rgba(0,0,0,0.2)",
                          scale: dotIndex === active ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-2.5 h-2.5 rounded-full"
                      />
                    ))}
                  </div>
                  {/* Title */}
                  <p className="text-xs font-mono text-gray-500 tracking-wide">
                    {card.title}
                  </p>

                  {/* Content */}
                  <div className="mt-5 space-y-3 text-[12px] font-mono text-gray-700 leading-relaxed">
                    {card.content.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>

                  {/* Skills Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-4 left-6 right-6 text-[10px] 
                    border-t border-black/10 pt-3 text-gray-500"
                  >
                    {card.skills}
                  </motion.div>
                </motion.div>
              );
            })}

          </div>
        </motion.div>

        {/* RIGHT SIDE – CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col justify-center gap-5"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            About Me
          </h2>

          <p className="text-zinc-600 text-base leading-relaxed">
            I’m a Cloud & AI-focused Full-Stack Developer passionate about
            building scalable, intelligent, and high-performance applications.
            My foundation in Computer Science shaped my love for clean
            architecture and performance optimization.
          </p>

          <p className="text-zinc-600 text-base leading-relaxed">
            I specialize in React, Node.js, and AWS serverless systems,
            integrating AI solutions while maintaining production-grade
            scalability and security.
          </p>

          {/* Social Links */}
          <div className="mt-4 flex flex-wrap gap-3" ref={containerRef}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 rounded-full border border-black/10 text-gray-900"
                aria-label={social.name}
                data-color={social.color}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
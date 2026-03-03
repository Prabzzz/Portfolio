'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin } from 'lucide-react';
import prabha from '../assets/prabha.jpg';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email', value: 'prabhakaranjayakanthan@gmail.com', color: '#000000' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+91 8110978757', color: '#000000' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Pondicherry, India', color: '#000000' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: '.contact-item',
          start: 'top 85%',
        },
        x: -30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-12 px-6 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center contact-text">Get in Touch</h2>
        <p className="text-zinc-600 text-center mb-16 max-w-xl mx-auto contact-text">
          I’m always open to meaningful conversations, knowledge sharing,
          and connecting with people who are passionate about technology
          and innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 contact-text">
              Let&apos;s <span className="text-purple-400">Connect</span>
            </h3>
            <p className="text-zinc-600 leading-relaxed mb-10 contact-text">
              Whether it's discussing ideas in AI, sharing insights about
              development, or exploring new technologies, I value genuine
              connections and thoughtful conversations that inspire growth.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="contact-item flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-zinc-300 text-zinc-900">
                    {info.icon}
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      {info.label}
                    </p>
                    <p className="text-sm text-zinc-800 font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE BOX */}
          <div
            ref={boxRef}
            className="flex justify-center"
          >
            <div className="w-[360px] h-[400px] rounded-2xl border border-zinc-300 overflow-hidden">
              <img
                src={prabha}
                alt="Prabhakaran"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Target, Heart } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "Current",
      title: "Data Analyst Course",
      org: "ExcelR, Bangalore",
      icon: <Target className="text-primary" />,
      desc: "Currently upskilling my knowledge by pursuing a comprehensive Data Analyst course."
    },
    {
      year: "2026",
      title: "B.Tech Information Technology",
      org: "Rajalakshmi Engineering College",
      icon: <GraduationCap className="text-secondary" />,
      desc: "Completed my undergraduation. Passed out in 2026."
    },
    {
      year: "2022",
      title: "12th Standard",
      org: "A P J M Matric Hr Sec School",
      icon: <Briefcase className="text-accent" />,
      desc: "Completed my higher secondary education. Passed out in 2022."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold tracking-widest uppercase">
              The Story
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-outfit">
              Bridging Data with <br />
              <span className="text-gradient">Financial Intelligence.</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed font-light">
              I am Jerson, a passionate problem-solver dedicated to decoding the complexities of data. 
              My journey is fueled by a curiosity for <span className="text-white font-bold">AI, Data Science, and Analytics</span>. 
              I believe that numbers tell stories, and I have trained myself to listen.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {[
                { label: "Passion", val: "AI & Crypto" },
                { label: "Focus", val: "Data Analyst" },
                { label: "Core", val: "Problem Solving" },
                { label: "Drive", val: "Visualization" }
              ].map((item, i) => (
                <div key={i} className="glass p-6 border-white/5 group hover:bg-white/10 transition-colors">
                  <p className="text-xs text-white/40 uppercase font-black tracking-[0.2em] mb-1">{item.label}</p>
                  <p className="text-lg font-bold font-outfit text-white group-hover:text-primary transition-colors">{item.val}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            <h3 className="text-2xl font-bold font-outfit flex items-center space-x-4">
              <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
              <span>My Journey</span>
            </h3>
            
            <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full glass flex items-center justify-center border-white/10 group-hover:border-primary/50 group-hover:scale-110 transition-all z-10 bg-dark">
                    {item.icon}
                  </div>
                  <div className="glass-card p-6 border-white/5">
                    <span className="text-xs font-bold text-primary mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold font-outfit mb-1">{item.title}</h4>
                    <p className="text-sm text-white/40 mb-4 font-medium italic">{item.org}</p>
                    <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

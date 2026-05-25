import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart, Binary, Zap, Lightbulb, Wallet } from 'lucide-react';

const Experience = () => {
  const interests = [
    { title: "AI Research", icon: <Binary className="text-primary" />, desc: "Deep diving into LLMs and generative models." },
    { title: "Data Viz", icon: <BarChart className="text-secondary" />, desc: "Transforming complex datasets into visual stories." },
    { title: "Crypto Curiosity", icon: <Wallet className="text-accent" />, desc: "Exploring decentralized finance and blockchain data." },
    { title: "Rapid Dev", icon: <Zap className="text-primary" />, desc: "Building fast, reactive web applications for data." },
    { title: "Problem Solving", icon: <Lightbulb className="text-secondary" />, desc: "Algorithmic thinking and statistical inference." },
    { title: "Automation", icon: <Sparkles className="text-accent" />, desc: "Streamlining workflows with Python and AI APIs." },
  ];

  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Aspiration</p>
            <h2 className="text-5xl font-black font-outfit leading-tight">
              Driven by <span className="text-gradient">Curiosity.</span> <br />
              Defined by Results.
            </h2>
            <p className="text-xl text-white/40 font-light leading-relaxed">
              Beyond the code, I am deeply invested in the future of technology. 
              My interests lie at the intersection of data-driven decision making 
              and the next frontier of artificial intelligence and decentralized finance.
            </p>
            
            <div className="pt-8">
              <div className="glass p-8 border-primary/20 bg-primary/5">
                <h3 className="text-2xl font-bold font-outfit mb-4 flex items-center space-x-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Sparkles size={20} className="text-primary" />
                  </span>
                  <span>Internship Goals</span>
                </h3>
                <p className="text-white/60 leading-relaxed font-light">
                  Seeking opportunities to apply statistical modeling and data engineering 
                  in a real-world business environment. Ready to contribute, learn, and innovate 
                  within high-growth teams.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {interests.map((interest, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="glass p-6 border-white/5 flex flex-col justify-between h-48"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  {interest.icon}
                </div>
                <div>
                  <h4 className="font-bold font-outfit mb-2">{interest.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{interest.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

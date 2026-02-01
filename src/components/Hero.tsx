"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh pt-32 pb-16 md:pt-40 lg:pt-48">
      {/* Very Subtle Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] md:text-xs font-black mb-10 tracking-[0.3em] uppercase"
          >
            <Star size={12} className="fill-primary" />
            <span>Innovating for the next generation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-8 leading-[1.05] text-foreground"
          >
            Digital <span className="text-gradient">Evolution</span> <br className="hidden lg:block" />
            simplified for you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base md:text-xl text-foreground/50 mb-12 leading-relaxed font-semibold italic"
          >
            NEXTish empowers businesses to thrive in the digital age. 
            Connect, automate, and scale with our enterprise-grade 
            solutions designed for velocity and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 group hover:scale-105 active:scale-95">
              Get Started Now
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-[#fbfaff] text-foreground px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all border border-black/[0.05] shadow-sm hover:shadow-md">
              View Solutions
            </button>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 pt-12 border-t border-black/[0.03] grid grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-center opacity-40 grayscale"
          >
            {["High Performance", "Secure by Design", "Global Scale", "24/7 Support"].map((text, i) => (
              <div key={i} className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-foreground/80">
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

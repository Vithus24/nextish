"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen relative bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left shadow-sm"
        style={{ scaleX }}
      />

      <Navbar />
      
      <Hero />
      
      <Services />

      {/* Modernised CTA Highlight Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="relative rounded-[2.5rem] bg-foreground text-white p-10 md:p-20 overflow-hidden group shadow-2xl">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none transition-transform group-hover:scale-110 duration-1000" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-center">
              <div className="lg:col-span-3">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-black mb-8 leading-tight"
                >
                  Ready to <span className="text-accent underline decoration-primary underline-offset-8">accelerate</span> your evolution?
                </motion.h2>
                <p className="text-white/70 text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-xl">
                  Join hundreds of forward-thinking enterprises that trust NEXTish 
                  to power their digital transformation journeys.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <button className="bg-white text-foreground px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/90 transition-all hover:scale-105 shadow-xl shadow-black/20">
                    Get Started Free
                  </button>
                  <button className="bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10">
                    Explore Enterprise
                  </button>
                </div>
              </div>

              <div className="lg:col-span-2 hidden lg:block">
                <motion.div 
                  initial={{ opacity: 0, x: 20, rotate: 5 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative group-hover:rotate-0 transition-transform duration-700"
                >
                  <div className="absolute -inset-6 bg-primary/30 blur-[40px] rounded-full pointer-events-none" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
                    <pre className="text-sm font-mono leading-relaxed">
                      <code className="text-accent">
                        {`// Connect with NEXTish
const sdk = require('@nextish/core');

await sdk.init({
  id: 'PROJ-777',
  env: 'enterprise'
});

console.log('Evolution Ready.');`}
                      </code>
                    </pre>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

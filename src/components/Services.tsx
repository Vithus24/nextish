"use client";

import { motion } from "framer-motion";
import { Cloud, Shield, Zap, BarChart3, Globe, Cpu } from "lucide-react";

const services = [
  {
    title: "Enterprise Integration",
    description: "Seamlessly connect your legacy systems with modern cloud architectures.",
    icon: Cloud,
  },
  {
    title: "Security & Identity",
    description: "Robust identity management and zero-trust security frameworks.",
    icon: Shield,
  },
  {
    title: "API Management",
    description: "Full lifecycle API management to accelerate your digital economy.",
    icon: Zap,
  },
  {
    title: "Business Analytics",
    description: "Real-time insights and data-driven decision making for growth.",
    icon: BarChart3,
  },
  {
    title: "Global Scalability",
    description: "Infrastructure that grows with your business across continents.",
    icon: Globe,
  },
  {
    title: "AI Integration",
    description: "Leverage machine learning to automate and optimize workflows.",
    icon: Cpu,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-[#fbfaff]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4"
          >
            What we do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-foreground leading-tight"
          >
            Our <span className="text-gradient">Core Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/50 text-base md:text-lg font-medium leading-relaxed"
          >
            Comprehensive infrastructure and digital tools designed 
            to propel your enterprise into the next era of connectivity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-black/[0.03] shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-8 border border-primary/5 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                <service.icon className="text-primary group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/50 text-sm md:text-base leading-relaxed font-medium mb-8">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                <span>View Solution</span>
                <span className="text-sm">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

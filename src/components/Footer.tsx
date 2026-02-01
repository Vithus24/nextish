"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5 pt-20 pb-12 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 transition-transform group-hover:scale-105 duration-300">
                <span className="text-white font-black text-2xl leading-none">N</span>
              </div>
              <span className="text-foreground font-black text-2xl tracking-tighter">
                NEXT<span className="text-primary italic">ish</span>
              </span>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-xs font-medium">
              Empowering enterprises with next-generation digital solutions. 
              Revolutionizing integration, AI, and connectivity for a faster tomorrow.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-muted border border-black/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-foreground font-black text-sm uppercase tracking-widest mb-8">Solutions</h4>
            <ul className="flex flex-col gap-4">
              {["API Management", "Identity Server", "Cloud Architecture", "Data Analytics"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-foreground/60 hover:text-primary text-sm font-bold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:pl-4">
            <h4 className="text-foreground font-black text-sm uppercase tracking-widest mb-8">Resources</h4>
            <ul className="flex flex-col gap-4">
              {["Documentation", "Release Notes", "Community", "Whitepapers"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-foreground/60 hover:text-primary text-sm font-bold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-black text-sm uppercase tracking-widest mb-8">Stay Ahead</h4>
            <p className="text-foreground/60 text-sm mb-6 font-medium">
              Get the latest updates on digital transformation.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Work email"
                className="w-full bg-muted border border-black/5 rounded-2xl px-5 py-3.5 text-sm focus:border-primary outline-none transition-all font-medium"
              />
              <button className="absolute right-1.5 top-1.5 bg-primary text-white p-2 md:p-2.5 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} NEXTish Inc. All rights reserved.
          </p>
          <div className="flex gap-6 md:gap-10">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
              <Link key={link} href="#" className="text-foreground/40 hover:text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

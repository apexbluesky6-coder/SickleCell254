"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden">
      {/* Background Image - Placeholder for now */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-widest text-primary-light font-bold text-sm mb-4 block"
          >
            Kenya & Africa
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
          >
            Saving Sickle Cell Lives in Rural Africa
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-light text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            We improve the survival, health and wellbeing of sickle cell patients and their families through access to comprehensive, high quality, timely and affordable care — where they live.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/donate"
              className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-4 text-center font-medium transition-all hover:scale-105"
            >
              Donate Now
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground rounded-full px-8 py-4 text-center font-medium transition-all hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white opacity-70" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MissionStrip() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              We are building a movement
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-gray-dark leading-relaxed">
              We are building a movement of empowered People living with sickle cell across Kenya and Africa for systemic social change. Through strategic public private partnerships and commitments, we strengthen health systems ensuring early and continuous access to care.
            </p>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="font-medium text-foreground text-lg">Policy Advocacy</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="font-medium text-foreground text-lg">Health Systems</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-lg transition-colors group"
              >
                Our Story 
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

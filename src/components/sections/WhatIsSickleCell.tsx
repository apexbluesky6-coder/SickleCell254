"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, HeartPulse } from "lucide-react";

export default function WhatIsSickleCell() {
  const PILLS = [
    { text: "Most common genetic disorder in Kenya", icon: Activity },
    { text: "Early detection saves lives", icon: ShieldCheck },
    { text: "Preventable complications with care", icon: HeartPulse },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Understanding Sickle Cell Disease
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-dark leading-relaxed mb-8">
              Sickle Cell Anemia is one of a group of genetic disorders known as Sickle Cell Disease (SCD). It causes the deformation of round normal red blood cells to sickle-shaped red blood cells.
            </p>

            <div className="flex flex-col gap-4">
              {PILLS.map((pill, idx) => (
                <div key={idx} className="bg-muted px-6 py-4 rounded-full flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <pill.icon className="text-primary" size={20} />
                  </div>
                  <span className="font-medium text-foreground">{pill.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right SVG Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-muted rounded-2xl p-12 flex justify-center items-center overflow-hidden relative min-h-[400px]"
          >
            {/* Visual presentation of Normal vs Sickle cell */}
            <div className="flex items-center gap-12 justify-center w-full">
              <div className="flex flex-col items-center">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-32 h-32 rounded-full bg-red-500 shadow-xl opacity-90 flex items-center justify-center border-4 border-red-600"
                ></motion.div>
                <p className="mt-6 font-bold text-gray-dark">Normal Cell</p>
              </div>
              <div className="flex flex-col items-center">
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="w-32 h-32 flex items-center justify-center opacity-90"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-primary drop-shadow-xl">
                    <path d="M 10,50 C 40,0 80,10 90,40 C 95,60 70,80 50,80 C 20,80 10,70 10,50 Z" />
                  </svg>
                </motion.div>
                <p className="mt-6 font-bold text-gray-dark">Sickle Cell</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

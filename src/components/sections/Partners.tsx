"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  "Ministry of Health",
  "World Health Organization",
  "World Bank",
  "Kenya Red Cross",
  "NHIF",
  "Global Blood Fund",
  "Novartis",
  "UNICEF"
];

export default function Partners() {
  return (
    <section className="bg-white py-16 overflow-hidden border-t border-gray-light">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Our partners and allies
        </h2>
        <p className="text-gray-dark max-w-2xl mx-auto">
          Their continued investment enables innovation, problem solving and a sustained sickle cell response for those in most need.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4 group-hover:pause">
          {PARTNERS.map((partner, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-center min-w-[200px] h-20 bg-gray-light/30 rounded-lg border border-gray-light grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 px-6"
            >
              <span className="font-bold text-gray-dark text-lg">{partner}</span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless infinite scroll */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4 absolute top-0 group-hover:pause ml-[100%]">
          {PARTNERS.map((partner, idx) => (
            <div 
              key={`dup-${idx}`}
              className="flex items-center justify-center min-w-[200px] h-20 bg-gray-light/30 rounded-lg border border-gray-light grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 px-6"
            >
              <span className="font-bold text-gray-dark text-lg">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

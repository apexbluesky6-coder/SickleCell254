"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DonateAppeal() {
  return (
    <section className="bg-primary pt-24 pb-28 text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
               <circle cx="20" cy="20" r="2" fill="currentColor" />
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#pattern)" />
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Help us save more lives
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light">
            Every contribution to the Sickle Cell Livelihood Fund directly supports patients and families in Kenya's rural communities.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/donate"
              className="bg-white text-primary hover:bg-gray-light px-10 py-5 rounded-full font-bold text-xl inline-block shadow-lg transition-colors border-2 border-transparent hover:border-white"
            >
              Donate Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

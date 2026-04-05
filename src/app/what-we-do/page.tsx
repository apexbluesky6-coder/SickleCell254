"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Handshake, CheckCircle } from "lucide-react";

export default function WhatWeDoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white border-b-8 border-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight"
          >
            Saving Sickle Cell Lives in Rural Africa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            We work at the intersection of systems, financing and livelihoods to address systemic gaps people with sickle cell face and allow them to thrive with SCD.
          </motion.p>
        </div>
      </section>

      {/* Program Pillar 1 */}
      <section className="py-20 lg:py-28 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop" 
              alt="Sickle Cell Livelihoods Program" 
              fill 
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Sickle Cell Livelihoods Program</h2>
            <p className="text-gray-dark leading-relaxed text-lg mb-8">
              The heavy financial burden of sickle cell — high out-of-pocket expenses, low educational attainment, high unemployment — significantly reduces patients' ability to access basic needs: food, clean water, shelter, education. This financial strain impacts adherence to sickle cell care, resulting in poor health outcomes and preventable complications.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full shrink-0"><CheckCircle className="text-primary" size={24} /></div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Economic empowerment</h4>
                  <p className="text-gray-dark">Income-generating activities, financial literacy</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full shrink-0"><CheckCircle className="text-primary" size={24} /></div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Food security</h4>
                  <p className="text-gray-dark">Nutrition support, community farming linkages</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full shrink-0"><CheckCircle className="text-primary" size={24} /></div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Educational attainment</h4>
                  <p className="text-gray-dark">School support for children with SCD</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Pillar 2 */}
      <section className="bg-muted py-20 lg:py-28 text-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Strengthening Health Systems</h2>
              <p className="text-gray-dark leading-relaxed text-lg mb-8">
                Africa Sickle Cell designs and executes sub-national sickle cell programs in areas of highest need for holistic sickle cell care. We do this in partnership with local government, partners and SCD patients in high burden communities.
              </p>
              <ul className="space-y-4 list-disc list-inside text-gray-dark text-lg leading-relaxed">
                <li><strong className="text-foreground">County government department of health</strong> has made available SCD essential medicines in tertiary hospitals (through ASCO advocacy)</li>
                <li><strong className="text-foreground">Capacity built healthcare workers</strong> to manage and provide acute care for sickle cell complications</li>
                <li><strong className="text-foreground">NHIF insurance coverage</strong> facilitated for registered patients</li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" 
                alt="Strengthening Health Systems" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Pillar 3 */}
      <section className="py-20 lg:py-28 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Advocacy & Policy Reform</h2>
          <p className="text-lg text-gray-dark leading-relaxed max-w-3xl mx-auto mb-12">
            ASCO forms strong relationships and agreements within and across communities of interest to ensure continued political will for health finance and policy.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-primary">
            <h4 className="font-bold text-xl text-foreground mb-2">County government engagement</h4>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-accent">
            <h4 className="font-bold text-xl text-foreground mb-2">National health policy</h4>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-gray-dark">
            <h4 className="font-bold text-xl text-foreground mb-2">Media & public awareness</h4>
          </div>
        </div>
      </section>

      {/* Map & Approach */}
      <section className="bg-primary text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold mb-4">Where we work</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Operating across 6 counties in Kenya with the highest sickle cell burden.
            </p>
            {/* Visual representation placeholder for SVG Map */}
            <div className="mt-12 bg-white/10 w-full max-w-lg mx-auto aspect-video rounded-xl flex items-center justify-center border border-white/20">
              <span className="text-white/50 font-bold tracking-widest">[ SVG Map of Kenya ]</span>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-12">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white text-foreground p-10 rounded-2xl relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">1</div>
                <div className="flex justify-center mb-6 text-primary"><Search size={48} /></div>
                <h3 className="font-bold text-2xl mb-4">Identify</h3>
                <p className="text-gray-dark">Community assessment, patient mapping, needs analysis</p>
              </motion.div>
              {/* Step 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white text-foreground p-10 rounded-2xl relative mt-8 md:mt-0">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">2</div>
                <div className="flex justify-center mb-6 text-primary"><Handshake size={48} /></div>
                <h3 className="font-bold text-2xl mb-4">Partner</h3>
                <p className="text-gray-dark">County government, healthcare facilities, community leaders</p>
              </motion.div>
              {/* Step 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white text-foreground p-10 rounded-2xl relative mt-8 md:mt-0">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">3</div>
                <div className="flex justify-center mb-6 text-primary"><CheckCircle size={48} /></div>
                <h3 className="font-bold text-2xl mb-4">Implement</h3>
                <p className="text-gray-dark">Programs, training, livelihoods, advocacy</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Users, Hospital, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";

const CARDS = [
  {
    title: "Patient & Caregiver Support",
    body: "Center for Sickle Cell Warriors equips patients and caregivers with skills and resources to reduce sickle cell suffering and achieve their fullest potential.",
    icon: Users,
  },
  {
    title: "Health Systems Strengthening",
    body: "We strengthen sickle cell health systems in rural communities, building capacity in healthcare workers to provide quality acute care.",
    icon: Hospital,
  },
  {
    title: "Advocacy & Policy",
    body: "Center for Sickle Cell Warriors informs policy to improve equitable access to sickle cell care, engaging county governments and national health departments.",
    icon: Landmark,
  }
];

export default function WhatWeDo() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight"
          >
            We work at the intersection of systems, financing and livelihoods
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-dark"
          >
            Addressing systemic gaps people with sickle cell face — allowing them to thrive.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-card p-8 flex flex-col items-start transition-all"
            >
              <div className="bg-primary/10 p-4 rounded-xl mb-6">
                <card.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-gray-dark leading-relaxed mb-8 flex-grow">
                {card.body}
              </p>
              <Link 
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors group"
              >
                Learn more 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

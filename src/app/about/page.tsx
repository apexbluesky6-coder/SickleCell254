"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Partners from "@/components/sections/Partners";

const TEAM = [
  { name: "Lea D.", role: "Founder & Executive Director", photo: "/img/photo_2026-04-05_17-06-31.jpg" },
  { name: "Dr. Samuel O.", role: "Medical Advisory Lead", photo: "/img/photo_2026-04-05_17-06-32.jpg" },
  { name: "Jane M.", role: "Community Programs Director", photo: "/img/photo_2026-04-05_17-05-15.jpg" },
  { name: "Peter K.", role: "Advocacy Coordinator", photo: "/img/photo_2026-04-05_17-05-33.jpg" },
];

const TIMELINE = [
  { year: "2017", title: "Organisation founded by Lea in Kenya" },
  { year: "2018", title: "First county program launched" },
  { year: "2019", title: "Healthcare worker training program initiated" },
  { year: "2020", title: "NHIF partnerships established for patient coverage" },
  { year: "2021", title: "Expanded to 6 counties across Kenya" },
  { year: "2022", title: "Sickle Cell Livelihood Fund launched" },
  { year: "2023", title: "BBC health check feature on Center of Sickle Cell Warriors's work" },
  { year: "2024", title: "Continued growth and advocacy" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/photo_2026-04-05_17-06-19.jpg" 
            alt="About us background" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl font-heading font-bold mb-4">About Us</h1>
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>&rsaquo;</span>
              <span className="text-white">About</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 lg:py-28 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/img/photo_2026-04-05_17-06-27.jpg" 
              alt="Founder Lea" 
              fill 
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Story</span>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6 leading-tight">Founded by a patient, for patients</h2>
            <div className="space-y-6 text-gray-dark leading-relaxed text-lg">
              <p>
                In 2017, Lea initiated Center of Sickle Cell Warriors to redefine sickle cell response in Kenya. Inspired by stories of patients like herself from the six counties she ventured, she wondered why not use their stories to inform policies and health systems closest to them?
              </p>
              <p>
                As a sickle cell patient herself, Lea brings lived experience to every decision Center of Sickle Cell Warriors makes — ensuring the organisation stays grounded in the realities of those it serves.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-dark leading-relaxed">Improve the survival, health and wellbeing of sickle cell patients and their households through access to comprehensive, high quality, timely and affordable care where they live.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-dark leading-relaxed">A world where people living with sickle cell across Kenya and Africa are empowered to thrive, supported by strong health systems and just policies.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Values</h3>
              <ul className="text-gray-dark leading-relaxed list-disc list-inside space-y-2">
                <li>Patient-centered</li>
                <li>Evidence-informed</li>
                <li>Community-driven</li>
                <li>Accountable</li>
                <li>Collaborative</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-foreground mb-16 text-center">Meet our team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col text-left group"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-sm border border-gray-light bg-muted">
                <Image src={member.photo} alt={member.name} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground px-1">{member.name}</h3>
              <p className="text-primary font-medium px-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-16 text-center">Our Journey</h2>
          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-1/2">
            {TIMELINE.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="mb-10 pl-8 relative"
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full left-[-9px] top-1.5 shadow-[0_0_0_4px_rgba(139,26,26,0.2)]" />
                <div className="font-bold text-primary text-xl mb-1">{item.year}</div>
                <div className="text-gray-dark text-lg">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <Partners />
    </div>
  );
}

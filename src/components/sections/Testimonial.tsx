"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side: Photo */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/img/photo_2026-04-05_17-06-19.jpg"
            alt="Patient smiling"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: Quote Content */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 lg:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="text-primary/20 mb-8" size={80} strokeWidth={1} />
            
            <p className="text-2xl md:text-3xl font-heading font-medium text-foreground leading-tight md:leading-snug mb-8">
              "Thank you for your hospitality and education you instilled in me. Before I used to get sick and was hospitalized every week. Now I know how to manage sickle cell with food, hydration. You have provided NHIF which allows me to access medicines. You provide us with transport and food for our clinic day meetings. And helped create income generating activities that gets us money to sustain us."
            </p>
            
            <div className="flex items-center gap-4 mb-10 border-l-4 border-primary pl-4">
              <div>
                <p className="font-bold text-lg text-foreground">Patient</p>
                <p className="text-gray-dark">Center of Sickle Cell Warriors program beneficiary</p>
              </div>
            </div>

            <Link 
              href="/news"
              className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-primary-dark transition-colors group"
            >
              Read more stories 
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

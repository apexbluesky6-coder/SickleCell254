"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function AnimatedCounter({ end, duration = 1.5, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const STATS = [
  { value: 6, label: "Counties reached across Kenya", suffix: "" },
  { value: 500, label: "Patients supported annually", suffix: "+" },
  { value: 50, label: "Healthcare workers trained", suffix: "+" },
  { value: 2017, label: "Year founded", suffix: "" },
];

export default function ImpactStats() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="px-4 pt-8 sm:pt-0 flex flex-col items-center"
            >
              <div className="text-5xl md:text-6xl font-heading font-bold mb-3 flex items-center justify-center">
                {stat.value > 2000 ? (
                  // For Year founded we might skip animation or animate quickly
                  <AnimatedCounter end={stat.value} duration={1.5} suffix={stat.suffix} />
                ) : (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-sm md:text-base font-medium max-w-[180px] text-white/90">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

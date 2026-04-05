"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would send this to the Mailchimp API
    }
  };

  return (
    <section className="bg-white py-24 border-t border-gray-light">
      <div className="container mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Stay connected
          </h2>
          <p className="text-gray-dark mb-10 leading-relaxed">
            Every fortnight we share news of the organisation and stories from the places we work and people we work with and communities we impact.
          </p>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-accent/10 border border-accent rounded-lg p-6 flex flex-col items-center gap-3"
            >
              <CheckCircle2 className="text-accent" size={40} />
              <p className="font-medium text-foreground text-lg">Thank you for subscribing!</p>
              <p className="text-gray-dark text-sm">You&#39;ll receive our next update soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                required
                className="flex-grow px-6 py-4 rounded-full border border-gray-mid bg-[#F2F0EB]/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors sm:w-auto w-full"
              >
                <span>Subscribe</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-muted min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white border-b-8 border-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight"
          >
            Get in touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Whether you want to partner with us, volunteer, or just say hello — we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
             {/* Left Column: Contact Info */}
             <div className="lg:w-5/12 space-y-8">
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                 <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Contact Information</h2>
                 
                 <div className="flex gap-4 mb-8">
                   <div className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-light">
                     <Mail size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground text-lg mb-1">Email address</h4>
                     <a href="mailto:africasicklecellorg@gmail.com" className="text-gray-dark hover:text-primary transition-colors">
                       africasicklecellorg@gmail.com
                     </a>
                   </div>
                 </div>

                 <div className="flex gap-4 mb-8">
                   <div className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-light">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground text-lg mb-1">Office Location</h4>
                     <p className="text-gray-dark leading-relaxed">
                       Nairobi, Kenya<br/>
                       (Operating across 6 high-burden counties)
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-4 mb-8">
                   <div className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-light">
                     <Clock size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground text-lg mb-1">Working Hours</h4>
                     <p className="text-gray-dark leading-relaxed">
                       Monday - Friday<br/>
                       9:00 AM - 5:00 PM (EAT)
                     </p>
                   </div>
                 </div>
               </motion.div>
             </div>

             {/* Right Column: Contact Form */}
             <div className="lg:w-7/12">
               <motion.div 
                 initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                 className="bg-white p-8 md:p-12 rounded-2xl shadow-card border border-gray-light"
               >
                 <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Send us a message</h3>
                 
                 {submitted ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                     className="bg-accent/10 border border-accent rounded-xl p-8 text-center py-20"
                   >
                     <CheckCircle2 className="text-accent mx-auto mb-4" size={48} />
                     <h4 className="font-bold text-foreground text-xl mb-2">Message sent successfully!</h4>
                     <p className="text-gray-dark">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                     <button 
                       onClick={() => setSubmitted(false)}
                       className="mt-8 bg-white border border-gray-light text-foreground font-medium px-6 py-2 rounded-full hover:bg-gray-light transition-colors"
                     >
                       Send another message
                     </button>
                   </motion.div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                         <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">Your Name <span className="text-primary">*</span></label>
                         <input 
                           type="text" 
                           id="name"
                           required
                           value={formData.name}
                           onChange={e => setFormData({ ...formData, name: e.target.value })}
                           className="w-full px-4 py-3 bg-gray-light/50 border border-gray-light rounded-xl focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-foreground"
                         />
                       </div>
                       <div>
                         <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">Email Address <span className="text-primary">*</span></label>
                         <input 
                           type="email" 
                           id="email"
                           required
                           value={formData.email}
                           onChange={e => setFormData({ ...formData, email: e.target.value })}
                           className="w-full px-4 py-3 bg-gray-light/50 border border-gray-light rounded-xl focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-foreground"
                         />
                       </div>
                     </div>
                     
                     <div>
                       <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">Subject <span className="text-primary">*</span></label>
                       <input 
                         type="text" 
                         id="subject"
                         required
                         value={formData.subject}
                         onChange={e => setFormData({ ...formData, subject: e.target.value })}
                         className="w-full px-4 py-3 bg-gray-light/50 border border-gray-light rounded-xl focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-foreground"
                       />
                     </div>

                     <div>
                       <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">Message <span className="text-primary">*</span></label>
                       <textarea 
                         id="message"
                         required
                         rows={5}
                         value={formData.message}
                         onChange={e => setFormData({ ...formData, message: e.target.value })}
                         className="w-full px-4 py-3 bg-gray-light/50 border border-gray-light rounded-xl focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-foreground resize-y min-h-[120px]"
                       />
                     </div>

                     <button 
                       type="submit"
                       disabled={isSubmitting}
                       className="bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2 w-full md:w-auto mt-4"
                     >
                       {isSubmitting ? (
                         <span className="animate-pulse">Sending...</span>
                       ) : (
                         <>
                           Send Message
                           <Send size={18} />
                         </>
                       )}
                     </button>
                   </form>
                 )}
               </motion.div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

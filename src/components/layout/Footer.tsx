"use client";
import Image from "next/image";

import Link from "next/link";
import { Globe, MessageSquare, Briefcase, Camera, Video, Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image src="/logo/photo_2026-04-05_17-06-34.jpg" width={40} height={40} alt="Logo" className="rounded-full object-cover" />
              <span className="font-heading font-bold text-xl">Center for Sickle Cell Warriors</span>
            </div>
            <p className="text-gray-mid text-sm leading-relaxed max-w-sm mb-6">
              Improving the survival, health and wellbeing of sickle cell patients and their households through access to comprehensive, high quality, timely and affordable care.
            </p>
            <div className="flex flex-col gap-3 mb-6 border-l-2 border-primary pl-4">
              <a href="https://wa.me/254722873489" className="text-white hover:text-primary-light transition-colors flex items-center gap-3 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +254 722 873489
              </a>
              <a href="mailto:info@centerforsicklecell.org" className="text-white hover:text-primary-light transition-colors flex items-center gap-3 text-sm font-medium">
                <Mail size={18} />
                info@centerforsicklecell.org
              </a>
              <div className="text-gray-mid flex items-start gap-3 text-sm font-medium">
                <Globe size={18} className="shrink-0 text-white" />
                Nairobi, Kenya
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/africasicklecell" target="_blank" rel="noopener noreferrer" className="text-gray-mid hover:text-white transition-colors" aria-label="Facebook">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-mid hover:text-white transition-colors" aria-label="Twitter">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="text-gray-mid hover:text-white transition-colors" aria-label="LinkedIn">
                <Briefcase size={20} />
              </a>
              <a href="#" className="text-gray-mid hover:text-white transition-colors" aria-label="Instagram">
                <Camera size={20} />
              </a>
              <a href="#" className="text-gray-mid hover:text-white transition-colors" aria-label="YouTube">
                <Video size={20} />
              </a>
              <a href="https://wa.me/254722873489" target="_blank" rel="noopener noreferrer" className="text-gray-mid hover:text-white transition-colors" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <a href="mailto:info@centerforsicklecell.org" className="text-gray-mid hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              <Link href="/" className="text-gray-mid hover:text-primary-light transition-colors text-sm">Home</Link>
              <Link href="/news" className="text-gray-mid hover:text-primary-light transition-colors text-sm">News & Stories</Link>
              <Link href="/about" className="text-gray-mid hover:text-primary-light transition-colors text-sm">About</Link>
              <Link href="/contact" className="text-gray-mid hover:text-primary-light transition-colors text-sm">Contact</Link>
              <Link href="/what-we-do" className="text-gray-mid hover:text-primary-light transition-colors text-sm">What We Do</Link>
              <Link href="/privacy-policy" className="text-gray-mid hover:text-primary-light transition-colors text-sm">Privacy Policy</Link>
              <Link href="/donate" className="text-gray-mid hover:text-primary-light transition-colors text-sm">Donate</Link>
              <Link href="/terms-of-use" className="text-gray-mid hover:text-primary-light transition-colors text-sm">Terms of Use</Link>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-2">Stay informed</h3>
            <p className="text-gray-mid text-sm mb-6">Every fortnight we share news and stories.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                required
                className="bg-gray-dark border border-gray-mid/30 text-white px-4 py-2 rounded-md w-full focus:outline-none focus:border-primary-light transition-colors placeholder:text-gray-mid"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-light transition-colors px-4 py-2 rounded-md flex items-center justify-center shrink-0"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-mid text-xs">
            &copy; {new Date().getFullYear()} Center for Sickle Cell Warriors. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-gray-mid hover:text-white transition-colors text-xs">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-gray-mid hover:text-white transition-colors text-xs">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

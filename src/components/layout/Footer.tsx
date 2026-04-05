"use client";

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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#8B1A1A" strokeWidth="4" fill="#B22222" />
              </svg>
              <span className="font-heading font-bold text-xl">ASCO</span>
            </div>
            <p className="text-gray-mid text-sm leading-relaxed max-w-sm">
              Improving the survival, health and wellbeing of sickle cell patients and their households through access to comprehensive, high quality, timely and affordable care.
            </p>
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
              <a href="mailto:africasicklecellorg@gmail.com" className="text-gray-mid hover:text-white transition-colors" aria-label="Email">
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
            &copy; {new Date().getFullYear()} Africa Sickle Cell Organisation. All rights reserved.
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

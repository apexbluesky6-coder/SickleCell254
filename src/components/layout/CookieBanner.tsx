"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("asco_cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("asco_cookie_consent", "true");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("asco_cookie_consent", "false");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           exit={{ y: 100, opacity: 0 }}
           className="fixed bottom-0 left-0 right-0 z-[100] mx-auto w-full max-w-4xl p-4 md:mb-6"
        >
          <div className="bg-white border border-gray-light shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-grow">
              <h4 className="font-bold text-foreground mb-2">We value your privacy</h4>
              <p className="text-sm text-gray-dark">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
               <button onClick={decline} className="px-6 py-2 rounded-full border border-gray-light text-gray-dark font-medium hover:bg-gray-light transition-colors">
                 Decline
               </button>
               <button onClick={accept} className="px-6 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
                 Accept All
               </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

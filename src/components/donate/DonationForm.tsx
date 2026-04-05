"use client";

import { useState } from "react";
import { Lock, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import ImpactPanel from "./ImpactPanel";
import { createCheckoutSession } from "@/lib/stripe";

const AMOUNTS = [10, 25, 50, 100, 250];

export default function DonationForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(25);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [fund, setFund] = useState("Sickle Cell Livelihood Fund");
  const [isDedicated, setIsDedicated] = useState(false);
  const [honorName, setHonorName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = async () => {
    const finalAmount = selectedAmount === "custom" ? parseInt(customAmount) : selectedAmount;
    if (!finalAmount || isNaN(finalAmount) || finalAmount < 1) return;

    setIsLoading(true);
    // Call server action for Stripe
    const res = await createCheckoutSession(finalAmount, fund, isDedicated ? honorName : undefined);
    
    if (res?.url) {
      window.location.href = res.url;
    } else {
      console.error(res?.error);
      setIsLoading(false);
      alert("Something went wrong initializing the donation. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
      {/* LEFT: FORM */}
      <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-light">
        {/* Tab Switcher */}
        <div className="flex p-1 bg-muted rounded-full mb-8">
          <button
            onClick={() => setFrequency("one-time")}
            className={cn(
              "flex-1 py-3 rounded-full text-sm font-bold transition-colors",
              frequency === "one-time" ? "bg-white text-primary shadow-sm" : "text-gray-dark hover:text-foreground"
            )}
          >
            One-time
          </button>
          <button
            onClick={() => setFrequency("monthly")}
            className={cn(
              "flex-1 py-3 rounded-full text-sm font-bold transition-colors",
              frequency === "monthly" ? "bg-white text-primary shadow-sm" : "text-gray-dark hover:text-foreground"
            )}
          >
            Monthly
          </button>
        </div>

        {/* Amount Selector */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {AMOUNTS.map((amt) => (
            <button
              key={amt}
              onClick={() => setSelectedAmount(amt)}
              className={cn(
                "py-4 rounded-xl font-bold text-lg transition-all border-2",
                selectedAmount === amt 
                  ? "border-primary bg-primary/5 text-primary" 
                  : "border-gray-light bg-white text-foreground hover:border-gray-mid"
              )}
            >
              ${amt}
            </button>
          ))}
          <div className={cn(
             "col-span-3 sm:col-span-1 border-2 rounded-xl flex items-center px-4 transition-all overflow-hidden",
             selectedAmount === "custom" ? "border-primary bg-primary/5" : "border-gray-light bg-white focus-within:border-gray-mid"
          )}>
             <span className="text-gray-dark font-bold mr-2">$</span>
             <input 
               type="number" 
               min="1"
               placeholder="Custom"
               value={customAmount}
               onChange={(e) => {
                 setCustomAmount(e.target.value);
                 setSelectedAmount("custom");
               }}
               onFocus={() => setSelectedAmount("custom")}
               className="w-full py-4 outline-none bg-transparent font-bold text-lg appearance-none"
             />
          </div>
        </div>

        {/* Fund Selector */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-foreground mb-2">Designate your gift</label>
          <select 
            value={fund}
            onChange={(e) => setFund(e.target.value)}
            className="w-full px-4 py-3 border border-gray-light rounded-lg bg-white text-foreground outline-none focus:border-primary transition-colors"
          >
            <option>Sickle Cell Livelihood Fund</option>
            <option>Health Systems Support</option>
            <option>General Fund</option>
          </select>
        </div>

        {/* Dedicate */}
        <div className="mb-8">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              checked={isDedicated}
              onChange={(e) => setIsDedicated(e.target.checked)}
              className="w-5 h-5 accent-primary cursor-pointer"
            />
            <span className="text-gray-dark group-hover:text-foreground transition-colors font-medium">
              Dedicate this donation in honor/memory of someone
            </span>
          </label>
          {isDedicated && (
            <input 
              type="text" 
              placeholder="Honoree's name"
              value={honorName}
              onChange={(e) => setHonorName(e.target.value)}
              className="mt-4 w-full px-4 py-3 border border-gray-light rounded-lg bg-white outline-none focus:border-primary transition-colors"
            />
          )}
        </div>

        {/* Pay Button */}
        <button 
          onClick={handleDonate}
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white text-xl font-bold py-5 rounded-full shadow-lg transition-all flex justify-center items-center gap-3 mb-6"
        >
          {isLoading ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            <>
               Donate ${selectedAmount === "custom" ? customAmount || "0" : selectedAmount} &rarr;
            </>
          )}
        </button>

        {/* Security & Payment Methods */}
        <div className="flex flex-col items-center gap-4 border-t border-gray-light/50 pt-6">
          <div className="flex items-center gap-2 text-gray-dark">
            <Lock size={16} />
            <span className="text-sm font-medium">Secure, encrypted payment</span>
          </div>
          <div className="flex gap-4 opacity-60">
             {/* Placeholder for payment logos */}
            <span className="font-bold tracking-widest text-sm uppercase">Visa</span>
            <span className="font-bold tracking-widest text-sm uppercase">Mastercard</span>
            <span className="font-bold tracking-widest text-sm uppercase text-[#4CAF50]">M-Pesa</span>
            <span className="font-bold tracking-widest text-sm uppercase text-[#003087]">PayPal</span>
          </div>
        </div>
      </div>

      {/* RIGHT: IMPACT PANEL */}
      <ImpactPanel amount={selectedAmount} />
    </div>
  );
}

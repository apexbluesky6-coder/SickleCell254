"use client";

import { Quote } from "lucide-react";

interface ImpactPanelProps {
  amount: number | "custom";
}

export default function ImpactPanel({ amount }: ImpactPanelProps) {
  const getImpact = (val: number | "custom") => {
    if (val === "custom") return "Your contribution will help sustain our vital programs for patients in need.";
    if (val <= 10) return "Provides one month of essential medications for a child with SCD";
    if (val <= 25) return "Covers transport costs for a patient's clinic visit and follow-up";
    if (val <= 50) return "Supports one family's food security for a month";
    if (val <= 100) return "Funds a healthcare worker training session on SCD management";
    return "Provides NHIF insurance coverage for one patient for a year";
  };

  return (
    <div className="bg-muted p-8 rounded-2xl h-full flex flex-col justify-between">
      <div>
        <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Your impact</h3>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-light mb-8 transition-all">
          <p className="text-primary-dark font-medium text-lg leading-snug">
             &ldquo;{getImpact(amount)}&rdquo;
          </p>
        </div>
      </div>

      <div className="border-t border-gray-light/30 pt-8 mt-auto">
        <Quote className="text-primary/20 mb-4" size={40} />
        <p className="text-gray-dark italic mb-4">
          "Now I know how to manage sickle cell... You have provided NHIF which allows me to access medicines. And helped create income generating activities that gets us money to sustain us."
        </p>
        <p className="font-bold text-sm text-foreground">— Patient, Center of Sickle Cell Warriors program beneficiary</p>
      </div>
    </div>
  );
}

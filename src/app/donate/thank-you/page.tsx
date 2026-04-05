import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Sickle Cell 254 Initiative",
};

export default function ThankYouPage() {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-20 px-4 mt-20">
      <div className="max-w-xl w-full bg-muted rounded-2xl p-10 lg:p-16 text-center shadow-sm border border-gray-light">
        <div className="bg-accent/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-accent" size={48} />
        </div>
        <h1 className="text-4xl font-heading font-bold text-foreground mb-6">Thank You!</h1>
        <p className="text-lg text-gray-dark leading-relaxed mb-10">
          Your generous donation has been successfully processed. Every contribution to the Sickle Cell Livelihood Fund directly supports patients and families in Kenya's rural communities. A receipt has been sent to your email.
        </p>
        <Link 
          href="/"
          className="bg-primary hover:bg-primary-dark text-white text-lg font-bold py-4 px-10 rounded-full transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

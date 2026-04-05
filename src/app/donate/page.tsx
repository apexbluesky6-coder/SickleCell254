import DonationForm from "@/components/donate/DonationForm";
import { Heart, Landmark, PiggyBank, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate - Center for Sickle Cell Warriors",
  description: "Make a difference today. Support people living with sickle cell in rural Kenya.",
};

export default function DonatePage() {
  return (
    <div className="bg-muted min-h-screen">
      {/* Hero Strip */}
      <section className="bg-primary text-white py-16 px-4 text-center border-b-[8px] border-accent">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Make a difference today</h1>
        <p className="text-xl md:text-2xl font-light text-white/90">Support people living with sickle cell in rural Kenya</p>
      </section>

      {/* Main Form Section */}
      <section className="py-16 px-4">
        <DonationForm />
      </section>

      {/* Explainer Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">The Sickle Cell Livelihood Fund</h2>
            <p className="text-lg text-gray-dark leading-relaxed max-w-3xl mx-auto">
              This fund supports the Sickle Cell Livelihoods program. The social challenges this fund addresses include: 1. Economic empowerment, 2. Food security, and 3. Educational attainment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-muted p-8 rounded-2xl text-center border-t-4 border-primary">
              <div className="flex justify-center mb-4"><PiggyBank size={40} className="text-primary" /></div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Economic Empowerment</h4>
              <p className="text-gray-dark text-sm">Funding income-generating activities to build self-reliance.</p>
            </div>
            <div className="bg-muted p-8 rounded-2xl text-center border-t-4 border-accent">
              <div className="flex justify-center mb-4"><Heart size={40} className="text-accent" /></div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Food Security</h4>
              <p className="text-gray-dark text-sm">Ensuring patients receive the nutrition needed to manage their condition.</p>
            </div>
            <div className="bg-muted p-8 rounded-2xl text-center border-t-4 border-gray-dark">
              <div className="flex justify-center mb-4"><Landmark size={40} className="text-gray-dark" /></div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Educational Attainment</h4>
              <p className="text-gray-dark text-sm">Keeping children with SCD in school despite medical setbacks.</p>
            </div>
          </div>

          {/* Other ways to give */}
          <div>
            <h3 className="text-center font-heading font-bold text-3xl mb-12">Other Ways to Give</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Corporate Giving", icon: Landmark, desc: "Partner with us" },
                { title: "Fundraise", icon: Heart, desc: "Start a campaign" },
                { title: "Legacy Gift", icon: PiggyBank, desc: "Include us in your will" },
                { title: "Volunteer", icon: Users, desc: "Give your time" },
              ].map((way, idx) => (
                <a href="mailto:info@centerforsicklecell.org" key={idx} className="block group">
                  <div className="bg-white border border-gray-light rounded-xl p-6 hover:shadow-card transition-all text-center h-full">
                    <way.icon className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={32} />
                    <h5 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{way.title}</h5>
                    <p className="text-sm text-gray-dark">{way.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Center of Sickle Cell Warriors",
  description: "Terms and conditions for using the Center of Sickle Cell Warriors website.",
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-white min-h-screen py-24 pb-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">Terms of Use</h1>
        <p className="text-gray-mid font-medium mb-12">Last Updated: April 5, 2024</p>
        
        <div className="prose prose-lg max-w-none text-gray-dark prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Center of Sickle Cell Warriors (Center of Sickle Cell Warriors) website (the "Site"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            The content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Center of Sickle Cell Warriors or its content suppliers and is protected by international copyright laws.
          </p>

          <h2>3. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on the Center of Sickle Cell Warriors website for personal, non-commercial transitory viewing only. You may not:
          </p>
          <ul>
            <li>Modify or copy the materials for commercial purposes</li>
            <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2>4. Disclaimer</h2>
          <p>
            The materials on the Center of Sickle Cell Warriors website are provided on an 'as is' basis. Center of Sickle Cell Warriors makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. 
          </p>
          <p>
            Furthermore, the medical information presented on this website is for educational purposes only and should not replace professional medical advice.
          </p>

          <h2>5. Donations</h2>
          <p>
            All donations made through our website are processed securely. We reserve the right to refuse or cancel any donation if we suspect fraudulent activity.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
    </div>
  );
}

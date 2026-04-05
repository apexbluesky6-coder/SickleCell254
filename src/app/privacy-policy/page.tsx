import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Center of Sickle Cell Warriors",
  description: "Learn how we protect your data at Center of Sickle Cell Warriors.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-24 pb-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">Privacy Policy</h1>
        <p className="text-gray-mid font-medium mb-12">Last Updated: April 5, 2024</p>
        
        <div className="prose prose-lg max-w-none text-gray-dark prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary">
          <p>
            At Center of Sickle Cell Warriors (Center of Sickle Cell Warriors), we are committed to protecting the privacy and security of our donors, partners, beneficiaries, and website visitors. This Privacy Policy describes how we collect, use, and handle your information.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information that you provide to us directly when you:
          </p>
          <ul>
            <li>Make a donation</li>
            <li>Subscribe to our newsletter</li>
            <li>Fill out a contact form</li>
            <li>Register to volunteer or attend an event</li>
          </ul>
          <p>This information may include your name, email address, phone number, physical address, and payment information.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and receipt your donations</li>
            <li>Send you updates about our programs and impact</li>
            <li>Respond to your inquiries</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>3. Data Protection and Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our operations, or servicing you (e.g., payment processors like Stripe).
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your data. To exercise these rights or to unsubscribe from our communications, please contact us at <a href="mailto:info@centerforsicklecell.org">info@centerforsicklecell.org</a>.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings or our cookie consent banner.
          </p>
        </div>
      </div>
    </div>
  );
}

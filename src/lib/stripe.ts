"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_mock", {
  apiVersion: "2024-12-18.acacia",
});

export async function createCheckoutSession(amountUsd: number, fund: string, honorName?: string) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Donation to ${fund}`,
              description: honorName ? `In honor/memory of ${honorName}` : undefined,
            },
            unit_amount: amountUsd * 100, // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/donate/thank-you`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/donate`,
    });

    return { url: session.url };
  } catch (error: any) {
    console.error("Stripe Checkout error:", error);
    return { error: error.message };
  }
}

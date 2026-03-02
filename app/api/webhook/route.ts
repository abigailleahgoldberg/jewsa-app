import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const STORE_ID = "17719110";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-02-25.clover" });
  const PRINTFUL_KEY = process.env.PRINTFUL_JEWSA_API_KEY!;
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET || "");
  } catch {
    return NextResponse.json({ error: "Webhook signature failed" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    // Retrieve full session with shipping details expanded
    const sessionId = (event.data.object as { id: string }).id;
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["shipping_details"],
    });

    const variantId = session.metadata?.variantId;
    const shipping = (session as unknown as { shipping_details?: { address?: { line1?: string; line2?: string; city?: string; state?: string; postal_code?: string; country?: string }; name?: string } }).shipping_details;
    const address = shipping?.address;
    const name = shipping?.name || "Customer";
    const email = session.customer_details?.email || "";

    if (variantId && address) {
      await fetch(`https://api.printful.com/orders?store_id=${STORE_ID}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${PRINTFUL_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: {
            name, email,
            address1: address.line1,
            address2: address.line2 || "",
            city: address.city,
            state_code: address.state,
            zip: address.postal_code,
            country_code: address.country,
          },
          items: [{ sync_variant_id: parseInt(variantId), quantity: 1 }],
        }),
      });
    }
  }

  return NextResponse.json({ received: true });
}

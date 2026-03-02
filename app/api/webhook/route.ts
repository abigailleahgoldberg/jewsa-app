import { NextRequest, NextResponse } from "next/server";

const VARIANT_MAP: Record<number, number> = {
  5197023020: 5197023020, 5197023021: 5197023021, 5197023022: 5197023022,
  5197023023: 5197023023, 5197023024: 5197023024,
  5196674755: 5196674755, 5196674756: 5196674756, 5196674757: 5196674757,
};

export async function POST(req: NextRequest) {
  try {
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-02-25.clover" });

    const body = await req.text();
    const sig = req.headers.get("stripe-signature")!;
    const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);

    if (event.type === "checkout.session.completed") {
      const session = await stripe.checkout.sessions.retrieve(
        (event.data.object as { id: string }).id,
        { expand: ["shipping_details"] }
      );

      const rawItems: { variantId: number; qty: number }[] = JSON.parse(session.metadata?.items || "[]");
      const s = (session as unknown as { shipping_details?: { address?: { line1?: string; line2?: string; city?: string; state?: string; postal_code?: string; country?: string }; name?: string } }).shipping_details;

      if (s?.address && rawItems.length) {
        const orderItems = rawItems.map(i => ({
          sync_variant_id: VARIANT_MAP[i.variantId] || i.variantId,
          quantity: i.qty,
        }));

        await fetch(`https://api.printful.com/orders?store_id=17719110`, {
          method: "POST",
          headers: { "Authorization": `Bearer ${process.env.PRINTFUL_JEWSA_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            recipient: {
              name: s.name, email: session.customer_details?.email,
              address1: s.address.line1, address2: s.address.line2 || "",
              city: s.address.city, state_code: s.address.state,
              zip: s.address.postal_code, country_code: s.address.country,
            },
            items: orderItems,
          }),
        });
      }
    }
    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

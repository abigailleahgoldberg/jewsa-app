import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-02-24.acacia" });

    const body = await req.json();
    const items = body.items || [];

    if (!items.length) return NextResponse.json({ error: "No items" }, { status: 400 });

    const lineItems = items.map((item: { name: string; variant?: string; img?: string; price: number; qty?: number; variantId: number }) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.variant ? `${item.name} — ${item.variant}` : item.name,
          images: item.img ? [item.img] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.qty || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      success_url: `${req.headers.get("origin")}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/cart`,
      metadata: {
        items: JSON.stringify(items.map((i: { variantId: number; qty?: number }) => ({ variantId: i.variantId, qty: i.qty || 1 }))),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

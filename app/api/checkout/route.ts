import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


const PRODUCTS: Record<string, { name: string; price: number; printfulVariantId: number }[]> = {
  "jewsa-basic-tee": [
    { name: "JewSA Basic Tee / S", price: 2500, printfulVariantId: 5197023020 },
    { name: "JewSA Basic Tee / M", price: 2500, printfulVariantId: 5197023021 },
    { name: "JewSA Basic Tee / L", price: 2500, printfulVariantId: 5197023022 },
    { name: "JewSA Basic Tee / XL", price: 2500, printfulVariantId: 5197023023 },
    { name: "JewSA Basic Tee / 2XL", price: 2500, printfulVariantId: 5197023024 },
  ],
  "old-school-bucket-hat": [
    { name: "Old School Bucket Hat / Black", price: 2500, printfulVariantId: 5196674755 },
    { name: "Old School Bucket Hat / Navy", price: 2500, printfulVariantId: 5196674756 },
    { name: "Old School Bucket Hat / Khaki", price: 2500, printfulVariantId: 5196674757 },
  ],
};

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-02-25.clover" });
  try {
    const { slug, variantId, variantLabel } = await req.json();
    const variants = PRODUCTS[slug];
    if (!variants) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    const variant = variants.find(v => v.printfulVariantId === variantId);
    if (!variant) return NextResponse.json({ error: "Variant not found" }, { status: 404 });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "usd",
          product_data: {
            name: variant.name,
            images: [
              slug === "jewsa-basic-tee"
                ? "https://files.cdn.printful.com/files/b4e/b4ebbc30701e79902092467a74f74124_preview.png"
                : "https://files.cdn.printful.com/files/3f4/3f41dd5bee9414a4c43fcefc2a63a429_preview.png"
            ],
          },
          unit_amount: variant.price,
        },
        quantity: 1,
      }],
      shipping_address_collection: { allowed_countries: ["US"] },
      mode: "payment",
      success_url: `${req.headers.get("origin")}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/products/${slug}`,
      metadata: {
        slug,
        variantId: String(variantId),
        variantLabel,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

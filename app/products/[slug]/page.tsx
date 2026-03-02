"use client";
import { useState, use } from "react";
import Link from "next/link";

const NAVY = "#060F1C";
const GOLD = "#C9A84C";

const PRODUCTS: Record<string, {
  name: string;
  price: number;
  description: string;
  img: string;
  variants: { label: string; id: number }[];
  type: "size" | "color";
}> = {
  "jewsa-basic-tee": {
    name: "JewSA Basic Tee",
    price: 25,
    description: "Not your bubbe's basic tee. Stars, stripes, and all the chutzpah. 100% cotton, unisex fit, available S through 4XL. Printed and shipped via Printful.",
    img: "https://files.cdn.printful.com/files/b4e/b4ebbc30701e79902092467a74f74124_preview.png",
    type: "size",
    variants: [
      { label: "S", id: 5197023020 },
      { label: "M", id: 5197023021 },
      { label: "L", id: 5197023022 },
      { label: "XL", id: 5197023023 },
      { label: "2XL", id: 5197023024 },
    ],
  },
  "old-school-bucket-hat": {
    name: "Old School Bucket Hat",
    price: 25,
    description: "Keep your keppah cool. Structured bucket hat with embroidered JewSA logo. Available in Black, Navy, and Khaki.",
    img: "https://files.cdn.printful.com/files/3f4/3f41dd5bee9414a4c43fcefc2a63a429_preview.png",
    type: "color",
    variants: [
      { label: "Black", id: 5196674755 },
      { label: "Navy", id: 5196674756 },
      { label: "Khaki", id: 5196674757 },
    ],
  },
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCTS[slug];
  const [selected, setSelected] = useState<number | null>(null);

  if (!product) {
    return (
      <div style={{ background: NAVY, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h1 style={{ color: GOLD, fontSize: 32, marginBottom: 16 }}>Product not found</h1>
          <Link href="/#shop" style={{ color: GOLD }}>Back to shop</Link>
        </div>
      </div>
    );
  }

  const handleBuy = () => {
    if (!selected) return;
    window.location.href = `https://www.printful.com/checkout/cart?add-to-cart=${selected}`;
  };

  return (
    <div style={{ background: NAVY, minHeight: "100vh", color: "#F5F0E8", fontFamily: "'Inter', sans-serif" }}>
      <nav style={{ padding: "20px max(24px,5vw)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        <Link href="/" style={{ color: GOLD, fontWeight: 900, fontSize: 20, textDecoration: "none", letterSpacing: "2px" }}>JEWSA</Link>
        <Link href="/#shop" style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: "1px", textDecoration: "none" }}>BACK TO SHOP</Link>
      </nav>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px max(24px,5vw)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={product.img} alt={product.name} style={{ width: "100%", maxWidth: 360, objectFit: "contain" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <p style={{ color: GOLD, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 8px" }}>JewSA Collection</p>
            <h1 style={{ fontSize: 36, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.1 }}>{product.name}</h1>
            <p style={{ fontSize: 32, fontWeight: 900, color: GOLD, margin: 0 }}>${product.price}</p>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(245,240,232,0.75)", margin: 0 }}>{product.description}</p>

          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12, color: "rgba(245,240,232,0.6)" }}>
              Select {product.type === "size" ? "Size" : "Color"}
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {product.variants.map(v => (
                <button key={v.id} onClick={() => setSelected(v.id)} style={{
                  padding: "10px 20px",
                  border: selected === v.id ? `2px solid ${GOLD}` : "2px solid rgba(201,168,76,0.3)",
                  background: selected === v.id ? "rgba(201,168,76,0.15)" : "transparent",
                  color: selected === v.id ? GOLD : "#F5F0E8",
                  borderRadius: 6, fontSize: 14, fontWeight: 700, cursor: "pointer",
                }}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleBuy} disabled={!selected} style={{
            background: selected ? GOLD : "rgba(201,168,76,0.3)",
            color: NAVY, border: "none", borderRadius: 8,
            padding: "18px 36px", fontSize: 16, fontWeight: 900,
            letterSpacing: "1.5px", textTransform: "uppercase",
            cursor: selected ? "pointer" : "not-allowed", marginTop: 8,
          }}>
            {selected ? "Buy Now" : `Select ${product.type === "size" ? "Size" : "Color"} First`}
          </button>

          <p style={{ fontSize: 12, color: "rgba(245,240,232,0.4)", margin: 0 }}>
            Ships in 3-7 business days via Printful.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}

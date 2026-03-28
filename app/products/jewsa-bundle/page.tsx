"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../../lib/cart-context";

const NAVY = "#060F1C";
const GOLD = "#C9A84C";
const RED = "#B22234";

const TEE_VARIANTS = [
  { label: "S", id: 5197023020 },
  { label: "M", id: 5197023021 },
  { label: "L", id: 5197023022 },
  { label: "XL", id: 5197023023 },
  { label: "2XL", id: 5197023024 },
];

const HAT_VARIANTS = [
  { label: "Black", id: 5196674755 },
  { label: "Navy", id: 5196674756 },
  { label: "Khaki", id: 5196674757 },
];

const TEE_IMG = "https://files.cdn.printful.com/files/b4e/b4ebbc30701e79902092467a74f74124_preview.png";
const HAT_IMG = "https://files.cdn.printful.com/files/3f4/3f41dd5bee9414a4c43fcefc2a63a429_preview.png";

export default function BundlePage() {
  const { addToCart } = useCart();
  const [teeSize, setTeeSize] = useState<{ label: string; id: number } | null>(null);
  const [hatColor, setHatColor] = useState<{ label: string; id: number } | null>(null);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  const handleAddBundle = () => {
    if (!teeSize) { setError("Pick your tee size."); return; }
    if (!hatColor) { setError("Pick your hat color."); return; }
    setError("");

    addToCart({
      productId: "jewsa-basic-tee",
      variantId: String(teeSize.id),
      name: `JewSA Basic Tee (${teeSize.label})`,
      price: 22,
      image: TEE_IMG,
    });

    addToCart({
      productId: "old-school-bucket-hat",
      variantId: String(hatColor.id),
      name: `Old School Bucket Hat (${hatColor.label})`,
      price: 22,
      image: HAT_IMG,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const btnStyle = (selected: boolean): React.CSSProperties => ({
    padding: "10px 20px",
    border: selected ? `2px solid ${GOLD}` : "2px solid rgba(201,168,76,0.3)",
    background: selected ? "rgba(201,168,76,0.15)" : "transparent",
    color: selected ? GOLD : "rgba(245,240,232,0.7)",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    letterSpacing: "0.5px",
    transition: "all 0.15s",
    borderRadius: 2,
  });

  return (
    <div style={{ background: NAVY, minHeight: "100vh", color: "#F5F0E8", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <nav style={{ padding: "0 max(24px,5vw)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid rgba(201,168,76,0.15)`, position: "sticky", top: 0, background: NAVY, zIndex: 100, height: 64 }}>
        <Link href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, color: GOLD, letterSpacing: "2px", textDecoration: "none" }}>JewSA</Link>
        <Link href="/cart" style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: "1px", textDecoration: "none" }}>VIEW CART</Link>
      </nav>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px max(24px,5vw)" }}>

        {/* Badge */}
        <div style={{ marginBottom: 24, display: "inline-block", background: RED, color: "rgba(245,240,232,0.95)", fontSize: 11, fontWeight: 900, letterSpacing: "2px", padding: "6px 14px", textTransform: "uppercase" }}>
          Bundle and Save
        </div>

        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px,6vw,72px)", letterSpacing: "-1px", lineHeight: 1, marginBottom: 12 }}>
          The JewSA Bundle
        </h1>
        <p style={{ fontSize: 18, color: "rgba(245,240,232,0.65)", marginBottom: 8, lineHeight: 1.6 }}>
          Tee and hat. Together. Mazel tov, you saved $6.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: GOLD }}>$44</span>
          <span style={{ fontSize: 18, color: "rgba(245,240,232,0.4)", textDecoration: "line-through" }}>$50</span>
          <span style={{ background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.3)`, color: GOLD, fontSize: 12, fontWeight: 700, padding: "4px 10px", letterSpacing: "1px" }}>SAVE $6</span>
        </div>

        {/* Product preview */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48, maxWidth: 600 }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: 4, padding: 24, textAlign: "center" }}>
            <img src={TEE_IMG} alt="JewSA Basic Tee" style={{ width: "100%", maxWidth: 180, objectFit: "contain", marginBottom: 12 }} />
            <div style={{ fontWeight: 700, fontSize: 14 }}>JewSA Basic Tee</div>
            <div style={{ fontSize: 13, color: "rgba(245,240,232,0.45)" }}>$22 (was $25)</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: 4, padding: 24, textAlign: "center" }}>
            <img src={HAT_IMG} alt="Old School Bucket Hat" style={{ width: "100%", maxWidth: 180, objectFit: "contain", marginBottom: 12 }} />
            <div style={{ fontWeight: 700, fontSize: 14 }}>Old School Bucket Hat</div>
            <div style={{ fontSize: 13, color: "rgba(245,240,232,0.45)" }}>$22 (was $25)</div>
          </div>
        </div>

        {/* Selectors */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 500 }}>

          {/* Tee size */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "2px", color: "rgba(245,240,232,0.5)", marginBottom: 12, textTransform: "uppercase" }}>
              Tee Size {teeSize && <span style={{ color: GOLD }}>— {teeSize.label}</span>}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {TEE_VARIANTS.map(v => (
                <button key={v.id} onClick={() => setTeeSize(v)} style={btnStyle(teeSize?.id === v.id)}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hat color */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "2px", color: "rgba(245,240,232,0.5)", marginBottom: 12, textTransform: "uppercase" }}>
              Hat Color {hatColor && <span style={{ color: GOLD }}>— {hatColor.label}</span>}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {HAT_VARIANTS.map(v => (
                <button key={v.id} onClick={() => setHatColor(v)} style={btnStyle(hatColor?.id === v.id)}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div style={{ background: "rgba(178,34,52,0.12)", border: "1px solid rgba(178,34,52,0.3)", padding: "12px 16px", borderRadius: 4, fontSize: 13, color: "#ff9999" }}>
              {error}
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleAddBundle}
            style={{
              background: added ? NAVY : GOLD,
              color: added ? GOLD : NAVY,
              border: added ? `2px solid ${GOLD}` : "none",
              fontWeight: 900,
              fontSize: 15,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "18px 32px",
              cursor: "pointer",
              transition: "all 0.2s",
              maxWidth: 320,
            }}
          >
            {added ? "Added to Cart!" : "Add Bundle to Cart — $44"}
          </button>

          <p style={{ fontSize: 12, color: "rgba(245,240,232,0.35)", lineHeight: 1.8 }}>
            Ships 3 to 7 business days via Printful. Fulfilled in the USA.<br />
            Both items appear separately in your cart. Secure checkout via Stripe.
          </p>
        </div>

        {/* Back link */}
        <div style={{ marginTop: 60, paddingTop: 32, borderTop: "1px solid rgba(201,168,76,0.1)" }}>
          <Link href="/#shop" style={{ color: "rgba(245,240,232,0.45)", fontSize: 13, textDecoration: "none", fontWeight: 700 }}>
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}

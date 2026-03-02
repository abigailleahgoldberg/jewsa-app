"use client";
import Link from "next/link";

const NAVY = "#060F1C";
const GOLD = "#C9A84C";

export default function OrderSuccess() {
  return (
    <div style={{ background: NAVY, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#F5F0E8", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ textAlign: "center", maxWidth: 500, padding: "40px 24px" }}>
        <div style={{ fontSize: 64, marginBottom: 24 }}>✡️</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: GOLD, marginBottom: 16 }}>Order Confirmed!</h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(245,240,232,0.8)", marginBottom: 8 }}>
          Mazel tov. Your JewSA order is in.
        </p>
        <p style={{ fontSize: 14, color: "rgba(245,240,232,0.5)", marginBottom: 40 }}>
          You will receive a confirmation email shortly. Ships in 3-7 business days via Printful.
        </p>
        <Link href="/" style={{ background: GOLD, color: NAVY, padding: "14px 32px", borderRadius: 8, fontWeight: 900, textDecoration: "none", fontSize: 14, letterSpacing: "1px" }}>
          BACK TO SHOP
        </Link>
      </div>
    </div>
  );
}

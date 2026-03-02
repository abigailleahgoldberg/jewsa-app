"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAVY = "#060F1C";
const GOLD = "#C9A84C";

interface CartItem {
  id: string; slug: string; name: string; variant: string;
  variantId: number; price: number; img: string; qty: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("jewsa-cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("jewsa-cart", JSON.stringify(newCart));
  };

  const remove = (variantId: number) => updateCart(cart.filter(i => i.variantId !== variantId));
  const updateQty = (variantId: number, qty: number) => {
    if (qty < 1) return remove(variantId);
    updateCart(cart.map(i => i.variantId === variantId ? { ...i, qty } : i));
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleCheckout = async () => {
    if (!cart.length) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert("Checkout error. Please try again.");
    } catch { alert("Checkout error. Please try again."); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ background: NAVY, minHeight: "100vh", color: "#F5F0E8", fontFamily: "'Inter', sans-serif" }}>
      <nav style={{ padding: "20px max(24px,5vw)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "sticky", top: 0, background: NAVY, zIndex: 100 }}>
        <Link href="/" style={{ color: GOLD, fontWeight: 900, fontSize: 20, textDecoration: "none", letterSpacing: "2px" }}>JEWSA</Link>
        <Link href="/#shop" style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: "1px", textDecoration: "none" }}>CONTINUE SHOPPING</Link>
      </nav>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px max(24px,5vw)" }}>
        <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "2px", marginBottom: 32, color: GOLD }}>YOUR CART</h1>

        {cart.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontSize: 20, color: "rgba(245,240,232,0.5)", marginBottom: 24 }}>Your cart is empty.</p>
            <Link href="/#shop" style={{ background: GOLD, color: NAVY, padding: "14px 32px", borderRadius: 8, fontWeight: 900, textDecoration: "none", fontSize: 14, letterSpacing: "1.5px", textTransform: "uppercase" }}>SHOP NOW</Link>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {cart.map(item => (
                <div key={item.variantId} style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 10, padding: 20, alignItems: "center" }}>
                  <img src={item.img} alt={item.name} style={{ width: 80, height: 80, objectFit: "contain", borderRadius: 6 }} />
                  <div>
                    <p style={{ fontWeight: 900, fontSize: 16, margin: "0 0 4px" }}>{item.name}</p>
                    <p style={{ color: GOLD, fontSize: 13, margin: "0 0 12px", fontWeight: 700 }}>{item.variant}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <button onClick={() => updateQty(item.variantId, item.qty - 1)} style={{ width: 28, height: 28, border: `1px solid ${GOLD}`, background: "transparent", color: GOLD, fontWeight: 900, cursor: "pointer", borderRadius: 4, fontSize: 16 }}>-</button>
                      <span style={{ fontWeight: 900, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.variantId, item.qty + 1)} style={{ width: 28, height: 28, border: `1px solid ${GOLD}`, background: "transparent", color: GOLD, fontWeight: 900, cursor: "pointer", borderRadius: 4, fontSize: 16 }}>+</button>
                      <button onClick={() => remove(item.variantId)} style={{ marginLeft: 8, background: "transparent", border: "none", color: "rgba(245,240,232,0.3)", cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Remove</button>
                    </div>
                  </div>
                  <p style={{ fontWeight: 900, fontSize: 20, color: GOLD, margin: 0 }}>${(item.price * item.qty).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", paddingTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 16, color: "rgba(245,240,232,0.6)" }}>Subtotal</span>
                <span style={{ fontSize: 24, fontWeight: 900, color: GOLD }}>${total.toFixed(2)}</span>
              </div>
              <p style={{ fontSize: 12, color: "rgba(245,240,232,0.4)", margin: 0 }}>Free shipping on orders over $50. Ships 3-7 business days.</p>
              <button onClick={handleCheckout} disabled={loading} style={{ background: GOLD, color: NAVY, border: "none", borderRadius: 8, padding: "18px 36px", fontSize: 16, fontWeight: 900, letterSpacing: "1.5px", textTransform: "uppercase", cursor: loading ? "not-allowed" : "pointer" }}>
                {loading ? "Loading..." : `Checkout — $${total.toFixed(2)}`}
              </button>
              <p style={{ fontSize: 12, color: "rgba(245,240,232,0.4)", margin: 0, textAlign: "center" }}>Secure checkout via Stripe.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

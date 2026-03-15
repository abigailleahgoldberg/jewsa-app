"use client";

import { useCart } from "../../lib/cart-context";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setIsProcessing(true);
    setError("");
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });
      const data = await response.json();
      if (data.url) {
        // Redirect to Stripe hosted checkout
        window.location.href = data.url;
      } else {
        setError(data.error || "Checkout failed. Please try again.");
        setIsProcessing(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:var(--navy); color:var(--white); font-family:'DM Sans',system-ui,sans-serif; }
        .qty-input { width:56px; padding:8px; font-size:14px; text-align:center; background:rgba(255,255,255,0.08); border:1px solid var(--gold); color:var(--white); border-radius:4px; }
        .qty-input:focus { outline:none; border-color:var(--white); }
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <Link href="/" style={{color:"rgba(245,240,232,0.65)",fontWeight:700,fontSize:13,letterSpacing:"1px",textDecoration:"none"}}>← Continue Shopping</Link>
      </nav>

      <div style={{padding:"48px max(24px,5vw)",maxWidth:860,margin:"0 auto"}}>
        <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(36px,5vw,56px)",letterSpacing:"-1px",marginBottom:32}}>Your Cart</h1>

        {cart.length === 0 ? (
          <div style={{textAlign:"center",padding:"64px 0"}}>
            <div style={{fontSize:48,marginBottom:16}}>🛒</div>
            <p style={{fontSize:18,color:"rgba(245,240,232,0.6)",marginBottom:28}}>Your cart is empty.</p>
            <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"14px 32px",textDecoration:"none"}}>Shop Now</Link>
          </div>
        ) : (
          <div>
            {/* Cart Items */}
            <div style={{border:"1px solid rgba(201,168,76,0.2)",borderRadius:4,overflow:"hidden",marginBottom:24}}>
              {cart.map((item, i) => (
                <div key={`${item.productId}-${item.variantId}`} style={{display:"flex",alignItems:"center",gap:16,padding:"20px 24px",borderBottom: i < cart.length - 1 ? "1px solid rgba(201,168,76,0.1)" : "none",background:"rgba(255,255,255,0.02)"}}>
                  <img src={item.image} alt={item.name} style={{width:72,height:72,objectFit:"contain",flexShrink:0,borderRadius:4,background:"rgba(255,255,255,0.05)"}} />
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:900,fontSize:16,marginBottom:4}}>{item.name}</div>
                    <div style={{fontSize:14,color:"var(--gold)",fontWeight:700}}>${item.price.toFixed(2)}</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={item.quantity}
                      className="qty-input"
                      onChange={e => updateQuantity(item.productId, parseInt(e.target.value) || 1, item.variantId)}
                    />
                    <button
                      onClick={() => removeFromCart(item.productId, item.variantId)}
                      style={{background:"none",border:"none",color:"rgba(245,240,232,0.4)",cursor:"pointer",fontSize:18,padding:"4px 8px",lineHeight:1}}
                      title="Remove"
                    >✕</button>
                  </div>
                  <div style={{fontWeight:900,fontSize:16,minWidth:64,textAlign:"right",flexShrink:0}}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:4,padding:"24px",maxWidth:400,marginLeft:"auto"}}>
              <div style={{fontSize:11,letterSpacing:"2px",color:"rgba(245,240,232,0.5)",marginBottom:16,fontWeight:700}}>ORDER SUMMARY</div>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:15}}>
                <span style={{color:"rgba(245,240,232,0.6)"}}>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:20,fontSize:14,color:"rgba(245,240,232,0.5)"}}>
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",paddingTop:16,borderTop:"1px solid rgba(201,168,76,0.2)",marginBottom:24,fontWeight:900,fontSize:20}}>
                <span>Total</span>
                <span style={{color:"var(--gold)"}}>${getCartTotal().toFixed(2)}</span>
              </div>

              {error && (
                <div style={{background:"rgba(178,34,52,0.15)",border:"1px solid rgba(178,34,52,0.4)",padding:"12px 16px",borderRadius:4,marginBottom:16,fontSize:13,color:"#ff8a8a"}}>
                  {error}
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                style={{width:"100%",background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:15,letterSpacing:"1.5px",textTransform:"uppercase",padding:"18px",border:"none",cursor:isProcessing?"not-allowed":"pointer",opacity:isProcessing?0.7:1,transition:"opacity 0.2s"}}
              >
                {isProcessing ? 'Redirecting to Checkout...' : 'Checkout →'}
              </button>
              <p style={{fontSize:12,color:"rgba(201,168,76,0.6)",marginTop:12,textAlign:"center",lineHeight:1.6}}>
                Have a coupon code? You can enter it on the checkout page.
              </p>
              <p style={{fontSize:11,color:"rgba(245,240,232,0.3)",marginTop:6,textAlign:"center",lineHeight:1.6}}>
                Secure checkout via Stripe. Ships 3–7 business days.
              </p>
              <div style={{textAlign:"center",marginTop:16}}>
                <button onClick={clearCart} style={{background:"none",border:"none",color:"rgba(245,240,232,0.35)",cursor:"pointer",fontSize:13,textDecoration:"underline"}}>Clear cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

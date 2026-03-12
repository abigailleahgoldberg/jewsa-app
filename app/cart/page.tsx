"use client";

import { useCart } from "../../lib/cart-context";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NAVY = "var(--navy)";
const GOLD = "var(--gold)";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });

      if (response.ok) {
        const data = await response.json();
        // API returns { url: "https://checkout.stripe.com/..." }
        if (data.url) {
          window.location.href = data.url; // Hard navigate to Stripe hosted checkout
        } else {
          toast.error('Checkout error: no redirect URL returned.');
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        toast.error(`Checkout failed: ${errorData.error || errorData.message || response.statusText}`);
      }
    } catch (error: any) {
      toast.error(`An error occurred during checkout: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
      `}</style>
      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
            <Link href="/" style={{color:"rgba(245,240,232,0.55)",fontWeight:700,fontSize:13,letterSpacing:"1px",textDecoration:"none"}}>Continue Shopping</Link>
        </div>
      </nav>
      <div style={{padding:"40px max(24px,5vw)",maxWidth:900,margin:"0 auto"}}>
        <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(36px,5vw,64px)",letterSpacing:"-1px",marginBottom:30,textAlign:"center"}}>Your Cart</h1>

        {cart.length === 0 ? (
          <div style={{textAlign:"center",padding:"50px 0"}}>
            <p style={{fontSize:18,color:"rgba(245,240,232,0.7)",marginBottom:20}}>Your cart is empty. Time to get some swag!</p>
            <Link href="/" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"14px 28px",textDecoration:"none"}}>Shop Now</Link>
          </div>
        ) : (
          <div>
            <div style={{border:"1px solid rgba(201,168,76,0.15)",marginBottom:20}}>
              {cart.map((item) => (
                <div key={`${item.productId}-${item.variantId}`} style={{display:"flex",alignItems:"center",padding:"15px 20px",borderBottom:"1px solid rgba(201,168,76,0.08)",backgroundColor:"rgba(255,255,255,0.03)"}}>
                  <img src={item.image} alt={item.name} style={{width:80,height:80,objectFit:"contain",marginRight:20,borderRadius:4}} />
                  <div style={{flexGrow:1}}>
                    <h2 style={{fontSize:18,fontWeight:900,marginBottom:5}}>{item.name}</h2>
                    <p style={{fontSize:14,color:"rgba(245,240,232,0.6)"}}>Price: ${item.price.toFixed(2)}</p>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value), item.variantId)}
                    style={{width:60,padding:"8px",fontSize:14,marginRight:15,backgroundColor:"rgba(255,255,255,0.1)",border:"1px solid var(--gold)",color:"var(--white)",borderRadius:4}}
                  />
                  <button onClick={() => removeFromCart(item.productId, item.variantId)} style={{background:"var(--red)",color:"var(--white)",border:"none",padding:"8px 12px",cursor:"pointer",borderRadius:4}}>Remove</button>
                </div>
              ))}
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 0",borderTop:"2px solid var(--gold)",marginTop:20}}>
              <h2 style={{fontSize:22,fontWeight:900}}>Total: ${getCartTotal().toFixed(2)}</h2>
              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                style={{
                  background:"var(--gold)",
                  color:"var(--navy)",
                  fontWeight:900,
                  fontSize:16,
                  letterSpacing:"1.5px",
                  textTransform:"uppercase",
                  padding:"16px 32px",
                  border:"none",
                  cursor:isProcessing?"not-allowed":"pointer",
                  opacity:isProcessing?0.7:1,
                  transition:"opacity 0.2s"
                }}
              >
                {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
            <div style={{textAlign:"center",marginTop:20}}>
              <button onClick={clearCart} style={{background:"transparent",color:"rgba(245,240,232,0.6)",border:"none",textDecoration:"underline",cursor:"pointer",fontSize:14}}>Clear Cart</button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}
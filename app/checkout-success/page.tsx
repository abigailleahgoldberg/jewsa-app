// app/checkout-success/page.tsx
 "use client";

import Link from "next/link";

const NAVY = "var(--navy)";
const GOLD = "var(--gold)";

export default function CheckoutSuccessPage() {
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
      <div style={{padding:"40px max(24px,5vw)",maxWidth:700,margin:"0 auto",textAlign:"center",minHeight:"80vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(40px,6vw,72px)",letterSpacing:"-1px",marginBottom:20}}>Thank You for Your Order!</h1>
        <p style={{fontSize:18,color:"rgba(245,240,232,0.7)",marginBottom:30}}>Your purchase was successful. We appreciate your business!</p>
        <Link href="/" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"14px 28px",textDecoration:"none"}}>Back to Homepage</Link>
      </div>
    </>
  );
}
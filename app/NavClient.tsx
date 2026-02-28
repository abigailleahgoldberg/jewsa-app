"use client";
import Link from "next/link";

export default function NavClient() {
  return (
    <nav style={{ position:"sticky", top:0, zIndex:100, background:"var(--navy)", borderBottom:"2px solid var(--gold)", padding:"0 32px", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
      <Link href="/" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:32, color:"var(--gold)", letterSpacing:"2px", textDecoration:"none" }}>JewSA</Link>
      <div style={{ display:"flex", alignItems:"center", gap:28 }}>
        {([["Shop","/#shop"],["Our Story","/#story"],["Blog","/blog"],["Contact","/contact"]] as [string,string][]).map(([l,h])=>(
          <Link key={h} href={h} style={{ fontSize:13, fontWeight:900, color:"rgba(245,240,232,0.6)", textDecoration:"none", letterSpacing:"1px", textTransform:"uppercase" }}>{l}</Link>
        ))}
        <Link href="/#shop" style={{ background:"var(--gold)", color:"var(--navy)", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", padding:"10px 20px", textDecoration:"none" }}>Shop Now</Link>
      </div>
    </nav>
  );
}

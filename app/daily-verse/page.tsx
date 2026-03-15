"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Verse {
  text: string;
  reference: string;
  source: string;
  theme: string;
}

const THEME_COLORS: Record<string, string> = {
  wisdom: "#C9A84C",
  faith: "#3B7BD4",
  justice: "#B22234",
  kindness: "#2D7D3A",
  peace: "#7B8DA4",
  gratitude: "#C9A84C",
  strength: "#9B59B6",
  community: "#2D7D3A",
};

export default function DailyVersePage() {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/daily")
      .then((r) => r.json())
      .then((data) => {
        setVerse(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCopy = () => {
    if (!verse) return;
    const text = `"${verse.text}" — ${verse.reference}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const themeColor = verse ? (THEME_COLORS[verse.theme] || "#C9A84C") : "#C9A84C";

  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
        .loading{animation:pulse 1.5s ease-in-out infinite;}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
          <Link href="/holidays" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Holidays</Link>
          <Link href="/gifts" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Gifts</Link>
          <Link href="/culture" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Culture</Link>
          <Link href="/daily-verse" style={{fontSize:13,fontWeight:700,color:"var(--gold)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Daily Verse</Link>
          <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"10px 20px",textDecoration:"none"}}>Shop</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{padding:"16px max(24px,5vw)",background:"rgba(201,168,76,0.05)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto",fontSize:13,color:"rgba(245,240,232,0.4)"}}>
          <Link href="/" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Home</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <span style={{color:"var(--gold)"}}>Daily Verse</span>
        </div>
      </div>

      {/* HEADER */}
      <section style={{padding:"72px max(24px,5vw) 48px",background:"var(--navy)"}}>
        <div style={{maxWidth:760,margin:"0 auto",textAlign:"center"}}>
          <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:12,textTransform:"uppercase"}}>Jewish Wisdom</div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(40px,6vw,80px)",letterSpacing:"-1px",lineHeight:0.95,marginBottom:16}}>
            Daily Verse
          </h1>
          <p style={{fontSize:15,color:"rgba(245,240,232,0.5)",lineHeight:1.8}}>
            A verse from Jewish scripture and tradition — from Psalms, Proverbs, Torah, Pirkei Avot, and the Prophets. One each day. Curated for wisdom.
          </p>
        </div>
      </section>

      {/* VERSE CARD */}
      <section style={{padding:"0 max(24px,5vw) 80px",background:"var(--navy)"}}>
        <div style={{maxWidth:760,margin:"0 auto"}}>
          {loading ? (
            <div className="loading" style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.15)",padding:48,textAlign:"center"}}>
              <div style={{fontSize:14,color:"rgba(245,240,232,0.4)"}}>Loading today's verse...</div>
            </div>
          ) : verse ? (
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.2)",padding:48,borderTop:`4px solid ${themeColor}`}}>
              {/* Theme badge */}
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:32}}>
                <div style={{background:`${themeColor}20`,border:`1px solid ${themeColor}50`,padding:"6px 14px",display:"inline-block"}}>
                  <span style={{fontSize:11,fontWeight:900,letterSpacing:"2px",textTransform:"uppercase",color:themeColor}}>
                    {verse.theme}
                  </span>
                </div>
                <div style={{fontSize:12,color:"rgba(245,240,232,0.3)",letterSpacing:"1px",textTransform:"uppercase"}}>{verse.source}</div>
              </div>

              {/* Verse text */}
              <blockquote style={{fontSize:"clamp(18px,2.5vw,24px)",color:"rgba(245,240,232,0.9)",lineHeight:1.8,fontStyle:"italic",marginBottom:24,fontFamily:"'DM Sans',system-ui,sans-serif"}}>
                &ldquo;{verse.text}&rdquo;
              </blockquote>

              {/* Reference */}
              <cite style={{display:"block",fontSize:16,fontWeight:700,color:"var(--gold)",fontStyle:"normal",letterSpacing:"0.5px",marginBottom:32}}>
                — {verse.reference}
              </cite>

              {/* Copy button */}
              <button
                onClick={handleCopy}
                style={{
                  background: copied ? "rgba(45,125,58,0.2)" : "transparent",
                  border: `1px solid ${copied ? "#2D7D3A" : "rgba(201,168,76,0.3)"}`,
                  color: copied ? "#2D7D3A" : "rgba(245,240,232,0.5)",
                  padding:"10px 20px",
                  fontSize:13,
                  fontWeight:700,
                  letterSpacing:"1px",
                  textTransform:"uppercase",
                  cursor:"pointer",
                  display:"flex",
                  alignItems:"center",
                  gap:8,
                  transition:"all 0.2s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  {copied ? (
                    <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  ) : (
                    <>
                      <rect x="5" y="1" width="9" height="11" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                      <rect x="1" y="4" width="9" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="var(--navy)"/>
                    </>
                  )}
                </svg>
                {copied ? "Copied!" : "Copy Verse"}
              </button>
            </div>
          ) : (
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.15)",padding:48,textAlign:"center"}}>
              <div style={{fontSize:14,color:"rgba(245,240,232,0.4)"}}>Unable to load verse. Please try again.</div>
            </div>
          )}

          {/* Date note */}
          <p style={{marginTop:20,fontSize:13,color:"rgba(245,240,232,0.25)",textAlign:"center",lineHeight:1.6}}>
            Today&apos;s verse is determined by the day of the year. Verses cycle through 30+ selections from Psalms, Proverbs, Torah, Pirkei Avot, and the Prophets.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"64px max(24px,5vw)",background:"#060F1C",textAlign:"center"}}>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px,4vw,48px)",marginBottom:16}}>
            Wear Your Wisdom
          </h2>
          <p style={{fontSize:15,color:"rgba(245,240,232,0.5)",marginBottom:32,lineHeight:1.7}}>
            Jewish-American pride merch for the tribe that built America and never stopped thinking about it.
          </p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"16px 36px",textDecoration:"none"}}>Shop The Collection</Link>
            <Link href="/holidays" style={{background:"transparent",color:"var(--white)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"14px 32px",border:"2px solid rgba(245,240,232,0.25)",textDecoration:"none"}}>Jewish Holidays</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#04101F",borderTop:"1px solid rgba(201,168,76,0.15)",padding:"36px max(24px,5vw)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
        <div>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:"var(--gold)",letterSpacing:"2px",marginBottom:4}}>JewSA</div>
          <div style={{fontSize:12,color:"rgba(245,240,232,0.3)"}}>Jewish-American pride merch. Punny. Proud. Perfect.</div>
        </div>
        <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
          {[["Holidays","/holidays"],["Gifts","/gifts"],["Culture","/culture"],["Daily Verse","/daily-verse"],["Calendar","/calendar"]].map(([l,h])=>(
            <Link key={h} href={h} style={{fontSize:12,fontWeight:700,color:"rgba(245,240,232,0.4)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>{l}</Link>
          ))}
        </div>
        <div style={{fontSize:12,color:"rgba(245,240,232,0.25)"}}>© {new Date().getFullYear()} JewSA. All rights reserved.</div>
      </footer>
    </>
  );
}

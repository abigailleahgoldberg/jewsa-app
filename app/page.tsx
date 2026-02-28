"use client";
import Link from "next/link";

const TICKER = "WHERE PRIDE MEETS PUNCHLINES  •  JEWISH AMERICAN SINCE FOREVER  •  MESHUGGENEH MERCH  •  MAZEL TOV, YOU FOUND US  •  BUILT IN AMERICA, BLESSED IN BROOKLYN  •  OY VEY, THESE DEALS  •  ";

const PRODUCTS = [
  {
    id:"tee",
    name:"JewSA Basic Tee",
    price:25,
    badge:"Bestseller",
    desc:"Not your bubbe\'s basic tee. Stars, stripes, and all the chutzpah. Available S\u20134XL.",
    img:"https://files.cdn.printful.com/files/b4e/b4ebbc30701e79902092467a74f74124_preview.png",
  },
  {
    id:"hat",
    name:"Old School Bucket Hat",
    price:25,
    badge:"Fan Fave",
    desc:"Keep your keppah cool. Available in Black, Navy, and Khaki. S/M and L/XL.",
    img:"https://files.cdn.printful.com/files/3f4/3f41dd5bee9414a4c43fcefc2a63a429_preview.png",
  },
];

const PUNCHLINES = [
  { line:"We put the 'merch' in 'Merchant of Venice'.", sub:"(Shakespeare would've bought a tee.)" },
  { line:"Wear your history on your sleeve. Literally.", sub:"(The tee has sleeves. The history is real.)" },
  { line:"Mazel tov — you're about to look amazing.", sub:"(Your bubbe will kvell. Your rabbi might not.)" },
  { line:"We schlepped all the way here to sell you a hat.", sub:"(Worth it.)" },
  { line:"Not all heroes wear capes. Some wear bucket hats.", sub:"(You know who you are.)" },
  { line:"Jewish-American. Est. a very long time ago.", sub:"(The merch is new though.)" },
];

const VALUES = [
  { stat:"100%", label:"American Made Pride", sub:"Born here, built here, worn here." },
  { stat:"∞",    label:"Chutzpah Per Shirt",  sub:"We don't measure it. We can't. It's infinite." },
  { stat:"0",    label:"Schmaltz",             sub:"No fluff. Just gear you'll actually wear." },
  { stat:"1",    label:"Mission",              sub:"Jewish-American pride. Punny. Proud. Perfect." },
];

const REASONS = [
  { title:"Meshuggeneh Good Quality", body:"Soft, durable, print-that-lasts. We don't cut corners. Your bubbe didn't survive all that history so you could wear garbage merch." },
  { title:"Punny On Purpose", body:"Every piece is designed to make you smile before you even put it on. Jewish humor is a survival mechanism. We lean in." },
  { title:"Wear Your Identity", body:"Jewish-American isn't two things. It's one thing — and it's worth celebrating loud, proud, and with a solid punchline." },
  { title:"Gifts That Actually Land", body:"Hanukkah. Bar Mitzvahs. Birthdays. Graduations. 'I saw this and thought of you.' We've got every occasion covered." },
];

export default function HomePage() {
  return (
    <>
      {/* ── NAV ───────────────────────────────────────── */}
      <nav style={{ position:"sticky", top:0, zIndex:100, background:"var(--navy)", borderBottom:"2px solid var(--gold)", padding:"0 32px", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
        <Link href="/" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:32, color:"var(--gold)", letterSpacing:"2px", textDecoration:"none" }}>JewSA</Link>
        <div style={{ display:"flex", alignItems:"center", gap:28 }}>
          {[["Shop","/#shop"],["Our Story","/#story"],["Blog","/blog"],["Contact","/contact"]].map(([l,h])=>(
            <Link key={h} href={h} style={{ fontSize:13, fontWeight:900, color:"rgba(245,240,232,0.6)", textDecoration:"none", letterSpacing:"1px", textTransform:"uppercase", transition:"color 0.2s" }}
              onMouseEnter={e=>(e.currentTarget.style.color="var(--gold)")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(245,240,232,0.6)")}>{l}</Link>
          ))}
          <Link href="/#shop" style={{ background:"var(--gold)", color:"var(--navy)", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", padding:"10px 20px", textDecoration:"none" }}>Shop Now</Link>
        </div>
      </nav>

      {/* ── TICKER ──────────────────────────────────────── */}
      <div style={{ background:"var(--red)", padding:"9px 0", overflow:"hidden" }}>
        <div className="jewsa-ticker" style={{ display:"flex", gap:0, whiteSpace:"nowrap" }}>
          {[1,2].map(k=>(
            <span key={k} style={{ fontSize:11, fontWeight:900, letterSpacing:"2.5px", textTransform:"uppercase", color:"rgba(245,240,232,0.9)", paddingRight:0 }}>{TICKER}{TICKER}</span>
          ))}
        </div>
      </div>

      {/* ── HERO ──────────────────────────────────────── */}
      <section style={{ background:"var(--navy)", position:"relative", overflow:"hidden" }}>
        {/* Background stars */}
        {[
          {top:"8%",left:"7%",size:40,dur:4.2,del:0},
          {top:"22%",left:"15%",size:28,dur:5.1,del:1.2},
          {top:"55%",left:"4%",size:36,dur:3.8,del:2.4},
          {top:"70%",left:"18%",size:22,dur:6.0,del:0.8},
          {top:"15%",left:"42%",size:32,dur:4.5,del:1.8},
          {top:"80%",left:"38%",size:24,dur:5.5,del:3.1},
        ].map((s,i)=>(
          <div key={i} style={{ position:"absolute", top:s.top, left:s.left, fontSize:s.size, opacity:0.07, pointerEvents:"none", animation:`float-star ${s.dur}s ${s.del}s ease-in-out infinite` }}>✡</div>
        ))}

        <div className="jewsa-hero-grid" style={{ position:"relative", zIndex:1 }}>
          {/* LEFT */}
          <div style={{ padding:"80px 48px 80px max(48px,6vw)", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
            <div>
              <div style={{ display:"inline-block", background:"rgba(201,168,76,0.15)", border:"1px solid rgba(201,168,76,0.3)", padding:"6px 16px", marginBottom:24 }}>
                <span style={{ fontSize:11, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--gold)" }}>Jewish-American Pride</span>
              </div>
              <h1 style={{ fontSize:"clamp(48px,7vw,96px)", fontFamily:"'Bebas Neue',sans-serif", color:"var(--white)", letterSpacing:"-1px", lineHeight:0.92, marginBottom:0 }}>
                Where<br />
                <span style={{ color:"var(--gold)" }}>Pride</span><br />
                Meets<br />
                <span style={{ WebkitTextStroke:"2px var(--red-bright)", color:"transparent" }}>Punchlines.</span>
              </h1>
            </div>
            <div>
              <div style={{ width:48, height:3, background:"var(--gold)", margin:"28px 0 20px" }} />
              <p style={{ fontSize:18, color:"rgba(245,240,232,0.65)", fontWeight:700, lineHeight:1.65, maxWidth:420, marginBottom:10 }}>
                Gear for the tribe that built America — and never stopped being funny about it.
              </p>
              <p style={{ fontSize:15, color:"rgba(245,240,232,0.4)", fontWeight:700, lineHeight:1.65, maxWidth:400 }}>
                Because "Mazel tov" deserved its own merch line.
              </p>
            </div>
            <div>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:24 }}>
                <Link href="/#shop" style={{ background:"var(--gold)", color:"var(--navy)", fontWeight:900, fontSize:14, letterSpacing:"1.5px", textTransform:"uppercase", padding:"16px 36px", textDecoration:"none" }}>
                  Shop The Collection
                </Link>
                <Link href="/#story" style={{ background:"transparent", color:"var(--white)", fontWeight:900, fontSize:14, letterSpacing:"1.5px", textTransform:"uppercase", padding:"14px 32px", border:"2px solid rgba(245,240,232,0.3)", textDecoration:"none" }}>
                  Our Story
                </Link>
              </div>
              <div style={{ display:"flex", gap:28 }}>
                {[["100+", "Punny Products"], ["5★", "Average Rating"], ["✡", "Tribe Approved"]].map(([n,l])=>(
                  <div key={l}>
                    <div style={{ fontSize:16, fontWeight:900, color:"var(--gold)", letterSpacing:"-0.5px" }}>{n}</div>
                    <div style={{ fontSize:10, fontWeight:700, color:"rgba(245,240,232,0.3)", letterSpacing:"1px", textTransform:"uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — flag visual */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:"48px 48px 48px 20px" }}>
            <div style={{ width:"100%", aspectRatio:"3/4", position:"relative", border:"4px solid var(--gold)", boxShadow:"0 0 0 8px var(--navy), 0 0 60px rgba(201,168,76,0.2)" }} className="jewsa-glow">
              {/* Stars & Stripes visual */}
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,#0A1628 35%,#B22234 35%,#B22234 43%,#F5F0E8 43%,#F5F0E8 51%,#B22234 51%,#B22234 59%,#F5F0E8 59%,#F5F0E8 67%,#B22234 67%,#B22234 75%,#F5F0E8 75%,#F5F0E8 83%,#B22234 83%)" }} />
              {/* Star of David overlay */}
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:"clamp(80px,12vw,140px)", opacity:0.85, filter:"drop-shadow(0 4px 20px rgba(201,168,76,0.6))", color:"var(--gold)" }}>✡</span>
              </div>
              {/* Badge */}
              <div style={{ position:"absolute", top:14, left:14, background:"rgba(0,0,0,0.7)", padding:"5px 12px", border:"1px solid rgba(201,168,76,0.4)" }}>
                <span style={{ fontSize:10, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"var(--gold)" }}>Est. A Very Long Time Ago</span>
              </div>
              <div style={{ position:"absolute", bottom:14, right:14, background:"var(--gold)", padding:"6px 14px" }}>
                <span style={{ fontSize:10, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"var(--navy)" }}>Tribe Approved ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ──────────────────────────── */}
      <div style={{ background:"var(--gold)", padding:"16px 32px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"flex", alignItems:"center", gap:40, justifyContent:"center", flexWrap:"wrap" }}>
          {["🏆 100% Chutzpah Certified", "✡ Jewish-Owned & Operated", "🇺🇸 Proud Since Day One", "😂 Bubbe-Tested, Bubbe-Approved"].map(t=>(
            <span key={t} style={{ fontSize:13, fontWeight:900, color:"var(--navy)", letterSpacing:"0.5px" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── PUNCHLINES ───────────────────────────────── */}
      <section style={{ background:"var(--cream)", padding:"72px 32px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--gray)" }}>The Bit</span>
            <h2 style={{ fontSize:"clamp(36px,5.5vw,64px)", fontFamily:"'Bebas Neue',sans-serif", color:"var(--navy)", letterSpacing:"-1px", marginTop:8 }}>
              We Take Our Pride<br /><span style={{ color:"var(--red)" }}>Very Unseriously.</span>
            </h2>
          </div>
          <div className="jewsa-punchlines">
            {PUNCHLINES.map(p=>(
              <div key={p.line} style={{ background:"var(--navy)", padding:"32px 28px", borderTop:"4px solid var(--gold)" }}>
                <p style={{ fontSize:15, fontWeight:900, color:"var(--white)", lineHeight:1.5, marginBottom:10 }}>"{p.line}"</p>
                <p style={{ fontSize:12, fontWeight:700, color:"rgba(245,240,232,0.35)", fontStyle:"italic" }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP ────────────────────────────────────────── */}
      <section id="shop" style={{ background:"#fff", padding:"72px 32px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:16 }}>
            <div>
              <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--gray)" }}>The Collection</span>
              <h2 style={{ fontSize:"clamp(36px,5.5vw,64px)", fontFamily:"'Bebas Neue',sans-serif", color:"var(--navy)", letterSpacing:"-1px", marginTop:8 }}>
                Gear For The Tribe.
              </h2>
            </div>
            <Link href="/shop" style={{ fontSize:13, fontWeight:900, color:"var(--red)", letterSpacing:"1.5px", textTransform:"uppercase", textDecoration:"none", borderBottom:"2px solid var(--red)", paddingBottom:2 }}>
              View All Products →
            </Link>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, maxWidth:800, margin:"0 auto" }}>
            {PRODUCTS.map(p=>(
              <div key={p.id} style={{ position:"relative" }}>
                {p.badge && (
                  <div style={{ position:"absolute", top:12, left:12, zIndex:2, background:"var(--gold)", padding:"4px 10px" }}>
                    <span style={{ fontSize:10, fontWeight:900, letterSpacing:"1.5px", textTransform:"uppercase", color:"var(--navy)" }}>{p.badge}</span>
                  </div>
                )}
                <div style={{ background:"var(--cream)", aspectRatio:"1/1", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16, overflow:"hidden", border:"2px solid rgba(10,22,40,0.08)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                </div>
                <h3 style={{ fontSize:18, fontWeight:900, color:"var(--navy)", marginBottom:6, letterSpacing:"-0.3px" }}>{p.name}</h3>
                <p style={{ fontSize:13, fontWeight:700, color:"var(--gray)", lineHeight:1.6, marginBottom:16 }}>{p.desc}</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontSize:22, fontWeight:900, color:"var(--navy)" }}>${p.price}</span>
                  <a href="https://aswej-merch-store-xp68.vercel.app" target="_blank" rel="noopener noreferrer" style={{ background:"var(--navy)", color:"var(--gold)", fontWeight:900, fontSize:11, letterSpacing:"1.5px", textTransform:"uppercase", padding:"12px 22px", textDecoration:"none" }}>
                    Buy Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JEWSA ──────────────────────────────────── */}
      <section id="story" style={{ background:"var(--navy)", padding:"72px 32px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(201,168,76,0.5)" }}>The Drash</span>
            <h2 style={{ fontSize:"clamp(36px,5.5vw,64px)", fontFamily:"'Bebas Neue',sans-serif", color:"var(--white)", letterSpacing:"-1px", marginTop:8 }}>
              Why Does JewSA Exist?<br /><span style={{ color:"var(--gold)" }}>Because we had to.</span>
            </h2>
            <div style={{ width:48, height:3, background:"var(--red)", margin:"24px auto 0" }} />
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center", marginBottom:64 }} className="jewsa-story-grid">
            <div>
              <p style={{ fontSize:18, color:"rgba(245,240,232,0.75)", fontWeight:700, lineHeight:1.8, marginBottom:20 }}>
                Jewish-American identity is one of the great untapped stories in American history. We built half this country, wrote most of the jokes, and somehow never had a proper merch line.
              </p>
              <p style={{ fontSize:17, color:"rgba(245,240,232,0.5)", fontWeight:700, lineHeight:1.8 }}>
                JewSA is for the people who hold both identities at once — loud and proud about both. Who wear their history without apology and their humor without explanation. Who know that "oy vey" and "God Bless America" are not contradictions.
              </p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {REASONS.map(r=>(
                <div key={r.title} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(201,168,76,0.15)", padding:"24px 20px" }}>
                  <div style={{ fontSize:11, fontWeight:900, color:"var(--gold)", letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:10 }}>{r.title}</div>
                  <p style={{ fontSize:13, color:"rgba(245,240,232,0.45)", fontWeight:700, lineHeight:1.65 }}>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Stats */}
          <div className="jewsa-values-grid" style={{ background:"rgba(255,255,255,0.03)" }}>
            {VALUES.map((v,i)=>(
              <div key={i} style={{ padding:"36px 28px", textAlign:"center", borderRight: i<3 ? "1px solid rgba(201,168,76,0.08)" : "none" }}>
                <div style={{ fontSize:"clamp(32px,4vw,56px)", fontFamily:"'Bebas Neue',sans-serif", color:"var(--gold)", letterSpacing:"-1px", marginBottom:8 }}>{v.stat}</div>
                <div style={{ fontSize:12, fontWeight:900, color:"var(--white)", marginBottom:6, letterSpacing:"0.5px" }}>{v.label}</div>
                <div style={{ fontSize:11, fontWeight:700, color:"rgba(245,240,232,0.3)", lineHeight:1.5 }}>{v.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GIFT GUIDE ───────────────────────────────── */}
      <section style={{ background:"var(--red)", padding:"72px 32px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }} className="jewsa-story-grid">
          <div>
            <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.5)", display:"block", marginBottom:16 }}>For Every Occasion</span>
            <h2 style={{ fontSize:"clamp(36px,5.5vw,64px)", fontFamily:"'Bebas Neue',sans-serif", color:"#fff", letterSpacing:"-1px", lineHeight:1.0, marginBottom:24 }}>
              The Gift They<br />Didn't Know<br /><span style={{ color:"var(--gold)" }}>They Needed.</span>
            </h2>
            <div style={{ width:40, height:3, background:"rgba(245,240,232,0.4)", marginBottom:24 }} />
            <p style={{ fontSize:17, color:"rgba(245,240,232,0.8)", fontWeight:700, lineHeight:1.75, marginBottom:32 }}>
              Hanukkah. Bar Mitzvahs. Graduations. Shabbat dinners. "I saw this and thought of you." We've got every Jewish-American celebration covered with gear that actually lands.
            </p>
            <Link href="/#shop" style={{ background:"var(--gold)", color:"var(--navy)", fontWeight:900, fontSize:14, letterSpacing:"1.5px", textTransform:"uppercase", padding:"16px 36px", textDecoration:"none", display:"inline-block" }}>
              Shop Gifts
            </Link>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {[
              { occasion:"Hanukkah",      icon:"🕎", note:"8 nights, 8 chances to give something actually funny." },
              { occasion:"Bar/Bat Mitzvah",icon:"✡", note:"Today you are a JewSA customer. Mazel tov." },
              { occasion:"Graduation",    icon:"🎓", note:"They survived. They deserve the merch." },
              { occasion:"'Just Because'",icon:"💙", note:"No reason needed. Jewish guilt works without context." },
            ].map(g=>(
              <div key={g.occasion} style={{ background:"rgba(0,0,0,0.2)", padding:"18px 22px", display:"flex", alignItems:"center", gap:16 }}>
                <span style={{ fontSize:28 }}>{g.icon}</span>
                <div>
                  <div style={{ fontSize:14, fontWeight:900, color:"#fff" }}>{g.occasion}</div>
                  <div style={{ fontSize:12, fontWeight:700, color:"rgba(245,240,232,0.55)" }}>{g.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ────────────────────────────── */}
      <section style={{ background:"var(--cream)", padding:"72px 32px" }}>
        <div style={{ maxWidth:600, margin:"0 auto", textAlign:"center" }}>
          <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--gray)", display:"block", marginBottom:16 }}>Join The Tribe</span>
          <h2 style={{ fontSize:"clamp(32px,5vw,56px)", fontFamily:"'Bebas Neue',sans-serif", color:"var(--navy)", letterSpacing:"-1px", marginBottom:12 }}>
            New drops. Big sales.<br />Better punchlines.
          </h2>
          <p style={{ fontSize:15, color:"var(--gray)", fontWeight:700, lineHeight:1.7, marginBottom:32 }}>
            Sign up and get 10% off your first order. Because a good deal is basically a mitzvah.
          </p>
          <form onSubmit={e=>e.preventDefault()} style={{ display:"flex", gap:0, maxWidth:480, margin:"0 auto" }}>
            <input type="email" placeholder="your@email.com" style={{ flex:1, padding:"14px 18px", border:"2px solid var(--navy)", borderRight:"none", fontFamily:"inherit", fontWeight:700, fontSize:14, outline:"none", background:"#fff" }} />
            <button type="submit" style={{ padding:"14px 24px", background:"var(--navy)", color:"var(--gold)", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", border:"none", cursor:"pointer", whiteSpace:"nowrap", fontFamily:"inherit" }}>
              Join →
            </button>
          </form>
          <p style={{ fontSize:11, color:"var(--gray)", fontWeight:700, marginTop:12 }}>No spam. We're Jewish, not meshugeneh.</p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer style={{ background:"var(--dark)", padding:"48px 32px 24px", borderTop:"2px solid rgba(201,168,76,0.15)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1.5fr 1fr 1fr", gap:40, marginBottom:48 }} className="jewsa-footer-grid">
            <div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:36, color:"var(--gold)", letterSpacing:"2px", marginBottom:12 }}>JewSA</div>
              <p style={{ fontSize:14, fontWeight:700, color:"rgba(245,240,232,0.4)", lineHeight:1.75, maxWidth:240 }}>
                Where Pride Meets Punchlines. Jewish-American merch built for the tribe.
              </p>
            </div>
            <div>
              <p style={{ fontSize:11, fontWeight:900, color:"var(--gold)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:16 }}>Shop</p>
              {[["Tees","/shop"],["Hats","/shop"],["Hoodies","/shop"],["Gifts","/shop"],["All Products","/shop"]].map(([l,h])=>(
                <Link key={l} href={h} style={{ display:"block", color:"rgba(245,240,232,0.4)", fontWeight:700, fontSize:13, textDecoration:"none", marginBottom:8 }}>{l}</Link>
              ))}
            </div>
            <div>
              <p style={{ fontSize:11, fontWeight:900, color:"var(--gold)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:16 }}>Info</p>
              {[["Our Story","/#story"],["Blog","/blog"],["Contact","/contact"],["Terms","/terms"],["Privacy","/privacy"]].map(([l,h])=>(
                <Link key={l} href={h} style={{ display:"block", color:"rgba(245,240,232,0.4)", fontWeight:700, fontSize:13, textDecoration:"none", marginBottom:8 }}>{l}</Link>
              ))}
            </div>
          </div>
          <div style={{ borderTop:"1px solid rgba(245,240,232,0.06)", paddingTop:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
            <p style={{ fontSize:12, color:"rgba(245,240,232,0.25)", fontWeight:700 }}>© 2026 JewSA. All rights reserved. Mazel tov.</p>
            <p style={{ fontSize:12, color:"rgba(245,240,232,0.25)", fontWeight:700 }}>Made with chutzpah in the USA 🇺🇸</p>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 860px) {
          .jewsa-story-grid { grid-template-columns: 1fr !important; }
          .jewsa-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .jewsa-hero-grid > div:last-child { display: none; }
          .jewsa-hero-grid > div:first-child { padding: 48px 24px !important; }
        }
      `}</style>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllHolidays } from "../data/holidays";

export const metadata: Metadata = {
  title: "Jewish Holidays | JewSA",
  description:
    "Explore the major Jewish holidays — Rosh Hashanah, Yom Kippur, Hanukkah, Passover, and more. Learn the history, traditions, foods, and meaning behind each celebration.",
  openGraph: {
    title: "Jewish Holidays | JewSA",
    description:
      "Explore the major Jewish holidays — their history, traditions, foods, and meaning.",
    url: "https://jewsa.com/holidays",
  },
};

export default function HolidaysPage() {
  const holidays = getAllHolidays();

  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        .holidays-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;}
        .holiday-card{background:rgba(255,255,255,0.03);border:1px solid rgba(201,168,76,0.15);padding:28px;transition:border-color 0.2s,transform 0.2s;text-decoration:none;display:block;color:var(--white);}
        .holiday-card:hover{border-color:var(--gold);transform:translateY(-2px);}
        @media(max-width:600px){.holidays-grid{grid-template-columns:1fr;}}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <div style={{display:"flex",alignItems:"center",gap:24}}>
          <Link href="/holidays" style={{fontSize:13,fontWeight:700,color:"var(--gold)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Holidays</Link>
          <Link href="/gifts" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Gifts</Link>
          <Link href="/culture" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Culture</Link>
          <Link href="/daily-verse" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Daily Verse</Link>
          <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"10px 20px",textDecoration:"none"}}>Shop</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{padding:"16px max(24px,5vw)",background:"rgba(201,168,76,0.05)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",fontSize:13,color:"rgba(245,240,232,0.4)"}}>
          <Link href="/" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Home</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <span style={{color:"var(--gold)"}}>Holidays</span>
        </div>
      </div>

      {/* HEADER */}
      <section style={{padding:"72px max(24px,5vw) 56px",background:"var(--navy)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
          <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:12,textTransform:"uppercase"}}>The Jewish Year</div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(40px,6vw,80px)",letterSpacing:"-1px",lineHeight:0.95,marginBottom:20}}>
            Jewish Holidays
          </h1>
          <p style={{fontSize:16,color:"rgba(245,240,232,0.55)",maxWidth:600,margin:"0 auto",lineHeight:1.8}}>
            Eight major holidays that anchor Jewish life across the year. Each carries centuries of tradition, meaning, and memory. Learn what they are, how they are observed, and why they matter.
          </p>
        </div>
      </section>

      {/* HOLIDAYS GRID */}
      <section style={{padding:"0 max(24px,5vw) 80px",background:"var(--navy)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="holidays-grid">
            {holidays.map((holiday) => (
              <Link key={holiday.slug} href={`/holidays/${holiday.slug}`} className="holiday-card">
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                  <div style={{width:12,height:12,background:holiday.color,flexShrink:0}} />
                  <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700}}>
                    {holiday.hebrewName}
                  </div>
                </div>
                <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,letterSpacing:"1px",marginBottom:10,lineHeight:1}}>
                  {holiday.name}
                </h2>
                <p style={{fontSize:13,color:"rgba(245,240,232,0.55)",lineHeight:1.7,marginBottom:16}}>
                  {holiday.description.substring(0, 160)}...
                </p>
                {holiday.greeting && (
                  <div style={{fontSize:12,color:"var(--gold)",fontStyle:"italic",marginBottom:16}}>
                    {holiday.greeting}
                  </div>
                )}
                {holiday.foods && (
                  <div style={{fontSize:11,color:"rgba(245,240,232,0.3)",letterSpacing:"0.5px"}}>
                    {holiday.foods.slice(0, 3).join(" · ")}
                  </div>
                )}
                <div style={{marginTop:20,fontSize:13,fontWeight:700,color:"var(--gold)",letterSpacing:"1px",textTransform:"uppercase"}}>
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"64px max(24px,5vw)",background:"#060F1C",textAlign:"center"}}>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px,4vw,48px)",marginBottom:16}}>
            Celebrate With The Right Gear
          </h2>
          <p style={{fontSize:15,color:"rgba(245,240,232,0.5)",marginBottom:32,lineHeight:1.7}}>
            Jewish-American pride merch for every holiday, milestone, and moment.
          </p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"16px 36px",textDecoration:"none"}}>Shop The Collection</Link>
            <Link href="/gifts" style={{background:"transparent",color:"var(--white)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"14px 32px",border:"2px solid rgba(245,240,232,0.25)",textDecoration:"none"}}>Gift Guides</Link>
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

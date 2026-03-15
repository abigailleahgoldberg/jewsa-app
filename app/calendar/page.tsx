import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jewish Holiday Calendar | JewSA",
  description:
    "A visual guide to Jewish holidays throughout the year. The Jewish calendar is lunisolar — dates shift each year. Use this as a seasonal guide and check a Jewish calendar for current year dates.",
  openGraph: {
    title: "Jewish Holiday Calendar | JewSA",
    description: "A visual guide to Jewish holidays throughout the year.",
    url: "https://jewsa.com/calendar",
  },
};

const CALENDAR_ENTRIES = [
  { month: "January / February", hebrewMonth: "Shevat", holidays: [
    { name: "Tu B'Shvat", slug: "tu-bishvat", hebrewDate: "15 Shevat", desc: "New Year of the Trees", color: "#2D7D3A" },
  ]},
  { month: "February / March", hebrewMonth: "Adar", holidays: [
    { name: "Purim", slug: "purim", hebrewDate: "14 Adar", desc: "Feast of Lots — costumes, megillah, hamantaschen", color: "#9B59B6" },
  ]},
  { month: "March / April", hebrewMonth: "Nisan", holidays: [
    { name: "Passover (Pesach)", slug: "passover", hebrewDate: "15-22 Nisan", desc: "Festival of Freedom — seder, matzah, exodus story", color: "#C9A84C" },
  ]},
  { month: "May / June", hebrewMonth: "Sivan", holidays: [
    { name: "Shavuot", slug: "shavuot", hebrewDate: "6-7 Sivan", desc: "Festival of Weeks — Torah given at Sinai, dairy foods", color: "#F5F0E8" },
  ]},
  { month: "July / August", hebrewMonth: "Av", holidays: [
    { name: "Tisha B'Av", slug: null, hebrewDate: "9 Av", desc: "Day of Mourning — destruction of the Temples", color: "rgba(180,180,200,0.6)" },
  ]},
  { month: "September / October", hebrewMonth: "Tishrei", holidays: [
    { name: "Rosh Hashanah", slug: "rosh-hashanah", hebrewDate: "1-2 Tishrei", desc: "Jewish New Year — shofar, apples and honey", color: "#C9A84C" },
    { name: "Yom Kippur", slug: "yom-kippur", hebrewDate: "10 Tishrei", desc: "Day of Atonement — holiest day, 25-hour fast", color: "#F5F0E8" },
    { name: "Sukkot", slug: "sukkot", hebrewDate: "15-21 Tishrei", desc: "Festival of Tabernacles — sukkah, four species", color: "#2D7D3A" },
    { name: "Shemini Atzeret / Simchat Torah", slug: null, hebrewDate: "22-23 Tishrei", desc: "Completing and restarting the Torah reading cycle", color: "#C9A84C" },
  ]},
  { month: "November / December", hebrewMonth: "Kislev / Tevet", holidays: [
    { name: "Hanukkah", slug: "hanukkah", hebrewDate: "25 Kislev — 2/3 Tevet", desc: "Festival of Lights — 8 nights, menorah, latkes", color: "#3B7BD4" },
  ]},
];

export default function CalendarPage() {
  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        .holiday-entry{display:grid;grid-template-columns:200px 1fr;gap:0;border-bottom:1px solid rgba(201,168,76,0.07);}
        .holiday-entry:last-child{border-bottom:none;}
        @media(max-width:640px){.holiday-entry{grid-template-columns:1fr;}}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
          <Link href="/holidays" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Holidays</Link>
          <Link href="/gifts" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Gifts</Link>
          <Link href="/culture" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Culture</Link>
          <Link href="/calendar" style={{fontSize:13,fontWeight:700,color:"var(--gold)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Calendar</Link>
          <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"10px 20px",textDecoration:"none"}}>Shop</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{padding:"16px max(24px,5vw)",background:"rgba(201,168,76,0.05)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",fontSize:13,color:"rgba(245,240,232,0.4)"}}>
          <Link href="/" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Home</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <span style={{color:"var(--gold)"}}>Calendar</span>
        </div>
      </div>

      {/* HEADER */}
      <section style={{padding:"72px max(24px,5vw) 56px",background:"var(--navy)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
          <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:12,textTransform:"uppercase"}}>The Jewish Year</div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(40px,6vw,80px)",letterSpacing:"-1px",lineHeight:0.95,marginBottom:20}}>
            Jewish Holiday Calendar
          </h1>
          <p style={{fontSize:15,color:"rgba(245,240,232,0.55)",maxWidth:640,margin:"0 auto",lineHeight:1.8,marginBottom:20}}>
            The Jewish calendar is lunisolar — it follows both the moon and the sun. Gregorian dates shift each year as the two calendars realign. The Hebrew months and their associated holidays remain constant; only the secular dates change.
          </p>
          <div style={{display:"inline-block",background:"rgba(178,34,52,0.15)",border:"1px solid rgba(178,34,52,0.3)",padding:"10px 20px"}}>
            <span style={{fontSize:13,color:"rgba(245,240,232,0.7)"}}>
              Dates below show approximate Gregorian season. Consult a current Jewish calendar for exact dates each year.
            </span>
          </div>
        </div>
      </section>

      {/* LEGEND */}
      <section style={{padding:"0 max(24px,5vw) 32px",background:"var(--navy)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",gap:24,flexWrap:"wrap"}}>
          {[["Major Holiday","var(--gold)"],["Minor Holiday / Other","#2D7D3A"],["Day of Mourning","rgba(180,180,200,0.6)"]].map(([l,c])=>(
            <div key={l} style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:12,height:12,background:c,flexShrink:0}}/>
              <span style={{fontSize:12,color:"rgba(245,240,232,0.4)",letterSpacing:"1px",textTransform:"uppercase"}}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CALENDAR */}
      <section style={{padding:"0 max(24px,5vw) 80px",background:"var(--navy)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          {CALENDAR_ENTRIES.map((entry, ei) => (
            <div key={ei} style={{marginBottom:40}}>
              <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:16,paddingBottom:12,borderBottom:"1px solid rgba(201,168,76,0.2)"}}>
                <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:"var(--white)",letterSpacing:"1px"}}>{entry.month}</h2>
                <span style={{fontSize:14,color:"var(--gold)",fontStyle:"italic"}}>{entry.hebrewMonth}</span>
              </div>
              <div style={{border:"1px solid rgba(201,168,76,0.1)"}}>
                {entry.holidays.map((h, hi) => (
                  <div key={hi} className="holiday-entry">
                    <div style={{padding:"20px 20px",borderRight:"1px solid rgba(201,168,76,0.08)",background:"rgba(255,255,255,0.01)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                        <div style={{width:10,height:10,background:h.color,flexShrink:0}}/>
                        <span style={{fontSize:11,color:"rgba(245,240,232,0.4)",letterSpacing:"1px"}}>{h.hebrewDate}</span>
                      </div>
                    </div>
                    <div style={{padding:"20px 24px"}}>
                      {h.slug ? (
                        <Link href={`/holidays/${h.slug}`} style={{fontWeight:900,fontSize:16,color:"var(--white)",textDecoration:"none",display:"block",marginBottom:6}}>
                          {h.name} →
                        </Link>
                      ) : (
                        <div style={{fontWeight:900,fontSize:16,color:"rgba(245,240,232,0.75)",marginBottom:6}}>{h.name}</div>
                      )}
                      <p style={{fontSize:13,color:"rgba(245,240,232,0.45)",lineHeight:1.6}}>{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"64px max(24px,5vw)",background:"#060F1C",textAlign:"center"}}>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px,4vw,48px)",marginBottom:16}}>
            Know Every Holiday. Celebrate Every One.
          </h2>
          <p style={{fontSize:15,color:"rgba(245,240,232,0.5)",marginBottom:32,lineHeight:1.7}}>
            Jewish-American pride merch for every occasion, memorial day, and moment that matters.
          </p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/holidays" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"16px 36px",textDecoration:"none"}}>Explore Holidays</Link>
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

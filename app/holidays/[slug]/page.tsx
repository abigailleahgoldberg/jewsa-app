import type { Metadata } from "next";
import Link from "next/link";
import { getAllHolidays, getHolidayBySlug } from "../../data/holidays";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllHolidays().map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const holiday = getHolidayBySlug(slug);
  if (!holiday) return {};
  return {
    title: `${holiday.name} | Jewish Holidays | JewSA`,
    description: holiday.description.substring(0, 160),
    openGraph: {
      title: `${holiday.name} — ${holiday.hebrewName} | JewSA`,
      description: holiday.description.substring(0, 160),
      url: `https://jewsa.com/holidays/${slug}`,
    },
  };
}

export default async function HolidayPage({ params }: Props) {
  const { slug } = await params;
  const holiday = getHolidayBySlug(slug);
  if (!holiday) notFound();

  const allHolidays = getAllHolidays();
  const related = allHolidays.filter((h) => h.slug !== slug).slice(0, 3);

  const holidayDates: Record<string, {startDate: string; endDate: string}> = {
    "rosh-hashanah": {startDate:"2026-09-20",endDate:"2026-09-22"},
    "yom-kippur": {startDate:"2026-09-29",endDate:"2026-09-30"},
    "sukkot": {startDate:"2026-10-04",endDate:"2026-10-11"},
    "shemini-atzeret": {startDate:"2026-10-11",endDate:"2026-10-12"},
    "simchat-torah": {startDate:"2026-10-12",endDate:"2026-10-13"},
    "hanukkah": {startDate:"2026-12-05",endDate:"2026-12-13"},
    "tu-bishvat": {startDate:"2027-02-01",endDate:"2027-02-02"},
    "purim": {startDate:"2027-03-03",endDate:"2027-03-04"},
    "passover": {startDate:"2027-04-02",endDate:"2027-04-09"},
    "yom-hashoah": {startDate:"2027-04-20",endDate:"2027-04-21"},
    "yom-haatzmaut": {startDate:"2027-05-01",endDate:"2027-05-02"},
    "shavuot": {startDate:"2027-05-22",endDate:"2027-05-24"},
    "tisha-bav": {startDate:"2027-08-01",endDate:"2027-08-02"},
  };
  const dates = holidayDates[holiday.slug] || {startDate:"2026-09-01",endDate:"2026-09-02"};

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: holiday.name,
    description: holiday.description,
    url: `https://jewsa.com/holidays/${holiday.slug}`,
    organizer: {
      "@type": "Organization",
      name: "JewSA",
      url: "https://jewsa.com",
    },
    eventStatus: "https://schema.org/EventScheduled",
    startDate: dates.startDate,
    endDate: dates.endDate,
    location: {"@type":"VirtualLocation","url":`https://jewsa.com/holidays/${holiday.slug}`},
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  };

  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        .related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        @media(max-width:700px){.related-grid{grid-template-columns:1fr;}}
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
          <Link href="/holidays" style={{fontSize:13,fontWeight:700,color:"var(--gold)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Holidays</Link>
          <Link href="/gifts" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Gifts</Link>
          <Link href="/culture" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Culture</Link>
          <Link href="/daily-verse" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Daily Verse</Link>
          <Link href="/blog" style={{color:"var(--white)",textDecoration:"none",fontWeight:500}}>Blog</Link>
          <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"10px 20px",textDecoration:"none"}}>Shop</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{padding:"16px max(24px,5vw)",background:"rgba(201,168,76,0.05)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto",fontSize:13,color:"rgba(245,240,232,0.4)"}}>
          <Link href="/" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Home</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <Link href="/holidays" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Holidays</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <span style={{color:"var(--gold)"}}>{holiday.name}</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{padding:"72px max(24px,5vw) 48px",background:"var(--navy)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{width:14,height:14,background:holiday.color,flexShrink:0}} />
            <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700}}>Jewish Holiday</div>
          </div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(48px,7vw,96px)",letterSpacing:"-1px",lineHeight:0.9,marginBottom:12}}>
            {holiday.name}
          </h1>
          <div style={{fontSize:"clamp(20px,3vw,32px)",color:"rgba(201,168,76,0.7)",fontFamily:"'Bebas Neue',sans-serif",letterSpacing:"2px",marginBottom:24}}>
            {holiday.hebrewName}
          </div>
          {holiday.greeting && (
            <div style={{display:"inline-block",background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.3)",padding:"10px 20px",borderLeft:`4px solid ${holiday.color}`}}>
              <span style={{fontSize:14,color:"var(--gold)",fontStyle:"italic"}}>{holiday.greeting}</span>
            </div>
          )}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{padding:"56px max(24px,5vw)",background:"var(--navy)"}}>
        <div style={{maxWidth:860,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 280px",gap:48,alignItems:"start"}}>
          
          {/* MAIN */}
          <div>
            <p style={{fontSize:17,color:"rgba(245,240,232,0.75)",lineHeight:1.85,marginBottom:40}}>
              {holiday.description}
            </p>

            <div style={{marginBottom:40}}>
              <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"1px",marginBottom:16}}>
                Why It Matters
              </h2>
              <p style={{fontSize:15,color:"rgba(245,240,232,0.65)",lineHeight:1.85}}>
                {holiday.significance}
              </p>
            </div>

            <div style={{marginBottom:40}}>
              <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"1px",marginBottom:16}}>
                How It Is Observed
              </h2>
              <p style={{fontSize:15,color:"rgba(245,240,232,0.65)",lineHeight:1.85}}>
                {holiday.howObserved}
              </p>
            </div>

            {/* SCRIPTURE */}
            <div style={{marginBottom:40,borderLeft:"4px solid var(--gold)",paddingLeft:24,background:"rgba(201,168,76,0.05)",padding:"24px 24px 24px 28px"}}>
              <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,marginBottom:12}}>Scripture</div>
              <blockquote style={{fontSize:16,color:"rgba(245,240,232,0.8)",lineHeight:1.85,fontStyle:"italic",marginBottom:12}}>
                &ldquo;{holiday.scriptureText}&rdquo;
              </blockquote>
              <cite style={{fontSize:13,color:"var(--gold)",fontStyle:"normal",fontWeight:700}}>
                — {holiday.scriptureRef}
              </cite>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{position:"sticky",top:80}}>
            {holiday.foods && (
              <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.15)",padding:24,marginBottom:24}}>
                <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,color:"var(--gold)",letterSpacing:"1px",marginBottom:16}}>Traditional Foods</h3>
                <ul style={{listStyle:"none",padding:0}}>
                  {holiday.foods.map((food) => (
                    <li key={food} style={{fontSize:14,color:"rgba(245,240,232,0.65)",padding:"8px 0",borderBottom:"1px solid rgba(201,168,76,0.07)",display:"flex",alignItems:"center",gap:10}}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <rect width="8" height="8" fill="var(--gold)" opacity="0.5"/>
                      </svg>
                      {food}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {holiday.greeting && (
              <div style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",padding:24,marginBottom:24}}>
                <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,marginBottom:10}}>Traditional Greeting</div>
                <p style={{fontSize:14,color:"rgba(245,240,232,0.75)",lineHeight:1.6,fontStyle:"italic"}}>{holiday.greeting}</p>
              </div>
            )}

            <div style={{background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.25)",padding:24}}>
              <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,marginBottom:12}}>Celebrate In Style</div>
              <p style={{fontSize:13,color:"rgba(245,240,232,0.55)",lineHeight:1.6,marginBottom:16}}>Jewish-American pride merch for every holiday and occasion.</p>
              <Link href="/#shop" style={{display:"block",background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:12,letterSpacing:"1.5px",textTransform:"uppercase",padding:"12px 16px",textDecoration:"none",textAlign:"center"}}>Shop The Collection</Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED HOLIDAYS */}
      <section style={{padding:"56px max(24px,5vw) 80px",background:"#060F1C"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--white)",letterSpacing:"1px",marginBottom:24}}>Other Jewish Holidays</h2>
          <div className="related-grid">
            {related.map((h) => (
              <Link key={h.slug} href={`/holidays/${h.slug}`} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.12)",padding:20,textDecoration:"none",color:"var(--white)",display:"block",transition:"border-color 0.2s"}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <div style={{width:8,height:8,background:h.color}} />
                  <span style={{fontSize:11,color:"var(--gold)",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700}}>{h.hebrewName}</span>
                </div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:"1px",marginBottom:8}}>{h.name}</div>
                <div style={{fontSize:12,color:"rgba(245,240,232,0.4)",lineHeight:1.6}}>{h.description.substring(0, 90)}...</div>
              </Link>
            ))}
          </div>
          <div style={{marginTop:24,textAlign:"center"}}>
            <Link href="/holidays" style={{fontSize:14,fontWeight:700,color:"var(--gold)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>
              View All Holidays →
            </Link>
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jewish-American Culture Hub | JewSA",
  description:
    "Explore Jewish-American culture — history, famous figures, humor, food, and guides to understanding the community. Deep dives for the curious and the tribe alike.",
  openGraph: {
    title: "Jewish-American Culture Hub | JewSA",
    description: "Explore Jewish-American culture — history, famous figures, humor, food, and guides to understanding the community.",
    url: "https://jewsa.com/culture",
  },
};

const CULTURE_ARTICLES = [
  {
    slug: "history-of-jews-in-america",
    title: "The History of Jews in America",
    desc: "From the first Jewish settlers in New Amsterdam in 1654 to the present day — immigration waves, contributions, struggles, and the remarkable arc of Jewish-American history.",
    readTime: 10,
    category: "History",
  },
  {
    slug: "famous-jewish-americans",
    title: "Famous Jewish Americans",
    desc: "Einstein, Ruth Bader Ginsburg, Steven Spielberg, Jerry Seinfeld, Sandy Koufax — the Jewish Americans who shaped science, law, art, comedy, and sports.",
    readTime: 8,
    category: "Culture",
  },
  {
    slug: "jewish-humor-explained",
    title: "Jewish Humor Explained",
    desc: "Why is Jewish comedy unique? What makes it work? The self-deprecation tradition, the Borscht Belt, and the comedians who turned suffering into an art form.",
    readTime: 7,
    category: "Humor",
  },
  {
    slug: "guide-to-your-jewish-neighbor",
    title: "A Non-Jewish Person's Guide to Your Jewish Neighbor",
    desc: "What to know, what to ask, and what not to say. A friendly, honest guide to understanding Jewish culture, traditions, and community from the outside.",
    readTime: 8,
    category: "Guide",
  },
  {
    slug: "jewish-food-in-america",
    title: "Jewish Food in America",
    desc: "Bagels, deli culture, challah, matzo ball soup — how Jewish food became American food, and why the best Jewish cooking carries the weight of an entire civilization.",
    readTime: 7,
    category: "Food",
  },
];

export default function CulturePage() {
  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        .articles-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;}
        .article-card{background:rgba(255,255,255,0.03);border:1px solid rgba(201,168,76,0.15);padding:28px;transition:border-color 0.2s,transform 0.2s;text-decoration:none;display:block;color:var(--white);}
        .article-card:hover{border-color:var(--gold);transform:translateY(-2px);}
        @media(max-width:600px){.articles-grid{grid-template-columns:1fr;}}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
          <Link href="/holidays" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Holidays</Link>
          <Link href="/gifts" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Gifts</Link>
          <Link href="/culture" style={{fontSize:13,fontWeight:700,color:"var(--gold)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Culture</Link>
          <Link href="/daily-verse" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Daily Verse</Link>
          <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"10px 20px",textDecoration:"none"}}>Shop</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{padding:"16px max(24px,5vw)",background:"rgba(201,168,76,0.05)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",fontSize:13,color:"rgba(245,240,232,0.4)"}}>
          <Link href="/" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Home</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <span style={{color:"var(--gold)"}}>Culture</span>
        </div>
      </div>

      {/* HEADER */}
      <section style={{padding:"72px max(24px,5vw) 56px",background:"var(--navy)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
          <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:12,textTransform:"uppercase"}}>Deep Dives</div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(40px,6vw,80px)",letterSpacing:"-1px",lineHeight:0.95,marginBottom:20}}>
            Jewish-American Culture
          </h1>
          <p style={{fontSize:16,color:"rgba(245,240,232,0.55)",maxWidth:600,margin:"0 auto",lineHeight:1.8}}>
            History. Humor. Food. Famous figures. Real explanations for curious people. Whether you are in the tribe or just tribe-adjacent, this is your starting point.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section style={{padding:"0 max(24px,5vw) 80px",background:"var(--navy)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="articles-grid">
            {CULTURE_ARTICLES.map((article) => (
              <Link key={article.slug} href={`/culture/${article.slug}`} className="article-card">
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
                  <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,background:"rgba(201,168,76,0.1)",padding:"4px 10px"}}>
                    {article.category}
                  </div>
                  <div style={{fontSize:11,color:"rgba(245,240,232,0.3)",letterSpacing:"1px"}}>
                    {article.readTime} min read
                  </div>
                </div>
                <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:"1px",marginBottom:12,lineHeight:1.05}}>
                  {article.title}
                </h2>
                <p style={{fontSize:13,color:"rgba(245,240,232,0.55)",lineHeight:1.7,marginBottom:20}}>
                  {article.desc}
                </p>
                <div style={{fontSize:13,fontWeight:700,color:"var(--gold)",letterSpacing:"1px",textTransform:"uppercase"}}>
                  Read More →
                </div>
              </Link>
            ))}
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

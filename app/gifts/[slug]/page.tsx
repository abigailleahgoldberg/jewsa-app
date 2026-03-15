import type { Metadata } from "next";
import Link from "next/link";
import { getAllGiftGuides, getGiftGuideBySlug } from "../../data/gift-guides";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllGiftGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGiftGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.occasion} Gift Guide | JewSA`,
    description: guide.description,
    openGraph: {
      title: `${guide.occasion} Gift Guide | JewSA`,
      description: guide.description,
      url: `https://jewsa.com/gifts/${slug}`,
    },
  };
}

export default async function GiftGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGiftGuideBySlug(slug);
  if (!guide) notFound();

  const allGuides = getAllGiftGuides();
  const related = allGuides.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        .products-grid{display:grid;grid-template-columns:1fr;gap:20px;}
        .related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        @media(max-width:700px){.related-grid{grid-template-columns:1fr;}}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
          <Link href="/holidays" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Holidays</Link>
          <Link href="/gifts" style={{fontSize:13,fontWeight:700,color:"var(--gold)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Gifts</Link>
          <Link href="/culture" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Culture</Link>
          <Link href="/daily-verse" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Daily Verse</Link>
          <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"10px 20px",textDecoration:"none"}}>Shop</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{padding:"16px max(24px,5vw)",background:"rgba(201,168,76,0.05)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto",fontSize:13,color:"rgba(245,240,232,0.4)"}}>
          <Link href="/" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Home</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <Link href="/gifts" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Gift Guides</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <span style={{color:"var(--gold)"}}>{guide.occasion}</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{padding:"72px max(24px,5vw) 48px",background:"var(--navy)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,marginBottom:16}}>Gift Guide</div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(48px,7vw,88px)",letterSpacing:"-1px",lineHeight:0.9,marginBottom:20}}>
            {guide.occasion}
          </h1>
          <p style={{fontSize:17,color:"rgba(245,240,232,0.65)",lineHeight:1.85,maxWidth:680}}>
            {guide.description}
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{padding:"56px max(24px,5vw)",background:"var(--navy)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"1px",marginBottom:32}}>
            {guide.products.length} Gift Suggestions
          </h2>
          <div className="products-grid">
            {guide.products.map((product, i) => (
              <div key={i} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.15)",padding:28}}>
                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:16,marginBottom:16,flexWrap:"wrap"}}>
                  <div>
                    <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,marginBottom:8}}>
                      Option {i + 1}
                    </div>
                    <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:26,letterSpacing:"1px",color:"var(--white)"}}>
                      {product.name}
                    </h3>
                  </div>
                  <div style={{background:"rgba(201,168,76,0.12)",border:"1px solid rgba(201,168,76,0.2)",padding:"8px 16px",flexShrink:0}}>
                    <span style={{fontSize:14,fontWeight:900,color:"var(--gold)"}}>{product.priceRange}</span>
                  </div>
                </div>
                <p style={{fontSize:15,color:"rgba(245,240,232,0.65)",lineHeight:1.75,marginBottom:20}}>
                  {product.why}
                </p>
                <Link href={product.link} style={{display:"inline-block",background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"12px 24px",textDecoration:"none"}}>
                  Shop Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{padding:"56px max(24px,5vw) 80px",background:"#060F1C"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--white)",letterSpacing:"1px",marginBottom:24}}>More Gift Guides</h2>
          <div className="related-grid">
            {related.map((g) => (
              <Link key={g.slug} href={`/gifts/${g.slug}`} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.12)",padding:20,textDecoration:"none",color:"var(--white)",display:"block",transition:"border-color 0.2s"}}>
                <div style={{fontSize:11,color:"var(--gold)",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,marginBottom:8}}>Gift Guide</div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:"1px",marginBottom:8}}>{g.occasion}</div>
                <div style={{fontSize:12,color:"rgba(245,240,232,0.4)",lineHeight:1.6}}>{g.description.substring(0, 80)}...</div>
              </Link>
            ))}
          </div>
          <div style={{marginTop:24,textAlign:"center"}}>
            <Link href="/gifts" style={{fontSize:14,fontWeight:700,color:"var(--gold)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>
              All Gift Guides →
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

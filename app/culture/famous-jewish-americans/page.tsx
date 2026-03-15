import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Famous Jewish Americans | JewSA Culture",
  description:
    "Einstein, Ruth Bader Ginsburg, Steven Spielberg, Jerry Seinfeld, Sandy Koufax — the Jewish Americans who shaped science, law, art, comedy, and sports.",
  openGraph: {
    title: "Famous Jewish Americans | JewSA",
    description: "The Jewish Americans who shaped science, law, art, comedy, and sports.",
    url: "https://jewsa.com/culture/famous-jewish-americans",
  },
};

const PROFILES = [
  { name: "Albert Einstein", years: "1879-1955", field: "Physics", desc: "Born in Germany, Einstein immigrated to the United States in 1933, fleeing Nazi persecution. He had already won the Nobel Prize in Physics and developed the theory of relativity. At Princeton, he continued work that would shape quantum mechanics and cosmology. He was also a committed Zionist and pacifist, writing and speaking on political issues with the same clarity he brought to physics. When Germany burned his books, he responded: 'I used to be a German. Now I am a man.'" },
  { name: "Ruth Bader Ginsburg", years: "1933-2020", field: "Law", desc: "Born in Brooklyn to immigrant parents, Ginsburg became one of the most consequential legal figures in American history. She graduated first in her class at Columbia Law School in 1959 — at a time when major law firms refused to hire women or Jews. She built her legal career arguing gender discrimination cases before the Supreme Court, winning five of six, before being appointed to the Court in 1993. Her dissents became rallying points for a generation. She became RBG: a cultural phenomenon, a symbol of persistence, and a reminder that the law is a living thing." },
  { name: "Steven Spielberg", years: "1946-present", field: "Film", desc: "The most commercially successful filmmaker in history grew up in a Jewish family in Phoenix and Cincinnati, where he experienced antisemitism as a child. He went on to direct 'Jaws,' 'E.T.,' 'Raiders of the Lost Ark,' 'Schindler's List,' and 'Saving Private Ryan,' among dozens of others. 'Schindler's List' — his film about a German industrialist who saved over a thousand Jews during the Holocaust — won seven Academy Awards and is considered one of the greatest films ever made. He used its profits to found the USC Shoah Foundation, which has recorded more than 55,000 Holocaust survivor testimonies." },
  { name: "Jerry Seinfeld", years: "1954-present", field: "Comedy", desc: "Raised in a Jewish household on Long Island, Seinfeld built a comedy career on meticulous observation and precise construction. 'Seinfeld,' the sitcom he co-created with Larry David, ran from 1989 to 1998 and remains one of the most-watched and analyzed television series ever made. He has described his comedy as a form of Judaism — built on honesty, self-examination, and the refusal to look away from inconvenient truths. His craft is inseparable from his upbringing." },
  { name: "Sandy Koufax", years: "1935-present", field: "Baseball", desc: "The Brooklyn-born left-hander for the Los Angeles Dodgers is widely considered the greatest pitcher in baseball history. Between 1963 and 1966, he was effectively unhittable: four no-hitters, three Cy Young Awards, the 1965 World Series MVP. He is also remembered for refusing to pitch Game 1 of the 1965 World Series because it fell on Yom Kippur — a decision that generated enormous controversy and became a defining moment in Jewish-American sports history. He was not particularly observant, but he understood what refusing would mean to Jewish Americans watching." },
  { name: "Bob Dylan", years: "1941-present", field: "Music", desc: "Born Robert Zimmerman in Duluth, Minnesota, to Jewish immigrant parents, Dylan invented himself as a folk poet and became the voice of the American counterculture. 'Blowin' in the Wind,' 'The Times They Are A-Changin',' 'Like a Rolling Stone' — his catalog redefined what popular music could say and how it could say it. He won the Nobel Prize in Literature in 2016, the first musician to receive it. His Jewishness has informed his work in ways that are sometimes explicit and often subtle, running beneath the surface of an astonishingly deep body of work." },
  { name: "Barbara Streisand", years: "1942-present", field: "Entertainment", desc: "Born in Brooklyn to a Jewish family, Streisand became one of the most successful entertainers in American history — the only artist to have achieved number-one albums in six consecutive decades. An unapologetic New York Jew in a business that rewarded assimilation, she maintained her identity and her accent and became a symbol of uncompromising excellence. She has sold more than 150 million records and won Oscars, Emmys, Grammys, and Tony Awards." },
  { name: "Jonas Salk", years: "1914-1995", field: "Medicine", desc: "The son of Ashkenazi Jewish immigrants, Salk grew up in the Bronx and became one of the most celebrated scientists of the twentieth century when he developed the first effective polio vaccine in 1955. Millions of children had been paralyzed by the disease. His vaccine effectively ended the epidemic. In a gesture that defined his character, Salk refused to patent the vaccine, saying it belonged to 'the people.' He estimated the patent would have been worth seven billion dollars. He gave it away." },
];

const RELATED = [
  { slug: "history-of-jews-in-america", title: "The History of Jews in America", category: "History" },
  { slug: "jewish-humor-explained", title: "Jewish Humor Explained", category: "Humor" },
  { slug: "guide-to-your-jewish-neighbor", title: "A Guide to Your Jewish Neighbor", category: "Guide" },
];

export default function FamousJewishAmericansPage() {
  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        .related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        @media(max-width:700px){.related-grid{grid-template-columns:1fr;}}
      `}</style>

      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
          <Link href="/holidays" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Holidays</Link>
          <Link href="/culture" style={{fontSize:13,fontWeight:700,color:"var(--gold)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Culture</Link>
          <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"10px 20px",textDecoration:"none"}}>Shop</Link>
        </div>
      </nav>

      <div style={{padding:"16px max(24px,5vw)",background:"rgba(201,168,76,0.05)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",fontSize:13,color:"rgba(245,240,232,0.4)"}}>
          <Link href="/" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Home</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <Link href="/culture" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Culture</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <span style={{color:"var(--gold)"}}>Famous Jewish Americans</span>
        </div>
      </div>

      <section style={{padding:"72px max(24px,5vw) 48px",background:"var(--navy)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,background:"rgba(201,168,76,0.1)",padding:"4px 10px"}}>Culture</div>
            <div style={{fontSize:12,color:"rgba(245,240,232,0.3)"}}>8 min read</div>
          </div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(40px,6vw,80px)",letterSpacing:"-1px",lineHeight:0.9,marginBottom:20}}>
            Famous Jewish Americans
          </h1>
          <p style={{fontSize:17,color:"rgba(245,240,232,0.65)",lineHeight:1.85,maxWidth:700}}>
            Jewish Americans make up about 2 percent of the population and account for a wildly disproportionate share of the country&apos;s most consequential figures. Here are eight of them.
          </p>
        </div>
      </section>

      <section style={{padding:"56px max(24px,5vw)",background:"var(--navy)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{display:"grid",gap:0,border:"1px solid rgba(201,168,76,0.1)"}}>
            {PROFILES.map((person, i) => (
              <div key={person.name} style={{padding:"36px 32px",borderBottom: i < PROFILES.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none",background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)"}}>
                <div style={{display:"flex",alignItems:"flex-start",gap:24,flexWrap:"wrap"}}>
                  <div style={{flexShrink:0,minWidth:180}}>
                    <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:"var(--gold)",letterSpacing:"1px",lineHeight:1,marginBottom:4}}>{person.name}</div>
                    <div style={{fontSize:11,color:"rgba(245,240,232,0.3)",letterSpacing:"1px",marginBottom:6}}>{person.years}</div>
                    <div style={{fontSize:10,fontWeight:900,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(201,168,76,0.6)",background:"rgba(201,168,76,0.08)",padding:"3px 8px",display:"inline-block"}}>{person.field}</div>
                  </div>
                  <p style={{fontSize:15,color:"rgba(245,240,232,0.65)",lineHeight:1.85,flex:1}}>{person.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{marginTop:48,padding:"32px",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.15)"}}>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:"var(--gold)",letterSpacing:"1px",marginBottom:16}}>And Many More</h2>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.65)",lineHeight:1.85}}>
              This list barely scratches the surface. Irving Berlin wrote &quot;God Bless America.&quot; Leonard Bernstein composed &quot;West Side Story.&quot; Mel Brooks gave us comedy as defense against absurdity. Joseph Heller wrote &quot;Catch-22.&quot; Mark Zuckerberg built Facebook in a Harvard dorm room. Larry Ellison built Oracle. Michael Bloomberg built a media empire and governed New York City. Levi Strauss dressed the American West. The story runs long, and it keeps going.
            </p>
          </div>
        </div>
      </section>

      <section style={{padding:"56px max(24px,5vw) 80px",background:"#060F1C"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--white)",letterSpacing:"1px",marginBottom:24}}>More Culture</h2>
          <div className="related-grid">
            {RELATED.map((a) => (
              <Link key={a.slug} href={`/culture/${a.slug}`} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.12)",padding:20,textDecoration:"none",color:"var(--white)",display:"block"}}>
                <div style={{fontSize:11,color:"var(--gold)",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,marginBottom:8}}>{a.category}</div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,letterSpacing:"1px"}}>{a.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

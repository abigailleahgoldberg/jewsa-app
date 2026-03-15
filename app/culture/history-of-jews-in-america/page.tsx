import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The History of Jews in America | JewSA Culture",
  description:
    "From the first Jewish settlers in New Amsterdam in 1654 to the present — immigration waves, contributions, struggles, and the remarkable arc of Jewish-American history.",
  openGraph: {
    title: "The History of Jews in America | JewSA",
    description: "From 1654 to the present — the complete arc of Jewish-American history.",
    url: "https://jewsa.com/culture/history-of-jews-in-america",
  },
};

const RELATED = [
  { slug: "famous-jewish-americans", title: "Famous Jewish Americans", category: "Culture" },
  { slug: "jewish-humor-explained", title: "Jewish Humor Explained", category: "Humor" },
  { slug: "jewish-food-in-america", title: "Jewish Food in America", category: "Food" },
];

export default function HistoryPage() {
  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        .article-body h2{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:1px;color:var(--gold);margin:40px 0 16px;}
        .article-body p{font-size:15px;color:rgba(245,240,232,0.70);line-height:1.85;margin-bottom:20px;}
        .article-body strong{color:rgba(245,240,232,0.90);font-weight:700;}
        .related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        @media(max-width:700px){.related-grid{grid-template-columns:1fr;}}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
          <Link href="/holidays" style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Holidays</Link>
          <Link href="/culture" style={{fontSize:13,fontWeight:700,color:"var(--gold)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>Culture</Link>
          <Link href="/#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"10px 20px",textDecoration:"none"}}>Shop</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{padding:"16px max(24px,5vw)",background:"rgba(201,168,76,0.05)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto",fontSize:13,color:"rgba(245,240,232,0.4)"}}>
          <Link href="/" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Home</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <Link href="/culture" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Culture</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <span style={{color:"var(--gold)"}}>History of Jews in America</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{padding:"72px max(24px,5vw) 48px",background:"var(--navy)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,background:"rgba(201,168,76,0.1)",padding:"4px 10px"}}>History</div>
            <div style={{fontSize:12,color:"rgba(245,240,232,0.3)"}}>10 min read</div>
          </div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(40px,6vw,80px)",letterSpacing:"-1px",lineHeight:0.9,marginBottom:20}}>
            The History of Jews in America
          </h1>
          <p style={{fontSize:18,color:"rgba(245,240,232,0.65)",lineHeight:1.8,maxWidth:700}}>
            From 23 Jewish refugees who arrived in New Amsterdam in 1654 to a community of nearly seven million today — the story of Jews in America is one of the great chapters in both Jewish and American history.
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <section style={{padding:"56px max(24px,5vw)",background:"var(--navy)"}}>
        <div style={{maxWidth:860,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 260px",gap:48,alignItems:"start"}}>
          <div className="article-body">

            <h2>The First Jews in America: 1654</h2>
            <p>In September 1654, a small ship called the Sainte Catherine arrived in New Amsterdam — the Dutch colony that would become New York — carrying 23 Jewish refugees. They had fled the Inquisition in Brazil after the Portuguese reclaimed the colony from the Dutch. The Dutch governor, Peter Stuyvesant, tried to expel them. The Jewish community back in Amsterdam, shareholders in the Dutch West India Company, pressured the company to grant them permission to stay.</p>
            <p>They stayed. And in staying, they planted the first permanent Jewish presence in what would become the United States of America. These 23 people were the beginning of everything that followed.</p>

            <h2>Colonial Era: Quiet Persistence</h2>
            <p>Through the colonial period, Jewish communities remained small — a few hundred families in port cities like Newport, Savannah, Philadelphia, and Charleston. They built synagogues, established businesses, and navigated the complex terrain of a society that offered more tolerance than Europe but was still fundamentally Protestant in character.</p>
            <p><strong>Touro Synagogue</strong> in Newport, Rhode Island, completed in 1763, stands today as the oldest surviving Jewish house of worship in North America. When George Washington visited Newport in 1790, the congregation's leader Moses Seixas wrote him a letter expressing hope for a nation where no citizen would be persecuted for their religious beliefs. Washington's reply became a foundational statement of American religious freedom: "To bigotry no sanction, to persecution no assistance."</p>
            <p>Jewish Americans fought in the Revolutionary War on both sides, though predominantly with the Patriots. Haym Salomon, a Polish Jewish immigrant, became one of the key financiers of the Revolution, raising critical funds for Washington's army. He died nearly broke, having contributed an estimated two million dollars to the cause.</p>

            <h2>The German Wave: 1820-1880</h2>
            <p>The first major wave of Jewish immigration came from German-speaking Central Europe, driven by economic hardship, political instability, and the failed revolutions of 1848. Between 1820 and 1880, the Jewish population of the United States grew from roughly 3,000 to approximately 250,000.</p>
            <p>German Jewish immigrants spread across the country, many becoming peddlers who eventually built department stores — Macy's, Bloomingdale's, Neiman Marcus. They founded Reform Judaism in America as a way to adapt Jewish practice to modern American life. They established the Hebrew Union College in Cincinnati in 1875 to train American rabbis. They built the institutional infrastructure of a permanent American Jewish community.</p>
            <p>This wave produced figures like Levi Strauss, who moved to San Francisco and made the blue jeans that clothed the West. It produced the Seligman banking family, who financed Civil War bonds for the Union. It produced Emma Lazarus, whose sonnet "The New Colossus" — "Give me your tired, your poor, your huddled masses yearning to breathe free" — became inscribed on the Statue of Liberty and defined America's relationship with immigration for generations.</p>

            <h2>The Great Wave: 1880-1924</h2>
            <p>Everything changed with the pogroms. Beginning in 1881, anti-Jewish violence swept through the Russian Empire, triggering the largest migration in Jewish history. Between 1880 and 1924, more than two million Jews arrived in America from Eastern Europe — from Russia, Poland, Romania, and the Austro-Hungarian Empire. They came speaking Yiddish, carrying virtually nothing, and determined to survive.</p>
            <p>Most settled on the Lower East Side of Manhattan, the most densely populated neighborhood in American history at its peak. They worked in the garment industry, in pushcart markets, in the crowded tenements that packed families into two and three rooms. The conditions were brutal, and the Jewish community organized to improve them. Jewish labor leaders built the major garment worker unions. The Triangle Shirtwaist Factory fire of 1911, which killed 146 workers — most of them young Jewish and Italian immigrant women — galvanized the labor movement and led directly to workplace safety reforms that protect American workers to this day.</p>
            <p>This wave also transformed American culture. The children of these immigrants became doctors, lawyers, professors, writers, and comedians. They built the Hollywood film industry. They created Tin Pan Alley and the Broadway musical. They wrote the literature that defined the American immigrant experience. Irving Berlin, born Israel Beilin in Russia, wrote "God Bless America." He also wrote "White Christmas." Both became anthems of American identity composed by a man who arrived in this country as a child with nothing.</p>

            <h2>The Door Closes: 1924-1945</h2>
            <p>The Immigration Act of 1924 imposed strict national quotas that effectively ended mass Jewish immigration. This was no accident — antisemitic sentiment drove the legislation, and its consequences proved catastrophic. When Jews began fleeing Nazi Germany in the 1930s, the quotas prevented most of them from entering the United States. The State Department, under pressure to enforce the quotas strictly, turned away ship after ship of Jewish refugees.</p>
            <p>The most infamous case was the MS St. Louis in 1939, carrying 937 Jewish refugees from Germany. The United States refused to grant them entry. Cuba, which had initially promised to accept them, also turned them away. The ship returned to Europe. A quarter of its passengers died in the Holocaust.</p>
            <p>American Jews spent the war years lobbying the Roosevelt administration to take more action to save European Jews. Their pleas went largely unheeded. By 1945, six million Jews had been murdered — one third of the entire world Jewish population. Many American Jews lost entire branches of their family trees. The trauma of the Holocaust shaped Jewish-American identity in ways that persist to this day.</p>

            <h2>Postwar America: Acceptance and Achievement</h2>
            <p>The postwar period brought dramatic change. Jewish veterans returned from World War II as American heroes. The GI Bill enabled Jewish men — and some women — to attend universities in large numbers, entering professions that had previously been closed to them. Suburban migration dispersed Jewish communities across the country. New synagogues went up in the suburbs of every major American city.</p>
            <p>Antisemitism did not disappear, but it declined substantially in public life. Universities lifted their Jewish quotas. Major corporations began hiring Jewish executives. The establishment of the State of Israel in 1948 gave American Jews a source of deep pride and a cause to rally around.</p>
            <p>Jewish Americans in this period produced an extraordinary body of work across every field. Jonas Salk developed the polio vaccine. Arthur Miller wrote "Death of a Salesman." Saul Bellow won the Nobel Prize in Literature. Ruth Bader Ginsburg graduated at the top of her class from Columbia Law School and went on to reshape American law. Philip Roth wrote the American-Jewish experience into the canon of world literature. Bob Dylan — born Robert Zimmerman — invented a new form of American folk music and became the voice of a generation.</p>

            <h2>The Contemporary Community</h2>
            <p>Today, the American Jewish community numbers approximately 7.5 million people, comprising about 2.4 percent of the population. They live throughout the country, with major concentrations in New York, Los Angeles, Miami, Chicago, and Boston. The community is diverse in practice — from Orthodox to Reform to secular — and politically active across the spectrum.</p>
            <p>American Jews have achieved remarkable representation in public life relative to their numbers. They hold seats in Congress, sit on the Supreme Court, lead major universities, run Hollywood studios, manage hedge funds, and head some of the country's most important cultural institutions. They remain disproportionately represented in medicine, law, academia, and the arts.</p>
            <p>Antisemitism has not disappeared. It has risen in recent years, driven by extremists on both the far right and the far left. The Pittsburgh synagogue shooting of 2018, the deadliest antisemitic attack in American history, killed eleven people at prayer on a Saturday morning. The Jewish community has responded with determination: to keep its doors open, to continue its traditions, and to insist on its place in American life.</p>

            <h2>What the Story Means</h2>
            <p>The history of Jews in America is an American story. It is the story of people who arrived with nothing and built something extraordinary — not just for themselves but for the country that received them. It is a story of faith, resilience, community, and the capacity to maintain a distinct identity while becoming fully, irreversibly American.</p>
            <p>It is also a story that is still being written. Every generation of Jewish Americans adds its chapter. This one is no different — which is exactly as it should be.</p>

          </div>

          {/* SIDEBAR */}
          <div style={{position:"sticky",top:80}}>
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.15)",padding:24,marginBottom:24}}>
              <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,color:"var(--gold)",letterSpacing:"1px",marginBottom:16}}>Key Dates</h3>
              {[["1654","First Jews arrive in New Amsterdam"],["1790","Washington's letter to Touro Synagogue"],["1820-1880","German Jewish immigration wave"],["1880-1924","Eastern European mass immigration"],["1924","Immigration Act closes the door"],["1945","Holocaust ends; 6 million murdered"],["1948","State of Israel established"],["2018","Pittsburgh synagogue shooting"]].map(([year, event]) => (
                <div key={year} style={{marginBottom:12,paddingBottom:12,borderBottom:"1px solid rgba(201,168,76,0.07)"}}>
                  <div style={{fontSize:13,fontWeight:700,color:"var(--gold)"}}>{year}</div>
                  <div style={{fontSize:12,color:"rgba(245,240,232,0.5)",lineHeight:1.5}}>{event}</div>
                </div>
              ))}
            </div>
            <div style={{background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.25)",padding:24}}>
              <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,marginBottom:12}}>Wear the Heritage</div>
              <p style={{fontSize:13,color:"rgba(245,240,232,0.55)",lineHeight:1.6,marginBottom:16}}>Jewish-American pride merch for the tribe that built America.</p>
              <Link href="/#shop" style={{display:"block",background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:12,letterSpacing:"1.5px",textTransform:"uppercase",padding:"12px 16px",textDecoration:"none",textAlign:"center"}}>Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
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

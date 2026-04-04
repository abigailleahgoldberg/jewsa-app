import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jewish Humor Explained | JewSA Culture",
  description:
    "Why is Jewish comedy unique? The self-deprecation tradition, the Borscht Belt, and the comedians who turned suffering into the highest art form in American entertainment.",
  openGraph: {
    title: "Jewish Humor Explained | JewSA",
    description: "Why Jewish comedy works — and why it changed American culture.",
    url: "https://jewsa.com/culture/jewish-humor-explained",
  },
};

const RELATED = [
  { slug: "famous-jewish-americans", title: "Famous Jewish Americans", category: "culture" },
  { slug: "guide-to-your-jewish-neighbor", title: "A Guide to Your Jewish Neighbor", category: "Guide" },
  { slug: "history-of-jews-in-america", title: "The History of Jews in America", category: "History" },
];

export default function JewishHumorPage() {
  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        .article-body h2{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:1px;color:var(--gold);margin:40px 0 16px;}
        .article-body p{font-size:15px;color:rgba(245,240,232,0.70);line-height:1.85;margin-bottom:20px;}
        .article-body strong{color:rgba(245,240,232,0.90);font-weight:700;}
        .comedian-block{border-left:3px solid var(--gold);padding:16px 20px;margin:24px 0;background:rgba(201,168,76,0.05);}
        .comedian-name{font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--gold);letter-spacing:1px;margin-bottom:4px;}
        .comedian-desc{font-size:14px;color:rgba(245,240,232,0.65);line-height:1.75;}
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
        <div style={{maxWidth:860,margin:"0 auto",fontSize:13,color:"rgba(245,240,232,0.4)"}}>
          <Link href="/" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Home</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <Link href="/culture" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Culture</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <span style={{color:"var(--gold)"}}>Jewish Humor Explained</span>
        </div>
      </div>

      <section style={{padding:"72px max(24px,5vw) 48px",background:"var(--navy)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,background:"rgba(201,168,76,0.1)",padding:"4px 10px"}}>Humor</div>
            <div style={{fontSize:12,color:"rgba(245,240,232,0.3)"}}>7 min read</div>
          </div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(40px,6vw,80px)",letterSpacing:"-1px",lineHeight:0.9,marginBottom:20}}>
            Jewish Humor Explained
          </h1>
          <p style={{fontSize:17,color:"rgba(245,240,232,0.65)",lineHeight:1.85,maxWidth:700}}>
            American comedy is substantially Jewish comedy. Understanding why requires going back a few thousand years — and also to a network of resort hotels in the Catskill Mountains.
          </p>
        </div>
      </section>

      <section style={{padding:"56px max(24px,5vw)",background:"var(--navy)"}}>
        <div style={{maxWidth:860,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 260px",gap:48,alignItems:"start"}}>
          <div className="article-body">

            <h2>Where It Comes From</h2>
            <p>Jewish humor did not emerge from comfort. It emerged from centuries of minority status — from navigating societies that alternately tolerated and expelled Jewish communities, from finding ways to maintain dignity under circumstances designed to deny it. Humor was not entertainment first. It was a coping mechanism, a form of social bonding, and a way of saying: we are still here, and we can still laugh.</p>
            <p>The Yiddish language contributed enormously. Yiddish has words for emotional states that English requires whole sentences to describe. A single Yiddish word can carry irony, warmth, resignation, and affection simultaneously. When Jewish immigrants brought Yiddish to America, they brought a linguistic toolkit for comedy that English simply could not replicate.</p>

            <h2>The Mechanics: Why It Works</h2>
            <p>Jewish humor tends to operate through <strong>inversion</strong> — taking what is expected and reversing it. The classic structure: setup that creates a certain expectation, then a punchline that delivers the opposite. Henny Youngman's "Take my wife — please." Three words that flip from lecture to desperation. The humor lives in the gap between what we expected and what we got.</p>
            <p>Jewish comedy also relies heavily on <strong>self-deprecation</strong>. The comedian becomes the target. This is not accidental — it is strategic. By making yourself the butt of the joke before anyone else can, you take control of the narrative. You signal that you are self-aware enough to laugh at your own situation. This is also a Jewish value: the tradition of self-examination, of honest accounting with your own failures, translated into comedy.</p>
            <p>The third key element is <strong>specificity</strong>. Jewish humor is almost never vague. It is built on precise details — the exact texture of a grandmother's sigh, the particular food at a particular holiday, the specific failure of a specific person. Jerry Seinfeld is the master of this: comedy about nothing is actually comedy about very specific somethings, observed with surgical precision.</p>

            <h2>The Borscht Belt</h2>
            <p>Between the 1920s and 1970s, the Catskill Mountains of New York hosted the largest Jewish resort network in American history. Hotels like Grossinger's and Kutcher's brought Jewish families out of the city for summer vacations — and needed entertainment. They hired comedians. Those comedians developed their craft in front of Jewish audiences who understood every reference, every Yiddish phrase, every cultural in-joke. Then they took that material to the rest of America.</p>
            <p>The Borscht Belt produced: Mel Brooks, Sid Caesar, Jerry Lewis, Carl Reiner, Buddy Hackett, Henny Youngman, Don Rickles, Alan King, and Jackie Mason. The influence of this training ground on American comedy is difficult to overstate. The rhythms, the timing, the willingness to transgress — all of it was refined in those Catskill showrooms.</p>

            <h2>Key Comedians Who Changed Everything</h2>

            <div className="comedian-block">
              <div className="comedian-name">Mel Brooks</div>
              <p className="comedian-desc">Nobody understood the Jewish comedic tradition and its relationship to absurdity better than Mel Brooks. "The Producers" — a Broadway musical about making a musical designed to fail — used the Holocaust as comedy. Outrageous and brilliant. "Blazing Saddles" attacked American racism by making it ridiculous. Brooks has said he uses comedy to defeat Hitler every day. That is both funny and true.</p>
            </div>

            <div className="comedian-block">
              <div className="comedian-name">Woody Allen</div>
              <p className="comedian-desc">Allen created the template for the anxious Jewish intellectual as protagonist. His early stand-up and films made neurosis not just acceptable but aspirational. He understood that the gap between how we present ourselves and how we actually feel is the richest comic territory in human experience. His influence on confessional, self-aware comedy is immeasurable.</p>
            </div>

            <div className="comedian-block">
              <div className="comedian-name">Jerry Seinfeld</div>
              <p className="comedian-desc">Precision. Craft. The relentless pursuit of the exact word. Seinfeld treats comedy as a form of engineering — every syllable placed for maximum effect. "Seinfeld" the show, co-created with Larry David, made nothing into something and in doing so revealed everything. The show is about manners, about social contracts, about what we owe each other. Jewish preoccupations. Made universal.</p>
            </div>

            <div className="comedian-block">
              <div className="comedian-name">Larry David</div>
              <p className="comedian-desc">"Curb Your Enthusiasm" is a document of the Jewish social conscience malfunctioning. Larry David's character knows exactly what the rules are — and breaks them anyway, to catastrophic and hilarious effect. The show works because we recognize the internal debate he is skipping. We feel the Jewish guilt he refuses to feel. That recognition is the joke.</p>
            </div>

            <div className="comedian-block">
              <div className="comedian-name">Sarah Silverman</div>
              <p className="comedian-desc">Silverman represents the next evolution: confrontational, unapologetic, willing to say the most offensive possible thing with a smile that makes you wonder whether you should laugh. She weaponizes Jewish identity as a platform from which to attack bigotry by performing it in ways that reveal its absurdity. Sharp, brave, and very funny.</p>
            </div>

            <h2>Why It Travels</h2>
            <p>Jewish humor became American humor because the themes it addresses — anxiety, outsider status, the gap between aspiration and reality, the absurdity of social rules — are universally human. The specific details are Jewish. The emotional truth is everyone's.</p>
            <p>The self-deprecation tradition, in particular, gave American comedy a new model. Before Jewish comedians dominated American stages and screens, comedy heroes were confident. They won. Jewish humor said: the funniest thing about being human is how often we lose, and how hard we try anyway. That turned out to be exactly what audiences wanted to hear.</p>
            <p>The joke is ancient. The format is contemporary. And the tradition continues — in every stand-up who dares to tell the truth, in every sitcom that takes its characters seriously while making them ridiculous, in every comedian who makes you laugh about something that is not, strictly speaking, funny at all.</p>
            <p>That is Jewish humor. That is American humor. In this case, they are the same thing.</p>

          </div>

          <div style={{position:"sticky",top:80}}>
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.15)",padding:24,marginBottom:24}}>
              <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,color:"var(--gold)",letterSpacing:"1px",marginBottom:16}}>The Tradition</h3>
              {["Comedy as survival strategy","Self-deprecation as power","Specificity over vagueness","Inversion as structure","The Borscht Belt school","Truth through absurdity"].map((item) => (
                <div key={item} style={{fontSize:13,color:"rgba(245,240,232,0.55)",padding:"8px 0",borderBottom:"1px solid rgba(201,168,76,0.07)",display:"flex",alignItems:"center",gap:8}}>
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none"><rect width="6" height="6" fill="var(--gold)" opacity="0.5"/></svg>
                  {item}
                </div>
              ))}
            </div>
            <div style={{background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.25)",padding:24}}>
              <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,marginBottom:12}}>Wear The Punchline</div>
              <p style={{fontSize:13,color:"rgba(245,240,232,0.55)",lineHeight:1.6,marginBottom:16}}>Jewish-American pride merch. Where pride meets punchlines.</p>
              <Link href="/#shop" style={{display:"block",background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:12,letterSpacing:"1.5px",textTransform:"uppercase",padding:"12px 16px",textDecoration:"none",textAlign:"center"}}>Shop Now</Link>
            </div>
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Non-Jewish Person's Guide to Your Jewish Neighbor | JewSA Culture",
  description:
    "What to know, what to ask, and what not to say. A friendly and honest guide to understanding Jewish culture, traditions, and community from the outside.",
  openGraph: {
    title: "A Non-Jewish Person's Guide to Your Jewish Neighbor | JewSA",
    description: "What to know, what to ask, and what not to say about Jewish culture.",
    url: "https://jewsa.com/culture/guide-to-your-jewish-neighbor",
  },
};

const RELATED = [
  { slug: "jewish-humor-explained", title: "Jewish Humor Explained", category: "Humor" },
  { slug: "history-of-jews-in-america", title: "The History of Jews in America", category: "History" },
  { slug: "jewish-food-in-america", title: "Jewish Food in America", category: "Food" },
];

const QUESTIONS = [
  {
    q: "Are all Jews religious?",
    a: "No. Judaism is both a religion and an ethnic/cultural identity. Many Jewish people do not practice religion at all — they identify as culturally or ethnically Jewish. Others are deeply observant. Most are somewhere on a spectrum that would confuse anyone looking for a simple answer. Jewish identity is layered in ways that have developed over thousands of years. Do not assume observance based on appearance, last name, or whether someone eats a bacon cheeseburger.",
  },
  {
    q: "Is it okay to ask someone if they're Jewish?",
    a: "Yes, with normal social discretion. The way you would ask anyone about their background — with genuine curiosity and not as a prelude to a stereotype. 'Are you Jewish?' is a reasonable question in many contexts. 'You seem Jewish' is not a compliment and not something you should say. One is a question. The other is an assumption delivered as an observation, and no one asked.",
  },
  {
    q: "What should I say at Jewish holidays?",
    a: "Happy [holiday name] is always correct. 'L'Shanah Tovah' (Happy New Year) for Rosh Hashanah. 'Chag Sameach' (Happy Holiday) works for most holidays. 'G'mar Chatimah Tovah' for Yom Kippur if you want to show you did the reading. 'Happy Jewish Christmas' for Hanukkah is not correct. See our holiday guides for the specific greetings.",
  },
  {
    q: "Can I come to a Shabbat dinner if I'm not Jewish?",
    a: "Almost certainly yes. Jewish law actively encourages hospitality, and most Jewish families are happy to share Shabbat with non-Jewish guests. If you are invited, show up. Dress nicely but not formally. Do not bring non-kosher food without asking first. Participate in the rituals even if you do not know them — it is fine to say 'I am not sure what I am supposed to do.' Your host will guide you. Bring wine.",
  },
  {
    q: "What's with the food restrictions?",
    a: "Kashrut — the system of Jewish dietary laws — varies widely in observance. Orthodox Jews follow a strict set of rules: no pork or shellfish, meat and dairy cannot be mixed, animals must be slaughtered in a specific way, separate dishes for meat and dairy. Conservative Jews may observe some but not all of these. Reform and secular Jews often do not observe kashrut at all. If you are inviting Jewish friends to eat, asking 'Do you keep kosher?' is a perfectly normal question and they will not be offended.",
  },
  {
    q: "Is it offensive to make Jewish jokes?",
    a: "Context matters enormously. Jewish people make Jewish jokes all the time — it is a cornerstone of Jewish culture. When non-Jews make Jewish jokes, the line is between affectionate familiarity and ignorant stereotype. A joke that requires understanding Jewish culture to land is different from a joke that relies on a negative stereotype. If you are not sure where your joke falls, don't tell it. The person laughing least in the room is usually giving you useful feedback.",
  },
  {
    q: "What is antisemitism and how do I recognize it?",
    a: "Antisemitism is prejudice against, hatred of, or discrimination against Jewish people. It takes many forms: outright hostility and violence, conspiracy theories about Jewish power or money, accusations that Jewish people have dual loyalty to Israel over their home country, Nazi symbols and rhetoric, blaming Jewish people collectively for actions of the Israeli government, and social exclusion. It comes from the political far right and, increasingly, from the far left. If you see it — call it what it is.",
  },
  {
    q: "What is Zionism?",
    a: "Zionism is the political movement that supported the establishment of a Jewish state. Most Jewish people are Zionists in the basic sense that they support the right of Israel to exist as a Jewish state. There is enormous diversity of opinion within the Jewish community about Israeli government policies, the Israeli-Palestinian conflict, and how to achieve peace. Equating Zionism with racism, or treating support for Israel's existence as identical to support for any particular policy, is factually incorrect and perceived by many Jews as antisemitic. This is a complex topic that deserves more nuance than most public discussions give it.",
  },
];

export default function GuideToJewishNeighborPage() {
  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        .related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        @media(max-width:700px){.related-grid{grid-template-columns:1fr;} .q-grid{grid-template-columns:1fr!important;}}
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
          <span style={{color:"var(--gold)"}}>Guide to Your Jewish Neighbor</span>
        </div>
      </div>

      <section style={{padding:"72px max(24px,5vw) 48px",background:"var(--navy)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,background:"rgba(201,168,76,0.1)",padding:"4px 10px"}}>Guide</div>
            <div style={{fontSize:12,color:"rgba(245,240,232,0.3)"}}>8 min read</div>
          </div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(36px,5vw,72px)",letterSpacing:"-1px",lineHeight:0.9,marginBottom:20}}>
            A Non-Jewish Person&apos;s Guide to Your Jewish Neighbor
          </h1>
          <p style={{fontSize:17,color:"rgba(245,240,232,0.65)",lineHeight:1.85,maxWidth:700}}>
            Friendly, honest, and designed to prevent the specific kind of awkwardness that happens when genuine curiosity runs into knowledge gaps. This guide will help you ask better questions and say the right things.
          </p>
        </div>
      </section>

      <section style={{padding:"56px max(24px,5vw)",background:"var(--navy)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{marginBottom:40,padding:"24px 28px",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.15)",borderLeft:"4px solid var(--gold)"}}>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.75)",lineHeight:1.85}}>
              <strong>Before we begin:</strong> Jewish people are not a monolith. The Jewish community contains multitudes — Orthodox and secular, Ashkenazi and Sephardi, Israeli-American and fifth-generation American, politically conservative and progressive. Anything that starts with &quot;All Jewish people...&quot; is almost certainly wrong. What follows are generalizations that hold for many but not all. Apply accordingly.
            </p>
          </div>

          <div style={{border:"1px solid rgba(201,168,76,0.1)"}}>
            {QUESTIONS.map((item, i) => (
              <div key={i} style={{padding:"32px 28px",borderBottom: i < QUESTIONS.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none",background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)"}}>
                <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:24,color:"var(--gold)",letterSpacing:"1px",marginBottom:14}}>
                  {item.q}
                </h2>
                <p style={{fontSize:15,color:"rgba(245,240,232,0.68)",lineHeight:1.85}}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div style={{marginTop:48,padding:"32px 28px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.15)"}}>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:"var(--gold)",letterSpacing:"1px",marginBottom:16}}>The Short Version</h2>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.68)",lineHeight:1.85,marginBottom:16}}>
              Be curious. Ask questions when you actually want to know the answer. Do not make assumptions based on appearance, name, or anything you saw in a movie. Antisemitism is real and you will encounter it — name it when you do. If you are invited to Shabbat, go. If someone invites you to a holiday, ask what you can bring. Show up. That is basically the whole guide.
            </p>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.68)",lineHeight:1.85}}>
              Jewish-American culture is one of the richest, most layered cultures in the history of this country. It has produced literature, music, comedy, science, law, and a genuinely extraordinary amount of good food. The people who carry it forward are worth knowing. Ask the questions. Eat the food. Bring the wine.
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

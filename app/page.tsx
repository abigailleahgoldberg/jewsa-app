"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "../lib/cart-context";


const NAVY = "var(--navy)";
const GOLD = "var(--gold)";

const TICKER = "WHERE PRIDE MEETS PUNCHLINES  •  JEWISH AMERICAN SINCE FOREVER  •  MESHUGGENEH MERCH  •  MAZEL TOV, YOU FOUND US  •  BUILT IN AMERICA, BLESSED IN BROOKLYN  •  OY VEY, THESE DEALS  •  ";

const PUNCHLINES = [
  { main: "Where Pride", accent: "Meets Punchlines.", sub: "Gear for the tribe that built America — and never stopped being funny about it." },
  { main: "We put the 'merch'", accent: "in Merchant of Venice.", sub: "Shakespeare would've bought a tee. We have proof. (We don't have proof.)" },
  { main: "Mazel tov —", accent: "you're about to look amazing.", sub: "Your bubbe will kvell. Your rabbi's reaction may vary." },
  { main: "Jewish-American.", accent: "Est. a very long time ago.", sub: "The merch is new though. The chutzpah is ancient." },
  { main: "We schlepped all the way here", accent: "to sell you a hat.", sub: "Worth it. Totally worth it." },
];

const PRODUCTS = [
  { id:"tee", name:"JewSA Basic Tee", price:25, badge:"Bestseller", desc:"Not your bubbe's basic tee. Stars, stripes, and all the chutzpah. Available S-4XL.", img:"https://files.cdn.printful.com/files/b4e/b4ebbc30701e79902092467a74f74124_preview.png", variantId: "default" },
  { id:"hat", name:"Old School Bucket Hat", price:25, badge:"Fan Fave", desc:"Keep your keppah cool. Available in Black, Navy, and Khaki. S/M and L/XL.", img:"https://files.cdn.printful.com/files/3f4/3f41dd5bee9414a4c43fcefc2a63a429_preview.png", variantId: "default" },
];

const GLOSSARY = [
  { word:"Chutzpah", pronounce:"KHOOT-spah", def:"Audacity. Nerve. The confidence to do the thing everyone else is too polite to do. Not always a compliment. Always a compliment when we say it." },
  { word:"Kvell", pronounce:"KVELL", def:"To burst with pride over someone else's achievement. What your parents do at every graduation, recital, and dentist appointment." },
  { word:"Schmuck", pronounce:"SHMUK", def:"A foolish or contemptible person. Usually said with warmth. Often said about yourself. Occasionally said about a driver who cut you off." },
  { word:"Meshuggeneh", pronounce:"meh-SHUG-uh-neh", def:"Crazy. Nonsensical. The energy required to start a Jewish-American merch brand. We wear it proudly." },
  { word:"Schmaltz", pronounce:"SHMALTZ", def:"Literally: chicken fat. Figuratively: excessive sentimentality. We have zero of either. (We have some of the second.)" },
  { word:"Tikkun Olam", pronounce:"tee-KOON oh-LAHM", def:"Repair the world. The Jewish imperative to leave things better than you found them. It is why this brand exists. Also why the quality is good." },
  { word:"Shpilkes", pronounce:"SHPIL-kez", def:"Anxious energy. Restlessness. The feeling of sitting through a four-hour Passover Seder when you're nine years old." },
  { word:"Mazel Tov", pronounce:"MAH-zel tov", def:"Congratulations. Good luck. The universal Jewish exclamation of joy that works for births, weddings, bar mitzvahs, and finding a parking spot in Brooklyn." },
  { word:"Oy Vey", pronounce:"OY VAY", def:"An expression of dismay, grief, or exasperation. The Swiss Army knife of Jewish emotional vocabulary. One phrase. Infinite applications." },
  { word:"Bubbe", pronounce:"BUB-ee", def:"Grandmother. The woman who fed you before your parents picked you up. Still thinks you look thin. Non-negotiable about this." },
];

const OCCASIONS = [
  { label:"Hanukkah", emoji:"🕎", note:"Eight nights. Eight chances to give something that actually lands." },
  { label:"Bar / Bat Mitzvah", emoji:"📜", note:"They survived Torah portion prep. The least you can do is get them great merch." },
  { label:"Birthdays", emoji:"🎂", note:"For the tribe member who has everything. They don't. Give them this." },
  { label:"Passover", emoji:"🫓", note:"You're already bringing the kugel. Bring the conversation piece too." },
  { label:"Graduation", emoji:"🎓", note:"They studied hard. They deserve something that says so without saying so." },
  { label:"Just Because", emoji:"✡️", note:"No occasion needed. Being Jewish-American is reason enough." },
];

const CULTURE_STATS = [
  { stat:"2%", context:"of the U.S. population", punchline:"Responsible for a disproportionate share of American comedy, literature, science, and deli culture. We checked." },
  { stat:"~3,300", context:"years of recorded Jewish history", punchline:"Most groups don't make it that long. We brought snacks. That helped." },
  { stat:"35%", context:"of U.S. Nobel Prize winners have been Jewish", punchline:"We're not saying it means anything. We're absolutely saying it means something." },
];

const CALENDAR = [
  { date:"Jan 13, 2026", name:"Tu B'Shvat", hebrew:"ט\"ו בשבט", emoji:"🌳", type:"holiday" as const, desc:"The New Year of Trees — a celebration of nature, the land of Israel, and environmental stewardship.", observed:"Eating fruits associated with Israel (dates, figs, pomegranates), planting trees, ecological reflection." },
  { date:"Mar 3–4, 2026", name:"Purim", hebrew:"פורים", emoji:"🎭", type:"holiday" as const, desc:"The Feast of Lots — joyful celebration of Jewish survival over Haman's plot in ancient Persia. One of the most festive days of the Jewish year.", observed:"Reading the Megillah, costumes, mishloach manot (gift baskets), feasting, charitable giving." },
  { date:"Apr 1–9, 2026", name:"Passover (Pesach)", hebrew:"פֶּסַח", emoji:"🫓", type:"holiday" as const, desc:"The Festival of Freedom — commemorating the Exodus from Egypt and liberation from slavery. One of the most observed Jewish holidays worldwide.", observed:"Passover Seder with Haggadah, matzah for 8 days, removing all chametz from the home." },
  { date:"Apr 13, 2026", name:"Yom HaShoah", hebrew:"יום השואה", emoji:"🕯️", type:"memorial" as const, desc:"Holocaust Remembrance Day — honoring the six million Jewish lives taken during the Nazi genocide. A solemn day of memory and the vow: Never Again.", observed:"Ceremonies, sirens in Israel, candle lighting, survivor testimonies, educational programs worldwide." },
  { date:"Apr 21, 2026", name:"Yom HaZikaron", hebrew:"יום הזיכרון", emoji:"🪖", type:"memorial" as const, desc:"Israeli Memorial Day — honoring soldiers and terror victims who fell in defense of the State of Israel, observed the day before Yom HaAtzmaut.", observed:"Sirens, ceremonies, visits to military cemeteries, a national moment of silence." },
  { date:"Apr 22, 2026", name:"Yom HaAtzmaut", hebrew:"יום העצמאות", emoji:"🇮🇱", type:"holiday" as const, desc:"Israeli Independence Day — celebrating the establishment of the State of Israel in 1948. A day of national joy observed by Jewish communities worldwide.", observed:"Fireworks, celebrations, Israeli music, barbecues, outdoor events in Jewish communities globally." },
  { date:"May 5, 2026", name:"Lag B'Omer", hebrew:"ל\"ג בעומר", emoji:"🔥", type:"holiday" as const, desc:"The 33rd day of the Omer — a day of joy within the semi-mourning period between Passover and Shavuot. Associated with bonfires and celebration.", observed:"Bonfires, haircuts, weddings, archery, outdoor celebrations and gatherings." },
  { date:"May 21–23, 2026", name:"Shavuot", hebrew:"שָׁבוּעוֹת", emoji:"📜", type:"holiday" as const, desc:"The Festival of Weeks — celebrating the giving of the Torah at Mount Sinai. Occurs 50 days after Passover and marks the spring harvest.", observed:"All-night Torah study, reading the Book of Ruth, dairy foods, synagogue decorated with flowers." },
  { date:"Aug 3, 2026", name:"Tisha B'Av", hebrew:"תשעה באב", emoji:"💧", type:"memorial" as const, desc:"The saddest day in the Jewish calendar — commemorating the destruction of both Temples in Jerusalem and numerous other Jewish tragedies throughout history.", observed:"25-hour fast, reading Lamentations, sitting on low chairs, no music or joyful activity." },
  { date:"Sep 11–13, 2026", name:"Rosh Hashanah", hebrew:"רֹאשׁ הַשָּׁנָה", emoji:"🍎", type:"holiday" as const, desc:"The Jewish New Year — the beginning of the High Holy Days and Days of Awe. One of the most significant and widely observed Jewish holidays.", observed:"Synagogue services, shofar blowing, apples and honey for a sweet new year, round challah, Tashlich ceremony." },
  { date:"Sep 20–21, 2026", name:"Yom Kippur", hebrew:"יוֹם כִּיפּוּר", emoji:"🕍", type:"holiday" as const, desc:"The Day of Atonement — the holiest day in the Jewish year. A solemn day of fasting, prayer, and seeking forgiveness. God seals the Book of Life.", observed:"25-hour fast, Kol Nidre and Neilah services, white clothing, Yizkor prayer for the deceased." },
  { date:"Sep 25–Oct 2, 2026", name:"Sukkot", hebrew:"סוּכּוֹת", emoji:"🌿", type:"holiday" as const, desc:"The Festival of Tabernacles — a joyful harvest festival commemorating the 40 years of Israelite desert wandering and divine protection.", observed:"Building and dwelling in a sukkah, waving the four species (lulav, etrog, myrtle, willow)." },
  { date:"Oct 2–3, 2026", name:"Shemini Atzeret / Simchat Torah", hebrew:"שְׁמִינִי עֲצֶרֶת", emoji:"📖", type:"holiday" as const, desc:"The Eighth Day of Assembly and Rejoicing of the Torah — completing and restarting the annual Torah reading cycle with joyful celebration.", observed:"Dancing with Torah scrolls, completing Deuteronomy and restarting Genesis, festive synagogue services." },
  { date:"Nov 9, 2026", name:"Kristallnacht Remembrance", hebrew:"ליל הבדולח", emoji:"🕯️", type:"memorial" as const, desc:"Night of Broken Glass — commemorating the 1938 Nazi pogrom in Germany and Austria. Synagogues burned. Jewish homes and businesses destroyed. A turning point toward the Holocaust.", observed:"Memorial ceremonies, candle lighting, educational programs, interfaith vigils worldwide." },
  { date:"Dec 4–12, 2026", name:"Hanukkah", hebrew:"חֲנוּכָּה", emoji:"🕎", type:"holiday" as const, desc:"The Festival of Lights — eight nights celebrating the miracle of the Temple oil and the Maccabean victory. A triumph of light over darkness, observed by Jewish communities worldwide.", observed:"Lighting the Hanukkiah nightly, dreidel, latkes and sufganiyot (jelly donuts), songs, family gatherings." },
];

export default function HomePage() {
  const { addToCart, cartItemCount } = useCart();
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [email, setEmail] = useState("");
  const [emailDone, setEmailDone] = useState(false);
  const [addedToCart, setAddedToCart] = useState<string | null>(null);

  const handleAddToCart = (p: { id: string; name: string; price: number; img: string; variantId: string }) => {
    addToCart({ productId: p.id, name: p.name, price: p.price, image: p.img, variantId: p.variantId });
    setAddedToCart(p.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => { setIdx(i => (i+1)%PUNCHLINES.length); setFade(true); }, 350);
    }, 3600);
    return () => clearInterval(t);
  }, []);

  const pl = PUNCHLINES[idx];

  return (
    <>
      <style>{`
        :root { --navy:#0B1F3A; --gold:#C9A84C; --red:#B22234; --white:#F5F0E8; }
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--navy);color:var(--white);font-family:'DM Sans',system-ui,sans-serif;}
        @keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .jewsa-ticker{animation:ticker 30s linear infinite;white-space:nowrap;display:flex;}
        @keyframes fstar{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(8deg)}}
        @keyframes fadin{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .fadin{animation:fadin 0.35s ease forwards;}
        .fhide{opacity:0;}
        .hero-grid{display:grid;grid-template-columns:1fr 1fr;min-height:88vh;}
        .products-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:820px;margin:0 auto;}
        .occasions-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
        .culture-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:0;}
        .glossary-grid{display:grid;grid-template-columns:1fr 1fr;}
        .faq-grid{display:grid;grid-template-columns:1fr 1fr;}
        .sticky-bar{display:none;position:fixed;bottom:0;left:0;right:0;z-index:200;background:var(--gold);padding:14px 24px;justify-content:space-between;align-items:center;border-top:3px solid var(--navy);}
        .card-h{transition:border-color 0.2s,transform 0.2s;}
        .card-h:hover{border-color:var(--gold)!important;transform:translateY(-2px);}
        .occ-h:hover{background:rgba(201,168,76,0.08)!important;border-color:var(--gold)!important;}
        .glos-h:hover{background:rgba(255,255,255,0.04)!important;}
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr;min-height:auto;}
          .hero-right{display:none!important;}
          .occasions-grid{grid-template-columns:1fr 1fr!important;}
          .culture-grid{grid-template-columns:1fr!important;}
          .products-grid{grid-template-columns:1fr!important;}
          .faq-grid{grid-template-columns:1fr!important;}
          .glossary-grid{grid-template-columns:1fr!important;}
          .sticky-bar{display:flex!important;}
        }
        @media(max-width:520px){
          .occasions-grid{grid-template-columns:1fr!important;}
        }
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,background:"var(--navy)",borderBottom:"2px solid var(--gold)",padding:"0 max(24px,4vw)",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"2px",textDecoration:"none"}}>JewSA</Link>
        <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
          {[["Shop","#shop"],["Culture","#culture"],["Calendar","#calendar"],["The Tribe","#story"]].map(([l,h])=>(
            <Link key={h} href={h} style={{fontSize:13,fontWeight:700,color:"rgba(245,240,232,0.55)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>{l}</Link>
          ))}
          <Link href="/cart" style={{color:"var(--gold)",fontWeight:700,fontSize:13,letterSpacing:"1px",textDecoration:"none",marginRight:8}}>Cart ({cartItemCount})</Link><Link href="#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"10px 20px",textDecoration:"none"}}>Shop Now</Link>
        </div>
      </nav>

      {/* ONE-LINER STRIP */}
      <div style={{background:"rgba(201,168,76,0.1)",borderBottom:"1px solid rgba(201,168,76,0.2)",padding:"10px max(24px,4vw)",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
        <span style={{fontSize:11,fontWeight:900,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",flexShrink:0}}>What is JewSA?</span>
        <span style={{fontSize:13,color:"rgba(245,240,232,0.6)",lineHeight:1.5}}>Jewish-American pride merch — built in America, blessed in Brooklyn, designed to make you smile before you even put it on.</span>
        <Link href="#shop" style={{marginLeft:"auto",fontSize:12,fontWeight:900,color:"var(--gold)",textDecoration:"none",whiteSpace:"nowrap",letterSpacing:"1px",textTransform:"uppercase"}}>Shop the Collection</Link>
      </div>

      {/* TICKER */}
      <div style={{background:"var(--red)",padding:"9px 0",overflow:"hidden"}}>
        <div className="jewsa-ticker">
          <span style={{fontSize:11,fontWeight:900,letterSpacing:"2.5px",textTransform:"uppercase",color:"rgba(245,240,232,0.9)"}}>{TICKER}{TICKER}{TICKER}</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{background:"var(--navy)",position:"relative",overflow:"hidden"}}>
        {[{t:"8%",l:"7%",s:40,d:4.2,dl:0},{t:"22%",l:"15%",s:28,d:5.1,dl:1.2},{t:"55%",l:"4%",s:36,d:3.8,dl:2.4},{t:"70%",l:"18%",s:22,d:6.0,dl:0.8},{t:"15%",l:"42%",s:32,d:4.5,dl:1.8}].map((s,i)=>(
          <div key={i} style={{position:"absolute",top:s.t,left:s.l,fontSize:s.s,opacity:0.06,pointerEvents:"none",animation:`fstar ${s.d}s ${s.dl}s ease-in-out infinite`}}>✡</div>
        ))}
        <div className="hero-grid">
          {/* LEFT */}
          <div style={{padding:"80px max(48px,6vw)",display:"flex",flexDirection:"column",justifyContent:"center",gap:28}}>
            <div style={{display:"inline-block",background:"rgba(201,168,76,0.12)",border:"1px solid rgba(201,168,76,0.28)",padding:"6px 16px",width:"fit-content"}}>
              <span style={{fontSize:11,fontWeight:900,letterSpacing:"3px",textTransform:"uppercase",color:"var(--gold)"}}>Jewish-American Pride</span>
            </div>
            <div style={{minHeight:210}}>
              <h1 className={fade?"fadin":"fhide"} style={{fontSize:"clamp(44px,6.5vw,88px)",fontFamily:"'Bebas Neue',sans-serif",color:"var(--white)",letterSpacing:"-1px",lineHeight:0.95,marginBottom:16}}>
                {pl.main}<br/><span style={{color:"var(--gold)"}}>{pl.accent}</span>
              </h1>
              <p className={fade?"fadin":"fhide"} style={{fontSize:"clamp(14px,1.6vw,18px)",color:"rgba(245,240,232,0.6)",lineHeight:1.7,maxWidth:440,animationDelay:"0.1s"}}>{pl.sub}</p>
            </div>
            {/* Dots */}
            <div style={{display:"flex",gap:8}}>
              {PUNCHLINES.map((_,i)=>(
                <button key={i} onClick={()=>{setFade(false);setTimeout(()=>{setIdx(i);setFade(true);},200);}}
                  style={{width:i===idx?24:8,height:8,background:i===idx?"var(--gold)":"rgba(201,168,76,0.3)",border:"none",cursor:"pointer",transition:"all 0.3s"}} />
              ))}
            </div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <Link href="#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"16px 36px",textDecoration:"none"}}>Shop The Collection</Link>
              <Link href="#culture" style={{background:"transparent",color:"var(--white)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"14px 32px",border:"2px solid rgba(245,240,232,0.25)",textDecoration:"none"}}>The Culture</Link>
            </div>
          </div>
          {/* RIGHT */}
          <div className="hero-right" style={{background:"rgba(255,255,255,0.02)",borderLeft:"1px solid rgba(201,168,76,0.1)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:32,padding:48}}>
            <div style={{fontSize:120}}>🕎</div>
            <div style={{textAlign:"center"}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:52,color:"var(--gold)",letterSpacing:"2px",lineHeight:1}}>JewSA</div>
              <div style={{fontSize:12,fontWeight:700,letterSpacing:"3px",color:"rgba(245,240,232,0.4)",textTransform:"uppercase",marginTop:4}}>Punny. Proud. Perfect.</div>
            </div>
            <div style={{display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center"}}>
              {[["✡","Since Forever"],["🇺🇸","American Made"],["😄","Guaranteed Funny"]].map(([e,l])=>(
                <div key={l} style={{textAlign:"center",padding:"12px 16px",border:"1px solid rgba(201,168,76,0.15)",background:"rgba(201,168,76,0.04)"}}>
                  <div style={{fontSize:22}}>{e}</div>
                  <div style={{fontSize:10,letterSpacing:"1.5px",color:"rgba(245,240,232,0.4)",textTransform:"uppercase",marginTop:4}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" style={{padding:"80px max(24px,5vw)",background:"#060F1C"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:56}}>
            <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:12}}>THE COLLECTION</div>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(36px,5vw,64px)",letterSpacing:"-1px",marginBottom:12}}>Gear For The Tribe</h2>
            <p style={{fontSize:16,color:"rgba(245,240,232,0.5)",maxWidth:480,margin:"0 auto"}}>Two products. Both excellent. No fluff. Your bubbe would approve.</p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map(p=>(
              <div key={p.id} className="card-h" style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.15)",overflow:"hidden"}}>
                <div style={{position:"relative",background:"rgba(255,255,255,0.04)",padding:24,textAlign:"center"}}>
                  <div style={{position:"absolute",top:12,left:12,background:"var(--red)",color:"rgba(245,240,232,0.95)",fontSize:10,fontWeight:900,letterSpacing:"1.5px",padding:"4px 10px",textTransform:"uppercase"}}>{p.badge}</div>
                  <img src={p.img} alt={p.name} style={{width:"100%",maxWidth:280,height:"auto"}} loading="lazy"/>
                </div>
                <div style={{padding:"24px 24px 28px"}}>
                  <div style={{fontWeight:900,fontSize:18,marginBottom:6}}>{p.name}</div>
                  <div style={{fontSize:13,color:"rgba(245,240,232,0.5)",lineHeight:1.6,marginBottom:16}}>{p.desc}</div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:"var(--gold)",letterSpacing:"1px"}}>${p.price}</div>
                    <button
                      onClick={() => handleAddToCart(p)}
                      style={{background: addedToCart === p.id ? "var(--navy)" : "var(--gold)", color: addedToCart === p.id ? "var(--gold)" : "var(--navy)", fontWeight:900, fontSize:13, letterSpacing:"1px", textTransform:"uppercase", padding:"12px 24px", border: addedToCart === p.id ? "2px solid var(--gold)" : "none", cursor:"pointer", transition:"all 0.2s"}}
                    >{addedToCart === p.id ? '✓ Added!' : 'Add to Cart'}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section style={{padding:"72px max(24px,5vw)",background:"var(--navy)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:12}}>SHOP BY THE MOMENT</div>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(30px,4vw,52px)",letterSpacing:"-1px",marginBottom:12}}>There Is Always An Occasion</h2>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.45)",maxWidth:500,margin:"0 auto"}}>If you are Jewish-American, every day is technically a cultural event. We listed the official ones.</p>
          </div>
          <div className="occasions-grid">
            {OCCASIONS.map(o=>(
              <Link key={o.label} href="#shop" className="occ-h card-h" style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(201,168,76,0.12)",padding:"24px 20px",textDecoration:"none",display:"block",transition:"all 0.2s"}}>
                <div style={{fontSize:32,marginBottom:12}}>{o.emoji}</div>
                <div style={{fontWeight:900,fontSize:15,color:"var(--white)",marginBottom:8}}>{o.label}</div>
                <div style={{fontSize:12,color:"rgba(245,240,232,0.45)",lineHeight:1.6}}>{o.note}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE STATS */}
      <section id="culture" style={{padding:"80px max(24px,5vw)",background:"#060F1C"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:56}}>
            <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:12}}>THE CULTURE BEHIND THE MERCH</div>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(30px,4vw,52px)",letterSpacing:"-1px",marginBottom:12}}>Jewish-American. In Context.</h2>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.45)",maxWidth:520,margin:"0 auto"}}>Not a history lesson. Just a few numbers worth knowing. Then go buy a tee.</p>
          </div>
          <div className="culture-grid" style={{marginBottom:72}}>
            {CULTURE_STATS.map(s=>(
              <div key={s.stat} style={{background:"rgba(201,168,76,0.05)",border:"1px solid rgba(201,168,76,0.15)",padding:"32px 28px"}}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:72,color:"var(--gold)",lineHeight:1,marginBottom:4}}>{s.stat}</div>
                <div style={{fontSize:12,fontWeight:700,color:"rgba(245,240,232,0.4)",letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:12}}>{s.context}</div>
                <div style={{fontSize:14,color:"rgba(245,240,232,0.65)",lineHeight:1.7,fontStyle:"italic"}}>{s.punchline}</div>
              </div>
            ))}
          </div>

          {/* GLOSSARY */}
          <div style={{textAlign:"center",marginBottom:48}}>
            <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:12}}>A FIELD GUIDE TO THE TRIBE</div>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px,4vw,48px)",letterSpacing:"-1px",marginBottom:12}}>Words You Should Know.</h2>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.45)",maxWidth:500,margin:"0 auto"}}>Whether you are in the tribe or just tribe-adjacent, this glossary has you covered. You are welcome.</p>
          </div>
          <div className="glossary-grid" style={{border:"1px solid rgba(201,168,76,0.1)"}}>
            {GLOSSARY.map((g,i)=>(
              <div key={g.word} className="glos-h" style={{padding:"24px 28px",borderBottom:"1px solid rgba(201,168,76,0.08)",borderRight:i%2===0?"1px solid rgba(201,168,76,0.08)":"none",transition:"background 0.2s",cursor:"default"}}>
                <div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:8,flexWrap:"wrap"}}>
                  <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,color:"var(--gold)",letterSpacing:"1px"}}>{g.word}</span>
                  <span style={{fontSize:11,color:"rgba(245,240,232,0.3)",fontStyle:"italic"}}>{g.pronounce}</span>
                </div>
                <div style={{fontSize:13,color:"rgba(245,240,232,0.6)",lineHeight:1.7}}>{g.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR */}
      <section id="calendar" style={{padding:"80px max(24px,5vw)",background:"var(--navy)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:56}}>
            <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:12}}>THE JEWISH CALENDAR</div>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px,4vw,52px)",letterSpacing:"-1px",lineHeight:0.95,marginBottom:16}}>Holidays, Memorial Days,<br/>and Moments That Matter.</h2>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.45)",maxWidth:580,margin:"0 auto",lineHeight:1.7}}>Jewish life runs on a lunar calendar older than most nations. These are the days that anchor it — observed by Jewish communities worldwide. Dates shown are approximate for 2026; lunar holidays shift each year.</p>
          </div>
          {/* Legend */}
          <div style={{display:"flex",gap:24,marginBottom:24,flexWrap:"wrap"}}>
            {[["Holiday","var(--gold)"],["Memorial Day","rgba(180,180,200,0.7)"]].map(([l,c])=>(
              <div key={l} style={{display:"flex",alignItems:"center",gap:8}}>
                <div style={{width:10,height:10,background:c,flexShrink:0}}/>
                <span style={{fontSize:12,color:"rgba(245,240,232,0.4)",letterSpacing:"1px",textTransform:"uppercase"}}>{l}</span>
              </div>
            ))}
          </div>
          <div style={{border:"1px solid rgba(201,168,76,0.1)"}}>
            {CALENDAR.map((h,i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"130px 44px 1fr",alignItems:"stretch",borderBottom:i<CALENDAR.length-1?"1px solid rgba(201,168,76,0.07)":"none",background:h.type==="memorial"?"rgba(255,255,255,0.015)":"transparent"}}>
                <div style={{padding:"18px 16px",borderRight:"1px solid rgba(201,168,76,0.08)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                  <div style={{fontSize:11,color:"rgba(245,240,232,0.35)",lineHeight:1.5}}>{h.date}</div>
                </div>
                <div style={{padding:"18px 8px",borderRight:"1px solid rgba(201,168,76,0.05)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>{h.emoji}</div>
                <div style={{padding:"18px 24px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6,flexWrap:"wrap"}}>
                    <span style={{fontWeight:900,fontSize:14,color:h.type==="memorial"?"rgba(245,240,232,0.75)":"var(--white)"}}>{h.name}</span>
                    <span style={{fontSize:11,color:"rgba(245,240,232,0.25)",fontStyle:"italic"}}>{h.hebrew}</span>
                    {h.type==="memorial"&&<span style={{fontSize:9,fontWeight:900,letterSpacing:"1px",color:"rgba(180,180,200,0.6)",background:"rgba(255,255,255,0.05)",padding:"2px 7px",textTransform:"uppercase"}}>Memorial</span>}
                  </div>
                  <p style={{fontSize:13,color:"rgba(245,240,232,0.55)",lineHeight:1.65,marginBottom:4}}>{h.desc}</p>
                  <p style={{fontSize:12,color:"rgba(245,240,232,0.3)",lineHeight:1.6,fontStyle:"italic"}}>{h.observed}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{marginTop:20,fontSize:12,color:"rgba(245,240,232,0.25)",lineHeight:1.7,textAlign:"center"}}>Jewish holidays begin at sundown the evening before the listed date. The Jewish calendar is lunisolar — exact dates shift each secular year. Consult a Jewish calendar for the most current observance dates.</p>
        </div>
      </section>

      {/* IS THIS DISRESPECTFUL */}
      <section style={{padding:"80px max(24px,5vw)",background:"#060F1C"}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:52}}>
            <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:12}}>WE GET ASKED THIS</div>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px,4vw,48px)",letterSpacing:"-1px",marginBottom:12}}>Is This Disrespectful?</h2>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.45)",maxWidth:480,margin:"0 auto"}}>A fair question. Here is the honest answer — no spin, no deflection.</p>
          </div>
          <div className="faq-grid" style={{border:"1px solid rgba(201,168,76,0.1)"}}>
            {[
              { q:"Who made this?", a:"Jewish Americans. This brand was created by people who grew up with these holidays, these words, and these jokes. We are not laughing at the culture — we are laughing from inside it. That is the difference." },
              { q:"Is it okay if I am not Jewish?", a:"Yes. Jewish humor and Jewish-American culture have always welcomed people in. If you find it meaningful, if you want to show appreciation for Jewish friends or family — you are welcome here. Respect the culture. Enjoy the merch." },
              { q:"Do the jokes ever go too far?", a:"We think about this carefully. Every piece we design is one we would wear ourselves — in synagogue, at a seder, at Thanksgiving. If it does not hold up in all three settings, we do not make it." },
              { q:"What about the memorial days on your calendar?", a:"Those are included with full respect. Yom HaShoah, Tisha B'Av, Kristallnacht — these are on the calendar because Jewish Americans carry them. Acknowledging them is part of who we are, not just the funny parts." },
              { q:"What is the brand actually about?", a:"Jewish-American identity is one of the richest, most layered cultures in American history. We make merch that celebrates that — with humor, with pride, and with quality that takes the culture seriously even when the jokes do not." },
              { q:"Would my bubbe approve?", a:"Depends on the bubbe. Statistically, most bubbes will kvell. The rest will kvell privately and tell you they do not like the hat while wearing it around the house. We stand by the product." },
            ].map((faq,i)=>(
              <div key={i} style={{padding:"28px 24px",borderBottom:"1px solid rgba(201,168,76,0.07)",borderRight:i%2===0?"1px solid rgba(201,168,76,0.07)":"none"}}>
                <div style={{fontWeight:900,fontSize:15,color:"var(--white)",marginBottom:10}}>{faq.q}</div>
                <div style={{fontSize:13,color:"rgba(245,240,232,0.6)",lineHeight:1.75}}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" style={{padding:"80px max(24px,5vw)",background:"var(--navy)"}}>
        <div style={{maxWidth:780,margin:"0 auto",textAlign:"center"}}>
          <div style={{fontSize:11,letterSpacing:"3px",color:"var(--gold)",marginBottom:16}}>THE TRIBE</div>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(32px,5vw,64px)",letterSpacing:"-1px",lineHeight:0.95,marginBottom:28}}>
            Jewish-American.<br/><span style={{color:"var(--gold)"}}>Est. a Very Long Time Ago.</span>
          </h2>
          <p style={{fontSize:16,color:"rgba(245,240,232,0.6)",lineHeight:1.8,marginBottom:20}}>Jewish Americans have been part of this country since before it was a country. They built neighborhoods, wrote literature, shaped comedy, founded institutions, fought in every war, survived things that would have ended other cultures — and came out the other side with better jokes.</p>
          <p style={{fontSize:16,color:"rgba(245,240,232,0.6)",lineHeight:1.8,marginBottom:20}}>JewSA is a celebration of that identity. Not a museum piece. Not a lecture. A tee and a bucket hat that say: we are here, we have always been here, and we find this nation genuinely funny and genuinely worth loving.</p>
          <p style={{fontSize:15,color:"rgba(245,240,232,0.35)",lineHeight:1.8,fontStyle:"italic"}}>Wear it to the Seder. Wear it on July 4th. Wear it when someone asks where you're from and you want the answer to fit on a hat.</p>
          <div style={{marginTop:40}}>
            <Link href="#shop" style={{background:"var(--gold)",color:"var(--navy)",fontWeight:900,fontSize:14,letterSpacing:"1.5px",textTransform:"uppercase",padding:"16px 40px",textDecoration:"none"}}>Shop The Collection</Link>
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section style={{background:"var(--red)",padding:"64px max(24px,5vw)"}}>
        <div style={{maxWidth:680,margin:"0 auto",textAlign:"center"}}>
          {emailDone ? (
            <div>
              <div style={{fontSize:40,marginBottom:16}}>✡️</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:36,color:"rgba(245,240,232,0.95)",letterSpacing:"1px",marginBottom:8}}>You Are In The Tribe Now.</div>
              <p style={{fontSize:15,color:"rgba(245,240,232,0.7)",marginBottom:16}}>Mazel tov. Check your inbox — your 10% off is waiting.</p>
              <div style={{display:"inline-block",background:"rgba(245,240,232,0.95)",color:"#111",fontWeight:900,fontSize:24,letterSpacing:"4px",padding:"12px 28px",borderRadius:6}}>MISHPOKHE10</div>
            </div>
          ) : (
            <>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px,4vw,48px)",color:"rgba(245,240,232,0.95)",letterSpacing:"-0.5px",marginBottom:8}}>Join The Tribe.</div>
              <p style={{fontSize:15,color:"rgba(245,240,232,0.75)",marginBottom:6,lineHeight:1.6}}>We send good stuff. New drops, culture moments, the occasional very good punchline.</p>
              <p style={{fontSize:13,color:"rgba(245,240,232,0.5)",marginBottom:28}}>Not too often. We are not needy.</p>
              <form onSubmit={async e=>{e.preventDefault();if(!email.trim())return;try{const r=await fetch('/api/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})});const d=await r.json();if(d.success){setEmailDone(true);}}catch(err){console.error(err);}}} style={{display:"flex",gap:0,maxWidth:460,margin:"0 auto",flexWrap:"wrap"}}>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required
                  style={{flex:1,minWidth:200,padding:"14px 20px",fontSize:14,background:"rgba(255,255,255,0.95)",color:"#111",border:"none",outline:"none",fontFamily:"inherit"}}/>
                <button type="submit" style={{background:"var(--navy)",color:"var(--gold)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"14px 24px",border:"none",cursor:"pointer",whiteSpace:"nowrap"}}>Join The Tribe</button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#04101F",borderTop:"1px solid rgba(201,168,76,0.15)",padding:"36px max(24px,5vw)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
        <div>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:"var(--gold)",letterSpacing:"2px",marginBottom:4}}>JewSA</div>
          <div style={{fontSize:12,color:"rgba(245,240,232,0.3)"}}>Jewish-American pride merch. Punny. Proud. Perfect.</div>
        </div>
        <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
          {[["Shop","#shop"],["Culture","#culture"],["Calendar","#calendar"],["The Tribe","#story"]].map(([l,h])=>(
            <Link key={h} href={h} style={{fontSize:12,fontWeight:700,color:"rgba(245,240,232,0.4)",textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase"}}>{l}</Link>
          ))}
        </div>
        <div style={{display:"flex",gap:20,flexWrap:"wrap",alignItems:"center"}}>
          <span style={{fontSize:11,letterSpacing:"2px",fontWeight:700,color:"rgba(234,179,8,0.5)"}}>OUR NETWORK</span>
          {[["The Voice of Cash","https://www.thevoiceofcash.com"],["U-God Sacred Texts","https://u-god.com"],["WeBearish","https://www.webearish.com"],["AI Skills Agents","https://aiskillsagents.com"]].map(([label,href]) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{fontSize:12,color:"rgba(245,240,232,0.3)",textDecoration:"none",fontWeight:600}}>{label}</a>
          ))}
        </div>
        <div style={{fontSize:12,color:"rgba(245,240,232,0.25)"}}>© {new Date().getFullYear()} JewSA. All rights reserved.</div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="sticky-bar">
        <div>
          <div style={{fontWeight:900,fontSize:14,color:"var(--navy)"}}>Tee + Bucket Hat</div>
          <div style={{fontSize:12,color:"rgba(11,31,58,0.6)",fontWeight:700}}>$25 each</div>
        </div>
        <Link href="#shop" style={{background:"var(--navy)",color:"var(--gold)",fontWeight:900,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",padding:"12px 24px",textDecoration:"none",whiteSpace:"nowrap"}}>Shop Now</Link>
      </div>

    </>
  );
}

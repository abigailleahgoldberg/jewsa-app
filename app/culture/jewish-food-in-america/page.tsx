import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jewish Food in America | JewSA Culture",
  description:
    "Bagels, deli culture, challah, matzo ball soup — how Jewish food became American food, and why the best Jewish cooking carries the weight of an entire civilization.",
  openGraph: {
    title: "Jewish Food in America | JewSA",
    description: "How Jewish food became American food — bagels, delis, challah, and more.",
    url: "https://jewsa.com/culture/jewish-food-in-america",
  },
};

const RELATED = [
  { slug: "history-of-jews-in-america", title: "The History of Jews in America", category: "History" },
  { slug: "guide-to-your-jewish-neighbor", title: "A Guide to Your Jewish Neighbor", category: "Guide" },
  { slug: "famous-jewish-americans", title: "Famous Jewish Americans", category: "culture" },
];

const FOODS = [
  { name: "The Bagel", origin: "Poland", desc: "The ring-shaped boiled-then-baked bread that Eastern European Jewish immigrants brought to New York's Lower East Side became one of the most recognized foods in America. The original New York bagel — dense, chewy, with a thin crust — bears little resemblance to the soft, airy rings sold in grocery stores nationwide. The authentic version is made with a specific water and flour ratio, boiled before baking, and consumed within hours of production. New York bagel partisans will tell you the water makes the difference. They are not wrong. The bagel crossed from immigrant food to American staple in the latter half of the twentieth century. Today, approximately one billion bagels are sold annually in the United States." },
  { name: "The Deli", origin: "Eastern Europe via New York", desc: "The Jewish delicatessen is one of America's great culinary institutions. Katz's Delicatessen on the Lower East Side has been serving pastrami on rye since 1888. The deli emerged as a place where Jewish immigrants could eat familiar food in an unfamiliar country — kosher meat, pickles, rye bread, matzo ball soup. The pastrami sandwich became the flagship: beef brisket cured with spices and smoked, served thick on rye with mustard. The amount of meat per sandwich at a real deli is not appropriate for the faint of heart. It is appropriate for everyone else." },
  { name: "Challah", origin: "Medieval Germany and Eastern Europe", desc: "The braided egg bread of Shabbat has become one of the most recognized Jewish foods in America. The braiding is traditional, with common versions using three, four, or six strands of dough. Challah is enriched with eggs and oil and slightly sweet, producing a bread that tears beautifully and makes the best French toast of any bread on earth. In many American Jewish communities, buying challah from a local bakery on Friday afternoon is a weekly ritual. The bakeries that make real challah are local institutions. Finding a good one is worth the search." },
  { name: "Matzo Ball Soup", origin: "Eastern Europe", desc: "The matzo ball — a dumpling made from matzo meal, eggs, and fat — floating in clear chicken broth is the Jewish American comfort food par excellence. The great division is between floaters and sinkers: light, airy matzo balls that float in the bowl versus dense, heavy ones that sit on the bottom. Both camps hold their positions with the conviction of religious doctrine. The broth must be made from a whole chicken, cooked long and slow with onions, carrots, celery, dill, and parsley. The vegetables are for flavor. They are not served. The soup is prescribed for illness, sadness, cold weather, and any situation in which a person needs to feel that someone loves them." },
  { name: "Pastrami", origin: "Romania via New York", desc: "Pastrami arrived in the United States with Romanian Jewish immigrants in the late nineteenth century. The original was made from beef navel, cured in a spiced brine for days, coated with a pepper and coriander crust, and smoked. At Katz's and Langer's and the other great American delis, it is hand-carved — never sliced by machine. The slice should be thick enough to have some chew, thin enough to not be unwieldy. Served on rye with mustard, it is as close as American food gets to perfection. Other pastrami exists. Most of it is not pastrami." },
  { name: "Latkes and Sufganiyot", origin: "Eastern Europe / Israel", desc: "The Hanukkah foods. Latkes are potato pancakes fried in oil — crispy on the outside, tender inside, served with sour cream or applesauce. Sufganiyot are jelly doughnuts, the Israeli Hanukkah tradition that has crossed into American Jewish practice. Both are fried in oil to commemorate the miracle of the Temple oil that burned for eight days. This is a case where religious practice and excellent food coincide perfectly. The latkes take work — standing over a hot pan, frying in batches — and the person who makes them deserves appropriate gratitude." },
  { name: "Brisket", origin: "Eastern Europe", desc: "Every Jewish family believes their grandmother made the best brisket in the world. The mathematics of this claim are impossible. The feeling behind it is real. Brisket is a tough cut of beef from the chest of the animal that requires hours of slow braising to become tender. Ashkenazi Jewish cooks slow-cooked it with onions, tomatoes, and sometimes wine or beer until the meat pulls apart and the sauce has reduced to something deeply concentrated. At Passover, Rosh Hashanah, and Shabbat tables across America, brisket is the centerpiece. The leftovers, if any exist, are better the next day." },
];

export default function JewishFoodPage() {
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
        <div style={{maxWidth:860,margin:"0 auto",fontSize:13,color:"rgba(245,240,232,0.4)"}}>
          <Link href="/" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Home</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <Link href="/culture" style={{color:"rgba(245,240,232,0.4)",textDecoration:"none"}}>Culture</Link>
          <span style={{margin:"0 8px"}}>/</span>
          <span style={{color:"var(--gold)"}}>Jewish Food in America</span>
        </div>
      </div>

      <section style={{padding:"72px max(24px,5vw) 48px",background:"var(--navy)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{fontSize:11,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",fontWeight:700,background:"rgba(201,168,76,0.1)",padding:"4px 10px"}}>Food</div>
            <div style={{fontSize:12,color:"rgba(245,240,232,0.3)"}}>7 min read</div>
          </div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(40px,6vw,80px)",letterSpacing:"-1px",lineHeight:0.9,marginBottom:20}}>
            Jewish Food in America
          </h1>
          <p style={{fontSize:17,color:"rgba(245,240,232,0.65)",lineHeight:1.85,maxWidth:700}}>
            The bagel. The deli. The matzo ball soup. Jewish immigrants brought their food to America, and America made it its own. Here is where these dishes came from and why they matter.
          </p>
        </div>
      </section>

      <section style={{padding:"56px max(24px,5vw)",background:"var(--navy)"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          
          <div style={{marginBottom:40,fontSize:15,color:"rgba(245,240,232,0.70)",lineHeight:1.85}}>
            <p>Jewish food is not just cuisine. It is encoded memory. Every brisket, every matzo ball, every latke carries information about where a family came from, what they held onto when they emigrated, what they adapted to fit a new country, and what they refused to give up even when it would have been easier to let it go.</p>
            <p style={{marginTop:16}}>The Jewish-American kitchen is a hybrid creation: Eastern European Jewish cooking that met American ingredients, American appliances, and American timelines, and emerged as something that exists nowhere else on earth. It is entirely its own thing. And it fed a country.</p>
          </div>

          <div style={{display:"grid",gap:0,border:"1px solid rgba(201,168,76,0.1)"}}>
            {FOODS.map((food, i) => (
              <div key={food.name} style={{padding:"36px 32px",borderBottom: i < FOODS.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none",background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)"}}>
                <div style={{display:"flex",alignItems:"flex-start",gap:16,marginBottom:16,flexWrap:"wrap"}}>
                  <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:30,color:"var(--gold)",letterSpacing:"1px",lineHeight:1}}>
                    {food.name}
                  </h2>
                  <div style={{fontSize:11,color:"rgba(245,240,232,0.3)",letterSpacing:"1px",background:"rgba(255,255,255,0.04)",padding:"4px 10px",marginTop:4,flexShrink:0}}>
                    Origin: {food.origin}
                  </div>
                </div>
                <p style={{fontSize:15,color:"rgba(245,240,232,0.68)",lineHeight:1.85}}>{food.desc}</p>
              </div>
            ))}
          </div>

          <div style={{marginTop:48,padding:"32px 28px",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.15)"}}>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:"var(--gold)",letterSpacing:"1px",marginBottom:16}}>The Bigger Picture</h2>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.68)",lineHeight:1.85,marginBottom:16}}>
              Jewish food became American food through the same process that all immigrant food becomes American food: it showed up, it was delicious, and eventually everyone wanted some. The bagel went from Lower East Side staple to national grocery chain staple in the course of a few generations. Cream cheese, which Jewish immigrants popularized as a bagel topping, became one of the top-selling dairy products in America.
            </p>
            <p style={{fontSize:15,color:"rgba(245,240,232,0.68)",lineHeight:1.85}}>
              The Jewish deli, which started as a place for immigrants to eat familiar food in an unfamiliar country, became an American institution. The food traveled outward — from New York to Los Angeles, from LA to Dallas, from Dallas everywhere. It did not lose its identity in the journey. It remained Jewish food, even as it became American food, in the same way that Jewish Americans remained Jewish even as they became American. That is, in fact, the whole story.
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

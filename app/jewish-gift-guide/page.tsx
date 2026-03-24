import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Jewish Gift Guide 2026: Passover, Holidays, and Year-Round | JewSA",
  description: "Thoughtful Jewish gifts for Passover, the High Holidays, and everyday. Gifts with meaning that celebrate Jewish culture and identity.",
};
export default function JewishGiftGuidePage() {
  const G = "#1E40AF";
  const categories = [
    {name:"Passover Gifts",desc:"Haggadahs, seder plates, matzah covers, and ritual items for the holiday."},
    {name:"High Holiday Gifts",desc:"Items for Rosh Hashanah and Yom Kippur — books, ritual items, prayer materials."},
    {name:"Shabbat Essentials",desc:"Candles, challah covers, kiddush cups, and items that make Shabbat special."},
    {name:"Cultural & Books",desc:"Jewish history, theology, memoir, and books that deepen identity and understanding."},
    {name:"Jewelry & Wearables",desc:"Chai pendants, mezuzahs, Star of David pieces, and wearable expressions of identity."},
    {name:"Home & Decor",desc:"Wall art, decorative items, menorahs, and pieces that bring Jewish aesthetics home."},
  ];
  return (
    <div style={{minHeight:"100vh",background:"#F0F4FF",color:"#0D0D0D",fontFamily:"system-ui,sans-serif"}}>
      <nav style={{padding:"16px 5vw",borderBottom:"1px solid #DBEAFE",display:"flex",justifyContent:"space-between",alignItems:"center",background:"white"}}>
        <Link href="/" style={{fontWeight:900,fontSize:20,color:"#0D0D0D",textDecoration:"none"}}>JewSA</Link>
        <Link href="/blog" style={{color:"#666",textDecoration:"none",fontSize:14}}>← Back</Link>
      </nav>
      <div style={{maxWidth:800,margin:"0 auto",padding:"60px 5vw"}}>
        <div style={{fontSize:11,letterSpacing:"2px",color:G,marginBottom:16}}>GIFT GUIDE 2026</div>
        <h1 style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,lineHeight:1.1,marginBottom:24}}>Jewish Gift Guide 2026</h1>
        <p style={{fontSize:18,color:"#444",lineHeight:1.7,marginBottom:40}}>Thoughtful gifts that celebrate Jewish identity, culture, and tradition. For Passover, for the holidays, for any time you want to give something with meaning.</p>
        
        <div style={{display:"grid",gap:16,marginBottom:40}}>
          {categories.map((c,i) => (
            <div key={i} style={{background:"white",border:"1px solid #DBEAFE",borderRadius:8,padding:"20px",cursor:"pointer",transition:"all 0.2s"`}}}>
              <h3 style={{fontWeight:700,fontSize:16,marginBottom:6,color:G}}>{c.name}</h3>
              <p style={{fontSize:14,color:"#666",margin:0}}>{c.desc}</p>
            </div>
          ))}
        </div>
        
        <div style={{background:G,color:"white",padding:"36px",borderRadius:8,textAlign:"center"}}>
          <h2 style={{fontSize:20,fontWeight:900,marginBottom:12}}>Shop Our Curated Selection</h2>
          <p style={{fontSize:15,opacity:0.9,marginBottom:20,lineHeight:1.6}}>Browse carefully selected gifts with authentic Jewish meaning. Each item includes context on its cultural significance.</p>
          <Link href="/shop" style={{background:"white",color:G,fontWeight:800,fontSize:14,padding:"12px 28px",textDecoration:"none",borderRadius:4,display:"inline-block"}}>Browse Gifts →</Link>
        </div>
      </div>
    </div>
  );
}

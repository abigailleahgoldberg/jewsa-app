import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Jewish Gift Guide | JewSA', 
  description: 'The best Jewish gifts for every occasion. Bar and Bat Mitzvah gifts, Hanukkah essentials, Passover supplies, and Judaica worth giving. Curated by JewSA.',
  alternates: { canonical: 'https://www.jewsa.com/gift-guide' },
}
const sections = [
  { title: 'Bar & Bat Mitzvah Gifts', emoji: '✡️', subtitle: 'Gifts worthy of the moment',
    items: [
      { name: 'Jewish Study Bible', desc: 'The gold standard. Every Jewish home should have one. Gift it when they become adults in the faith.', link: 'https://www.amazon.com/s?k=jewish+study+bible+oxford&tag=jewsa-20', price: '$45' },
      { name: 'Personalized Kiddush Cup', desc: 'Engraved with their name and date. Lasts forever. Used every Shabbat.', link: 'https://www.amazon.com/s?k=personalized+kiddush+cup+engraved&tag=jewsa-20', price: '$40-$120' },
      { name: 'Israel Bonds', desc: 'Not on Amazon but worth mentioning. The traditional meaningful financial gift.', link: 'https://www.amazon.com/s?k=jewish+bar+mitzvah+gift&tag=jewsa-20', price: '$18+' },
      { name: 'Hebrew Name Art Print', desc: 'Their Hebrew name in beautiful calligraphy. Frame it. Done.', link: 'https://www.amazon.com/s?k=hebrew+name+art+personalized+jewish&tag=jewsa-20', price: '$25-$60' },
    ]
  },
  { title: 'Hanukkah Essentials', emoji: '🕎', subtitle: 'Eight nights of the good stuff',
    items: [
      { name: 'Hanukkah Menorah (Hanukkiah)', desc: 'From classic silver to modern design. Every family has a style. Find theirs.', link: 'https://www.amazon.com/s?k=hanukkah+menorah+hanukkiah&tag=jewsa-20', price: '$20-$150' },
      { name: 'Dreidel Set', desc: 'Wood, metal, or novelty. The game exists. Play it.', link: 'https://www.amazon.com/s?k=dreidel+set+hanukkah&tag=jewsa-20', price: '$10-$25' },
      { name: 'Hanukkah Gelt (Chocolate)', desc: 'The original Hanukkah gift. Chocolate coins. Non-negotiable.', link: 'https://www.amazon.com/s?k=hanukkah+gelt+chocolate+coins&tag=jewsa-20', price: '$8-$20' },
      { name: 'Hanukkah Socks (8 nights, 8 pairs)', desc: 'Someone will love this. Someone in your family wants Hanukkah socks.', link: 'https://www.amazon.com/s?k=hanukkah+socks+jewish+funny&tag=jewsa-20', price: '$15-$35' },
    ]
  },
  { title: 'Passover Seder Essentials', emoji: '🍷', subtitle: 'For a seder worth attending',
    items: [
      { name: 'The Maxwell House Haggadah', desc: 'The classic. Your bubbe used it. Four million copies in print. Get it.', link: 'https://www.amazon.com/s?k=maxwell+house+haggadah+passover&tag=jewsa-20', price: '$8' },
      { name: 'Modern Illustrated Haggadah', desc: 'For the family that wants something beautiful and contemporary at the table.', link: 'https://www.amazon.com/s?k=illustrated+haggadah+modern+passover&tag=jewsa-20', price: '$20-$40' },
      { name: 'Seder Plate', desc: 'Ceramic, wooden, or modern. The centerpiece of the table deserves thought.', link: 'https://www.amazon.com/s?k=passover+seder+plate+ceramic&tag=jewsa-20', price: '$25-$80' },
      { name: 'Elijah\'s Cup (Silver)', desc: 'Leave the door open. Pour the cup. Keep the tradition.', link: 'https://www.amazon.com/s?k=elijahs+cup+silver+passover&tag=jewsa-20', price: '$20-$60' },
    ]
  },
  { title: 'Books Worth Reading', emoji: '📚', subtitle: 'Jewish culture, humor, and history',
    items: [
      { name: 'Chutzpah — Alan Dershowitz', desc: 'Jewish identity, American life, and the art of arguing your position confidently.', link: 'https://www.amazon.com/s?k=chutzpah+dershowitz&tag=jewsa-20', price: '$15' },
      { name: 'The Chosen — Chaim Potok', desc: 'The definitive American Jewish novel. If they have not read it, gift it.', link: 'https://www.amazon.com/s?k=the+chosen+chaim+potok&tag=jewsa-20', price: '$13' },
      { name: 'Born a Crime — Trevor Noah', desc: 'Not Jewish but the best memoir about navigating identity in America. Universal.', link: 'https://www.amazon.com/s?k=born+a+crime+trevor+noah&tag=jewsa-20', price: '$14' },
      { name: 'Jewish Humor: What the Best Jewish Jokes Say About the Jews', desc: 'Because we have been doing this for 5,000 years and we are very good at it.', link: 'https://www.amazon.com/s?k=jewish+humor+jokes+book&tag=jewsa-20', price: '$16' },
    ]
  },
]
export default function GiftGuidePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#1A1A2E', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ padding: '64px 5vw 56px', maxWidth: 900, margin: '0 auto', textAlign: 'center', borderBottom: '1px solid rgba(234,179,8,0.15)' }}>
        <div style={{ fontSize: 11, letterSpacing: '3px', color: '#eab308', marginBottom: 16, fontWeight: 700 }}>GIFT GUIDE</div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,54px)', fontWeight: 900, color: '#f5f0e8', margin: '0 0 16px', letterSpacing: '-1px' }}>
          The Jewish Gift Guide
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(245,240,232,0.45)', maxWidth: 520, margin: '0 auto 12px', lineHeight: 1.7 }}>
          Bar Mitzvah. Hanukkah. Passover. Shabbat. Any time you need a gift that actually means something.
        </p>
        <p style={{ fontSize: 12, color: 'rgba(245,240,232,0.2)' }}>Some links are affiliate links. JewSA earns a small commission at no extra cost to you.</p>
      </div>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '56px 5vw' }}>
        {sections.map(section => (
          <div key={section.title} style={{ marginBottom: 56 }}>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: '#eab308', letterSpacing: '-0.5px' }}>{section.title}</h2>
              <p style={{ color: 'rgba(245,240,232,0.35)', fontSize: 14, marginTop: 6 }}>{section.subtitle}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
              {section.items.map(item => (
                <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', background: 'rgba(234,179,8,0.04)', border: '1px solid rgba(234,179,8,0.15)', padding: '20px', textDecoration: 'none' }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#f5f0e8', marginBottom: 8, lineHeight: 1.3 }}>{item.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(245,240,232,0.45)', lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#eab308' }}>{item.price}</span>
                    <span style={{ fontSize: 11, color: 'rgba(234,179,8,0.6)', fontWeight: 700 }}>VIEW →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(234,179,8,0.06)', borderTop: '1px solid rgba(234,179,8,0.15)', padding: '48px 5vw', textAlign: 'center' }}>
        <p style={{ color: 'rgba(245,240,232,0.4)', fontSize: 15, marginBottom: 20 }}>While you are here — JewSA makes merch that the tribe actually wants to wear.</p>
        <a href="/products" style={{ display: 'inline-block', background: '#eab308', color: '#1A1A2E', fontWeight: 900, fontSize: 14, padding: '14px 36px', textDecoration: 'none', letterSpacing: '1px' }}>
          SHOP JEWSA MERCH
        </a>
      </div>
    </main>
  )
}

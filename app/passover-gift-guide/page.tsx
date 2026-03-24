import type { Metadata } from 'next'

// Passover 2026 Gift Guide Landing Page
export const metadata: Metadata = {
  title: 'Passover Gift Guide 2026 | Best Passover Gifts | JewSA',
  description: 'The best Passover gifts for 2026. Seder essentials, haggadahs, Passover plates, and gifts for the Jewish family hosting the seder. Curated by JewSA.',
  alternates: { canonical: 'https://www.jewsa.com/passover-gift-guide' },
}

const sections = [
  {
    title: 'Seder Table Essentials',
    subtitle: 'What every seder needs to run right',
    items: [
      {
        name: 'The Maxwell House Haggadah',
        desc: 'Four million copies in print. Your bubbe used it. Your kids will use it. The classic that runs every seder in America.',
        link: 'https://www.amazon.com/s?k=maxwell+house+haggadah+passover&tag=jewsa-20',
        price: '$8',
      },
      {
        name: 'Modern Illustrated Haggadah',
        desc: 'For the family that wants something beautiful at the table. Illustrated haggadahs bring the story alive for younger guests.',
        link: 'https://www.amazon.com/s?k=illustrated+haggadah+modern+passover&tag=jewsa-20',
        price: '$20–$40',
      },
      {
        name: 'Ceramic Seder Plate',
        desc: 'The centerpiece of the table deserves care. Ceramic plates hold the symbolic foods and look right for decades.',
        link: 'https://www.amazon.com/s?k=passover+seder+plate+ceramic+jewish&tag=jewsa-20',
        price: '$25–$80',
      },
      {
        name: "Elijah's Cup",
        desc: "Silver or decorative, this cup gets filled and set aside every seder. A meaningful heirloom piece for a family that hosts.",
        link: 'https://www.amazon.com/s?k=elijahs+cup+silver+passover+jewish&tag=jewsa-20',
        price: '$20–$60',
      },
      {
        name: 'Miriam Cup',
        desc: "Filled with water to honor Miriam at the seder. Growing in use across denominations. A meaningful addition to any table.",
        link: 'https://www.amazon.com/s?k=miriams+cup+passover+seder&tag=jewsa-20',
        price: '$18–$45',
      },
      {
        name: 'Passover Afikomen Bag',
        desc: 'The kids need something to hunt for. A quality embroidered afikomen bag makes the tradition feel real.',
        link: 'https://www.amazon.com/s?k=afikomen+bag+passover+embroidered&tag=jewsa-20',
        price: '$12–$30',
      },
    ],
  },
  {
    title: 'Passover Gifts for the Host',
    subtitle: 'For the person making the seder happen',
    items: [
      {
        name: 'Matzah Cover Set',
        desc: 'Embroidered or woven, a quality matzah cover set is something hosts use every year. Practical and meaningful.',
        link: 'https://www.amazon.com/s?k=passover+matzah+cover+embroidered+jewish&tag=jewsa-20',
        price: '$20–$50',
      },
      {
        name: 'Kosher for Passover Wine (4 bottles)',
        desc: 'Four cups per person at the seder. Show up with four bottles of good kosher wine and you will be invited back.',
        link: 'https://www.amazon.com/s?k=kosher+for+passover+wine&tag=jewsa-20',
        price: '$40–$80',
      },
      {
        name: 'Passover Cookbook',
        desc: 'Passover cooking without chametz is a real constraint. A dedicated cookbook is a gift that gets used every spring.',
        link: 'https://www.amazon.com/s?k=passover+cookbook+jewish+recipes&tag=jewsa-20',
        price: '$18–$35',
      },
      {
        name: 'Passover Chocolate Assortment',
        desc: 'Kosher for Passover chocolate is a crowd-pleaser. Bring it as a hostess gift and watch it disappear by dessert.',
        link: 'https://www.amazon.com/s?k=kosher+for+passover+chocolate+gift&tag=jewsa-20',
        price: '$20–$45',
      },
    ],
  },
  {
    title: 'Passover Gifts for Kids',
    subtitle: 'Keep them at the table and engaged',
    items: [
      {
        name: "Children's Haggadah",
        desc: "A haggadah written for kids keeps them in the story instead of watching the clock. Every child at the seder should have one.",
        link: 'https://www.amazon.com/s?k=passover+haggadah+for+children+illustrated&tag=jewsa-20',
        price: '$12–$18',
      },
      {
        name: 'Passover Puppets or Plague Toys',
        desc: 'The Ten Plagues are supposed to be dramatic. Plague finger puppets or plush plague sets make the seder memorable for kids.',
        link: 'https://www.amazon.com/s?k=passover+plague+puppets+ten+plagues&tag=jewsa-20',
        price: '$15–$30',
      },
      {
        name: 'Afikomen Prize Money (Chai multiples)',
        desc: "The kid finds the afikomen, holds the seder hostage, and negotiates a prize. Cash in multiples of $18 is tradition.",
        link: 'https://www.amazon.com/s?k=passover+gift+bag+kids&tag=jewsa-20',
        price: '$18–$54',
      },
    ],
  },
  {
    title: 'Books About Passover and Exodus',
    subtitle: 'For the guests who want to understand more',
    items: [
      {
        name: 'The Prince of Egypt (Book)',
        desc: 'The story every Jewish child knows. A beautifully illustrated version is a gift that travels down generations.',
        link: 'https://www.amazon.com/s?k=exodus+moses+passover+illustrated+book&tag=jewsa-20',
        price: '$15–$25',
      },
      {
        name: 'Let My People Go — History of Passover',
        desc: 'For the curious guest who wants to understand what Passover actually means historically and spiritually.',
        link: 'https://www.amazon.com/s?k=passover+history+jewish+book&tag=jewsa-20',
        price: '$14–$22',
      },
    ],
  },
]

export default function PassoverGiftGuidePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#1A1A2E', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <div
        style={{
          padding: '64px 5vw 56px',
          maxWidth: 960,
          margin: '0 auto',
          textAlign: 'center',
          borderBottom: '1px solid rgba(234,179,8,0.15)',
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '3px',
            color: '#eab308',
            marginBottom: 16,
            fontWeight: 700,
          }}
        >
          PASSOVER 2026
        </div>
        <h1
          style={{
            fontSize: 'clamp(30px,5vw,54px)',
            fontWeight: 900,
            color: '#f5f0e8',
            margin: '0 0 16px',
            letterSpacing: '-1px',
          }}
        >
          The Passover Gift Guide
        </h1>
        <p
          style={{
            fontSize: 17,
            color: 'rgba(245,240,232,0.6)',
            maxWidth: 560,
            margin: '0 auto 12px',
            lineHeight: 1.7,
          }}
        >
          Seder essentials, host gifts, gifts for the kids at the table, and everything you need to show up right. Passover starts April 2, 2026.
        </p>
        <p style={{ fontSize: 12, color: 'rgba(245,240,232,0.2)', marginTop: 8 }}>
          Some links are affiliate links. JewSA earns a small commission at no extra cost to you.
        </p>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '56px 5vw' }}>
        {sections.map((section) => (
          <div key={section.title} style={{ marginBottom: 64 }}>
            <div style={{ marginBottom: 28 }}>
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  color: '#eab308',
                  margin: '0 0 6px',
                  letterSpacing: '-0.5px',
                }}
              >
                {section.title}
              </h2>
              <p style={{ color: 'rgba(245,240,232,0.35)', fontSize: 14, margin: 0 }}>{section.subtitle}</p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
                gap: 16,
              }}
            >
              {section.items.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    background: 'rgba(234,179,8,0.04)',
                    border: '1px solid rgba(234,179,8,0.15)',
                    padding: '20px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: '#f5f0e8',
                      marginBottom: 8,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: 'rgba(245,240,232,0.45)',
                      lineHeight: 1.6,
                      marginBottom: 12,
                    }}
                  >
                    {item.desc}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#eab308' }}>
                      {item.price}
                    </span>
                    <span style={{ fontSize: 11, color: 'rgba(234,179,8,0.6)', fontWeight: 700 }}>
                      VIEW
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* JewSA Merch CTA */}
      <div
        style={{
          background: 'rgba(234,179,8,0.06)',
          borderTop: '1px solid rgba(234,179,8,0.15)',
          padding: '48px 5vw',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '3px',
            color: '#eab308',
            marginBottom: 14,
            fontWeight: 700,
          }}
        >
          ALSO FROM JEWSA
        </div>
        <h3
          style={{
            fontSize: 'clamp(20px,3vw,32px)',
            fontWeight: 900,
            color: '#f5f0e8',
            margin: '0 0 12px',
          }}
        >
          Passover Pride, Worn All Year
        </h3>
        <p
          style={{
            color: 'rgba(245,240,232,0.4)',
            fontSize: 15,
            marginBottom: 24,
            maxWidth: 480,
            margin: '0 auto 24px',
          }}
        >
          Jewish pride merch built for the tribe. Wear it to the seder. Wear it after.
        </p>
        <a
          href="/products"
          style={{
            display: 'inline-block',
            background: '#eab308',
            color: '#1A1A2E',
            fontWeight: 900,
            fontSize: 14,
            padding: '14px 36px',
            textDecoration: 'none',
            letterSpacing: '1px',
          }}
        >
          SHOP JEWSA
        </a>
      </div>
    </main>
  )
}

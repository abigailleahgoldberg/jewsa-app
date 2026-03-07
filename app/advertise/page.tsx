import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advertise With Us | JewSA',
  description: 'Partner with JewSA. Reach Jewish-American audiences through sponsored content, editorial placements, and cultural partnerships.',
  robots: 'noindex',
}

export default function AdvertisePage() {
  const options = [
    { name: 'Sponsored Post', price: '$300', desc: 'Editorial article in the Jewish-American culture, humor, history, or lifestyle niche. One dofollow link. Permanent placement.', tags: ['800-1,200 words', '1 dofollow link', 'Permanent'] },
    { name: 'Link Insertion', price: '$125', desc: 'Contextual link added to an existing JewSA blog post. Fast, targeted, permanent.', tags: ['Existing content', '1 dofollow link', 'Permanent'] },
    { name: 'Cultural Partnership', price: 'Custom', desc: 'Judaica brands, Jewish-owned businesses, event promoters, cultural organizations. Let\'s talk.', tags: ['Custom package', 'Brand alignment', 'Ongoing'] },
  ]
  return (
    <main style={{ minHeight: '100vh', background: '#1A1A2E', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '72px 5vw 56px', textAlign: 'center' }}>
        <div style={{ fontSize: 12, letterSpacing: '3px', color: '#eab308', fontWeight: 700, marginBottom: 20 }}>PARTNER WITH US</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: '-1px' }}>Advertise on JewSA</h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>Reach Jewish-American readers who care about culture, identity, humor, and community.</p>
      </div>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 5vw 56px', display: 'grid', gap: 20 }}>
        {options.map(o => (
          <div key={o.name} style={{ border: '1px solid rgba(234,179,8,0.25)', padding: '32px', background: 'rgba(234,179,8,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{o.name}</h3>
              <span style={{ fontSize: 26, fontWeight: 900, color: '#eab308' }}>{o.price}</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 16 }}>{o.desc}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {o.tags.map(t => <span key={t} style={{ fontSize: 11, padding: '5px 10px', background: 'rgba(234,179,8,0.1)', color: '#eab308', fontWeight: 600 }}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(234,179,8,0.06)', borderTop: '1px solid rgba(234,179,8,0.2)', padding: '56px 5vw', textAlign: 'center' }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 12 }}>Ready to Partner?</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 28, fontSize: 15 }}>Email us with your target URL, niche, and preferred option.</p>
        <a href="mailto:hello@thevoiceofcash.com?subject=JewSA%20Advertising%20Inquiry"
          style={{ display: 'inline-block', background: '#eab308', color: '#1A1A2E', fontWeight: 900, fontSize: 14, padding: '16px 40px', textDecoration: 'none', letterSpacing: '1px' }}>
          EMAIL TO GET STARTED
        </a>
      </div>
    </main>
  )
}

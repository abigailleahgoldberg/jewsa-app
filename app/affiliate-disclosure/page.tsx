import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Affiliate Disclosure | JewSA', description: 'FTC affiliate disclosure for JewSA.' };
const GOLD = '#C9A84C';
export default function AffiliateDisclosure() {
  return (
    <main style={{ background: '#FAF7F0', color: '#0A1628', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: GOLD, marginBottom: '0.5rem' }}>Affiliate Disclosure</h1>
        <p style={{ color: '#0A1628', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>Last updated: March 2026</p>
        {[
          { h: 'FTC Compliance Notice', b: 'In accordance with the Federal Trade Commission (FTC) guidelines, we disclose that JewSA participates in affiliate marketing programs. This means we may earn commissions when you click on links to products or services and make a purchase.' },
          { h: 'How Affiliate Links Work', b: 'Some links on this website are affiliate links. When you click these links and make a purchase, we receive a small commission at no additional cost to you. This helps support our operations and allows us to continue providing free content.' },
          { h: 'Our Commitment', b: 'Affiliate relationships do not influence our content or recommendations. We only recommend products and services we believe provide value. Our opinions are our own.' },
          { h: 'Identifying Affiliate Links', b: 'We strive to clearly identify affiliate relationships. Posts containing affiliate links will include a disclosure notice.' },
          { h: 'Questions?', b: 'Contact us at thevoiceofcash@gmail.com' },
        ].map(s => (
          <section key={s.h} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: GOLD, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: `1px solid #e8e0d0` }}>{s.h}</h2>
            <p style={{ lineHeight: 1.8, opacity: 0.85 }}>{s.b}</p>
          </section>
        ))}
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e8e0d0' }}>
          <a href="/" style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}>← Back to Home</a>
        </div>
      </div>
    </main>
  );
}

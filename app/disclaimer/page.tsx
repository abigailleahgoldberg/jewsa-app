import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Disclaimer | JewSA', description: 'Disclaimer for JewSA.' };
const GOLD = '#C9A84C';
export default function Disclaimer() {
  return (
    <main style={{ background: '#FAF7F0', color: '#0A1628', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: GOLD, marginBottom: '0.5rem' }}>Disclaimer</h1>
        <p style={{ color: '#0A1628', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>Last updated: March 2026</p>
        {[
          { h: 'Cultural Content', b: 'JewSA provides educational content about Jewish American culture and community. This content does not represent the official position of any synagogue, denomination, or Jewish organization. We are not rabbis or ordained religious authorities.' },
          { h: 'Product Information', b: 'Product descriptions, materials, and images are provided for informational purposes. Colors may vary from screen to print. We strive for accuracy but cannot guarantee all product details are error-free.' },
          { h: 'Not Professional Advice', b: 'Nothing on this website constitutes religious, legal, medical, or professional advice.' },
          { h: 'AI-Generated Content', b: 'Portions of this website\'s content are generated or assisted by artificial intelligence. While we review content for accuracy and cultural sensitivity, it may contain errors.' },
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

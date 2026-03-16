import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'DMCA Notice | JewSA', description: 'DMCA takedown policy for JewSA.' };
const GOLD = '#C9A84C';
export default function DMCA() {
  return (
    <main style={{ background: '#FAF7F0', color: '#0A1628', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: GOLD, marginBottom: '0.5rem' }}>DMCA Notice &amp; Takedown Policy</h1>
        <p style={{ color: '#0A1628', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>Last updated: March 2026</p>
        <div style={{ background: 'rgba(10,22,40,0.05)', border: '1px solid #e8e0d0', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            JewSA respects intellectual property rights. If you believe content on this site infringes your copyright, please send a DMCA takedown notice to:
          </p>
          <p style={{ lineHeight: 1.8, fontWeight: 600 }}>DMCA Agent: The Voice of Cash</p>
          <p style={{ lineHeight: 1.8 }}>Email: <a href="mailto:thevoiceofcash@gmail.com" style={{ color: GOLD }}>thevoiceofcash@gmail.com</a></p>
        </div>
        {[
          { h: 'Your Notice Must Include', b: '1. Identification of the copyrighted work claimed to be infringed\n2. Identification of the material to be removed, with sufficient detail to locate it\n3. Your contact information (name, address, phone, email)\n4. A statement that you have a good faith belief the use is not authorized\n5. A statement under penalty of perjury that the information is accurate\n6. Your physical or electronic signature' },
          { h: 'Counter-Notification', b: 'If you believe your content was wrongly removed, you may submit a counter-notification with the required information under 17 U.S.C. § 512(g).' },
        ].map(s => (
          <section key={s.h} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: GOLD, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: `1px solid #e8e0d0` }}>{s.h}</h2>
            <p style={{ lineHeight: 1.8, opacity: 0.85, whiteSpace: 'pre-line' }}>{s.b}</p>
          </section>
        ))}
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e8e0d0' }}>
          <a href="/" style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}>← Back to Home</a>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Return & Refund Policy | JewSA', description: 'Return and refund policy for JewSA products.' };
const GOLD = '#C9A84C';
export default function Returns() {
  return (
    <main style={{ background: '#FAF7F0', color: '#0A1628', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: GOLD, marginBottom: '0.5rem' }}>Return &amp; Refund Policy</h1>
        <p style={{ color: '#0A1628', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>Last updated: March 2026</p>
        {[
          { h: 'Our Products', b: 'Our products are printed on demand by our fulfillment partner, Printful. Because each item is custom-made to order, our return policy follows specific guidelines.' },
          { h: 'Returns & Exchanges', b: 'We accept returns for damaged or defective items within 30 days of delivery. To initiate a return, contact us at thevoiceofcash@gmail.com with your order number and photos of the issue.' },
          { h: 'We Do NOT Accept Returns For', b: '— Items that are not damaged or defective\n— Items washed or worn\n— Items where the wrong size was ordered (please check our size guides)' },
          { h: 'Refund Process', b: 'Once we receive and verify your return, refunds will be processed to your original payment method within 5–10 business days.' },
          { h: 'Shipping Issues', b: 'If your order is lost in transit, contact us within 30 days of the expected delivery date. We will work with our shipping partner to resolve the issue.' },
          { h: 'Contact', b: 'Email: thevoiceofcash@gmail.com' },
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

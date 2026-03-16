import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Contact | JewSA', description: 'Get in touch with JewSA.' };
const GOLD = '#C9A84C';
export default function Contact() {
  return (
    <main style={{ background: '#FAF7F0', color: '#0A1628', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: GOLD, marginBottom: '0.5rem' }}>Contact Us</h1>
        <p style={{ color: '#0A1628', opacity: 0.6, marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.7 }}>
          How can we help? Whether you have a question about an order, want to collaborate, or just want to say shalom — we want to hear from you.
        </p>
        <div style={{ background: 'rgba(10,22,40,0.05)', border: '1px solid #e8e0d0', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: GOLD, marginBottom: '1rem' }}>Get In Touch</h2>
          <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: GOLD, textDecoration: 'none' }}>thevoiceofcash@gmail.com</a>
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
            <strong>Orders &amp; Returns:</strong> Include your order number and we will get back to you within 1–2 business days.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            <strong>Follow Us:</strong>{' '}
            <a href="https://x.com/jewsaofficial" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: 'none' }}>@jewsaofficial on X (Twitter)</a>
          </p>
        </div>
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e8e0d0' }}>
          <a href="/" style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}>← Back to Home</a>
        </div>
      </div>
    </main>
  );
}

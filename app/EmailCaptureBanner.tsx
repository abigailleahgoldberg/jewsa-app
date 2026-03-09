'use client';

import { useState } from 'react';

export default function EmailCaptureBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [code, setCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setCode(data.code);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{
        background: '#111', color: '#fff', padding: '32px 24px',
        textAlign: 'center', borderRadius: '12px', margin: '0 0 32px',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '8px' }}>✅</div>
        <div style={{ fontWeight: '800', fontSize: '18px', marginBottom: '4px' }}>You're mishpokhe now.</div>
        <div style={{ color: '#aaa', fontSize: '14px', marginBottom: '16px' }}>Check your inbox — your 10% off is on the way.</div>
        <div style={{
          display: 'inline-block', background: '#fff', color: '#111',
          fontWeight: '900', fontSize: '24px', letterSpacing: '4px',
          padding: '12px 24px', borderRadius: '6px',
        }}>{code}</div>
      </div>
    );
  }

  return (
    <div style={{
      background: '#111', color: '#fff',
      padding: '40px 24px', textAlign: 'center',
      borderRadius: '12px', margin: '0 0 32px',
    }}>
      <div style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888', marginBottom: '10px' }}>
        Join the mishpokhe
      </div>
      <h2 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 8px', letterSpacing: '-0.3px' }}>
        Get 10% off your first order.
      </h2>
      <p style={{ color: '#888', fontSize: '14px', margin: '0 0 24px', lineHeight: '1.6' }}>
        New drops, stories, and the good stuff. No schmaltz.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          style={{
            flex: 1, padding: '12px 16px', borderRadius: '6px',
            border: '1px solid #333', background: '#1a1a1a', color: '#fff',
            fontSize: '14px', outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            padding: '12px 20px', background: '#fff', color: '#111',
            border: 'none', borderRadius: '6px', fontWeight: '700',
            fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap',
          }}
        >
          {status === 'loading' ? '...' : 'Get 10% Off'}
        </button>
      </form>
      {status === 'error' && (
        <p style={{ color: '#ff6666', fontSize: '13px', marginTop: '10px' }}>
          Something went wrong. Try again.
        </p>
      )}
    </div>
  );
}

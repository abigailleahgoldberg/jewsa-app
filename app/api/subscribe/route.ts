import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const JEWSA_LIST_ID = 3;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // Add contact to Brevo
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [JEWSA_LIST_ID],
        updateEnabled: true,
        attributes: {
          SOURCE: 'jewsa_website',
          SIGNUP_DATE: new Date().toISOString().split('T')[0],
        },
      }),
    });

    if (res.status === 201 || res.status === 204) {
      // Send welcome email with 10% off code
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'JewSA', email: 'abigailleahgoldberg@gmail.com' },
          to: [{ email }],
          subject: 'Welcome to JewSA — here\'s your 10% off 🎉',
          htmlContent: `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #fff; color: #111;">
  <div style="font-size: 32px; margin-bottom: 8px;">✡️</div>
  <h1 style="font-size: 24px; font-weight: 800; margin: 0 0 8px;">Welcome to JewSA.</h1>
  <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
    You're in. You're mishpokhe now.
  </p>
  <div style="background: #111; color: #fff; border-radius: 8px; padding: 24px; margin-bottom: 24px; text-align: center;">
    <div style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; opacity: 0.6; margin-bottom: 8px;">Your welcome discount</div>
    <div style="font-size: 36px; font-weight: 900; letter-spacing: 4px;">MISHPOKHE10</div>
    <div style="font-size: 13px; opacity: 0.6; margin-top: 8px;">10% off your first order</div>
  </div>
  <a href="https://jewsa.com/products" style="display: block; background: #fff; color: #111; border: 2px solid #111; border-radius: 6px; padding: 14px 24px; text-align: center; font-weight: 700; text-decoration: none; margin-bottom: 24px;">Shop JewSA →</a>
  <p style="color: #888; font-size: 14px; line-height: 1.6;">
    We'll send you the good stuff — new drops, stories, and the occasional message from our Jewish mother. Nothing you'll want to unsubscribe from. Probably.
  </p>
  <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;"/>
  <p style="color: #bbb; font-size: 12px;">
    JewSA · Made in America, for the hyphenated. ·
    <a href="https://jewsa.com" style="color: #bbb;">jewsa.com</a>
  </p>
</body>
</html>
          `,
        }),
      });

      return NextResponse.json({ success: true, code: 'MISHPOKHE10' });
    }

    const data = await res.json();
    // Contact already exists — still return success
    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true, code: 'MISHPOKHE10', existing: true });
    }

    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

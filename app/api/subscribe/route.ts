import { NextRequest, NextResponse } from 'next/server';

const JEWSA_LIST_ID = 3;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const brevoKey = process.env.BREVO_API_KEY;
    if (!brevoKey) {
      console.warn('BREVO_API_KEY not set, skipping subscription');
      return NextResponse.json({ success: true, code: 'MISHPOKHE10' });
    }

    // Add contact to Brevo
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': brevoKey,
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
      // Send welcome email with coupon to subscriber
      const htmlContent =
        '<div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif;">' +
        '<div style="background:#0B1F3A;padding:32px;text-align:center;">' +
        '<h1 style="color:#C9A84C;font-size:28px;margin:0;letter-spacing:2px;">JewSA</h1>' +
        '</div>' +
        '<div style="padding:40px 32px;background:#ffffff;text-align:center;">' +
        '<h2 style="color:#0B1F3A;font-size:22px;margin-bottom:16px;">Mazel tov! You\'re officially part of the tribe.</h2>' +
        '<p style="color:#333333;font-size:16px;line-height:1.6;margin-bottom:24px;">As a thank you for joining, here\'s 10% off your first order:</p>' +
        '<div style="background:#f9f7f0;border:2px dashed #C9A84C;padding:24px;margin:24px 0;display:inline-block;">' +
        '<p style="color:#333333;font-size:14px;margin:0 0 8px;">Your discount code:</p>' +
        '<p style="color:#C9A84C;font-size:32px;font-weight:900;letter-spacing:4px;margin:0;">MISHPOKHE10</p>' +
        '</div>' +
        '<p style="color:#333333;font-size:14px;margin:24px 0;">Use this code at checkout for 10% off your entire order.</p>' +
        '<a href="https://jewsa.com/#shop" style="display:inline-block;background:#C9A84C;color:#0B1F3A;font-weight:900;font-size:16px;padding:16px 40px;text-decoration:none;letter-spacing:1px;">SHOP NOW</a>' +
        '</div>' +
        '<div style="padding:24px 32px;background:#0B1F3A;text-align:center;">' +
        '<p style="color:#C9A84C;font-size:12px;margin:0;">Jewish-American pride merch. Punny. Proud. Perfect.</p>' +
        '<p style="color:#C9A84C;font-size:11px;margin:8px 0 0;opacity:0.6;">You received this because you subscribed at jewsa.com</p>' +
        '</div>' +
        '</div>';

      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': brevoKey,
        },
        body: JSON.stringify({
          sender: { name: 'JewSA', email: 'abigailleahgoldberg@gmail.com' },
          to: [{ email }],
          subject: 'Welcome to the Tribe! Here\'s 10% Off',
          htmlContent: htmlContent,
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

import { NextResponse } from 'next/server';
import { blogPosts } from '../blog/data';

export async function GET() {
  const siteUrl = 'https://jewsa.com';
  const siteName = 'JewSA';
  const siteDescription = 'JewSA — Jewish American Culture, Community & Commerce. Where pride meets punchlines.';

  const items = blogPosts
    .slice(0, 20)
    .map((post) => {
      const pubDate = post.date ? new Date(post.date).toUTCString() : new Date().toUTCString();
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteName}</title>
    <link>${siteUrl}</link>
    <description>${siteDescription}</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

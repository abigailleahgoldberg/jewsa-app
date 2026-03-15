import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jewsa.com'
  const lastModified = new Date()

  const holidaySlugs = [
    'rosh-hashanah', 'yom-kippur', 'sukkot', 'hanukkah',
    'purim', 'passover', 'shavuot', 'tu-bishvat',
  ]

  const giftSlugs = [
    'hanukkah', 'passover', 'bar-mitzvah', 'bat-mitzvah',
    'rosh-hashanah', 'wedding', 'shabbat', 'just-because',
  ]

  const cultureSlugs = [
    'history-of-jews-in-america',
    'famous-jewish-americans',
    'jewish-humor-explained',
    'guide-to-your-jewish-neighbor',
    'jewish-food-in-america',
  ]

  const blogSlugs = [
    'jewish-guilt-superpower',
    'best-jewish-delis-america',
    'what-non-jews-get-wrong-passover',
    'jews-american-fashion-history',
    'hamsa-most-underrated-jewelry-symbol',
    'funniest-jewish-expressions-explained',
    'jewish-american-comedy-shaped-culture',
    'hanukkah-vs-christmas-guide-for-gentiles',
    'jewish-american-kitchen-dishes',
    'why-every-jew-needs-a-good-tallit',
    'bar-bat-mitzvah-gifts-that-make-sense',
    'rise-of-jewish-pride-merch',
  ]

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/holidays`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/calendar`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gifts`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/daily-verse`, lastModified, changeFrequency: 'daily', priority: 0.7 },
    { url: `${baseUrl}/culture`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cart`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'daily', priority: 0.8 },
    ...holidaySlugs.map(slug => ({
      url: `${baseUrl}/holidays/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...giftSlugs.map(slug => ({
      url: `${baseUrl}/gifts/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...cultureSlugs.map(slug => ({
      url: `${baseUrl}/culture/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...blogSlugs.map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}

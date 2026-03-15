import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '../data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | JewSA Blog`,
    description: post.excerpt.slice(0, 160),
  }
}

const categoryColors: Record<string, string> = {
  culture: 'bg-blue-900 text-blue-100',
  humor: 'bg-yellow-700 text-yellow-100',
  history: 'bg-purple-900 text-purple-100',
  style: 'bg-green-900 text-green-100',
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function getRelatedPosts(slug: string, category: string) {
  const same = blogPosts.filter(p => p.slug !== slug && p.category === category);
  const others = blogPosts.filter(p => p.slug !== slug && p.category !== category);
  return [...same, ...others].slice(0, 3);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()
  const related = getRelatedPosts(slug, post.category)

  return (
    <main className="min-h-screen bg-[#1A1A2E] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-10 text-sm font-semibold"
        >
          &larr; Back to Blog
        </Link>

        <article>
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide ${categoryColors[post.category]}`}>
                {post.category}
              </span>
              <span className="text-gray-500 text-xs">{post.readTime} min read</span>
            </div>
            <h1 className="text-4xl font-bold text-yellow-400 leading-tight mb-4">{post.title}</h1>
            <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-gray-500 text-sm border-t border-yellow-400/10 pt-4">
              <span>By <span className="text-gray-300 font-semibold">The JewSA Crew</span></span>
              <span>&bull;</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </header>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-16 pt-8 border-t border-yellow-400/20">
          <Link
            href="/blog"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-semibold"
          >
            &larr; Back to all posts
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block border border-yellow-400/10 hover:border-yellow-400/30 transition-colors p-5 rounded"
                >
                  <span className={`text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide inline-block mb-3 ${categoryColors[r.category]}`}>
                    {r.category}
                  </span>
                  <h3 className="text-white font-bold text-sm leading-snug">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .blog-content h2 {
          color: #facc15;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content p {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .blog-content a {
          color: #facc15;
          text-decoration: underline;
        }
      `}</style>
    </main>
  )
}


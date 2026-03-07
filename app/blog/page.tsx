import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from './data'

export const metadata: Metadata = {
  title: 'JewSA Blog | Jewish-American Culture & Humor',
  description: 'Culture, humor, history, and style from a Jewish-American perspective. The JewSA blog covers delis, Yiddish, comedy, fashion, and Jewish pride.',
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

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="min-h-screen bg-[#1A1A2E] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">The JewSA Blog</h1>
          <p className="text-xl text-gray-300">Culture, humor, and Jewish-American pride</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((post) => (
            <article
              key={post.slug}
              className="bg-[#0f0f1e] border border-yellow-400/20 rounded-xl overflow-hidden hover:border-yellow-400/60 transition-all duration-300 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime} min read</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-3 leading-snug">{post.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-yellow-400/10">
                  <span className="text-gray-500 text-xs">{formatDate(post.date)}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}


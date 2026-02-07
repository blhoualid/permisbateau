import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Blog Permis Bateau Metz | Conseils, Guides et Actualit\u00e9s',
  description:
    'Retrouvez nos articles, guides et conseils pour r\u00e9ussir votre permis bateau \u00e0 Metz. R\u00e9glementation, tarifs, astuces de navigation sur la Moselle.',
  alternates: {
    canonical: 'https://permis-bateau-metz.fr/blog',
  },
  openGraph: {
    title: 'Blog Permis Bateau Metz | Guides & Conseils Nautiques',
    description:
      'Articles et guides pour r\u00e9ussir votre permis bateau \u00e0 Metz. Navigation sur la Moselle, tarifs, r\u00e9glementation.',
    url: 'https://permis-bateau-metz.fr/blog',
  },
}

const blogBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://permis-bateau-metz.fr',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://permis-bateau-metz.fr/blog',
    },
  ],
}

export default function BlogPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const categories = [...new Set(articles.map((a) => a.category))]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="gradient-navy pt-32 pb-20 px-4">
        <div className="container-custom text-center">
          <span className="inline-block text-ocean-300 font-semibold text-sm uppercase tracking-wider mb-3">
            Blog
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {"Guides & Conseils Nautiques"}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {"Articles, guides pratiques et actualit\u00e9s pour pr\u00e9parer votre permis bateau et naviguer en toute s\u00e9r\u00e9nit\u00e9."}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="container-custom px-4 py-4 flex gap-3 overflow-x-auto">
          <span className="px-4 py-2 bg-navy-900 text-white rounded-full text-sm font-medium whitespace-nowrap">
            Tous
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Articles grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card group"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ocean-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <span>&bull;</span>
                    <span>{article.readTime} de lecture</span>
                  </div>

                  <h2 className="font-heading text-xl font-bold text-navy-900 mb-3 group-hover:text-ocean-600 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-ocean-600 font-semibold text-sm">
                    {"Lire l'article"}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">
            {"Pr\u00eat \u00e0 vous lancer ?"}
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            {"Passez de la th\u00e9orie \u00e0 la pratique. Inscrivez-vous \u00e0 notre formation."}
          </p>
          <Link href="/#contact" className="btn-primary">
            Demander un rappel gratuit
          </Link>
        </div>
      </section>
    </>
  )
}

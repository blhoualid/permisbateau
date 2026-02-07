import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/data/articles'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://permis-bateau-metz.fr/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://permis-bateau-metz.fr/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      authors: ['Permis Bateau Metz'],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image],
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: `https://permis-bateau-metz.fr${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'Permis Bateau Metz',
      url: 'https://permis-bateau-metz.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Permis Bateau Metz',
      logo: {
        '@type': 'ImageObject',
        url: 'https://permis-bateau-metz.fr/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://permis-bateau-metz.fr/blog/${article.slug}`,
    },
  }

  const breadcrumbSchema = {
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
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://permis-bateau-metz.fr/blog/${article.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="gradient-navy pt-32 pb-16 px-4">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/60 truncate">{article.title}</span>
          </nav>

          <div className="inline-block bg-ocean-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {article.category}
          </div>

          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-white/50 text-sm">
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
        </div>
      </section>

      {/* Article content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main content */}
            <div className="lg:col-span-3">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* CTA in article */}
              <div className="mt-12 p-8 bg-gradient-to-br from-ocean-50 to-navy-50 rounded-2xl border border-ocean-100">
                <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                  Envie de passer votre permis bateau ?
                </h3>
                <p className="text-gray-600 mb-4">
                  Inscrivez-vous d&egrave;s maintenant et b&eacute;n&eacute;ficiez de nos tarifs comp&eacute;titifs d&egrave;s 299&euro;.
                </p>
                <Link href="/#contact" className="btn-primary !py-3">
                  Demander un rappel gratuit
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Quick info card */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-navy-900 text-sm uppercase tracking-wider mb-4">
                    En r&eacute;sum&eacute;
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-ocean-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime} de lecture
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-ocean-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {article.category}
                    </li>
                  </ul>
                </div>

                {/* CTA card */}
                <div className="gradient-navy rounded-xl p-6 text-center">
                  <p className="text-white font-bold text-lg mb-2">D&egrave;s 299&euro;</p>
                  <p className="text-white/60 text-sm mb-4">
                    Permis c&ocirc;tier ou fluvial
                  </p>
                  <Link
                    href="/#contact"
                    className="btn-primary !py-2 !px-4 !text-sm w-full"
                  >
                    S&apos;inscrire
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="font-heading text-2xl font-bold text-navy-900 mb-8">
            Articles similaires
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="card group"
              >
                <div className="aspect-video bg-gradient-to-br from-ocean-100 to-navy-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-ocean-300 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-ocean-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {a.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-navy-900 mb-2 group-hover:text-ocean-600 transition-colors line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

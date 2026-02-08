import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Blog \u2014 Guides et Conseils Nautiques',
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
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-4">
            {"Articles, guides pratiques et actualit\u00e9s pour pr\u00e9parer votre permis bateau et naviguer en toute s\u00e9r\u00e9nit\u00e9."}
          </p>
          <p className="text-white/40 text-base max-w-3xl mx-auto">
            {"Retrouvez ici tout ce qu'il faut savoir avant de vous lancer dans la formation au permis plaisance \u00e0 Metz et en Moselle. Nos articles couvrent les diff\u00e9rents types de permis (c\u00f4tier, fluvial, hauturier), les tarifs des formations, la r\u00e9glementation en vigueur, les erreurs \u00e0 \u00e9viter \u00e0 l'examen, les itin\u00e9raires de navigation sur la Moselle, ainsi que des conseils pratiques pour r\u00e9ussir du premier coup. Chaque guide est r\u00e9dig\u00e9 par notre \u00e9quipe et mis \u00e0 jour r\u00e9guli\u00e8rement pour refl\u00e9ter les derni\u00e8res \u00e9volutions r\u00e9glementaires."}
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

                  <div className="mt-4 text-ocean-600 font-semibold text-sm">
                    {"Lire l'article \u2192"}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">
            {"Tout savoir sur le permis bateau \u00e0 Metz"}
          </h2>
          <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
            <p>
              {"Le permis bateau, \u00e9galement appel\u00e9 permis plaisance, est obligatoire en France pour piloter un bateau \u00e0 moteur de plus de 6 chevaux (4,5 kW). \u00c0 Metz, en Moselle, les formations sont accessibles toute l'ann\u00e9e aupr\u00e8s de centres agr\u00e9\u00e9s par la pr\u00e9fecture. Trois types de permis existent : le permis c\u00f4tier (option c\u00f4ti\u00e8re) pour la navigation en mer jusqu'\u00e0 6 milles d'un abri, le permis fluvial (th\u00e9orie eaux int\u00e9rieures) pour les rivi\u00e8res et canaux, et l'extension hauturi\u00e8re pour la navigation au large sans limite de distance."}
            </p>
            <p>
              {"La formation comprend une partie th\u00e9orique (5 \u00e0 8 heures de cours en salle ou en e-learning) et une partie pratique (3h30 de navigation sur la Moselle encadr\u00e9e par un moniteur dipl\u00f4m\u00e9). L'examen th\u00e9orique est un QCM de 40 questions pass\u00e9 dans un centre La Poste agr\u00e9\u00e9. Le r\u00e9sultat est disponible sous 48 heures. Le permis bateau est valable \u00e0 vie et ne n\u00e9cessite aucun renouvellement."}
            </p>
            <p>
              {"En Moselle, la navigation sur la Moselle canalis\u00e9e offre un cadre exceptionnel pour la pratique. Le fleuve traverse Metz et ses environs, avec un r\u00e9seau d'\u00e9cluses automatis\u00e9es, des haltes nautiques et un acc\u00e8s aux voies navigables europ\u00e9ennes via le Luxembourg et l'Allemagne. Que vous souhaitiez naviguer pour le loisir, la p\u00eache ou les vacances, le permis bateau vous ouvre un large \u00e9ventail de possibilit\u00e9s sur les eaux int\u00e9rieures et en mer."}
            </p>
            <p>
              {"Notre blog rassemble des guides d\u00e9taill\u00e9s sur chaque aspect de la formation : comment choisir entre le permis c\u00f4tier et le permis fluvial, combien co\u00fbte r\u00e9ellement la formation en 2026, quelles sont les erreurs \u00e0 \u00e9viter le jour de l'examen, et quelles r\u00e8gles de navigation sont en vigueur cette ann\u00e9e. Nous vous proposons \u00e9galement un guide pratique pour naviguer sur la Moselle au d\u00e9part de Metz, avec les itin\u00e9raires recommand\u00e9s, les \u00e9cluses \u00e0 conna\u00eetre et les points d'int\u00e9r\u00eat le long du parcours."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">
            {"Pr\u00eat \u00e0 vous lancer ?"}
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            {"Passez de la th\u00e9orie \u00e0 la pratique. Demandez \u00e0 \u00eatre rappel\u00e9 gratuitement par un centre agr\u00e9\u00e9 de Metz et environs. Formation permis bateau c\u00f4tier, fluvial ou hauturier."}
          </p>
          <Link href="/#contact" className="btn-primary">
            Demander un rappel gratuit
          </Link>
        </div>
      </section>
    </>
  )
}

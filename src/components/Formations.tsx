import Link from 'next/link'

const formations = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" className="stroke-ocean-500" strokeWidth="2" />
        <path d="M12 30 Q18 20 24 28 Q30 20 36 30" className="stroke-ocean-600" strokeWidth="2.5" fill="none" />
        <path d="M24 10 L28 22 H20 Z" className="fill-ocean-500" />
      </svg>
    ),
    title: 'Permis Côtier',
    description:
      'Naviguez en mer jusqu\'à 6 milles d\'un abri et sur toutes les eaux intérieures. Le permis le plus polyvalent.',
    features: [
      '5 à 8h de théorie en salle ou e-learning',
      '3h30 de pratique sur la Moselle',
      'Accès plateforme révision illimité',
      'Examen en centre La Poste',
    ],
    price: '299',
    popular: true,
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="14" width="40" height="20" rx="4" className="stroke-ocean-500" strokeWidth="2" />
        <path d="M4 24 H44" className="stroke-ocean-400" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M20 10 L24 14 L28 10" className="stroke-ocean-600" strokeWidth="2" fill="none" />
        <circle cx="14" cy="24" r="3" className="fill-ocean-500" />
        <circle cx="34" cy="24" r="3" className="fill-ocean-500" />
      </svg>
    ),
    title: 'Permis Fluvial',
    description:
      'Spécialisé pour les rivières, canaux et lacs. Idéal pour naviguer sur la Moselle et les voies navigables.',
    features: [
      '3 à 6h de théorie spécifique',
      '3h30 de pratique avec passage d\'écluse',
      'Réglementation eaux intérieures',
      'Examen en centre La Poste',
    ],
    price: '299',
    popular: false,
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" className="stroke-ocean-500" strokeWidth="2" />
        <path d="M24 6 L24 42 M6 24 L42 24" className="stroke-ocean-300" strokeWidth="1" />
        <path d="M24 4 L24 8 M24 40 L24 44 M4 24 L8 24 M40 24 L44 24" className="stroke-ocean-600" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" className="fill-ocean-500" />
        <path d="M24 24 L32 16" className="stroke-ocean-700" strokeWidth="2" />
      </svg>
    ),
    title: 'Extension Hauturière',
    description:
      'Naviguez au-delà des 6 milles, sans limite de distance. Navigation astronomique et météo avancée.',
    features: [
      'Formation théorique approfondie',
      'Navigation astronomique & électronique',
      'Météo marine avancée',
      'Examen théorique uniquement',
    ],
    price: '379',
    popular: false,
  },
]

export default function Formations() {
  return (
    <section id="formations" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Nos formations
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-900 mb-4">
            Choisissez votre permis bateau
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trois formations adaptées à vos projets de navigation. Toutes incluent la théorie, la pratique et l&apos;accès à notre plateforme e-learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {formations.map((formation) => (
            <div
              key={formation.title}
              className={`card p-8 relative ${
                formation.popular ? 'ring-2 ring-sand-500 scale-105' : ''
              }`}
            >
              {formation.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sand-500 text-white text-sm font-bold px-4 py-1 rounded-full pulse-badge">
                  Le + populaire
                </div>
              )}

              <div className="mb-6">{formation.icon}</div>

              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-3">
                {formation.title}
              </h3>

              <p className="text-gray-600 mb-6">{formation.description}</p>

              <ul className="space-y-3 mb-8">
                {formation.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-heading font-black text-navy-900">
                    {formation.price}&euro;
                  </span>
                  <span className="text-gray-500 text-sm">/ formation</span>
                </div>
                <Link
                  href="#contact"
                  className={`w-full text-center ${
                    formation.popular ? 'btn-primary' : 'btn-secondary'
                  } !py-3`}
                >
                  S&apos;inscrire
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pack combo */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="gradient-navy rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-block bg-sand-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                -149&euro; d&apos;économie
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                Pack Côtier + Fluvial
              </h3>
              <p className="text-white/70 max-w-md">
                Les deux permis en une seule formation. Naviguez partout en France : mer, rivières, canaux et lacs.
              </p>
            </div>
            <div className="text-center flex-shrink-0">
              <div className="text-5xl font-heading font-black text-white mb-1">
                449&euro;
              </div>
              <div className="text-white/50 text-sm line-through mb-4">
                598&euro;
              </div>
              <Link href="#contact" className="btn-primary">
                Je choisis le pack
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

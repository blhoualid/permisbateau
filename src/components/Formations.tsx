import Link from 'next/link'

const formations = [
  {
    iconLabel: 'MER',
    title: 'Permis Bateau - Option C\u00f4ti\u00e8re',
    description:
      "Permet de naviguer en mer jusqu'\u00e0 6 milles d'un abri et sur toutes les eaux int\u00e9rieures. Le permis le plus polyvalent.",
    features: [
      '5 \u00e0 8h de th\u00e9orie en salle ou e-learning',
      '3h30 de pratique sur bateau',
      'Acc\u00e8s plateforme de r\u00e9vision',
      'Examen en centre La Poste',
    ],
    price: '445',
  },
  {
    iconLabel: 'EAU',
    title: 'Permis Bateau - Th\u00e9orie Eaux Int\u00e9rieures',
    description:
      'Sp\u00e9cialis\u00e9 pour les rivi\u00e8res, canaux et lacs. Id\u00e9al pour naviguer sur la Moselle et les voies navigables.',
    features: [
      '3 \u00e0 6h de th\u00e9orie sp\u00e9cifique',
      "3h30 de pratique avec passage d'\u00e9cluse",
      'R\u00e9glementation eaux int\u00e9rieures',
      'Examen en centre La Poste',
    ],
    price: '225',
  },
  {
    iconLabel: '360',
    title: 'Permis Bateau - Extension Hauturi\u00e8re',
    description:
      'Permet de naviguer au-del\u00e0 des 6 milles, sans limite de distance. Navigation astronomique et m\u00e9t\u00e9o avanc\u00e9e.',
    features: [
      'Formation th\u00e9orique approfondie',
      'Navigation astronomique & \u00e9lectronique',
      'M\u00e9t\u00e9o marine avanc\u00e9e',
      'Examen th\u00e9orique uniquement',
    ],
    price: '420',
  },
  {
    iconLabel: 'PRO',
    title: 'Cours Pratique - Remise \u00e0 niveau',
    description:
      "S\u00e9ance de pratique encadr\u00e9e pour les titulaires de permis souhaitant reprendre confiance sur l'eau.",
    features: [
      'Session individuelle ou petit groupe',
      "Man\u0153uvres d'accostage et appareillage",
      'Rappels de s\u00e9curit\u00e9',
      'Conditions r\u00e9elles de navigation',
    ],
    price: '90',
  },
]

export default function Formations() {
  return (
    <section id="formations" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Les formations
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-900 mb-4">
            Quel permis bateau choisir ?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            {"Comparez les diff\u00e9rentes formules propos\u00e9es par les centres agr\u00e9\u00e9s de la r\u00e9gion de Metz. Tarifs indicatifs constat\u00e9s en Moselle."}
          </p>
          <p className="text-gray-500 text-base max-w-3xl mx-auto">
            {"Chaque formation inclut des cours th\u00e9oriques en salle ou en e-learning, une s\u00e9ance pratique sur la Moselle avec un moniteur dipl\u00f4m\u00e9 et l\u2019acc\u00e8s \u00e0 une plateforme de r\u00e9vision en ligne. L\u2019examen th\u00e9orique se passe dans un centre La Poste agr\u00e9\u00e9, disponible presque tous les jours \u00e0 Metz."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {formations.map((formation) => (
            <div
              key={formation.title}
              className="card p-8 relative flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center font-bold text-sm mb-6">
                {formation.iconLabel}
              </div>

              <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                {formation.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6">{formation.description}</p>

              <ul className="space-y-3 mb-8">
                {formation.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">{"✓"}</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="text-xs text-gray-400 mb-1">{"Tarif indicatif \u00e0 partir de"}</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-heading font-black text-navy-900">
                    {formation.price}&euro;
                  </span>
                </div>
                <Link
                  href="#contact"
                  className="w-full text-center btn-secondary !py-3"
                >
                  Recevoir un devis
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pack combo */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="gradient-navy rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                {"Option C\u00f4ti\u00e8re + Eaux Int\u00e9rieures"}
              </h3>
              <p className="text-white/70 max-w-md">
                {"Les deux permis en une seule formation. Naviguez partout en France\u00a0: mer, rivi\u00e8res, canaux et lacs."}
              </p>
            </div>
            <div className="text-center flex-shrink-0">
              <p className="text-white/50 text-sm mb-1">{"Tarif indicatif"}</p>
              <div className="text-5xl font-heading font-black text-white mb-4">
                545&euro;
              </div>
              <Link href="#contact" className="btn-primary">
                Recevoir un devis
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/blog/combien-coute-permis-bateau-2026-tarifs-financements" className="text-ocean-600 hover:text-ocean-700 text-sm font-medium underline">
            {"D\u00e9tail complet des tarifs 2026"}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/blog/stage-permis-bateau-accelere-metz-weekend" className="text-ocean-600 hover:text-ocean-700 text-sm font-medium underline">
            {"Stage acc\u00e9l\u00e9r\u00e9 en un week-end"}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/blog/permis-cotier-ou-fluvial-lequel-choisir" className="text-ocean-600 hover:text-ocean-700 text-sm font-medium underline">
            {"C\u00f4tier ou fluvial : lequel choisir ?"}
          </Link>
        </div>

        <p className="text-center text-gray-400 text-xs mt-4">
          {"* Tarifs indicatifs constat\u00e9s aupr\u00e8s des centres agr\u00e9\u00e9s de Metz et environs. Les prix peuvent varier selon le centre partenaire."}
        </p>
      </div>
    </section>
  )
}

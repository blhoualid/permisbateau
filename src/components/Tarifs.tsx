import Link from 'next/link'

export default function Tarifs() {
  return (
    <section id="tarifs" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Tarifs indicatifs
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-900 mb-4">
            {"Combien co\u00fbte le permis bateau \u00e0 Metz\u00a0?"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            {"Voici les tarifs moyens constat\u00e9s aupr\u00e8s des centres agr\u00e9\u00e9s de Metz et environs. Le timbre fiscal et les frais d'examen sont fix\u00e9s par l'\u00c9tat."}
          </p>
          <p className="text-gray-500 text-base max-w-3xl mx-auto">
            {"Le co\u00fbt total du permis bateau comprend trois postes\u00a0: la formation aupr\u00e8s d\u2019un centre agr\u00e9\u00e9 (variable selon l\u2019\u00e9cole), le timbre fiscal obligatoire (achet\u00e9 en ligne sur timbres.impots.gouv.fr) et les frais d\u2019inscription \u00e0 l\u2019examen th\u00e9orique en centre La Poste. Le paiement en plusieurs fois est g\u00e9n\u00e9ralement propos\u00e9 par les centres partenaires."}
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-navy-900">
                <th className="py-4 px-4 font-heading font-bold text-navy-900 text-lg">
                  Formation
                </th>
                <th className="py-4 px-4 font-heading font-bold text-navy-900 text-lg text-center">
                  Formation *
                </th>
                <th className="py-4 px-4 font-heading font-bold text-navy-900 text-lg text-center">
                  Timbre fiscal
                </th>
                <th className="py-4 px-4 font-heading font-bold text-navy-900 text-lg text-center">
                  Examen
                </th>
                <th className="py-4 px-4 font-heading font-bold text-navy-900 text-lg text-center">
                  Total estim&eacute;
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: 'Option C\u00f4ti\u00e8re',
                  formation: '445\u20ac',
                  timbre: '78\u20ac',
                  examen: '30\u20ac',
                  total: '553\u20ac',
                },
                {
                  name: 'Th\u00e9orie Eaux Int\u00e9rieures',
                  formation: '225\u20ac',
                  timbre: '78\u20ac',
                  examen: '30\u20ac',
                  total: '333\u20ac',
                },
                {
                  name: 'Option C\u00f4ti\u00e8re + Eaux Int\u00e9rieures',
                  formation: '545\u20ac',
                  timbre: '156\u20ac',
                  examen: '60\u20ac',
                  total: '761\u20ac',
                },
                {
                  name: 'Extension Hauturi\u00e8re',
                  formation: '420\u20ac',
                  timbre: '38\u20ac',
                  examen: '\u2014',
                  total: '458\u20ac',
                },
                {
                  name: 'Cours Pratique - Remise \u00e0 niveau',
                  formation: '90\u20ac',
                  timbre: '\u2014',
                  examen: '\u2014',
                  total: '90\u20ac',
                },
              ].map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="font-semibold text-navy-900">
                      {row.name}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-gray-700">
                    {row.formation}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500 text-sm">
                    {row.timbre}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500 text-sm">
                    {row.examen}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="font-heading font-bold text-lg text-navy-900">
                      {row.total}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-6">
            {"* Tarifs indicatifs constat\u00e9s aupr\u00e8s des centres de formation agr\u00e9\u00e9s de Metz et environs (2025). Les prix peuvent varier selon le centre partenaire. Le timbre fiscal et les frais d'examen sont fix\u00e9s par l'\u00c9tat."}
          </p>
          <Link href="#contact" className="btn-primary">
            {"Recevoir un devis personnalis\u00e9"}
          </Link>
          <p className="text-gray-400 text-xs mt-3">
            {"Gratuit et sans engagement \u2014 un partenaire vous rappelle sous 24h"}
          </p>
        </div>
      </div>
    </section>
  )
}

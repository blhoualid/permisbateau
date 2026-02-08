import Link from 'next/link'

const steps = [
  {
    number: '1',
    title: 'Faites votre demande',
    description:
      "Remplissez le formulaire en 30 secondes : choisissez votre type de permis (c\u00f4tier, fluvial, hauturier) et vos disponibilit\u00e9s.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Mise en relation',
    description:
      "Votre demande est transmise \u00e0 un centre de formation agr\u00e9\u00e9 en Moselle, adapt\u00e9 \u00e0 vos besoins et votre localisation.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Rappel & inscription',
    description:
      "Un partenaire vous rappelle gratuitement pour r\u00e9pondre \u00e0 vos questions et finaliser votre inscription directement aupr\u00e8s de lui.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

export default function CommentCaMarche() {
  return (
    <section id="comment-ca-marche" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Simple et gratuit
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-900 mb-4">
            {"Comment \u00e7a marche\u00a0?"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {"Trouvez votre formation permis bateau en 3 \u00e9tapes. Service gratuit et sans engagement."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              {/* Step number */}
              <div className="w-16 h-16 rounded-full bg-ocean-500 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-heading font-bold shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-ocean-100 flex items-center justify-center text-ocean-600 mx-auto mb-4">
                {step.icon}
              </div>

              <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#contact" className="btn-primary">
            {"Être rappel\u00e9 gratuitement"}
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            {"Gratuit \u2022 Sans engagement \u2022 Rappel sous 24h par un partenaire agr\u00e9\u00e9"}
          </p>
        </div>
      </div>
    </section>
  )
}

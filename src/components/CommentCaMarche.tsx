import Link from 'next/link'

const steps = [
  {
    number: '1',
    title: 'Faites votre demande',
    description:
      "Remplissez le formulaire en 30 secondes : choisissez votre type de permis (c\u00f4tier, fluvial, hauturier) et vos disponibilit\u00e9s.",
  },
  {
    number: '2',
    title: 'Mise en relation',
    description:
      "Votre demande est transmise \u00e0 un centre de formation agr\u00e9\u00e9 en Moselle, adapt\u00e9 \u00e0 vos besoins et votre localisation.",
  },
  {
    number: '3',
    title: 'Rappel & inscription',
    description:
      "Un partenaire vous rappelle gratuitement pour r\u00e9pondre \u00e0 vos questions et finaliser votre inscription directement aupr\u00e8s de lui.",
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
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            {"Trouvez votre formation permis bateau en 3 \u00e9tapes. Service gratuit et sans engagement."}
          </p>
          <p className="text-gray-500 text-base max-w-3xl mx-auto">
            {"Notre plateforme ind\u00e9pendante vous met en relation avec des centres de formation agr\u00e9\u00e9s en Moselle. Vous ne payez rien pour ce service : le co\u00fbt de la formation est r\u00e9gl\u00e9 directement aupr\u00e8s du centre partenaire qui vous recontacte."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="w-16 h-16 rounded-full bg-ocean-500 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-heading font-bold shadow-lg">
                {step.number}
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

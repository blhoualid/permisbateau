export default function Avantages() {
  const avantages = [
    {
      iconText: '\u2713',
      title: 'Centres agr\u00e9\u00e9s v\u00e9rifi\u00e9s',
      description:
        "Nous travaillons uniquement avec des centres de formation disposant d'un agr\u00e9ment pr\u00e9fectoral en Moselle.",
    },
    {
      iconText: '0\u20ac',
      title: '100% gratuit pour vous',
      description:
        "Le service de mise en relation est enti\u00e8rement gratuit. Vous ne payez que la formation directement aupr\u00e8s du centre partenaire.",
    },
    {
      iconText: 'i',
      title: 'Informations fiables',
      description:
        "Tarifs, programmes, dur\u00e9es : toutes les informations sont v\u00e9rifi\u00e9es et mises \u00e0 jour r\u00e9guli\u00e8rement aupr\u00e8s des centres partenaires.",
    },
    {
      iconText: '57',
      title: 'Proche de chez vous',
      description:
        "Des centres partenaires \u00e0 Metz et dans toute la Moselle : Thionville, Pont-\u00e0-Mousson, Forbach et environs.",
    },
    {
      iconText: '24h',
      title: 'Rappel sous 24h',
      description:
        "D\u00e8s votre demande envoy\u00e9e, un centre partenaire vous rappelle sous 24h pour r\u00e9pondre \u00e0 toutes vos questions.",
    },
    {
      iconText: '7/7',
      title: 'Flexibilit\u00e9 totale',
      description:
        "Stages week-end, cours du soir, formations acc\u00e9l\u00e9r\u00e9es : trouvez la formule qui s'adapte \u00e0 votre emploi du temps.",
    },
  ]

  return (
    <section id="avantages" className="section-padding gradient-navy relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-ocean-300 font-semibold text-sm uppercase tracking-wider mb-3">
            Pourquoi passer par nous
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            {"Votre recherche simplifi\u00e9e"}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-4">
            {"Une plateforme ind\u00e9pendante qui vous aide \u00e0 trouver la formation permis bateau id\u00e9ale \u00e0 Metz et en Moselle."}
          </p>
          <p className="text-white/40 text-base max-w-3xl mx-auto">
            {"Nous s\u00e9lectionnons uniquement des centres disposant d\u2019un agr\u00e9ment pr\u00e9fectoral et v\u00e9rifions r\u00e9guli\u00e8rement la qualit\u00e9 de leurs formations. Notre objectif\u00a0: vous faire gagner du temps en centralisant les informations et en vous orientant vers le centre le mieux adapt\u00e9 \u00e0 votre projet, votre budget et votre emploi du temps."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {avantages.map((avantage) => (
            <div
              key={avantage.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-ocean-500/20 flex items-center justify-center text-ocean-300 text-lg font-bold mb-6 group-hover:bg-ocean-500/30 transition-colors">
                {avantage.iconText}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {avantage.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {avantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

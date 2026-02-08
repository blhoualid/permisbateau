export default function Avantages() {
  const avantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Centres agr\u00e9\u00e9s v\u00e9rifi\u00e9s',
      description:
        "Nous travaillons uniquement avec des centres de formation disposant d'un agr\u00e9ment pr\u00e9fectoral en Moselle.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '100% gratuit pour vous',
      description:
        "Le service de mise en relation est enti\u00e8rement gratuit. Vous ne payez que la formation directement aupr\u00e8s du centre partenaire.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Informations fiables',
      description:
        "Tarifs, programmes, dur\u00e9es : toutes les informations sont v\u00e9rifi\u00e9es et mises \u00e0 jour r\u00e9guli\u00e8rement aupr\u00e8s des centres partenaires.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Proche de chez vous',
      description:
        "Des centres partenaires \u00e0 Metz et dans toute la Moselle : Thionville, Pont-\u00e0-Mousson, Forbach et environs.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Rappel sous 24h',
      description:
        "D\u00e8s votre demande envoy\u00e9e, un centre partenaire vous rappelle sous 24h pour r\u00e9pondre \u00e0 toutes vos questions.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Flexibilit\u00e9 totale',
      description:
        "Stages week-end, cours du soir, formations acc\u00e9l\u00e9r\u00e9es : trouvez la formule qui s'adapte \u00e0 votre emploi du temps.",
    },
  ]

  return (
    <section id="avantages" className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-ocean-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-ocean-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

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
              <div className="w-14 h-14 rounded-xl bg-ocean-500/20 flex items-center justify-center text-ocean-300 mb-6 group-hover:bg-ocean-500/30 transition-colors">
                {avantage.icon}
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

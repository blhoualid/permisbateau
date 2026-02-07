export default function Avantages() {
  const avantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '97% de réussite',
      description:
        'Notre taux de réussite dès le premier passage est bien au-dessus de la moyenne nationale (80%). Notre méthode a fait ses preuves.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Paiement facilit\u00e9',
      description:
        'Paiement en 3 fois sans frais pour toutes nos formations. Plusieurs formules pour s\u2019adapter \u00e0 votre budget.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'E-learning illimité',
      description:
        'Accédez à notre plateforme de révision 24h/24 avec plus de 600 questions, des fiches de cours et un suivi de progression.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Pratique sur la Moselle',
      description:
        'Formation pratique au port de plaisance de Metz. Conditions réelles : écluses, courant, trafic fluvial. Vous serez prêt.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Stages week-end',
      description:
        'Emploi du temps chargé ? Notre stage intensif en un week-end vous permet d\'obtenir votre permis rapidement.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Petits groupes',
      description:
        'Maximum 10 élèves par session pour un accompagnement personnalisé. Votre formateur connaît votre niveau et s\'adapte.',
    },
  ]

  return (
    <section id="avantages" className="section-padding gradient-navy relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ocean-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-ocean-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-ocean-300 font-semibold text-sm uppercase tracking-wider mb-3">
            Pourquoi nous choisir
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            L&apos;excellence nautique à Metz
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Un centre de formation agréé qui place la réussite et la satisfaction de ses élèves au
            premier plan.
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

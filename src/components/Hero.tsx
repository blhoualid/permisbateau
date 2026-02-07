import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-navy wave-separator overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ocean-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean-600/5 rounded-full blur-3xl" />
        {/* Wave pattern */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-10"
          viewBox="0 0 1440 200"
          fill="none"
        >
          <path
            d="M0,100 C240,180 480,20 720,100 C960,180 1200,20 1440,100 L1440,200 L0,200 Z"
            fill="currentColor"
            className="text-ocean-400"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10 px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Inscriptions ouvertes &mdash; Prochaine session : Mars 2026
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Passez votre{' '}
            <span className="text-ocean-300">permis bateau</span>
            <br />
            à <span className="text-sand-400">Metz</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed">
            Formation complète dès{' '}
            <span className="text-sand-400 font-bold">299&euro;</span>.
            Cours théoriques + pratique sur la Moselle.
          </p>

          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Centre agréé &bull; 97% de réussite &bull; Stages week-end disponibles
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="#contact" className="btn-primary text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Être rappelé gratuitement
            </Link>
            <Link href="#tarifs" className="btn-outline text-lg">
              Voir les tarifs
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: '97%', label: 'Taux de réussite' },
              { number: '500+', label: 'Élèves formés' },
              { number: '299€', label: 'Dès seulement' },
              { number: '4.9/5', label: 'Avis Google' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-black text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

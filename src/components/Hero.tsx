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
              {"Plateforme ind\u00e9pendante \u2014 Mise en relation gratuite"}
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Trouvez votre{' '}
            <span className="text-ocean-300">permis bateau</span>
            <br />
            {"à"} <span className="text-sand-400">Metz</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed">
            {"Comparez les formations c\u00f4tier, fluvial et hauturier en Moselle."}
          </p>

          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            {"Informations, tarifs indicatifs et mise en relation avec des centres agr\u00e9\u00e9s pr\u00e8s de chez vous."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#contact" className="btn-primary text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {"Être rappel\u00e9 gratuitement"}
            </Link>
            <Link href="#formations" className="btn-outline text-lg">
              Comparer les formules
            </Link>
          </div>

          <p className="text-white/40 text-sm">
            {"Plateforme ind\u00e9pendante \u2014 mise en relation avec des partenaires locaux agr\u00e9\u00e9s."}
          </p>
        </div>
      </div>
    </section>
  )
}

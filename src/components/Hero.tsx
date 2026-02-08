import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-navy wave-separator overflow-hidden">
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
            {"\u00e0"} <span className="text-sand-400">Metz</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-2xl mx-auto leading-relaxed">
            {"Comparez les formations c\u00f4tier, fluvial et hauturier en Moselle. Tarifs, programmes et centres agr\u00e9\u00e9s \u00e0 port\u00e9e de main."}
          </p>

          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            {"Service gratuit et sans engagement. Remplissez le formulaire, recevez un rappel sous 24h d\u2019un centre partenaire agr\u00e9\u00e9 de Metz et environs. Permis c\u00f4tier d\u00e8s 445\u20ac, fluvial d\u00e8s 225\u20ac."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#contact" className="btn-primary text-lg">
              {"\u00catre rappel\u00e9 gratuitement"}
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

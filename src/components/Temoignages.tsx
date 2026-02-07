const temoignages = [
  {
    name: 'Sophie M.',
    location: 'Metz',
    permis: 'Option Côtière',
    rating: 5,
    text: "Formation au top ! J'ai eu mon permis côtier du premier coup grâce aux cours très bien structurés et à la pratique sur la Moselle. L'équipe est super pédagogue et patiente. Je recommande à 100%.",
  },
  {
    name: 'Thomas L.',
    location: 'Longeville-lès-Metz',
    permis: 'Côtière + Eaux Intérieures',
    rating: 5,
    text: "J'ai pris la formation côtière + eaux intérieures et c'est un excellent rapport qualité-prix. Les cours du soir me convenaient parfaitement avec mon travail. La plateforme en ligne est très pratique pour réviser dans les transports.",
  },
  {
    name: 'Marie-Claire D.',
    location: 'Thionville',
    permis: 'Théorie Eaux Intérieures',
    rating: 5,
    text: "À 58 ans, je me suis lancée ! L'accueil est chaleureux, les explications claires. La pratique sur la Moselle avec le passage d'écluse m'a donné confiance. Merci pour votre patience et votre professionnalisme.",
  },
  {
    name: 'Julien R.',
    location: 'Metz',
    permis: 'Stage Week-end',
    rating: 5,
    text: "Stage intensif le week-end : samedi théorie, dimanche pratique, et j'avais mon permis la semaine suivante. Efficace, bien organisé et ambiance sympa. Parfait quand on n'a pas le temps en semaine.",
  },
  {
    name: 'Élodie et Marc B.',
    location: 'Woippy',
    permis: 'Option Côtière (x2)',
    rating: 5,
    text: "On a passé le permis en couple, c'était une super expérience ! Les cours en petit groupe permettent de bien progresser et on se sent vraiment accompagnés. On est prêts pour nos vacances en mer.",
  },
  {
    name: 'Pierre V.',
    location: 'Metz',
    permis: 'Extension Hauturière',
    rating: 5,
    text: "Après le côtier passé ici, j'ai enchaîné avec l'hauturière. La formation est sérieuse, les cours de navigation astronomique sont passionnants. Le formateur maîtrise son sujet et rend la matière accessible.",
  },
]

const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#A142F4', '#F538A0']

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

function GoogleStar() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FBBC04">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function GoogleStarSmall() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FBBC04">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default function Temoignages() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
            {"Témoignages"}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-900 mb-4">
            Ils ont obtenu leur permis avec nous
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {"Plus de 500 élèves formés. Découvrez leurs retours d'expérience."}
          </p>

          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-3 mt-8 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100">
            <GoogleLogo className="w-7 h-7" />
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <GoogleStar key={star} />
              ))}
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-gray-900 text-lg">4.9/5</span>
              <span className="text-gray-500 text-sm">127 avis Google</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temoignages.map((t, index) => (
            <div key={t.name} className="card p-8 relative">
              {/* Google icon */}
              <div className="absolute top-6 right-6">
                <GoogleLogo className="w-6 h-6 opacity-60" />
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <GoogleStarSmall key={i} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: googleColors[index % googleColors.length] }}
                >
                  <span className="text-white font-bold text-sm">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">
                    {t.location} &bull; {t.permis}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

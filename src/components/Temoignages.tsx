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

export default function Temoignages() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Témoignages
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-900 mb-4">
            Ils ont obtenu leur permis avec nous
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {"Plus de 500 élèves formés. Découvrez leurs retours d'expérience."}
          </p>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 text-sand-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-navy-900 text-lg">4.9/5</span>
            <span className="text-gray-500">sur Google (127 avis)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temoignages.map((t) => (
            <div key={t.name} className="card p-8">
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-sand-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-navy-700 font-bold text-sm">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{t.name}</div>
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

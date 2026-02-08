import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="gradient-navy text-white">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-custom px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-1">
              {"Pr\u00eat \u00e0 naviguer\u00a0?"}
            </h3>
            <p className="text-white/60">
              {"Recevez un devis gratuit et soyez rappel\u00e9 par un centre agr\u00e9\u00e9 pr\u00e8s de Metz."}
            </p>
          </div>
          <Link href="/#contact" className="btn-primary flex-shrink-0">
            {"Être rappel\u00e9 gratuitement"}
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
                  <path d="M20 5 L35 30 Q27 35 20 32 Q13 35 5 30 Z" className="fill-white" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-bold text-lg block">Permis Bateau</span>
                <span className="text-ocean-300 text-xs tracking-wider uppercase">Metz</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {"Plateforme ind\u00e9pendante d'information et de mise en relation pour le permis bateau \u00e0 Metz et en Moselle. Nous ne sommes pas une \u00e9cole de navigation."}
            </p>
          </div>

          {/* Col 2: Formations */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">Permis bateau</h4>
            <ul className="space-y-3">
              {[
                { href: '/#formations', label: 'Option C\u00f4ti\u00e8re' },
                { href: '/#formations', label: 'Th\u00e9orie Eaux Int\u00e9rieures' },
                { href: '/#formations', label: 'C\u00f4ti\u00e8re + Eaux Int\u00e9rieures' },
                { href: '/#formations', label: 'Extension Hauturi\u00e8re' },
                { href: '/#formations', label: 'Remise \u00e0 niveau' },
                { href: '/#tarifs', label: 'Tarifs indicatifs' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Informations */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">Informations</h4>
            <ul className="space-y-3">
              {[
                { href: '/#comment-ca-marche', label: 'Comment \u00e7a marche' },
                { href: '/blog', label: 'Blog & guides' },
                { href: '/#faq', label: 'Questions fr\u00e9quentes' },
                { href: '/#avantages', label: 'Pourquoi passer par nous' },
                { href: '/mentions-legales', label: 'Mentions l\u00e9gales' },
                { href: '/politique-de-confidentialite', label: 'Politique de confidentialit\u00e9' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-ocean-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:contact@permis-bateau-metz.fr" className="text-white/50 hover:text-white transition-colors">contact@permis-bateau-metz.fr</a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-ocean-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-white/50">{"Zone couverte : Metz, Moselle, Grand Est"}</span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-white/40 text-xs">
                {"Plateforme ind\u00e9pendante de mise en relation \u2014 nous ne sommes pas une \u00e9cole de navigation."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Permis Bateau Metz. Tous droits r&eacute;serv&eacute;s.
          </p>
          <p className="text-white/30 text-xs">
            {"Plateforme ind\u00e9pendante d'orientation \u2022 Mise en relation permis bateau \u2022 Metz, Moselle (57)"}
          </p>
        </div>
      </div>
    </footer>
  )
}

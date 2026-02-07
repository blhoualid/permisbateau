import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="gradient-navy text-white">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-custom px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-1">
              Pr&ecirc;t &agrave; naviguer ?
            </h3>
            <p className="text-white/60">
              Inscrivez-vous d&egrave;s maintenant et obtenez votre permis bateau &agrave; Metz.
            </p>
          </div>
          <Link href="/#contact" className="btn-primary flex-shrink-0">
            Je m&apos;inscris
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
                <span className="font-heading font-bold text-lg block">
                  Permis Bateau
                </span>
                <span className="text-ocean-300 text-xs tracking-wider uppercase">
                  Metz
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Centre de formation agr&eacute;&eacute; pour le permis bateau &agrave; Metz.
              Formations c&ocirc;tier, fluvial et hauturier sur la Moselle.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
                  <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Formations */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Formations
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/#formations', label: 'Option C\u00f4ti\u00e8re' },
                { href: '/#formations', label: 'Th\u00e9orie Eaux Int\u00e9rieures' },
                { href: '/#formations', label: 'C\u00f4ti\u00e8re + Eaux Int\u00e9rieures' },
                { href: '/#formations', label: 'Extension Hauturi\u00e8re' },
                { href: '/#formations', label: 'Remise \u00e0 niveau' },
                { href: '/#tarifs', label: 'Tous les tarifs' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Informations */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Informations
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/blog', label: 'Blog & Actualit\u00e9s' },
                { href: '/#faq', label: 'Questions fr\u00e9quentes' },
                { href: '/#avantages', label: 'Pourquoi nous choisir' },
                { href: '/mentions-legales', label: 'Mentions l\u00e9gales' },
                { href: '/mentions-legales#confidentialite', label: 'Politique de confidentialit\u00e9' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-ocean-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/50">
                  Port de Plaisance<br />57000 Metz
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-ocean-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33387000000" className="text-white/50 hover:text-white transition-colors">
                  03 87 00 00 00
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-ocean-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@permis-bateau-metz.fr" className="text-white/50 hover:text-white transition-colors">
                  contact@permis-bateau-metz.fr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-ocean-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/50">
                  Lun-Ven : 9h-19h<br />Sam : 9h-17h
                </span>
              </div>
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
            Centre agr&eacute;&eacute; &bull; Formation permis plaisance &bull; Metz, Moselle (57)
          </p>
        </div>
      </div>
    </footer>
  )
}

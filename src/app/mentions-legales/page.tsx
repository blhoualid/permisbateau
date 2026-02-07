import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions L\u00e9gales',
  description: 'Mentions l\u00e9gales et politique de confidentialit\u00e9 du site Permis Bateau Metz.',
  robots: { index: false, follow: true },
}

export default function MentionsLegales() {
  return (
    <>
      <section className="gradient-navy pt-32 pb-16 px-4">
        <div className="container-custom max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-white/60">Mentions l&eacute;gales</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Mentions l&eacute;gales
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg prose-gray">
          <h2 className="font-heading text-2xl font-bold text-navy-900 mt-0">&Eacute;diteur du site</h2>
          <p>
            Le site <strong>permis-bateau-metz.fr</strong> est &eacute;dit&eacute; par :<br />
            Permis Bateau Metz<br />
            Port de Plaisance<br />
            57000 Metz, France<br />
            T&eacute;l&eacute;phone : 03 87 00 00 00<br />
            Email : contact@permis-bateau-metz.fr
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">H&eacute;bergeur</h2>
          <p>
            Ce site est h&eacute;berg&eacute; par :<br />
            Hostinger International Ltd.<br />
            61 Lordou Vironos Street<br />
            6023 Larnaca, Chypre<br />
            Site web : hostinger.fr
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">Propri&eacute;t&eacute; intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, vid&eacute;os, graphismes, logo, ic&ocirc;nes, etc.) est
            la propri&eacute;t&eacute; exclusive de Permis Bateau Metz, sauf mention contraire. Toute reproduction,
            distribution, modification ou utilisation de ces contenus sans autorisation pr&eacute;alable &eacute;crite est
            strictement interdite.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">Limitation de responsabilit&eacute;</h2>
          <p>
            Les informations contenues sur ce site sont donn&eacute;es &agrave; titre indicatif. Permis Bateau Metz
            s&apos;efforce de fournir des informations exactes et &agrave; jour, mais ne garantit pas l&apos;exhaustivit&eacute; ou
            l&apos;exactitude des informations diffus&eacute;es. L&apos;&eacute;diteur ne saurait &ecirc;tre tenu responsable des erreurs,
            d&apos;une absence de disponibilit&eacute; des informations ou de la pr&eacute;sence de virus sur le site.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900" id="confidentialite">
            Politique de confidentialit&eacute; &amp; RGPD
          </h2>

          <h3 className="font-heading text-xl font-bold text-navy-800">Donn&eacute;es collect&eacute;es</h3>
          <p>
            Lors de l&apos;utilisation du formulaire de contact, nous collectons les donn&eacute;es suivantes :
            nom, pr&eacute;nom, adresse email, num&eacute;ro de t&eacute;l&eacute;phone, formation souhait&eacute;e et message. Ces donn&eacute;es
            sont n&eacute;cessaires au traitement de votre demande de rappel.
          </p>

          <h3 className="font-heading text-xl font-bold text-navy-800">Finalit&eacute; du traitement</h3>
          <p>Vos donn&eacute;es personnelles sont collect&eacute;es pour :</p>
          <ul>
            <li>R&eacute;pondre &agrave; votre demande de contact ou de rappel</li>
            <li>Vous fournir des informations sur nos formations</li>
            <li>G&eacute;rer votre inscription &eacute;ventuelle</li>
          </ul>

          <h3 className="font-heading text-xl font-bold text-navy-800">Dur&eacute;e de conservation</h3>
          <p>
            Vos donn&eacute;es sont conserv&eacute;es pendant une dur&eacute;e maximale de 3 ans &agrave; compter du dernier
            contact. Elles sont ensuite supprim&eacute;es automatiquement.
          </p>

          <h3 className="font-heading text-xl font-bold text-navy-800">Vos droits</h3>
          <p>
            Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD), vous disposez
            des droits suivants :
          </p>
          <ul>
            <li>Droit d&apos;acc&egrave;s &agrave; vos donn&eacute;es personnelles</li>
            <li>Droit de rectification</li>
            <li>Droit &agrave; l&apos;effacement (droit &agrave; l&apos;oubli)</li>
            <li>Droit &agrave; la limitation du traitement</li>
            <li>Droit &agrave; la portabilit&eacute; des donn&eacute;es</li>
            <li>Droit d&apos;opposition</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous &agrave; :{' '}
            <a href="mailto:contact@permis-bateau-metz.fr" className="text-ocean-600 hover:underline">
              contact@permis-bateau-metz.fr
            </a>
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">Cookies</h2>
          <p>
            Ce site utilise des cookies techniques n&eacute;cessaires au bon fonctionnement du site.
            Aucun cookie de suivi ou publicitaire n&apos;est utilis&eacute; sans votre consentement pr&eacute;alable.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">Cr&eacute;dits</h2>
          <p>
            Conception et d&eacute;veloppement : Permis Bateau Metz<br />
            H&eacute;bergement : Hostinger<br />
            Framework : Next.js
          </p>
        </div>
      </section>
    </>
  )
}

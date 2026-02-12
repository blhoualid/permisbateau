import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions L\u00e9gales',
  description:
    'Mentions l\u00e9gales du site permis-bateau-metz.fr. Plateforme ind\u00e9pendante d\u2019information et de mise en relation pour le permis bateau \u00e0 Metz.',
  robots: { index: true, follow: true },
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
            <span className="text-white/60">{"Mentions l\u00e9gales"}</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            {"Mentions l\u00e9gales"}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg prose-gray">
          <p className="text-sm text-gray-500">
            {"Derni\u00e8re mise \u00e0 jour\u00a0: 8 f\u00e9vrier 2026"}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900 mt-8">
            {"1. \u00c9diteur du site"}
          </h2>
          <p>
            {"Le site "}<strong>permis-bateau-metz.fr</strong>{" est \u00e9dit\u00e9 par\u00a0:"}
          </p>
          <ul>
            <li><strong>{"Raison sociale"}</strong>{" : Permis Bateau Metz"}</li>
            <li><strong>{"Forme juridique"}</strong>{" : [\u00c0 compl\u00e9ter]"}</li>
            <li><strong>{"SIRET"}</strong>{" : [\u00c0 compl\u00e9ter]"}</li>
            <li><strong>{"Email"}</strong>{" : contact@permis-bateau-metz.fr"}</li>
            <li><strong>{"Directeur de la publication"}</strong>{" : [\u00c0 compl\u00e9ter]"}</li>
          </ul>

          <div className="bg-ocean-50 border border-ocean-200 rounded-xl p-4 my-4">
            <p className="text-sm text-ocean-800 m-0">
              <strong>{"Nature du site\u00a0:"}</strong>{" permis-bateau-metz.fr est une plateforme ind\u00e9pendante d\u2019information et de mise en relation. Ce site n\u2019est pas une \u00e9cole de navigation, un bateau-\u00e9cole ni un centre de formation. Les demandes re\u00e7ues via le formulaire de contact peuvent \u00eatre transmises \u00e0 des centres de formation agr\u00e9\u00e9s partenaires (g\u00e9n\u00e9ration de leads)."}
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"2. H\u00e9bergeur"}
          </h2>
          <p>{"Le site est h\u00e9berg\u00e9 par\u00a0:"}</p>
          <ul>
            <li><strong>{"Raison sociale"}</strong>{" : Hostinger International Ltd."}</li>
            <li><strong>{"Adresse"}</strong>{" : 61 Lordou Vironos Street, 6023 Larnaca, Chypre"}</li>
            <li><strong>{"Site web"}</strong>{" : hostinger.com"}</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"3. Nature de l\u2019activit\u00e9"}
          </h2>
          <p>
            {"Ce site a pour objet de fournir des informations g\u00e9n\u00e9rales sur le permis bateau (c\u00f4tier, fluvial, hauturier) dans la r\u00e9gion de Metz et en Moselle, et de mettre en relation les visiteurs int\u00e9ress\u00e9s avec des centres de formation agr\u00e9\u00e9s."}
          </p>
          <p>
            {"Les tarifs affich\u00e9s sont des tarifs indicatifs constat\u00e9s aupr\u00e8s des centres de la r\u00e9gion et peuvent varier selon le centre partenaire. Ils ne constituent pas une offre commerciale directe de la part de permis-bateau-metz.fr."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"4. Propri\u00e9t\u00e9 intellectuelle"}
          </h2>
          <p>
            {"L\u2019ensemble du contenu de ce site internet (textes, images, graphismes, logo, ic\u00f4nes) est la propri\u00e9t\u00e9 exclusive de Permis Bateau Metz ou de ses partenaires, et est prot\u00e9g\u00e9 par les lois fran\u00e7aises et internationales relatives \u00e0 la propri\u00e9t\u00e9 intellectuelle."}
          </p>
          <p>
            {"Toute reproduction ou exploitation non autoris\u00e9e sera consid\u00e9r\u00e9e comme constitutive d\u2019une contrefa\u00e7on (articles L.335-2 et suivants du Code de la propri\u00e9t\u00e9 intellectuelle)."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"5. Limitation de responsabilit\u00e9"}
          </h2>
          <p>
            {"Les informations contenues sur ce site sont fournies \u00e0 titre indicatif et peuvent contenir des inexactitudes. Permis Bateau Metz ne saurait \u00eatre tenu responsable des dommages directs ou indirects r\u00e9sultant de l\u2019utilisation du site."}
          </p>
          <p>
            {"Permis Bateau Metz n\u2019est pas responsable des services, tarifs ou prestations propos\u00e9s par les centres de formation partenaires."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"6. Liens hypertextes"}
          </h2>
          <p>
            {"Le site peut contenir des liens vers d\u2019autres sites. Permis Bateau Metz n\u2019assume aucune responsabilit\u00e9 quant au contenu de ces sites tiers."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"7. Cookies"}
          </h2>
          <p>
            {"Le site utilise des cookies strictement n\u00e9cessaires au fonctionnement. Aucun cookie publicitaire ou de suivi n\u2019est d\u00e9pos\u00e9 sans votre consentement. Pour en savoir plus, consultez notre "}
            <Link href="/politique-de-confidentialite" className="text-ocean-600 hover:underline">
              {"politique de confidentialit\u00e9"}
            </Link>.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"8. Cr\u00e9dits"}
          </h2>
          <ul>
            <li><strong>{"Conception et d\u00e9veloppement"}</strong>{" : Permis Bateau Metz"}</li>
            <li><strong>{"H\u00e9bergement"}</strong>{" : Hostinger"}</li>
            <li><strong>{"Photos"}</strong>{" : Pexels (licence libre)"}</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"9. Droit applicable"}
          </h2>
          <p>
            {"Les pr\u00e9sentes mentions l\u00e9gales sont r\u00e9gies par le droit fran\u00e7ais. En cas de litige, les tribunaux de Metz seront seuls comp\u00e9tents."}
          </p>
          <p>
            {"Pour toute question\u00a0: "}
            <a href="mailto:contact@permis-bateau-metz.fr" className="text-ocean-600 hover:underline">
              contact@permis-bateau-metz.fr
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

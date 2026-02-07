import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions L\u00e9gales',
  description:
    'Mentions l\u00e9gales du site Permis Bateau Metz. Informations sur l\u2019\u00e9diteur, l\u2019h\u00e9bergeur, la propri\u00e9t\u00e9 intellectuelle et les conditions d\u2019utilisation.',
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
            {"Derni\u00e8re mise \u00e0 jour : 1er janvier 2026"}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900 mt-8">
            {"1. \u00c9diteur du site"}
          </h2>
          <p>
            {"Le site "}<strong>permis-bateau-metz.fr</strong>{" est \u00e9dit\u00e9 par :"}
          </p>
          <ul>
            <li><strong>{"Raison sociale"}</strong>{" : Permis Bateau Metz"}</li>
            <li><strong>{"Forme juridique"}</strong>{" : [\u00c0 compl\u00e9ter]"}</li>
            <li><strong>{"SIRET"}</strong>{" : [\u00c0 compl\u00e9ter]"}</li>
            <li><strong>{"Num\u00e9ro d\u2019agr\u00e9ment"}</strong>{" : [\u00c0 compl\u00e9ter]"}</li>
            <li><strong>{"Si\u00e8ge social"}</strong>{" : Port de Plaisance, 57000 Metz, France"}</li>
            <li><strong>{"T\u00e9l\u00e9phone"}</strong>{" : 03 87 00 00 00"}</li>
            <li><strong>{"Email"}</strong>{" : contact@permis-bateau-metz.fr"}</li>
            <li><strong>{"Directeur de la publication"}</strong>{" : [\u00c0 compl\u00e9ter]"}</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"2. H\u00e9bergeur"}
          </h2>
          <p>{"Le site est h\u00e9berg\u00e9 par :"}</p>
          <ul>
            <li><strong>{"Raison sociale"}</strong>{" : Hostinger International Ltd."}</li>
            <li><strong>{"Adresse"}</strong>{" : 61 Lordou Vironos Street, 6023 Larnaca, Chypre"}</li>
            <li><strong>{"Site web"}</strong>{" : hostinger.fr"}</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"3. Propri\u00e9t\u00e9 intellectuelle"}
          </h2>
          <p>
            {"L\u2019ensemble du contenu de ce site internet (textes, images, graphismes, logo, ic\u00f4nes, sons, logiciels, etc.) est la propri\u00e9t\u00e9 exclusive de Permis Bateau Metz ou de ses partenaires, et est prot\u00e9g\u00e9 par les lois fran\u00e7aises et internationales relatives \u00e0 la propri\u00e9t\u00e9 intellectuelle."}
          </p>
          <p>
            {"Toute reproduction, repr\u00e9sentation, modification, publication, adaptation ou exploitation de tout ou partie des \u00e9l\u00e9ments du site, quel que soit le moyen ou le proc\u00e9d\u00e9 utilis\u00e9, est interdite sans l\u2019autorisation \u00e9crite pr\u00e9alable de Permis Bateau Metz."}
          </p>
          <p>
            {"Toute exploitation non autoris\u00e9e du site ou de son contenu sera consid\u00e9r\u00e9e comme constitutive d\u2019une contrefa\u00e7on et poursuivie conform\u00e9ment aux articles L.335-2 et suivants du Code de la propri\u00e9t\u00e9 intellectuelle."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"4. Limitation de responsabilit\u00e9"}
          </h2>
          <p>
            {"Les informations contenues sur ce site sont aussi pr\u00e9cises que possible et le site est p\u00e9riodiquement mis \u00e0 jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes."}
          </p>
          <p>
            {"Permis Bateau Metz ne pourra \u00eatre tenue responsable des dommages directs et indirects caus\u00e9s au mat\u00e9riel de l\u2019utilisateur, lors de l\u2019acc\u00e8s au site permis-bateau-metz.fr, et r\u00e9sultant soit de l\u2019utilisation d\u2019un mat\u00e9riel ne r\u00e9pondant pas aux sp\u00e9cifications techniques requises, soit de l\u2019apparition d\u2019un bug ou d\u2019une incompatibilit\u00e9."}
          </p>
          <p>
            {"Permis Bateau Metz ne pourra \u00e9galement \u00eatre tenue responsable des dommages indirects cons\u00e9cutifs \u00e0 l\u2019utilisation du site."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"5. Liens hypertextes"}
          </h2>
          <p>
            {"Le site permis-bateau-metz.fr peut contenir des liens hypertextes vers d\u2019autres sites internet. Permis Bateau Metz ne dispose d\u2019aucun moyen de contr\u00f4le du contenu de ces sites tiers et n\u2019assume aucune responsabilit\u00e9 quant \u00e0 leur contenu, leurs pratiques ou leurs politiques de confidentialit\u00e9."}
          </p>
          <p>
            {"La mise en place d\u2019un lien hypertexte vers le site permis-bateau-metz.fr n\u00e9cessite une autorisation pr\u00e9alable \u00e9crite. Toute demande peut \u00eatre adress\u00e9e \u00e0 contact@permis-bateau-metz.fr."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"6. Cookies"}
          </h2>
          <p>
            {"Le site permis-bateau-metz.fr utilise des cookies strictement n\u00e9cessaires au bon fonctionnement du site. Ces cookies techniques ne n\u00e9cessitent pas le consentement pr\u00e9alable de l\u2019utilisateur conform\u00e9ment \u00e0 la r\u00e9glementation en vigueur."}
          </p>
          <p>
            {"Aucun cookie publicitaire, de suivi ou d\u2019analyse n\u2019est d\u00e9pos\u00e9 sans votre consentement explicite. Vous pouvez configurer votre navigateur pour refuser les cookies."}
          </p>
          <p>
            {"Pour en savoir plus sur l\u2019utilisation de vos donn\u00e9es personnelles et vos droits, consultez notre "}
            <Link href="/politique-de-confidentialite" className="text-ocean-600 hover:underline">
              {"politique de confidentialit\u00e9"}
            </Link>.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"7. Cr\u00e9dits"}
          </h2>
          <ul>
            <li><strong>{"Conception et d\u00e9veloppement"}</strong>{" : Permis Bateau Metz"}</li>
            <li><strong>{"H\u00e9bergement"}</strong>{" : Hostinger"}</li>
            <li><strong>{"Photos"}</strong>{" : Pexels (licence libre)"}</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"8. Droit applicable et juridiction"}
          </h2>
          <p>
            {"Les pr\u00e9sentes mentions l\u00e9gales sont r\u00e9gies par le droit fran\u00e7ais. En cas de litige, les tribunaux de Metz seront seuls comp\u00e9tents."}
          </p>
          <p>
            {"Pour toute question relative aux mentions l\u00e9gales du site, vous pouvez nous contacter \u00e0 l\u2019adresse : "}
            <a href="mailto:contact@permis-bateau-metz.fr" className="text-ocean-600 hover:underline">
              contact@permis-bateau-metz.fr
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

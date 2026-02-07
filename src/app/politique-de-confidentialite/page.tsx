import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de Confidentialit\u00e9',
  description:
    'Politique de confidentialit\u00e9 et protection des donn\u00e9es personnelles du site Permis Bateau Metz. Conformit\u00e9 RGPD.',
  robots: { index: false, follow: true },
}

export default function PolitiqueDeConfidentialite() {
  return (
    <>
      <section className="gradient-navy pt-32 pb-16 px-4">
        <div className="container-custom max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-white/60">{"Politique de confidentialit\u00e9"}</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            {"Politique de confidentialit\u00e9"}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg prose-gray">
          <p className="text-sm text-gray-500">
            {"Derni\u00e8re mise \u00e0 jour : 1er janvier 2026"}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900 mt-8">
            {"1. Introduction"}
          </h2>
          <p>
            {"La soci\u00e9t\u00e9 Permis Bateau Metz, en tant que responsable du traitement, attache une grande importance \u00e0 la protection et au respect de votre vie priv\u00e9e. La pr\u00e9sente politique vise \u00e0 vous informer de nos pratiques concernant la collecte, l\u2019utilisation et le partage des informations que vous \u00eates amen\u00e9s \u00e0 nous fournir par le biais de notre site internet permis-bateau-metz.fr."}
          </p>
          <p>
            {"Cette politique de confidentialit\u00e9 est \u00e9tablie conform\u00e9ment au R\u00e8glement G\u00e9n\u00e9ral sur la Protection des Donn\u00e9es (RGPD \u2013 R\u00e8glement UE 2016/679) et \u00e0 la loi n\u00b078-17 du 6 janvier 1978 relative \u00e0 l\u2019informatique, aux fichiers et aux libert\u00e9s, dans sa version en vigueur."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"2. Responsable du traitement"}
          </h2>
          <p>{"Le responsable du traitement des donn\u00e9es collect\u00e9es sur ce site est :"}</p>
          <ul>
            <li><strong>Permis Bateau Metz</strong></li>
            <li>{"Port de Plaisance, 57000 Metz, France"}</li>
            <li>{"Email : contact@permis-bateau-metz.fr"}</li>
            <li>{"T\u00e9l\u00e9phone : 03 87 00 00 00"}</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"3. Donn\u00e9es personnelles collect\u00e9es"}
          </h2>
          <p>{"Nous collectons les donn\u00e9es personnelles suivantes lorsque vous utilisez notre formulaire de contact :"}</p>
          <ul>
            <li>{"Nom et pr\u00e9nom"}</li>
            <li>{"Adresse email"}</li>
            <li>{"Num\u00e9ro de t\u00e9l\u00e9phone"}</li>
            <li>{"Formation souhait\u00e9e"}</li>
            <li>{"Horaire de rappel pr\u00e9f\u00e9r\u00e9"}</li>
            <li>{"Message (optionnel)"}</li>
          </ul>
          <p>{"Ces donn\u00e9es sont fournies directement par vous lors de la soumission du formulaire."}</p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"4. Finalit\u00e9s du traitement"}
          </h2>
          <p>{"Vos donn\u00e9es personnelles sont collect\u00e9es et trait\u00e9es pour les finalit\u00e9s suivantes :"}</p>
          <ul>
            <li>{"R\u00e9pondre \u00e0 votre demande de rappel t\u00e9l\u00e9phonique"}</li>
            <li>{"Vous fournir des informations sur nos formations au permis bateau"}</li>
            <li>{"G\u00e9rer votre \u00e9ventuelle inscription \u00e0 une formation"}</li>
            <li>{"Assurer le suivi de la relation commerciale"}</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"5. Base juridique du traitement"}
          </h2>
          <p>{"Le traitement de vos donn\u00e9es personnelles repose sur les bases juridiques suivantes :"}</p>
          <ul>
            <li>
              <strong>{"Votre consentement"}</strong>
              {" : en soumettant le formulaire de contact, vous consentez \u00e0 ce que vos donn\u00e9es soient trait\u00e9es conform\u00e9ment \u00e0 la pr\u00e9sente politique."}
            </li>
            <li>
              <strong>{"L\u2019ex\u00e9cution d\u2019un contrat"}</strong>
              {" : le traitement est n\u00e9cessaire \u00e0 l\u2019ex\u00e9cution du contrat de formation ou des mesures pr\u00e9contractuelles prises \u00e0 votre demande."}
            </li>
            <li>
              <strong>{"L\u2019int\u00e9r\u00eat l\u00e9gitime"}</strong>
              {" : le traitement est n\u00e9cessaire aux fins des int\u00e9r\u00eats l\u00e9gitimes poursuivis par Permis Bateau Metz (gestion des demandes, am\u00e9lioration des services)."}
            </li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"6. Dur\u00e9e de conservation des donn\u00e9es"}
          </h2>
          <p>{"Vos donn\u00e9es personnelles sont conserv\u00e9es pendant les dur\u00e9es suivantes :"}</p>
          <ul>
            <li><strong>{"Donn\u00e9es de contact (prospects)"}</strong>{" : 3 ans \u00e0 compter du dernier contact"}</li>
            <li><strong>{"Donn\u00e9es des clients"}</strong>{" : pendant la dur\u00e9e de la relation contractuelle, puis 3 ans apr\u00e8s la fin de celle-ci"}</li>
            <li><strong>{"Donn\u00e9es de facturation"}</strong>{" : 10 ans conform\u00e9ment aux obligations comptables et fiscales"}</li>
          </ul>
          <p>{"Au-del\u00e0 de ces dur\u00e9es, vos donn\u00e9es sont supprim\u00e9es ou anonymis\u00e9es."}</p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"7. Destinataires des donn\u00e9es"}
          </h2>
          <p>{"Vos donn\u00e9es personnelles sont destin\u00e9es exclusivement \u00e0 Permis Bateau Metz et ne sont communiqu\u00e9es \u00e0 aucun tiers, sauf :"}</p>
          <ul>
            <li>{"Notre h\u00e9bergeur (Hostinger) pour l\u2019h\u00e9bergement technique du site"}</li>
            <li>{"Les autorit\u00e9s comp\u00e9tentes en cas d\u2019obligation l\u00e9gale"}</li>
          </ul>
          <p>{"Vos donn\u00e9es ne sont pas transf\u00e9r\u00e9es en dehors de l\u2019Union europ\u00e9enne."}</p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"8. Vos droits"}
          </h2>
          <p>
            {"Conform\u00e9ment au RGPD et \u00e0 la loi Informatique et Libert\u00e9s, vous disposez des droits suivants sur vos donn\u00e9es personnelles :"}
          </p>
          <ul>
            <li><strong>{"Droit d\u2019acc\u00e8s"}</strong>{" : obtenir la confirmation que vos donn\u00e9es sont trait\u00e9es et en obtenir une copie"}</li>
            <li><strong>{"Droit de rectification"}</strong>{" : demander la correction de donn\u00e9es inexactes ou incompl\u00e8tes"}</li>
            <li><strong>{"Droit \u00e0 l\u2019effacement"}</strong>{" : demander la suppression de vos donn\u00e9es dans les conditions pr\u00e9vues par la loi"}</li>
            <li><strong>{"Droit \u00e0 la limitation"}</strong>{" : demander la suspension du traitement de vos donn\u00e9es"}</li>
            <li><strong>{"Droit \u00e0 la portabilit\u00e9"}</strong>{" : recevoir vos donn\u00e9es dans un format structur\u00e9 et couramment utilis\u00e9"}</li>
            <li><strong>{"Droit d\u2019opposition"}</strong>{" : vous opposer au traitement de vos donn\u00e9es pour des motifs l\u00e9gitimes"}</li>
            <li><strong>{"Droit de retirer votre consentement"}</strong>{" : retirer \u00e0 tout moment votre consentement au traitement de vos donn\u00e9es"}</li>
          </ul>
          <p>{"Pour exercer l\u2019un de ces droits, vous pouvez nous contacter :"}</p>
          <ul>
            <li>
              {"Par email : "}
              <a href="mailto:contact@permis-bateau-metz.fr" className="text-ocean-600 hover:underline">
                contact@permis-bateau-metz.fr
              </a>
            </li>
            <li>{"Par courrier : Permis Bateau Metz, Port de Plaisance, 57000 Metz"}</li>
          </ul>
          <p>
            {"Nous nous engageons \u00e0 r\u00e9pondre \u00e0 votre demande dans un d\u00e9lai de 30 jours. Vous disposez \u00e9galement du droit d\u2019introduire une r\u00e9clamation aupr\u00e8s de la "}
            <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:underline">
              {"CNIL (Commission Nationale de l'Informatique et des Libert\u00e9s)"}
            </a>.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"9. Cookies"}
          </h2>
          <p>{"Le site permis-bateau-metz.fr utilise uniquement des cookies strictement n\u00e9cessaires au bon fonctionnement du site :"}</p>
          <ul>
            <li><strong>{"Cookies techniques"}</strong>{" : indispensables \u00e0 la navigation et au fonctionnement du site"}</li>
          </ul>
          <p>
            {"Aucun cookie de mesure d\u2019audience, de personnalisation ou publicitaire n\u2019est d\u00e9pos\u00e9 sans votre consentement pr\u00e9alable. Conform\u00e9ment \u00e0 la r\u00e9glementation, les cookies strictement n\u00e9cessaires ne requ\u00e8rent pas de consentement."}
          </p>
          <p>
            {"Vous pouvez \u00e0 tout moment configurer votre navigateur pour accepter ou refuser les cookies. Le param\u00e9trage diff\u00e8re selon les navigateurs ; veuillez consulter le menu d\u2019aide de votre navigateur pour plus d\u2019informations."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"10. S\u00e9curit\u00e9 des donn\u00e9es"}
          </h2>
          <p>
            {"Permis Bateau Metz met en \u0153uvre les mesures techniques et organisationnelles appropri\u00e9es pour prot\u00e9ger vos donn\u00e9es personnelles contre la destruction accidentelle ou illicite, la perte, l\u2019alt\u00e9ration, la diffusion ou l\u2019acc\u00e8s non autoris\u00e9."}
          </p>
          <p>{"Ces mesures comprennent notamment :"}</p>
          <ul>
            <li>{"Le chiffrement des donn\u00e9es en transit (HTTPS/SSL)"}</li>
            <li>{"La limitation de l\u2019acc\u00e8s aux donn\u00e9es aux seules personnes habilit\u00e9es"}</li>
            <li>{"La mise \u00e0 jour r\u00e9guli\u00e8re de nos syst\u00e8mes et logiciels"}</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"11. Modification de la politique"}
          </h2>
          <p>
            {"Permis Bateau Metz se r\u00e9serve le droit de modifier la pr\u00e9sente politique de confidentialit\u00e9 \u00e0 tout moment. En cas de modification substantielle, nous vous en informerons par le biais de notre site. La date de derni\u00e8re mise \u00e0 jour est indiqu\u00e9e en haut de cette page."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"12. Contact"}
          </h2>
          <p>{"Pour toute question relative \u00e0 la pr\u00e9sente politique de confidentialit\u00e9 ou pour toute demande relative \u00e0 vos donn\u00e9es personnelles, vous pouvez nous contacter :"}</p>
          <ul>
            <li>
              {"Par email : "}
              <a href="mailto:contact@permis-bateau-metz.fr" className="text-ocean-600 hover:underline">
                contact@permis-bateau-metz.fr
              </a>
            </li>
            <li>{"Par courrier : Permis Bateau Metz, Port de Plaisance, 57000 Metz"}</li>
            <li>{"Par t\u00e9l\u00e9phone : 03 87 00 00 00"}</li>
          </ul>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de Confidentialit\u00e9',
  description:
    'Politique de confidentialit\u00e9 et protection des donn\u00e9es personnelles de permis-bateau-metz.fr. Plateforme ind\u00e9pendante de mise en relation. Conformit\u00e9 RGPD.',
  robots: { index: true, follow: true },
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
            {"Derni\u00e8re mise \u00e0 jour\u00a0: 8 f\u00e9vrier 2026"}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900 mt-8">
            {"1. Introduction"}
          </h2>
          <p>
            {"Permis Bateau Metz est une plateforme ind\u00e9pendante d\u2019information et de mise en relation. Nous ne sommes pas une \u00e9cole de navigation ni un centre de formation. La pr\u00e9sente politique vise \u00e0 vous informer de nos pratiques concernant la collecte et l\u2019utilisation des informations que vous nous fournissez via le site permis-bateau-metz.fr."}
          </p>
          <p>
            {"Cette politique est \u00e9tablie conform\u00e9ment au R\u00e8glement G\u00e9n\u00e9ral sur la Protection des Donn\u00e9es (RGPD \u2013 R\u00e8glement UE 2016/679) et \u00e0 la loi n\u00b078-17 du 6 janvier 1978 (Informatique et Libert\u00e9s)."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"2. Responsable du traitement"}
          </h2>
          <p>{"Le responsable du traitement des donn\u00e9es est\u00a0:"}</p>
          <ul>
            <li><strong>Permis Bateau Metz</strong>{" (plateforme ind\u00e9pendante de mise en relation)"}</li>
            <li>{"Email\u00a0: contact@permis-bateau-metz.fr"}</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"3. Donn\u00e9es personnelles collect\u00e9es"}
          </h2>
          <p>{"Nous collectons les donn\u00e9es personnelles suivantes via le formulaire de contact\u00a0:"}</p>
          <ul>
            <li>{"Nom et pr\u00e9nom"}</li>
            <li>{"Adresse email"}</li>
            <li>{"Num\u00e9ro de t\u00e9l\u00e9phone"}</li>
            <li>{"Formation souhait\u00e9e"}</li>
            <li>{"Horaire de rappel pr\u00e9f\u00e9r\u00e9"}</li>
            <li>{"Message (optionnel)"}</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"4. Finalit\u00e9s du traitement"}
          </h2>
          <p>{"Vos donn\u00e9es sont collect\u00e9es et trait\u00e9es pour les finalit\u00e9s suivantes\u00a0:"}</p>
          <ul>
            <li><strong>{"Mise en relation\u00a0:"}</strong>{" transmettre votre demande \u00e0 un centre de formation agr\u00e9\u00e9 partenaire, adapt\u00e9 \u00e0 votre besoin et votre localisation (g\u00e9n\u00e9ration de leads)."}</li>
            <li><strong>{"Rappel\u00a0:"}</strong>{" permettre au partenaire de vous recontacter pour r\u00e9pondre \u00e0 vos questions et proposer ses services."}</li>
            <li><strong>{"Am\u00e9lioration du service\u00a0:"}</strong>{" analyser les demandes pour am\u00e9liorer notre plateforme."}</li>
          </ul>

          <div className="bg-ocean-50 border border-ocean-200 rounded-xl p-4 my-4">
            <p className="text-sm text-ocean-800 m-0">
              <strong>{"Important\u00a0:"}</strong>{" en soumettant le formulaire, vous acceptez que votre demande soit transmise \u00e0 un centre de formation partenaire. Ce partenaire vous contactera directement. Permis Bateau Metz n\u2019assure pas la formation elle-m\u00eame."}
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"5. Base juridique du traitement"}
          </h2>
          <p>{"Le traitement repose sur\u00a0:"}</p>
          <ul>
            <li>
              <strong>{"Votre consentement"}</strong>
              {" : en cochant la case obligatoire du formulaire (\u00ab\u00a0J\u2019accepte d\u2019\u00eatre recontact\u00e9(e) et que ma demande soit transmise \u00e0 un centre de formation partenaire\u00a0\u00bb), vous consentez explicitement au traitement et \u00e0 la transmission de vos donn\u00e9es."}
            </li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"6. Destinataires des donn\u00e9es"}
          </h2>
          <p>{"Vos donn\u00e9es sont susceptibles d\u2019\u00eatre communiqu\u00e9es \u00e0\u00a0:"}</p>
          <ul>
            <li><strong>{"Un centre de formation agr\u00e9\u00e9 partenaire"}</strong>{" en Moselle / Grand Est, pour assurer la mise en relation demand\u00e9e"}</li>
            <li>{"Notre h\u00e9bergeur (Hostinger) pour l\u2019h\u00e9bergement technique du site"}</li>
            <li>{"Les autorit\u00e9s comp\u00e9tentes en cas d\u2019obligation l\u00e9gale"}</li>
          </ul>
          <p>{"Vos donn\u00e9es ne sont pas transf\u00e9r\u00e9es en dehors de l\u2019Union europ\u00e9enne."}</p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"7. Dur\u00e9e de conservation"}
          </h2>
          <ul>
            <li><strong>{"Donn\u00e9es de contact (prospects)"}</strong>{" : 3 ans \u00e0 compter du dernier contact"}</li>
          </ul>
          <p>{"Au-del\u00e0, vos donn\u00e9es sont supprim\u00e9es ou anonymis\u00e9es."}</p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"8. Vos droits"}
          </h2>
          <p>
            {"Conform\u00e9ment au RGPD, vous disposez des droits suivants\u00a0:"}
          </p>
          <ul>
            <li><strong>{"Droit d\u2019acc\u00e8s"}</strong>{" : obtenir la confirmation que vos donn\u00e9es sont trait\u00e9es et en obtenir une copie"}</li>
            <li><strong>{"Droit de rectification"}</strong>{" : demander la correction de donn\u00e9es inexactes"}</li>
            <li><strong>{"Droit \u00e0 l\u2019effacement"}</strong>{" : demander la suppression de vos donn\u00e9es"}</li>
            <li><strong>{"Droit \u00e0 la portabilit\u00e9"}</strong>{" : recevoir vos donn\u00e9es dans un format structur\u00e9"}</li>
            <li><strong>{"Droit d\u2019opposition"}</strong>{" : vous opposer au traitement"}</li>
            <li><strong>{"Droit de retrait du consentement"}</strong>{" : retirer votre consentement \u00e0 tout moment"}</li>
          </ul>
          <p>{"Pour exercer ces droits, contactez-nous \u00e0\u00a0:"}</p>
          <ul>
            <li>
              {"Email\u00a0: "}
              <a href="mailto:contact@permis-bateau-metz.fr" className="text-ocean-600 hover:underline">
                contact@permis-bateau-metz.fr
              </a>
            </li>
          </ul>
          <p>
            {"D\u00e9lai de r\u00e9ponse\u00a0: 30 jours. Vous pouvez \u00e9galement d\u00e9poser une r\u00e9clamation aupr\u00e8s de la "}
            <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:underline">
              CNIL
            </a>.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"9. Cookies"}
          </h2>
          <p>{"Le site utilise uniquement des cookies strictement n\u00e9cessaires au bon fonctionnement. Aucun cookie publicitaire ou de suivi n\u2019est d\u00e9pos\u00e9 sans votre consentement."}</p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"10. S\u00e9curit\u00e9"}
          </h2>
          <p>
            {"Nous mettons en \u0153uvre les mesures techniques et organisationnelles appropri\u00e9es pour prot\u00e9ger vos donn\u00e9es (HTTPS/SSL, acc\u00e8s restreint, mises \u00e0 jour r\u00e9guli\u00e8res)."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"11. Modification"}
          </h2>
          <p>
            {"Permis Bateau Metz se r\u00e9serve le droit de modifier cette politique \u00e0 tout moment. La date de mise \u00e0 jour est indiqu\u00e9e en haut de page."}
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy-900">
            {"12. Contact"}
          </h2>
          <p>{"Pour toute question relative \u00e0 cette politique\u00a0:"}</p>
          <ul>
            <li>
              {"Email\u00a0: "}
              <a href="mailto:contact@permis-bateau-metz.fr" className="text-ocean-600 hover:underline">
                contact@permis-bateau-metz.fr
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

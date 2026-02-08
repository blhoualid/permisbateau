'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs: { question: string; answer: string; link?: { href: string; label: string } }[] = [
  {
    question: 'Quel \u00e2ge faut-il pour passer le permis bateau ?',
    answer:
      "Il faut avoir au minimum 16 ans pour passer le permis bateau (c\u00f4tier ou fluvial). Les mineurs doivent fournir une autorisation parentale. Il n'y a pas d'\u00e2ge maximum.",
  },
  {
    question: 'Combien de temps dure la formation ?',
    answer:
      "La formation th\u00e9orique dure entre 5 et 8 heures selon la formule choisie (cours du soir ou stage week-end). La pratique dure g\u00e9n\u00e9ralement 3h30 sur bateau. Au total, comptez 2 \u00e0 3 semaines entre l'inscription et l'obtention du permis, ou un seul week-end avec un stage acc\u00e9l\u00e9r\u00e9.",
    link: { href: '/blog/stage-permis-bateau-accelere-metz-weekend', label: 'En savoir plus sur le stage acc\u00e9l\u00e9r\u00e9 permis bateau' },
  },
  {
    question: "Comment se passe l'examen ?",
    answer:
      "L'examen th\u00e9orique est un QCM de 40 questions pass\u00e9 dans un centre La Poste. Vous avez droit \u00e0 5 erreurs maximum. Le r\u00e9sultat est disponible sous 48h en ligne. La partie pratique est valid\u00e9e par le formateur du centre pendant la formation.",
  },
  {
    question: 'Le permis c\u00f4tier permet-il de naviguer sur les rivi\u00e8res ?',
    answer:
      "Oui ! Le permis c\u00f4tier est valable en mer ET sur les eaux int\u00e9rieures (rivi\u00e8res, canaux, lacs). C'est le permis le plus polyvalent. Le permis fluvial, lui, ne permet de naviguer que sur les eaux int\u00e9rieures.",
  },
  {
    question: 'Votre service est-il payant ?',
    answer:
      "Non, notre service de mise en relation est enti\u00e8rement gratuit pour vous. Nous sommes une plateforme ind\u00e9pendante qui vous aide \u00e0 trouver un centre de formation agr\u00e9\u00e9 en Moselle. Vous payez uniquement la formation, directement aupr\u00e8s du centre partenaire.",
    link: { href: '/blog/combien-coute-permis-bateau-2026-tarifs-financements', label: 'D\u00e9couvrir tous les tarifs du permis bateau 2026' },
  },
  {
    question: 'Faut-il un certificat m\u00e9dical ?',
    answer:
      "Non, le certificat m\u00e9dical n'est plus obligatoire pour passer le permis plaisance depuis 2022. Vous n'avez besoin que d'une pi\u00e8ce d'identit\u00e9, de 2 photos et du timbre fiscal.",
  },
  {
    question: 'Quelle est la validit\u00e9 du permis bateau ?',
    answer:
      "Le permis bateau est valable \u00e0 vie. Il n'y a pas de renouvellement \u00e0 effectuer, contrairement au permis de conduire. Une fois obtenu, il est d\u00e9finitif.",
    link: { href: '/blog/reglementation-permis-plaisance-france-2026', label: 'Tout savoir sur la r\u00e9glementation du permis plaisance' },
  },
  {
    question: 'Comment choisir entre les diff\u00e9rents permis ?',
    answer:
      "Tout d\u00e9pend de votre usage : le permis c\u00f4tier est le plus polyvalent (mer + rivi\u00e8res), le permis fluvial est id\u00e9al pour la Moselle et les canaux, et l'extension hauturi\u00e8re est n\u00e9cessaire pour naviguer au large sans limite de distance. Notre plateforme vous aide \u00e0 comparer les formules.",
    link: { href: '/blog/permis-cotier-ou-fluvial-lequel-choisir', label: 'Lire notre comparatif c\u00f4tier vs fluvial' },
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-900 mb-4">
            {"Questions fr\u00e9quentes"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {"Tout ce que vous devez savoir sur le permis bateau \u00e0 Metz. Une question\u00a0? "}
            <a href="#contact" className="text-ocean-600 hover:underline">{"Demandez \u00e0 \u00eatre rappel\u00e9"}</a>.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-navy-900 pr-8">
                  {faq.question}
                </span>
                <span className={`text-ocean-600 flex-shrink-0 transition-transform duration-300 text-lg ${openIndex === index ? 'rotate-180' : ''}`}>
                  {"\u25BE"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                  {faq.link && (
                    <Link href={faq.link.href} className="inline-flex items-center gap-1 text-ocean-600 hover:text-ocean-700 text-sm font-medium mt-2">
                      {faq.link.label} {"\u2192"}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

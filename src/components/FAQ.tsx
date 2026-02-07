'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Quel âge faut-il pour passer le permis bateau ?',
    answer:
      "Il faut avoir au minimum 16 ans pour passer le permis bateau (côtier ou fluvial). Les mineurs doivent fournir une autorisation parentale. Il n'y a pas d'âge maximum.",
  },
  {
    question: 'Combien de temps dure la formation ?',
    answer:
      "La formation théorique dure entre 5 et 8 heures selon la formule choisie (cours du soir ou stage week-end). La pratique dure 3h30 sur la Moselle. Au total, comptez 2 à 3 semaines entre l'inscription et l'obtention du permis, ou un seul week-end avec notre stage accéléré.",
  },
  {
    question: "Comment se passe l'examen ?",
    answer:
      "L'examen théorique est un QCM de 40 questions passé dans un centre La Poste. Vous avez droit à 5 erreurs maximum. Le résultat est disponible sous 48h en ligne. La partie pratique est validée par votre formateur pendant la formation.",
  },
  {
    question: 'Le permis côtier permet-il de naviguer sur les rivières ?',
    answer:
      "Oui ! Le permis côtier est valable en mer ET sur les eaux intérieures (rivières, canaux, lacs). C'est le permis le plus polyvalent. Le permis fluvial, lui, ne permet de naviguer que sur les eaux intérieures.",
  },
  {
    question: 'Proposez-vous le paiement en plusieurs fois ?',
    answer:
      "Oui, nous proposons le paiement en 3 fois sans frais pour toutes nos formations. Le premier tiers est versé à l'inscription, les deux suivants avant le passage de l'examen.",
  },
  {
    question: 'Faut-il un certificat médical ?',
    answer:
      "Non, le certificat médical n'est plus obligatoire pour passer le permis plaisance depuis 2022. Vous n'avez besoin que d'une pièce d'identité, de 2 photos et du timbre fiscal.",
  },
  {
    question: 'Quelle est la validité du permis bateau ?',
    answer:
      "Le permis bateau est valable à vie. Il n'y a pas de renouvellement à effectuer, contrairement au permis de conduire. Une fois obtenu, il est définitif.",
  },
  {
    question: 'Où se déroule la formation pratique ?',
    answer:
      "La formation pratique se déroule sur la Moselle, au port de plaisance de Metz. Vous apprendrez les manœuvres, l'homme à la mer et le passage d'écluses en conditions réelles de navigation.",
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
            Questions fréquentes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {"Tout ce que vous devez savoir sur le permis bateau à Metz. Une question ? "}
            <a href="#contact" className="text-ocean-600 hover:underline">Contactez-nous</a>.
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
                <svg
                  className={`w-5 h-5 text-ocean-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

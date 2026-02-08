'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    formation: '',
    message: '',
    horaire: '',
    consentement: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consentement) return
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          formation: '',
          message: '',
          horaire: '',
          consentement: false,
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <div className="lg:col-span-2">
            <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Contact
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              {"Être rappel\u00e9 par un partenaire"}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {"Remplissez ce formulaire et un centre de formation agr\u00e9\u00e9 de votre r\u00e9gion vous rappelle sous 24h pour r\u00e9pondre \u00e0 toutes vos questions."}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Email de la plateforme</h3>
                  <a href="mailto:contact@permis-bateau-metz.fr" className="text-ocean-600 hover:underline">
                    contact@permis-bateau-metz.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">{"Comment \u00e7a marche\u00a0?"}</h3>
                  <p className="text-gray-600 text-sm">
                    {"Vous remplissez le formulaire, nous transmettons votre demande \u00e0 un centre agr\u00e9\u00e9 qui vous rappelle directement."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">{"Donn\u00e9es prot\u00e9g\u00e9es"}</h3>
                  <p className="text-gray-600 text-sm">
                    {"Vos informations sont trait\u00e9es conform\u00e9ment au RGPD et ne sont transmises qu'au partenaire concern\u00e9."}
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer visible */}
            <div className="mt-8 p-4 bg-ocean-50 border border-ocean-200 rounded-xl">
              <p className="text-sm text-ocean-800">
                {"Plateforme ind\u00e9pendante de mise en relation. Nous ne sommes pas une \u00e9cole de navigation. Votre demande est transmise \u00e0 un centre de formation agr\u00e9\u00e9 partenaire."}
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <div className="card p-8 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-3">
                    {"Demande envoy\u00e9e\u00a0!"}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {"Un centre de formation partenaire vous rappellera sous 24h."}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-ocean-600 font-medium hover:underline"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 transition-all outline-none"
                        placeholder="Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                        Pr&eacute;nom *
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 transition-all outline-none"
                        placeholder="Jean"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 transition-all outline-none"
                        placeholder="jean.dupont@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                        T&eacute;l&eacute;phone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 transition-all outline-none"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="formation" className="block text-sm font-medium text-gray-700 mb-1">
                        Formation souhait&eacute;e *
                      </label>
                      <select
                        id="formation"
                        name="formation"
                        required
                        value={formData.formation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 transition-all outline-none bg-white"
                      >
                        <option value="">Choisir...</option>
                        <option value="cotier">Option C&ocirc;ti&egrave;re</option>
                        <option value="fluvial">Th&eacute;orie Eaux Int&eacute;rieures</option>
                        <option value="pack">C&ocirc;ti&egrave;re + Eaux Int&eacute;rieures</option>
                        <option value="hauturier">Extension Hauturi&egrave;re</option>
                        <option value="remise-a-niveau">Remise &agrave; niveau</option>
                        <option value="info">{"Je veux juste des informations"}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="horaire" className="block text-sm font-medium text-gray-700 mb-1">
                        Quand vous rappeler ?
                      </label>
                      <select
                        id="horaire"
                        name="horaire"
                        value={formData.horaire}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 transition-all outline-none bg-white"
                      >
                        <option value="">Peu importe</option>
                        <option value="matin">Le matin (9h-12h)</option>
                        <option value="midi">Le midi (12h-14h)</option>
                        <option value="apres-midi">L&apos;apr&egrave;s-midi (14h-17h)</option>
                        <option value="soir">En fin de journ&eacute;e (17h-19h)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 transition-all outline-none resize-none"
                      placeholder="Votre question ou pr&eacute;cision..."
                    />
                  </div>

                  {/* Consent checkbox - MANDATORY */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consentement"
                      name="consentement"
                      required
                      checked={formData.consentement}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
                    />
                    <label htmlFor="consentement" className="text-sm text-gray-600">
                      {"J'accepte d'\u00eatre recontact\u00e9(e) et que ma demande soit transmise \u00e0 un centre de formation partenaire. "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading' || !formData.consentement}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      "\u00catre rappel\u00e9 gratuitement"
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm text-center">
                      {"Une erreur est survenue. Veuillez r\u00e9essayer ou nous contacter \u00e0 contact@permis-bateau-metz.fr."}
                    </p>
                  )}

                  <p className="text-xs text-gray-400 text-center">
                    {"En soumettant ce formulaire, vous acceptez que vos donn\u00e9es soient transmises \u00e0 un centre de formation partenaire. Vos donn\u00e9es sont trait\u00e9es conform\u00e9ment \u00e0 notre "}
                    <a href="/politique-de-confidentialite" className="underline hover:text-gray-600">
                      {"politique de confidentialit\u00e9"}
                    </a>
                    {". Plateforme ind\u00e9pendante \u2014 mise en relation avec des partenaires locaux."}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

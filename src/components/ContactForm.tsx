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
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
              Demandez &agrave; &ecirc;tre rappel&eacute; gratuitement
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Remplissez ce formulaire et nous vous rappelons sous 24h pour
              r&eacute;pondre &agrave; toutes vos questions et vous accompagner dans votre inscription.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">T&eacute;l&eacute;phone</h3>
                  <a href="tel:+33387000000" className="text-ocean-600 hover:underline">
                    03 87 00 00 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Email</h3>
                  <a href="mailto:contact@permis-bateau-metz.fr" className="text-ocean-600 hover:underline">
                    contact@permis-bateau-metz.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Adresse</h3>
                  <p className="text-gray-600">
                    Port de Plaisance<br />57000 Metz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Horaires</h3>
                  <p className="text-gray-600">
                    Lun-Ven : 9h-19h<br />Samedi : 9h-17h
                  </p>
                </div>
              </div>
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
                    Demande envoy&eacute;e !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Nous vous rappelons dans les 24h. Pr&eacute;parez vos questions !
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
                        <option value="cotier">Option C&ocirc;ti&egrave;re (445&euro;)</option>
                        <option value="fluvial">Th&eacute;orie Eaux Int&eacute;rieures (225&euro;)</option>
                        <option value="pack">C&ocirc;ti&egrave;re + Eaux Int&eacute;rieures (545&euro;)</option>
                        <option value="hauturier">Extension Hauturi&egrave;re (420&euro;)</option>
                        <option value="remise-a-niveau">Remise &agrave; niveau (90&euro;)</option>
                        <option value="info">Je veux juste des infos</option>
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

                  <button
                    type="submit"
                    disabled={status === 'loading'}
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
                      'Demander un rappel gratuit'
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm text-center">
                      Une erreur est survenue. Veuillez r&eacute;essayer ou nous appeler directement au 03 87 00 00 00.
                    </p>
                  )}

                  <p className="text-xs text-gray-400 text-center">
                    En soumettant ce formulaire, vous acceptez d&apos;&ecirc;tre recontact&eacute; par Permis Bateau Metz.
                    Vos donn&eacute;es sont trait&eacute;es conform&eacute;ment &agrave; notre{' '}
                    <a href="/politique-de-confidentialite" className="underline hover:text-gray-600">
                      politique de confidentialit&eacute;
                    </a>.
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

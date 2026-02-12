import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  themeColor: '#0c2340',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://permis-bateau-metz.fr'),
  title: {
    default: 'Permis Bateau Metz | Formations c\u00f4tier, fluvial & hauturier',
    template: '%s | Permis Bateau Metz',
  },
  description:
    'Passez votre permis bateau \u00e0 Metz d\u00e8s 225\u00a0\u20ac. Comparez les formations c\u00f4tier, fluvial et hauturier en Moselle et recevez un devis gratuit d\u2019un centre agr\u00e9\u00e9 en 24\u00a0h.',
  keywords: [
    'permis bateau metz',
    'permis c\u00f4tier metz',
    'permis fluvial metz',
    'permis hauturier metz',
    'bateau \u00e9cole metz',
    'formation permis bateau moselle',
    'stage permis bateau metz',
    'permis bateau lorraine',
    'permis bateau pas cher metz',
    'permis bateau tarif metz',
    'permis plaisance metz',
    'permis bateau 57',
    'permis bateau grand est',
    'permis bateau moselle 57000',
    'formation nautique metz',
    'comparer permis bateau metz',
  ],
  authors: [{ name: 'Permis Bateau Metz' }],
  creator: 'Permis Bateau Metz',
  publisher: 'Permis Bateau Metz',
  category: 'education',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://permis-bateau-metz.fr',
    siteName: 'Permis Bateau Metz',
    title: 'Permis Bateau Metz | Comparez et recevez un devis gratuit',
    description:
      'Passez votre permis bateau \u00e0 Metz d\u00e8s 225\u00a0\u20ac. Comparez les formations c\u00f4tier, fluvial et hauturier en Moselle et recevez un devis gratuit d\u2019un centre agr\u00e9\u00e9 en 24\u00a0h.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Permis Bateau Metz - Comparez les formations en Moselle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Permis Bateau Metz | Comparez et trouvez votre formation',
    description:
      'Passez votre permis bateau \u00e0 Metz d\u00e8s 225\u00a0\u20ac. Comparez c\u00f4tier, fluvial, hauturier et recevez un devis gratuit.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://permis-bateau-metz.fr',
  },
  verification: {
    google: 'VOTRE_CODE_VERIFICATION_GOOGLE',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://permis-bateau-metz.fr/#organization',
  name: 'Permis Bateau Metz',
  alternateName: 'Permis Bateau Metz - Plateforme d\u2019orientation permis bateau',
  url: 'https://permis-bateau-metz.fr',
  logo: 'https://permis-bateau-metz.fr/logo.png',
  description:
    'Plateforme ind\u00e9pendante d\u2019information et de mise en relation pour le permis bateau \u00e0 Metz et en Moselle. Nous ne sommes pas une \u00e9cole de navigation.',
  email: 'contact@permis-bateau-metz.fr',
  areaServed: [
    { '@type': 'City', name: 'Metz' },
    { '@type': 'AdministrativeArea', name: 'Moselle' },
    { '@type': 'AdministrativeArea', name: 'Grand Est' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://permis-bateau-metz.fr',
    },
  ],
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://permis-bateau-metz.fr/#website',
  name: 'Permis Bateau Metz',
  url: 'https://permis-bateau-metz.fr',
  description: 'Plateforme ind\u00e9pendante d\u2019information et de mise en relation pour le permis bateau \u00e0 Metz, Moselle et Grand Est.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://permis-bateau-metz.fr/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: { '@id': 'https://permis-bateau-metz.fr/#organization' },
  inLanguage: 'fr-FR',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P58QMC6Q');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* PostHog */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){var s=document.createElement("script");s.async=!0,s.src="/ingest/static/array.js",s.onload=function(){posthog.init("phc_QqF3iphmW2qFd6sBP1XmnQkNDcdPs0jmu9Zwe1Lgtei",{api_host:"/ingest",ui_host:"https://eu.posthog.com",person_profiles:"always",autocapture:true,capture_pageview:true,capture_pageleave:true,session_recording:{maskAllInputs:false,maskTextSelector:"",recordCrossOriginIframes:true}})},document.head.appendChild(s)}();`,
          }}
        />
        {/* End PostHog */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P58QMC6Q"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

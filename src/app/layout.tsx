import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://permis-bateau-metz.fr'),
  title: {
    default: 'Permis Bateau Metz | Formation Permis C\u00f4tier, Fluvial & Hauturier',
    template: '%s | Permis Bateau Metz',
  },
  description:
    'Centre de formation agr\u00e9\u00e9 permis bateau \u00e0 Metz. Permis c\u00f4tier, fluvial, hauturier. Taux de r\u00e9ussite 97%. Stages acc\u00e9l\u00e9r\u00e9s et cours du soir sur la Moselle.',
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
  ],
  authors: [{ name: 'Permis Bateau Metz' }],
  creator: 'Permis Bateau Metz',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://permis-bateau-metz.fr',
    siteName: 'Permis Bateau Metz',
    title: 'Permis Bateau Metz | Formation C\u00f4tier, Fluvial & Hauturier',
    description:
      'Passez votre permis bateau \u00e0 Metz avec un centre agr\u00e9\u00e9. Taux de r\u00e9ussite 97%, stages acc\u00e9l\u00e9r\u00e9s, cours sur la Moselle.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Permis Bateau Metz - Formation sur la Moselle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Permis Bateau Metz | Taux de r\u00e9ussite 97%',
    description:
      'Passez votre permis bateau \u00e0 Metz. C\u00f4tier, fluvial, hauturier. Stages acc\u00e9l\u00e9r\u00e9s et cours du soir.',
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
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://permis-bateau-metz.fr/#organization',
  name: 'Permis Bateau Metz',
  alternateName: 'Permis Bateau Metz - Centre de Formation Nautique',
  url: 'https://permis-bateau-metz.fr',
  logo: 'https://permis-bateau-metz.fr/logo.png',
  image: 'https://permis-bateau-metz.fr/og-image.jpg',
  description:
    'Centre de formation agr\u00e9\u00e9 pour le permis bateau \u00e0 Metz. Formations permis c\u00f4tier, fluvial et hauturier sur la Moselle.',
  telephone: '+33 3 87 00 00 00',
  email: 'contact@permis-bateau-metz.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Port de Plaisance de Metz',
    addressLocality: 'Metz',
    postalCode: '57000',
    addressRegion: 'Grand Est',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.1193,
    longitude: 6.1757,
  },
  areaServed: [
    { '@type': 'City', name: 'Metz' },
    { '@type': 'City', name: 'Longeville-l\u00e8s-Metz' },
    { '@type': 'City', name: 'Thionville' },
    { '@type': 'AdministrativeArea', name: 'Moselle' },
    { '@type': 'AdministrativeArea', name: 'Lorraine' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  priceRange: '\u20ac\u20ac',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formations Permis Bateau',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Permis Bateau - Option C\u00f4ti\u00e8re',
          description: 'Formation compl\u00e8te au permis c\u00f4tier avec th\u00e9orie et pratique sur la Moselle',
          provider: { '@id': 'https://permis-bateau-metz.fr/#organization' },
        },
        price: '445',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Permis Bateau - Th\u00e9orie Eaux Int\u00e9rieures',
          description: 'Formation au permis eaux int\u00e9rieures pour naviguer sur les rivi\u00e8res et canaux',
          provider: { '@id': 'https://permis-bateau-metz.fr/#organization' },
        },
        price: '225',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Permis Bateau - Option C\u00f4ti\u00e8re et Eaux Int\u00e9rieures',
          description: 'Formation combin\u00e9e permis c\u00f4tier et eaux int\u00e9rieures',
          provider: { '@id': 'https://permis-bateau-metz.fr/#organization' },
        },
        price: '545',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Extension Hauturi\u00e8re',
          description: 'Extension hauturi\u00e8re pour la navigation au large sans limite de distance',
          provider: { '@id': 'https://permis-bateau-metz.fr/#organization' },
        },
        price: '420',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Cours Pratique - Remise \u00e0 niveau',
          description: 'S\u00e9ance de pratique encadr\u00e9e pour les titulaires de permis souhaitant se remettre \u00e0 niveau',
          provider: { '@id': 'https://permis-bateau-metz.fr/#organization' },
        },
        price: '90',
        priceCurrency: 'EUR',
      },
    ],
  },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

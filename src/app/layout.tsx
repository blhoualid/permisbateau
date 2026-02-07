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
    'permis plaisance metz',
    'permis bateau 57',
    'permis bateau grand est',
    'permis bateau moselle 57000',
    'formation nautique metz',
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
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
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
  sameAs: [
    'https://www.facebook.com/permisbateaumetz',
    'https://www.instagram.com/permisbateaumetz',
  ],
  hasMap: 'https://maps.google.com/?cid=VOTRE_CID_GOOGLE',
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
    { '@type': 'City', name: 'Montigny-l\u00e8s-Metz' },
    { '@type': 'City', name: 'Woippy' },
    { '@type': 'City', name: 'Le Ban-Saint-Martin' },
    { '@type': 'City', name: 'Ars-sur-Moselle' },
    { '@type': 'City', name: 'Amn\u00e9ville' },
    { '@type': 'City', name: 'Hagondange' },
    { '@type': 'City', name: 'Pont-\u00e0-Mousson' },
    { '@type': 'City', name: 'Sarreguemines' },
    { '@type': 'City', name: 'Forbach' },
    { '@type': 'City', name: 'Yutz' },
    { '@type': 'City', name: 'Fameck' },
    { '@type': 'City', name: 'Hayange' },
    { '@type': 'AdministrativeArea', name: 'Moselle' },
    { '@type': 'AdministrativeArea', name: 'Lorraine' },
    { '@type': 'AdministrativeArea', name: 'Grand Est' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 49.1193,
      longitude: 6.1757,
    },
    geoRadius: '50000',
  },
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
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sophie M.' },
      datePublished: '2025-03-15',
      reviewBody: "Formation au top ! J'ai eu mon permis c\u00f4tier du premier coup gr\u00e2ce aux cours tr\u00e8s bien structur\u00e9s et \u00e0 la pratique sur la Moselle.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Thomas L.' },
      datePublished: '2025-02-20',
      reviewBody: "Excellent rapport qualit\u00e9-prix pour la formation c\u00f4ti\u00e8re + eaux int\u00e9rieures. Les cours du soir sont parfaits.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Marie-Claire D.' },
      datePublished: '2025-01-10',
      reviewBody: "\u00c0 58 ans, je me suis lanc\u00e9e ! L'accueil est chaleureux, les explications claires. Merci pour votre patience.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Julien R.' },
      datePublished: '2024-12-05',
      reviewBody: "Stage intensif le week-end : efficace, bien organis\u00e9 et ambiance sympa. Parfait quand on n'a pas le temps en semaine.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: '\u00c9lodie et Marc B.' },
      datePublished: '2024-11-18',
      reviewBody: "On a pass\u00e9 le permis en couple, c'\u00e9tait une super exp\u00e9rience ! Les cours en petit groupe permettent de bien progresser.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Pierre V.' },
      datePublished: '2024-10-22',
      reviewBody: "La formation hauturi\u00e8re est s\u00e9rieuse, les cours de navigation astronomique sont passionnants. Le formateur ma\u00eetrise son sujet.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
  ],
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
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'blended',
            courseWorkload: 'P2D',
          },
        },
        price: '445',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Permis Bateau - Th\u00e9orie Eaux Int\u00e9rieures',
          description: 'Formation au permis eaux int\u00e9rieures pour naviguer sur les rivi\u00e8res et canaux',
          provider: { '@id': 'https://permis-bateau-metz.fr/#organization' },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'blended',
            courseWorkload: 'P1D',
          },
        },
        price: '225',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Permis Bateau - Option C\u00f4ti\u00e8re et Eaux Int\u00e9rieures',
          description: 'Formation combin\u00e9e permis c\u00f4tier et eaux int\u00e9rieures',
          provider: { '@id': 'https://permis-bateau-metz.fr/#organization' },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'blended',
            courseWorkload: 'P3D',
          },
        },
        price: '545',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Extension Hauturi\u00e8re',
          description: 'Extension hauturi\u00e8re pour la navigation au large sans limite de distance',
          provider: { '@id': 'https://permis-bateau-metz.fr/#organization' },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'blended',
            courseWorkload: 'P5D',
          },
        },
        price: '420',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Cours Pratique - Remise \u00e0 niveau',
          description: 'S\u00e9ance de pratique encadr\u00e9e pour les titulaires de permis souhaitant se remettre \u00e0 niveau',
          provider: { '@id': 'https://permis-bateau-metz.fr/#organization' },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'onsite',
            courseWorkload: 'PT3H',
          },
        },
        price: '90',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
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

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://permis-bateau-metz.fr/#website',
  name: 'Permis Bateau Metz',
  url: 'https://permis-bateau-metz.fr',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

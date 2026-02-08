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
    'Trouvez et comparez les formations permis bateau \u00e0 Metz et en Moselle. C\u00f4tier, fluvial, hauturier : tarifs indicatifs, infos pratiques et mise en relation gratuite avec des centres agr\u00e9\u00e9s.',
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
      'Plateforme ind\u00e9pendante d\u2019orientation permis bateau \u00e0 Metz. Comparez les formules c\u00f4tier, fluvial, hauturier et soyez rappel\u00e9 gratuitement par un centre agr\u00e9\u00e9.',
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
      'Comparez les formations permis bateau \u00e0 Metz. C\u00f4tier, fluvial, hauturier. Mise en relation gratuite avec un centre agr\u00e9\u00e9.',
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
    { '@type': 'City', name: 'Thionville' },
    { '@type': 'City', name: 'Montigny-l\u00e8s-Metz' },
    { '@type': 'City', name: 'Woippy' },
    { '@type': 'City', name: 'Longeville-l\u00e8s-Metz' },
    { '@type': 'City', name: 'Pont-\u00e0-Mousson' },
    { '@type': 'City', name: 'Forbach' },
    { '@type': 'City', name: 'Hayange' },
    { '@type': 'City', name: 'Fameck' },
    { '@type': 'City', name: 'Yutz' },
    { '@type': 'City', name: 'Amn\u00e9ville' },
    { '@type': 'City', name: 'Hagondange' },
    { '@type': 'AdministrativeArea', name: 'Moselle' },
    { '@type': 'AdministrativeArea', name: 'Lorraine' },
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
            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init rs ls wi ns us ts ss capture calculateEventProperties vs register register_once register_for_session unregister unregister_for_session gs getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty fs ds createPersonProfile setInternalOrTestUser ps Qr opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing hs debug M cs getPageViewId captureTraceFeedback captureTraceMetric Kr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_QqF3iphmW2qFd6sBP1XmnQkNDcdPs0jmu9Zwe1Lgtei',{api_host:'https://eu.i.posthog.com',defaults:'2025-11-30',person_profiles:'identified_only'});`,
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

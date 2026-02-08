# Permis Bateau Metz

Plateforme independante d'information et de mise en relation pour le permis bateau a Metz, en Moselle et dans le Grand Est.

> **Ce site n'est pas une ecole de navigation.** Il met en relation les visiteurs avec des centres de formation agrees partenaires.

## Stack technique

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS 3 (theme nautique custom)
- **Deploiement** : Hostinger (Node.js, `output: 'standalone'`)
- **Formulaire** : Web3Forms (API key en dur)
- **Analytics** : PostHog (region EU) + Google Tag Manager
- **SEO** : Schema.org JSON-LD, sitemap XML, robots.txt

## Structure du projet

```
src/
  app/
    layout.tsx              # Layout global, schemas JSON-LD, GTM, PostHog
    page.tsx                # Homepage
    blog/
      page.tsx              # Liste des articles
      [slug]/page.tsx       # Article individuel
    mentions-legales/       # Mentions legales
    politique-de-confidentialite/  # RGPD
    api/contact/route.ts    # API contact (fallback)
    sitemap.ts              # Sitemap dynamique
    robots.ts               # Robots.txt (AI bots autorises)
  components/
    Header.tsx              # Navigation sticky
    Hero.tsx                # Hero section
    Formations.tsx          # Comparaison des permis (cotier, fluvial, hauturier)
    Tarifs.tsx              # Tableau tarifs indicatifs
    CommentCaMarche.tsx     # 3 etapes : demande > mise en relation > rappel
    Avantages.tsx           # Avantages de la plateforme
    FAQ.tsx                 # FAQ avec schema FAQPage
    ContactForm.tsx         # Formulaire Web3Forms + consentement RGPD
    Footer.tsx              # Footer
    PostHogProvider.tsx     # Provider PostHog client-side
  data/
    articles.ts             # 7 articles blog SEO
public/
  favicon.svg               # Favicon bateau SVG
  manifest.json             # PWA manifest
```

## Installation

```bash
npm install
```

## Variables d'environnement

Creer un fichier `.env.local` a la racine :

```env
NEXT_PUBLIC_POSTHOG_KEY=phc_votre_cle_posthog
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

> Les variables `NEXT_PUBLIC_*` sont injectees au **build**, pas au runtime. Elles doivent etre definies avant `npm run build`.

## Commandes

```bash
npm run dev       # Serveur de dev (http://localhost:3000)
npm run build     # Build production
npm run start     # Serveur production
npm run lint      # Lint
```

## SEO & Schemas JSON-LD

| Schema | Fichier | Objectif |
|--------|---------|----------|
| Organization | layout.tsx | Identite plateforme (sans adresse physique) |
| WebSite + SearchAction | layout.tsx | Sitelinks searchbox Google |
| BreadcrumbList | layout.tsx | Fil d'Ariane SERP |
| FAQPage | FAQ.tsx | Rich snippets FAQ |
| Article | blog/[slug]/page.tsx | Articles enrichis |

> Pas de LocalBusiness, AggregateRating ni Review (le site n'est pas une ecole).

## Conformite

- **Plateforme independante** : disclaimers visibles (hero, formulaire, footer, mentions legales)
- **RGPD** : case de consentement obligatoire, politique de confidentialite, finalite "mise en relation"
- **Tarifs** : mentionnes comme "indicatifs constates aupres des centres agrees"
- **Pas de donnees fictives** : aucun avis, note, telephone, adresse ou horaire inventes

## Services tiers

| Service | Usage | Configuration |
|---------|-------|---------------|
| Web3Forms | Reception des leads | Cle API dans ContactForm.tsx |
| Google Tag Manager | Tag management | GTM-P58QMC6Q dans layout.tsx |
| PostHog | Analytics | Variable env `NEXT_PUBLIC_POSTHOG_KEY` |
| Pexels | Images articles blog | remote patterns dans next.config.ts |

## Deploiement Hostinger

1. Connecter le repo Git sur Hostinger
2. Ajouter les variables d'environnement (`NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`)
3. Build command : `npm run build`
4. Start command : `npm run start`
5. Le mode `output: 'standalone'` est deja configure

## A completer

- [ ] Remplacer `VOTRE_CODE_VERIFICATION_GOOGLE` dans layout.tsx par le code Google Search Console
- [ ] Remplacer `[A completer]` dans mentions-legales (SIRET, forme juridique, directeur publication)
- [ ] Remplacer `xxx` dans .env.local par la vraie cle PostHog
- [ ] Ajouter `/apple-touch-icon.png` (180x180) dans /public
- [ ] Creer un Google Business Profile et relier au site

/**
 * SEO Configuration for devtools4me
 * Contains all SEO-related metadata, titles, descriptions, and JSON-LD structured data
 */

// Base site configuration
export const SITE_CONFIG = {
  siteName: 'devtools4me',
  siteUrl: 'https://devtools4me.com',
  twitterHandle: '@devtools4me',
  ogImage: '/og-images.png',
  favicon: '/favicon.ico',
};

// Landing Page SEO Configuration
export const LANDING_PAGE_SEO = {
  title: "The Developer Toolkit You'll Actually Bookmark",
  description: 'Fast, clean, and private. No ads. No sign-ups. Every tool runs in your browser — your data never leaves your machine.',
  keywords: 'developer tools, online tools, JSON formatter, HTML to JSX, QR code generator, Base64 encoder, regex tester, markdown editor, CSS minifier, URL encoder, free dev tools, browser tools, privacy-focused tools, no ads, no sign-up, local processing',
  canonical: 'https://devtools4me.com/',
  ogImage: '/og-images.png',
  url: 'https://devtools4me.com/',
};

// JSON-LD Structured Data for Landing Page
export const LANDING_PAGE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'devtools4me',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web Browser',
  description: 'Fast, clean, and private developer toolkit. No ads. No sign-ups. Every tool runs in your browser — your data never leaves your machine.',
  url: 'https://devtools4me.com',
  image: 'https://devtools4me.com/og-images.png',
  author: {
    '@type': 'Organization',
    name: 'devtools4me',
    url: 'https://devtools4me.com',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1',
  },
  featureList: [
    'JSON Formatter & Validator',
    'HTML to JSX Converter',
    'QR Code Generator',
    'Base64 Encoder/Decoder',
    'Regex Tester & Debugger',
    'Markdown Preview Editor',
    'CSS Minifier & Beautifier',
    'URL Encoder/Decoder',
  ],
  browserRequirements: 'Requires JavaScript. Modern browser recommended.',
  permissions: 'No permissions required. All processing happens locally.',
};

// Organization JSON-LD
export const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'devtools4me',
  url: 'https://devtools4me.com',
  logo: 'https://devtools4me.com/favicon.png',
  description: 'Developer tools that respect your privacy and your time. Fast, clean, ad-free workspace where every keystroke stays on your machine.',
  sameAs: [
    'https://github.com/saurowankhade',
    'https://peerlist.io/saurowankhade',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    url: 'https://devtools4me.com',
  },
};

// Website JSON-LD
export const WEBSITE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'devtools4me',
  url: 'https://devtools4me.com',
  description: 'The Developer Toolkit You\'ll Actually Bookmark. Fast, clean, and private developer tools.',
  publisher: {
    '@type': 'Organization',
    name: 'devtools4me',
    logo: {
      '@type': 'ImageObject',
      url: 'https://devtools4me.com/favicon.png',
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://devtools4me.com/#tools?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

// Breadcrumb JSON-LD for Landing Page
export const LANDING_PAGE_BREADCRUMB_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://devtools4me.com',
    },
  ],
};

// FAQ JSON-LD (can be used if you add FAQ section)
export const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is devtools4me free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all tools on devtools4me are completely free to use. No sign-ups, no subscriptions, no hidden fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Every tool runs locally in your browser. Nothing is uploaded, stored, or logged. Your data never leaves your machine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to create an account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No account needed. Just open any tool and start working immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No advertisements. No cookie banners. No tracking. Just clean, distraction-free tools.',
      },
    },
  ],
};

// Helper function to combine multiple JSON-LD objects
export const combineJSONLD = (...jsonLDObjects) => {
  return {
    '@context': 'https://schema.org',
    '@graph': jsonLDObjects,
  };
};

// Export complete landing page SEO data
export const getLandingPageSEO = () => {
  return {
    ...LANDING_PAGE_SEO,
    jsonLD: combineJSONLD(
      LANDING_PAGE_JSONLD,
      ORGANIZATION_JSONLD,
      WEBSITE_JSONLD,
      LANDING_PAGE_BREADCRUMB_JSONLD,
      FAQ_JSONLD
    ),
  };
};

// Export default SEO configuration
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  SITE_CONFIG,
  LANDING_PAGE_SEO,
  LANDING_PAGE_JSONLD,
  ORGANIZATION_JSONLD,
  WEBSITE_JSONLD,
  LANDING_PAGE_BREADCRUMB_JSONLD,
  FAQ_JSONLD,
  combineJSONLD,
  getLandingPageSEO,
};

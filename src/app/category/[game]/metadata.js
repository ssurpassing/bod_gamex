import { SITE_CONFIG } from '@/config/site';

export async function generateMetadata({ params }) {
  const gameCategory = params.game;

  // Find category info
  const categoryInfo = SITE_CONFIG.categories.find(cat =>
    cat.name.toLowerCase() === gameCategory.toLowerCase() ||
    cat.slug === gameCategory.toLowerCase()
  ) || { name: gameCategory, description: `Browse the best ${gameCategory} games` };

  const categoryName = categoryInfo.name;
  const categoryDescription = categoryInfo.description;

  // SEO optimized title and description
  const title = `${categoryName} Games - Play Free Online | PlayFun Games`;
  const description = `Play the best free ${categoryName.toLowerCase()} games online! ${categoryDescription}. No downloads required, instant play on desktop and mobile.`;

  // Keywords specific to category
  const keywords = [
    `${categoryName.toLowerCase()} games`,
    `free ${categoryName.toLowerCase()} games`,
    `online ${categoryName.toLowerCase()} games`,
    `play ${categoryName.toLowerCase()} games`,
    `browser ${categoryName.toLowerCase()} games`,
    `HTML5 ${categoryName.toLowerCase()} games`,
    `${categoryName.toLowerCase()} games online free`,
    ...SITE_CONFIG.keywords
  ];

  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `${categoryName} Games - Play Free Online`,
      description,
      url: `${SITE_CONFIG.url}/category/${gameCategory}`,
      siteName: 'PlayFun Games',
      images: [
        {
          url: `${SITE_CONFIG.url}/og-category-${gameCategory}.jpg`,
          width: 1200,
          height: 630,
          alt: `${categoryName} Games - PlayFun Games`,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} Games - Play Free Online`,
      description,
      images: [`${SITE_CONFIG.url}/twitter-category-${gameCategory}.jpg`],
    },
    alternates: {
      canonical: `/category/${gameCategory}`,
      languages: {
        'en': `/en/category/${gameCategory}`,
        'es': `/es/category/${gameCategory}`,
        'fr': `/fr/category/${gameCategory}`,
        'de': `/de/category/${gameCategory}`,
        'pt': `/pt/category/${gameCategory}`,
      },
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
  };
}
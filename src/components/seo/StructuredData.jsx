export const WebsiteStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PlayFun Games - 200+ Free Online Games",
    "url": "https://playfungames.com",
    "description": "Play 200+ free online games instantly! No downloads required. Action, puzzle, racing, multiplayer & more. Mobile-friendly gaming platform.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://playfungames.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PlayFun Games",
      "url": "https://playfungames.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export const GameStructuredData = ({ game }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": game.gameTitle,
    "description": `Play ${game.gameTitle} online for free. ${game.gameCategory} game that works on all devices.`,
    "url": `https://playfungames.com/play/${encodeURIComponent(game.gameTitle)}`,
    "image": game.gameImage,
    "genre": game.gameCategory,
    "gamePlatform": "Web Browser",
    "operatingSystem": "Any",
    "applicationCategory": "Game",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": game.rating ? {
      "@type": "AggregateRating",
      "ratingValue": game.rating,
      "ratingCount": game.ratingCount || 1
    } : undefined,
    "playCount": game.view || 0
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export const BreadcrumbStructuredData = ({ items }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export const OrganizationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PlayFun Games",
    "url": "https://playfungames.com",
    "logo": "https://playfungames.com/logo.png",
    "description": "Free online gaming platform with 200+ instant play games",
    "sameAs": [
      "https://facebook.com/playfungames",
      "https://twitter.com/playfungames",
      "https://instagram.com/playfungames"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Spanish", "French", "German", "Portuguese"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
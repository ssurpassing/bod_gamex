export const SITE_CONFIG = {
  name: "PlayFun Games - 200+ Free Online Games",
  description: "Play 200+ free online games instantly! No downloads required. Action, puzzle, racing, multiplayer & more. Mobile-friendly gaming platform.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://playfungames.com",
  keywords: [
    "free online games", "play games online", "browser games", "HTML5 games",
    "mobile games", "instant games", "no download games", "action games",
    "puzzle games", "racing games", "multiplayer games", "casual games",
    "online gaming", "web games", "free games", "play free games"
  ],

  // Game categories optimized for SEO
  categories: [
    { name: "Action", slug: "action-games", description: "Exciting action games and adventures" },
    { name: "Puzzle", slug: "puzzle-games", description: "Brain teasers and mind games" },
    { name: "Racing", slug: "racing-games", description: "Car racing and driving games" },
    { name: "Multiplayer", slug: "multiplayer-games", description: "Play with friends online" },
    { name: "Shooting", slug: "shooting-games", description: "Target shooting and battle games" },
    { name: "Sports", slug: "sports-games", description: "Soccer, basketball and sports games" },
    { name: "Arcade", slug: "arcade-games", description: "Classic arcade style games" },
    { name: "Strategy", slug: "strategy-games", description: "Strategic thinking games" },
    { name: "Adventure", slug: "adventure-games", description: "Exploration and adventure games" },
    { name: "Girls", slug: "girls-games", description: "Games for girls" },
    { name: "Kids", slug: "kids-games", description: "Safe games for kids" },
    { name: "3D Games", slug: "3d-games", description: "3D graphics games" }
  ],

  // Default images
  images: {
    placeholder: '/placeholder-game.jpg',
    logo: '/logo.png',
    ogImage: '/og-image.jpg'
  },

  // Game limits optimized for performance
  limits: {
    homepageGames: 16,
    categoryGames: 24,
    searchResults: 20,
    relatedGames: 8
  },

  // SEO defaults
  seo: {
    defaultTitle: "PlayFun Games - 200+ Free Online Games | Play Instantly",
    defaultDescription: "Play 200+ free online games instantly! No downloads required. Action, puzzle, racing, multiplayer & more."
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    gtmId: process.env.NEXT_PUBLIC_GTM_ID
  }
};

export const API_ENDPOINTS = {
  games: '/api/game',
  login: '/api/login',
  categories: '/api/game/categories'
};
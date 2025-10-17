export const SITE_CONFIG = {
  name: "GameX - Online Games Platform",
  description: "Play the best online games for free. Action, racing, puzzle games and more!",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gamex.example.com",
  keywords: ["online games", "free games", "browser games", "html5 games", "mobile games"],

  // Game categories
  categories: [
    "Action",
    "Adventure",
    "Arcade",
    "Car",
    "Multiplayer",
    "Puzzle",
    "Shooting",
    "Sports",
    "Strategy"
  ],

  // Default images
  images: {
    placeholder: '/placeholder-game.jpg',
    logo: '/logo.png',
    ogImage: '/og-image.png'
  },

  // Game limits
  limits: {
    homepageGames: 12,
    categoryGames: 20,
    searchResults: 15
  },

  // SEO defaults
  seo: {
    defaultTitle: "GameX - Play Free Online Games",
    defaultDescription: "Discover and play the best free online games. No downloads required!"
  }
};

export const API_ENDPOINTS = {
  games: '/api/game',
  login: '/api/login',
  categories: '/api/game/categories'
};
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/template/header";
import Footer from "@/components/template/footer";
import { Providers } from "./providers";
import Analytics from "@/components/analytics/Analytics";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: 'PlayFun Games - 200+ Free Online Games | Play Instantly',
    template: '%s | PlayFun Games'
  },
  description: 'Play 200+ free online games instantly! No downloads required. Action, puzzle, racing, multiplayer & more. New HTML5 games added weekly. Mobile-friendly gaming platform.',
  keywords: [
    'free online games', 'play games online', 'browser games', 'HTML5 games',
    'mobile games', 'instant games', 'no download games', 'action games',
    'puzzle games', 'racing games', 'multiplayer games', 'casual games',
    'online gaming', 'web games', 'free games', 'play free games'
  ],
  authors: [{ name: 'PlayFun Games Team' }],
  creator: 'PlayFun Games',
  publisher: 'PlayFun Games',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://playfungames.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
      'fr': '/fr',
      'de': '/de',
      'pt': '/pt',
      'it': '/it',
      'ja': '/ja',
      'ko': '/ko',
      'zh': '/zh',
      'ru': '/ru',
    },
  },
  openGraph: {
    title: 'PlayFun Games - 200+ Free Online Games | Play Instantly',
    description: 'Play 200+ free online games instantly! No downloads required. Action, puzzle, racing, multiplayer & more.',
    url: 'https://playfungames.com',
    siteName: 'PlayFun Games',
    images: [
      {
        url: 'https://playfungames.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PlayFun Games - Free Online Gaming Platform',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlayFun Games - 200+ Free Online Games',
    description: 'Play 200+ free online games instantly! No downloads required.',
    images: ['https://playfungames.com/twitter-image.jpg'],
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
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#00d4ff' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html className={`dark ${inter.className}`} lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0f0f23" />
        <meta name="msapplication-TileColor" content="#0f0f23" />
        <link rel="dns-prefetch" href="https://game.fastgame.lol" />
        <link rel="dns-prefetch" href="https://supabase.com" />
      </head>
      <body className="bg-primary-bg text-text-primary antialiased">
        <Providers>
          <Headers />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

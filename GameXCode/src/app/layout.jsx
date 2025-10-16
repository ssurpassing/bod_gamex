import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/template/header";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: 'GameX - Play Free Online Games | Instant Gaming Fun',
    template: '%s | GameX'
  },
  description: 'Discover thousands of free online games at GameX. Play instantly without downloads! Action, puzzle, sports, and multiplayer games. New games added daily.',
  keywords: ['free online games', 'browser games', 'HTML5 games', 'mobile games', 'action games', 'puzzle games', 'multiplayer games', 'casual games'],
  authors: [{ name: 'GameX Team' }],
  creator: 'GameX',
  publisher: 'GameX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gamex.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
      'fr-FR': '/fr-FR',
      'de-DE': '/de-DE',
      'pt-BR': '/pt-BR',
    },
  },
  openGraph: {
    title: 'GameX - Play Free Online Games | Instant Gaming Fun',
    description: 'Discover thousands of free online games at GameX. Play instantly without downloads! Action, puzzle, sports, and multiplayer games.',
    url: 'https://gamex.com',
    siteName: 'GameX',
    images: [
      {
        url: 'https://gamex.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GameX - Free Online Games',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameX - Play Free Online Games',
    description: 'Discover thousands of free online games. Play instantly without downloads!',
    images: ['https://gamex.com/twitter-image.jpg'],
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
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

// Simple analytics component
function Analytics() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `
        }}
      />
    </>
  );
}

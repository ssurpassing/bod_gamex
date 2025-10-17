import Head from 'next/head';

export const MetaTags = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  gameTitle,
  gameCategory
}) => {
  const siteName = "PlayFun Games";
  const defaultTitle = "PlayFun Games - 200+ Free Online Games | Play Instantly";
  const defaultDescription = "Play 200+ free online games instantly! No downloads required. Action, puzzle, racing, multiplayer & more. Mobile-friendly gaming platform.";
  const defaultImage = "https://playfungames.com/og-image.jpg";
  const siteUrl = "https://playfungames.com";

  const finalTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image || defaultImage;
  const finalUrl = url ? `${siteUrl}${url}` : siteUrl;

  const finalKeywords = keywords ? [
    ...keywords,
    'free online games', 'play games online', 'browser games', 'HTML5 games',
    'mobile games', 'instant games', 'no download games'
  ] : [
    'free online games', 'play games online', 'browser games', 'HTML5 games',
    'mobile games', 'instant games', 'no download games', 'action games',
    'puzzle games', 'racing games', 'multiplayer games', 'casual games'
  ];

  if (gameTitle && gameCategory) {
    finalKeywords.push(`${gameTitle} game`, `${gameCategory} games`, `play ${gameTitle}`);
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      <meta name="author" content="PlayFun Games Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:site" content="@playfungames" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />

      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />

      {/* Content Classification */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />

      {/* Performance and Caching */}
      <meta httpEquiv="Cache-Control" content="public" />
      <meta name="expires" content={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()} />

      {/* Alternative Language Links */}
      <link rel="alternate" hrefLang="en" href={finalUrl} />
      <link rel="alternate" hrefLang="es" href={`${finalUrl.replace('/en/', '/es/')}`} />
      <link rel="alternate" hrefLang="fr" href={`${finalUrl.replace('/en/', '/fr/')}`} />
      <link rel="alternate" hrefLang="de" href={`${finalUrl.replace('/en/', '/de/')}`} />
      <link rel="alternate" hrefLang="pt" href={`${finalUrl.replace('/en/', '/pt/')}`} />
      <link rel="alternate" hrefLang="x-default" href={finalUrl} />

      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.playfungames.com" />

      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Icons and Manifest */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};
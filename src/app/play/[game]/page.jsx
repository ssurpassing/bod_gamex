import PageClient from "./playGame";
import { headers } from "next/headers";

export async function generateMetadata({ params, searchParams }) {
  const GameId = params.game;
  const url_var = process.env.NEXT_PUBLIC_BASE_URL; // Get base URL from .env

  let gameData = {};
  try {
    const response = await fetch(`${url_var}/api/game?id=${GameId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch game data");
    }
    gameData = await response.json();
  } catch (error) {
    console.error("Error fetching game data:", error);
    gameData = {
      gameTitle: "Unknown Game",
      description: "Error loading game data",
      metaKeywords: "game, video, unknown",
      gameImage: "/default-game-image.jpg",
      gameUrl: "",
      metaUrl: "unknown-game",
    };
  }

  return {
    title: `${gameData.gameTitle} | Play free online games`,
    description: gameData.description,
    keywords: gameData.metaKeywords,
    openGraph: {
      title: gameData.gameTitle,
      description: gameData.description,
      url: `${url_var}/play?id=${gameData.id}`,
      siteName: "GamePlay Site",
      images: [
        {
          url: gameData.gameImage,
          width: 800,
          height: 600,
          alt: gameData.gameTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: gameData.gameTitle,
      description: gameData.description,
      images: [gameData.gameImage],
    },
    alternates: {
      canonical: `${url_var}/play?id=${gameData.id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function Page({ params }) {
  return (
    <div>
      <PageClient id={params.game} />
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { useGames } from "@/hooks/useGames";

const TopArea = () => {
  const { games, loading, error } = useGames(null, 'views', 6);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 select-none">
        <div><div className="h-40 md:h-64 w-full bg-gray-200 rounded-md animate-pulse" /></div>
        <div className="grid grid-cols-2 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-20 md:h-28 w-full bg-gray-200 rounded-md animate-pulse" />
          ))}
        </div>
        <div><div className="h-40 md:h-64 w-full bg-gray-200 rounded-md animate-pulse" /></div>
      </div>
    );
  }

  if (error || games.length === 0) {
    return <div className="text-gray-500 text-center py-10">No featured games available</div>;
  }

  const [mainGame, ...otherGames] = games;
  const [leftGame, rightGame, ...smallGames] = otherGames;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 select-none">
      {/* Left large game */}
      <Link href={`/play/${encodeURIComponent(leftGame.gameTitle)}`} className="group">
        <img
          className="h-40 md:h-64 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
          src={leftGame.gameImage || '/placeholder-game.jpg'}
          alt={leftGame.gameTitle}
        />
      </Link>

      {/* Center grid with 4 small games */}
      <div className="grid grid-cols-2 gap-5">
        {smallGames.slice(0, 4).map((game) => (
          <Link key={game.id} href={`/play/${encodeURIComponent(game.gameTitle)}`} className="group">
            <img
              src={game.gameImage || '/placeholder-game.jpg'}
              className="h-20 md:h-28 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
              alt={game.gameTitle}
            />
          </Link>
        ))}
      </div>

      {/* Right large game */}
      <Link href={`/play/${encodeURIComponent(rightGame.gameTitle)}`} className="group">
        <img
          className="h-40 md:h-64 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
          src={rightGame.gameImage || '/placeholder-game.jpg'}
          alt={rightGame.gameTitle}
        />
      </Link>
    </div>
  );
};

export default TopArea;

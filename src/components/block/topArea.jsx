import React, { useState, useEffect } from "react";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";

const TopArea = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/game");
        const data = await response.json();

        const sortedGames = data.sort((a, b) => b.view - a.view);
        setGames(sortedGames);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 select-none">
        <div>
          <Skeleton className="h-40 md:h-64 w-full rounded-md" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Skeleton className="h-20 md:h-28 w-full rounded-md" />
          <Skeleton className="h-20 md:h-28 w-full rounded-md" />
          <Skeleton className="h-20 md:h-28 w-full rounded-md" />
          <Skeleton className="h-20 md:h-28 w-full rounded-md" />
        </div>
        <div>
          <Skeleton className="h-40 md:h-64 w-full rounded-md" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 select-none">
      {games.length > 0 && (
        <>
          <div>
            <Link href={`/play/${games[0]?.id}`}>
              <img
                className="h-40 md:h-64 w-full rounded-md"
                src={games[0]?.gameImage}
                alt={`Game Image ${games[0]?.gameTitle}`}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
          <Link href={`/play/${games[1]?.id}`}>
          <img
                src={games[1]?.gameImage}
                className="h-20 md:h-28 w-full rounded-md"
                alt={`Game Image ${games[1]?.gameTitle}`}
              />
            </Link>
            <Link href={`/play/${games[2]?.id}`}>
              <img
                src={games[2]?.gameImage}
                className="h-20 md:h-28 w-full rounded-md"
                alt={`Game Image ${games[2]?.gameTitle}`}
              />
            </Link>
            <Link href={`/play/${games[3]?.id}`}>
              <img
                src={games[3]?.gameImage}
                className="h-20 md:h-28 w-full rounded-md"
                alt={`Game Image ${games[3]?.gameTitle}`}
              />
            </Link>
            <Link href={`/play/${games[4]?.id}`}>
              <img
                src={games[4]?.gameImage}
                className="h-20 md:h-28 w-full rounded-md"
                alt={`Game Image ${games[4]?.gameTitle}`}
              />
            </Link>
          </div>
          <div>
          <Link href={`/play/${games[5]?.id}`}>
          <img
                className="h-40 md:h-64 w-full rounded-md"
                src={games[5]?.gameImage}
                alt={`Game Image ${games[5]?.gameTitle}`}
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default TopArea;

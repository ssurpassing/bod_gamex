"use client";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";

const PlaySidebar = ({ params }) => {
  // const params = useSearchParams();
  const GameCategory = params.game;
  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/game");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();

        data = data.filter((item) => item.gameCategory === GameCategory);

        setGameData(data);
      } catch (error) {
        console.error("Error fetching games:", error);
        setError(error); // Set error in state
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [GameCategory]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 p-5">
        {Array.from({ length: 24 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-24 md:h-32 rounded-md" />
        ))}
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  if (gameData.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-5 p-5">
      {gameData.map((item) => (
        <Link key={item.id} href={`/play/${item.id}`}>
          <div>
            <img src={item.gameImage} alt={item.gameName} className="" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlaySidebar;

import React, { useEffect, useState } from "react";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";

const PlaySidebar = ({ offset = 0 }) => {
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
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Expected an array of games.");
        }

        // Ensure offset is a valid number and doesn't exceed the data length
        const validOffset = Math.min(Math.max(0, offset), data.length);
        const slicedData = data.slice(validOffset);

        setGameData(slicedData);
        // console.log("Sliced Data:", slicedData);
      } catch (error) {
        console.error("Error fetching games:", error);
        setError(error); // Set error in state
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [offset]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-20 rounded-md" />
        ))}
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-2 gap-5">
      {gameData.slice(0, 10).map((item) => (
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

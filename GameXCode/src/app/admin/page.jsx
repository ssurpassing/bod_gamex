"use client";
import React, { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react"; // Import Spinner if using NextUI

const Page = () => {
  const [games, setGames] = useState([]);
  const [topGames, setTopGames] = useState([]); // State for top games
  const [loadingGames, setLoadingGames] = useState(true); // Loading state for games
  const [loadingTopGames, setLoadingTopGames] = useState(true); // Loading state for top games
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/game");
        const data = await response.json();
        const sortedGames = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setGames(sortedGames);
        setLoadingGames(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching games:", error);
        setError(error);
        setLoadingGames(false); // Set loading to false on error
      }
    };

    const fetchTopGames = async () => {
      try {
        const response = await fetch("/api/game");
        const data = await response.json();
        const sortedGames = data.sort((a, b) => b.view - a.view);
        setTopGames(sortedGames);
        setLoadingTopGames(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching top games:", error);
        setError(error);
        setLoadingTopGames(false); // Set loading to false on error
      }
    };

    fetchGames();
    fetchTopGames(); // Fetch top games separately
  }, []);

  if (loadingGames || loadingTopGames) {
    return (
      <div className="flex w-full h-full items-center justify-center pt-64">
        <Spinner color="primary" size="lg" />
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex gap-16 mx-8">
        {!loadingTopGames && (
          <div className="w-1/2 relative">
            <h1 className="my-4 px-2 font-semibold text-2xl">
              Top Trending Games
            </h1>
            {topGames.length === 0 ? (
              <p>No top games available.</p>
            ) : (
              // Slice the topGames array to show only the first 8 games
              topGames.slice(0, 8).map((game, index) => (
                <div
                  key={game.id}
                  className="flex justify-start mb-4 gap-5 box-shadow-game rounded-md p-4"
                >
                  <img src={game.gameImage} alt="" className="w-40 h-24" />
                  <div className="">
                    <h1 className="absolute top-4 left-5 text-5xl opacity-60">
                      {index + 1}
                    </h1>
                    <h2 className="text-2xl font-semibold">{game.gameTitle}</h2>
                    <p className="">
                      {game.description
                        ? game.description.length > 100
                          ? `${game.description.substring(0, 100)}...`
                          : game.description
                        : "No description available."}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {!loadingGames && (
          <div className="w-1/2 relative">
            <h1 className="my-4 px-2 font-semibold text-2xl">New Games</h1>
            {games.length === 0 ? (
              <p>No new games available.</p>
            ) : (
              // Slice the games array to show only the first 8 games
              games.slice(0, 8).map((game, index) => (
                <div
                  key={game.id}
                  className="flex justify-start mb-4 gap-5 box-shadow-game rounded-md p-4"
                >
                  <img src={game.gameImage} alt="" className="w-40 h-24" />
                  <div className="">
                    <h1 className="absolute top-4 left-5 text-5xl opacity-40">
                      {index + 1}
                    </h1>
                    <h2 className="text-2xl font-semibold">{game.gameTitle}</h2>
                    <p className="">
                      {game.description
                        ? game.description.length > 100
                          ? `${game.description.substring(0, 100)}...`
                          : game.description
                        : "No description available."}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

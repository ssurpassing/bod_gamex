"use client";
import React from "react";
import Link from "next/link";
import { useGames } from "@/hooks/useGames";

const CategoryPage = ({ params }) => {
  const gameCategory = params.game;
  const { games, loading, error } = useGames(gameCategory, null, 24);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 p-5">
        {Array.from({ length: 24 }).map((_, index) => (
          <div key={index} className="w-full h-24 md:h-32 bg-gray-200 rounded-md animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) return <div className="text-red-500 text-center py-10">Error: {error}</div>;

  if (games.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">No games found in {gameCategory} category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-5 p-5">
      {games.map((item) => (
        <Link key={item.id} href={`/play/${encodeURIComponent(item.gameTitle)}`} className="group">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={item.gameImage || '/placeholder-game.jpg'}
              alt={item.gameTitle}
              className="w-full h-24 md:h-32 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
              <p className="text-white text-sm font-medium">{item.gameTitle}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
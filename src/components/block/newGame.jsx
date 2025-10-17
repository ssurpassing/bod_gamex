import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useGames } from "@/hooks/useGames";

const NewGame = ({ filterData, limit = 20 }) => {
  const scrollRef = useRef(null);
  const { games, loading, error } = useGames(filterData, 'date', limit);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 1000;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="flex gap-4 overflow-hidden select-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-32 w-60 bg-gray-200 rounded-md flex-shrink-0 animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) return <div className="text-red-500">Error: {error}</div>;

  if (games.length === 0) {
    return (
      <div className="flex justify-center items-center h-36">
        <p className="text-gray-500">No games available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full group overflow-hidden">
      <button
        className="absolute left-2 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={() => scroll("left")}
      >
        <FaChevronLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide select-none"
      >
        {games.map((item) => (
          <Link
            key={item.id}
            href={`/play/${encodeURIComponent(item.gameTitle)}`}
            className="flex-shrink-0 relative overflow-hidden rounded-md group"
          >
            <img
              className="h-32 w-60 rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
              src={item.gameImage || '/placeholder-game.jpg'}
              alt={item.gameTitle}
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-sm text-white font-medium">{item.gameTitle}</p>
            </div>
          </Link>
        ))}
      </div>

      <button
        className="absolute right-2 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={() => scroll("right")}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default NewGame;

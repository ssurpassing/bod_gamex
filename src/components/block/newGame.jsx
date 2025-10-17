import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Skeleton } from "@nextui-org/skeleton";

const NewGame = ({ filterData }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/game");
        let data = await response.json();

        if (filterData) {
          data = data.filter((item) => item.gameCategory === filterData);
        }

        data.sort((a, b) => new Date(b.date) - new Date(a.date));

        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

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
          <Skeleton key={index} className="h-32 w-60  rounded-md flex-shrink-0"></Skeleton>
        ))}
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  if (games.length === 0) {
    return (
      <div className="flex justify-center items-center h-36">
        <p>No Game available</p>
      </div>
    );
  };

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
            href={`/play/${item.id}`}
            className="flex-shrink-0 relative overflow-hidden rounded-md"
          >
            <div>
              <img
                className="h-32 w-60 rounded-md transition-border duration-300"
                src={item.gameImage}
                alt={item.gameTitle}
                draggable="false"
              />
              <div className="absolute inset-0 bg-black/20 bg-opacity-50 hover:opacity-100 opacity-0 transition-opacity duration-300 flex items-end p-2">
                <p className="text-xs text-white">{item.gameTitle}</p>
              </div>
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

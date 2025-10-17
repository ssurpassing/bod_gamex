import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useGames } from "@/hooks/useGames";
import { GameCard, GameCardSkeleton } from "@/components/GameCard";

const NewGame = ({ filterData, limit = 20, showViewAll = true }) => {
  const scrollRef = useRef(null);
  const { games, loading, error } = useGames(filterData, 'date', limit);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 320; // Width of one game card plus gap
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {Array.from({ length: Math.min(limit, 6) }).map((_, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <GameCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 bg-card-bg/20 rounded-2xl border border-border-color">
        <div className="text-center">
          <div className="text-4xl mb-2">😞</div>
          <p className="text-text-secondary">Unable to load games</p>
          <p className="text-text-muted text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 bg-card-bg/20 rounded-2xl border border-border-color">
        <div className="text-center">
          <div className="text-4xl mb-2">🎮</div>
          <p className="text-text-secondary">No games found</p>
          {filterData && (
            <p className="text-text-muted text-sm mt-1">
              Try checking other categories
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      {games.length > 4 && (
        <>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-accent-color rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
            onClick={() => scroll("left")}
            aria-label="Scroll games left"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-accent-color rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
            onClick={() => scroll("right")}
            aria-label="Scroll games right"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Games Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {games.map((game) => (
          <div key={game.id} className="flex-shrink-0 w-64">
            <GameCard
              game={game}
              showViews={true}
              priority={games.indexOf(game) < 4}
            />
          </div>
        ))}

        {/* View All Card */}
        {showViewAll && games.length >= limit && (
          <div className="flex-shrink-0 w-64">
            <Link
              href={`/category/${filterData || 'all'}`}
              className="block h-full"
            >
              <div className="game-card h-full min-h-[200px] flex flex-col items-center justify-center bg-gradient-to-br from-accent-color/20 to-accent-color/10 border-2 border-dashed border-accent-color/40 rounded-xl p-6 hover:border-accent-color/60 hover:bg-accent-color/20 transition-all">
                <div className="w-16 h-16 bg-accent-color rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <h3 className="text-text-primary font-semibold mb-2">View All Games</h3>
                <p className="text-text-secondary text-sm text-center">
                  Explore more {filterData ? filterData : 'games'}
                </p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewGame;

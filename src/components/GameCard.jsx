import Link from 'next/link';
import Image from 'next/image';

export const GameCard = ({ game, showViews = false, priority = false }) => {
  const { gameTitle, gameCategory, gameImage, view, date } = game;

  return (
    <Link
      href={`/play/${encodeURIComponent(gameTitle)}`}
      className="group block focus:outline-none focus:ring-2 focus:ring-accent-color rounded-xl"
      title={gameTitle}
    >
      <div className="game-card relative overflow-hidden rounded-xl">
        <div className="aspect-[4/3] relative">
          <Image
            src={gameImage || '/placeholder-game.jpg'}
            alt={gameTitle}
            fill
            className="game-card-image object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
              <div className="w-12 h-12 bg-accent-color rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Game info overlay */}
          <div className="game-card-overlay">
            <div className="text-white">
              <p className="text-sm font-medium mb-1">{gameCategory}</p>
              {showViews && view && (
                <p className="text-xs opacity-90">
                  👁 {view.toLocaleString()} plays
                </p>
              )}
            </div>
          </div>

          {/* New badge */}
          {date && new Date(date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              NEW
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 px-1">
        <h3 className="font-semibold text-text-primary group-hover:text-accent-color transition-colors line-clamp-2 text-sm">
          {gameTitle}
        </h3>
        <p className="text-xs text-text-secondary mt-1">{gameCategory}</p>
      </div>
    </Link>
  );
};

export const GameCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-gray-800 rounded-xl aspect-[4/3] mb-3 shimmer"></div>
    <div className="h-4 bg-gray-800 rounded mb-2"></div>
    <div className="h-3 bg-gray-800 rounded w-2/3"></div>
  </div>
);
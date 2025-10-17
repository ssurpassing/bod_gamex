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
      <div className="bg-white border border-border-color/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-accent-color/50 hover:-translate-y-1">
        <div className="aspect-[4/3] relative bg-gray-100">
          <Image
            src={gameImage || '/placeholder-game.jpg'}
            alt={gameTitle}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
              <div className="w-14 h-14 bg-accent-color rounded-full flex items-center justify-center shadow-xl hover:bg-accent-hover transition-colors">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>

          {/* New badge */}
          {date && new Date(date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-accent-color to-accent-hover text-white text-xs px-2.5 py-1.5 rounded-full font-semibold shadow-lg z-10">
              NEW
            </div>
          )}
        </div>

        <div className="p-4 bg-white">
          <h3 className="font-semibold text-text-primary group-hover:text-accent-color transition-colors line-clamp-2 text-sm mb-2 leading-tight">
            {gameTitle}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary bg-secondary-bg px-2 py-1 rounded-md">
              {gameCategory}
            </span>
            {showViews && view && (
              <span className="text-xs text-text-muted flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                {view < 1000 ? view : `${(view / 1000).toFixed(1)}k`}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const GameCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-white border border-border-color/50 rounded-xl overflow-hidden shadow-sm">
      <div className="aspect-[4/3] bg-gray-200"></div>
      <div className="p-4 bg-white">
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="flex items-center justify-between">
          <div className="h-3 bg-gray-200 rounded w-16"></div>
          <div className="h-3 bg-gray-200 rounded w-8"></div>
        </div>
      </div>
    </div>
  </div>
);
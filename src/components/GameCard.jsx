import Link from 'next/link';
import Image from 'next/image';

export const GameCard = ({ game, showViews = false }) => {
  const { gameTitle, gameCategory, gameImage, view, date } = game;

  return (
    <Link href={`/play/${encodeURIComponent(gameTitle)}`} className="group block">
      <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
        <Image
          src={gameImage || '/placeholder-game.jpg'}
          alt={gameTitle}
          width={300}
          height={200}
          className="h-48 w-full object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm font-medium">{gameCategory}</p>
            {showViews && (
              <p className="text-xs opacity-90">{view?.toLocaleString() || 0} views</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {gameTitle}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{gameCategory}</p>
        {date && (
          <p className="text-xs text-gray-500 mt-1">
            {new Date(date).toLocaleDateString()}
          </p>
        )}
      </div>
    </Link>
  );
};

export const GameCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-gray-300 rounded-xl h-48 mb-3"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
  </div>
);
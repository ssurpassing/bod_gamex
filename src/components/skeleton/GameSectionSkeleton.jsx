import { GameCardSkeleton } from '@/components/GameCard';

export const GameSectionSkeleton = ({ limit = 12 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {Array.from({ length: limit }).map((_, index) => (
        <GameCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const CategorySkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-gray-700 rounded-xl h-24 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded mx-auto w-20"></div>
        </div>
      ))}
    </div>
  );
};
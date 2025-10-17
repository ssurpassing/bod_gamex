"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Head from "next/head";
import { useGames } from "@/hooks/useGames";
import { GameCard, GameCardSkeleton } from "@/components/GameCard";
import { GameSectionSkeleton } from "@/components/skeleton/GameSectionSkeleton";
import { WebsiteStructuredData, BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { FiGrid, FiList, FiFilter, FiChevronDown, FiTrendingUp, FiClock, FiStar } from "react-icons/fi";
import { SITE_CONFIG } from "@/config/site";

const CategoryPage = ({ params }) => {
  const gameCategory = params.game;
  const { games, loading, error } = useGames(gameCategory, null, 50);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  // Get category info
  const categoryInfo = useMemo(() => {
    return SITE_CONFIG.categories.find(cat =>
      cat.name === gameCategory ||
      cat.name.toLowerCase() === gameCategory.toLowerCase() ||
      cat.slug === gameCategory.toLowerCase()
    ) || { name: gameCategory, description: `Browse the best ${gameCategory} games` };
  }, [gameCategory]);

  // Sort games
  const sortedGames = useMemo(() => {
    if (!games.length) return [];

    const sorted = [...games];
    switch (sortBy) {
      case 'trending':
        return sorted.sort((a, b) => (b.view || 0) - (a.view || 0));
      case 'newest':
        return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'name':
        return sorted.sort((a, b) => a.gameTitle.localeCompare(b.gameTitle));
      default:
        return sorted;
    }
  }, [games, sortBy]);

  const sortOptions = [
    { value: 'default', label: 'Default', icon: FiGrid },
    { value: 'trending', label: 'Trending', icon: FiTrendingUp },
    { value: 'newest', label: 'Newest', icon: FiClock },
    { value: 'rating', label: 'Top Rated', icon: FiStar },
    { value: 'name', label: 'A-Z', icon: FiList },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50">
        {/* Category Header Skeleton */}
        <div className="container-custom py-12">
          <div className="h-8 bg-gray-200 rounded-lg w-64 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-96 mb-8 animate-pulse"></div>

          {/* Filters Skeleton */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
          </div>

          {/* Games Grid Skeleton */}
          <GameSectionSkeleton limit={24} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h1 className="text-2xl font-bold text-text-primary mb-2">Oops! Something went wrong</h1>
          <p className="text-text-secondary mb-6">{error}</p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-accent text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎮</div>
          <h1 className="text-2xl font-bold text-text-primary mb-2">No Games Found</h1>
          <p className="text-text-secondary mb-6">No games found in {categoryInfo.name} category</p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-accent text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Browse All Games
          </Link>
        </div>
      </div>
    );
  }

  // Breadcrumb data for structured data
  const breadcrumbData = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Categories", url: `${SITE_CONFIG.url}/categories` },
    { name: categoryInfo.name, url: `${SITE_CONFIG.url}/category/${gameCategory}` }
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <WebsiteStructuredData />
      <BreadcrumbStructuredData items={breadcrumbData} />

      <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50">
        {/* Category Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl"></div>
        <div className="relative container-custom py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Link
                href="/"
                className="text-text-secondary hover:text-accent-color transition-colors"
              >
                Home
              </Link>
              <span className="text-text-secondary">/</span>
              <span className="text-text-secondary">Categories</span>
              <span className="text-text-secondary">/</span>
              <span className="text-accent-color font-medium">{categoryInfo.name}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{categoryInfo.name} Games</span>
            </h1>

            <p className="text-xl text-text-secondary mb-8 max-w-2xl">
              {categoryInfo.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-accent-color/20 text-accent-color border border-accent-color/30">
                🎮 {games.length} Games
              </span>
              <span className="px-4 py-2 rounded-full bg-accent-color/20 text-accent-color border border-accent-color/30">
                ⚡ Instant Play
              </span>
              <span className="px-4 py-2 rounded-full bg-accent-color/20 text-accent-color border border-accent-color/30">
                📱 Mobile Friendly
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="sticky top-16 z-40 bg-secondary-bg/80 backdrop-blur-xl border-b border-border-color">
        <div className="container-custom py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-text-secondary text-sm font-medium">Sort by:</span>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        sortBy === option.value
                          ? 'bg-accent-color text-white shadow-lg'
                          : 'bg-card-bg text-text-secondary hover:bg-secondary-bg hover:text-text-primary'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-accent-color text-white'
                    : 'bg-card-bg text-text-secondary hover:bg-secondary-bg'
                }`}
                title="Grid View"
              >
                <FiGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-accent-color text-white'
                    : 'bg-card-bg text-text-secondary hover:bg-secondary-bg'
                }`}
                title="List View"
              >
                <FiList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid/List */}
      <section className="container-custom py-8 px-4 sm:px-6 lg:px-8">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {sortedGames.map((game) => (
              <div key={game.id} className="transform transition-all duration-300 hover:scale-105">
                <GameCard
                  game={game}
                  showViews={true}
                  priority={sortedGames.indexOf(game) < 12}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedGames.map((game) => (
              <Link
                key={game.id}
                href={`/play/${encodeURIComponent(game.gameTitle)}`}
                className="group bg-card-bg border border-border-color rounded-xl p-6 flex items-center gap-6 hover:bg-secondary-bg hover:border-accent-color transition-all"
              >
                <div className="relative w-24 h-18 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={game.gameImage || '/placeholder-game.jpg'}
                    alt={game.gameTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-color transition-colors mb-2">
                    {game.gameTitle}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span>{game.gameCategory}</span>
                    <span>•</span>
                    <span>👁 {(game.view || 0).toLocaleString()} plays</span>
                    {game.date && (
                      <>
                        <span>•</span>
                        <span>{new Date(game.date).toLocaleDateString()}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-color rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Load More Section */}
      {games.length >= 50 && (
        <section className="container-custom pb-16">
          <div className="text-center">
            <p className="text-text-secondary mb-6">
              Showing {sortedGames.length} games in {categoryInfo.name} category
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-accent text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all font-medium">
              Load More Games
            </button>
          </div>
        </section>
      )}

      {/* Related Categories */}
      <section className="container-custom py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Related Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {SITE_CONFIG.categories
            .filter(cat => cat.name !== categoryInfo.name)
            .slice(0, 8)
            .map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.name}`}
                className="bg-white border border-border-color/50 rounded-lg p-4 text-center group hover:border-accent-color/50 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-text-primary group-hover:text-accent-color transition-colors text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-text-secondary mt-1 line-clamp-2">{category.description}</p>
              </Link>
            ))}
        </div>
      </section>
      </div>
    </>
  );
};

export default CategoryPage;
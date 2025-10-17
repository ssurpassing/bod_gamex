"use client";
import { Suspense } from 'react';
import NewGame from "@/components/block/newGame";
import Category from "@/components/block/category";
import TopArea from "@/components/block/topArea";
import { SITE_CONFIG } from "@/config/site";
import { GameSectionSkeleton } from "@/components/skeleton/GameSectionSkeleton";

const GAME_CATEGORIES = [
  { title: "🔥 Trending Games", filter: null, limit: 16 },
  { title: "⚡ Action Games", filter: "Action", limit: 12 },
  { title: "🧩 Puzzle Games", filter: "Puzzle", limit: 12 },
  { title: "🏎️ Racing Games", filter: "Racing", limit: 12 },
  { title: "👥 Multiplayer Games", filter: "Multiplayer", limit: 8 },
  { title: "🎯 Shooting Games", filter: "Shooting", limit: 8 }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/8 to-emerald-400/8 backdrop-blur-3xl"></div>
        <div className="relative container-custom py-16 md:py-24">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">PlayFun Games</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              200+ Free Online Games • Play Instantly • No Downloads
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-accent-color/10 text-accent-color border border-accent-color/20">
                ⚡ Instant Play
              </span>
              <span className="px-4 py-2 rounded-full bg-accent-color/10 text-accent-color border border-accent-color/20">
                📱 Mobile Friendly
              </span>
              <span className="px-4 py-2 rounded-full bg-accent-color/10 text-accent-color border border-accent-color/20">
                🎮 200+ Games
              </span>
              <span className="px-4 py-2 rounded-full bg-accent-color/10 text-accent-color border border-accent-color/20">
                🔒 Safe for Kids
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container-custom">
          <Suspense fallback={<GameSectionSkeleton />}>
            <Category />
          </Suspense>
        </div>
      </section>

      {/* Top Games Section */}
      <section className="py-8">
        <div className="container-custom">
          <Suspense fallback={<GameSectionSkeleton />}>
            <TopArea />
          </Suspense>
        </div>
      </section>

      {/* Game Categories Sections */}
      <div className="container-custom pb-16">
        {GAME_CATEGORIES.map(({ title, filter, limit }) => (
          <section key={title} className="py-12 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                {title}
              </h2>
              {filter && (
                <a
                  href={`/category/${filter.toLowerCase()}`}
                  className="text-accent-color hover:text-accent-hover transition-colors font-medium"
                >
                  View All →
                </a>
              )}
            </div>
            <Suspense fallback={<GameSectionSkeleton limit={limit} />}>
              <NewGame filterData={filter} limit={limit} />
            </Suspense>
          </section>
        ))}
      </div>

      {/* SEO Content Section */}
      <section className="py-16 border-t border-border-color">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Why Choose PlayFun Games?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-text-secondary">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">🎮 Massive Game Collection</h3>
                <p>Access over 200 free online games across multiple categories. From action-packed adventures to brain-teasing puzzles, there's something for everyone.</p>

                <h3 className="text-xl font-semibold text-text-primary">⚡ Instant Gaming</h3>
                <p>No downloads, no installations, no waiting. Click and play instantly in your web browser. Our HTML5 games load in seconds.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">📱 Play Anywhere</h3>
                <p>Fully optimized for desktop, tablet, and mobile devices. Enjoy seamless gaming experience across all your devices.</p>

                <h3 className="text-xl font-semibold text-text-primary">🔒 Safe & Family-Friendly</h3>
                <p>All games are carefully selected and safe for players of all ages. No inappropriate content, just pure gaming fun.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

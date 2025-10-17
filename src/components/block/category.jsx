import React, { useRef, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaGamepad, FaFire, FaPuzzlePiece, FaCar, FaUsers, FaCrosshairs, FaFootballBall, FaChess, FaGem, FaDragon } from "react-icons/fa";
import { SITE_CONFIG } from "@/config/site";
import NoSSR from "@/components/utils/NoSSR";

const Category = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Category icons mapping
  const categoryIcons = {
    "Action": FaFire,
    "Puzzle": FaPuzzlePiece,
    "Racing": FaCar,
    "Multiplayer": FaUsers,
    "Shooting": FaCrosshairs,
    "Sports": FaFootballBall,
    "Strategy": FaChess,
    "Girls": FaGem,
    "Kids": FaDragon,
    "Arcade": FaGamepad,
    "Adventure": FaDragon,
    "3D Games": FaGamepad,
  };

  return (
    <section id="categories" className="py-16">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Browse Game Categories
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Choose from our collection of carefully curated game categories.
            Each category offers unique gaming experiences tailored to your preferences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="relative">
          {/* Navigation Buttons */}
          <NoSSR>
            <button
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                isHovered ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-4"
              }`}
              onClick={() => scroll("left")}
              aria-label="Scroll categories left"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                isHovered ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-4"
              }`}
              onClick={() => scroll("right")}
              aria-label="Scroll categories right"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </NoSSR>

          {/* Categories Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SITE_CONFIG.categories.map((category, index) => {
              const Icon = categoryIcons[category.name] || FaGamepad;

              return (
                <div key={category.slug} className="flex-shrink-0">
                  <Link
                    href={`/category/${category.name}`}
                    className="category-card group block w-40"
                  >
                    <div className="text-center">
                      {/* Icon Container */}
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-accent rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Category Name */}
                      <h3 className="font-semibold text-text-primary text-base mb-2 group-hover:text-accent-color transition-colors">
                        {category.name}
                      </h3>

                      {/* Category Description */}
                      <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Game Count Badge */}
                      <div className="mt-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-color/20 text-accent-color text-xs font-medium">
                          Play Now
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-accent text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all font-medium"
          >
            View All Categories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Featured Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-effect p-6 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-2xl flex items-center justify-center">
              <FaFire className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Trending Games</h3>
            <p className="text-text-secondary mb-4">
              Discover the most popular games that everyone is playing right now
            </p>
            <Link
              href="/trending"
              className="text-accent-color hover:text-accent-hover font-medium transition-colors"
            >
              Explore →
            </Link>
          </div>

          <div className="glass-effect p-6 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-2xl flex items-center justify-center">
              <FaPuzzlePiece className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Brain Teasers</h3>
            <p className="text-text-secondary mb-4">
              Challenge your mind with our collection of puzzle and strategy games
            </p>
            <Link
              href="/category/Puzzle"
              className="text-accent-color hover:text-accent-hover font-medium transition-colors"
            >
              Play Now →
            </Link>
          </div>

          <div className="glass-effect p-6 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-2xl flex items-center justify-center">
              <FaUsers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Multiplayer Fun</h3>
            <p className="text-text-secondary mb-4">
              Connect with friends and players around the world in multiplayer games
            </p>
            <Link
              href="/category/Multiplayer"
              className="text-accent-color hover:text-accent-hover font-medium transition-colors"
            >
              Join Friends →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

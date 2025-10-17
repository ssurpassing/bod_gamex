"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaGamepad, FaTrophy, FaStar } from "react-icons/fa";
import { SITE_CONFIG } from "@/config/site";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "#categories" },
    { name: "New Games", href: "/new" },
    { name: "Popular", href: "/popular" },
    { name: "Random", href: "/random" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-border-color shadow-sm"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-sm">
                <FaGamepad className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-primary">
                  Play<span className="text-accent-color">Fun</span>
                </h1>
                <p className="text-xs text-text-secondary">200+ Games</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-accent-color transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:block flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search games..."
                  className="w-full px-4 py-2 pl-10 bg-white border border-border-color rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-color focus:ring-2 focus:ring-accent-color/20 transition-all"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-accent text-white rounded-lg hover:shadow-md transform hover:scale-105 transition-all">
                <FaTrophy className="w-4 h-4" />
                <span className="font-medium">Leaderboard</span>
              </button>

              <Link
                href="/admin"
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-secondary-bg border border-border-color rounded-lg hover:bg-card-bg transition-all"
              >
                <span className="text-text-secondary">Admin</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border-color">
            <div className="container-custom py-4 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search games..."
                  className="w-full px-4 py-2 pl-10 bg-white border border-border-color rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-color"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-text-secondary hover:text-accent-color hover:bg-secondary-bg rounded-xl transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-border-color space-y-2">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-accent text-white rounded-xl">
                  <FaTrophy className="w-4 h-4" />
                  <span className="font-medium">Leaderboard</span>
                </button>
                <Link
                  href="/admin"
                  className="block w-full text-center px-4 py-3 bg-secondary-bg border border-border-color rounded-xl hover:bg-card-bg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin Panel
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from being hidden under header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;

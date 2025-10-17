"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi"; // Importing search icon
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter, FaUserAlt } from "react-icons/fa"; // Importing social media icons

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-14 w-full shadow-sm flex justify-between px-6 items-center z-30 top-0 sticky transition-all duration-300 box-shadow-game-1 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md"
          : "bg-black/60 backdrop-blur-md"
      }`}
    >
      <div>
        <Link href={"/"}>
          <h1 className="text-2xl font-bold text-white">GameX</h1>
        </Link>
      </div>
      {/* This is For Next Update */}
      {/* <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md hidden md:block">
        <input
          type="text"
          placeholder="Type to search..."
          className="w-full pl-6 pr-4 py-2 rounded-full bg-white/10 text-white placeholder-white/70 backdrop-blur-lg backdrop-saturate-150 border border-transparent focus:border-white/30 focus:bg-white/15 focus:outline-none transition-all duration-300 outline-none"
        />
        <FiSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70" />
      </div> */}
      <div className="flex gap-4 ">
        <Link
          href="/admin"
          // target="_blank"
          // rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition bg-gray-700 p-1 rounded-md text-sm md:block hidden"
        >
          <FaUserAlt />
        </Link>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition p-1 rounded-md"
          style={{ backgroundColor: "#3b5998" }} // Facebook brand color
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition p-1 rounded-md"
          style={{ backgroundColor: "#E1306C" }} // Instagram brand color
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition p-1 rounded-md"
          style={{ backgroundColor: "black" }} // Twitter brand color
        >
          <FaXTwitter />
        </Link>
        <Link
          href="https://www.twitch.tv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition p-1 rounded-md"
          style={{ backgroundColor: "#9146FF" }} // Twitch brand color
        >
          <FaTwitch />
        </Link>
      </div>
    </div>
  );
};

export default Header;

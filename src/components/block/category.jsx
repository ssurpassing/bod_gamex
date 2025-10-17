import React, { useRef, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Category = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    const scrollAmount = 1000;

    if (direction === "left") {
      scrollRef1.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      scrollRef2.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef1.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      scrollRef2.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="p-0 md:p-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="hidden md:flex md:w-2/5 p-4 md:p-5 rounded-md color-1  flex-col gap-3 md:gap-4 select-none">
          <h1 className="text-xl md:text-2xl font-medium drop-shadow-lg">
            Online Games at GameX
          </h1>
          <p className="text-sm md:text-base">
            GameX features the latest and best free online games. You can enjoy
            playing fun games without interruptions from downloads, intrusive
            ads, or pop-ups. Just load up your favorite games instantly in your
            web browser and enjoy the experience.
          </p>
          {/* <Link className="text-green-500" href="#">
            Learn More
          </Link> */}
        </div>

        <div
          className="md:w-3/5 relative flex flex-col justify-between gap-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            className={`p-2 text-white bg-black/60 absolute top-1/2 left-0 z-10 transform -translate-y-1/2 w-8 md:w-10 h-full transition-opacity duration-300 ease-in-out ${
              isHovered ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => scroll("left")}
          >
            <FaChevronLeft />
          </button>
          <button
            className={`p-2 text-white bg-black/60 absolute top-1/2 right-0 z-10 transform -translate-y-1/2 w-8 md:w-10 h-full transition-opacity duration-300 ease-in-out ${
              isHovered ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => scroll("right")}
          >
            <FaChevronRight />
          </button>

          <div
            ref={scrollRef1}
            className="flex gap-4 md:gap-6 items-center justify-start overflow-x-auto scrollbar-hide"
          >
            {categories.map((category, index) => (
              <div key={index} className="flex-shrink-0">
                <Link href={`/category/${category.name}`}>
                  <div className="color-2 px-2 py-3 rounded-md w-36 md:w-52 text-center">
                    <img
                      className="w-8 md:w-10 h-8 md:h-10 mx-auto"
                      src={`/${category.image}.svg`}
                      alt={category.name}
                    />
                    <h5 className="mt-2 font-medium text-base md:text-lg">
                      {category.name}
                    </h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div
            ref={scrollRef2}
            className="flex gap-4 md:gap-6 items-center justify-start overflow-x-auto scrollbar-hide"
          >
            {categories2.map((category, index) => (
              <div key={index} className="flex-shrink-0">
                <Link href={`/category/${category.name}`}>
                  <div className="color-2 px-2 py-3 rounded-md w-36 md:w-52 text-center">
                    <img
                      className="w-8 md:w-10 h-8 md:h-10 mx-auto"
                      src={`/${category.image}.svg`}
                      alt={category.name}
                    />
                    <h5 className="mt-2 font-medium text-base md:text-lg">
                      {category.name}
                    </h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const categories = [
  { name: "Car", image: "Car" },
  { name: "Action", image: "Action" },
  { name: "Card", image: "Card" },
  { name: "Minecraft", image: "Minecraft" },
  { name: "Multiplayer", image: "Multiplayer" },
];

const categories2 = [
  { name: "Controller", image: "Controller" },
  { name: "Mahjong", image: "Mahjong" },
  { name: "Shooting", image: "Shooting" },
  { name: "Sports", image: "Sports" },
  { name: "Soccer", image: "Soccer" },
];

export default Category;

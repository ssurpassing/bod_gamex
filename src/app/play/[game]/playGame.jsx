"use client";
import React, { useRef, useEffect, useState } from "react";
import { MdFullscreen } from "react-icons/md";
import NewGame from "@/components/block/newGame";
import PlaySidebar from "@/components/block/playSidebar";
import { FaPlayCircle } from "react-icons/fa";

const PageClient = ({id}) => {
  const GmaeId = id;
  

  const iframeRef = useRef(null);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`/api/game?title=${encodeURIComponent(GmaeId)}`);
        const result = await response.json();

        // Handle the API response format { success: true, data: {...} }
        const data = result.success ? result.data : result;
        setGameData(data);
      } catch (error) {
        console.error("Error fetching games:", error);
        setGameData({
          gameTitle: "Game Not Found",
          gameUrl: "",
          gameImage: "/placeholder-game.jpg"
        });
      }
    };

    fetchGames();
  }, [GmaeId]);

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.mozRequestFullScreen) {
        iframeRef.current.mozRequestFullScreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen();
      } else if (iframeRef.current.msRequestFullscreen) {
        iframeRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[20%_55%_20%]">
        <div className="hidden lg:block">
          <PlaySidebar />
        </div>
        <div className="color-1 rounded-md relative">
          <iframe
            ref={iframeRef}
            className="w-full h-[250px] sm:h-[350px] lg:h-[450px] rounded-t-md"
            src={gameData.gameUrl}
            sandbox="allow-scripts allow-same-origin allow-popups"
            allow="popups"
          ></iframe>
          <div className="px-2 sm:px-4 my-2 flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-semibold">
              {gameData.gameTitle}
            </h1>
            <MdFullscreen
              className="text-2xl sm:text-3xl cursor-pointer hidden sm:block"
              onClick={handleFullscreen}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center sm:hidden">
            <button
              className="bg-black text-white p-5 rounded-full text-lg"
              onClick={handleFullscreen}
            >
              <FaPlayCircle />
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <PlaySidebar offset={10} />
        </div>
      </div>

      <div>
        <h1 className="my-4 font-semibold text-lg sm:text-xl">
          Recommended this week
        </h1>
        <NewGame />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-lg sm:text-xl">Action Games</h1>
        <NewGame filterData="Action" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-lg sm:text-xl">Car Games</h1>
        <NewGame filterData="Car" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-lg sm:text-xl">
          Multiplayer Games
        </h1>
        <NewGame filterData="Multiplayer" />
      </div>
      <div>
        <h1 className="my-4 font-semibold text-lg sm:text-xl">
          Shooting Games
        </h1>
        <NewGame filterData="Shooting" />
      </div>
    </div>
  );
};

export default PageClient;

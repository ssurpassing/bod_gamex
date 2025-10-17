"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Spinner } from "@nextui-org/react"; // Import Spinner if using NextUI
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import { MdEdit } from "react-icons/md";
import DeleteConfirmationModal from "@/components/model/DeleteConfirmationModal"; // Import the modal component

const TopGamesPage = () => {
  const [topGames, setTopGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);

  useEffect(() => {
    const fetchTopGames = async () => {
      try {
        const response = await fetch("/api/game");
        const data = await response.json();
        const sortedGames = data.sort((a, b) => b.view - a.view);
        setTopGames(sortedGames);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top games:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchTopGames();
  }, []);

  if (loading) {
    return (
      <div className="flex w-full h-full items-center justify-center pt-60">
        <Spinner color="primary" size="lg" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading top games.</div>;
  }

  const handleEdit = (id) => {
    console.log("Edit game with ID:", id);
    // Add your edit logic here
  };

  const handleDeleteClick = (id) => {
    setSelectedGameId(id);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`/api/game?id=${selectedGameId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setTopGames(topGames.filter((game) => game.id !== selectedGameId));
      } else {
        const errorData = await response.json();
        console.error("Failed to delete game:", errorData.error);
      }
    } catch (error) {
      console.error("Error deleting game:", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {topGames.length === 0 ? (
          <p>No top games available.</p>
        ) : (
          topGames.map((game) => (
            <div
              key={game.id}
              className="relative flex flex-col items-start p-4 rounded-md box-shadow-game"
            >
              <div className="relative w-full">
                <img
                  src={game.gameImage}
                  alt={game.gameTitle}
                  className="w-full h-32 object-cover mb-4 rounded-md"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <Link
                    href={{
                      pathname: "/admin/game/add/update",
                      query: { id: game.id },
                    }}
                  >
                    <button
                      onClick={() => handleEdit(game.id)}
                      className="p-2 bg-blue-100 text-black rounded-full"
                    >
                      <MdEdit size={20} />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteClick(game.id)}
                    className="p-2 bg-violet-100 text-black rounded-full"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">{game.gameTitle}</h2>
              <p className="text-gray-600 text-start mb-4">
                {game.description
                  ? game.description.length > 50
                    ? `${game.description.substring(0, 50)}...`
                    : game.description
                  : "No description available."}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default TopGamesPage;

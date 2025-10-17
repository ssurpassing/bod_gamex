"use client";
import React, { useState, useEffect } from "react";
import { Input, Textarea, Button, Select, SelectItem } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = (context) => {
  const params = context.searchParams;
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);
  const [gameTitle, setGameTitle] = useState("");
  const [gameUrl, setGameUrl] = useState("");
  const [gameCategory, setGameCategory] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [metaUrl, setMetaUrl] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const BlogId = params.id;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/game/category");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories");
      }
    };

    const fetchPreData = async () => {
      try {
        const response = await fetch("/api/game");
        if (!response.ok) throw new Error("Failed to fetch game data");
        const data = await response.json();
        const filteredData = data.find((item) => item.id === BlogId);
        if (filteredData) {
          setGameTitle(filteredData.gameTitle || "");
          setGameUrl(filteredData.gameUrl || "");
          setGameCategory(filteredData.gameCategory || "");
          setGameImage(filteredData.gameImage || "");
          setMetaUrl(filteredData.metaUrl || "");
          setMetaKeywords(filteredData.metaKeywords || "");
          setDescription(filteredData.description || "");
        } else {
          console.error("No data found with the specified _id");
        }
      } catch (error) {
        console.error("Error fetching listing data:", error);
        setError("Failed to fetch listing data");
      }
    };

    fetchGames();
    fetchPreData();
  }, []);

  const sanitizeMetaUrl = (string) => {
    return string
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const handleGameTitleChange = (event) => {
    const title = event.target.value;
    setGameTitle(title);
    const formattedMetaUrl = sanitizeMetaUrl(title);
    setMetaUrl(formattedMetaUrl);
  };

  const handleMetaUrlChange = (event) => {
    const metaUrlInput = event.target.value;
    const sanitizedInput = sanitizeMetaUrl(metaUrlInput);
    setMetaUrl(sanitizedInput);
  };

  // Function to convert image to base64
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setGameImage(reader.result); // Set the base64 encoded image
    };

    if (file) {
      reader.readAsDataURL(file); // Read the image file as a data URL (base64)
    }
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);

    if (
      !gameTitle ||
      !gameUrl ||
      !gameCategory ||
      !gameImage ||
      !metaUrl ||
      !metaKeywords ||
      !description
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const gameData = {
      gameTitle,
      gameUrl,
      gameCategory,
      gameImage, // Base64 encoded image
      metaUrl,
      metaKeywords,
      description,
    };

    setLoading(true);

    toast.promise(
      fetch(`/api/game?id=${BlogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameData),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to submit game data");
          return response.json();
        })
        .then(() => {
          setIsSubmitted(false);
        })
        .catch((error) => {
          toast.error("Error submitting game data.");
        })
        .finally(() => {
          setLoading(false);
        }),
      {
        pending: "Submitting game data...",
        success: "Game data submitted successfully!",
        error: "Error submitting game data.",
      }
    );
  };

  return (
    <div className="p-6">
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div>
        <div className="grid grid-cols-2 gap-6">
          <Input
            color={isSubmitted && !gameTitle ? "danger" : "primary"}
            label="Game Title"
            labelPlacement="outside"
            placeholder="Enter Game Title"
            value={gameTitle}
            onChange={handleGameTitleChange}
          />
          <Input
            color={isSubmitted && !gameUrl ? "danger" : "primary"}
            label="Game URL"
            labelPlacement="outside"
            placeholder="Enter Game URL"
            value={gameUrl}
            onChange={(e) => setGameUrl(e.target.value)}
          />

          <Select
            label="Game Category"
            variant="bordered"
            placeholder="Select Game Category"
            color={isSubmitted && !gameCategory ? "danger" : "primary"}
            value={gameCategory}
            onChange={(e) => setGameCategory(e.target.value)}
          >
            {category.map((cat) => (
              <SelectItem key={cat.category} value={cat.category}>
                {cat.category}
              </SelectItem>
            ))}
          </Select>
          <Input
            type="file"
            accept="image/*"
            label="Game Image"
            labelPlacement="outside"
            description="Upload the image of the game"
            color={isSubmitted && !gameImage ? "danger" : "primary"}
            onChange={handleImageUpload}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <Input
            color={isSubmitted && !metaUrl ? "danger" : "primary"}
            label="Meta URL"
            labelPlacement="outside"
            placeholder="Enter Meta URL"
            value={metaUrl}
            onChange={handleMetaUrlChange}
          />
          <Input
            color={isSubmitted && !metaKeywords ? "danger" : "primary"}
            label="Meta Keywords"
            labelPlacement="outside"
            placeholder="Enter Meta Keywords"
            value={metaKeywords}
            onChange={(e) => setMetaKeywords(e.target.value)}
          />
        </div>

        <Textarea
          label="Description"
          placeholder="Enter Game Description"
          className="mt-6"
          color={isSubmitted && !description ? "danger" : "primary"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          className="mt-6"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add New Game"}
        </Button>
      </div>
    </div>
  );
};

export default Page;

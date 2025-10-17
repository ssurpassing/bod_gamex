"use client";
import React, { useState, useEffect } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select, SelectItem } from "@nextui-org/react";

const Page = () => {
  const [gameTitle, setGameTitle] = useState("");
  const [gameUrl, setGameUrl] = useState("");
  const [gameCategory, setGameCategory] = useState("");
  const [gameImage, setgameImage] = useState("");
  const [metaUrl, setMetaUrl] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [description, setDescription] = useState("");

  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/game/category");
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching games:", error);
        setError(error);
      }
    };

    fetchGames();
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // Function to convert the uploaded image file to Base64
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setgameImage(reader.result); // Store the base64 string in state
    };
    
    if (file) {
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  };

  const handleSubmit = async () => {
    setIsSubmitted(true); // Set to true when submit is clicked

    // Check if all fields are filled
    if (
      !gameTitle ||
      !gameUrl ||
      !gameCategory ||
      !gameImage || // Check for base64 image
      !metaUrl ||
      !metaKeywords ||
      !description
    ) {
      // Do not proceed with form submission if any field is empty
      return;
    }

    const gameData = {
      gameTitle,
      gameUrl,
      gameCategory,
      gameImage,
      metaUrl,
      metaKeywords,
      description,
    };

    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          const response = await fetch("/api/game", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(gameData),
          });

          if (response.ok) {
            resolve("Game data submitted successfully!");
            // Clear the form
            setGameTitle("");
            setGameUrl("");
            setGameCategory("");
            setgameImage(""); // Clear the image base64
            setMetaUrl("");
            setMetaKeywords("");
            setDescription("");
            setIsSubmitted(false);
          } else {
            reject("Failed to submit game data.");
          }
        } catch (error) {
          reject("Error submitting game data.");
        }
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
      <ToastContainer position="bottom-right" theme="dark" autoClose={3000} hideProgressBar={false} />

      <div className="grid grid-cols-2 gap-6">
        <Input
          color={isSubmitted && !gameTitle ? "danger" : "primary"}
          label="Game Title"
          labelPlacement="outside"
          placeholder="Enter Game Title"
          description="Enter the title of the game"
          value={gameTitle}
          onChange={handleGameTitleChange}
        />
        <Input
          color={isSubmitted && !gameUrl ? "danger" : "primary"}
          label="Game URL"
          labelPlacement="outside"
          placeholder="Enter Game URL"
          description="Enter the URL of the game"
          value={gameUrl}
          onChange={(e) => setGameUrl(e.target.value)}
        />

        <Select
          label="Game Category"
          description="Select the category of the game"
          variant="bordered"
          placeholder="Enter Game Category"
          name="category"
          color={isSubmitted && !gameCategory ? "danger" : "primary"}
          value={gameCategory}
          labelPlacement="outside"
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
          description="Enter the SEO meta URL"
          value={metaUrl}
          onChange={handleMetaUrlChange}
        />
        <Input
          color={isSubmitted && !metaKeywords ? "danger" : "primary"}
          label="Meta Keywords"
          labelPlacement="outside"
          placeholder="Enter Meta Keywords"
          description="Enter SEO keywords separated by commas"
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

      <Button className="mt-6" color="primary" onClick={handleSubmit}>
        Add New Game
      </Button>
    </div>
  );
};

export default Page;

"use client";
import React, { useState, useEffect } from "react";
import { Input, Button, Spinner } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [addedCategories, setAddedCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading

  // Fetch existing categories on component mount
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/game/category");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setAddedCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to load categories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle adding a new category
  const handleAddCategory = async () => {
    setIsSubmitted(true);
    if (!category) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    toast.promise(
      fetch("/api/game/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to add category");
          }
          return response.json();
        })
        .then((newCategory) => {
          setAddedCategories([...addedCategories, newCategory]);
          setCategory("");
          setIsSubmitted(false);
          fetchCategories();
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        }),
      {
        pending: "Adding category...",
        success: "Category added successfully!",
        error: "Failed to add category.",
      }
    );
  };

  // Handle editing an existing category
  const handleEditCategory = async () => {
    setIsSubmitted(true);
    if (!category) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // setLoading(true);
    toast.promise(
      fetch(`/api/game/category?id=${editingCategory.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to edit category");
          }
          return response.json();
        })
        .then((updatedCategory) => {
          setAddedCategories(addedCategories.map(cat => cat.id === updatedCategory.id ? updatedCategory : cat));
          setEditingCategory(null);
          setCategory("");
          setIsSubmitted(false);
          fetchCategories();
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        }),
      {
        pending: "Editing category...",
        success: "Category edited successfully!",
        error: "Failed to edit category.",
      }
    );
  };

  // Handle deleting a category
  const handleDelete = async (id) => {
    setLoading(true);
    toast.promise(
      fetch(`/api/game/category?id=${id}`, {
        method: "DELETE",
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to delete category");
          }
          setAddedCategories(addedCategories.filter(cat => cat.id !== id));
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        }),
      {
        pending: "Deleting category...",
        success: "Category deleted successfully!",
        error: "Failed to delete category.",
      }
    );
  };

  // Handle editing a category
  const handleEdit = (cat) => {
    setCategory(cat.category);
    setEditingCategory(cat);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (editingCategory) {
      handleEditCategory();
    } else {
      handleAddCategory();
    }
  };

  return (
    <div>
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="dark" 
      />

      {loading ? (
        <div className="flex w-full h-full items-center justify-center pt-60">
          <Spinner color="primary" size="lg" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-10 pt-10 px-4">
            <Input
              label="Category Name"
              labelPlacement="outside"
              placeholder="Enter category name"
              description="Provide a name for the category"
              color={isSubmitted && !category ? "danger" : "primary"}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <Button className="mt-6 mx-4" color="primary" onClick={handleSubmit}>
            {editingCategory ? "Update Category" : "Add Category"}
          </Button>

          <div className="mt-8 px-4">
            {addedCategories.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-4">Added Categories:</h3>
                <ul>
                  {addedCategories.map((cat, index) => (
                    <li key={index} className="mb-4">
                      <div className="grid grid-cols-3 w-2/4 items-center">
                          <div className="flex gap-3 items-center">
                          <h1 className="text-2xl">#{index + 1}</h1>
                          <h2><strong>{cat.category}</strong></h2>
                          </div>
                        <Button
                          className="ml-4"
                          size="xs"
                          color="secondary"
                          onClick={() => handleEdit(cat)}
                        >
                          Edit
                        </Button>
                        <Button
                          className="ml-4"
                          size="xs"
                          color="danger"
                          onClick={() => handleDelete(cat.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AddCategory;

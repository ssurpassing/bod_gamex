import { useState, useEffect, useCallback } from 'react';
import { API_ENDPOINTS } from '@/config/site';

export const useGames = (filter = null, sortBy = null, limit = null) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGames = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_ENDPOINTS.games);
      if (!response.ok) throw new Error('Failed to fetch games');

      const result = await response.json();

      // Handle the new API response format { success: true, data: [...] }
      let data = result.success ? result.data : result;

      // Apply filter
      if (filter) {
        data = data.filter(item => item.gameCategory === filter);
      }

      // Apply sorting
      if (sortBy === 'date') {
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (sortBy === 'views') {
        data.sort((a, b) => b.view - a.view);
      }

      // Apply limit
      if (limit) {
        data = data.slice(0, limit);
      }

      setGames(data);
    } catch (error) {
      setError(error.message);
      setGames([]);
    } finally {
      setLoading(false);
    }
  }, [filter, sortBy, limit]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return { games, loading, error, refetch: fetchGames };
};

export const useGameCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_ENDPOINTS.categories);
      if (!response.ok) throw new Error('Failed to fetch categories');

      const result = await response.json();

      // Handle the new API response format { success: true, data: [...] }
      const data = result.success ? result.data : result;
      setCategories(data);
    } catch (error) {
      setError(error.message);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, loading, error, refetch: fetchCategories };
};
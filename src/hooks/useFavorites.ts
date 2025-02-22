import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorite_planets8";

interface Planet {
  id: string;
  [key: string]: any;
}

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Planet[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };
    loadFavorites();
  }, [favorites]);

  const toggleFavorite = async (planet: Planet) => {
    const isFavorite = favorites.some(
      (favorite: Planet) => favorite.id === planet.id,
    );

    const updatedFavorites = isFavorite
      ? favorites.filter((favorite: Planet) => favorite.id !== planet.id)
      : [...favorites, planet];

    setFavorites(updatedFavorites);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  return { favorites, toggleFavorite };
};

export default useFavorites;

import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorite_planets8";

interface Planet {
  id: string;
  [key: string]: any;
}

const useFavorites = () => {
  /**
   * State to store the list of favorite planets.
   */
  const [favorites, setFavorites] = useState<Planet[]>([]);

  useEffect(() => {
    /**
     * Loads the list of favorite planets from AsyncStorage.
     */
    const loadFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };
    loadFavorites();
  }, [favorites]);

  /**
   * Toggles the favorite status of a planet.
   * If the planet is already a favorite, it will be removed from the list.
   * If the planet is not a favorite, it will be added to the list.
   *
   * @param {Planet} planet - The planet to toggle in the favorites list.
   */
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

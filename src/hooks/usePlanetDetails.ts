import { useState, useEffect } from "react";

/**
 * Custom hook to fetch and manage planet details.
 *
 * @param {string} planetUrl - The URL to fetch planet details from.
 * @returns {Object} An object containing the planet details, loading state, and error state.
 * @returns {Object|null} return.planet - The fetched planet details or null if not yet fetched.
 * @returns {boolean} return.loading - The loading state, true if the data is still being fetched.
 * @returns {string|null} return.error - The error message if an error occurred, otherwise null.
 */
const usePlanetDetails = (planetUrl: string) => {
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!planetUrl) return;

    const fetchPlanetDetails = async () => {
      try {
        const response = await fetch(planetUrl);
        if (!response.ok) throw new Error("Failed to fetch planet details");
        const data = await response.json();
        setPlanet(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanetDetails();
  }, [planetUrl]);

  return { planet, loading, error };
};

export default usePlanetDetails;

export default usePlanetDetails;

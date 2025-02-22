import { useState, useEffect } from "react";

import { API_HOST } from "../utils/constants";

const API_URL = API_HOST;

const usePlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch planets");
        const data = await response.json();
        setPlanets(data.bodies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return { planets, loading, error };
};

export default usePlanets;

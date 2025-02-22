import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { PlanetType } from "../../interfaces/planet.interface";
import usePlanets from "../../hooks/usePlanets";
import colors from "../../utils/colors";
import Loader from "../loader/Loader";
import PlanetSearch from "../planetSearch/PlanetSearch";
import SortButtons from "./SortButtons";
import PlanetList from "./PlanetList";

const ListPlanets: React.FC = () => {
  const { planets, loading, error } = usePlanets() as {
    planets: PlanetType[];
    loading: boolean;
    error: string | null;
  };
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filteredPlanets, setFilteredPlanets] = useState<PlanetType[]>([]);

  useEffect(() => {
    const updatedPlanets = planets
      .filter((planet) =>
        planet.englishName.toLowerCase().includes(searchText.toLowerCase()),
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.englishName.localeCompare(b.englishName)
          : b.englishName.localeCompare(a.englishName),
      );

    setFilteredPlanets(updatedPlanets);
  }, [planets, searchText, sortOrder]);

  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <View style={styles.container}>
      {loading && <Loader testID="loader" />}
      <PlanetSearch onChange={setSearchText} />
      <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <PlanetList planets={filteredPlanets} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackPearl,
    padding: 10,
  },
  error: {
    color: colors.carmine,
    textAlign: "center",
    marginTop: 20,
  },
});

export default ListPlanets;

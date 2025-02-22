import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import colors from "../utils/colors";
import usePlanetDetails from "../hooks/usePlanetDetails";
import PlanetDetails from "../components/planetDetails/PlanetDetails";
import Loader from "../components/loader/Loader";

const PlanetDetailsScreen = () => {
  const route = useRoute();
  const url = (route.params as { planetId: string })?.planetId;

  const { planet, loading, error } = usePlanetDetails(url);

  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{planet?.englishName}</Text>
      <PlanetDetails planet={planet || {}} />
      {loading && <Loader testID="loader" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackPearl,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    marginBottom: 15,
  },
  error: {
    color: colors.carmine,
    textAlign: "center",
    marginTop: 20,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlanetDetailsScreen;

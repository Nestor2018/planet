import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { PlanetType } from "../interfaces/planet.interface";
import colors from "../utils/colors";
import useFavorites from "../hooks/useFavorites";
import PlanetList from "../components/listPlanets/PlanetList";

const FavoritesScreen = () => {
  const { favorites } = useFavorites();
  return (
    <View style={styles.container}>
      <PlanetList planets={favorites as PlanetType[]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackPearl,
    padding: 10,
  },
});

export default FavoritesScreen;

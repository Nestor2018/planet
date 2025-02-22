import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { PlanetType } from "../../interfaces/planet.interface";
import useFavorites from "../../hooks/useFavorites";
import colors from "../../utils/colors";

interface Props {
  planet: PlanetType;
  isFavorite: boolean;
}

const Planet: React.FC<Props> = ({ planet, isFavorite }) => {
  const { toggleFavorite } = useFavorites();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{planet.englishName}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(planet)}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={isFavorite ? colors.picton : colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.charade,
    borderRadius: 8,
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
});

export default Planet;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useFavorites from "../../hooks/useFavorites";
import colors from "../../utils/colors";

interface Planet {
  id?: string;
  englishName?: string;
  mass?: {
    massValue?: number;
    massExponent?: number;
  };
  gravity?: number;
  meanRadius?: number;
  sideralOrbit?: number;
  moons?: { moon: string; rel: string }[];
  semimajorAxis?: number;
  perihelion?: number;
  aphelion?: number;
  eccentricity?: number;
  inclination?: number;
  density?: number;
  escape?: number;
  equaRadius?: number;
  polarRadius?: number;
  flattening?: number;
  sideralRotation?: number;
  axialTilt?: number;
  avgTemp?: number;
  bodyType?: string;
}

const PlanetDetails = ({ planet }: { planet: Planet }) => {
  const planetDetails = planet
    ? [
        { label: "Name", value: planet?.englishName },
        {
          label: "Mass",
          value: `${planet?.mass?.massValue} × 10${planet?.mass?.massExponent} kg`,
        },
        { label: "Gravity", value: `${planet?.gravity} m/s²` },
        { label: "Mean Radius", value: `${planet?.meanRadius} km` },
        { label: "Orbital Period", value: `${planet?.sideralOrbit} days` },
        { label: "Moons", value: `${planet?.moons?.length || 0}` },
        { label: "Semimajor Axis", value: `${planet?.semimajorAxis} km` },
        { label: "Perihelion", value: `${planet?.perihelion} km` },
        { label: "Aphelion", value: `${planet?.aphelion} km` },
        { label: "Eccentricity", value: `${planet?.eccentricity}` },
        { label: "Inclination", value: `${planet?.inclination}°` },
        { label: "Density", value: `${planet?.density} g/cm³` },
        { label: "Escape Velocity", value: `${planet?.escape} m/s` },
        { label: "Equatorial Radius", value: `${planet?.equaRadius} km` },
        { label: "Polar Radius", value: `${planet?.polarRadius} km` },
        { label: "Flattening", value: `${planet?.flattening}` },
        {
          label: "Sidereal Rotation",
          value: `${planet?.sideralRotation} hours`,
        },
        { label: "Axial Tilt", value: `${planet?.axialTilt}°` },
        { label: "Average Temperature", value: `${planet?.avgTemp} K` },
        { label: "Body Type", value: planet?.bodyType },
      ]
    : [];

  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some(
    (favorite: { id: string }) => favorite.id === planet.id,
  );

  return (
    <View style={styles.detailsContainer}>
      <TouchableOpacity onPress={() => toggleFavorite(planet)}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={isFavorite ? colors.picton : colors.white}
        />
      </TouchableOpacity>

      {planetDetails.map((detail, index) => (
        <DetailItem
          key={index}
          label={detail.label}
          value={detail.value || "N/A"}
        />
      ))}
    </View>
  );
};

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <Text style={styles.detailText}>
    <Text style={styles.highlight}>{label}: </Text>
    {value}
  </Text>
);

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: colors.charade,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: colors.zircon,
    marginBottom: 5,
  },
  highlight: {
    color: colors.picton,
    fontWeight: "bold",
  },
});

export default PlanetDetails;

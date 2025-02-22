import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../utils/colors";

interface Planet {
  mass?: {
    massValue?: number;
    massExponent?: number;
  };
  gravity?: number;
  meanRadius?: number;
  sideralOrbit?: number;
}

const PlanetDetails = ({ planet }: { planet: Planet }) => {
  return (
    <View style={styles.detailsContainer}>
      <DetailItem
        label="Mass"
        value={`${planet?.mass?.massValue} × 10${planet?.mass?.massExponent} kg`}
      />
      <DetailItem label="Gravity" value={`${planet?.gravity} m/s²`} />
      <DetailItem label="Mean Radius" value={`${planet?.meanRadius} km`} />
      <DetailItem
        label="Orbital Period"
        value={`${planet?.sideralOrbit} days`}
      />
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

import React from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import useFavorites from "../../hooks/useFavorites";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import Planet from "./Planet";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { PlanetProps } from "../../interfaces/planet.interface";

const PlanetList: React.FC<PlanetProps> = ({ planets }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { favorites } = useFavorites();

  return (
    <FlatList
      testID="planet-list"
      data={planets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("PlanetDetails", { planetId: item.rel })
          }
        >
          <Planet
            testID={`planet-${item.englishName}`}
            planet={item}
            isFavorite={favorites.some(
              (favorite: { id: string }) => favorite.id === item.id,
            )}
          />
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <Text style={styles.text}>No planets available.</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 16,
    marginTop: 16,
  },
});

export default PlanetList;

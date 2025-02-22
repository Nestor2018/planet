import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import useFavorites from "../../hooks/useFavorites";
import { useNavigation } from "@react-navigation/native";
import Planet from "./Planet";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { PlanetProps } from "../../interfaces/planet.interface";

const PlanetList: React.FC<PlanetProps> = ({ planets }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { favorites } = useFavorites();

  return (
    <FlatList
      data={planets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("PlanetDetails", { planetId: item.rel })
          }
        >
          <Planet
            planet={item}
            isFavorite={favorites.some(
              (favorite: { id: string }) => favorite.id === item.id,
            )}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default PlanetList;

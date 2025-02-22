import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../utils/colors";
import MyTabs from "./TabsNavigator";
import PlanetDetailsScreen from "../screens/PlanetDetailsScreen";

export type RootStackParamList = {
  index: undefined;
  PlanetDetails: { planetId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen
        name="index"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlanetDetails"
        component={PlanetDetailsScreen}
        options={{ title: "Planet Details" }}
      />
    </Stack.Navigator>
  );
});

export default NavigationStack;

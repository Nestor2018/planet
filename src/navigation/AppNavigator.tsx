import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const NavigationStack = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List planets" component={HomeScreen} />
    </Stack.Navigator>
  );
});

export default NavigationStack;

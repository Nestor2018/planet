import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyTabs from "./TabsNavigator";

const Stack = createNativeStackNavigator();

const NavigationStack = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default NavigationStack;

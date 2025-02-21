import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavigationStack from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

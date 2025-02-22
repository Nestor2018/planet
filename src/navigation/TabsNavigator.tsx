import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FunctionComponent } from "react";

import colors from "../utils/colors";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

const MyTabs: FunctionComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
        },
        headerTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.blackPearl,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.gray,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;

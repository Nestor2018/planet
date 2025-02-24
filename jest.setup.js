import { NativeModules } from "react-native";

// Mock para react-native-reanimated
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock para react-native-gesture-handler
jest.mock("react-native-gesture-handler", () => {
  return {
    GestureHandlerRootView: ({ children }) => children,
    PanGestureHandler: "View",
    State: {},
    Directions: {},
  };
});

// Mock para react-native-svg
jest.mock("react-native-svg", () => {
  return {
    Svg: "View",
    Circle: "View",
    Rect: "View",
    // Agrega otros componentes SVG que uses
  };
});

// Mock para expo-status-bar (si lo necesitas)
jest.mock("expo-status-bar", () => ({
  StatusBar: "View",
}));

// Mock de AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  getAllKeys: jest.fn(),
  multiGet: jest.fn(),
  multiSet: jest.fn(),
  multiRemove: jest.fn(),
}));

// Mock de @expo/vector-icons
jest.mock("@expo/vector-icons", () => ({
  Ionicons: ({ name, size, color, ...props }) => (
    <view
      testID={`icon-${name}`}
      name={name}
      size={size}
      color={color}
      {...props}
    />
  ),
  MaterialIcons: ({ name, size, color, ...props }) => (
    <view
      testID={`icon-${name}`}
      name={name}
      size={size}
      color={color}
      {...props}
    />
  ),
}));

// Mock de @react-navigation/native
jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(), // Mockeamos la función navigate
      // Agrega otros métodos que uses en PlanetList si es necesario
    }),
    // Mockeamos NavigationContainer si lo usas directamente en otros componentes
    NavigationContainer: ({ children }) => children,
  };
});

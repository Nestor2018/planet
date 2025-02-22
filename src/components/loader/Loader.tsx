import React from "react";
import {
  StyleSheet,
  ActivityIndicator,
  ActivityIndicatorProps,
} from "react-native";

interface LoaderProps extends ActivityIndicatorProps {}

const Loader: React.FC<LoaderProps> = ({
  color = "white",
  size = "large",
  style,
  ...rest
}) => (
  <ActivityIndicator
    color={color}
    size={size}
    style={[styles.loader, style]}
    {...rest}
    testID="loader"
    accessibilityLabel={rest.accessibilityLabel || "Loading..."}
  />
);

const styles = StyleSheet.create({
  loader: {
    margin: 20,
  },
});

export default Loader;

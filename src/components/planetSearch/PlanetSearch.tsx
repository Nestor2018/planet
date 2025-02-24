import React, { useState, useCallback, memo } from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";

import colors from "../../utils/colors";

interface PlanetSearchProps {
  onChange: (query: string) => void;
}

const PlanetSearch: React.FC<PlanetSearchProps> = memo(({ onChange }) => {
  const [query, setQuery] = useState<string>("");

  const handleText = useCallback(
    (queryInput: string) => {
      setQuery(queryInput);
      if (onChange) {
        onChange(queryInput);
      }
    },
    [onChange],
  );

  return (
    <View testID="planet-search">
      <TextInput
        testID="input"
        style={[
          styles.textInput,
          Platform.OS == "ios" ? styles.textInputIos : styles.textInputAndroid,
        ]}
        onChangeText={handleText}
        value={query}
        placeholder="Search planet"
        placeholderTextColor="white"
        accessible={true}
        accessibilityLabel="Search planet"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: colors.gray,
    paddingLeft: 16,
    color: colors.white,
  },
  textInputAndroid: {
    borderWidth: 2,
    borderBottomColor: colors.zircon,
  },
  textInputIos: {
    margin: 8,
    borderRadius: 8,
  },
});

export default PlanetSearch;

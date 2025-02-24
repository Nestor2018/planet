import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../utils/colors";

interface Props {
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
}

const SortButtons: React.FC<Props> = ({ sortOrder, setSortOrder }) => {
  return (
    <View style={styles.sortContainer} testID="sort-buttons">
      {["asc", "desc"].map((order) => (
        <TouchableOpacity
          key={order}
          style={[
            styles.sortButton,
            sortOrder === order && styles.activeButton,
          ]}
          testID={`button-${order}`}
          onPress={() => setSortOrder(order as "asc" | "desc")}
        >
          <Ionicons
            name={order === "asc" ? "arrow-up" : "arrow-down"}
            size={18}
            color={sortOrder === order ? colors.blackPearl : colors.white}
          />
          <Text
            style={[
              styles.buttonText,
              sortOrder === order && styles.activeButtonText,
            ]}
          >
            {order === "asc" ? "Ascendente" : "Descendente"}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sortContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.charade,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    minWidth: 120,
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: colors.picton,
  },
  buttonText: {
    color: colors.white,
    marginLeft: 5,
    fontSize: 14,
  },
  activeButtonText: {
    color: colors.blackPearl,
  },
});

export default SortButtons;

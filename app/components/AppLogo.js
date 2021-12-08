import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";

export default function AppLogo({ size }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name="book-open-page-variant"
        size={size * 0.65}
        backgroundColor={colors.primary}
        color={colors.subTitle}
      />
      {/* <AppText style={styles.tagLine}>Open Book</AppText> */}
    </View>
  );
}

const styles = StyleSheet.create({
  tagLine: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "600",
    // textDecorationLine: "underline",
  },
});

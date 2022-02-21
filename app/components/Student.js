import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import AppText from "./AppText";
import AppIcon from "./AppIcon";

import colors from "../config/colors";

export default function Student({ name, email, classNumber, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <AppIcon
          name={"account"}
          size={50}
          backgroundColor={colors.primary}
          iconColor={colors.subTitle}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.email}>{email}</AppText>
          <AppText style={styles.classNumber}>{classNumber}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  email: {
    color: colors.secondary,
    fontSize: 15,
  },
  classNumber: {
    color: colors.subTitle,
    fontSize: 15,
  },
});

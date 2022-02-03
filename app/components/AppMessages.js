import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../components/AppText";
import AppIcon from "../components/AppIcon";
import colors from "../config/colors";

export default function AppMessages({
  title,
  user,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <AppIcon
            name="email"
            iconColor={colors.subTitle}
            backgroundColor={colors.primary}
          />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {user}
            </AppText>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
          </View>
          <MaterialCommunityIcons
            name="chevron-left"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
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
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.subTitle,
  },
});

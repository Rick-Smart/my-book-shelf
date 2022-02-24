import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import colors from "../config/colors";
import store from "../utils/store";

export default function UserHeader({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  const user = store.getState().user;

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}

          <Image
            style={styles.image}
            source={require("../assets/bookbackground.jpeg")}
          />

          <View style={styles.detailsContainer}>
            {user.name && (
              <AppText style={styles.title} numberOfLines={1}>
                {user.name}
              </AppText>
            )}
            {user.email && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {user.email}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
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
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
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

import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks } from "../store/reducer";

import AppText from "./AppText";
import colors from "../config/colors";

export default function UserHeader({ IconComponent, onPress }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}

<<<<<<< HEAD
          <Image
            style={styles.image}
            source={require("../assets/bookbackground.jpeg")}
          />
=======
        <Image
          style={styles.image}
          source={require("../assets/bookbackground.jpeg")}
        />
>>>>>>> a72ca3b4ed877d58010689e2d2bfbeea30fa8ff6

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
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 15,
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

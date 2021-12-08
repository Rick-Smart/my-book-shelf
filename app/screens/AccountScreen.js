import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppIcon from "../components/AppIcon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";

import colors from "../config/colors";

const menuItems = [
  {
    title: "Recommended Books",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Recommended",
  },
  {
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          onPress={() => console.log("account details")}
          title="User Name"
          subTitle="user Email"
          image={require("../assets/bookbackground.jpeg")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
  logoutContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  menuContainer: {
    paddingTop: 10,
  },
});

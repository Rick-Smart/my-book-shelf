import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppIcon from "../components/AppIcon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";

import colors from "../config/colors";

const menuItems = [
  {
    title: "My Book Shelf",
    icon: {
      name: "book-multiple",
      backgroundColor: colors.primary,
    },
    targetScreen: "BookShelf",
  },
  {
    title: "Recommended Books",
    icon: {
      name: "book-plus-multiple",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Recommended",
  },
  {
    title: "community Library",
    icon: {
      name: "library-shelves",
      backgroundColor: colors.subTitle,
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
      <View style={styles.menuContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => console.log(item.title)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.logoutContainer}>
        <ListItem
          title="log out"
          onPress={() => console.log("log out")}
          IconComponent={
            <AppIcon name="logout" backgroundColor={colors.subTitle} />
          }
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

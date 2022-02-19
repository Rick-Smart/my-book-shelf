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
    targetScreen: "MyBookShelfScreen",
    tabName: "MyBookShelf",
  },
  {
    title: "Add Books to Shelf",
    icon: {
      name: "book-plus-multiple",
      backgroundColor: colors.secondary,
    },
    targetScreen: "AddBooksScreen",
    tabName: "AddBooks",
  },
  {
    title: "Community Library",
    icon: {
      name: "library-shelves",
      backgroundColor: colors.subTitle,
    },
    targetScreen: "CommunityLibraryScreen",
    tabName: "CommunityLibrary",
  },
  {
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.blue,
    },
    targetScreen: "MessagesScreen",
    tabName: "Messages",
  },
];

export default function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Amber H."
          subTitle="aquarius_darling226"
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
              onPress={() =>
                navigation.navigate(item.targetScreen, item.tabName)
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.logoutContainer}>
        <ListItem
          title="Log Out"
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

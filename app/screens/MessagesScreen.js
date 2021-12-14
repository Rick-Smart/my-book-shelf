import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppIcon from "../components/AppIcon";
import AppMessages from "../components/AppMessages";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";

import colors from "../config/colors";

const messages = [
  {
    title: "My Book Shelf",
    icon: {
      name: "email",
      backgroundColor: colors.primary,
    },
    targetScreen: "MyBookShelfScreen",
    tabName: "MyBookShelf",
  },
  {
    title: "Recommended Books",
    icon: {
      name: "book-plus-multiple",
      backgroundColor: colors.secondary,
    },
    targetScreen: "RecommendedScreen",
    tabName: "Recommended",
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
  {
    title: "MoreMessages",
    icon: {
      name: "email",
      backgroundColor: colors.blue,
    },
    targetScreen: "MessagesScreen",
    tabName: "Messages",
  },
  {
    title: "LotsOMessages",
    icon: {
      name: "email",
      backgroundColor: colors.blue,
    },
    targetScreen: "MessagesScreen",
    tabName: "Messages",
  },
];

export default function MessagesScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="User Name"
          subTitle="user Email"
          image={require("../assets/bookbackground.jpeg")}
        />
      </View>
      <View style={styles.menuContainer}>
        <FlatList
          data={messages}
          keyExtractor={(messageItem) => messageItem.title.toString()}
          renderItem={({ item }) => (
            <AppMessages 
            title={item.title} 
            // onPress={() => console.log(item)}
             />
          )}
          ItemSeparatorComponent={ListItemSeparator}
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
  menuContainer: {
    paddingTop: 10,
  },
});

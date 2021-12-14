import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppMessages from "../components/AppMessages";
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";
import Screen from "../components/Screen";

import colors from "../config/colors";

// This is for testing purposes only, and will be removed
// when we start pulling data from the server
const messageData = [
  {
    user: "Rick",
    title: "My Book Shelf",
    icon: {
      name: "email",
      backgroundColor: colors.primary,
    },
    targetScreen: "MyBookShelfScreen",
    tabName: "MyBookShelf",
    text: "Stuff and things about stuff",
  },
  {
    user: "Cass",
    title: "Recommended Books",
    icon: {
      name: "book-plus-multiple",
      backgroundColor: colors.secondary,
    },
    targetScreen: "RecommendedScreen",
    tabName: "Recommended",
    text: "Stuff and things about stuff",
  },
  {
    user: "Amber",
    title: "Community Library",
    icon: {
      name: "library-shelves",
      backgroundColor: colors.subTitle,
    },
    targetScreen: "CommunityLibraryScreen",
    tabName: "CommunityLibrary",
    text: "Stuff and things about stuff",
  },
  {
    user: "Sienna",
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.blue,
    },
    targetScreen: "MessagesScreen",
    tabName: "Messages",
    text: "Stuff and things about stuff",
  },
];

export default function MessagesScreen({ navigation }) {
  const [messages, setMessages] = useState(messageData);

  //   this is the function im using for deleting a message and will
  // be replaced once we start using redux
  const handleDeleteMessage = (item) => {
    const newMessages = messages.filter(({ title }) => title !== item.title);
    setMessages(newMessages);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="User Name"
          subTitle="user Email"
          image={require("../assets/bookbackground.jpeg")}
          onPress={() => navigation.navigate("Account")}
        />
      </View>
      <View style={styles.menuContainer}>
        <FlatList
          data={messages}
          keyExtractor={(messageItem) => messageItem.title.toString()}
          renderItem={({ item }) => (
            <AppMessages
              title={item.title}
              renderRightActions={() => (
                <ListItemDeleteAction
                  onPress={() => handleDeleteMessage(item)}
                />
              )}
              onPress={() => navigation.navigate("Message", item)}
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

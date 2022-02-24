import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppMessages from "../components/AppMessages";
import {
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";
import Screen from "../components/Screen";
import UserHeader from "../components/UserHeader";

import colors from "../config/colors";

// This is for testing purposes only, and will be removed
// when we start pulling data from the server
const messageData = [
  {
    user: "Rick",
    title: "Update your app bro..",
    icon: {
      name: "email",
      backgroundColor: colors.primary,
    },
    targetScreen: "MyBookShelfScreen",
    tabName: "MyBookShelf",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    user: "Cass",
    title: "I need some recommendations",
    icon: {
      name: "book-plus-multiple",
      backgroundColor: colors.secondary,
    },
    targetScreen: "RecommendedScreen",
    tabName: "Recommended",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    user: "Amber",
    title: "Nobody listens to me...",
    icon: {
      name: "library-shelves",
      backgroundColor: colors.subTitle,
    },
    targetScreen: "CommunityLibraryScreen",
    tabName: "CommunityLibrary",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    user: "Sienna",
    title: "Blah blah blah",
    icon: {
      name: "email",
      backgroundColor: colors.blue,
    },
    targetScreen: "MessagesScreen",
    tabName: "Messages",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        <UserHeader
          
          onPress={() => navigation.navigate("Account")}
        />
      </View>
      <View style={styles.menuContainer}>
        <FlatList
          data={messages}
          keyExtractor={(messageItem) => messageItem.title.toString()}
          renderItem={({ item }) => (
            <AppMessages
              user={item.user}
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

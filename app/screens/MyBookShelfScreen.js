import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppTextInput from "../components/AppTextInput";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import AppText from "../components/AppText";

import colors from "../config/colors";

// this is for testing purposes only will be replaced once we are making
// requests to the server and db
const myBooks = [
  {
    id: 1,
    title: "Through the Arc Of The Rain Forest",
    rating: 5,
    author: "Karen Tei Yamashita",
    image: "https://m.media-amazon.com/images/I/41opg4cRxFL.jpg",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "Feminism Unfinished",
    rating: 2,
    author: "Doroty Sue Cobble",
    image: "https://images-na.ssl-images-amazon.com/images/I/81oKhHdzr+L.jpg",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    title: "Enviromental Policy",
    rating: 4,
    author: "Norman J. Vig",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61YufTqMJ4L._AC_UL600_SR600,600_.jpg",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function MyBookShelfScreen({ navigation }) {
  const [searchResults, setSearchResults] = useState([]);

  const bookSearch = (text) => {
    if (text) {
      const searchTerm = text;

      // filter method i'm using to search for books in my array
      const filteredBooks = myBooks.filter(({ title, author }) => {
        return (
          title.toLowerCase().includes(searchTerm) ||
          author.toLowerCase().includes(searchTerm)
        );
      });

      setSearchResults(filteredBooks);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Screen style={styles.screen}>
      <View>
        <ListItem
          onPress={() => navigation.navigate("Account")}
          title="Amber H."
          subTitle="aquarius_darling226"
          image={require("../assets/bookbackground.jpeg")}
        />
      </View>
      <View style={styles.searchContainer}>
        <AppTextInput
          icon={"book-search"}
          placeholder="Search"
          onChangeText={(text) => bookSearch(text.toLowerCase())}
        />
      </View>

      {searchResults.length < 1 && (
        <AppText style={styles.helperText}>
          Type in the name or author of the book you're looking for in your
          library
        </AppText>
      )}

      {searchResults && (
        <View>
          <FlatList
            data={searchResults}
            keyExtractor={(listItem) => listItem.id.toString()}
            renderItem={({ item }) => (
              <AppCard
                title={item.title}
                subtitle={"Rating: " + item.rating}
                imageUrl={item.image}
                onPress={() => navigation.navigate("MyBookListing", item)}
              />
            )}
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
  searchContainer: {
    paddingVertical: 20,
  },
  helperText: {
    color: colors.primary,
    textAlign: "center",
    fontWeight: "bold",
  },
});

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
    id: 3,
    title: "Environmental Policy",
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61YufTqMJ4L._AC_UL600_SR600,600_.jpg",
    author: "Norman J. Vig",
  },
  {
    id: 1,
    title: "Through The Arc Of The Rain Forest",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41opg4cRxFL.jpg",
    author: "Karen Tei Yamashita",
  },
  {
    id: 2,
    title: "Feminism Unfinished",
    rating: 10,
    image: "https://images-na.ssl-images-amazon.com/images/I/81oKhHdzr+L.jpg",
    author: "Dorothy Sue Cobble",
  },
];

export default function MyBookShelfScreen() {
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
          onPress={() => console.log("account details")}
          title="User Name"
          subTitle="user Email"
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
                onPress={() => console.log(item.title)}
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
    backgroundColor: colors.grey,
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

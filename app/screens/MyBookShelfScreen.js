import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppTextInput from "../components/AppTextInput";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import booksApi from "../api/books";

import colors from "../config/colors";

export default function MyBookShelfScreen({ navigation }) {
  const [searchResults, setSearchResults] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const response = await booksApi.getBooks();
    setBooks(response.data);
  };

  const bookSearch = (text) => {
    if (text) {
      const searchTerm = text;

      // filter method i'm using to search for books in my array
      const filteredBooks = books.filter(({ title, authors }) => {
        return (
          title.toLowerCase().includes(searchTerm) ||
          authors.toLowerCase().includes(searchTerm)
        );
      });

      setSearchResults(filteredBooks);

      console.log(filteredBooks);
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

      {searchResults.length > 0
        ? searchResults && (
            <View>
              <FlatList
                data={searchResults}
                keyExtractor={(listItem) => listItem._id.toString()}
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
          )
        : books && (
            <View>
              <FlatList
                data={books}
                keyExtractor={(listItem) => listItem._id.toString()}
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

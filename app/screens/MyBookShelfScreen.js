import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import AppTextInput from "../components/AppTextInput";
import UserHeader from "../components/UserHeader";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import AppText from "../components/AppText";

import booksApi from "../api/books";

import colors from "../config/colors";

export default function MyBookShelfScreen({ navigation }) {
  const [searchResults, setSearchResults] = useState([]);
  const [books, setBooks] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    loadBooks();
  }, [isFocused]);
  // our api call to the db to fetch all of our saved books
  const loadBooks = async () => {
    const response = await booksApi.getBooks();
    setBooks(response.data);
  };
  // our book search method
  const bookSearch = (text) => {
    if (text) {
      const searchTerm = text;

      // filter method i'm using to search for books in my array
      // not all books in the google book search come back with all the fields filled out correctly.
      // Will need to sanitize the data before pushing to DB so this search function isn't so DIRTY
      const filteredBooks = books.filter(({ title, authors }) => {
        let firstAuthor = "";
        if (authors[0]) {
          firstAuthor = authors[0];
        } else firstAuthor = "";

        return (
          title.toLowerCase().includes(searchTerm) ||
          firstAuthor.toLowerCase().includes(searchTerm)
        );
      });

      setSearchResults(filteredBooks);
    }
  };

  return (
    <Screen style={styles.screen}>
      <View>
        <UserHeader onPress={() => navigation.navigate("Account")} />
      </View>
      <View style={styles.searchContainer}>
        <AppTextInput
          icon={"book-search"}
          placeholder="Search"
          onChangeText={(text) => bookSearch(text.toLowerCase())}
        />
      </View>

      {!searchResults && (
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

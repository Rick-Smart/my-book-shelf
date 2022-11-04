import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppTextInput from "../components/AppTextInput";
import UserHeader from "../components/UserHeader";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import AppText from "../components/AppText";

// redux hooks
import { useSelector, useDispatch } from "react-redux";
import { loadBooks, focusBook } from "../store/reducer";

import booksApi from "../api/books";

import colors from "../config/colors";

export default function MyBookShelfScreen({ navigation }) {
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    loadBooksApi();
  }, []);

  // our api call to the db to fetch all of our saved books and set them in
  // our redux store.
  const loadBooksApi = async () => {
    await booksApi
      .getBooks()
      .then((response) => {
        dispatch(loadBooks(response.data));
        return response;
      })
      .catch((err) => console.log(err));
  };

  // our book search method (still needs tweaking) 2/19/22
  const bookSearch = (text) => {
    if (text) {
      const searchTerm = text;

      // filter method i'm using to search for books in my array (still needs tweaking) 2/19/22
      const filteredBooks = books.filter(({ title, authors }) => {
        const firstAuthor = authors[0];
        return (
          title.toLowerCase().includes(searchTerm) ||
          firstAuthor.toLowerCase().includes(searchTerm)
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
        <UserHeader onPress={() => navigation.navigate("Account")} />
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
                    onPress={() => {
                      dispatch(focusBook(item));
                      navigation.navigate("MyBookListing");
                    }}
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
                    onPress={() => {
                      dispatch(focusBook(item));
                      navigation.navigate("MyBookListing");
                    }}
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

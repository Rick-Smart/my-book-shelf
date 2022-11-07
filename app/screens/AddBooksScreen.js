import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import image from "../config/imageUrls";
import Screen from "../components/Screen";
import UserHeader from "../components/UserHeader";
import colors from "../config/colors";

// our api route for google searches
import googleApi from "../api/google";

// redux hooks
import { useSelector, useDispatch } from "react-redux";
import { focusBook } from "../store/reducer";

export default function AddBooksScreen({ navigation }) {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const bookSearch = async (text) => {
    if (!text) return;
    // setting loading to true while searching for books and display our loading screen
    setLoading(true);
    // search google for books and organize them on the server
    const response = await googleApi.getBooks(text);
    // set our local state
    if (!response.problem) {
      // look back into this filtering method cause its amazing!
      // let filteredBookResults = response.filter(({ id }) => {
      //   return !this[id] && (this[id] = id);
      // });
      let filteredBookResults = [
        ...new Map(response.map((book) => [book.id, book])).values(),
      ];

      // let secondFilter = filteredBookResults.filter((books) => {
      //   books.authors !== "No Author";
      // });

      setSearchResults(filteredBookResults);
    } else {
      setSearchResults([]);
      setError(true);
    }
    // turn off loading and hide our loading screen
    setLoading(false);
  };

  return (
    <Screen style={styles.screen}>
      <View>
        <UserHeader onPress={() => navigation.navigate("Account")} />
      </View>
      {error && (
        <>
          <View style={styles.errorContainer}>
            <AppText>Couldn't find the book you're lookings for...</AppText>
            <AppButton title="retry" onPress={() => setError(false)} />
          </View>
        </>
      )}
      {!error && (
        <View style={styles.searchContainer}>
          <AppTextInput
            clearButtonMode="true"
            icon={"book-search"}
            placeholder="Search"
            onChangeText={(text) => bookSearch(text)}
          />
        </View>
      )}
      {!error && searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          keyExtractor={(listItem) => listItem?.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subtitle={"Rating: " + item.rating}
              imageUrl={item.image ? item.image : image.noImage}
              onPress={() => {
                dispatch(focusBook(item));
                navigation.navigate("MyBookListing");
              }}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    alignItems: "center",
  },
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
  searchContainer: {
    paddingVertical: 20,
  },
});

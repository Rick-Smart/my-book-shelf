import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import image from "../config/imageUrls";
import Screen from "../components/Screen";
import { ListItem } from "../components/lists";
import googleApi from "../api/google";

export default function AddBooksScreen({ navigation }) {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const bookSearch = async (text) => {
    // setting loading to true while searching for books and display our loading screen
    setLoading(true);
    // search google for books and organize them on the server
    const response = await googleApi.getBooks(text);
    // set our local state
    if (!response.problem) {
      setSearchResults(response);
    } else {
      setError(true);
    }
    // turn off loading and hide our loading screen
    setLoading(false);
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
            icon={"book-search"}
            placeholder="Search"
            onChangeText={(text) => bookSearch(text)}
          />
        </View>
      )}
      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          keyExtractor={(listItem) => listItem?.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subtitle={"Rating: " + item.rating}
              imageUrl={item.image ? item.image : image.noImage}
              onPress={() => navigation.navigate("RecommendedListing", item)}
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
    padding: 20,
    backgroundColor: colors.light,
  },
  searchContainer: {
    paddingVertical: 20,
  },
});

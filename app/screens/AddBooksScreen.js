import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { ListItem } from "../components/lists";

const Base_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default function AddBooksScreen({ navigation }) {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const bookSearch = (text) => {
    const query = Base_URL + text;

    try {
      fetch(query)
        .then((data) => data.json())
        .then((books) => {
          if (books !== undefined) {
            return (results = books.items.map(({ volumeInfo }) => {
              return {
                id: volumeInfo.infoLink,
                title: volumeInfo.title,
                authors: volumeInfo.authors,
                description: volumeInfo.description,
                image: volumeInfo?.imageLinks?.thumbnail,
                link: volumeInfo.infoLink,
                rating: volumeInfo?.averageRating,
              };
            }));
          }
        })
        .then((results) => {
          setSearchResults(results);
        });
    } catch (error) {
      console.log(error.message);
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
      {error && (
        <>
          <View style={styles.errorContainer}>
            <AppText>Couldn't find the book you're lookings for...</AppText>
            <AppButton title="retry" onPress={() => console.log(error)} />
          </View>
        </>
      )}
      <View style={styles.searchContainer}>
        <AppTextInput
          icon={"book-search"}
          placeholder="Search"
          onChangeText={(text) => bookSearch(text)}
        />
      </View>
      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          keyExtractor={(listItem) => listItem?.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subtitle={"Rating: " + item.rating}
              imageUrl={item.image}
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

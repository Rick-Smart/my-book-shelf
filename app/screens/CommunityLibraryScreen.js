import React, { useState } from "react";
import { View, StyleSheet, FlatList, Keyboard } from "react-native";

import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";

import colors from "../config/colors";

// this is for testing purposes only
// When we first load this screen we'll pull down all the books
// within a certain distance from this user and store them in a state
// variable array that we can search through based on whatever
// criteria the user selects
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
    rating: 2,
    image: "https://images-na.ssl-images-amazon.com/images/I/81oKhHdzr+L.jpg",
    author: "Dorothy Sue Cobble",
  },
];

export default function CommunityLibraryScreen({ navigation }) {
  const [searchResults, setSearchResults] = useState(myBooks);

  const bookSearch = (text) => {
    // Keyboard.dismiss();
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
      setSearchResults(myBooks);
    }
  };

  return (
    <Screen style={styles.screen}>
      <View>
        <ListItem
          onPress={() => navigation.navigate("Account")}
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

      {searchResults === myBooks && (
        <View style={styles.helperTextContainer}>
          <AppText style={styles.helperText}>
            Search for books from other users by name, author or distance.
          </AppText>
        </View>
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
                onPress={() => navigation.navigate("CommunityListing", item)}
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
  helperTextContainer: {
    paddingBottom: 20,
  },
});

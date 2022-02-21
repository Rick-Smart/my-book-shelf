import React from "react";
import { View, StyleSheet, Image, ScrollView, FlatList } from "react-native";

import AppText from "../components/AppText";
import bookApi from "../api/books";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import BookOptions from "../components/BookOptions";

import colors from "../config/colors";

export default function BookDetailsScreen({ route, navigation }) {
  const listing = route.params;
  // this function is being used to change the options of the book and will
  // need to be changed later once we've added redux to the app
  const handleOptions = (option) => {
    listing[option] = !listing[option];

    switch (option) {
      case "addToBookShelf":
        handleAddBook(listing);
        break;
      case "checkOut":
        break;
      case "returnToBookShelf":
        break;
      default:
        alert("what went wrong?");
    }

    console.log(listing);
  };

  const handleAddBook = async (book) => {
    const result = await bookApi.addBook(book);
    if (!result.ok) return alert("could not save your book");
    alert("Successfully saved your book!");
  };

  const options = [
    {
      name: "bookshelf",
      data: "addToBookShelf",
      onPress: handleOptions,
    },
    {
      name: "share-outline",
      data: "checkOut",
      onPress: handleOptions,
    },
    {
      name: "thumb-up",
      data: "returnToBookShelf",
      onPress: handleOptions,
    },
  ];

  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/bookbackground.jpeg")}
            title="Amber H."
            subTitle="aquarius_darling226"
            onPress={() => navigation.navigate("Account")}
          />
        </View>
        <Image style={styles.image} source={{ uri: listing.image }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.author}>By: {listing.authors}</AppText>
          <AppText style={styles.rating}>Rating: {listing.rating}</AppText>
          <View style={styles.bookOptionsContainer}>
            <FlatList
              horizontal={true}
              data={options}
              keyExtractor={(option) => option.data}
              renderItem={({ item }) => (
                <BookOptions
                  name={item.name}
                  data={item.data}
                  onPress={(name) => handleOptions(name)}
                />
              )}
            />
          </View>
        </View>
        <ScrollView style={styles.textContainer}>
          <AppText style={styles.text}>{listing.description}</AppText>
        </ScrollView>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
  image: {
    height: 300,
    resizeMode: "contain",
    width: "100%",
  },
  bookOptionsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: "bold",
  },
  text: { color: colors.secondary, fontSize: 18, fontWeight: "bold" },
  textContainer: {
    paddingHorizontal: 20,
    width: "100%",
    height: 300,
  },
  author: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  rating: {
    color: colors.subTitle,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 20,
  },
});

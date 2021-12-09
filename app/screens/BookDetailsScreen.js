import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, FlatList } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import BookOptions from "../components/BookOptions";

import colors from "../config/colors";

export default function BookDetailsScreen({ route }) {
  //   const listing = route.params;

  // this function is being used to change the options of the book and will
  // need to be changed later once we've added redux to the app
  const handleOptions = (option) => {
    listing[option] = !listing[option];
  };

  const options = [
    {
      name: "bookshelf",
      data: "owned",
      onPress: handleOptions,
    },
    {
      name: "share-outline",
      data: "loanable",
      onPress: handleOptions,
    },
    {
      name: "thumb-up",
      data: "recommend",
      onPress: handleOptions,
    },
  ];

  // this is for testing purposes only and will be switched out once we start
  // using the navigation
  const listing = {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61YufTqMJ4L._AC_UL600_SR600,600_.jpg",
    title: "Enviromental Policy",
    author: "Norman J.Vig",
    owned: false,
    loanable: false,
    recommend: false,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/bookbackground.jpeg")}
          title="Rick"
          subTitle="5 Listings"
        />
      </View>
      <Image style={styles.image} source={{ uri: listing.image }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.author}>By: {listing.author}</AppText>
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
        <AppText style={styles.text}>{listing.text}</AppText>
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
  text: {},
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

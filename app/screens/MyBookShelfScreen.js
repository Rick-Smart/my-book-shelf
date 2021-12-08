import React, { useState } from "react";
import { View, StyleSheet, FlatList, Keyboard } from "react-native";

import AppTextInput from "../components/AppTextInput";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import AppText from "../components/AppText";

import colors from "../config/colors";

// this is for testing purposes only
const myBooks = [
  {
    id: 3,
    title: "Environmental Policy",
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61YufTqMJ4L._AC_UL600_SR600,600_.jpg",
  },
  {
    id: 1,
    title: "Through The Arc Of The Rain Forest",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41opg4cRxFL.jpg",
  },
  {
    id: 2,
    title: "Feminism Unfinished",
    rating: 2,
    image: "https://images-na.ssl-images-amazon.com/images/I/81oKhHdzr+L.jpg",
  },
];

export default function MyBookShelfScreen() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const bookSearch = () => {
    Keyboard.dismiss();
    
    let data = myBooks.filter(({ title }) =>
      title.toLowerCase().includes(search)
    );

    setResults(data);
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
          onChangeText={(text) => setSearch(text.toLowerCase())}
        />
        <AppButton marginTop={0} title="search" onPress={bookSearch} />
      </View>

      {results.length < 1 && (
        <AppText style={styles.helperText}>
          Type in the name of the book you're looking for in your library
        </AppText>
      )}

      {results && (
        <View>
          <FlatList
            data={results}
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

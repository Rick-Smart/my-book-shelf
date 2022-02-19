import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { ListItem } from "../components/lists";

// this is for testing purposes only
const recommendedBooks = [
  {
    id: 1,
    title: "Through the Arc Of The Rain Forest",
    rating: 5,
    author: "Karen Tei Yamashita",
    image: "https://m.media-amazon.com/images/I/41opg4cRxFL.jpg",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "Feminism Unfinished",
    rating: 2,
    author: "Doroty Sue Cobble",
    image: "https://images-na.ssl-images-amazon.com/images/I/81oKhHdzr+L.jpg",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    title: "Enviromental Policy",
    rating: 4,
    author: "Norman J. Vig",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61YufTqMJ4L._AC_UL600_SR600,600_.jpg",
    text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function AddBooksScreen({ navigation }) {
  const [recomendations, setRecommendations] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // loadListings();
  }, []);

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
            <AppText>Couldn't get recommendations</AppText>
            <AppButton title="retry" onPress={() => console.log(error)} />
          </View>
        </>
      )}
      <FlatList
        data={recommendedBooks}
        keyExtractor={(listItem) => listItem.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={"Rating: " + item.rating}
            imageUrl={item.image}
            onPress={() => navigation.navigate("RecommendedListing", item)}
          />
        )}
      />
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
});
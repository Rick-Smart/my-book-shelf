import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, ActivityIndicator, View } from "react-native";

import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Screen from "../components/Screen";


// this is for testing purposes only
const recommendedBooks = [
  {
    id: 1,
    title: "Through the Arc Of The Rain Forest",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41opg4cRxFL.jpg",
  },
  {
    id: 2,
    title: "Feminism Unfinished",
    rating: 2,
    image: "https://images-na.ssl-images-amazon.com/images/I/81oKhHdzr+L.jpg",
  },
  {
    id: 3,
    title: "Enviromental Policy",
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61YufTqMJ4L._AC_UL600_SR600,600_.jpg",
  },
];

export default function RecommendedScreen() {
  const [recomendations, setRecommendations] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
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
            onPress={() => console.log(item.title)}
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

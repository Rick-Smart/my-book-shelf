import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

export default function AppCard({ title, subtitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.cardText}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  image: {
    flex: 1,
    width: "undefined",
    height: "undefinded",
    resizeMode: "contain",
    marginVertical: 10,
  },
  cardText: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

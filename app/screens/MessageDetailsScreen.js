import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";

import colors from "../config/colors";

export default function MessageDetilsScreen({ route }) {
  const message = route.params;
  return (
    <Screen style={styles.screen}>
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{message.title}</AppText>
      </View>
      <View style={styles.messageContainer}>
        <ScrollView style={styles.textContainer}>
          <AppText style={styles.text}>{message.text}</AppText>
        </ScrollView>
      </View>
      <View style={styles.userInfoContainer}>
        <AppText style={styles.userInfo}>{message.user}</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: colors.subTitle,
  },
  titleContainer: {
    paddingVertical: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    width: "100%",
  },
  messageContainer: {
    marginVertical: 20,
  },
  textContainer: {
    width: "100%",
    height: 550,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  userInfoContainer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    width: "100%",
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  userInfo: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    color: colors.subTitle,
  },
});

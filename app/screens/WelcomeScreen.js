import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppLogo from "../components/AppLogo";

import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/bookbackground.jpeg")}
    >
      <View style={styles.logoContainer}>
        <AppLogo size={200} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => console.log("Login")}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
});

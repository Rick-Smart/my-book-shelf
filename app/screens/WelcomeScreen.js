import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import AppButton from "../components/AppButton";
import AppLogo from "../components/AppLogo";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      blurRadius={1}
      source={require("../assets/bookbackground.jpeg")}
    >
      <View style={styles.logoContainer}>
        <AppLogo size={200} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("RegisterScreen")}
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

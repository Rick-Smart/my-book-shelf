import React from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import * as Yup from "yup";

import AppLogo from "../components/AppLogo";
import Screen from "../components/Screen";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

// the validation needed for our form this will need to be changed for each form
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const onLogin = (values) => {
    console.log(values);
    navigation.navigate("AccountScreen");
    Keyboard.dismiss();
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <AppLogo size={200} />
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => onLogin(values)}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          TextContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 50,
  },
});

import React from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import * as Yup from "yup";

import AppLogo from "../components/AppLogo";
import Screen from "../components/Screen";

import authApi from "../api/auth";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

// the validation needed for our form this will need to be changed for each form
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
  name: Yup.string().required().min(1).label("Name"),
});

export default function RegisterScreen({ navigation }) {

  const onRegisterUser = async (values) => {
    console.log(values)
    Keyboard.dismiss();
    await authApi.authLogin(values).then((response) => {
      if (!response.ok) {
        console.log(response.data);
      }
      redirect();
    });
  };


  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <AppLogo size={200} />
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => onRegisterUser(values)}
      >
        <AppFormField
          name="name"
          autoCapitalize="words"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
        />
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
        <SubmitButton title="Register" />
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
    marginTop: 20,
    marginBottom: 20,
  },
});

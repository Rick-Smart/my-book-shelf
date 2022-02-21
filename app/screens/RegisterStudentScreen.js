import React from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import * as Yup from "yup";

import AppLogo from "../components/AppLogo";
import Screen from "../components/Screen";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import studentApi from "../api/students";

// the validation needed for our form this will need to be changed for each form
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  class: Yup.number().required().label("Class"),
  name: Yup.string().required().min(1).label("Name"),
});

export default function RegisterStudentScreen({ navigation }) {
  const onAddStudent = async (values) => {
    Keyboard.dismiss();
    const response = await studentApi.addStudent(values);
    redirect();
  };

  const redirect = () => {
    navigation.navigate("CommunityLibraryScreen");
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <AppLogo size={200} />
      </View>
      <AppForm
        initialValues={{ email: "", class: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => onAddStudent(values)}
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
          name="class"
          autoCapitalize="none"
          autoCorrect={false}
          icon="account-group"
          keyboardType="numeric"
          placeholder="Class"
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

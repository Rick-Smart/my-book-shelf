import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Screen from "../components/Screen";
import Student from "../components/Student";
import colors from "../config/colors";

export default function StudentDetailsScreen({ route }) {
  const student = route.params;

  return (
    <Screen style={styles.screen}>
      <View style={styles.studentContainer}>
        <Student
          name={student.name}
          email={student.email}
          classNumber={student.class}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
  studentContainer: {
    marginVertical: 20,
    borderRadius: 50,
  },
});

import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import Screen from "../components/Screen";
import Student from "../components/Student";
import AppCard from "../components/AppCard";
import colors from "../config/colors";

import booksApi from "../api/books";

export default function StudentDetailsScreen({ route }) {
  const [studentBooks, setStudentBooks] = useState();
  const student = route.params;

  // This is our Query to the DB for the list of books associated with the student.
  const loadBooksApi = async () => {
    await booksApi.getStudentBooks(student.books).then((response) => {
      setStudentBooks(response.data);
    });
  };

  useEffect(() => {
    loadBooksApi();
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles.studentContainer}>
        <Student
          name={student.name}
          email={student.email}
          classNumber={student.class}
        />
      </View>
      <View>
        <FlatList
          data={studentBooks}
          keyExtractor={(listItem) => listItem._id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subtitle={"Rating: " + item.rating}
              imageUrl={item.image}
              onPress={() => {
                console.log("yay!! you clicked a thing");
              }}
            />
          )}
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
  studentBooks: {
    backgroundColor: colors.danger,
  },
});

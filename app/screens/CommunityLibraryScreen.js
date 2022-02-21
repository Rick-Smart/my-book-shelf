import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";

import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import Student from "../components/Student";

import studentApi from "../api/students";

import colors from "../config/colors";

// this is for testing purposes only
// When we first load this screen we'll pull down all the books
// within a certain distance from this user and store them in a state
// variable array that we can search through based on whatever
// criteria the user selects

export default function CommunityLibraryScreen({ route, navigation }) {
  const [searchResults, setSearchResults] = useState([]);
  const [myStudents, setMyStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, [route.params]);

  const loadStudents = async () => {
    const response = await studentApi.getStudents();
    setMyStudents(response.data);
  };

  // this is the search feature we're using to tack down students by class or name
  const studentSearch = (text) => {
    if (text) {
      const searchTerm = text;

      // filter method i'm using to search for students
      const filteredStudents = myStudents.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchTerm) ||
          item.class == searchTerm
        );
      });

      setSearchResults(filteredStudents);
    } else {
      setSearchResults(myStudents);
    }
  };

  return (
    <Screen style={styles.screen}>
      <View>
        <ListItem
          onPress={() => navigation.navigate("Account")}
          title="Amber H."
          subTitle="aquarius_darling226"
          image={require("../assets/bookbackground.jpeg")}
        />
      </View>
      <View style={styles.searchContainer}>
        <AppTextInput
          icon={"book-search"}
          placeholder="Search"
          onChangeText={(text) => studentSearch(text.toLowerCase())}
        />
      </View>
      {/* this is a temporary button to test adding a new student */}
      <TouchableHighlight
        onPress={() => navigation.navigate("RegisterStudent")}
      >
        <AppText>Click to add student</AppText>
      </TouchableHighlight>

      {searchResults === myStudents && (
        <View style={styles.helperTextContainer}>
          <AppText style={styles.helperText}>
            Search for Students by Name or Class Number.
          </AppText>
        </View>
      )}
      {searchResults.length > 0
        ? searchResults && (
            <View>
              <FlatList
                data={searchResults}
                keyExtractor={(listItem) => listItem._id.toString()}
                renderItem={({ item }) => (
                  <Student
                    name={item.name}
                    email={item.email}
                    classNumber={item.class}
                    onPress={() => navigation.navigate("StudentDetails", item)}
                  />
                )}
              />
            </View>
          )
        : myStudents && (
            <View>
              <FlatList
                data={myStudents}
                keyExtractor={(listItem) => listItem._id.toString()}
                renderItem={({ item }) => (
                  <Student
                    name={item.name}
                    email={item.email}
                    classNumber={item.class}
                    onPress={() => navigation.navigate("StudentDetails", item)}
                  />
                )}
              />
            </View>
          )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
  searchContainer: {
    paddingVertical: 20,
  },
  helperText: {
    color: colors.primary,
    textAlign: "center",
    fontWeight: "bold",
  },
  helperTextContainer: {
    paddingBottom: 20,
  },
});

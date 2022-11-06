import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import UserHeader from "../components/UserHeader";
import Screen from "../components/Screen";
import Student from "../components/Student";

import studentApi from "../api/students";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function CommunityLibraryScreen({ navigation }) {
  const [searchResults, setSearchResults] = useState([]);
  const [myStudents, setMyStudents] = useState([]);

  // this is the effect were using to refresh the props of the screen
  // when ever we add a new student.
  const isFocused = useIsFocused();
  useEffect(() => {
    loadStudents();
  }, [isFocused]);

  // this is the actual api call to get our students from the db
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
        <UserHeader onPress={() => navigation.navigate("Account")} />
      </View>
      <View style={styles.searchContainer}>
        <AppTextInput
          icon={"account-search"}
          placeholder="Search"
          onChangeText={(text) => studentSearch(text.toLowerCase())}
        />
      </View>
      <AppButton
        title={"Add Student"}
        onPress={() => navigation.navigate("RegisterStudent")}
      />

      {searchResults < 0 && (
        <View style={styles.helperTextContainer}>
          <AppText style={styles.helperText}>
            Search for Students by Name or Class
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

import React, { useState } from "react";
import { View, Modal, StyleSheet, FlatList } from "react-native";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Student from "../components/Student";
import ListItem from "../components/lists/ListItem";

import studentApi from "../api/students";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function StudentSelectModal({
  modalVisible,
  dismissModal,
  selectStudent,
}) {
  const [searchResults, setSearchResults] = useState([]);
  const [myStudents, setMyStudents] = useState([]);

  // this is the actual api call to get our students from the db
  async function loadStudents() {
    const response = await studentApi.getStudents();
    setMyStudents(response.data);
  }

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
      setSearchResults([]);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onShow={() => {
          setSearchResults([]);
          loadStudents();
        }}
      >
        <View style={styles.modalView}>
          <AppText style={styles.appText}>
            Search by Name or Class Number
          </AppText>
          <View style={styles.appTextInputContainer}>
            <AppTextInput
              style={styles.appTextInput}
              icon={"account-search"}
              placeholder="Search"
              onChangeText={(text) => studentSearch(text.toLowerCase())}
            />
          </View>
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
                        onPress={() => {
                          selectStudent(item);
                          dismissModal();
                        }}
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
                        onPress={() => {
                          selectStudent(item);
                          dismissModal();
                        }}
                      />
                    )}
                  />
                </View>
              )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.light,
    borderRadius: 20,
    padding: 35,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  appText: {
    color: colors.danger,
    fontSize: 20,
    fontWeight: "bold",
  },
  appTextInputContainer: {
    marginVertical: 10,
  },
});

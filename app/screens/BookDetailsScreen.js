import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, FlatList } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import StudentSelectModal from "../components/StudentSelectModal";
import BookOptions from "../components/BookOptions";

// our apicalls
import bookApi from "../api/books";
import studentApi from "../api/students";

// config folder with all our defaults
import colors from "../config/colors";

export default function BookDetailsScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const listing = route.params;

  // this function is being used to change the options of the book and will
  // need to be changed later once we've added redux to the app
  const handleOptions = (option) => {
    listing[option] = !listing[option];

    switch (option) {
      case "addToBookShelf":
        handleAddBook(listing);
        break;
      case "checkOut":
        handleModalVisible();
        break;
      case "returnToBookShelf":
        break;
      default:
        alert("what went wrong?");
    }
  };

  const handleAddBook = async (book) => {
    try {
      await bookApi.addBook(book).then((result) => {
        console.log(result);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  // this function fires off when the checkout option is selected and prompts
  // the user to select the student thay they want to check this book out with
  const handleStudentSelect = (studentData) => {
    // now that we have the book data and student data, we can
    // perform our api call to add book to student
    try {
      handleCheckOut(listing, studentData);
    } catch (error) {
      console.log(error);
    }
  };

  // this function updates our books to reflect that they've been checked out
  const handleCheckOut = async (book, studentData) => {
    try {
      await bookApi.checkOutBook(book).then(() => {
        handleAddBookToSudent(listing, studentData);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // once the book has been registered as checkedout this function will then run
  // and add the book to the selected student
  const handleAddBookToSudent = async (book, student) => {
    try {
      await studentApi.addBooksToStudent(book, student).then((result) => {
        console.log(result);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const options = [
    {
      name: "bookshelf",
      data: "addToBookShelf",
      onPress: handleOptions,
    },
    {
      name: "share-outline",
      data: "checkOut",
      onPress: handleOptions,
    },
    {
      name: "thumb-up",
      data: "returnToBookShelf",
      onPress: handleOptions,
    },
  ];

  return (
    <Screen style={styles.screen}>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/bookbackground.jpeg")}
          title="Amber H."
          subTitle="aquarius_darling226"
          onPress={() => navigation.navigate("Account")}
        />
      </View>
      <ScrollView>
        <StudentSelectModal
          modalVisible={modalVisible}
          dismissModal={handleModalVisible}
          selectStudent={handleStudentSelect}
        />
        <Image style={styles.image} source={{ uri: listing.image }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.author}>By: {listing.authors}</AppText>
          <AppText style={styles.rating}>Rating: {listing.rating}</AppText>
          <View style={styles.bookOptionsContainer}>
            <FlatList
              horizontal={true}
              data={options}
              keyExtractor={(option) => option.data}
              renderItem={({ item }) => (
                <BookOptions
                  name={item.name}
                  data={item.data}
                  onPress={(name) => handleOptions(name)}
                />
              )}
            />
          </View>
        </View>
        <ScrollView style={styles.textContainer}>
          <AppText style={styles.text}>{listing.description}</AppText>
        </ScrollView>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
  image: {
    height: 300,
    resizeMode: "contain",
    width: "100%",
  },
  bookOptionsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: "bold",
  },
  text: { color: colors.secondary, fontSize: 18, fontWeight: "bold" },
  textContainer: {
    paddingHorizontal: 20,
    width: "100%",
    height: 300,
  },
  author: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  rating: {
    color: colors.subTitle,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 20,
  },
});

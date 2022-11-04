import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, ScrollView, FlatList } from "react-native";

import AppText from "../components/AppText";
import UserHeader from "../components/UserHeader";
import Screen from "../components/Screen";
import StudentSelectModal from "../components/StudentSelectModal";
import BookOptions from "../components/BookOptions";

// our apicalls
import bookApi from "../api/books";
import studentApi from "../api/students";

// redux hooks
import { useSelector, useDispatch } from "react-redux";
import { addBook, checkOutBook, focusBook } from "../store/reducer";

// config folder with all our defaults
import colors from "../config/colors";

export default function BookDetailsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [listing, setListing] = useState(
    useSelector((state) => state.focusedBook)
  );
  const dispatch = useDispatch();

  const handleAddBook = async (book) => {
    if (listing._id) return;
    try {
      await bookApi
        .addBook(book)
        .then((response) => {
          console.log(response);
          dispatch(addBook(response.data));
          return response;
        })
        .then((response) => {
          dispatch(focusBook(response.data));
          return response;
        })
        .then((response) => {
          dispatch(checkOutBook(response.data));
          return response;
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalVisible = () => {
    if (listing.checkedOut) return;
    setModalVisible(!modalVisible);
  };

  // this function fires off when the checkout option is selected and prompts
  // the user to select the student that they want to check this book out with
  const handleStudentSelect = (studentData) => {
    // now that we have the book data and student data, we can
    // perform our api call to add book to student
    try {
      if (!listing.owned) {
        handleAddBook(listing);
      }
      handleCheckOut(listing, studentData);
    } catch (error) {
      console.log(error);
    }
  };

  // this function updates our books to reflect that they've been checked out
  const handleCheckOut = async (book, studentData) => {
    try {
      await bookApi.checkOutBook(book).then(() => {
        dispatch(checkOutBook(book));
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
      await studentApi.addBooksToStudent(book, student);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.userContainer}>
        <UserHeader onPress={() => navigation.navigate("Account")} />
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
            <BookOptions
              name={"bookshelf"}
              setActive={listing.owned}
              onPress={() => handleAddBook(listing)}
            />
            <BookOptions
              name={"share-outline"}
              setActive={listing.checkedOut}
              onPress={handleModalVisible}
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

import React from "react";
import { StyleSheet } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AccountScreen from "./app/screens/AccountScreen";
import RecommendedScreen from "./app/screens/RecommendedScreen";
import MyBookShelfScreen from "./app/screens/MyBookShelfScreen";
import CommunityLibraryScreen from "./app/screens/CommunityLibraryScreen";

export default function App() {
  return <CommunityLibraryScreen />;
}

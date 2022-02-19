import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddBookScreen from "../screens/AddBooksScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen";

const Stack = createStackNavigator();

export default RecommendedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: "modal",
    }}
  >
    <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
    <Stack.Screen name="RecommendedListing" component={BookDetailsScreen} />
  </Stack.Navigator>
);

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyBookShelfScreen from "../screens/MyBookShelfScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen";

const Stack = createStackNavigator();

export default MyBookShelfNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: "modal",
    }}
  >
    <Stack.Screen name="MyBookShelfScreen" component={MyBookShelfScreen} />
    <Stack.Screen name="MyBookListing" component={BookDetailsScreen} />
  </Stack.Navigator>
);

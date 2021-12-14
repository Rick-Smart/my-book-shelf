import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RecommendedScreen from "../screens/RecommendedScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen";

const Stack = createStackNavigator();

export default RecommendedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: "modal",
    }}
  >
    <Stack.Screen name="RecommendedScreen" component={RecommendedScreen} />
    <Stack.Screen name="RecommendedListing" component={BookDetailsScreen} />
  </Stack.Navigator>
);

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CommunityLibraryScreen from "../screens/CommunityLibraryScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen";

const Stack = createStackNavigator();

export default CommunityNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: "modal",
    }}
  >
    <Stack.Screen
      name="CommunityLibraryScreen"
      component={CommunityLibraryScreen}
    />
    <Stack.Screen name="CommunityListing" component={BookDetailsScreen} />
  </Stack.Navigator>
);

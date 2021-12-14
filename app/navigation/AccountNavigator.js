import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import TabNavigator from "./TabNavigator";
import MessagesNavigator from "./MessagesNavigator"

const Stack = createStackNavigator();

export default AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="MyBookShelfScreen" component={TabNavigator} />
    <Stack.Screen name="RecommendedScreen" component={TabNavigator} />
    <Stack.Screen name="CommunityLibraryScreen" component={TabNavigator} />
    <Stack.Screen name="MessagesScreen" component={MessagesNavigator} />
  </Stack.Navigator>
);

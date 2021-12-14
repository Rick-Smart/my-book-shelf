import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";

const Stack = createStackNavigator();

export default AccountNavigator = ({ route }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="AccountScreen" component={AccountScreen} />
    <Stack.Screen name="MyBookShelfScreen" component={TabNavigator} />
    <Stack.Screen name="RecommendedScreen" component={TabNavigator} />
    <Stack.Screen name="CommunityLibraryScreen" component={TabNavigator} />
    <Stack.Screen name="logOut" component={AuthNavigator} />
  </Stack.Navigator>
);

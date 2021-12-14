import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesScreen from "../screens/MessagesScreen";
import MessageDetailsScreen from "../screens/MessageDetailsScreen";

const Stack = createStackNavigator();

export default MessagesNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: "modal",
    }}
  >
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Message" component={MessageDetailsScreen} />
  </Stack.Navigator>
);

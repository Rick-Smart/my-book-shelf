import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CommunityLibraryScreen from "../screens/CommunityLibraryScreen";
import StudentDetailsScreen from "../screens/StudentDetailsScreen";
import RegisterStudentScreen from "../screens/RegisterStudentScreen";

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
    <Stack.Screen name="StudentDetails" component={StudentDetailsScreen} />
    <Stack.Screen name="RegisterStudent" component={RegisterStudentScreen} />
  </Stack.Navigator>
);

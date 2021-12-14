import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import MyBookShelfScreen from "../screens/MyBookShelfScreen";
import RecommendedScreen from "../screens/RecommendedScreen";
import CommunityLibraryScreen from "../screens/CommunityLibraryScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();
export default AccountNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: colors.primary,
      tabBarActiveTintColor: colors.subTitle,
      tabBarInactiveBackgroundColor: colors.grey,
      tabBarInactiveTintColor: colors.light,
    }}
  >
    <Tab.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="MyBookShelfScreen"
      component={MyBookShelfScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="book-multiple"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="RecommendedScreen"
      component={RecommendedScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="book-plus-multiple"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="CommunityLibraryScreen"
      component={CommunityLibraryScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="library-shelves"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

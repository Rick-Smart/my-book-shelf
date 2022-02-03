import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RecommendedNavigator from "./RecommendedNavigator";
import MyBookShelfNavigator from "./MyBookShelfNavigator";

import MyBookShelfScreen from "../screens/MyBookShelfScreen";
import CommunityLibraryScreen from "../screens/CommunityLibraryScreen";

import colors from "../config/colors";
import CommunityNavigator from "./CommunityNavigator";

const Tab = createBottomTabNavigator();
export default TabNavigator = ({ route }) => (
  <Tab.Navigator
    initialRouteName={route.params}
    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: colors.primary,
      tabBarActiveTintColor: colors.subTitle,
      tabBarInactiveBackgroundColor: colors.light,
      tabBarInactiveTintColor: colors.jet,
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor: colors.primary },
    }}
  >
    <Tab.Screen
      name="MyBookShelf"
      component={MyBookShelfNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="book-multiple"
            size={size * 1.5}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Recommended"
      component={RecommendedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="book-plus-multiple"
            size={size * 1.5}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="CommunityLibrary"
      component={CommunityNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="library-shelves"
            size={size * 1.5}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

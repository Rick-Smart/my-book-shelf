import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MyBookShelfScreen from "../screens/MyBookShelfScreen";
import RecommendedScreen from "../screens/RecommendedScreen";
import CommunityLibraryScreen from "../screens/CommunityLibraryScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();
export default TabNavigator = ({ route }) => (
  <Tab.Navigator
    initialRouteName={route.params}
    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: colors.primary,
      tabBarActiveTintColor: colors.subTitle,
      tabBarInactiveBackgroundColor: colors.grey,
      tabBarInactiveTintColor: colors.light,
    }}
  >
    <Tab.Screen
      name="MyBookShelf"
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
      name="Recommended"
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
      name="CommunityLibrary"
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

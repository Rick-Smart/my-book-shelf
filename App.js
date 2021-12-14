import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AccountNavigator from "./app/navigation/AccountNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import TabNavigator from "./app/navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
}

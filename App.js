import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AccountNavigator from "./app/navigation/AccountNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
}

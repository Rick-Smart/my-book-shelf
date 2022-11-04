import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";

import AccountNavigator from "./app/navigation/AccountNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

import configureStore from "./app/store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    if (!userData) return;

    setUser(userData);
  };

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AuthNavigator /> : <AccountNavigator />}
      </NavigationContainer>
    </Provider>
  );
}

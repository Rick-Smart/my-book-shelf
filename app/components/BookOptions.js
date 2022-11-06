import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppIcon from "./AppIcon";

import colors from "../config/colors";

export default function BookOptions({ name, onPress, setActive }) {
  const [activated, setActivated] = useState(setActive);

  function handleVisible() {
    if (setActive) return;
    setActivated(true);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleVisible();
        onPress();
      }}
    >
      {activated ? (
        <AppIcon
          name={name}
          iconColor={colors.subTitle}
          backgroundColor={colors.primary}
        />
      ) : (
        <AppIcon
          name={name}
          iconColor={colors.light}
          backgroundColor={colors.grey}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
  },
});

import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppIcon from "./AppIcon";

import colors from "../config/colors";

export default function BookOptions({ name, data, onPress, setActive }) {
  const [activated, setActivated] = useState(setActive);

  const handleVisible = () => {
    if (activated == true) return;
    setActivated(!activated);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(data)}
      onPressIn={handleVisible}
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

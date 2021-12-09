import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppIcon from "./AppIcon";

import colors from "../config/colors";

export default function BookOptions({ name, data, onPress }) {
  const [active, setActive] = useState(false);

  const handleVisible = () => {
    setActive(!active);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(data)}
      onPressIn={handleVisible}
    >
      {active ? (
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

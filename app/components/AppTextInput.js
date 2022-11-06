import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.container, { width: width }]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )}
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          style={(defaultStyles.text, { flex: 1 })}
          clearTextOnFocus
          {...otherProps}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
});

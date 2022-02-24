import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppIcon from "../components/AppIcon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import UserHeader from "../components/UserHeader";

import colors from "../config/colors";
import menuItems from "../config/menuItems";

export default function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <UserHeader />
      </View>
      <View style={styles.menuContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() =>
                navigation.navigate(item.targetScreen, item.tabName)
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.logoutContainer}>
        <ListItem
          title="Log Out"
          onPress={() => console.log("log out")}
          IconComponent={
            <AppIcon name="logout" backgroundColor={colors.subTitle} />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
  logoutContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  menuContainer: {
    paddingTop: 10,
  },
});

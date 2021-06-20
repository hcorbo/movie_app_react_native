import React, { useContext } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { ThemeContext } from "../contexs/ThemeContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Constant from "expo-constants";

const Settings = () => {
  const { isLightTheme, setIsLightTheme, themeStyles } =
    useContext(ThemeContext);

  return (
    <View style={[styles.container, themeStyles]}>
      <View style={styles.header}>
        <Text style={[styles.title, themeStyles]}>Settings</Text>
      </View>
      <View style={styles.settingsItem}>
        <View style={styles.settingsItem2}>
          <MaterialCommunityIcons
            name={isLightTheme ? "weather-sunny" : "weather-night"}
            size={24}
            color={themeStyles.color}
          />
          <Text style={[styles.text, themeStyles]}>Dark Mode</Text>
        </View>
        <Switch
          value={isLightTheme}
          onValueChange={() => {
            isLightTheme ? setIsLightTheme(false) : setIsLightTheme(true);
          }}
          trackColor={{ false: "#f4f3f4", true: "#999" }}
          thumbColor={isLightTheme ? "#ee0000" : "#ee0000"}
        />
      </View>
      <View style={styles.settingsItem}>
        <View style={styles.settingsItem2}>
          <MaterialCommunityIcons
            name={"account"}
            size={24}
            color={themeStyles.color}
          />
          <Text style={[styles.text, themeStyles]}>Author</Text>
        </View>
        <Text style={[styles.text, themeStyles]}>Harun Corbo</Text>
      </View>
      <View style={styles.settingsItem}>
        <View style={styles.settingsItem2}>
          <MaterialCommunityIcons
            name={"information-outline"}
            size={24}
            color={themeStyles.color}
          />
          <Text style={[styles.text, themeStyles]}>Version 1.0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constant.statusBarHeight,
    paddingVertical: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
      fontSize: 18,
      marginLeft: 20
  },
  settingsItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  settingsItem2: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Settings;

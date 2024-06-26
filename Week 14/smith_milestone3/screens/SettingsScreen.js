import { View, Text, StyleSheet, Switch } from "react-native";
import { useContext } from "react";
import { SettingsContext } from "../store/context/settings-context";
import Colors from "../constants/colors";

// NOTE: This page was an after thought considering
// How many results had incomplete data.
// The home page will still disregard settings, this is
// on purpose.

const SettingsScreen = () => {
  const { settings, saveSettings } = useContext(SettingsContext);

  const toggleSwitch = (settingName) => {
    saveSettings({
      ...settings,
      [settingName]: !settings[settingName],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Show Plants with Images Only</Text>
      <Switch
        onValueChange={() => toggleSwitch("showImagesOnly")}
        value={settings.showImagesOnly}
        thumbColor={
          settings.showImagesOnly ? Colors.accent500 : Colors.primary800
        }
        trackColor={{
          false: Colors.accent900,
          true: Colors.primary800,
        }}
      />
      <Text style={styles.text}>Show Plants with Common Names Only</Text>
      <Switch
        onValueChange={() => toggleSwitch("showCommonNamesOnly")}
        value={settings.showCommonNamesOnly}
        thumbColor={
          settings.showCommonNamesOnly ? Colors.accent500 : Colors.primary800
        }
        trackColor={{
          false: Colors.accent900,
          true: Colors.primary800,
        }}
      />
    </View>
  );
};

// Exports screen component for use
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "black",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    // textAlign: "center",
    fontFamily: "newsreader",
    color: Colors.primary300,
  },
});

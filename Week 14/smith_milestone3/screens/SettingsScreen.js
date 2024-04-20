import { View, Text, StyleSheet, Switch } from "react-native";
import { useContext } from "react";
import { SettingsContext } from "../store/context/settings-context";
import Colors from "../constants/colors";

// NOTE: This page was an after thought considering
// How many results had incomplete data.
// TODO: Ensure settings take effect for every screen.
// Unless its for a certain screen.

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
      <Text>Show Plants with Images Only</Text>
      <Switch
        onValueChange={() => toggleSwitch("showImagesOnly")}
        value={settings.showImagesOnly}
      />
      <Text>Show Plants with Common Names Only</Text>
      <Switch
        onValueChange={() => toggleSwitch("showCommonNamesOnly")}
        value={settings.showCommonNamesOnly}
      />
      {/* TODO: Add more switches for other settings */}
    </View>
  );
};

// Exports screen component for use
export default SettingsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "newsreader",
    color: Colors.primary300,
    opacity: 0.6,
  },
});

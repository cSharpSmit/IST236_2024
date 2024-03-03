import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";

// ^^ Imports components for use ^^ \\

// This is the root component of the app, responsible for setting up fonts, managing screen navigation,
// And rendering the current screen as well as other functions
export default function App() {
  // Set up our custom fonts
  const [fontsLoaded, fontError] = useFonts({
    hotel: require("./assets/fonts/TheHotelio.ttf"),
  });

  // Hide splash screen once fonts are ready or if there's an error loading them
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  // Dynamically sets the displayed screen based on the currentScreen state
  let screen = <HomeScreen />;

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});

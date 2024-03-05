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
  // Custom fonts setup
  const [fontsLoaded, fontError] = useFonts({
    cabin: require("./assets/fonts/Cabin-Regular.ttf"),
    cabinMedium: require("./assets/fonts/Cabin-Medium.ttf"),
    cabinBold: require("./assets/fonts/Cabin-Medium.ttf"),
  });

  // Hide splash screen once fonts are ready or if there's an error loading them
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  // Render HomeScreen or null based on font loading status
  let screen = <HomeScreen />;

  if (!fontsLoaded && !fontError) {
    return null;  // Render nothing while fonts are loading
  } else {
    return (
      // App container with StatusBar and SafeAreaProvider
      <>
        <StatusBar style="light" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

// StyleSheet for the app container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

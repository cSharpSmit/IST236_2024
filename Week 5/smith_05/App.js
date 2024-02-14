import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
// ^^ Imports components for use ^^ \\

// This is the root component of the app, responsible for setting up fonts, managing screen navigation, 
// And rendering the current screen
// It uses a state variable to track the current screen and functions to handle screen transitions
export default function App() {
  // Set up our custom fonts
  const [fontsLoaded] = useFonts({
    "pirata": require("./assets/fonts/PirataOne-Regular.ttf")
  })

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  // Function to switch to the menu screen
  function menuScreenHandler(){
    setCurrentScreen("menu");
  }

  // Function to return to the home screen
  function homeScreenHandler(){
    setCurrentScreen("home");
  }

  // Logic to determine which screen component to display based on the current screen state \\
  let screen = <HomeScreen onNext={menuScreenHandler} />;

  if (currentScreen === "menu"){
    screen = <MenuScreen onNext={homeScreenHandler} />;
  }

  // Render the current screen within a SafeAreaProvider for layout safety with a StatusBar
  return (
    <>
    <StatusBar style='light' />
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

// Style sheet for the main app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

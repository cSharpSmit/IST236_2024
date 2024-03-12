import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import VacationLocationsOverviewScreen from "./screens/VacationLocationsOverviewScreen";
import Colors from "./constants/colors.js";

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Load custom fonts with `useFonts` hook
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  // Callback to hide splash screen once fonts are loaded or if there's an error
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Render nothing while waiting for fonts to load and no font loading error
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        {/* Configures status bar appearance */}
        <StatusBar style="light" />
         {/* Container for managing navigation tree  */}
        <NavigationContainer>
          <Stack.Navigator
            // If initialRouteName is not set it defaults to first stack screen
            initialRouteName="HomeScreen" // Sets initial route of the stack navigator
            screenOptions={{  // Global screen options for the navigator
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTintColor: Colors.primary300,
              headerTitleStyle: { fontFamily: "poppins", fontSize: 34 },
              contentStyle: { backgroundColor: Colors.primary800 },
            }}
          >
            <Stack.Screen
              name="HomeScreen" // Defines a screen in the stack
              component={HomeScreen}  // Associates HomeScreen component with this stack screen
              options={{  // Sets options for the screen
                title: "Vacation Locations",
              }}
            />
            <Stack.Screen
              name="VacationLocationsOverviewScreen"  // Defines another screen in the stack
              component={VacationLocationsOverviewScreen} // Associates the component with the screen
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

// Stylesheet for the root app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarkedNewsScreen from "./screens/BookmarkedNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import USNewsScreen from "./screens/USNewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import MMANewsScreen from "./screens/MMANewsScreen";
import Colors from "./constants/colors";
import {
  Entypo,
  MaterialIcons,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import { useCallback } from "react";
import BookmarksContextProvider from "./store/context/bookmarks-context";

// Entry point for the Expo news app, setting up fonts, splash screen, and navigation

// Navigation stacks and styles
const Stack = createNativeStackNavigator(); // Stack navigator for individual screens
const Drawer = createDrawerNavigator(); // Drawer navigator for app sections
const Tabs = createBottomTabNavigator(); // Bottom tab navigator for main categories

// Configures the drawer navigator with custom styles and routes
function DrawerNavigator() {
  return (
    // Navigator settings including header and drawer styles
    // Drawer.Screen components define the navigation structure with icons and labels
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "newsreader",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="ViewNews"
        component={TabsNavigator}
        options={{
          title: "View News",
          drawerLabel: "View News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarkedNewsScreen}
        options={{
          title: "Bookmarked News",
          drawerLabel: "Saved News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Configures the bottom tab navigator with custom styles and routes
function TabsNavigator() {
  return (
    // Navigator settings for tabs including icon and label styles
    // Tabs.Screen components represent each tab with associated screens
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "newsreader",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="USNews"
        component={USNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="flag-usa" size={size} color={color} />
          ),
          tabBarLabel: "US News",
        }}
      />
      <Tabs.Screen
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="world" size={size} color={color} />
          ),
          tabBarLabel: "World News",
        }}
      />
      <Tabs.Screen
        name="MMA News"
        component={MMANewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-mma" size={size} color={color} />
          ),
          tabBarLabel: "MMA News",
        }}
      />
    </Tabs.Navigator>
  );
}

// Main app component which initializes the app's UI
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    newsreader: require("./assets/fonts/Newsreader-VariableFont_opsz,wght.ttf"),
  });

  // Load custom fonts and manage the splash screen's visibility
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  // Main return function includes StatusBar, NavigationContainer, and Stack.Navigator setup
  // The navigation stack is configured with initial routes and screen options
  // Returns null if fonts haven't loaded or an error occurs with the fonts
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <BookmarksContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="DrawerScreen"
              screenOptions={{
                headerTintColor: Colors.primary300,
                headerStyle: { backgroundColor: Colors.primary500 },
                contentStyle: { backgroundColor: "black" },
              }}
            >
              <Stack.Screen
                name="DrawerScreen"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="NewsDetail"
                component={NewsDetailScreen}
                options={{
                  headerBackTitleVisible: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarksContextProvider>
      </>
    );
  }
}

// StyleSheet for root container styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

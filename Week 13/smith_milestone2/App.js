import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarkedPlantsScreen from "./screens/BookmarkedPlantsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchPlantsByImageScreen from "./screens/SearchPlantsByImageScreen";
import SearchPlantsScreen from "./screens/SearchPlantsScreen";
import PlantDetailScreen from "./screens/PlantDetailScreen";
import SearchPlantsByCategoryScreen from "./screens/SearchPlantsByCategoryScreen";
import Colors from "./constants/colors";
import {
  Entypo,
  MaterialCommunityIcons,
  Foundation,
  Feather,
} from "@expo/vector-icons";
import { useCallback } from "react";
import BookmarksContextProvider from "./store/context/bookmarks-context";
import { SettingsContextProvider } from "./store/context/settings-context";
import PlantCategoryDetailScreen from "./screens/PlantCategoryDetailScreen";

// Entry point for the Expo news app, setting up fonts, splash screen, and navigation

// Navigation stacks and styles
const Stack = createNativeStackNavigator(); // Stack navigator for individual screens
const Drawer = createDrawerNavigator(); // Drawer navigator for app sections
const CategoryStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator(); // Bottom tab navigator for main categories

// Configures the drawer navigator with custom styles and routes
function DrawerNavigator() {
  return (
    // Navigator settings including header and drawer styles
    // Drawer.Screen components define the navigation structure with icons and labels
    <Drawer.Navigator
      initialRouteName="Home"
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
        name="ViewPlants"
        component={TabsNavigator}
        options={{
          title: "View Plants",
          drawerLabel: "View Plants",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedPlants"
        component={BookmarkedPlantsScreen}
        options={{
          title: "Bookmarked Plants",
          drawerLabel: "Saved Plants",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          drawerLabel: "Settings",
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function CategoryNavigator() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="SearchPlantsByCategory"
        component={SearchPlantsByCategoryScreen}
        options={{ headerShown: false }}
      />
      <CategoryStack.Screen
        name="PlantCategoryDetail"
        component={PlantCategoryDetailScreen}
        options={{ headerShown: true }}
      />
    </CategoryStack.Navigator>
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
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="greenhouse"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="SearchPlants"
        component={SearchPlantsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="flower" size={size} color={color} />
          ),
          tabBarLabel: "Search Plants",
        }}
      />
      <Tabs.Screen
        name="SearchPlantsByImage"
        component={SearchPlantsByImageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="image-search"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Search Image",
        }}
      />
      <Tabs.Screen
        name="ViewPlantsByCategory"
        component={CategoryNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Foundation name="trees" size={size} color={color} />
          ),
          tabBarLabel: "View By Category",
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
        <SettingsContextProvider>
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
                  name="PlantsDetail"
                  component={PlantDetailScreen}
                  options={{
                    headerBackTitleVisible: false,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </BookmarksContextProvider>
        </SettingsContextProvider>
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

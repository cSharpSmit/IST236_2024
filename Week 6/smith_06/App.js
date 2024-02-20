import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import RecipesScreen from "./screens/RecipesScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
// ^^ Imports components for use ^^ \\

// This is the root component of the app, responsible for setting up fonts, managing screen navigation,
// And rendering the current screen
// It uses a state variable to track the current screen and functions to handle screen transitions
// As well as state variables for the current recipe id as well as current recipes
// Provides functions for adding recipes as well as deleting recipes
export default function App() {
  // Set up our custom fonts
  const [fontsLoaded] = useFonts({
    LailaFont: require("./assets/fonts/Laila-Regular.ttf"),
    LailaLight: require("./assets/fonts/Laila-Light.ttf"),
    LailaMedium: require("./assets/fonts/Laila-Medium.ttf"),
    LailaSemiBold: require("./assets/fonts/Laila-SemiBold.ttf"),
    LailaBold: require("./assets/fonts/Laila-Bold.ttf"),
  });

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  // Set state variable for the id to 3 since we have two stock recipes included
  const [currentID, setCurrentID] = useState(3);
  // Set state variable for the current recipes, includes two stock recipes
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Cheeseburger Recipe",
      text: "1. Ground your beef\n2. Milk cows to get cheese\n3. Add Onion\n4. Add Mustard",
    },
    {
      id: 2,
      title: "Burger Recipe",
      text: "1. Buy ground beef\n2. Add lettuce\n3. Add Onion\n4. Add Mustard",
    },
  ]);

  // Starts the user on home screen
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // Function to switch to the recipes screen
  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  // Function to switch to the add recipes screen
  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  // Function used to add a new recipe, including a user entered title and text
  // as well as an auto incrementing id for the recipe item to have a unique identifier
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }

  // Function used to delete a recipe
  // Uses the recipe id as a unique identifier for safely deleting a recipe
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  // Logic to determine which screen component to display based on the current screen state \\
  let screen = <HomeScreen onNext={recipesScreenHandler} />;

  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen
        onAdd={addRecipeHandler}
        onCancel={recipesScreenHandler}
      />
    );
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  // Render the current screen within a SafeAreaProvider for layout safety with a StatusBar
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

// Style sheet for the main app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});

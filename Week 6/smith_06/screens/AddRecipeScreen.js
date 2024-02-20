import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  ScrollView,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import { useState } from "react";
// ^^ Imports components for use ^^ \\

// AddRecipesScreen function component for displaying the add recipe screen of the app
// It showcases a two text inputs, including their title, text and two nav buttons for
// Saving the user entered recipe and a button to cancel which will redirect back to RecipesScreen
function AddRecipeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  // Set state variable for the recipe title and text
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  // Function used to save the recipe or cancel
  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
    props.onCancel();
  }

  return (
    <View
      // Applies dynamic padding to ensure content respects the safe area of the device screen
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Title container displaying the name "Add New Recipe" using a custom "Title" component */}
      <View style={styles.titleContainer}>
        <Title>Add New Recipe</Title>
      </View>

      {/* Scroll View to hold the title, text inputs and nav buttons (for smaller screen sizes) */}
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <View style={styles.recipeTitleContainer}>
            <TextInput
              placeholder="Enter Recipe Title Here"
              style={styles.recipeTitle}
              onChangeText={setRecipeTitle}
            />
          </View>
          <View style={styles.recipeTextContainer}>
            <TextInput
              placeholder="Enter Recipe Text Here"
              style={styles.recipeText}
              onChangeText={setRecipeText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
            />
          </View>

          {/* Nav buttons used to save or cancel adding a recipe */}
          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addRecipeHandler}>Save</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

// Exports the component for modular use
export default AddRecipeScreen;

// Style sheet for the add recipe screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50,
  },
  scrollViewContainer: {
    flex: 5,
  },
  recipeTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  recipeTitle: {
    color: Colors.accent500,
    fontWeight: "bold",
    fontSize: 30,
  },
  recipeTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
    alignItems: "flex-start",
  },
  recipeText: {
    color: Colors.primary800,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});

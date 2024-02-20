import { View, StyleSheet, Text, Image, Linking, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import RecipesItem from "../components/RecipesItem";
import RecipeView from "../modals/RecipeView";
import { useState } from "react";
// ^^ Imports components for use ^^ \\

// RecipesScreen function component for displaying the recipes screen of the app
// It showcases a list of recipe items, including their title, and two nav buttons for
// Each recipe item viewing a recipe and deleting a recipe
// And provides navigation back to the home screen
// As well as a navigation button to redirect to the add recipe screen
function RecipesScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  // Set state variable to determine if the modal is visible
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // Set state variable for the modal recipe title
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  // Set state variable for the modal recipe text
  const [modalRecipeText, setModalRecipeText] = useState("");

  // Function used to view a recipe
  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }

  // Function used to close the recipe view modal
  function closeRecipeViewHandler() {
    setModalIsVisible(false);
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
      {/* Title container displaying the name "Current Recipes" using a custom "Title" component */}
      <View style={styles.titleContainer}>
        <Title>Current Recipes</Title>
      </View>

      {/* FlatList for holding the recipes */}
      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <RecipesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      {/* Navigation button to open the recipe view modal screen */}
      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />

      {/* Navigation button to go back to the home screen or add new recipe */}
      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add New Recipe</NavButton>
        </View>
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}

// Exports the component for modular use
export default RecipesScreen;

// Style sheet for the recipes screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
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

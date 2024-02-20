import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Modal } from "react-native";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// RecipesView (modal) function component for displaying the recipes screen of the app
// It showcases a recipe item, including its title, text, and a nav button for
// Returning to recipes screen
function RecipeView(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={props.visible} animationType="slide">
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>

        <View style={styles.navButtonContainer}>
          <NavButton onNext={props.onClose}>Return To Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}

// Exports the component for modular use
export default RecipeView;

// Style sheet for the recipe view
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.accent500,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "LailaLight",
    color: Colors.primary300,
  },
  textContainer: {
    flex: 5,
    width: "90%",
    borderWidth: 3,
    borderColor: Colors.primary500,
    padding: 10,
  },
  text: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "LailaFont",
  },
  navButtonContainer: {
    flex: 1,
    marginTop: 10,
  },
});

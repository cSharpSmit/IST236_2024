import { View, Button, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// Defines a functional component "RecipesItem" that takes props (properties) as its parameter
// This component is used to display a recipe item, including its title,
// View button and delete button
// If a view button is pressed it allows a user to view a recipe
// If a delete button is pressed it allows a user to delete a recipe
function RecipesItem(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
      <View style={styles.itemButtonsContainer}>
        <View style={styles.button}>
          <Button color={Colors.primary800} title="View" onPress={props.onView} />
        </View>
        <View style={styles.button}>
          <Button color={Colors.primary800} title="Delete" onPress={props.onDelete} />
        </View>
      </View>
    </View>
  );
}

// Exports the component for modular use
export default RecipesItem;

// Style sheet for the menu items
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.accent300,
  },
  itemTitleContainer: {
    justifyContent: "center",
  },
  itemTitle: {
    fontFamily: "LailaBold",
    fontSize: 20,
    color: Colors.primary300,
    padding: 8,
  },
  itemButtonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 3,
    color: Colors.primary800
  },
});

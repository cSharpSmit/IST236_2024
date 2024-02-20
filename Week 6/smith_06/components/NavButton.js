import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// Defines a functional component "NavButton" that takes props (properties) as its parameter
// This component creates a pressable button, used for navigation purposes
function NavButton(props) {
  return (
    <Pressable
     onPress={props.onNext}
     style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

// Exports the component for modular use
export default NavButton;

// Style sheet for the nav buttons
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 150,
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.primary800,
  },
  pressedItem: {
    opacity: 0.8,
  },
  text: {
    padding: 8,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "LailaBold",
    color: Colors.primary300,
  },
});

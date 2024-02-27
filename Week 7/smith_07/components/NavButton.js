import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// Defines a functional component "NavButton" that takes props (properties) as its parameter
// This component creates a pressable button, used for navigation purposes
function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: Colors.primary800, foreground: true }}
      onPress={props.onPress}
      // style={({ pressed }) => pressed && styles.pressedItem}
      style={styles.buttonContainer}
    >
      {/* <View style={styles.buttonContainer}> */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.children}</Text>
        {/* </View> */}
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
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 10,
    overflow: "hidden",
  },
  // pressedItem: {
  //   opacity: 0.3,
  // },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: Colors.accent300,
    fontFamily: "maliBold"
  },
});

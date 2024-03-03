import { Pressable, View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// Defines a functional component "NavButton" that takes props (properties) as its parameter
// This component creates a pressable button, used for navigation purposes
function NavButton(props) {
  // Gets window dimensions
  const { width, height } = useWindowDimensions();

  return (
    <Pressable
      android_ripple={{ color: Colors.primary800, foreground: true }}
      onPress={props.onPress}
      // style={({ pressed }) => pressed && styles.pressedItem}
      style={styles.buttonContainer}
    >
      {/* <View style={styles.buttonContainer}> */}
      <View style={styles.textContainer}>
        <Text style={[styles.text, { fontSize: width * 0.07 }]}>
          {props.children}
        </Text>
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
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
    overflow: "hidden",
  },
  // pressedItem: {
  //   opacity: 0.5,
  // },
  text: {
    padding: 8,
    // fontSize: 25, Don't need this since we're dynamically setting the font above in return
    fontFamily: "hotel",
    textAlign: "center",
    color: Colors.primary300,
  },
});

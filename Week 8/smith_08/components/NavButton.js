import {
  Pressable,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// Defines a functional component "NavButton" that takes props (properties) as its parameter
// This component creates a pressable button, used for navigation purposes
function NavButton(props) {
  // Gets window dimensions to adjust styles dynamically
  const { width, height } = useWindowDimensions();

  // Render a pressable button with dynamic text size based on screen width
  return (
    <Pressable
      android_ripple={{ color: Colors.primary300o5, foreground: true }}
      onPress={props.onPress}
      style={styles.buttonContainer}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.text, { fontSize: width * 0.07 }]}>
          {props.children}
        </Text>
      </View>
    </Pressable>
  );
}

// Exports the component for modular use
export default NavButton;

// Style sheet for the nav button
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 300,
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
    overflow: "hidden",
  },
  text: {
    padding: 8,
    fontFamily: "cabin",
    textAlign: "center",
    color: Colors.accent300,
  },
});

import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// Defines a simple functional component "Title" that takes props (properties) as its parameter
// This component is designed to display a text title, where the text content is passed as children
// Adjusts size based on screen orientation
function Title(props) {
  const { width, height } = useWindowDimensions();

  // If in portrait mode, base size on screen width
  let size = width * 0.1;
  // If in landscape mode, base size on screen height
  if (width > height) {
    size = height * 0.13;
  }

  // Render text with dynamic font size
  return (
    <Text style={[styles.title, { fontSize: size }]}>{props.children}</Text>
  );
}

// Exports the component for modular use
export default Title;

// Style sheet for the title
const styles = StyleSheet.create({
  title: {
    fontFamily: "cabinBold",
    color: Colors.accent500,
    textAlign: "center",
  },
});

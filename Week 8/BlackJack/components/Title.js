import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

function Title(props) {
  const { width, height } = useWindowDimensions();

  // If in portrait mode, base size on screen width
  let size = width * 0.2;
  // If in landscape mode, base size on screen height
  if (width > height) {
    size = height * 0.13;
  }

  return (
    <Text style={[styles.title, { fontSize: size }]}>{props.children}</Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "poker",
  },
});

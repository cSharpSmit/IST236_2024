import { Text, StyleSheet, useWindowDimensions } from "react-native";

import Colors from "../constants/colors";

function Header(props) {
  const { width, height } = useWindowDimensions();

  // If in portrait mode, base size on screen width
  let size = width * 0.1;
  // If in landscape mode, base size on screen height
  if (width > height) {
    size = height * 0.1;
  }

  return (
    <Text style={[styles.header, { fontSize: size }]}>{props.children}</Text>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontFamily: "pokerGeneral",
    color: Colors.primary500,
    textAlign: "center",
  },
});

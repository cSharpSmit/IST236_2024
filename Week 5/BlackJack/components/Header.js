import { Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

function Header(props) {
  return <Text style={styles.header}>{props.children}</Text>;
}

export default Header;

styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontFamily: "pokerGeneral",
    color: Colors.primary500,
    textAlign: "center",
  },
});

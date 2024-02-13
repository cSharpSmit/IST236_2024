import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
  return (
    <Pressable android_ripple={{ color: "grey", foreground: true, }} onPress={props.onPress} style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.primary500,
    backgroundColor: Colors.accent800,
    borderRadius: 300,
    width: 300,
    margin: 10,
    overflow: "hidden"
  },
  textContainer: {},
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "pirata"
  },
});

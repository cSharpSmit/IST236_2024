import { LinearGradient } from "expo-linear-gradient";
import {
  Pressable,
  View,
  StyleSheet,
  Platform,
  Text,
  ImageBackground,
} from "react-native";
import Colors from "../constants/colors";

// Functional component to display each plant category as a grid tile
function CategoryGridTile(props) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={props.onPress}
      >
        <ImageBackground
          source={{ uri: props.imageUrl }}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <LinearGradient
            colors={[
              Colors.primary800o5,  // Starts with darker blue
              "rgba(68, 83, 88, 0.1)",
              "rgba(68, 83, 88, 0.1)",
              Colors.primary300,  // Middle is a transparent blue
              "rgba(68, 83, 88, 0.1)",
              "rgba(68, 83, 88, 0.1)",
              Colors.primary800o5,  // Ends with darker blue
            ]}
            style={styles.innerContainer}
          >
            <Text style={styles.name}>
              {props.name}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    </View>
  );
}


// Exports the component for use in other parts of the app
export default CategoryGridTile;

// StyleSheet for styling the component
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible", // Hides android ripple overflow on android only
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1, // Ensure it fills the available space
  },
  name: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "newsreader",
    color: Colors.accent200
  },
});

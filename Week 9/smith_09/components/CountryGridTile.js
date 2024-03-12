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

// Defines a functional component to display each country as a grid tile
function CountryGridTile(props) {
  return (
    // Main container for each grid item
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,  // Changes style on press
        ]}
        android_ripple={{ color: Colors.primary300 }} // Android ripple effect color
        onPress={props.onPress} // Handles press events
      >
        {/* Background image for the grid tile */}
        <ImageBackground
          source={{ uri: props.flagUrl }} // Loads image from URL
          resizeMode="cover"              // Ensures the image covers the tile
          style={styles.imageBackground}
        >
          {/* LinearGradient component for a fading effect */}
          <LinearGradient
            colors={[
              Colors.accent300o75,  // Starts with darker blue
              "rgba(68, 83, 88, 0.9)",
              "rgba(68, 83, 88, 0.9)",
              "rgba(68, 83, 88, 0.9)",  // Middle is a transparent blue
              "rgba(68, 83, 88, 0.9)",
              "rgba(68, 83, 88, 0.9)",
              Colors.accent300o75,  // Ends with darker blue
            ]}
            style={styles.innerContainer}
          >
            {/* Displays the country name */}
            <Text style={[styles.name, { color: props.color }]}>
              {props.name}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

// Exports the component for use in other parts of the app
export default CountryGridTile;

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
    fontFamily: "poppins",
  },
});

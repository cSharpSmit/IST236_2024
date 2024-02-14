import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// HomeScreen function component for displaying the home screen of the app
// It includes the restaurant's name, an image, contact info, and a navigation button to view the menu
function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      // Applies dynamic padding to ensure content respects the safe area of the device screen
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Title container displaying the restaurant's name using a custom "Title" component */}
      <View style={styles.titleContainer}>
        <Title>Drunken Jacks</Title>
      </View>

      {/* Image container with a restaurant image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/drunken-jacks.jpg")}
        />
      </View>

      {/* Info container displaying contact information and links
      Includes clickable phone number, address, and website URL */}
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:+18436512044")}
        >
          843-651-2044
        </Text>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://maps.app.goo.gl/EQKJVVZ3uBt7yBZq8")}
        >
          4031 US-17 BUS{"\n"} Murrells Inlet{"\n"} SC 29576
        </Text>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://drunkenjacks.com/")}
        >
          www.drunkenjacks.com
        </Text>
      </View>

      {/* Button container with a "NavButton" component to navigate to the menu screen */}
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Menu</NavButton>
      </View>
    </View>
  );
}

// Exports the component for modular use
export default HomeScreen;

// Style sheet for the home screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    // borderRadius: 300,
    width: 380,
  },
  infoContainer:{
    flex: 3,
    justifyContent: "center"
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    color: Colors.primary500,
    fontFamily: "pirata"
  },
  buttonContainer: {
    flex: 1,
  }
});

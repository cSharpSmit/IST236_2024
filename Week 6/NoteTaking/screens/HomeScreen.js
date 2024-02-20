import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

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
      {/* Title container displaying the name "Thought Vault" using a custom "Title" component */}
      <View style={styles.titleContainer}>
        <Title>Thought Vault</Title>
      </View>

      {/* Image container with a note taking image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/note-taking.jpg")}
        />
      </View>

      {/* Button container with a "NavButton" component to navigate to the notes screen */}
      <View style={styles.navButtonContainer}>
        <NavButton onNext={props.onNext}>Go To Notes</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

// Style sheet for the home screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 55,
    borderColor: Colors.accent300,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    resizeMode: "stretch",
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

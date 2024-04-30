import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { MyGardenContext } from "../store/context/my-garden-context";
import { SettingsContext } from "../store/context/settings-context";
import List from "../components/List/List";
import Colors from "../constants/colors";

function MyGardensPlantsScreen() {
  const { myGardensPlants } = useContext(MyGardenContext);
  const { settings } = useContext(SettingsContext);

  // Filter the garden plants based on current settings
  const filteredGardenPlants = myGardensPlants.filter((plant) => {
    const imageUrl = plant.image_url || plant.imageUrl; // Handle both field names
    const commonName = plant.common_name || plant.commonName; // Handle both field names
    const hasImage = !settings.showImagesOnly || imageUrl;
    const hasCommonName = !settings.showCommonNamesOnly || commonName;

    return hasImage && hasCommonName; // Include if it meets the settings criteria
  });

  if (myGardensPlants.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.messageContainer}>
          <Text style={styles.text}>
            You have no plants in your garden yet...
          </Text>
        </View>
      </View>
    );
  } else if (filteredGardenPlants.length === 0) {
    // If no plants are displayed because of the settings
    return (
      <View style={styles.rootContainer}>
        <View style={styles.messageContainer}>
          <Text style={styles.text}>
            You have plants in your garden, but they are hidden due to your
            settings.
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.rootContainer}>
        <List items={filteredGardenPlants} />
      </View>
    );
  }
}

// Exports screen component for use
export default MyGardensPlantsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "black",
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: "15%"
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "newsreader",
    color: Colors.primary300,
    opacity: 0.6,
  },
});

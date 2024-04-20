import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { SettingsContext } from "../store/context/settings-context";
import List from "../components/List/List";
import Colors from "../constants/colors";

function BookmarkedPlantsScreen() {
  const { bookmarkedPlants } = useContext(BookmarksContext);
  const { settings } = useContext(SettingsContext);

  // Filter the bookmarked plants based on the current settings
  const filteredBookmarkedPlants = bookmarkedPlants.filter((plant) => {
    const imageUrl = plant.image_url || plant.imageUrl; // Handle both field names
    const commonName = plant.common_name || plant.commonName; // Handle both field names
    const hasImage = !settings.showImagesOnly || imageUrl;
    const hasCommonName = !settings.showCommonNamesOnly || commonName;

    return hasImage && hasCommonName; // Include if it meets the settings criteria
  });

  if (bookmarkedPlants.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved plants yet...</Text>
      </View>
    );
  } else if (filteredBookmarkedPlants.length === 0) {
    // If no plants are displayed because of the settings
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          You have bookmarked plants, but they are hidden due to your settings.
        </Text>
      </View>
    );
  } else {
    return <List items={filteredBookmarkedPlants} />; // Display filtered list
  }
}

// Exports screen component for use
export default BookmarkedPlantsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
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

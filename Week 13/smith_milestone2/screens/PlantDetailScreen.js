import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";

/**
 * NewsDetailScreen displays detailed information about a selected news article.
 * It retrieves the article based on the passed `newsId` prop and displays its content,
 * including an image, headline, publication info, and full description.
 *
 * Props:
 * - route: Contains parameters passed to this screen, including `newsId` to identify the selected news article.
 * - navigation: Allows for navigation and setting options on the navigation header.
 *
 * State:
 * - pressed: Tracks the bookmark button's state (bookmarked or not).
 *
 * The screen layout includes an image at the top, followed by a scrollable view containing the news article's details.
 * A bookmark button is dynamically rendered in the navigation header, allowing users to bookmark the article.
 */

function PlantDetailScreen(props) {
  // console.log("Plant Detail: ", props.route.params);

  // Component setup, including state, effects, and layout definitions
  const { bookmarkedPlants, addFavorite, removeFavorite } =
    useContext(BookmarksContext);

  // Gets the entire plant object as a route param (May need to adjust)
  const plant = props.route.params.plant;

  // console.log("Selected Plant: ", props.route.params.plant);

  // Determine if the plant is bookmarked
  const plantIsBookmarked = bookmarkedPlants.some(
    (bookmarkedPlant) => bookmarkedPlant.id === plant.id
  );

  function changeBookmarkStatusHandler() {
    if (plantIsBookmarked) {
      removeFavorite(plant.id);
    } else {
      console.log("Bookmarked Searched Plant: ", props.route.params.plant);
      addFavorite(plant);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: plant.commonName || plant.scientificName, // Show common name if available, else scientific
      headerRight: () => (
        <BookmarkButton
          pressed={plantIsBookmarked}
          onPress={changeBookmarkStatusHandler}
        />
      ),
    });
  }, [props.navigation, plantIsBookmarked, plant]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: plant.imageUrl }} />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{plant.commonName}</Text>
          <Text style={styles.publishInfo}>
            {plant.family} | {plant.genus} | {plant.scientificName}
          </Text>
          <Text style={styles.description}>{plant.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

// Exports screen component for use
export default PlantDetailScreen;

// Styles for the PlantDetailScreen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  scrollContainer: {
    flex: 1,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
    paddingBottom: 145,
  },
  headline: {
    color: Colors.primary300,
    fontSize: 35,
    fontFamily: "newsreader",
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 25,
  },
  publishInfo: {
    color: Colors.primary300,
    fontSize: 15,
    fontFamily: "newsreader",
    paddingBottom: 5,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    paddingTop: 20,
    textAlign: "auto",
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: "newsreader",
    lineHeight: 30,
    paddingBottom: 15,
  },
});

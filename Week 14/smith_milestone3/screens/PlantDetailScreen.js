import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLayoutEffect, useContext } from "react";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";
import AddToGardenButton from "../components/AddToGardenButton";
import { MyGardenContext } from "../store/context/my-garden-context";
import Swiper from "react-native-swiper";

function PlantDetailScreen(props) {
  // console.log("Plant Detail: ", props.route.params);

  // Component setup, including state, effects, and layout definitions
  const { bookmarkedPlants, addFavorite, removeFavorite } =
    useContext(BookmarksContext);
  const { myGardensPlants, addToGarden, removeFromGarden } =
    useContext(MyGardenContext);

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

  // Check if the current plant exist in my garden by looking for its ID in the array of my gardens plants
  const plantExistGarden = myGardensPlants.some(
    (myGardensPlant) => myGardensPlant.id === plant.id
  );

  const changeGardenStatusHandler = () => {
    if (plantExistGarden) {
      // When removing, we only need the plant's ID
      removeFromGarden(plant.id);
    } else {
      console.log(
        "Added Plant of the Day to Garden: ",
        props.route.params.plant
      );
      // When adding, pass the full plant object
      addToGarden(plant);
    }
  };

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

  console.log("Plant Detail Images:", plant.images, "ID: ", plant.id);

  return (
    <View style={styles.rootContainer}>
      {/* <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: plant.imageUrl }} />
      </View> */}
      {/* Conditional rendering based on the presence of multiple images */}
      {plant.images && plant.images.length ? (
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          nextButton={<Text style={{ color: Colors.accent800, fontSize: 30 }}>›</Text>}
          prevButton={<Text style={{ color: Colors.accent800, fontSize: 30 }}>‹</Text>}
          dotStyle={{
            backgroundColor: Colors.accent800o7, // Semi-transparent blue for inactive dots
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 4,
          }}
          activeDotStyle={{
            backgroundColor: Colors.accent800, // Bright green for active dot
            width: 12,
            height: 12,
            borderRadius: 6,
            marginHorizontal: 4,
          }}
        >
          {plant.images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
          ))}
        </Swiper>
      ) : (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: plant.imageUrl }} />
        </View>
      )}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{plant.commonName}</Text>
          <Text style={styles.publishInfo}>
            {plant.family} | {plant.genus} | {plant.scientificName}
          </Text>
          <Text style={styles.description}>{plant.description}</Text>
          <View style={styles.gardenButtonContainer}>
            <AddToGardenButton
              pressed={plantExistGarden}
              onPress={changeGardenStatusHandler}
            />
          </View>
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
    width: "100%",
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
  gardenButtonContainer: {
    alignSelf: "center",
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Button,
} from "react-native";
import Colors from "../constants/colors";
import BookmarkButton from "../components/BookmarkButton";
import { BookmarksContext } from "../store/context/bookmarks-context";
import AddToGardenButton from "../components/AddToGardenButton";
import { MyGardenContext } from "../store/context/my-garden-context";

const HomeScreen = (props) => {
  // console.log(props.route);
  const [plantOfTheDay, setPlantOfTheDay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { bookmarkedPlants, addFavorite, removeFavorite } =
    useContext(BookmarksContext);
  const { myGardensPlants, addToGarden, removeFromGarden } =
    useContext(MyGardenContext);

  // Check if the current plant is bookmarked by looking for its ID in the array of bookmarked plants
  const plantIsBookmarked = bookmarkedPlants.some(
    (plant) => plant.id === plantOfTheDay?.id
  );

  const changeBookmarkStatusHandler = () => {
    if (plantIsBookmarked) {
      // When removing, we only need the plant's ID
      removeFavorite(plantOfTheDay.id);
    } else {
      console.log("Bookmarked Plant of the Day: ", plantOfTheDay);
      // When adding, pass the full plant object
      addFavorite(plantOfTheDay);
    }
  };

  // Check if the current plant exist in my garden by looking for its ID in the array of my gardens plants
  const plantExistGarden = myGardensPlants.some(
    (plant) => plant.id === plantOfTheDay?.id
  );

  const changeGardenStatusHandler = () => {
    if (plantExistGarden) {
      // When removing, we only need the plant's ID
      removeFromGarden(plantOfTheDay.id);
    } else {
      console.log("Added Plant of the Day to Garden: ", plantOfTheDay);
      // When adding, pass the full plant object
      addToGarden(plantOfTheDay);
    }
  };

  // Fetch Plant of the Day
  useEffect(() => {
    fetchPlantOfTheDay();
  }, []);

  const fetchPlantOfTheDay = async () => {
    setIsLoading(true);

    const totalPages = 100; // Total pages to select from (The pages go higher but this will do)
    const randomPage = Math.floor(Math.random() * totalPages) + 1; // Generate a random page number

    try {
      // Replace uses Trefle API key
      const response = await fetch(
        `https://trefle.io/api/v1/plants/?token=-OwqHXlJ7XS8liuQNOkDcH4UrCFC_EoSJbT7r6_Xd6E&page=${randomPage}`
      );
      const data = await response.json();

      if (data && data.data && data.data.length > 0) {
        // Selects random plant from the plant list fetched from Trefle API response
        const randomIndex = Math.floor(Math.random() * data.data.length);
        setPlantOfTheDay(data.data[randomIndex]);
      }
    } catch (error) {
      console.error("Error fetching plant data: ", error);
    }
    setIsLoading(false);
  };

  // Dynamically setting the navigation options
  useLayoutEffect(() => {
    props.navigation.setOptions({
      // title: plantOfTheDay?.common_name || "Plant of the Day",
      headerStyle: styles.headerContainer,
      headerTitleAlign: "center",
      headerTitle: "Plant of the Day",
      headerTitleStyle: styles.headerTitle,

      headerRight: () => (
        <BookmarkButton
          pressed={plantIsBookmarked}
          onPress={changeBookmarkStatusHandler}
        />
      ),
    });
  }, [props.navigation, plantIsBookmarked, plantOfTheDay]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!plantOfTheDay) {
    return (
      <View style={styles.centered}>
        <Text>No plant info available.</Text>
      </View>
    );
  }

  const plantDescription = (plantOfTheDay) => {
    let description = `Discover today's featured plant: `;

    if (plantOfTheDay.common_name) {
      description += `${plantOfTheDay.common_name}, `;
    } else {
      description += "a mysterious plant, ";
    }

    description += `scientifically known as ${
      plantOfTheDay.scientific_name || "an unknown species"
    }.`;

    if (plantOfTheDay.family || plantOfTheDay.genus) {
      description += ` This remarkable species belongs to the ${
        plantOfTheDay.family || "unknown"
      } family`;
      if (plantOfTheDay.genus) {
        description += ` and the ${plantOfTheDay.genus} genus.`;
      } else {
        description += ".";
      }
    }

    return description;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.commonNameContainer}>
          <Text style={styles.plantCommonName}>
            {plantOfTheDay.common_name || "Unknown Plant"}
          </Text>
          <View style={styles.gardenButtonContainer}>
            <AddToGardenButton
              pressed={plantExistGarden}
              onPress={changeGardenStatusHandler}
            />
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: plantOfTheDay.image_url }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.description}>
            {plantDescription(plantOfTheDay)}
          </Text>
        </View>
      </ScrollView>
      {/* TODO: Include more details */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: Colors.primary300,
    paddingHorizontal: 5,
    paddingTop: 5,
    // marginBottom: 10,
    // borderRadius: 7,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: Colors.accent900,
  },
  headerTitle: {
    // backgroundColor: Colors.accent200,
    color: Colors.accent200,
    fontSize: 30,
    fontFamily: "newsreader",
    fontWeight: "bold",
    color: Colors.accent200,
  },
  scrollContainer: {
    flex: 1,
    // backgroundColor: Colors.primary300,
  },
  commonNameContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 8,
  },
  plantCommonName: {
    flex: 1,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "newsreader",
    fontWeight: "bold",
    color: Colors.accent200,
    paddingBottom: 5,
    // paddingHorizontal: 11,
  },
  gardenButtonContainer: {
    alignSelf: "center",
  },
  imageContainer: {
    height: 500,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  // image: {
  //   width: "100%",
  //   height: 300,
  //   resizeMode: "cover",
  //   borderRadius: 7,
  //   marginBottom: 8,
  // },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },

  publishInfo: {
    fontSize: 15,
    fontFamily: "newsreader",
    paddingBottom: 5,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  backgroundImage: {
    opacity: 0.1,
  },
});

export default HomeScreen;

// HomeScreen.js
import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Colors from "../constants/colors";
// Import the BookmarksContext and button
import BookmarkButton from "../components/BookmarkButton";
import { BookmarksContext } from "../store/context/bookmarks-context";

const HomeScreen = (props) => {
  // console.log(props.route);
  const [plantOfTheDay, setPlantOfTheDay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { bookmarkedPlants, addFavorite, removeFavorite } = useContext(BookmarksContext);

  // Check if the current plant is bookmarked by looking for its ID in the array of bookmarked plants
  const plantIsBookmarked = bookmarkedPlants.some(plant => plant.id === plantOfTheDay?.id);

  const changeBookmarkStatusHandler = () => {
    if (plantIsBookmarked) {
      // When removing, you only need the plant's ID
      removeFavorite(plantOfTheDay.id);
    } else {
      // When adding, you pass the full plant object
      addFavorite(plantOfTheDay);
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
      title: plantOfTheDay?.common_name || "Plant of the Day",
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
        <Text style={styles.plantCommonName}>
          {plantOfTheDay.common_name || "Unknown Plant"}
        </Text>

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
    // backgroundColor: "black"
    paddingHorizontal: 5,
    paddingTop: 5,
    // marginBottom: 10,
    borderRadius: 7,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  plantCommonName: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "newsreader",
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors.accent200,
    paddingBottom: 5,
    paddingHorizontal: 11,
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

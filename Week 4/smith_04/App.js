import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
//  Importing components that will be utilized, Above   \\

//  Importing Custom components that will be utilized, Below   \\
import MovieItem from "./components/MovieItem";     // Imports the Movie item component for use
import ListHeaderComponent from './components/ListHeaderComponent'; // Imports the List header component for use

// Defines The main App component
export default function App() {
   // State hook for managing the list of movies initial values set with a predefined movies
   // Each movie item includes name, image, and rating properties
   // "require" is used to include movie images from the assets directory
  const [movieItems, setMovieItems] = useState([
    {
      name: "The Place Beyond The Pines",
      image: require("./assets/images/the_place_beyond_the_pines.jpg"),
      rating: "#1",
    },
    {
      name: "Lawless",
      image: require("./assets/images/lawless.jpg"),
      rating: "#2",
    },
    {
      name: "Spirited Away",
      image: require("./assets/images/spirited_away.jpg"),
      rating: "#3",
    },
    {
      name: "Howl's Moving Castle",
      image: require("./assets/images/howls_moving_castle.jpg"),
      rating: "#4",
    },
    {
      name: "No Country For Old Men",
      image: require("./assets/images/no_country_for_old_men.jpg"),
      rating: "#5",
    },
    {
      name: "Gran Torino",
      image: require("./assets/images/gran_torino.jpg"),
      rating: "#6",
    },
    {
      name: "Alien",
      image: require("./assets/images/alien.jpg"),
      rating: "#7",
    },
    {
      name: "Predator",
      image: require("./assets/images/predator.jpg"),
      rating: "#8",
    },
    {
      name: "Snatch",
      image: require("./assets/images/snatch.jpg"),
      rating: "#9",
    },
    {
      name: "Taxi Driver",
      image: require("./assets/images/taxi_driver.jpg"),
      rating: "#10",
    },
  ]);

  // App Component UI \\
  return (
    // React Fragment "<> </>" to group multiple elements without adding extra nodes to the DOM
    <>
    {/* Adjusts the status bar style for better visibility */}
      <StatusBar style="dark" />  
      {/* Safe area view to avoid overlaps with system UI elements */}
      <SafeAreaView style={styles.rootContainer}>
        {/* Container for the app title */}
        <View style={styles.titleContainer}>
          {/* Text for the app title */}
          <Text style={styles.title}>My Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            // Disables overscroll or "scroll bounce" effect for a cleaner UI experience
            overScrollMode="never"
            // Hides the vertical scroll indicator (hides scroll bar)
            showsVerticalScrollIndicator={false}  
            // Data source for the list of movies
            data={movieItems}
            // Defines unique keys for each list item based on movie name
            keyExtractor={(item) => item.name}
            ListHeaderComponent={ListHeaderComponent}  // Rendering a custom component for the list header
            // Function to render each movie item using the MovieItem component
            renderItem={({ item }) => (
              <MovieItem
                name={item.name}
                image={item.image}
                rating={item.rating}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

// Stylesheet object used for all the styles used by the App component
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#d80000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 7,
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: "#2B4254",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#d80000",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
    transform: [{ perspective: 350 }, { rotateX: '15deg' }],
    paddingHorizontal: 7
  },
  listContainer: {
    flex: 8,
    width: "80%",
  },
});

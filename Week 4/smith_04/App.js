import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";

import MovieItem from "./components/MovieItem";

export default function App() {
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

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            data={movieItems}
            keyExtractor={(item) => item.name}
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

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#5bbe71",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "80%",
  },
});

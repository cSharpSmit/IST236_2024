import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import List from "../components/List/List";
import Colors from "../constants/colors";


// Place holder code for the bookmarked news screen
function BookmarkedPlantsScreen() {
  const { bookmarkedPlants } = useContext(BookmarksContext);

  if (bookmarkedPlants.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved plants yet...</Text>
      </View>
    );
  } else {
    // console.log("Bookmarked Plants", bookmarkedPlants);
    return <List items={bookmarkedPlants} />;
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

import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { NEWS } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/colors";

// Place holder code for the bookmarked news screen
function BookmarkedPlantsScreen (){
    const bookmarkedNewsCtx = useContext(BookmarksContext);
    const bookmarkedPlants = NEWS.filter((newsItem) => {
      return bookmarkedNewsCtx.ids.includes(newsItem.id);
    });

    if (bookmarkedPlants.length === 0) {
        return (
          <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no saved plants yet...</Text>
          </View>
        );
      } else {
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
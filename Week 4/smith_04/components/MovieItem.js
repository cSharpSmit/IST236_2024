import React from 'react'; // Imports React to use React.memo to stop the log message
import { View, Text, Image, StyleSheet } from "react-native";
//  Importing components that will be utilized above   \\

// Wraps the MovieItem component with React.memo for performance optimization (Log suggested)
// MovieItem component that will display information about a movie
// This will be reused in order to show more than one movie
const MovieItem = React.memo(function MovieItem(props) {
  // Container for the entire movie item
  return (
    <View style={styles.itemContainer}>
      {/* The container for the movie's title */}
      <View style={styles.titleContainer}>
        {/* The title text of the movie */}
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      {/* The container for the movie's image */}
      <View style={styles.imageContainer}>
        {/* The image of the movie; the source is passed as a prop */}
        <Image style={styles.itemImage} source={props.image} />
      </View>
      {/* The container for the movie's rating */}
      <View style={styles.ratingContainer}>
        {/* The rating text of the movie */}
        <Text style={styles.itemRating}>{props.rating}</Text>
      </View>
    </View>
  );
});

// Exports the MovieItem component as the default export of this file
// It allows MovieItem to be imported and reused in other files within the app
// As said above React.memo will be used for render optimization
export default React.memo(MovieItem);

// Stylesheet object used for all the styles used by the MovieItem component
const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "#2B4254",
    borderWidth: 3,
    borderRadius: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
  },
  itemTitle: {
    fontSize: 30,
    textAlign: "center",
    color: "#d80000",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
    transform: [{ perspective: 350 }, { rotateX: '15deg' }],
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemImage: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
  ratingContainer: {
    backgroundColor: "#2B4254",
    borderWidth: 3,
    borderRadius: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  itemRating: {
    fontSize: 30,
    textAlign: "center",
    color: "#d80000",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
    transform: [{ perspective: 350 }, { rotateX: '15deg' }],
  },
});

import React from 'react'; // Imports React to use React.memo to stop the log message
import { View, Image, StyleSheet } from 'react-native';
//  Importing components that will be utilized above   \\

// Wraps the ListHeaderComponent with React.memo for performance optimization (Log suggested)
// This is the ListHeaderComponent functional component definition
// It doesn't accept any props and returns JSX to render the header for a list
const ListHeaderComponent = React.memo(function ListHeaderComponent() {
  return (
    // This View component acts as a container for the header of the list
    <View style={styles.headerContainer}>
      {/* The Image component displays an image as the logo or title graphic for the list */}
      <Image
        source={require("../assets/images/movie_logo.png")}   // Path to header image in this case movie_logo.png
        style={styles.headerImage}  // Sets the style being used under stylesheet
        resizeMode="contain"  // The resizeMode prop with the value "contain" ensures the image is scaled
                              // to fit within the container while maintaining its aspect ratio
      />
    </View>
  );
});

// Exports the ListHeaderComponent as the default export of this file
// It allows ListHeaderComponent to be imported and reused in other files within the app
// (Akin to how the MovieItem works)
// As said above React.memo will be used for render optimization
export default React.memo(ListHeaderComponent);

// Stylesheet object used for all the styles used by the MovieItem component
const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
  },
  headerImage: {
    width: "100%", 
    height: 200, 
  },
});

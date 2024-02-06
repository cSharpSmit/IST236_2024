// ListHeaderComponent.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function ListHeaderComponent() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/images/movie_logo.png")} // image path to your 
        style={styles.headerImage}
        resizeMode="contain"
      />
    </View>
  );
}

export default ListHeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
  },
  headerImage: {
    width: "100%", 
    height: 200, 
  },
});

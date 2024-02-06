import { View, Text, Image, StyleSheet } from "react-native";

function MovieItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={props.image} />
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.itemRating}>{props.rating}</Text>
      </View>
    </View>
  );
}

export default MovieItem;

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

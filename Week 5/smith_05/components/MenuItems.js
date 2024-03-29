import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// Defines a functional component "MenuItem" that takes props (properties) as its parameter
// This component is used to display a menu item, including its name, image, and price
function MenuItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.image} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
}

// Exports the component for modular use
export default MenuItem;

// Style sheet for the menu items
const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: Colors.primary500,
    borderWidth: 3,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "pirata",
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
  priceContainer: {
    backgroundColor: Colors.primary500,
    borderWidth: 3,
    borderRadius: 5,
  },
  price: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "pirata",
  },
});

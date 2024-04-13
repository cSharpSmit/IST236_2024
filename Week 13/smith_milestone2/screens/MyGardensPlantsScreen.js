import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { MyGardenContext } from "../store/context/my-garden-context";
import List from "../components/List/List";
import Colors from "../constants/colors";

function MyGardensPlantsScreen() {
  const { myGardensPlants } = useContext(MyGardenContext);

  if (myGardensPlants.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          You have no plants in your garden yet...
        </Text>
      </View>
    );
  } else {
    // console.log("My Gardens Plants", myGardensPlants);
    return <List items={myGardensPlants} />;
  }
}

// Exports screen component for use
export default MyGardensPlantsScreen;

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

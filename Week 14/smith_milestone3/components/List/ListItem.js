import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/colors";

// TODO: Update comments and allow component to be
// Used with data from more than just the Trefle API
// If needed.

/**
 * ListItem component represents a single plant in a list view.
 * It displays an image and the common name of the plant.
 * Additional details like the scientific name and a brief description are also shown.
 *
 * Props:
 * - id: Identifier for the plant, used for navigation.
 * - imageUrl: URL for the plant image.
 * - commonName: Common name of the plant.
 * - scientificName: Scientific name of the plant.
 * - description: A brief description of the plant.
 * - listIndex: Index of the plant item in the list, used for alternate background colors.
 * - Etc.
 *
 * When pressed, the component navigates to the detailed view of the plant.
 * The listIndex prop is used to style every other item with a different background.
 */

function ListItem({
  id,
  imageUrl,
  commonName,
  scientificName,
  family,
  familyCommonName,
  genus,
  listIndex,
  fromImageSearch,
  images,
  fromCategorySearch,
}) {
  // Component logic and return statement
  const navigation = useNavigation();

  // Construct the plant object from props
  const plantObject = {
    id,
    imageUrl,
    commonName,
    scientificName,
    family,
    familyCommonName,
    genus,
    description,
    fromImageSearch,
    images,
    fromCategorySearch,
  };

  // Dynamically generate the description
  const description = `Discover about this plant: ${
    commonName || "a mysterious plant"
  }, scientifically known as ${scientificName}. This remarkable species belongs to the ${
    family || "unknown"
  } family${genus ? ` and the ${genus} genus.` : "."}`;

  // Adds the generated description to the plantObject
  plantObject.description = description;

  function selectedPlantHandler() {
    navigation.navigate("PlantsDetail", { plant: plantObject });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: listIndex % 2 === 0 ? Colors.accent900 : Colors.accent900o8 },
      ]}
    >
      <Pressable
        style={styles.button}
        android_ripple={{ color: Colors.accent900o5, foreground: true }}
        onPress={selectedPlantHandler}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.commonName}>{commonName}</Text>
          <Text style={styles.plantInfo}>
            {family} | {genus} | {scientificName}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

// Exports component for use
export default ListItem;

// Styles specific to the ListItem component
const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  commonName: {
    fontSize: 30,
    fontFamily: "newsreader",
    fontWeight: "bold",
    paddingBottom: 5,
    paddingHorizontal: 11,
  },
  plantInfo: {
    fontSize: 15,
    fontFamily: "newsreader",
    paddingBottom: 5,
  },
});

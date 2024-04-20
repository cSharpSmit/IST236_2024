import { FlatList, StyleSheet } from "react-native";
import PlantCategoryTile from "../components/CategoryGridTile";
import PLANT_CATEGORIES from "../data/plant_data";
import Colors from "../constants/colors";

function SearchPlantsByCategoryScreen({ navigation }) {
  const renderPlantCategoryItem = ({ item }) => (
    <PlantCategoryTile
      name={item.name}
      imageUrl={item.imageUrl}
      onPress={() =>
        navigation.navigate("PlantCategoryDetail", {
          categoryId: item.id,
          categoryType: item.type,
          categoryAPIParam: item.apiParam,
        })
      }
    />
  );

  return (
    <FlatList
      data={PLANT_CATEGORIES}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderPlantCategoryItem}
      numColumns={2} // Adjust number of columns here if need later
      style={styles.flatList}
    />
  );
}

// Exports screen component for use
export default SearchPlantsByCategoryScreen;

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: Colors.primary300,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontWeight: "bold",
  },
});

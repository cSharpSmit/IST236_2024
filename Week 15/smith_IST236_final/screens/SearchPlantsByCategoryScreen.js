import { FlatList, StyleSheet } from "react-native";
import PlantCategoryTile from "../components/CategoryGridTile";
import PLANT_CATEGORIES from "../data/plant_data";
import Colors from "../constants/colors";
import { useLayoutEffect } from "react";

function SearchPlantsByCategoryScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: styles.headerContainer,
      headerTitleAlign: "center",
      headerTitle: 'View By Category',
      headerTitleStyle: styles.headerTitle,
    });
  }, [navigation]);

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
      numColumns={1} // Sets the number of columns (1 ended up looking better)
      style={styles.flatList}
    />
  );
}

// Exports screen component for use
export default SearchPlantsByCategoryScreen;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.accent900,
  },
  headerTitle: {
    // backgroundColor: Colors.accent200,
    color: Colors.accent200,
    fontSize: 30,
    fontFamily: "newsreader",
    fontWeight: "bold",
    color: Colors.accent200,
  },
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

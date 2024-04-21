import { View, StyleSheet } from "react-native";
import PlantResults from "../components/PlantResults";
import { useLayoutEffect } from "react";
import Colors from "../constants/colors";

function PlantCategoryDetailScreen({ route, navigation }) {
  const { categoryId, categoryType, categoryAPIParam } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: styles.headerContainer,
      headerTitleAlign: "center",
      headerTitle: categoryType,
      headerTitleStyle: styles.headerTitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <PlantResults apiParam={categoryAPIParam} />
    </View>
  );
}

export default PlantCategoryDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
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
  text: {
    fontSize: 18,
  },
});

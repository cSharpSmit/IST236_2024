import { View, Text, StyleSheet } from 'react-native';
import PlantResults from '../components/PlantResults';

function PlantCategoryDetailScreen({ route, navigation }) {
  const { categoryId, categoryType, categoryAPIParam } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Plant Category ID: {categoryId}</Text>
      <Text style={styles.text}>Plant Category: {categoryType}</Text>
      <PlantResults apiParam={categoryAPIParam} />
    </View>
  );
}

export default PlantCategoryDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});


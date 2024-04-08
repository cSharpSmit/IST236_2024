import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";

/**
 * List component handles the rendering of a list of news articles.
 * It uses FlatList for efficient scrolling and rendering of a potentially long list of items.
 * Each item is rendered using the ListItem component.
 *
 * Props:
 * - items: An array of news article objects to be displayed in the list.
 *
 * The FlatList component is configured to not show the vertical scroll indicator for aesthetic purposes.
 */

function List(props) {
  // renderListItem function and return statement
  function renderListItem(itemData) {
    const plantItemProps = {
      id: itemData.item.id,
      commonName: itemData.item.common_name,
      scientificName: itemData.item.scientific_name,
      family: itemData.item.family,
      familyCommonName: itemData.item.family_common_name,
      genus: itemData.item.genus,
      imageUrl: itemData.item.image_url,
      description: itemData.item.description, // TODO: Pass a description
      listIndex: itemData.index,
    };
    console.log("List Plant ID", itemData.item.id);
    return <ListItem {...plantItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// Exports component for use
export default List;

// Styles for the List component container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});

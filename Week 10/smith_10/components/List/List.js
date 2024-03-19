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
    const newsItemProps = {
      id: itemData.item.id,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      imageUrl: itemData.item.imageUrl,
      description: itemData.item.description,
      listIndex: itemData.index,
    };
    return <ListItem {...newsItemProps} />;
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

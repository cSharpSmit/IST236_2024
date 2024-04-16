import { View, StyleSheet, FlatList } from "react-native";
import { useContext, useEffect } from "react";
import ListItem from "./ListItem";
import { SettingsContext } from "../../store/context/settings-context";

// TODO: Ensure to refine the list to accept and manage
// Plants from the Pl@nt API as well.
// Dynamically change the structure of the render method
// Depending on the screen and API will utilize the custom
// List component.

function List(props) {
  const { settings } = useContext(SettingsContext);

  // console.log("Show Image Only: ", settings.showImagesOnly);

  // Filter items based on settings
  const filteredData = props.items.filter((item) => {
    if (settings.showImagesOnly && !item.image_url) {
      // console.log("Common Name", item.common_name, " Image Url: ", item.image_url);
      return false; // Skip plants without images if the setting is enabled
    }
    if (settings.showCommonNamesOnly && !item.common_name) {
      return false; // Skip plants without common names if the setting is enabled
    }
    // console.log("Common Name", item.common_name, " Image Url: ", item.image_url);
    return true; // Include the plant if none of the above conditions apply
  });

  // Use useEffect to pass the count back to the parent
  useEffect(() => {
    if (props.onCountChange) {
      props.onCountChange(filteredData.length);  // Call the callback with the count of filtered items
    }
  }, [filteredData.length, props.onCountChange]);  // Depend on filteredData.length and props.onCountChange

  // renderListItem function and return statement
  function renderListItem(filteredData) {

    // console.log(filteredData.item.imageUrl);

    const plantItemProps = {
      id: filteredData.item.id,
      commonName: filteredData.item.common_name || filteredData.item.commonName,
      scientificName: filteredData.item.scientific_name || filteredData.item.scientificName,
      family: filteredData.item.family,
      familyCommonName: filteredData.item.family_common_name || filteredData.item.familyCommonName,
      genus: filteredData.item.genus,
      imageUrl: filteredData.item.image_url || filteredData.item.imageUrl,
      description: filteredData.item.description, // TODO: Pass a description
      listIndex: filteredData.index,
    };
    // console.log("List Plant ID", filteredData.item.id);
    return <ListItem {...plantItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
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
    backgroundColor: "black",
  },
  backgroundImage: {
    opacity: 0.1,
  },
});

import { View, StyleSheet, FlatList, Text } from "react-native";
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

  // Variable used to check for the correct image URL field
  function getImageUrl(item) {
    return item.image_url || item.imageUrl; // Use image_url if present, otherwise imageUrl
  }

  // Variable used to check for the correct image URL field
  function getCommonName(item) {
    return item.common_name || item.commonName; // Use image_url if present, otherwise imageUrl
  }

  // Filter items based on settings
  const filteredData = props.items.filter((item) => {
    const imageUrl = getImageUrl(item); // Calls function to get the image URL
    const commonName = getCommonName(item); // Calls function to get the image URL

    if (settings.showImagesOnly && !imageUrl) {
      // console.log("Common Name", item.common_name, " Image Url: ", item.image_url);
      return false; // Skip plants without images if the setting is enabled
    }
    if (settings.showCommonNamesOnly && !commonName) {
      return false; // Skip plants without common names if the setting is enabled
    }
    // console.log("Common Name", item.common_name, " Image Url: ", item.image_url);
    return true; // Include the plant if none of the above conditions apply
  });

  // Use useEffect to pass the count back to the parent
  useEffect(() => {
    if (props.onCountChange) {
      props.onCountChange(filteredData.length); // Call the callback with the count of filtered items
    }
  }, [filteredData.length, props.onCountChange]); // Depend on filteredData.length and props.onCountChange

  // renderListItem function and return statement
  function renderListItem(filteredData) {
    // console.log(filteredData.item.imageUrl);
    // console.log("Filtered Data: ", filteredData);

    const plantItemProps = {
      id: filteredData.item.id,
      commonName: filteredData.item.common_name || filteredData.item.commonName,
      scientificName:
        filteredData.item.scientific_name || filteredData.item.scientificName,
      family: filteredData.item.family,
      familyCommonName:
        filteredData.item.family_common_name ||
        filteredData.item.familyCommonName,
      genus: filteredData.item.genus,
      imageUrl: filteredData.item.image_url || filteredData.item.imageUrl,
      description: filteredData.item.description, // TODO: Pass a description
      fromImageSearch: filteredData.item.fromImageSearch,
      images: filteredData.item.images,
      fromCategorySearch: filteredData.item.fromCategorySearch,
      listIndex: filteredData.index,
    };
    // console.log("List Plant ID", filteredData.item.id);
    return <ListItem {...plantItemProps} />;
  }

  // This section checks if any item has `fromSearchPlants` undefined or false
  const shouldDisplayResultNumber = filteredData.some(
    (item) =>
      item.fromSearchPlants === false || item.fromSearchPlants === undefined
  );

  return (
    <View style={styles.container}>
      {/* Display the result count only if it's not from search plants screen */}
      {shouldDisplayResultNumber && (
        <Text style={styles.resultNumber}>
          {filteredData.length} results found
        </Text>
      )}
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
  resultNumber: {
    fontWeight: "bold",
    color: "white",
  },
  backgroundImage: {
    opacity: 0.1,
  },
});

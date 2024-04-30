import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import { useContext, useEffect } from "react";
import ListItem from "./ListItem";
import { SettingsContext } from "../../store/context/settings-context";
import Colors from "../../constants/colors";

function List(props) {
  const { settings } = useContext(SettingsContext);

  // Function to get the page number from a link
  function extractPageNumber(link) {
    if (link) {
      const matches = link.match(/page=(\d+)/);
      return matches ? parseInt(matches[1], 10) : undefined; // Return the page number or undefined if not found
    }
    return undefined;
  }

  // Variable to hold the current page and last page numbers
  const currentPage = extractPageNumber(props.links?.self) || 1;
  const lastPage = extractPageNumber(props.links?.last) || 1;

  // Condition to check if page information is available
  const pageInfoAvailable = currentPage !== undefined && lastPage !== undefined;

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
      return false; // Skip plants without images if the setting is enabled
    }
    if (settings.showCommonNamesOnly && !commonName) {
      return false; // Skip plants without common names if the setting is enabled
    }
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
    return <ListItem {...plantItemProps} />;
  }

  // This section checks if any item has `fromSearchPlants` undefined or false
  const shouldDisplayResultNumber = filteredData.some(
    (item) =>
      item.fromSearchPlants === false || item.fromSearchPlants === undefined
  );

  const links = props.links;

  // Variable to check for hidden plants due to settings
  const hiddenPlants = props.items.length > 0 && filteredData?.length === 0;

  return (
    <View style={styles.container}>
      {hiddenPlants && (
        <View style={styles.hiddenMessageContainer}>
          <Text style={styles.hiddenMessage}>
            Results found, but they are hidden due to your settings.
          </Text>
        </View>
      )}
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
      {/* Display pagination buttons based on links */}
      {links && (
        <View style={styles.pagination}>
          {/* Disable first button if no first link or currentPage is 1 */}
          <Pressable
            style={[styles.button, currentPage <= 1 && styles.disabledButton]}
            android_ripple={
              currentPage > 1
                ? { color: Colors.accent900o5, foreground: true }
                : null
            }
            onPress={
              currentPage > 1 ? () => props.onPageChange(links.first) : null
            }
          >
            <Text
              style={[
                styles.buttonText,
                currentPage <= 1 && styles.disabledButton,
              ]}
            >
              First
            </Text>
          </Pressable>
          {/* Disable prev button if no prev link*/}
          <Pressable
            style={[styles.button, !links.prev && styles.disabledButton]}
            android_ripple={
              links.prev
                ? { color: Colors.accent900o5, foreground: true }
                : null
            }
            onPress={links.prev ? () => props.onPageChange(links.prev) : null}
          >
            <View style={styles.buttonTextContainer}>
              <Text
                style={[
                  styles.buttonText,
                  !links.prev && styles.disabledButton,
                ]}
              >
                Prev
              </Text>
            </View>
          </Pressable>

          {/* Show page information if valid */}
          {pageInfoAvailable && (
            <Text style={styles.pageInfo}>
              Page {currentPage} of {lastPage}
            </Text>
          )}

          <Pressable
            style={[styles.button, !links.next && styles.disabledButton]}
            android_ripple={
              links.next
                ? { color: Colors.accent900o5, foreground: true }
                : null
            }
            onPress={links.next ? () => props.onPageChange(links.next) : null}
          >
            <View style={styles.buttonTextContainer}>
              <Text
                style={[
                  styles.buttonText,
                  !links.next && styles.disabledButton,
                ]}
              >
                Next
              </Text>
            </View>
          </Pressable>

          <Pressable
            style={[
              styles.button,
              links.last && currentPage >= lastPage && styles.disabledButton,
            ]}
            android_ripple={
              links.last && currentPage < lastPage
                ? { color: Colors.accent900o5, foreground: true }
                : null
            }
            onPress={
              links.last && currentPage < lastPage
                ? () => props.onPageChange(links.last)
                : null
            }
          >
            <Text
              style={[
                styles.buttonText,
                links.last && currentPage >= lastPage && styles.disabledButton,
              ]}
            >
              Last
            </Text>
          </Pressable>
        </View>
      )}
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
    // paddingBottom: 0,
    backgroundColor: "black",
    borderRadius: 30,
  },
  hiddenMessageContainer: {
    flex: 8,
    // backgroundColor: "blue",
    justifyContent: "center"
  },
  hiddenMessage: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "newsreader",
    color: Colors.primary300,
    opacity: 0.6,
  },
  resultNumber: {
    fontWeight: "bold",
    color: "white",
  },
  backgroundImage: {
    opacity: 0.1,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingBottom: 0,
  },
  pageInfo: {
    color: Colors.primary800,
    fontSize: 16,
    alignSelf: "center",
  },
  // pageButton: {
  //   color: "blue",
  //   padding: 10,
  //   textAlign: "center",
  // },
  disabledButton: {
    // color: "black",
    // borderColor: "black",
    // backgroundColor: "black",
    opacity: 0.6,
  },
  button: {
    justifyContent: "center",
    // alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.accent900,
    backgroundColor: Colors.primary500,
    borderRadius: 30,
    // width: "100%",
    // height: 60,
    // alignSelf: "center",
    // margin: 10,
    overflow: "hidden",
  },
  buttonTextContainer: {},
  buttonText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    color: Colors.accent800,
    fontFamily: "newsreader",
  },
});

import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { VACATIONLOCATIONS, COUNTRIES } from "../data/dummy-data";
import VacationLocationItem from "../components/VacationLocationItem";

// Component displaying an overview of vacation locations for a selected country
function VacationLocationsOverviewScreen(props) {
  // Retrieve countryId passed via navigation
  const countryId = props.route.params.countryId;

  // Set navigation title to the selected country's name
  useLayoutEffect(() => {
    const country = COUNTRIES.find((country) => country.id === countryId);
    props.navigation.setOptions({ title: country ? country.name : null });  // Fallback title if country not found
  }, [countryId, props.navigation]);

  // Filter vacation locations that match the selected country's ID
  const displayedVacationLocations = VACATIONLOCATIONS.filter((vacationLocationItem) => {
    return vacationLocationItem.countryId === countryId;
  });

  // Function to render each vacation location item
  function renderVacationLocationItem(itemData) {
    // Props for the VacationLocationItem component
    const vacationLocationItemProps = {
      name: itemData.item.name,
      imageUrl: itemData.item.imageUrl,
      avgCost: itemData.item.avgCost,
      foundedYear: itemData.item.foundedYear,
      rating: itemData.item.rating,
      listIndex: itemData.index,
      description: itemData.item.description
    };
    // Render VacationLocationItem with passed props
    return <VacationLocationItem {...vacationLocationItemProps} />;
  }

  // Render the screen with a list of vacation locations
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedVacationLocations} // Data source for the list
        keyExtractor={(item) => item.id}  // Unique key for each list item
        renderItem={renderVacationLocationItem} // Function to render each item
      />
    </View>
  );
}

// Export the component
export default VacationLocationsOverviewScreen;

// StyleSheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

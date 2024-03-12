import { View, Text, FlatList } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";

// Functional component for the home screen of the app
function HomeScreen(props) {
  // Function to render each country as a grid tile
  function renderCountryItem(itemData) {
    // Handler for press events on a country grid tile
    function pressHandler() {
      // Navigates to the VacationLocationsOverviewScreen, passing the selected country's ID
      props.navigation.navigate("VacationLocationsOverviewScreen", {
        countryId: itemData.item.id,
      });
    }

    // Returns the CountryGridTile component populated with country data
    return (
      <CountryGridTile
        name={itemData.item.name} // Country name
        color={itemData.item.color} // Color for the tile (Ended up using it for the text color)
        flagUrl={itemData.item.flagUrl} // URL for the country's flag image (Used this as the background for the country nav buttons)
        onPress={pressHandler}  // Press handler function
      />
    );
  }

  // Render method for the HomeScreen, displaying countries in a 2-column grid
  return (
    <View>
      <FlatList
        data={COUNTRIES}  // Data source for the list of countries
        // Extracting unique key for each list item
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderCountryItem} // Render function for each item
        numColumns={2} // Display the list in two columns
      />
    </View>
  );
}

// Exports the HomeScreen component for use in the app
export default HomeScreen;

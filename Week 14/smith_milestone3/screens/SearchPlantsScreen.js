import { useState, useLayoutEffect } from "react";
import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import List from "../components/List/List";
import Colors from "../constants/colors";

const SearchPlantScreen = (props) => {
  const [query, setQuery] = useState("");
  const [plants, setPlants] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0); // State to store the filtered count
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // Track if a search has been performed
  const [links, setLinks] = useState(null);
  const [meta, setMeta] = useState(null);
  const [currentPage, setCurrentPage] = useState("page=1"); // Store the current page URL

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerStyle: styles.headerContainer,
      headerTitleAlign: "center",
      headerTitle: "Search Plants",
      headerTitleStyle: styles.headerTitle,
    });
  }, [props.navigation]);

  const searchPlants = async (page = "page=1") => {
    if (!query.trim()) return;
    setIsLoading(true);
    setHasSearched(true); // Set that user has initiated a search
    // Ensure currentPage is reset on new search when just using "page" it didnt work
    setCurrentPage("page=1"); 

    try {
      const response = await fetch(
        `https://trefle.io/api/v1/plants/search?${page}&token=-OwqHXlJ7XS8liuQNOkDcH4UrCFC_EoSJbT7r6_Xd6E&q=${query}`
      );
      const data = await response.json();

      if (data.data) {
        setLinks(data.links); // Store the links information
        setMeta(data.meta); // Store the meta information

        // Add the flag to indicate data source
        const plantsWithFlag = data.data?.map((plant) => ({
          ...plant,
          fromSearchPlants: true, // Flag indicating data is from SearchPlantsScreen
        }));

        setPlants(plantsWithFlag);
      } else {
        setPlants([]); // If no data, clear plants
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPageLink) => {
    const page = newPageLink.split("page=")[1]; // Extract the page number
    setCurrentPage(`page=${page}`); // Set the current page in the correct format
    searchPlants(`page=${page}`); // Trigger a search with the correct page
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search plants..."
        value={query}
        onChangeText={setQuery}
      />
      <Pressable
        style={styles.button}
        android_ripple={{ color: Colors.accent900o5, foreground: true }}
        onPress={() => searchPlants(currentPage)}
      >
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>Search</Text>
        </View>
      </Pressable>
      {/* Show search count results */}
      {!isLoading && hasSearched && (
        <Text style={styles.resultCount}>{filteredCount} results found</Text>
      )}

      {/* Conditional rendering based on search results and loading state */}
      {isLoading ? (
        <Text style={styles.centered}>Loading...</Text> // Show loading indicator or text
      ) : hasSearched && plants.length > 0 ? (
        <List
          items={plants}
          onCountChange={setFilteredCount}
          links={links}
          meta={meta}
          onPageChange={handlePageChange}
        /> // Render list of plants if there are results
      ) : hasSearched ? (
        <Text style={styles.centered}>No plants found.</Text> // Show no results message if search was performed
      ) : (
        <Text style={styles.centered}>Enter a query to search for plants.</Text> // Prompt to search if no search has been done
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.primary300,
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
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.accent900,
    backgroundColor: Colors.primary500,
    borderRadius: 30,
    width: "100%",
    height: 60,
    alignSelf: "center",
    // margin: 10,
    overflow: "hidden",
  },
  buttonTextContainer: {},
  buttonText: {
    padding: 8,
    fontSize: 27,
    textAlign: "center",
    color: Colors.accent800,
    fontFamily: "newsreader",
  },
  resultCount: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  centered: {
    flex: 1,
    paddingTop: "50%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
});

export default SearchPlantScreen;

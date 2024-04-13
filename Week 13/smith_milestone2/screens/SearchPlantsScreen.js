import { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import List from "../components/List/List";

const SearchPlantScreen = () => {
  const [query, setQuery] = useState("");
  const [plants, setPlants] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0); // State to store the filtered count
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // Track if a search has been performed

  const searchPlants = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setHasSearched(true); // Set that user has initiated a search

    try {
      const response = await fetch(
        `https://trefle.io/api/v1/plants/search?token=-OwqHXlJ7XS8liuQNOkDcH4UrCFC_EoSJbT7r6_Xd6E&q=${query}`
      );
      const data = await response.json();
      setPlants(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search plants..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={searchPlants} />
      {/* Show search count results */}
      {!isLoading && hasSearched && (
        <Text style={styles.resultCount}>{filteredCount} results found</Text>
      )}

      {/* Could show a loading indicator here */}

      {/* Conditional rendering based on search results and loading state */}
      {isLoading ? (
        <Text style={styles.centered}>Loading...</Text> // Show loading indicator or text
      ) : hasSearched && plants.length > 0 ? (
        <List items={plants} onCountChange={setFilteredCount} /> // Render list of plants if there are results
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
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
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

import { useState, useEffect } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import List from "../components/List/List";

function PlantResults({ apiParam, fromCategorySearch = false }) {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState(null);
  const [meta, setMeta] = useState(null);
  const [currentPage, setCurrentPage] = useState("page=1"); // Store the current page URL

  useEffect(() => {
    fetchPlants();
  }, []);

  async function fetchPlants(page) {
    if (!apiParam) return; // Early exit if apiParam is not set
    setIsLoading(true); // Start loading indicator
    const apiKey = "-OwqHXlJ7XS8liuQNOkDcH4UrCFC_EoSJbT7r6_Xd6E"; // Trefle API key
    const url = `https://trefle.io/api/v1/${apiParam}${page}&token=${apiKey}`; // Construct the API URL

    try {
      const response = await fetch(url); // Make the HTTP request
      const textResponse = await response.text(); // Get the response as text

      if (!response.ok) {
        throw new Error(
          `API call failed with status ${response.status}: ${textResponse}`
        );
      }

      const data = JSON.parse(textResponse); // Parse the JSON response

      setLinks(data.links); // Store the links information
      setMeta(data.meta); // Store the meta information

      const updatedPlants = data.data.map((plant) => ({
        ...plant,
        fromCategorySearch, // Adding the flag to each plant item
      }));
      setPlants(updatedPlants); // Set the updated plants data to state
    } catch (error) {
      console.error("Failed to fetch plants:", error); // Log errors if the request fails
    }

    setIsLoading(false); // Stop loading indicator
  }

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!plants.length) {
    return <Text>No plants found for this category.</Text>;
  }

  const handlePageChange = (newPageLink) => {
    const page = newPageLink.split("page=")[1]; // Extract the page number
    setCurrentPage(`page=${page}`); // Set the current page in the correct format
    fetchPlants(`page=${page}`); // Trigger a search with the correct page
  };

  return (
    <List
      items={plants}
      links={links}
      meta={meta}
      onPageChange={handlePageChange}
    />
  ); // Uses the custom List component
}

export default PlantResults;

const styles = StyleSheet.create({
  plantItem: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontWeight: "bold",
  },
});

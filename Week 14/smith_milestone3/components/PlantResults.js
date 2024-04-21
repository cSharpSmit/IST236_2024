import { useState, useEffect } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import List from "../components/List/List";

function PlantResults({ apiParam, fromCategorySearch = false }) {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPlants();
  }, []);

  async function fetchPlants() {
    if (!apiParam) return; // Early exit if apiParam is not set
    setIsLoading(true); // Start loading indicator
    const apiKey = "-OwqHXlJ7XS8liuQNOkDcH4UrCFC_EoSJbT7r6_Xd6E"; // Trefle API key
    const url = `https://trefle.io/api/v1/${apiParam}token=${apiKey}`; // Construct the API URL

    console.log("Requesting URL:", url); // Log the request URL to debug it
    try {
      const response = await fetch(url); // Make the HTTP request
      const textResponse = await response.text(); // Get the response as text

      console.log("Raw API Response:", textResponse); // Log the raw response for debugging

      if (!response.ok) {
        throw new Error(
          `API call failed with status ${response.status}: ${textResponse}`
        );
      }

      const data = JSON.parse(textResponse); // Parse the JSON response
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

  return <List items={plants} />; // Uses the custom List component
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

import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

function PlantResults({ apiParam }) {
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
    const testURL = `https://trefle.io/api/v1/distributions/ang/plants?token=-OwqHXlJ7XS8liuQNOkDcH4UrCFC_EoSJbT7r6_Xd6E`;

    //https://trefle.io/api/v1/distributions/ang/plants?token=-OwqHXlJ7XS8liuQNOkDcH4UrCFC_EoSJbT7r6_Xd6E

    console.log("Requesting URL:", testURL); // Log the request URL to debug it
    try {
      const response = await fetch(testURL); // Make the HTTP request
      const textResponse = await response.text(); // Get the response as text

      console.log("Raw API Response:", textResponse); // Log the raw response for debugging

      if (!response.ok) {
        throw new Error(
          `API call failed with status ${response.status}: ${textResponse}`
        );
      }

      const data = JSON.parse(textResponse); // Parse the JSON response
      setPlants(data.data); // Set the fetched plants data to state
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

  return (
    <FlatList
      data={plants}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.plantItem}>
          <Image source={{ uri: item.image_url }} style={styles.image} />
          <Text style={styles.text}>
            {item.common_name || item.scientific_name}
          </Text>
        </View>
      )}
    />
  );
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

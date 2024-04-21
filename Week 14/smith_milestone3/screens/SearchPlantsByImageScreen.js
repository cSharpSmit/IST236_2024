import { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, Button, StyleSheet, Alert, Image } from "react-native";
import {
  launchImageLibraryAsync,
  launchCameraAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
  requestCameraPermissionsAsync,
} from "expo-image-picker";
import List from "../components/List/List";
import Colors from "../constants/colors";

// TODO: I could change the project from all to some
// geographic relevance like north-america or add an option
// in settings for using GPS, or all
// NOTE: Apparently many absent results are
// Come from certain request due to incomplete data sets
// Used by the API.

function SearchPlantsByImageScreen(props) {
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [plantInfo, setPlantInfo] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false); // State to track if a search has been made

  useEffect(() => {
    getPermissions();
  }, []);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerStyle: styles.headerContainer,
      headerTitleAlign: "center",
      headerTitle: "Search By Image",
      headerTitleStyle: styles.headerTitle,
      // headerRight: () => (
      //   <Button onPress={() => console.log('Header button pressed!')} title="Info" />
      // )
    });
  }, [props.navigation]);

  async function getPermissions() {
    const { status: libraryStatus } =
      await requestMediaLibraryPermissionsAsync();
    if (libraryStatus !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }

    const { status: cameraStatus } = await requestCameraPermissionsAsync();
    if (cameraStatus !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
    }
  }

  async function pickImage() {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log("Image Selected: ", result);

    if (!result.canceled && result.assets && result.assets.length > 0) {
      // Accessing the first item in the assets array to get the uri
      const uri = result.assets[0].uri;
      setImageUri(uri);
      // console.log("Image Set: ", uri);
    } else {
      console.log("No image selected or image selection was canceled.");
    }
  }

  async function takePhoto() {
    let result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  }

  // console.log("Selected Image URI: ", imageUri);

  async function identifyPlant() {
    if (!imageUri) {
      Alert.alert("No Image", "Please select or capture an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("images", {
      uri: imageUri,
      type: "image/jpeg",
      name: "plant.jpg",
    });
    formData.append("organs", "flower");

    // ^^ TODO: Organs associated to images ^^
    // (must contains one of: leaf, flower, fruit, bark, auto. Could contains: habit, other)
    // [max 5 organs and organs.length must be equal to images.length]

    const apiKey = "2b1092F63PQqCxu002O7Fp8u0"; // API key
    const project = "all"; // Project in Pl@ntNet
    const relatedImagesParam = "&include-related-images=true"; // parameter for returning related images
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://my-api.plantnet.org/v2/identify/${project}?api-key=${apiKey}${relatedImagesParam}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );

      const textResponse = await response.text(); // First gets the response as text
      // console.log("Raw API Response:", textResponse); // Logs the raw response text

      const result = JSON.parse(textResponse); // Parses the JSON response

      if (!response.ok) {
        throw new Error(
          `API Error: ${response.status} - ${
            result.message || "No specific error message."
          }`
        );
      }

      console.log("API Response:", result); // Log the full response from the API
      setPlantInfo(
        result.results.map((item, index) => {
          console.log("Processing Images:", item.images);
          console.log("Processing Species:", item.species);
          return {
            id: `${index}`, // Ensure unique id
            imageUrl: item.images?.[0]?.url.m, // Medium size image
            images: item.images.map((img) => img.url.m), // Map all medium size images
            commonName: item.species.commonNames.join(", "),
            scientificName: item.species.scientificName,
            family: item.species.family?.scientificName || "Unknown family",
            familyAuthorship:
              item.species.family?.scientificNameAuthorship || "",
            genus: item.species.genus?.scientificName || "Unknown genus",
            genusAuthorship: item.species.genus?.scientificNameAuthorship || "",
            fromImageSearch: true, // Flag indicating data origin
          };
        })
      );
    } catch (error) {
      console.error("Error identifying the plant:", error);
      Alert.alert("Error", "Failed to identify the plant. Please try again.");
    }
    setSearchPerformed(true); // Mark that a search has been performed
    setIsLoading(false);
  }

  function clearSearch() {
    setPlantInfo(null); // Clear the plant information
    setSearchPerformed(false); // Reset the search flag
    setImageUri(null);
  }

  return (
    <View style={styles.container}>
      {searchPerformed && (
        <View style={styles.clearButtonContainer}>
          <Button title="X" onPress={clearSearch} />
        </View>
      )}
      {imageUri && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
      )}
      {!searchPerformed && (
        <View style={styles.buttonContainer}>
          <Button title="Pick an Image from Gallery" onPress={pickImage} />
          <Button title="Take a Photo" onPress={takePhoto} />
          <Button
            title="Identify Plant"
            onPress={identifyPlant}
            disabled={isLoading}
          />
        </View>
      )}
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        plantInfo && <List items={plantInfo} />
      )}
    </View>
  );
}

// Exports screen component for use
export default SearchPlantsByImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // padding: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  clearButtonContainer: {
    position: "absolute",
    top: 10, // Adjust the distance from the top
    right: 10, // Position in the top-right corner
  },
  previewContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    paddingBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    paddingTop: 20,
    alignItems: "center",
  },
  resultContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  resultImage: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
  info: {
    marginTop: 5,
    textAlign: "center",
  },
});
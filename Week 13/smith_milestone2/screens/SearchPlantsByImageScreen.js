import { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert, Image } from "react-native";
import {
  launchImageLibraryAsync,
  launchCameraAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
  requestCameraPermissionsAsync,
} from "expo-image-picker";

function SearchPlantsByImageScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [plantInfo, setPlantInfo] = useState(null);

  useEffect(() => {
    getPermissions();
  }, []);

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
    let result = await ImagePicker.launchCameraAsync({
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

    const apiKey = "2b1092F63PQqCxu002O7Fp8u0"; // API key
    const project = "all"; // Project in Pl@ntNet

    try {
      const response = await fetch(
        `https://my-api.plantnet.org/v2/identify/${project}?api-key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );

      const textResponse = await response.text(); // First gets the response as text
      console.log("Raw API Response:", textResponse); // Logs the raw response text

      const result = JSON.parse(textResponse); // Parses the JSON response

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${result.message || 'No specific error message.'}`);
      }

      console.log("API Response:", result); // Log the full response from the API
      setPlantInfo(result);
    } catch (error) {
      console.error("Error identifying the plant:", error);
      Alert.alert(
        "Error",
        "Failed to identify the plant. Please try again."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Pick an Image from Gallery" onPress={pickImage} />
      <Button title="Take a Photo" onPress={takePhoto} />
      {imageUri && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <Button
            title="Identify Plant"
            onPress={identifyPlant}
            isLoading={isLoading}
          />
        </View>
      )}
      {plantInfo && plantInfo.results.length > 0 && (
        <View style={styles.infoContainer}>
          <Text style={styles.title}>
            Top Match: {plantInfo.results[0].species.scientificName}
          </Text>
          <Text>
            Common Names: {plantInfo.results[0].species.commonNames.join(", ")}
          </Text>
          <Text>
            Family: {plantInfo.results[0].species.family.scientificName}
          </Text>
          <Text>Score: {plantInfo.results[0].score.toFixed(2)}</Text>
        </View>
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
    justifyContent: "center",
    padding: 20,
  },
  previewContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  infoContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  info: {
    marginTop: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  // resultItem: {
  //   marginBottom: 10,
  //   padding: 10,
  //   borderWidth: 1,
  //   borderColor: "#ccc",
  //   borderRadius: 5,
  // },
  // commonName: {
  //   fontSize: 18,
  //   color: "#333",
  // },
  // scientificName: {
  //   fontSize: 16,
  //   fontStyle: "italic",
  // },
});

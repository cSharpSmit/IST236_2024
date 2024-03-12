import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

// Functional component for displaying an image and its description in a modal
function ImageViewModal(props) {
  return (
    // Main container for modal content
    <View style={styles.container}>
      {/* Modal component configured to display based on visibility prop */}
      <Modal
        visible={props.isVisible}
        animationType="slide" // Slide animation for modal appearance
        transparent={false} // Non-transparent background
      >
        {/* Container for the modal's content */}
        <View style={styles.modalContainer}>
          {/* Displays the image passed via props */}
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          {/* Displays the description of the image */}
          <Text style={styles.description}>{props.description}</Text>
          {/* Container for the return button */}
          <View style={styles.buttonContainer}>
            {/* Button to close the modal */}
            <Button title="Return to Countries" onPress={props.onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Exports the component for modular use
export default ImageViewModal;

// Styles for the modal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accent500,
  },
  image: {
    flex: 2,
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  description: {
    flex: 1,
    fontFamily: "poppins",
    fontSize: 20,
    paddingHorizontal: 15
  },
  buttonContainer: {
    flex: 1
  }
});

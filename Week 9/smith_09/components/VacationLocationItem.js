import { useState } from "react";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/colors.js";
import ImageViewModal from "../modal/ImageViewModal.js";

// Component displays a single vacation location item with an image and details
function VacationLocationItem(props) {
  // State to control modal visibility
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // Handler to show modal
  function viewImageHandler() {
    setModalIsVisible(true);
  }

  // Handler to hide modal
  function closeImageHandler() {
    setModalIsVisible(false);
  }

  // Component render logic
  return (
    // Container for the item with alternating background color
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      {/* Pressable area to trigger modal */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={viewImageHandler}
      >
         {/* Layout for image and information */}
        <View style={styles.rowContainer}>
        {/* Vacation location image */}
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          {/* Container for text details */}
          <View style={styles.infoContainer}>
            {/* Location name */}
            <Text style={styles.name}>{props.name}</Text>
            {/* Average cost and year founded */}
            <View style={styles.innerRowContainer}>
              <Text style={styles.costs}>Average Cost: {props.avgCost}</Text>
              <Text style={styles.year}>{props.foundedYear}</Text>
            </View>
            {/* Rating display */}
            <Text style={styles.rating}>Rating: {props.rating} / 5</Text>
          </View>
        </View>
      </Pressable>


      {/* Modal component for image view, shown based on state */}
      <ImageViewModal
        isVisible={modalIsVisible}
        imageUrl={props.imageUrl}
        description={props.description}
        onClose={closeImageHandler}
      />
    </View>
  );
}

// Exports the component for modular use
export default VacationLocationItem;

// Styles for the component
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#CCC",
    paddingHorizontal: 5,
    paddingTop: 3,
    marginBottom: 3,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "25%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  infoContainer: {
    width: "75%",
    paddingLeft: 20,
  },
  name: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
  },
  costs: {
    width: "85%",
    fontSize: 14,
  },
  year: {
    fontSize: 14,
    fontWeight: "bold",
  },
  innerRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 80,
  },
  rating: {
    fontSize: 13,
    fontStyle: "italic",
  },
});

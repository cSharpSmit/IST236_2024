import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  Image,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import Item from "./components/item";
import ItemInputModal from "./modals/itemInputModal";

export default function App() {
  // Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [currentID, setCurrentID] = useState(0);

  // Create the modal screen handler functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function addItemHandler(enteredItemText) {
    setShoppingItems((currentShoppingItems) => {
      return [
        ...currentShoppingItems,
        { text: enteredItemText, id: currentID },
      ];
    });
    setCurrentID(currentID + 1);
    endAddItemHandler();
  }

  function deleteItemHandler(id) {
    Alert.alert("Delete Item", "Are you sure you want to delete?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Confirm",
        style: "default",
        onPress: () => {
          setShoppingItems((currentShoppingItems) => {
            return currentShoppingItems.filter((item) => item.id !== id);
          });
        },
      },
    ]);
  }

  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style="light" />

      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView style={styles.rootContainer}>
        {/* Set Title Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Set Add Item Button Container */}
        <View style={styles.buttonContainer}>
          <Pressable
            // Add the android ripple
            android_ripple={{ color: "#b180f0" }}
            //Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // When pressed,open modal screen
            onPress={startAddItemHandler}
          >
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Add New Item</Text>
            </View>
          </Pressable>
        </View>

        {/* Set Items to Get Title Container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Items to Get:</Text>
        </View>

        {/* Set List of Items in Container */}
        <View style={styles.listContainer}>
          <FlatList
            data={shoppingItems}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <Item
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
          />
        </View>

        <ItemInputModal
          onAddItem={addItemHandler}
          onCancel={endAddItemHandler}
          visible={modalIsVisible}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 40,
    color: "#5e08cc",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5e08cc",
  },
  pressedButton: {
    opacity: 0.8,
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  subtitle: {
    fontSize: 30,
    color: "#5e08cc",
  },
  listContainer: {
    flex: 7,
    width: "90%",
    alignItems: "center",
  },
  listText: {
    fontSize: 20,
    color: "black",
  },
});

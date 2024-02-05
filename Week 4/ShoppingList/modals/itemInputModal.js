import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  SafeAreaView,
  Image,
} from "react-native";


function ItemInputModal(props) {
  const [enteredItemText, setEnteredItemText] = useState("");

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    props.onAddItem(enteredItemText);
    setEnteredItemText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/ShoppingCart.png")}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter Item Here"
            onChangeText={itemInputHandler}
            value={enteredItemText}
          />

          <View style={styles.modalButtonContainer}>
            <View style={styles.modalButton}>
              <Button
                title="Add Item"
                color="#b180f0"
                onPress={addItemHandler}
              />
            </View>
            <View style={styles.modalButton}>
              <Button
                title="Cancel"
                color="#f1449b"
                onPress={props.onCancel}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default ItemInputModal;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: "#1e085a",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 40,
    },
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      width: "90%",
      backgroundColor: "#311b6b",
    },
    image: {
      width: 100,
      height: 100,
      margin: 20,
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#e4d0ff",
      backgroundColor: "#e4d0ff",
      color: "#120438",
      borderRadius: 6,
      width: "100%",
      padding: 12,
    },
    modalButtonContainer: {
      flexDirection: "row",
      marginTop: 16,
    },
    modalButton: {
      width: "30%",
      marginHorizontal: 8,
    },
  });

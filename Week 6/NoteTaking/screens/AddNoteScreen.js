import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  ScrollView,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import { useState } from "react";

function AddNoteScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  function addNoteHandler() {
    props.onAdd(noteTitle, noteText);
    props.onCancel();
  }

  return (
    <View
      // Applies dynamic padding to ensure content respects the safe area of the device screen
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Title container displaying the name "Thought Vault" using a custom "Title" component */}
      <View style={styles.titleContainer}>
        <Title>Add New Note</Title>
      </View>

      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <View style={styles.noteTitleContainer}>
            <TextInput
              placeholder="Enter Note Title Here"
              style={styles.noteTitle}
              onChangeText={setNoteTitle}
            />
          </View>
          <View style={styles.noteTextContainer}>
            <TextInput
              placeholder="Enter Note Text Here"
              style={styles.noteText}
              onChangeText={setNoteText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
            />
          </View>

          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addNoteHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddNoteScreen;

// Style sheet for the add note screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50,
  },
  scrollViewContainer: {
    flex: 5,
  },
  noteTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  noteTitle: {
    color: Colors.accent500,
    fontWeight: "bold",
    fontSize: 30,
  },
  noteTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
    alignItems: "flex-start",
  },
  noteText: {
    color: Colors.primary800,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});

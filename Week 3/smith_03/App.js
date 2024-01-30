import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Image,
} from "react-native";
// Above are the components the app will be using

export default function App() {
  // Declare state management variables
  const [userQuestion, setUserQuestion] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);  // Controls modal visibility state
  const [appResponse, setAppResponse] = useState("");          // Configures the apps response state
  // Holds an array of responses that the 8 ball will give
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  // Function used to set the modal screen to visible
  function startMagic8BallShakeHandler() {
    setModalIsVisible(true);  // Sets the modal visibility state to true
  }

  // Used to clear the modal state variables as well as setting
  // its visibility state to false
  function endMagic8BallShakeHandler() {
    setModalIsVisible(false);
    setUserQuestion("");
    setAppResponse("");
  }

  // Function to handle the pressing of the submission button
  function onSubmit() {
    startMagic8BallShakeHandler();   // Calls the function to set modal visibility state to true
    const rndNum = Math.floor(Math.random() * responses.length);  // Creates a random number limited to the length of the responses array
    const rndAnswer = responses[rndNum];  // Assigns the random number as the index position of the responses array state variable
    setAppResponse(rndAnswer);    // Sets the setAppResponse state variable to the random answer (response) that was created
  }
  // Returns or renders the app on the screen for user viewing and interaction
  return (
    <>
      <StatusBar styles="auto" />
      <SafeAreaView style={styles.rootContainer}>
       {/* Configures the title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Magic 8 Ball</Text>
        </View>

        {/* Configures the image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/8BallPhoto.png")}
          />
        </View>

        {/* Configures the enter your question label & its text input */}
        <Text style={styles.inputLabel}>Enter Your Question</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Will I get a good grade on this app?"
          onChangeText={setUserQuestion}
          value={userQuestion}
        ></TextInput>

        {/* Configures the submit button pressable */}
        <View style={styles.submitButtonContainer}>
          <Pressable
            // Add the android ripple
            android_ripple={{ color: "#4958e2" }}
            //Style the button when pressed
            style={styles.submitButton}
            // When pressed,open modal screen
            onPress={onSubmit}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </Pressable>
        </View>

        {/* Configures the modal screen */}
        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.rootContainer}>
            {/* Configures the title on the modal screen */}
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>Answer</Text>
            </View>

            {/* Configures the question header & text label */}
            <View style={styles.questionContainer}>
              <Text style={styles.textLabel}>Question:</Text>
              <Text style={styles.question}>{userQuestion}</Text>
            </View>

            {/* Configures the response header & text label */}
            <View style={styles.responseContainer}>
              <Text style={styles.textLabel}>Response:</Text>
              <Text style={styles.response}>{appResponse}</Text>
            </View>

            {/* Configures the modal button pressable (Cancel Button) */}
            <View style={styles.modalButtonContainer}>
              <Pressable
                // Add the android ripple
                android_ripple={{ color: "#4958e2" }}
                //Style the button when pressed
                style={styles.modalButton}
                // When pressed,open modal screen
                onPress={endMagic8BallShakeHandler}
              >
                <Text style={styles.modalButtonText}>Close</Text>
              </Pressable>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

// Configures the styles for the app
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#7f1eda",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  imageContainer: {
    flex: 4,
    width: "100%",
    marginBottom: 10,
    marginTop: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  inputLabel: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  textInput: {
    backgroundColor: "#be94f5",
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 20,
    color: "#ffffff",
    padding: 5,
    width: "90%",
    marginTop: 20,
    textAlign: "center",
  },
  submitButtonContainer: {
    flex: 1,
    marginTop: 50,
    borderRadius: 6,
    overflow: "hidden",
    alignContent: "stretch",
  },
  submitButton: {
    backgroundColor: "#a336b9",
    borderWidth: 1,
    borderRadius: 6,
  },
  submitButtonText: {
    fontSize: 20,
    color: "#ffffff",
    padding: 10,
    paddingHorizontal: 15,
  },
  subtitleContainer: {
    flex: 1,
  },
  subtitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  questionContainer: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center"
  },
  textLabel: {
    backgroundColor: "#F8F8F8",
    borderWidth: 5,
    borderColor: "#392866",
    borderRadius: 6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#7f1eda",
    paddingTop: 5,
    paddingLeft: 10,
    paddingHorizontal: 10,
    textAlign: "center"
  },
  question: {
    fontSize: 20,
    color: "#ffffff",
    backgroundColor: "#666a96",
    borderWidth: 5,
    borderColor: "#392866",
    borderRadius: 6,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    margin: -5,
    padding: 5,
    paddingTop: 10,
    paddingHorizontal: 15,
    minWidth: 215,
    textAlign: "center"
  },
  responseContainer: {
    flex: 1,
    alignItems: "center",
  },
  response: {
    fontSize: 20,
    color: "#ffffff",
    backgroundColor: "#666a96",
    borderWidth: 5,
    borderColor: "#392866",
    borderRadius: 6,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    margin: -5,
    padding: 5,
    paddingTop: 10,
    paddingHorizontal: 15,
    minWidth: 215,
    textAlign: "center"
  },
  modalButtonContainer: {
    flex: 1,
    borderRadius: 6,
    overflow: "hidden",
    alignContent: "stretch",
  },
  modalButton: {
    backgroundColor: "#392866",
    borderWidth: 1,
    borderRadius: 6,
  },
  modalButtonText: {
    fontSize: 20,
    color: "#ffffff",
    padding: 10,
    paddingHorizontal: 20,
  },
});

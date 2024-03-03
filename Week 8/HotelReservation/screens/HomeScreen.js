import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  ImageBackground,
  Pressable,
  useWindowDimensions,
  Platform,
  Modal,
  Button,
} from "react-native";
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { useState } from "react";
// ^^ Imports components for use ^^ \\

// HomeScreen functional component definition
function HomeScreen() {
  const insets = useSafeAreaInsets();

  // States variables and functions for check in \\
  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    // Platform specific feature since both of the date-time pickers act differently
    if (Platform.OS === "android") {
      hideCheckInPicker(true);
    }
    setCheckIn(currentDate);
  }

  // States variables and functions for check out \\
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    // Platform specific feature since both of the date-time pickers act differently
    if (Platform.OS === "android") {
      hideCheckOutPicker(true);
    }
    setCheckOut(currentDate);
  }

  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8];
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }

  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  const bedCounts = [1, 2, 3, 4];
  const [numBeds, setNumBeds] = useState(0);
  const [showNumBeds, setShowNumBeds] = useState(false);

  function showNumBedsPicker() {
    setShowNumBeds(true);
  }

  function hideNumBedsPicker() {
    setShowNumBeds(false);
  }

  function onChangeNumBeds(index) {
    setNumBeds(index);
  }

  const [results, setResults] = useState("");

  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
    res = res + `Number of Beds:\t\t${bedCounts[numBeds]}\n`;

    setResults(res);
  }

  const { width, height } = useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.1,
  };

  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  return (
    // Background image for the HomeScreen
    <ImageBackground
      source={require("../assets/images/italy.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View
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
        <ScrollView style={styles.scrollContainer}>
          {/* Container for the screen title */}
          <View style={styles.titleContainer}>
            <Title> Riviera Retreat</Title>
          </View>

          {/* Container for row 1 */}
          <View style={styles.rowContainer}>
            {/* Container for date check in */}
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              <Pressable
                android_ripple={{ color: Colors.primary800, foreground: true }}
                onPress={showCheckInPicker}
                style={styles.buttonContainer}
              >
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            {/* Container for date check out */}
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
              <Pressable
                android_ripple={{ color: Colors.primary800, foreground: true }}
                onPress={showCheckOutPicker}
                style={styles.buttonContainer}
              >
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Modals For check in and check out */}
          <View>
            {showCheckIn && Platform.OS === "android" && (
              <DateTimePicker
                testId="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {showCheckIn && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testId="dateTimePickerCheckInIOS"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckIn}
                    />
                    <Button title="Confirm" onPress={hideCheckInPicker} />
                  </View>
                </View>
              </Modal>
            )}

            {showCheckOut && Platform.OS === "android" && (
              <DateTimePicker
                testId="dateTimePickerCheckOutAndroid"
                value={checkOut}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {showCheckOut && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testId="dateTimePickerCheckOutIOS"
                      value={checkOut}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckOut}
                    />
                    <Button title="Confirm" onPress={hideCheckOutPicker} />
                  </View>
                </View>
              </Modal>
            )}
          </View>

          {/* Container for row 2 */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Guests:
            </Text>
            <Pressable
              android_ripple={{ color: Colors.primary800, foreground: true }}
              onPress={showNumGuestsPicker}
              style={styles.buttonContainer}
            >
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {guestCounts[numGuests]}
                </Text>
              </View>
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumGuests}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Guests:
                  </Text>
                  <WheelPicker
                    selectedIndex={numGuests}
                    options={guestCounts}
                    onChange={onChangeNumGuests}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumGuestsPicker} />
                </View>
              </View>
            </Modal>
          </View>

          {/* Container for row 3 */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Beds:
            </Text>
            <Pressable
              android_ripple={{ color: Colors.primary800, foreground: true }}
              onPress={showNumBedsPicker}
              style={styles.buttonContainer}
            >
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {bedCounts[numBeds]}
                </Text>
              </View>
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumBeds}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Beds:
                  </Text>
                  <WheelPicker
                    selectedIndex={numBeds}
                    options={bedCounts}
                    onChange={onChangeNumBeds}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumBedsPicker} />
                </View>
              </View>
            </Modal>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          <View style={styles.resultsContainer}>
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

// Exports the component for modular use
export default HomeScreen;

// Style sheet for the home screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
    // Works if you use alignSelf: "center" otherwise get rid of width, maxWidth, and alignSelf
    width: 3000,
    maxWidth: "100%",
    alignSelf: "center",
  },
  scrollContainer: {
    flex: 1,
    // Works along with under where the comment is in title style
    width: 3000,
    maxWidth: "90%", // If you comment out whats commented change to 95%
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
    marginHorizontal: -15, // Related to the comments in scroll container and title container
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    fontSize: 100,
    color: Colors.primary500,
    fontFamily: "hotel",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    // Interesting effect if you uncomment these button container styles
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: Colors.primary500,
    borderRadius: 300,
    // width: 1000,
    // maxWidth: "70%",
    // marginHorizontal: 10,
    // marginVertical: 10,
    overflow: "hidden",
  },
  results: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "hotel",
    textShadowColor: "black", // Outline color
    textShadowOffset: { width: 2, height: 2 }, // Outline offset
    textShadowRadius: 2, // Outline width
  },
});

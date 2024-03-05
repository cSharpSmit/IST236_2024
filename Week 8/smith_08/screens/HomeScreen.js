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
import { LinearGradient } from "expo-linear-gradient";
// ^^ Imports components for use ^^ \\

// HomeScreen functional component definition
function HomeScreen() {
  // Hook to adjust for screen insets
  const insets = useSafeAreaInsets();

  // State for check-in date and visibility of its picker
  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  // Functions to show/hide the check-in date picker and set the date
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

  // State for check-out date and visibility of its picker
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  // Functions to show/hide the check-out date picker and set the date
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

  // State and functions for selecting number of guests
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
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

  // State and functions for selecting number of sites
  const siteCounts = [1, 2, 3, 4, 5];
  const [numSites, setNumSites] = useState(0);
  const [showNumSites, setShowNumSites] = useState(false);
  function showNumSitesPicker() {
    setShowNumSites(true);
  }
  function hideNumSitesPicker() {
    setShowNumSites(false);
  }
  function onChangeNumSites(index) {
    setNumSites(index);
  }

  // State for storing reservation results
  const [results, setResults] = useState("");

  // Handler for reserve button, compiles reservation details
  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
    res = res + `Number of Sites:\t\t${siteCounts[numSites]}\n`;

    setResults(res);
  }

  // Use window dimensions for responsive font sizing
  const { width, height } = useWindowDimensions();
  const dateLabelFlex = {
    fontSize: width * 0.08,
  };
  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  // Main content view with dynamic padding based on device's safe area
  let content = (
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
        <View style={[styles.titleContainer, { height: height * 0.11 }]}>
          <Title> Camp Lagoon</Title>
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
                  selectedIndicatorStyle={{ backgroundColor: Colors.accent300 }}
                />
                <Pressable
                  android_ripple={{
                    color: Colors.primary300o5,
                    foreground: true,
                  }}
                  onPress={hideNumGuestsPicker}
                  style={[
                    styles.modalButtonContainer,
                    { height: height * 0.045 },
                    { width: width * 0.4 },
                  ]}
                >
                  <Text style={[styles.modalButtonText, dateTextFlex]}>
                    Confirm
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        {/* Container for row 3 */}
        <View style={styles.rowContainer}>
          <Text style={[styles.dateLabel, dateLabelFlex]}>
            Number of Sites:
          </Text>
          <Pressable
            android_ripple={{ color: Colors.primary800, foreground: true }}
            onPress={showNumSitesPicker}
            style={styles.buttonContainer}
          >
            <View style={styles.dateContainer}>
              <Text style={[styles.dateText, dateTextFlex]}>
                {siteCounts[numSites]}
              </Text>
            </View>
          </Pressable>

          <Modal
            animationType="slide"
            transparent={true}
            visible={showNumSites}
            supportedOrientations={["portrait", "landscape"]}
          >
            <View style={styles.centeredModalView}>
              <View style={styles.modalView}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  Enter Number of Sites:
                </Text>
                <WheelPicker
                  selectedIndex={numSites}
                  options={siteCounts}
                  onChange={onChangeNumSites}
                  containerStyle={{ width: 200 }}
                  selectedIndicatorStyle={{ backgroundColor: Colors.accent300 }}
                />
                <Pressable
                  android_ripple={{
                    color: Colors.primary300o5,
                    foreground: true,
                  }}
                  onPress={hideNumSitesPicker}
                  style={[
                    styles.modalButtonContainer,
                    { height: height * 0.045 },
                    { width: width * 0.4 },
                  ]}
                >
                  <Text style={[styles.modalButtonText, dateTextFlex]}>
                    Confirm
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        {/* Container for the reserve nav button */}
        <View style={styles.buttonContainer}>
          <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
        </View>

        {/* Container for the results */}
        <View style={styles.resultsContainer}>
          <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
        </View>
      </ScrollView>
    </View>
  );

  // Determines if styles need to be rendered for landscape viewing
  // Styles slightly change due to screen size
  if (width > height) {
    content = (
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
          <View style={[styles.titleContainer, { height: height * 0.25 }]}>
            <Title> Camp Lagoon</Title>
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
                    selectedIndicatorStyle={{
                      backgroundColor: Colors.accent300,
                    }}
                  />
                  <Pressable
                    android_ripple={{
                      color: Colors.primary300o5,
                      foreground: true,
                    }}
                    onPress={hideNumGuestsPicker}
                    style={[
                      styles.modalButtonContainer,
                      { width: width * 0.4 },
                    ]}
                  >
                    <Text style={[styles.modalButtonText, dateTextFlex]}>
                      Confirm
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          {/* Container for row 3 */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Sites:
            </Text>
            <Pressable
              android_ripple={{ color: Colors.primary800, foreground: true }}
              onPress={showNumSitesPicker}
              style={styles.buttonContainer}
            >
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {siteCounts[numSites]}
                </Text>
              </View>
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumSites}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Sites:
                  </Text>
                  <WheelPicker
                    selectedIndex={numSites}
                    options={siteCounts}
                    onChange={onChangeNumSites}
                    containerStyle={{ width: 200 }}
                    selectedIndicatorStyle={{
                      backgroundColor: Colors.accent300,
                    }}
                  />
                  <Pressable
                    android_ripple={{
                      color: Colors.primary300o5,
                      foreground: true,
                    }}
                    onPress={hideNumSitesPicker}
                    style={[
                      styles.modalButtonContainer,
                      { width: width * 0.4 },
                    ]}
                  >
                    <Text style={[styles.modalButtonText, dateTextFlex]}>
                      Confirm
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          {/* Container for the reserve nav button */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          {/* Container for the results */}
          <View style={styles.resultsContainer}>
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    // Background image for the HomeScreen
    <ImageBackground
      source={require("../assets/images/camp-background.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      {/* Color overlay */}
      <View style={styles.overlay}>{content}</View>
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
    backgroundColor: Colors.primary800o5,
  },
  backgroundImage: {
    // opacity: 0.32,
    width: "100%", // Ensure the image covers the full width
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.primary300o3,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "95%",
  },
  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary300,
    backgroundColor: Colors.primary800,
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    color: Colors.primary500,
    fontFamily: "cabin",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontWeight: "bold",
    padding: 2,
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
  modalButtonContainer: {
    alignItems: "center",
    borderRadius: 300,
    overflow: "hidden",
    backgroundColor: Colors.primary800,
    width: 300,
    justifyContent: "center",
  },
  modalButtonText: {
    color: Colors.accent300,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    borderRadius: 300,
    overflow: "hidden",
  },
  results: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "cabin",
    textShadowColor: "black", // Outline color
    textShadowOffset: { width: 2, height: 2 }, // Outline offset
    textShadowRadius: 2, // Outline width
  },
});

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
// ^^ Imports components for use ^^ \\

// HomeScreen functional component definition
function HomeScreen(props) {
  // Retrieves the current safe area insets to accommodate status bars, etc.
  const insets = useSafeAreaInsets();

  return (
    // Background image for the HomeScreen
    <ImageBackground
      source={require("../assets/images/Bike-Background.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      {/* Main view container with padding applied based on safe area insets */}
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
        {/* Container for the screen title */}
        <View style={styles.titleContainer}>
          <Title> Bike Shop</Title>
        </View>

        {/* Scrollable container for the form elements */}
        <ScrollView style={styles.scrollContainer}>
          {/* Container for the service time selection radio buttons */}
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Service Times:</Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>

          {/* Container for selectable service options */}
          <View style={styles.rowContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxHeader}>Service Options:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  // Iterates over service options, creating a checkbox for each
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetServices.bind(this, item.id)}
                      textStyle={{
                        textDecorationLine: "none",
                        color: Colors.primary500,
                        fontFamily: "mali",
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.primary500}
                      style={{
                        padding: 2,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </View>

          {/* Container for additional options like newsletter and rental membership */}
          <View style={styles.rowContainer}>
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Newsletter</Text>
                <Switch
                  onValueChange={props.onSetNewsletter}
                  value={props.newsletter}
                  thumbColor={
                    props.newsletter ? Colors.primary500 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Rental Membership</Text>
                <Switch
                  onValueChange={props.onSetRentalMembership}
                  value={props.rentalMembership}
                  thumbColor={
                    props.rentalMembership
                      ? Colors.primary500
                      : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
            </View>
          </View>

          {/* Container for the submit button */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Order</NavButton>
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
  },
  backgroundImage: {
    opacity: 0.2,
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    // paddingHorizontal: 30,
    marginHorizontal: 30,
    paddingVertical: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
    fontFamily: "maliMedium",
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 16,
    color: Colors.primary500,
    fontFamily: "mali",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {},
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "maliMedium",
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "mali",
  },
  buttonContainer: {
    alignItems: "center",
  },
});

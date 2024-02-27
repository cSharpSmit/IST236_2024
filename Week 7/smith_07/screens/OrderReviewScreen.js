import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";
// ^^ Imports components for use ^^ \\

// OrderReviewScreen functional component definition
function OrderReviewScreen(props) {
  // Retrieves the current safe area insets to accommodate status bars, etc.
  const insets = useSafeAreaInsets();

  return (
    // The component is wrapped in a LinearGradient, providing a visually appealing background
    <LinearGradient
      colors={[Colors.accent200, Colors.primary500, Colors.accent200]}
      style={styles.rootContainer}
    >
      {/* Main view with padding adjusted for safe area insets */}
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
        {/* Container for the screen's title */}
        <View style={styles.titleContainer}>
          <Title>Order Summery</Title>
        </View>

        {/* Subtitle text informing the user their order details follow */}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Your Order has been placed with your order details below
          </Text>
        </View>

        {/* ScrollView to allow scrolling through the content */}
        <ScrollView>
        {/* Container for the services selected by the user */}
          <View style={styles.servicesContainer}>
            <Text style={styles.service}>Repair Time:</Text>
            <Text style={styles.subService}>{props.repairTime}</Text>
            <Text style={styles.service}>Services:</Text>
            {/* Maps through selected services and displays them */}
            {props.services.map((item) => {
              if (item.value) {
                return (
                  <Text key={item.id} style={styles.subService}>
                    {item.name}
                  </Text>
                );
              }
            })}
            <Text style={styles.service}>Add Ons:</Text>
            {/* Conditionally displays newsletter and rental membership if selected */}
            <Text style={styles.subService}>
              {props.newsletter ? "Newsletter" : ""}
            </Text>
            <Text style={styles.subService}>
              {props.rentalMembership ? "Rental Membership" : ""}
            </Text>
          </View>

          {/* Container for subtotal, sales tax, and total calculation */}
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Subtotal: ${props.price.toFixed(2)}
            </Text>
            <Text style={styles.subTitle}>
              Sales Tax: ${(props.price * 0.06).toFixed(2)}
            </Text>
            <Text style={styles.subTitle}>
              Total: ${(props.price + props.price * 0.06).toFixed(2)}
            </Text>
          </View>

          {/* Button to navigate back to the home screen */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Return Home</NavButton>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

// Exports the component for modular use
export default OrderReviewScreen;

// Style sheet for the order review screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 15,
    marginVertical: 3,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    // paddingHorizontal: 30,
    paddingVertical: 5,
  }, 
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 22,
    // fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent300,
    borderBottomWidth: 2,
    borderStyle: "dotted",
    borderBottomColor: Colors.accent500,
    // paddingRight: 10,
    fontFamily: "maliBold"
  },
  servicesContainer: {
    flex: 3,
  },
  service: {
    fontSize: 20,
    color: Colors.accent300,
    paddingLeft: 20,
    fontFamily: "maliMedium"
  },
  subService: {
    textAlign: "center",
    fontSize: 17,
    // fontWeight: "bold",
    fontFamily: "maliBold"
  },
  buttonContainer: {
    alignItems: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useMemo, useCallback } from "react";
import Colors from "./constants/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
// ^^ Imports components for use ^^ \\

// This is the root component of the app, responsible for setting up fonts, managing screen navigation,
// And rendering the current screen as well as other functions
export default function App() {
  // Set up our custom fonts
  const [fontsLoaded, fontError] = useFonts({
    mali: require("./assets/fonts/Mali-Regular.ttf"),
    maliMedium: require("./assets/fonts/Mali-Medium.ttf"),
    maliBold: require("./assets/fonts/Mali-Bold.ttf"),
  });

  // Hide splash screen once fonts are ready or if there's an error loading them
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // State for tracking the current screen and price
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  // Memoized array of repair time options to prevent unnecessary recalculations
  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    [] // Dependencies array is empty, indicating this memoization does not depend on external states
  );

  // State for tracking selected repair time option
  const [repairTimeId, setRepairTimeId] = useState(0);
  // State for tracking selected services with their details
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  // State for tracking newsletter subscription status
  const [newsletter, setNewsletter] = useState(false);
  // State for tracking rental membership status
  const [rentalMembership, setRentalMembership] = useState(false);

  // Handler for toggling service selection
  function setServicesHandler(id) {
    // Update services state based on selected or deselected service
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  // Handler for toggling newsletter subscription
  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }

  // Handler for toggling rental membership status
  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  // Handler for returning to the home screen and resetting all selections
  function homeScreenHandler() {
    // Resetting the repair time selection to its initial state
    setRepairTimeId(0);

    // Resetting services to their initial state (all services unselected)
    setServices(services.map((service) => ({ ...service, value: false })));

    // Resetting the newsletter subscription to its initial state (unsubscribed)
    setNewsletter(false);

    // Resetting the rental membership to its initial state (not a member)
    setRentalMembership(false);

    // Resets the calculated price to zero and navigates back to the home screen
    setCurrentPrice(0);
    setCurrentScreen("home");
  }

  // Handler for navigating to the order review screen and calculating the total price
  function orderReviewHandler() {
    let price = 0;

    // Adds the price of each selected service to the total
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }

    // Adds a fixed price if the rental membership is selected
    if (rentalMembership) {
      price = price + 100.0;
    }

     // Adds the price based on the selected repair time option
    price = price + repairTimeRadioButtons[repairTimeId].price;

    // Updates the current price state and navigates to the review screen
    setCurrentPrice(price);
    setCurrentScreen("review");
  }

  // Dynamically sets the displayed screen based on the currentScreen state
  let screen = (
    // The default home screen with props passed for state management
    <HomeScreen
      repairTimeId={repairTimeId}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      repairTimeRadioButtons={repairTimeRadioButtons}
      onSetRepairTimeId={setRepairTimeId}
      onSetServices={setServicesHandler}
      onSetNewsletter={setNewsletterHandler}
      onSetRentalMembership={setRentalMembershipHandler}
      onNext={orderReviewHandler}
    />
  );

  // Switches to the order review screen if the currentScreen state is "review"
  if (currentScreen == "review") {
    screen = (
      <OrderReviewScreen
        repairTime={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        price={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }

  // Renders null if fonts are not loaded and no font error has occurred (loading state)
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    // The main component rendering, including status bar and the currently active screen
    return (
      <>
        <StatusBar style="light" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

// Style sheet for the main app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
    // alignItems: "center",
  },
});

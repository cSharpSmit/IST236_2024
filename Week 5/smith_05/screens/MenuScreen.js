import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import MenuItem from "../components/MenuItems";
// ^^ Imports components for use ^^ \\

// MenuScreen function component for displaying the menu screen of the app
// It showcases a list of menu items, including their names, images, and prices,
// And provides navigation back to the home screen
function MenuScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  // State to manage the list of menu items
  // Each item has a name, image, price, and unique id
  const [menuItems, setMenuItems] = useState([
    {
      name: "Scallops & Shrimp",
      image: require("../assets/images/menu-items/scallops-shrimp.jpg"),
      price: "$48.00",
      id: 1,
    },
    {
      name: "Triggerfish & Risotto",
      image: require("../assets/images/menu-items/triggerfish-risotto.jpg"),
      price: "$35.00",
      id: 2,
    },
    {
      name: "Filet, Lobster & Shrimp",
      image: require("../assets/images/menu-items/filet-lobster-shrimp.jpg"),
      price: "$48.00",
      id: 3,
    },
    {
      name: "Shrimp & Grits",
      image: require("../assets/images/menu-items/shrimp-grits.jpg"),
      price: "$35.00",
      id: 4,
    },
    {
      name: "Porterhouse Pork Chop",
      image: require("../assets/images/menu-items/porterhouse-pork-chop.jpg"),
      price: "$35.00",
      id: 5,
    },
  ]);

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
      {/* Title container for the menu screen */}
      <View style={styles.titleContainer}>
        <Title style={styles.title}>Menu</Title>
      </View>

      {/* Container for the list of menu items. Uses "FlatList" for efficient rendering */}
      <View style={styles.listContainer}>
        <FlatList
            data={menuItems}
            keyExtractor={(item) => item.id}
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => {
                return (
                    <MenuItem 
                        name={itemData.item.name}
                        image={itemData.item.image}
                        price={itemData.item.price}
                    />
                );
            }}
        />
      </View>

      {/* Navigation button to go back to the home screen */}
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home</NavButton>
      </View>
    </View>
  );
}

// Exports the component for modular use
export default MenuScreen;

// Style sheet for the menu screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // Check menuitem.js image style note to self
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    // Check menuitem.js image style note to self
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20
  },
});

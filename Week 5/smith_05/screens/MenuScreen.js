import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import MenuItem from "../components/MenuItems";

function MenuScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

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
      <View style={styles.titleContainer}>
        <Title style={styles.title}>Menu</Title>
      </View>

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

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home</NavButton>
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // Check menuitem.js image style
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    // Check menuitem.js image style
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20
  },
});

import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import EventItem from "../components/EventItems";

function EventsScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [eventItems, setEventItems] = useState([
    {
      name: "American Floyd - The Ultimate Pink Floyd Tribute Experience",
      image: require("../assets/images/americanfloyd.jpg"),
      date: "01/13/2024",
      id: 1,
    },
    {
      name: "Bad Fish - A Tribute To Sublime",
      image: require("../assets/images/badfish.jpg"),
      date: "01/14/2024",
      id: 2,
    },
    {
      name: "Tell Me Lies - The Fleetwood Mac Experience",
      image: require("../assets/images/tellmelies.jpg"),
      date: "01/26/2024",
      id: 3,
    },
    {
      name: "Blackberry Smoke: Be Right Here Tour",
      image: require("../assets/images/blackberry.jpg"),
      date: "02/17/2024",
      id: 4,
    },
    {
      name: "Electruc Avenue - The 80's MTV Experience",
      image: require("../assets/images/electric.jpg"),
      date: "02/23/2024",
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
        <Title style={styles.title}>Events</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
            data={eventItems}
            keyExtractor={(item) => item.id}
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => {
                return (
                    <EventItem 
                        name={itemData.item.name}
                        image={itemData.item.image}
                        date={itemData.item.date}
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

export default EventsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // Check eventitem.js image style
    width: 400,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    // Check eventitem.js image style
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20
  },
});

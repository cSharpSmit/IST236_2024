import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/hot_fish_club.jpg")}/>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Hot Fish Club</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://www.hotfishclub.com")}>www.hotfishclub.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:+18433579175")}>(843) 579-9175</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://maps.app.goo.gl/jNPFKzRtsWsqBytp8")}>Open in Google Maps</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#71a8e7",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 2,
    paddingTop: 45,
    width: "100%",
  },
  image: {
    height: 290,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 4,
    borderColor: "#ee8484"
  },
  informationContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 15
  }
});

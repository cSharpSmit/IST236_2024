import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/photo1.png")}/>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Colt Smith</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("mailto:csmit142@hgtc.edu")}>csmit142@hgtc.edu</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:+18005555555")}>(800) 555-5555</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/cSharpSmit")}>Github: cSharpSmit</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#697f99",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 5,
    paddingTop: 45,
    width: "100%",
  },
  image: {
    height: 500,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 4,
    borderColor: "#50a728"
  },
  informationContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "#000000",
    textShadowColor: "#51ff00",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    fontStyle: "italic",
    marginBottom: 15
  }
});

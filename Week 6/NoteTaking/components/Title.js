import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title(props){
    return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 65,
        color: Colors.primary300,
        textShadowColor: Colors.accent500,
        // textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 25,
        fontFamily: "noteFont",
        textAlign: "center"
    }
});
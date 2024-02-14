import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// Defines a simple functional component "Title" that takes props (properties) as its parameter
// This component is designed to display a text title, where the text content is passed as children
function Title(props){
    return <Text style={styles.title}>{props.children}</Text>
}

// Exports the component for modular use
export default Title;

// Style sheet for the title
const styles = StyleSheet.create({
    title:{
        fontSize: 60,
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "pirata"
    }
})
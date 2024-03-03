import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";
// ^^ Imports components for use ^^ \\

// Defines a simple functional component "Title" that takes props (properties) as its parameter
// This component is designed to display a text title, where the text content is passed as children
function Title(props){
    // Gets window dimensions
    const { width, height } = useWindowDimensions();

    // Sets the width of the font size according to the size of the screen dimensions
    return <Text style={[styles.title, {fontSize: width * 0.13}]}>{props.children}</Text>;
}

// Exports the component for modular use
export default Title;

// Style sheet for the title
const styles = StyleSheet.create({
    title:{
        fontFamily: "hotel",
        color: Colors.primary500,
        textAlign: "center",
    },
});
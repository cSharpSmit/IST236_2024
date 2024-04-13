import { Ionicons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from "../constants/colors";

/**
 * AddToGardenButton is a toggleable component that shows a filled icon
 * when an item is added to garden, and an outlined icon otherwise.
 * 
 * Props:
 * - pressed: A boolean indicating whether the garden plant is active (true) or not (false).
 * - onPress: A function that handles the press action on the button.
 * 
 * The color of the icon is determined by the Colors.accent500 value.
 */

function AddToGardenButton(props) {
  // The component returns a Pressable with an Ionicon inside, the icon changes based on the 'pressed' prop
  if (props.pressed) {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bag-check" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bag-check-outline" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}

// Exports component for use
export default AddToGardenButton;

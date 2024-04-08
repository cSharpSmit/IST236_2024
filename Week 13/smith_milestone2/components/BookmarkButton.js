import { Ionicons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from "../constants/colors";

/**
 * BookmarkButton is a toggleable component that shows a filled bookmark icon
 * when an item is bookmarked, and an outlined bookmark icon otherwise.
 * 
 * Props:
 * - pressed: A boolean indicating whether the bookmark is active (true) or not (false).
 * - onPress: A function that handles the press action on the button.
 * 
 * The color of the bookmark icon is determined by the Colors.accent500 value.
 */

function BookmarkButton(props) {
  // The component returns a Pressable with an Ionicon inside, the icon changes based on the 'pressed' prop
  if (props.pressed) {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark-outline" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}

// Exports component for use
export default BookmarkButton;

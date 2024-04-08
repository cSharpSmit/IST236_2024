import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

/**
 * ListItem component represents a single news article in a list view.
 * It displays an image, headline, and publishing information of an article.
 * 
 * Props:
 * - id: Identifier for the news item, used for navigation.
 * - imageUrl: URL for the news item image.
 * - headline: Title text of the news item.
 * - author: Name of the author of the news item.
 * - agency: Publishing agency of the news item.
 * - date: Publication date of the news item.
 * - listIndex: Index of the news item in the list, used for alternate background colors.
 * 
 * When pressed, the component navigates to the detailed view of the news article.
 * The listIndex prop is used to style every other item with a different background.
 */

function ListItem(props) {
  // Component logic and return statement
  const navigation = useNavigation();

    function selectedNewsHandler() {
      navigation.navigate("PlantsDetail", {
        newsId: props.id,
      });
    }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedNewsHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{props.headline.toLocaleString()}</Text>
          <Text style={styles.publishInfo}>
            {props.author} | {props.agency} | {props.date} 
            
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

// Exports component for use
export default ListItem;

// Styles specific to the ListItem component
const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center"
  },
  headline: {
    fontSize: 30,
    fontFamily: "newsreader",
    fontWeight: "bold",
    paddingBottom: 5,
    paddingHorizontal: 11
  },
  publishInfo: {
    fontSize: 15,
    fontFamily: "newsreader",
    paddingBottom: 5
  },
});

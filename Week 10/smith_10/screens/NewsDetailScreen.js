import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useState, useLayoutEffect } from "react";
import { NEWS } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";

/**
 * NewsDetailScreen displays detailed information about a selected news article.
 * It retrieves the article based on the passed `newsId` prop and displays its content,
 * including an image, headline, publication info, and full description.
 *
 * Props:
 * - route: Contains parameters passed to this screen, including `newsId` to identify the selected news article.
 * - navigation: Allows for navigation and setting options on the navigation header.
 *
 * State:
 * - pressed: Tracks the bookmark button's state (bookmarked or not).
 *
 * The screen layout includes an image at the top, followed by a scrollable view containing the news article's details.
 * A bookmark button is dynamically rendered in the navigation header, allowing users to bookmark the article.
 */

function NewsDetailScreen(props) {
  // Component setup, including state, effects, and layout definitions
  const newsId = props.route.params.newsId;
  const selectedNews = NEWS.find((news) => news.id === newsId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedNews.imageUrl }}
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.headline}>
          {selectedNews.headline.toLocaleString()}
        </Text>
        <Text style={styles.publishInfo}>
          {selectedNews.date} | {selectedNews.author} | {" "}
          {selectedNews.agency}
        </Text>
        <Text style={styles.description}>
            {selectedNews.description}
        </Text>
      </View>
      </ScrollView>
    </View>
  );
}

// Exports screen component for use
export default NewsDetailScreen;

// Styles for the NewsDetailScreen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  scrollContainer: {
    flex: 1,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
    paddingBottom: 145
  },
  headline: {
    color: Colors.primary300,
    fontSize: 35,
    fontFamily: "newsreader",
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 25,
  },
  publishInfo: {
    color: Colors.primary300,
    fontSize: 15,
    fontFamily: "newsreader",
    paddingBottom: 5,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    paddingTop: 20,
    textAlign: "auto",
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: "newsreader",
    lineHeight: 30,
    paddingBottom: 15
  }
});

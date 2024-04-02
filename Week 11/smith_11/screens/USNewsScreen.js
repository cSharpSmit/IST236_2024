import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

/**
 * USNewsScreen is a screen component that displays a list of news articles filtered by type.
 * It uses the List component to render the articles and filters the NEWS data to only show US news.
 *
 * The NEWS data is filtered based on the 'type' property to match 'USNews'.
 * The filtered list is then passed to the List component as a prop.
 */

function USNewsScreen() {
  // Component setup and rendering the List component with filtered news items
  const type = "USNews";
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <List items={displayedNews} />;
}

// Exports screen component for use
export default USNewsScreen;

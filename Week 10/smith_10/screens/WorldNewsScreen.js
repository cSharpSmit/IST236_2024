import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

/**
 * WorldNewsScreen displays a list of global news articles using the List component.
 * It filters the imported NEWS data to include only articles of type 'WorldNews'.
 *
 * The filtering is based on the 'type' attribute of each news item, ensuring that only
 * articles classified as 'WorldNews' are displayed to the user.
 */

function  WorldNewsScreen() {
  // Setup for filtering news items by type and passing them to the List component
  const type = "WorldNews";
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <List items={displayedNews} />;
}

// Exports screen component for use
export default WorldNewsScreen;

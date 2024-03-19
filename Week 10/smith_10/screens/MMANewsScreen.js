import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

/**
 * MMANewsScreen renders a list of MMA-related news articles.
 * It filters the NEWS dataset for articles specifically marked as 'MMANews',
 * ensuring that only content relevant to Mixed Martial Arts is displayed.
 * 
 * This component demonstrates a pattern similar to other news category screens,
 * focusing on a specific subject area by filtering the global news dataset.
 */

function  MMANewsScreen() {
  // Component logic: filtering NEWS by 'MMANews' type and rendering the filtered list
  const type = "MMANews";
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <List items={displayedNews} />;
}

// Exports screen component for use
export default MMANewsScreen;

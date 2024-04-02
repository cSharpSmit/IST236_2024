import { createContext, useState } from "react";

export const BookmarksContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function BookmarksContextProvider({ children }) {
  const [bookmarkIds, setBookmarkIds] = useState([]);

  function addFavoriteBookmark(id) {
    setBookmarkIds((currentBookmarkIds) => {
      return [...currentBookmarkIds, id];
    });
  }

  function removeFavoriteBookmark(id) {
    setBookmarkIds((currentBookmarkIds) => {
      return [...currentBookmarkIds.filter((bookId) => bookId != id)];
    });
  }

  const value = {
    ids: bookmarkIds,
    addFavorite: addFavoriteBookmark,
    removeFavorite: removeFavoriteBookmark,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;

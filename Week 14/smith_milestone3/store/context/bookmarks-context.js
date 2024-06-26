import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BookmarksContext = createContext({
  bookmarkedPlants: [],
  addFavorite: (plant) => {},
  removeFavorite: (plantId) => {},
});

function BookmarksContextProvider({ children }) {
  const [bookmarkedPlants, setBookmarkedPlants] = useState([]);

  useEffect(() => {
    // Load the bookmarked plants from AsyncStorage when the app starts
    const loadBookmarkedPlants = async () => {
      const storedPlants = await AsyncStorage.getItem("bookmarkedPlants");
      if (storedPlants) {
        const plants = JSON.parse(storedPlants);
        setBookmarkedPlants(plants);
        setBookmarkedPlants(JSON.parse(storedPlants));
      }
    };

    loadBookmarkedPlants();
  }, []);

  const addFavoriteBookmark = async (plant) => {
    const newBookmarkedPlants = [...bookmarkedPlants, plant];
    setBookmarkedPlants(newBookmarkedPlants);
    await AsyncStorage.setItem(
      "bookmarkedPlants",
      JSON.stringify(newBookmarkedPlants)
    );
  };

  const removeFavoriteBookmark = async (plantId) => {
    const newBookmarkedPlants = bookmarkedPlants.filter(
      (p) => p.id !== plantId
    );
    setBookmarkedPlants(newBookmarkedPlants);
    await AsyncStorage.setItem(
      "bookmarkedPlants",
      JSON.stringify(newBookmarkedPlants)
    );
  };

  const value = {
    bookmarkedPlants,
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

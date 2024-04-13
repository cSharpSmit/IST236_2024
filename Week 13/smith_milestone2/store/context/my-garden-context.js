import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MyGardenContext = createContext({
  myGardensPlants: [],
  addToGarden: (plant) => {},
  removeFromGarden: (plantId) => {},
});

function MyGardenContextProvider({ children }) {
  const [myGardensPlants, setMyGardensPlants] = useState([]);

  useEffect(() => {
    // Load the "my gardens plants" from AsyncStorage when the app starts
    const loadMyGardensPlants = async () => {
      const storedPlants = await AsyncStorage.getItem("myGardensPlants");
      if (storedPlants) {
        const plants = JSON.parse(storedPlants);
        setMyGardensPlants(plants);
        // setMyGardensPlants(JSON.parse(storedPlants));
        // console.log('Loaded myGardensPlants plants:', plants); // Log the retrieved list
      }
    };

    loadMyGardensPlants();
  }, []);

  const addPlantToGarden = async (plant) => {
    const newGardenPlants = [...myGardensPlants, plant];
    setMyGardensPlants(newGardenPlants);
    await AsyncStorage.setItem(
      "myGardensPlants",
      JSON.stringify(newGardenPlants)
    );
    // console.log("Garden updated:", newGardenPlants); // Log the updated list
  };

  const removePlantFromGarden = async (plantId) => {
    const newGardenPlants = myGardensPlants.filter(
      (p) => p.id !== plantId
    );
    setMyGardensPlants(newGardenPlants);
    await AsyncStorage.setItem(
      "myGardensPlants",
      JSON.stringify(newGardenPlants)
    );
    // console.log("Remove from Garden updated:", newGardenPlants); // Log the updated list
  };

  const value = {
    myGardensPlants,
    addToGarden: addPlantToGarden,
    removeFromGarden: removePlantFromGarden,
  };

  return (
    <MyGardenContext.Provider value={value}>
      {children}
    </MyGardenContext.Provider>
  );
}

export default MyGardenContextProvider;

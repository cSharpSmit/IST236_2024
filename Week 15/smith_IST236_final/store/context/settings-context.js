import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    showImagesOnly: true,
    showCommonNamesOnly: true,
  });
  
  useEffect(() => {
    loadSettings();
  }, []);

  // Load settings from AsyncStorage
  const loadSettings = async () => {
    try {
      const storedSettings = await AsyncStorage.getItem('settings');
      if (storedSettings) {
        setSettings(JSON.parse(storedSettings));
      }
    } catch (error) {
      console.error('Failed to load settings from AsyncStorage:', error);
    }
  };

  // Save settings to AsyncStorage
  const saveSettings = async (newSettings) => {
    try {
      const jsonSettings = JSON.stringify(newSettings);
      await AsyncStorage.setItem('settings', jsonSettings);
      setSettings(newSettings);  // Update state after saving to storage
    } catch (error) {
      console.error('Failed to save settings to AsyncStorage:', error);
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

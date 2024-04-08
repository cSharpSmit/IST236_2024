import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SearchPlantScreen = () => {
  const [query, setQuery] = useState('');
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchPlants = async () => {
    if (!query.trim()) return;
    setIsLoading(true);

    try {
      const response = await fetch(`https://trefle.io/api/v1/plants/search?token=-OwqHXlJ7XS8liuQNOkDcH4UrCFC_EoSJbT7r6_Xd6E&q=${query}`);
      const data = await response.json();
      setPlants(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search plants..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={searchPlants} />

      {/* Could show a loading indicator here */}

      <FlatList
        data={plants}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}>
            {/* Adjust fields based on your API response */}
            <Image style={styles.image} source={{ uri: item.image_url }} />
            <Text style={styles.name}>{item.common_name || item.scientific_name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
});

export default SearchPlantScreen;

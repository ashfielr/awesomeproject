import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Image, Button } from 'react-native';

const BASE_URI = ""
const IMAGES = ['https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg',
  'https://images.pexels.com/photos/2792116/pexels-photo-2792116.jpeg',
  'https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg',
  'https://images.pexels.com/photos/209943/pexels-photo-209943.jpeg']

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Awesome App</Text>
      <Image
        style={{ width: 350, height: 300 }}
        source={{ uri: IMAGES[0] }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mainImage: {
    height: 300,
    with: 300,
    resizeMode: 'contain',
  },
});

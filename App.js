import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Image, Button, Alert } from 'react-native';

const BASE_URI = ""
const IMAGES = ['https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg',
  'https://images.pexels.com/photos/2792116/pexels-photo-2792116.jpeg',
  'https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg',
  'https://images.pexels.com/photos/209943/pexels-photo-209943.jpeg']

let currentImgIdx = 0;


// creating component which shows an image from a collection of images, props = properties for the component
// button allows user to cycle through collection of images
const ImageCollection = (props) => {
  // Declare a new state variable, which we'll call "currentImgIdx"
  const [currentImgIdx, setCurrentImgIdx] = useState(0) //  [<getter>,<setter>]  for state variable
                                                        // useState sets initial value
  return (
    <View>
      <Image
        style={{ width: 350, height: 300 }}
        source={{ uri: IMAGES[currentImgIdx] }}    // an image from the IMAGES array is displayed
      />
      <Button
        onPress={() => {
          if (currentImgIdx < IMAGES.length - 1) {  // if image isnt the last of the collection
            setCurrentImgIdx(currentImgIdx + 1)
          } else {                                  // image is the last, set img to the first one
            setCurrentImgIdx(0)
          }
        }}
        title="Next Image"
        accessibilityLabel="Show the next image"
      />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Awesome App</Text>
      <Button
        title="Press me for alert"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <ImageCollection />
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

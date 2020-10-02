//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Weather from './components/Weather'

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Weather zipCode="82000"/> 
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

//make this component available to the app
export default App;
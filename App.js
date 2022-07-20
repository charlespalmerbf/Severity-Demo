import React from 'react';
import { StyleSheet, View } from 'react-native';
import WorldMap from './WorldMap'

export default function App() {
  return (
    <View style={{flex:1}}>
      <WorldMap onSelectContinent={(el) => alert(el)} color='#BABABA'  selectedColor="red" />
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
});
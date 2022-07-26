import React from 'react';
import {StyleSheet, View} from 'react-native';
import WorldMap from './WorldMap';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "#F1F1F1"}}>
      <WorldMap
        onSelectContinent={el => alert(el)}
        color="#BABABA"
        selectedColor="#767676"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

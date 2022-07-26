import * as React from 'react';
import {ScrollView, StyleSheet, View, Text, Image, Animated, TouchableWithoutFeedback} from 'react-native';
import Svg, {G, Path, Circle} from 'react-native-svg';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';

import NorthAmerica from './Continents/NorthAmerica';
import Europe from './Continents/Europe';
import SouthAmerica from './Continents/SouthAmerica';
import Asia from './Continents/Asia';
import Africa from './Continents/Africa';
import Oceania from './Continents/Oceania';
import ZoomAnimation from './ZoomAnimation';

export default function WorldMap({onSelectContinent, color, selectedColor}) {
  const [selected, setSelected] = React.useState('');
  const [prompt, setPrompt] = React.useState(true)
  return (
    <>
      <View style={styles.topView} />
        <ReactNativeZoomableView
          maxZoom={8}
          minZoom={1}
          zoomStep={0.5}
          initialZoom={1}
          style={{
            padding: 10,
            backgroundColor: '#F1F1F1',
          }}
          visualTouchFeedbackEnabled={false}
          bindToBorders={false}
        >
          <>
          {prompt &&
              <ZoomAnimation setPrompt={setPrompt}/>
          }          
          <Svg
            fill="#BABABA"
            height="250%"
            viewBox="0 0 2000 1000"
            width="250%"
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2">
            <NorthAmerica
              selected={selected}
              setSelected={setSelected}
              onSelectContinent={onSelectContinent}
              color={color}
              selectedColor={selectedColor}
            />
            <Europe
              selected={selected}
              setSelected={setSelected}
              onSelectContinent={onSelectContinent}
              color={color}
              selectedColor={selectedColor}
            />
            <SouthAmerica
              selected={selected}
              setSelected={setSelected}
              onSelectContinent={onSelectContinent}
              color={color}
              selectedColor={selectedColor}
            />
            <Asia
              selected={selected}
              setSelected={setSelected}
              onSelectContinent={onSelectContinent}
              color={color}
              selectedColor={selectedColor}
            />
            <Africa
              selected={selected}
              setSelected={setSelected}
              onSelectContinent={onSelectContinent}
              color={color}
              selectedColor={selectedColor}
            />
            <Oceania
              selected={selected}
              setSelected={setSelected}
              onSelectContinent={onSelectContinent}
              color={color}
              selectedColor={selectedColor}
            />
          </Svg>
          </>
        </ReactNativeZoomableView>     

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  topView: {
    height: '30%',
    backgroundColor: 'black',
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(40, 40, 40,0.65)",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollZoomText: {
    color: "#fff",
    fontSize: 12
  }
});

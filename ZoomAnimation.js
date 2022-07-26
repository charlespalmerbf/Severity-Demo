import * as React from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import Lottie from 'lottie-react-native';


export default function ZoomAnimation({onSelectContinent, color, selectedColor, setPrompt}) {
  return (
    <View style={styles.overlay} onStartShouldSetResponder={() => setPrompt(false)}>
        <Lottie source={require('./assets/animation.json')} autoPlay loop  style={styles.lottieContainer}/>
        <Text style={styles.scrollZoomText}>Scroll & Zoom</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "500%",
    width: "500%",
    backgroundColor: "rgba(40, 40, 40,0.65)",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  lottieContainer: {
    height: 150,
  },
  scrollZoomText: {
    color: "#fff",
    fontSize: 10,
    bottom: 55
  }
});

// WavyHeader.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const WavyHeader = () => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox="0 0 1440 320">
        <Path
          fill="#7B1FA2"  // Purple color
          d="M0,160L40,170.7C80,185,160,203,240,192C320,181,400,139,480,112C560,85,640,75,720,80C800,85,880,107,960,112C1040,117,1120,107,1200,101.3C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:0.13


  },
});

export default WavyHeader;

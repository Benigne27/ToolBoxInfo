import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const index = () => {
  return (
    <ImageBackground style={styles.indexTab} source={require('@/assets/images/sky.png')}>
      <Text>index</Text>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  indexTab: {
    height: height,
    backgroundColor: "white",
  },
});

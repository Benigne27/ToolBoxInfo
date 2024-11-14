import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const index = () => {
  return (
    <ImageBackground style={styles.indexTab} source={require('@/assets/images/sky.png')} >
      <StatusBar barStyle={'light-content'}/>
      <SafeAreaView></SafeAreaView>
      <Text>index</Text>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  indexTab: {
    height: height,
  },
});

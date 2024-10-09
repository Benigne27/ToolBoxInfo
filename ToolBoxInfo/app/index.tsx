import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const index = () => {
  return (
    <View style={styles.MainIndex}>
      <SafeAreaView></SafeAreaView>
      <Link href={'/(tabs)'} asChild>
        <TouchableOpacity style={styles.getStarted}>
        
          <Text style={styles.getStarted2}>Get Started</Text>
          
        </TouchableOpacity>
     </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  MainIndex: {
    backgroundColor: "#004D40",
    height: height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  getStarted:{
    height:60,
    width:350,
    backgroundColor:'white',
    borderRadius:30,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  getStarted2:{
    fontWeight:'bold',
    fontSize:20
  }
 
});

import { ActivityIndicator, Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";
const height= Dimensions.get('screen').height

import { useAppContext } from "../Context/ContextProv";


const hourly = () => {
  const {humidityData}=useAppContext()


  return (
    <View style={styles. hourlyTab}>
      <SafeAreaView></SafeAreaView>
      <StatusBar barStyle={'dark-content'}/>
      <ScrollView >
      <Text>Hourly Humidity:</Text>
       {humidityData.length > 0 ? (
        humidityData.map((entry, index) => (
          <Text key={index}>
           Date:{entry.date},{'\n'} Time: {entry.time},{'\n'} Humidity: {entry.humidity}%
          </Text>
        ))
      ) : (
        <Text>No data available</Text>
      )}
      </ScrollView>
    </View>
  );
};

export default hourly;

const styles = StyleSheet.create({
  hourlyTab:{
    height:height,
    backgroundColor:'white',
    paddingHorizontal:20
  }
});

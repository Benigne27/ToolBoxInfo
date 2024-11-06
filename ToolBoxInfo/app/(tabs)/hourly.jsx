import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";
const height = Dimensions.get("screen").height;

import { useAppContext } from "../Context/ContextProv";
import HumidData from "../../components/HumidData";

const hourly = () => {
  const { humidityData } = useAppContext();
  const todayTime = new Date().toLocaleTimeString().split(":")[0];
  const todayDate = new Date().toISOString().split("T")[0];
  console.log(todayDate);
  const todayHumData = humidityData.filter(
    (data) => data.time.split(":")[0] === todayTime && data.date === todayDate
  );

  return (
    <View style={styles.hourlyTab}>
      <SafeAreaView></SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView
        style={{ paddingBottom: 180 }}
        showsVerticalScrollIndicator={false}
      >
        <Text>Hourly Humidity:</Text>
        {todayHumData.length > 0 ? (
          todayHumData.map((entry, index) => (
            <View key={index}>
              <HumidData
                date={entry.date}
                humidity={entry.humidity}
                temperature={entry.temperature}
                time={entry.time}
              />
            </View>
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
  hourlyTab: {
    height: height,
    backgroundColor: "white",
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    paddingBottom: 80,
  },
});

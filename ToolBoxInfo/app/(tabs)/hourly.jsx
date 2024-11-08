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
import { LineChart } from "react-native-chart-kit";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

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
  const today = new Date().toISOString().split("T")[0];

  const todayData = humidityData
    .filter((entry) => entry.date === today)
    .filter((entry, index) => {
      const hour = parseInt(entry.time.split(":")[0], 10);
      return hour % 2 === 0; 
    });

  const chartData = {
    labels: todayData.map((item) => item.time.split(":")[0]),
    datasets: [
      {
        data: todayData.map((item) => item.humidity),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      },
    ],
  };

  return (
    <View style={styles.hourlyTab}>
      <SafeAreaView></SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <View>
        <Text style={styles.humidityData}>Hourly Humidity:</Text>
        {todayHumData.length > 0 ? (
          todayHumData.map((entry, index) => (
            <View key={index}>
              <HumidData
                date={entry.date}
                humidity={entry.humidity}
                temperature={entry.temperature}
                time={entry.time}
                rain={entry.rain}
              />
            </View>
          ))
        ) : (
          <Text>No data available</Text>
        )}
        <View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 300,
            }}
          >
            <View style={{height:30}}></View>
            <View style={styles.humidityDataTab}>
              <Text style={styles.humidityData}>
                Changes of the Humidity over Time
              </Text>
            </View>
            <LineChart
              data={chartData}
              width={360}
              height={250}
              chartConfig={{
                backgroundGradientFrom: "#f5f5ee",
                backgroundGradientTo: "#f5f5ee",
                color: (opacity = 0.7) => `rgba(0, 146, 82, ${opacity})`,
                strokeWidth: 7,
                scrollableDotStrokeWidth: 1,
                linejoinType: "miter",
              }}
              fromZero
              bezier
              withDots={false}
              withShadow
              withInnerLines={false}
              style={{
                shadowOffset: {
                  width: 3,
                  height: 5,
                },
                shadowColor: "gray",
                shadowOpacity: 0.5,
                borderRadius: 20,
              }}
            />
          </View>
        </View>
      </View>
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
    justifyContent:'center',
  },
  humidityData: {
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom:20
  },
  humidityDataTab:{
    paddingTop:10
  }
});

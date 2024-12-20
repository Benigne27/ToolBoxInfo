import { StyleSheet, Text, View, Platform } from "react-native";
import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import { ActivityIndicator } from "react-native";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

export const AppContext = createContext(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default function ContextProv({ children }) {
  
  const [apiResponses, setApiResponses] = useState([]);
  const theLatitude = -1.950221;
  const theLongitude = 30.157104;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${theLatitude}&longitude=${theLongitude}&hourly=temperature_2m&hourly=relative_humidity_2m&hourly=rain`;
        const response = await fetch(url);
        const data = await response.json();
        setApiResponses(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!apiResponses || !apiResponses.hourly) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  const hourly = apiResponses?.hourly;
  const humidityData =
    hourly?.relative_humidity_2m  && hourly?.temperature_2m && hourly?.rain && hourly?.time
      ? hourly.relative_humidity_2m.map((humidity, index) => ({
          date: hourly.time[index].split("T")[0],
          time: hourly.time[index].split("T")[1],
          humidity,
          temperature: hourly.temperature_2m[index],
          rain: hourly.rain[index]
          
        }))
      : [];
      















  return (
    <AppContext.Provider
      value={{
        humidityData,
        apiResponses,
        // tempData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({});

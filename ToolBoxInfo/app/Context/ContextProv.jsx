import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

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
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${theLatitude}&longitude=${theLongitude}&hourly=relative_humidity_2m`;
        const response = await fetch(url);
        const data = await response.json();
        setApiResponses(data);
        // console.log(data);
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
    hourly?.relative_humidity_2m && hourly?.time
      ? hourly.relative_humidity_2m.map((humidity, index) => ({
          date: hourly.time[index].split("T")[0],
          time: hourly.time[index].split("T")[1],
          humidity,
        }))
      : [];

  return (
    <AppContext.Provider
      value={{
        humidityData,
        apiResponses,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({});

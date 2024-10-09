import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const schedule = () => {
  return (
    <View style={styles.scheduleTab}>
      <SafeAreaView></SafeAreaView>
      <StatusBar style='auto'/>
      <Calendar
        style={{ width: 350 }}
        theme={{
          calendarBackground: "#F5F5F5",
          dayTextColor: "black",
          todayTextColor: "white",
          todayBackgroundColor: "#004D40",
          selectedDayBackgroundColor:'#E91E63',
          selectedTextColor:'white',
          arrowColor:'#E91E63',
          textMonthFontWeight:['bold'],
          monthTextColor:'#E91E63',
        }}
      />
    </View>
  );
};

export default schedule;

const styles = StyleSheet.create({
  scheduleTab: {
    height: height,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
});

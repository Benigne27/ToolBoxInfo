import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {LineChart} from 'react-native-chart-kit'

import { useAppContext } from '../Context/ContextProv'
const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height


const daily = () => {
  const {humidityData}=useAppContext()
  // console.log(humidityData)
  const today = new Date().toISOString().split("T")[0];

  const todayData = humidityData
  .filter((entry) => entry.date === today)
  .filter((entry, index) => {
    const hour = parseInt(entry.time.split(':')[0], 10);
    return hour % 2 === 0;  // Only keep entries at 2-hour intervals
  });

  const chartData = {
  labels: todayData.map(item =>item.time.split(':')[0] ),
    datasets: [
      {
        data: todayData.map(item => item.humidity), 
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, 
      },
    ],
  };
  const lastHourEntry = humidityData.find(entry => entry.date === today && entry.time.startsWith("23"));
  if (lastHourEntry && !todayData.some(entry => entry.time === lastHourEntry.time)) {
    todayData.push(lastHourEntry);
  }

  return (
    <View style={{backgroundColor:'white', height: height}}>
      <SafeAreaView></SafeAreaView>
      <StatusBar barStyle={'dark-content'}/>
      <Text>daily</Text>
      <View style={{display:'flex', alignItems:'center', justifyContent:'center', height:300}}>
      <LineChart 
        data={chartData}
        width={width-20} 
        height={250}
        chartConfig={{
          backgroundGradientFrom: "#f5f5ee",
          backgroundGradientTo: "#f5f5ee",
          color: (opacity = 0.7) => `rgba(0, 146, 82, ${opacity})`,
          strokeWidth: 7,
          scrollableDotStrokeWidth:1,
          linejoinType:'miter'
          
        
         }}
         fromZero
         bezier
         withDots={false}
         withShadow
         withInnerLines={false}
         style={{
          shadowOffset:{
            width:3,
            height:5
          },
          shadowColor:'gray',
          shadowOpacity:0.5,
          borderRadius:20
         }}
        
         
      />
      </View>
      <View>
        <Text>Current Humidity:</Text>
        <Text>Expected Humidity in the next hour:</Text>
      </View>
    </View>
  )
}

export default daily

const styles = StyleSheet.create({})
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {LineChart} from 'react-native-chart-kit'

import { useAppContext } from '../Context/ContextProv'
const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height


const daily = () => {
  const {humidityData}=useAppContext()
  console.log(humidityData)
  const today = new Date().toISOString().split("T")[0];

  const todayData = humidityData.filter((entry) => entry.date === today);

  const chartData = {
  labels: todayData.map(item =>{ 
    const theTime=item.time
    return theTime.split('.')[0]
  }),
    datasets: [
      {
        data: todayData.map(item => item.humidity), 
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, 
      },
    ],
  };

  const CustomLabel = ({ x, y, value }) => (
    <Text
      x={x}
      y={y}
      fill="black"
      fontSize="10"
      rotation="-45" // Rotate label by -45 degrees
      originX={x} // Set the origin point for rotation
      originY={y} // Set the origin point for rotation
      textAnchor="end" // Align text to the end
    >
      {value}
    </Text>
  );
  return (
    <View style={{backgroundColor:'white', height: height}}>
      <SafeAreaView></SafeAreaView>
      <StatusBar barStyle={'dark-content'}/>
      <Text>daily</Text>
      <LineChart 
        data={chartData}
        width={width} 
        height={300}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 0.7) => `rgba(0, 146, 82, ${opacity})`,
          // color: ()=>'#5D3FD3',
          strokeWidth: 5,
          scrollableDotStrokeWidth:1,
          linejoinType:'miter'
          
        
         }}
         fromZero
         decorator={(index) => ({
          x: index * (width / humidityData.labels.length),
          y: 220, 
          value: <CustomLabel value={humidityData.labels[index]} />
        })}
         bezier
         withDots={false}
         withShadow
         withInnerLines={false}
         style={{
          backgroundColor:'red'
         }}
        
         
      />
    </View>
  )
}

export default daily

const styles = StyleSheet.create({})
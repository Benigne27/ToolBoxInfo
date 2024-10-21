import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {fetchWeatherApi} from 'openmeteo'

const hourly = () => {
    
    const latitude=-1.950221
    const longitude=30.157104

    const url=`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=relative_humidity_2m`

    const fetchWeather= async ()=>{
        fetch(url)
        .then((response)=>response.text())
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=> console.error(error))
    }
    fetchWeather()

    // const params={
    //     'latitude':-1.950221,
    //     'longitude':30.157104,
    //     'hourly': ['temperature_2m', 'relative_humidity_2m']
    // }

    // const url='https://api.open-meteo.com/v1/forecast'
    // const responses= fetchWeatherApi(url, params)
    // console.log(responses)

    // const range=(start, stop, step)=> 
    //     Array.from({length:(start-stop)/step},(_,i)=>start+i*step)

    // const response= responses[0]
    // console.log(response)
    // const utcOffsetSeconds= response.utcOffsetSeconds()
    // const timezone= response.timezone()
    // const timezoneAbbreviation= response.timezoneAbbreviation()
  return (
   
    <View>
        <SafeAreaView></SafeAreaView>
      <Text>hourly</Text>
    </View>
  )
}

export default hourly

const styles = StyleSheet.create({})
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height

const addReport = () => {
  return (
    <View style={styles.addTab}>
      <Text>addReport</Text>
    </View>
  )
}

export default addReport

const styles = StyleSheet.create({
    addTab:{
        height:height,
    backgroundColor:'white'
    }
})
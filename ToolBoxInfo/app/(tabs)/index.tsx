import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height

const index = () => {
  return (
    <View style={styles.indexTab}>
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  indexTab:{
     height:height,
    backgroundColor:'white'
  }
})
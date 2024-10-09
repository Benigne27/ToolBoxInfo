import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height

const notifications = () => {
  return (
    <View style={styles.notifyTab}>
      <Text>notifications</Text>
    </View>
  )
}

export default notifications

const styles = StyleSheet.create({
    notifyTab:{
        height:height,
    backgroundColor:'white'
    }
})
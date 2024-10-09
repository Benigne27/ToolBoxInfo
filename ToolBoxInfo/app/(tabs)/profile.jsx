import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height

const profile = () => {
  return (
    <View style={styles.profileTab}>
      <Text>profile</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    profileTab:{
        height:height,
    backgroundColor:'white'
    }
})
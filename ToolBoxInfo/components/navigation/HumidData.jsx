import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Emoji, EmojiPopper} from 'react-native-fiesta'

const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height
export default function HumidData() {
  return (
    <View style={styles.HumidDataTab}>
      <Text>HumidData</Text>
      <Text>HumidData</Text>
      <Text>HumidData</Text>
      {/* <EmojiPopper emojis={[]}/> */}
      <Emoji emoji='cloud'/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    HumidDataTab:{
        width:width-30,
        height:200,
        backgroundColor:'#362A84'
    }
})
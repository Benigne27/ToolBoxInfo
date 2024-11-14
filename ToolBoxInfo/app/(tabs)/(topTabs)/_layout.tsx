import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import oldNotes from "./oldNotes";
import newNote from './newNote'


const Top = createMaterialTopTabNavigator();

export default function TopLayout() {
  return (
    <Top.Navigator>
      <Top.Screen name="newNote" component={newNote}/>
      <Top.Screen name="oldNotes" component={oldNotes} />
    </Top.Navigator>
  );
}

const styles = StyleSheet.create({});

import { Tabs } from "expo-router";
import React from "react";

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Icon } from "react-native-elements";
import { View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5D3FD3",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fafafa",
          // position: "absolute",
          // width:350,
          // alignSelf:'center',
          // bottom:40,
          // borderRadius:40,
          // display:'flex',
          // alignItems:'center',
          // justifyContent:'center',
          // paddingTop:18,
          // left:'auto',
          // right:'auto',
          
        },
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"home-variant-outline"}
              type="material-community"
              color={color}
              size={32}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"bell-outline"}
              type="material-community"
              color={color}
              size={32}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="hourly"
        options={{
          title: "Hourly",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"weather-cloudy-clock"}
              type="material-community"
              color={color}
              size={32}
            />
          ),
        }}
      />
     
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"cog-outline"}
              type="material-community"
              color={color}
              size={32}
            />
          ),
        }}
      />
    </Tabs>
  );
}

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
        tabBarActiveTintColor: "#004D40",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fafafa",
          height: 80,
          position: "relative",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "home-variant" : "home-variant-outline"}
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
              name={focused ? "bell" : "bell-outline"}
              type="material-community"
              color={color}
              size={32}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addReport"
        options={{
          title: "Add",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                height: 80,
                width: 80,
                backgroundColor: "#004D40",
                borderRadius: 40,
                position: "absolute",
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                bottom:1
              }}
            >
              <Icon
                name={"plus"}
                type="material-community"
                color={"white"}
                size={40}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "book-clock" : "book-clock-outline"}
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
              name={focused ? "account-cog" : "account-cog-outline"}
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

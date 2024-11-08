import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-elements";
import { StatusBar } from "react-native";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

// async function sendPushNotification(expoPushToken: string) {
//   const [notee, setNotee] = useState("");
//   const message = {
//     to: expoPushToken,
//     sound: "default",
//     title: "Benigne",
//     body: { notee },
//     // data: { someData: 'goes here' },
//   };

//   await fetch("https://exp.host/--/api/v2/push/send", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Accept-encoding": "gzip, deflate",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(message),
//   });
// }

function handleRegistrationError(errorMessage: string) {
  alert(errorMessage);
  throw new Error(errorMessage);
}

async function registerForPushNotificationsAsync() {
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      handleRegistrationError(
        "Permission not granted to get push token for push notification!"
      );
      return;
    }
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ??
      Constants?.easConfig?.projectId;
    if (!projectId) {
      handleRegistrationError("Project ID not found");
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(pushTokenString);
      return pushTokenString;
    } catch (e: unknown) {
      handleRegistrationError(`${e}`);
    }
  } else {
    handleRegistrationError("Must use physical device for push notifications");
  }
}

export default function AddNote() {
  const [expoPushToken, setExpoPushToken] = useState("");
  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken(token ?? ""))
      .catch((error: any) => setExpoPushToken(`${error}`));
  });

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSendNotification = async () => {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: title || "No Title",
      body: body || "No Body",
      data: { customData: "Additional data if needed" },
    };

    try {
      const response = await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      const result = await response.json();
      console.log("Notification result:", result);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <View style={{ display: "flex", alignItems: "center", height:height, width:width }}>
        <StatusBar barStyle={'dark-content'}/>
      <SafeAreaView></SafeAreaView>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 350,
          height: 50,
          borderRadius: 10,
          paddingVertical:5,
          paddingHorizontal:20
        }}
      />
      <View style={{height:5}}></View>
      <TextInput
        value={body}
        onChangeText={setBody}
        placeholder="Body"
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 350,
          paddingBottom: 200,
          paddingTop:20,
          paddingHorizontal:20,
          borderRadius: 10,
        }}
      />
      <View style={{height:30}}></View>
      <Button
        title="Send Notification"
        style={{ width: 200, alignSelf: "center" }}
        onPress={handleSendNotification}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

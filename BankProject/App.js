import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PayMentScreen from "./components/screens/paymentscreen";
// import Navigation from "./components/screens/bottomnavigation";

export default function App() {
  return (
    <>
      <PayMentScreen />
      {/* <Navigation /> */}
    </>
  );
}

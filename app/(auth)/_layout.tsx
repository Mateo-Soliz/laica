import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import normalize from "@/utils/normalize";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />
      </Stack>
    </>
  );
}

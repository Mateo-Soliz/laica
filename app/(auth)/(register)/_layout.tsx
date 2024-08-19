import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: true, headerTitleAlign: "center" }}>
        <Stack.Screen
          name="register-screen"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}

import { Tabs } from "expo-router";
import React, { useEffect } from "react";

import { Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
export default function TabLayout() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  return isLoaded ? (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    </Tabs>
  ) : (
    <Redirect href="/onboarding" />
  );
}

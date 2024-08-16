import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
      <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

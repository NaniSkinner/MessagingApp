import { Stack } from "expo-router";
import { useEffect } from "react";

// Initialize Firebase
import "../services/firebase.config";

export default function RootLayout() {
  useEffect(() => {
    console.log("Firebase initialized successfully");
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

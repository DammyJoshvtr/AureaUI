import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="home"
        />
        <Stack.Screen
          name="auth_signup"
        />
      </Stack>
    </>
  );
}

import { ThemeProvider } from "@/context";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
    return (
        <ThemeProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="(tabs)" />
            </Stack>
        </ThemeProvider>
    );
};

export default RootLayout;

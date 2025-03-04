import { ErrorBoundary } from "@/components";
import { ThemeProvider } from "@/context";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
    return (
        <ThemeProvider>
            <ErrorBoundary>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="index" />
                    <Stack.Screen name="(auth)" />
                    <Stack.Screen name="(tabs)" />
                </Stack>
            </ErrorBoundary>
        </ThemeProvider>
    );
};

export default RootLayout;

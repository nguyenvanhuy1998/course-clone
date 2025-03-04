import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

const RootLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
};

export default RootLayout;

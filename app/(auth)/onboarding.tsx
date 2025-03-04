import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/hooks";

const OnboardingScreen = () => {
    const { colors } = useTheme();
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.background.default,
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    color: colors.text.primary,
                }}
            >
                OnboardingScreen
            </Text>
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});

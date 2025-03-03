import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default function Index() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null
    );

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const token = SecureStore.getItem("accessToken");
            setIsAuthenticated(!!token);
        } catch (error) {
            setIsAuthenticated(false);
            console.error("Error checking auth status:", error);
        }
    };

    // Hiển thị loading khi đang kiểm tra trạng thái
    if (isAuthenticated === null) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Điều hướng dựa trên trạng thái đăng nhập
    return (
        <Redirect
            href={isAuthenticated ? "/(tabs)/home" : "/(auth)/onboarding"}
        />
    );
}

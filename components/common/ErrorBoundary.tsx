import React, { Component, ReactNode } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "@/hooks";

const ErrorFallback = ({
    error,
    resetError,
}: {
    error: Error;
    resetError: () => void;
}) => {
    const { colors } = useTheme();

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: colors.background.default },
            ]}
        >
            <Text style={[styles.title, { color: colors.text.primary }]}>
                Oops! Có lỗi xảy ra
            </Text>
            <Text style={[styles.message, { color: colors.text.secondary }]}>
                {error.message}
            </Text>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: colors.primary }]}
                onPress={resetError}
            >
                <Text
                    style={[styles.buttonText, { color: colors.text.inverse }]}
                >
                    Quay lại trang chủ
                </Text>
            </TouchableOpacity>
        </View>
    );
};

class ErrorBoundary extends Component<
    { children: ReactNode },
    { hasError: boolean; error: Error | null }
> {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error) {
        // Chỉ cập nhật state
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Log lỗi vào service hoặc analytics
        console.log("Error details:", {
            error: error.message,
            componentStack: errorInfo.componentStack,
        });
    }

    resetError = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <ErrorFallback
                    error={this.state.error!}
                    resetError={this.resetError}
                />
            );
        }
        return this.props.children;
    }
}
// Thay đổi export
export default ErrorBoundary;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
    },
});

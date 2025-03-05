import { shadows, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import React from "react";
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    StyleSheet,
    View,
    ViewProps,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerProps extends ViewProps {
    children: React.ReactNode;
    useSafeArea?: boolean;
    edges?: ("top" | "right" | "bottom" | "left")[];
    backgroundColor?: string;
    padding?: keyof typeof spacing;
    scroll?: boolean;
    keyboardAware?: boolean;
    refreshing?: boolean;
    onRefresh?: () => void;
    showsVerticalScrollIndicator?: boolean;
    contentContainerStyle?: ViewProps["style"];
    elevated?: boolean;
    center?: boolean;
    loading?: boolean;
    LoadingComponent?: React.ReactNode;
}
const Container = ({
    children,
    style,
    useSafeArea = true,
    edges = ["top", "right", "bottom", "left"],
    backgroundColor,
    padding = "md",
    scroll = false,
    keyboardAware = false,
    refreshing = false,
    onRefresh,
    showsVerticalScrollIndicator = false,
    contentContainerStyle,
    elevated = false,
    center = false,
    loading = false,
    LoadingComponent,
    ...props
}: ContainerProps) => {
    const { colors } = useTheme();
    const containerStyle = [
        styles.container,
        {
            backgroundColor: backgroundColor || colors.background.default,
            padding: spacing[padding],
        },
        elevated && shadows.small,
        center && styles.center,
        style,
    ];
    const renderContent = () => {
        if (loading) {
            return (
                LoadingComponent || (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator
                            size={"large"}
                            color={colors.primary}
                        />
                    </View>
                )
            );
        }
        if (keyboardAware) {
            return (
                <KeyboardAwareScrollView
                    style={styles.scrollView}
                    contentContainerStyle={[
                        styles.scrollContent,
                        center && styles.center,
                        contentContainerStyle,
                    ]}
                    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                    refreshControl={
                        onRefresh ? (
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        ) : undefined
                    }
                    enableOnAndroid
                    enableResetScrollToCoords={false}
                    keyboardShouldPersistTaps="handled"
                >
                    {children}
                </KeyboardAwareScrollView>
            );
        }
        if (scroll) {
            return (
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={[
                        styles.scrollContent,
                        center && styles.center,
                        contentContainerStyle,
                    ]}
                    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                    refreshControl={
                        onRefresh ? (
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        ) : undefined
                    }
                >
                    {children}
                </ScrollView>
            );
        }

        return children;
    };
    const Wrapper = useSafeArea ? SafeAreaView : View;

    return (
        <Wrapper edges={edges} style={containerStyle} {...props}>
            {renderContent()}
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

Container.displayName = "Container";
export default Container;

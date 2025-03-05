import { shadows, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { commonStyles } from "@/styles";
import React from "react";
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
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
        commonStyles.flex1,
        {
            backgroundColor: backgroundColor || colors.background.default,
            padding: spacing[padding],
        },
        elevated && shadows.small,
        center && commonStyles.center,
        style,
    ];
    const renderContent = () => {
        if (loading) {
            return (
                LoadingComponent || (
                    <View style={[commonStyles.center, commonStyles.flex1]}>
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
                    style={commonStyles.flex1}
                    contentContainerStyle={[
                        commonStyles.flex1,
                        center && commonStyles.center,
                        contentContainerStyle,
                    ]}
                    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                    refreshControl={
                        onRefresh ? (
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={[colors.primary]}
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
                    style={commonStyles.flex1}
                    contentContainerStyle={[
                        commonStyles.flex1,
                        center && commonStyles.center,
                        contentContainerStyle,
                    ]}
                    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                    refreshControl={
                        onRefresh ? (
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={[colors.primary]}
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

Container.displayName = "Container";
export default Container;

import { scale, verticalScale, moderateScale } from "react-native-size-matters";

// Base spacing unit
const BASE_UNIT = 8;

export const spacing = {
    // Basic spacing
    xxxs: scale(BASE_UNIT * 0.25), // 2
    xxs: scale(BASE_UNIT * 0.5), // 4
    xs: scale(BASE_UNIT * 0.75), // 6
    sm: scale(BASE_UNIT), // 8
    md: scale(BASE_UNIT * 1.5), // 12
    lg: scale(BASE_UNIT * 2), // 16
    xl: scale(BASE_UNIT * 3), // 24
    xxl: scale(BASE_UNIT * 4), // 32
    xxxl: scale(BASE_UNIT * 5), // 40

    // Vertical spacing
    vertical: {
        xxxs: verticalScale(BASE_UNIT * 0.25), // 2
        xxs: verticalScale(BASE_UNIT * 0.5), // 4
        xs: verticalScale(BASE_UNIT * 0.75), // 6
        sm: verticalScale(BASE_UNIT), // 8
        md: verticalScale(BASE_UNIT * 1.5), // 12
        lg: verticalScale(BASE_UNIT * 2), // 16
        xl: verticalScale(BASE_UNIT * 3), // 24
        xxl: verticalScale(BASE_UNIT * 4), // 32
        xxxl: verticalScale(BASE_UNIT * 5), // 40
    },

    // Layout
    layout: {
        padding: {
            screen: scale(BASE_UNIT * 2), // 16
            container: scale(BASE_UNIT), // 8
            card: scale(BASE_UNIT * 1.5), // 12
        },
        margin: {
            screen: scale(BASE_UNIT * 2), // 16
            container: scale(BASE_UNIT), // 8
            card: scale(BASE_UNIT * 1.5), // 12
        },
        gap: {
            xs: scale(BASE_UNIT * 0.5), // 4
            sm: scale(BASE_UNIT), // 8
            md: scale(BASE_UNIT * 1.5), // 12
            lg: scale(BASE_UNIT * 2), // 16
        },
    },
    // Component specific
    component: {
        button: {
            height: verticalScale(48),
            padding: scale(BASE_UNIT * 1.5), // 12
            borderRadius: moderateScale(8),
        },
        input: {
            height: verticalScale(44),
            padding: scale(BASE_UNIT), // 8
            borderRadius: moderateScale(8),
        },
        card: {
            padding: scale(BASE_UNIT * 2), // 16
            borderRadius: moderateScale(12),
            gap: scale(BASE_UNIT), // 8
        },
        avatar: {
            small: scale(32),
            medium: scale(40),
            large: scale(56),
        },
        icon: {
            small: scale(16),
            medium: scale(24),
            large: scale(32),
        },
    },
    // Screen specific
    screen: {
        header: {
            height: verticalScale(56),
            paddingHorizontal: scale(BASE_UNIT * 2),
        },
        tabBar: {
            height: verticalScale(64),
            paddingBottom: verticalScale(BASE_UNIT),
        },
        modal: {
            padding: scale(BASE_UNIT * 2),
        },
    },
};
// Helper types
export type SpacingType = keyof typeof spacing;
export type VerticalSpacingType = keyof typeof spacing.vertical;
export type ComponentSpacingType = keyof typeof spacing.component;
export type ScreenSpacingType = keyof typeof spacing.screen;

// Utility functions
export const getSpacing = (size: SpacingType) => spacing[size];
export const getVerticalSpacing = (size: VerticalSpacingType) =>
    spacing.vertical[size];

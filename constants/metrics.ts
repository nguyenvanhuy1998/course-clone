import { Dimensions, Platform, StatusBar } from "react-native";
const { width, height } = Dimensions.get("window");

// iPhone X, XS, 11 Pro, 12, 13 dimensions
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhone XR, XS Max, 11, 11 Pro Max dimensions
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const isIphoneX = () => {
    return (
        Platform.OS === "ios" &&
        !Platform.isPad &&
        !Platform.isTV &&
        ((height === X_HEIGHT && width === X_WIDTH) ||
            (height === XSMAX_HEIGHT && width === XSMAX_WIDTH))
    );
};

export const metrics = {
    // Screen dimensions
    screenWidth: width,
    screenHeight: height,

    // Device types
    isSmallDevice: width < 375,
    isMediumDevice: width >= 375 && width < 414,
    isLargeDevice: width >= 414,
    isTablet: Platform.OS === "ios" && height / width < 1.6,

    // Platform specific
    isIOS: Platform.OS === "ios",
    isAndroid: Platform.OS === "android",
    isIphoneX: isIphoneX(),

    // Status bar heights
    statusBarHeight: Platform.select({
        ios: isIphoneX() ? 44 : 20,
        android: StatusBar.currentHeight,
        default: 0,
    }),

    // Bottom spacing for iPhone X and newer
    bottomSpace: isIphoneX() ? 34 : 0,

    // Navigation heights
    headerHeight: Platform.select({
        ios: isIphoneX() ? 88 : 64,
        android: 56,
        default: 64,
    }),

    bottomTabHeight: Platform.select({
        ios: isIphoneX() ? 84 : 49,
        android: 56,
        default: 49,
    }),

    // Device specific margins and paddings
    safeAreaInsets: {
        top: Platform.select({
            ios: isIphoneX() ? 44 : 20,
            android: StatusBar.currentHeight,
            default: 0,
        }),
        bottom: Platform.select({
            ios: isIphoneX() ? 34 : 0,
            default: 0,
        }),
        horizontal: Platform.select({
            ios: isIphoneX() ? 16 : 0,
            default: 0,
        }),
    },

    // Breakpoints
    breakpoints: {
        phone: 0,
        tablet: 768,
        desktop: 1024,
    },

    // Common component sizes
    buttonHeight: Platform.select({
        ios: 44,
        android: 48,
        default: 44,
    }),

    inputHeight: Platform.select({
        ios: 44,
        android: 48,
        default: 44,
    }),

    // Touch targets
    touchableMinHeight: 44,
    touchableMinWidth: 44,

    // Border radius
    borderRadius: {
        small: 4,
        medium: 8,
        large: 12,
        extraLarge: 24,
    },

    // Z-index
    zIndex: {
        base: 1,
        card: 10,
        modal: 20,
        overlay: 30,
        popover: 40,
        toast: 50,
    },
};

// Helper types
export type MetricsType = typeof metrics;
export type BreakpointType = keyof typeof metrics.breakpoints;
export type BorderRadiusType = keyof typeof metrics.borderRadius;
export type ZIndexType = keyof typeof metrics.zIndex;

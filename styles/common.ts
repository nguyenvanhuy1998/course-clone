import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { metrics, spacing, typography } from "@/constants";

type Style = ViewStyle | TextStyle;

export const square = (size: number): Style => ({
    width: size,
    height: size,
});

export const commonStyles = StyleSheet.create({
    // Layout & Flexbox
    flex1: {
        flex: 1,
    },
    flexGrow1: {
        flexGrow: 1,
    },
    row: {
        flexDirection: "row",
    },
    rowCenter: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rowAround: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    rowWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    column: {
        flexDirection: "column",
    },
    columnCenter: {
        flexDirection: "column",
        alignItems: "center",
    },

    // Alignment & Positioning
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    alignCenter: {
        alignItems: "center",
    },
    alignStart: {
        alignItems: "flex-start",
    },
    alignEnd: {
        alignItems: "flex-end",
    },
    justifyCenter: {
        justifyContent: "center",
    },
    justifyStart: {
        justifyContent: "flex-start",
    },
    justifyEnd: {
        justifyContent: "flex-end",
    },
    justifyBetween: {
        justifyContent: "space-between",
    },
    justifyAround: {
        justifyContent: "space-around",
    },

    // Dimensions
    fullWidth: {
        width: "100%",
    },
    fullHeight: {
        height: "100%",
    },

    // Spacing
    paddingSm: { padding: spacing.sm },
    paddingMd: { padding: spacing.md },
    paddingLg: { padding: spacing.lg },

    marginSm: { margin: spacing.sm },
    marginMd: { margin: spacing.md },
    marginLg: { margin: spacing.lg },

    gapSm: { gap: spacing.sm },
    gapMd: { gap: spacing.md },
    gapLg: { gap: spacing.lg },

    // Borders & Shadows
    roundedSm: { borderRadius: metrics.borderRadius.small },
    roundedMd: { borderRadius: metrics.borderRadius.medium },
    roundedLg: { borderRadius: metrics.borderRadius.large },

    border: {
        width: 1,
        borderStyle: "solid",
    },

    // Position
    absolute: {
        position: "absolute",
    },
    relative: {
        position: "relative",
    },
    absoluteFill: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    // Z-Index
    zIndexBase: { zIndex: metrics.zIndex.base },
    zIndexModal: { zIndex: metrics.zIndex.modal },
    zIndexOverlay: { zIndex: metrics.zIndex.overlay },

    // Typography
    textCenter: {
        textAlign: "center",
    },
    textLeft: {
        textAlign: "left",
    },
    textRight: {
        textAlign: "right",
    },

    // Containers
    container: {
        flex: 1,
        padding: spacing.md,
    },
    card: {
        padding: spacing.md,
        borderRadius: metrics.borderRadius.medium,
        backgroundColor: "white",
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
        }),
    },
});

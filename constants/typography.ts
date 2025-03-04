import { scale } from "react-native-size-matters";

// Font family config
const fontFamily = {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    semiBold: "Poppins-SemiBold",
    bold: "Poppins-Bold",
    light: "Poppins-Light",
    italic: "Poppins-Italic",
};
// Font size base
const FONT_SIZE_BASE = 16;

export const typography = {
    // Heading styles
    heading: {
        h1: {
            fontFamily: fontFamily.bold,
            fontSize: scale(FONT_SIZE_BASE * 2), // 32
            lineHeight: scale(FONT_SIZE_BASE * 2.5), // 40
            letterSpacing: -0.5,
        },
        h2: {
            fontFamily: fontFamily.bold,
            fontSize: scale(FONT_SIZE_BASE * 1.5), // 24
            lineHeight: scale(FONT_SIZE_BASE * 2), // 32
            letterSpacing: -0.3,
        },
        h3: {
            fontFamily: fontFamily.semiBold,
            fontSize: scale(FONT_SIZE_BASE * 1.25), // 20
            lineHeight: scale(FONT_SIZE_BASE * 1.75), // 28
            letterSpacing: -0.2,
        },
        h4: {
            fontFamily: fontFamily.semiBold,
            fontSize: scale(FONT_SIZE_BASE * 1.125), // 18
            lineHeight: scale(FONT_SIZE_BASE * 1.5), // 24
            letterSpacing: -0.1,
        },
    },
    // Body text styles
    body: {
        large: {
            fontFamily: fontFamily.regular,
            fontSize: scale(FONT_SIZE_BASE * 1.125), // 18
            lineHeight: scale(FONT_SIZE_BASE * 1.75), // 28
        },
        regular: {
            fontFamily: fontFamily.regular,
            fontSize: scale(FONT_SIZE_BASE), // 16
            lineHeight: scale(FONT_SIZE_BASE * 1.5), // 24
        },
        small: {
            fontFamily: fontFamily.regular,
            fontSize: scale(FONT_SIZE_BASE * 0.875), // 14
            lineHeight: scale(FONT_SIZE_BASE * 1.25), // 20
        },
        xsmall: {
            fontFamily: fontFamily.regular,
            fontSize: scale(FONT_SIZE_BASE * 0.75), // 12
            lineHeight: scale(FONT_SIZE_BASE), // 16
        },
    },
    // Button text styles
    button: {
        large: {
            fontFamily: fontFamily.medium,
            fontSize: scale(FONT_SIZE_BASE * 1.125), // 18
            lineHeight: scale(FONT_SIZE_BASE * 1.5), // 24
        },
        regular: {
            fontFamily: fontFamily.medium,
            fontSize: scale(FONT_SIZE_BASE), // 16
            lineHeight: scale(FONT_SIZE_BASE * 1.25), // 20
        },
        small: {
            fontFamily: fontFamily.medium,
            fontSize: scale(FONT_SIZE_BASE * 0.875), // 14
            lineHeight: scale(FONT_SIZE_BASE * 1.125), // 18
        },
    },
    // Label styles
    label: {
        large: {
            fontFamily: fontFamily.medium,
            fontSize: scale(FONT_SIZE_BASE), // 16
            lineHeight: scale(FONT_SIZE_BASE * 1.25), // 20
        },
        regular: {
            fontFamily: fontFamily.medium,
            fontSize: scale(FONT_SIZE_BASE * 0.875), // 14
            lineHeight: scale(FONT_SIZE_BASE * 1.125), // 18
        },
        small: {
            fontFamily: fontFamily.medium,
            fontSize: scale(FONT_SIZE_BASE * 0.75), // 12
            lineHeight: scale(FONT_SIZE_BASE), // 16
        },
    },
    // Special styles
    caption: {
        fontFamily: fontFamily.regular,
        fontSize: scale(FONT_SIZE_BASE * 0.75), // 12
        lineHeight: scale(FONT_SIZE_BASE), // 16
    },
    overline: {
        fontFamily: fontFamily.medium,
        fontSize: scale(FONT_SIZE_BASE * 0.625), // 10
        lineHeight: scale(FONT_SIZE_BASE * 0.875), // 14
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    // Font weights
    weights: {
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
    },
};

// Helper types
export type VariantType =
    | keyof typeof typography.heading
    | keyof typeof typography.body
    | keyof typeof typography.button
    | keyof typeof typography.label
    | "caption"
    | "overline";
export type TypographyType = "heading" | "body" | "button" | "label";
// Utility function with proper typing
export const getFontStyles = (type: TypographyType, variant: VariantType) =>
    typography[type][variant as keyof (typeof typography)[typeof type]];

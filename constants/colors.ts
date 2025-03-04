export const palette = {
    // Brand colors
    blue: {
        100: "#E6F3FF",
        200: "#BAD9F5",
        300: "#7EB6EA",
        400: "#2F95DC", // primary
        500: "#1B7AC5",
        600: "#0D5C9E",
    },
    gray: {
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
    },
    // Semantic colors
    success: {
        light: "#34C759",
        dark: "#32D74B",
    },
    error: {
        light: "#FF3B30",
        dark: "#FF453A",
    },
    warning: {
        light: "#FF9500",
        dark: "#FF9F0A",
    },
    info: {
        light: "#2F95DC",
        dark: "#5AC8FA",
    },
};
export const colors = {
    light: {
        // Primary colors
        primary: palette.blue[400],
        primaryLight: palette.blue[300],
        primaryDark: palette.blue[500],
        // Background colors
        background: {
            default: "#FFFFFF",
            secondary: palette.gray[100],
            tertiary: palette.gray[200],
        },
        // Text colors
        text: {
            primary: palette.gray[900],
            secondary: palette.gray[600],
            tertiary: palette.gray[500],
            inverse: "#FFFFFF",
            disabled: palette.gray[400],
        },
        // Border colors
        border: {
            default: palette.gray[200],
            strong: palette.gray[300],
        },

        // Status colors
        status: {
            success: palette.success.light,
            error: palette.error.light,
            warning: palette.warning.light,
            info: palette.info.light,
        },

        // Component specific
        card: {
            background: "#FFFFFF",
            border: palette.gray[200],
        },
        input: {
            background: "#FFFFFF",
            border: palette.gray[300],
            placeholder: palette.gray[400],
        },
        button: {
            primary: palette.blue[400],
            secondary: palette.gray[200],
            disabled: palette.gray[300],
        },
    },
    dark: {
        // Primary colors
        primary: palette.blue[300],
        primaryLight: palette.blue[200],
        primaryDark: palette.blue[400],

        // Background colors
        background: {
            default: palette.gray[900],
            secondary: palette.gray[800],
            tertiary: palette.gray[700],
        },

        // Text colors
        text: {
            primary: "#FFFFFF",
            secondary: palette.gray[300],
            tertiary: palette.gray[400],
            inverse: palette.gray[900],
            disabled: palette.gray[600],
        },

        // Border colors
        border: {
            default: palette.gray[700],
            strong: palette.gray[600],
        },

        // Status colors
        status: {
            success: palette.success.dark,
            error: palette.error.dark,
            warning: palette.warning.dark,
            info: palette.info.dark,
        },

        // Component specific
        card: {
            background: palette.gray[800],
            border: palette.gray[700],
        },
        input: {
            background: palette.gray[800],
            border: palette.gray[600],
            placeholder: palette.gray[500],
        },
        button: {
            primary: palette.blue[300],
            secondary: palette.gray[700],
            disabled: palette.gray[600],
        },
    },
};
// Helper type để TypeScript tự động gợi ý màu
export type ColorTheme = typeof colors.light;

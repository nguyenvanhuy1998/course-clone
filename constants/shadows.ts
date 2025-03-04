import { Platform } from "react-native";

export const shadows = {
    small: {
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
    medium: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    large: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.2,
                shadowRadius: 12,
            },
            android: {
                elevation: 6,
            },
        }),
    },
};

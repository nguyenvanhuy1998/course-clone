import { metrics, shadows, spacing } from "@/constants";
import { DimensionValue, TextStyle, ViewStyle } from "react-native";

type SpacingKey = keyof typeof spacing;
type FlatSpacing = { [K in SpacingKey]: number };

export const mixins = {
    // Layout & Spacing
    padding: (size: keyof FlatSpacing): ViewStyle => ({
        padding: spacing[size] as DimensionValue,
    }),
    paddingHorizontal: (size: keyof FlatSpacing): ViewStyle => ({
        paddingHorizontal: spacing[size] as DimensionValue,
    }),
    paddingVertical: (size: keyof FlatSpacing): ViewStyle => ({
        paddingVertical: spacing[size] as DimensionValue,
    }),
    margin: (size: keyof FlatSpacing): ViewStyle => ({
        margin: spacing[size] as DimensionValue,
    }),
    marginHorizontal: (size: keyof FlatSpacing): ViewStyle => ({
        marginHorizontal: spacing[size] as DimensionValue,
    }),
    marginVertical: (size: keyof FlatSpacing): ViewStyle => ({
        marginVertical: spacing[size] as DimensionValue,
    }),

    // Border Radius
    roundedCorners: (size: keyof typeof metrics.borderRadius): ViewStyle => ({
        borderRadius: metrics.borderRadius[size],
    }),
    roundedTop: (size: keyof typeof metrics.borderRadius): ViewStyle => ({
        borderTopLeftRadius: metrics.borderRadius[size],
        borderTopRightRadius: metrics.borderRadius[size],
    }),
    roundedBottom: (size: keyof typeof metrics.borderRadius): ViewStyle => ({
        borderBottomLeftRadius: metrics.borderRadius[size],
        borderBottomRightRadius: metrics.borderRadius[size],
    }),

    // Shadows
    boxShadow: (level: keyof typeof shadows): ViewStyle => ({
        ...shadows[level],
    }),

    // Typography
    fontSize: (size: number): TextStyle => ({
        fontSize: size,
    }),

    // Dimensions
    square: (size: number): ViewStyle => ({
        width: size,
        height: size,
    }),
    width: (value: DimensionValue): ViewStyle => ({
        width: value,
    }),
    height: (value: DimensionValue): ViewStyle => ({
        height: value,
    }),

    // Position
    position: (type: "absolute" | "relative"): ViewStyle => ({
        position: type,
    }),
    inset: (value: number): ViewStyle => ({
        top: value,
        right: value,
        bottom: value,
        left: value,
    }),

    // Flex
    flex: (value: number): ViewStyle => ({
        flex: value,
    }),
};

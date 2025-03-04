import { typography, TypographyType, VariantType } from "@/constants";
import { useTheme } from "@/hooks";
import React, { memo } from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
    variant?: VariantType;
    type?: TypographyType;
    color?: string;
    align?: "auto" | "left" | "right" | "center" | "justify";
    numberOfLines?: number;
    selectable?: boolean;
    adjustsFontSizeToFit?: boolean;
}

const Text: React.FC<CustomTextProps> = memo(
    ({
        children,
        variant = "regular",
        type = "body",
        style,
        color,
        align,
        numberOfLines,
        selectable = false,
        adjustsFontSizeToFit = false,
        ...props
    }) => {
        const { colors } = useTheme();

        const getTypographyStyle = () => {
            let baseStyle;

            if (variant === "caption") {
                baseStyle = typography.caption;
            } else if (variant === "overline") {
                baseStyle = typography.overline;
            } else {
                baseStyle =
                    typography[type as keyof typeof typography][
                        variant as keyof (typeof typography)[typeof type]
                    ];
            }

            return StyleSheet.create({
                text: {
                    ...baseStyle,
                    color: color || colors.text.primary,
                    textAlign: align,
                },
            }).text;
        };

        return (
            <RNText
                style={[getTypographyStyle(), style]}
                numberOfLines={numberOfLines}
                selectable={selectable}
                adjustsFontSizeToFit={adjustsFontSizeToFit}
                {...props}
            >
                {children}
            </RNText>
        );
    }
);

// Display name for debugging
Text.displayName = "Text";

export default Text;

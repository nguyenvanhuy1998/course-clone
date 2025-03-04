import { colors, config } from "@/constants";
import * as SecureStore from "expo-secure-store";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Alert, useColorScheme } from "react-native";

type ThemeType = "light" | "dark" | "system";

export const ThemeContext = createContext<
    | {
          theme: ThemeType;
          colorScheme: "light" | "dark";
          setTheme: (theme: ThemeType) => Promise<void>;
          colors: typeof colors.light;
      }
    | undefined
>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const systemColorScheme = useColorScheme();
    const [theme, setThemeValue] = useState<ThemeType>("system");

    useEffect(() => {
        loadTheme();
    }, []);
    const loadTheme = async () => {
        try {
            const savedTheme = await SecureStore.getItemAsync(
                config.storage.keys.theme
            );
            if (
                savedTheme &&
                ["light", "dark", "system"].includes(savedTheme)
            ) {
                setThemeValue(savedTheme as ThemeType);
            }
        } catch (error) {
            console.error("Error loading theme:", error);
        }
    };
    const setTheme = async (newTheme: ThemeType) => {
        try {
            await SecureStore.setItemAsync(config.storage.keys.theme, newTheme);
            setThemeValue(newTheme);
        } catch (error) {
            console.error("Error saving theme:", error);
            Alert.alert(
                "Lỗi",
                "Không thể lưu cài đặt giao diện. Vui lòng thử lại sau."
            );
        }
    };

    const colorScheme =
        theme === "system" ? systemColorScheme || "light" : theme;

    return (
        <ThemeContext.Provider
            value={{
                theme,
                colorScheme,
                setTheme,
                colors: colors[colorScheme],
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

import { ColorTheme } from "./colors";
import { MetricsType } from "./metrics";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { typography } from "./typography";

export * from "./colors";
export * from "./config";
export * from "./metrics";
export * from "./shadows";
export * from "./spacing";
export * from "./typography";

// Global constants
export const APP_VERSION = "1.0.0";
export const DEFAULT_LANGUAGE = "vi";
export const DEFAULT_THEME = "light";

// Helper types
export type { ColorTheme } from "./colors";
export type { MetricsType, BreakpointType } from "./metrics";
export type { ThemeType } from "./config";
// Theme interface
export interface Theme {
    colors: ColorTheme;
    typography: typeof typography;
    spacing: typeof spacing;
    shadows: typeof shadows;
    metrics: MetricsType;
}

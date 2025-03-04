import { API_CONFIG } from "./config";

export * from "./endpoints";
export * from "./config";
export * from "./types";

// Helper functions
export const getFullUrl = (endpoint: string) =>
    `${API_CONFIG.baseURL}/api/${API_CONFIG.version}${endpoint}`;

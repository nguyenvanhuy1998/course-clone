export interface ApiResponse<T = any> {
    data: T;
    status: number;
    message: string;
}
// API Error Type
export interface ApiError {
    code: string;
    message: string;
    status: number;
}
// Generic API Types
export type Endpoint = string | ((id: string) => string);

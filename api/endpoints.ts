export const API_ENDPOINTS = {
    auth: {
        login: "/auth/login",
        register: "/auth/register",
        logout: "/auth/logout",
        refresh: "/auth/refresh",
    },
    user: {
        profile: "/user/profile",
        update: "/user/update",
        avatar: "/user/avatar",
    },
    courses: {
        list: "/courses",
        detail: (id: string) => `/courses/${id}`,
        lessons: (id: string) => `/courses/${id}/lessons`,
    },
    resources: {
        videos: "/resources/videos",
        documents: "/resources/documents",
    },
} as const;

export const config = {
    // API Configuration
    api: {
        baseURL: "https://api.yourapp.com",
        version: "v1",
        timeout: 10000,
        endpoints: {
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
                detail: "/courses/:id",
                lessons: "/courses/:id/lessons",
            },
            resources: {
                videos: "/resources/videos",
                documents: "/resources/documents",
            },
        },
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "vi",
        },
    },

    // Storage Keys
    storage: {
        keys: {
            authToken: "@auth_token",
            refreshToken: "@refresh_token",
            user: "@user_data",
            theme: "@app_theme",
            language: "@app_language",
            onboarding: "@onboarding_completed",
            courseProgress: "@course_progress",
        },
    },

    // App Settings
    app: {
        name: "Course App",
        version: "1.0.0",
        buildNumber: 1,
        defaultLanguage: "vi",
        supportedLanguages: ["en", "vi"],
        theme: {
            default: "light",
            supported: ["light", "dark", "system"],
        },
        contact: {
            email: "support@yourapp.com",
            phone: "+84123456789",
            website: "https://yourapp.com",
        },
    },

    // Media Limits
    media: {
        image: {
            maxSize: 5 * 1024 * 1024, // 5MB
            maxWidth: 1920,
            maxHeight: 1080,
            allowedTypes: ["jpg", "jpeg", "png", "gif"],
            quality: 0.8,
        },
        video: {
            maxSize: 100 * 1024 * 1024, // 100MB
            maxDuration: 300, // 5 minutes
            allowedTypes: ["mp4", "mov"],
        },
        document: {
            maxSize: 10 * 1024 * 1024, // 10MB
            allowedTypes: ["pdf", "doc", "docx"],
        },
    },

    // Cache Configuration
    cache: {
        ttl: 60 * 60 * 1000, // 1 hour
        maxSize: 50 * 1024 * 1024, // 50MB
        version: "1.0",
    },

    // Analytics & Tracking
    analytics: {
        enabled: true,
        trackingId: "UA-XXXXXXXX-X",
        logEvents: true,
        sessionTimeout: 30, // minutes
    },

    // Error Messages
    errors: {
        network: {
            timeout: "Kết nối mạng quá chậm",
            offline: "Không có kết nối mạng",
            serverError: "Lỗi máy chủ, vui lòng thử lại sau",
        },
        auth: {
            invalidCredentials: "Email hoặc mật khẩu không đúng",
            sessionExpired: "Phiên đăng nhập đã hết hạn",
        },
    },

    // Feature Flags
    features: {
        darkMode: true,
        offlineMode: true,
        pushNotifications: true,
        videoStreaming: true,
        chat: false,
    },

    // Security
    security: {
        passwordMinLength: 8,
        passwordRequirements: {
            uppercase: true,
            lowercase: true,
            numbers: true,
            symbols: true,
        },
        sessionTimeout: 60 * 60 * 1000, // 1 hour
        maxLoginAttempts: 5,
    },

    // Pagination
    pagination: {
        defaultLimit: 10,
        maxLimit: 50,
        scrollThreshold: 0.8,
    },
};

// Helper types
export type ApiEndpoint = keyof typeof config.api.endpoints;
export type StorageKey = keyof typeof config.storage.keys;
export type SupportedLanguage = (typeof config.app.supportedLanguages)[number];
export type ThemeType = (typeof config.app.theme.supported)[number];

export function useErrorBoundary() {
    const throwError = (error: Error) => {
        throw error;
    };

    return { throwError };
}

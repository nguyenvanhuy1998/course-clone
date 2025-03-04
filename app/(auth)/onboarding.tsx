import { Text } from "@/components";
import { useErrorBoundary, useTheme } from "@/hooks";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

// export const BuggyButton = () => {
//     const [count, setCount] = useState(0);
//     const { colors } = useTheme();
//     const { throwError } = useErrorBoundary();

//     if (count === 5) {
//         // Cố tình tạo lỗi khi count = 5
//         throwError(new Error("Đã xảy ra lỗi khi nhấn nút 5 lần!"));
//     }

//     return (
//         <TouchableOpacity
//             style={[styles.button, { backgroundColor: colors.primary }]}
//             onPress={() => setCount((c) => c + 1)}
//         >
//             <Text style={[styles.text, { color: colors.text.inverse }]}>
//                 Nhấn {5 - count} lần nữa để tạo lỗi
//             </Text>
//         </TouchableOpacity>
//     );
// };
const OnboardingScreen = () => {
    const { colors } = useTheme();

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: colors.background.default },
            ]}
        >
            {/* Error Boundary */}
            {/* <BuggyButton /> */}
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
    },
});

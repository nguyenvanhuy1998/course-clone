import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Trang chủ",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="courses"
                options={{
                    title: "Khóa học",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="book" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="resources"
                options={{
                    title: "Videos",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome
                            name="play-circle"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Tôi",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

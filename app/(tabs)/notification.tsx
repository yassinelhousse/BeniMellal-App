import { ImageBackground, View, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function () {
    const scale = useSharedValue(1.2);
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(360);

    useEffect(() => {
        scale.value = withTiming(1, { duration: 3000 });
        opacity.value = withTiming(1, { duration: 1000 });
        translateY.value = withTiming(0, { duration: 1000, delay: 500 })
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value
    }));
    const tapAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));




    return (
        <SafeAreaView style={{ backgroundColor: "#E0F4FF", flex: 1 }} >
            <View>
                <TouchableOpacity onPress={() => router.push("/Cart")} style={{ margin: 10 }}>
                    <Ionicons name="arrow-back-circle-outline" size={35} color="#007ACC" />
                </TouchableOpacity>
            </View>


            <Animated.View style={[styles.papa, animatedStyle]}>
                <View style={styles.empty}>
                    <Text style={styles.emptext}>Empty</Text>
                </View>
            </Animated.View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    papa: {
        flex: 1, justifyContent: "center", alignItems: "center",
    },
    empty: {
        justifyContent: "center", alignItems: "center", backgroundColor: "white", width: 200, height: 150,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10
    },
    emptext: { fontSize: 20, color: "#007ACC" }
})


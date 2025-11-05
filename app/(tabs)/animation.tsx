import { BlurView } from 'expo-blur';
import { View, Text, Animated, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';

export default function GlassAnim() {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.container, {
      opacity,
      transform: [{ translateY }]
    }]}>
      <BlurView intensity={70} tint="light" style={styles.glass}>
        <Text style={styles.text}>Welcome 🔥</Text>
      </BlurView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: 120
  },
  glass: {
    width: 250,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  }
});

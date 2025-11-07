import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const favoriteKeys = keys.filter((key) => key.startsWith("favorite:"));
      const favoriteItems = await AsyncStorage.multiGet(favoriteKeys);

      const parsedFavorites = favoriteItems.map(([_, value]) => JSON.parse(value || "{}"));
      setFavorites(parsedFavorites.filter(item => item && item.id)); // remove empty values
    } catch (error) {
      console.log("Error loading favorites:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeFavorite = async (id: string) => {
    try {
      await AsyncStorage.removeItem(`favorite:${id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Error removing favorite:", error);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading favorites...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E0F4FF" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/(tabs)/Cart")}>
          <Ionicons name="arrow-back" size={28} color="#007ACC" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Favorites ❤️</Text>
        <View style={{ width: 28 }} />
      </View>

      {favorites.length === 0 ? (
        <View style={styles.center}>
          <Text style={{ fontSize: 16, color: "#007ACC" }}>No favorites yet </Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scroll}>
          {favorites.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => router.push(`/details/${item.id}`)}
            >
              <Image
                source={{ uri: item.images?.[0] || "https://via.placeholder.com/300x200?text=No+Image" }}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.cardFooter}>
                <Text style={styles.title}>{item.name}</Text>
                
                <TouchableOpacity
                  onPress={(e) => {
                    e.stopPropagation();
                    removeFavorite(item.id);
                  }}
                >
                  <Ionicons name="heart" size={28} color="red" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#E0F4FF",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#007ACC",
  },
  scroll: {
    alignItems: "center",
    paddingBottom: 20,
  },
  card: {
    width: 300,
    height: 400,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: "80%",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffffff",
  },
  title: {
    fontSize: 18,
    color: "#007ACC",
    fontWeight: "bold",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

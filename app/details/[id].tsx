import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";


export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [place, setPlace] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await fetch(`https://6909d0261a446bb9cc201ef7.mockapi.io/places/${id}`);
        const data = await response.json();
        setPlace(data);
      } catch (error) {
        console.error("Error fetching place:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPlace();
  }, [id]);

  if (loading || !place) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4DB8C7" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              place.thumbnail ||
              (place.images?.[0]
                ? place.images[0]
                : "https://via.placeholder.com/400x250?text=No+Image"),
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>{place.name}</Text>
          
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>Caribbean Sea</Text>
          </View>

          <View style={styles.ratingContainer}>
            <View style={styles.stars}>
              <Text style={styles.starIcon}>⭐</Text>
              <Text style={styles.starIcon}>⭐</Text>
              <Text style={styles.starIcon}>⭐</Text>
              <Text style={styles.starIcon}>⭐</Text>
              <Text style={styles.starIconEmpty}>⭐</Text>
            </View>
            <Text style={styles.ratingText}>4.6 (23 reviews)</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{place.description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.tabButton}>
            <Text style={styles.tabButtonTextActive}>Nearby</Text>
          </View>
          <View style={[styles.tabButton, styles.tabButtonInactive]}>
            <Text style={styles.tabButtonText}>Overview</Text>
          </View>
          <View style={[styles.tabButton, styles.tabButtonInactive]}>
            <Text style={styles.tabButtonText}>Review</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  imageContainer: {
    marginTop: 0,
   
  },
  image: {
    width: "100%",
    height: 380,
    borderBottomLeftRadius: 64,
    borderBottomRightRadius: 64,

  },
  content: {
    padding: 20,
    
    
  },
    card: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 32,
    elevation: 8,
    overflow: "hidden",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 12,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  locationText: {
    fontSize: 16,
    color: "#7F8C8D",
    fontWeight: "500",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  stars: {
    flexDirection: "row",
    marginRight: 8,
  },
  starIcon: {
    fontSize: 16,
    color: "#FFC107",
    marginRight: 2,
  },
  starIconEmpty: {
    fontSize: 16,
    color: "#E0E0E0",
  },
  ratingText: {
    fontSize: 14,
    color: "#95A5A6",
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#ECF0F1",
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: "#5D6D7E",
    lineHeight: 24,
    textAlign: "justify",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#4DB8C7",
    borderRadius: 50,
    padding: 8,
    marginTop: 24,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  tabButtonInactive: {
    backgroundColor: "transparent",
  },
  tabButtonTextActive: {
    color: "#4DB8C7",
    fontSize: 15,
    fontWeight: "600",
  },
  tabButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
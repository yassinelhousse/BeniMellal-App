import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [place, setPlace] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  

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
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#007AFF" />
        
      </View>
    );
  }

  return (
    
    <ScrollView className="flex-1 bg-white">
      <Image
      
        source={{
          uri:
            place.thumbnail ||
            (place.images?.[0]
              ? place.images[0]
              : "https://via.placeholder.com/400x250?text=No+Image"),
        }}
        style={{ width: "100%", height: 300 }}
        resizeMode="cover"
      />
      <View className="p-5">
        <Text className="text-3xl font-bold mb-3 text-gray-900">
          {place.name}
          
        </Text>
        <Text className="text-gray-700 text-base leading-relaxed">
          {place.description}
        </Text>
      </View>
    </ScrollView>
  );
}

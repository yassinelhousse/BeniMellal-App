import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";


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
        <TouchableOpacity style={styles.save}
           onPress={() =>{router.push("/Cart")}}>
          
          <Ionicons name="bookmark-outline" size={40} color={ "#f3f6f8ff"} />
        
        </TouchableOpacity>
       
      </View>

      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <BlurView intensity={20} tint="light" style={styles.card}>
            
            
            <Text style={styles.title}>{place.name}</Text>
            
            <View style={styles.locationContainer}>
              <Text style={styles.locationIcon}>📍</Text>
              <Text style={styles.locationText}>Bni Mllal</Text>
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
          </BlurView>
        </View>

        
           <TouchableOpacity style={styles.back}
           onPress={() =>{router.push("/Cart")}}>
          
          <Ionicons name="arrow-back-circle-outline" size={40} color={ "#f4f7f9ff"} />
        
        </TouchableOpacity>

 
        </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F4FF",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  imageContainer: {
 
  },
  image: {
    width: "100%",
    height: 400,
    borderBottomRightRadius:60,
    borderBottomLeftRadius:60,

  },
  content: {
    padding: 20,
    
  },
  save:{
    top:-380,
    left:380,

  },
  back:{
    top:-750,

  },
  cardWrapper: {
    zIndex: 1,
    marginTop: -98,
    backgroundColor: "rgba( 255, 255, 255, 0.3 )",
    
    backdropFilter: "blur( 10px )",
    
    borderWidth: 1,
    borderColor: "rgba( 255, 255, 255, 0.18 )",
    
    
    borderRadius: 40,
    width: "85%",
    height:400,
    paddingTop:4,
    marginLeft:30,
    overflow: "hidden",
    
   
  },

  card: {
    
    
    padding: 24,
    
    
    position: "relative",
    overflow: "hidden",
  },



  

  
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#000000ff",
    top:6,
    
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingTop:18,
    fontSize:20,
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  locationText: {
    fontSize: 16,
    color: "#4DB8C7",
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
    fontSize: 20,
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
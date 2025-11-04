import React from "react";
import { ImageBackground, View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect,useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Image } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { router } from "expo-router";
// const { width, height } = Dimensions.get("window");


export default function Homepage() {



    const scale = useSharedValue(1.2); 
    const opacity = useSharedValue(0); 
    const translateY = useSharedValue(360);
    const screenWidth = Dimensions.get("window").width;
    useEffect(() => {
      scale.value = withTiming(1, { duration: 3000 });
      opacity.value = withTiming(1, { duration: 1000 });
      translateY.value=withTiming(0,{duration:1000, delay:500})
    }, []);
    
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      opacity: opacity.value
    }));
    const tapAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));
  


    return (
        <View style={{flex:1}}>
            
            <View >
              <Animated.View style={[styles.imageContainer,  animatedStyle]}>
                   <Image source={require("@/assets/images/home.jpeg")} style={styles.image}/>
                 <View style={{position:"absolute"}}>
                   <Ionicons name="map" size={20} style={{position:"absolute", top:64,
     left:120,}} color="white"/>
                   <Text style={styles.healing}>Morocoo</Text></View>
             </Animated.View>
            </View>

            <Animated.View style={[styles.tap,tapAnimatedStyle]}>
                   <View>
                    <Text style={styles.h1} >Explore your journey only with us</Text>
                   </View>
               
                   <View>
                    <TouchableOpacity  onPress={() => router.push("/Cart")}>
                        <Text style={styles.text}>Go to enjoy </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",gap:40}}>
                        <TouchableOpacity>
                         
                        <Ionicons name="logo-facebook" size={30} color="#007ACC"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Ionicons name="logo-instagram" size={30} color="#007ACC"/>
                        </TouchableOpacity>  
                          <TouchableOpacity>
                        <Ionicons name="logo-twitter" size={30} color="#007ACC"/>
                        </TouchableOpacity>
                    </View>
             </Animated.View>

      

        </View >
    )

}
const styles = StyleSheet.create({
     healing:{position:"absolute",
     color:"white",
     top:60,
     left:150,
     fontWeight:"400",
     fontSize:20,
     fontFamily:"Bold",



   
    },
    imageContainer:{
        width: "100%",
        height: 500,
        overflow: "hidden",

    },
    image: {
        width: 400,
        height: 500,
        position:"relative"

    },
    tap: {
        position:"absolute",
        flex: 1,
        top:400,
        backgroundColor: "#E0F4FF",
        height: 400,
        width: 360,
        borderRadius:50,
        justifyContent:"space-evenly",
        alignItems: "center",
    },
    text:{
       backgroundColor:"#007AFF",
       borderRadius:20,
       width:200,
       height:40,
       color:"white",
       textAlign:"center",
       paddingTop:8,
       fontWeight:"bold",
    },
    h1:{
        fontWeight:"500",
        fontSize:30,
        margin:20,
        textAlign:"center",
        fontFamily:"Bold"
    
        
    }
  
})
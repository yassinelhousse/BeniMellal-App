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

    const screenWidth = Dimensions.get("window").width;

    const scale = useSharedValue(1.2); 
    const opacity = useSharedValue(0); 
    const translateY = useSharedValue(360);
  
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
            
            <View style={{height:"100%"}} >
              <Animated.View style={[styles.imageContainer,  animatedStyle]}>
                   <Image source={require("@/assets/images/ahmed.jpeg")} style={styles.image}/>
                 <View style={styles.haparent}>
                   <Ionicons name="map" size={20} style={{position:"absolute",left:"19%",}} color="white"/>
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
                    <View style={{flexDirection:'row',gap:40}}>
                        <TouchableOpacity>
                            <Text style={styles.text1}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text1} >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                   
               
             </Animated.View>

      

        </View >
    )

}
const styles = StyleSheet.create({
    haparent:{position:"absolute",top:"9%",left:"25%",gap:20,width:"40%"},
     healing:{position:"absolute",
     color:"white",
     top:"40%",
     left:"35%",
     fontWeight:"400",
     fontSize:20,
     fontFamily:"Bold",
    },
    imageContainer:{
        width: "100%",
        height: "100%",
        overflow: "hidden",

    },
    image: {
        width: "100%",
        height: "100%",
        position:"relative"

    },
    tap: {
        position:"absolute",
        flex: 1,
        marginLeft:"5%",
        top:"50%",
        height: "45%",
        width: "90%",
        borderRadius:50,
        justifyContent:"space-evenly",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.15)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.4)",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
      },
      
      
  
    text:{
       backgroundColor:"#007AFF",
       borderRadius:20,
       width:"130%",
       height:40,
       color:"white",
       textAlign:"center",
       paddingTop:8,
       fontWeight:"bold",
       alignSelf:"center"
    },
    text1:{   backgroundColor:"#007AFF",
    borderRadius:20,
    width:"150%",
   
    height:45,
    color:"white",
    textAlign:"center",
    textAlignVertical:"center",
    fontWeight:"bold",
    alignSelf:"center",},
    h1:{
        color:'white',
        fontWeight:"500",
        fontSize:30,
        margin:20,
        textAlign:"center",
        fontFamily:"Bold",
        elevation:1
    
        
    }
  
})
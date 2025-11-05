import React from "react";
import { ImageBackground, View, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Image } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { router } from "expo-router";
const { width, height } = Dimensions.get("window");


export default function profil() {
    return (
        <SafeAreaView style={{ backgroundColor: "#E0F4FF" }} >
            <View style={{ backgroundColor: "#E0F4FF", width: width, height: height,padding:20 }}>
                <View style={{  flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 20, backgroundColor: "white", alignItems: "center", justifyContent: "center" }} 
                     onPress={() => router.push("/Cart")}>
                        <Ionicons name="arrow-back-circle-outline" size={30} color='#007ACC' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 20, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                        <Ionicons name="pencil-outline" size={20} color='#007ACC' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 20, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                        <Ionicons name="settings" size={20} color='#007ACC' />
                    </TouchableOpacity>

                </View>
                <View style={styles.prof}>
                       <Image source={{ uri: "https://i.pinimg.com/1200x/76/68/25/76682592afd92c031352d29870274983.jpg" }} 
                       style={{width:120,height:120,borderRadius:60,marginBottom:50}}/>
                       <TextInput placeholder="Fulle name" style={styles.inpt}/>
                       <TextInput placeholder="Email" style={styles.inpt1}/>
                       <TextInput placeholder="Password" style={styles.inpt2}/>
                       <TouchableOpacity>
                            <Text>Submit</Text>
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




            </View>
            
        </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    prof:
    {alignItems:'center',
    width:"100%",
    height:500,
    marginTop:20,
    justifyContent:"center",
    backgroundColor: "rgba(255,255,255,0.15)",
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.4)",
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
},
 inpt:{

    width:300,
    height:50,
    marginBottom:20,
    borderBottomWidth: 1,        
    borderBottomColor: "#007ACC",  
    fontSize: 16,
    paddingVertical: 5,
    
 },
 inpt1:{
    width:300,
    height:50,
    marginBottom:20,
    borderBottomWidth: 1,        
    borderBottomColor: "white",  
    fontSize: 16,
    paddingVertical: 5,
 
 

 },
 inpt2:{
    width:300,
    height:50,
    marginBottom:20,
    borderBottomWidth: 1,        
    borderBottomColor: "#007ACC",  
    fontSize: 16,
    paddingVertical: 5,
 }
})

import React, { useEffect, useState, useRef } from "react";
import { ScrollView, Image, View, Text, FlatList, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export default function () {
    const [data, setData] = useState([]);

useEffect(() => {
    axios.get("https://dummyjson.com/products")
        .then(res => setData(res.data.products))
        .catch(err => console.error(err));
}, []);
    return (
        <SafeAreaView style={{ backgroundColor: "#E0F4FF" }}>

            <View style={styles.parent}>
              
                <View style={styles.nav}>

                    <View style={styles.profil}>
                        <Image source={{ uri: "https://i.pinimg.com/1200x/76/68/25/76682592afd92c031352d29870274983.jpg" }} style={styles.proimag} />
                    </View>

                    <View style={styles.noti}>
                        <View><Text style={{ color: "#007ACC" }}>Welcome Back</Text></View>
                        <View><Text style={{ fontFamily: "Bold", fontSize: 20, color: "#007ACC" }}>ogee</Text></View>
                    </View>

                    <View style={styles.noti}>
                        <TouchableOpacity>
                            <Ionicons name="notifications-outline" size={30} color='#007ACC' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: "center" }}><TextInput style={styles.inpu} placeholder=" 🔍  Where do you want to go? " /></View>
                <View style={{ width: 200, height: 30, bottom: 15, margin: 15 }}>
                    <Text style={{ fontWeight: "bold", color: "#007ACC", fontSize: 25, top: 10, left: 10 }}>Most Visited</Text>
                </View>


                <ScrollView  >
                    <View style={{ marginTop: 20, alignItems : "center"}}>
                        {data.map((item, index) => (
                            <TouchableOpacity key={index}
                                style={{
                                    marginBottom: 15,
                                    width: 300,
                                    backgroundColor: "#fff",
                                    height: 400,
                                    marginRight: 10,
                                    borderRadius: 20,
                                    overflow: "hidden",
                                    
                                }}>
                                <Image source={{ uri: item.images[0] }} style={{ width: "100%", height: "100%",position:"absolute" }} resizeMode="cover" />
                                <View style={{marginTop:300}}>
                                <Text style={{fontSize:30,}}>{item.title}</Text>
                                <Text>{item.price} </Text>
                                </View>
                            </TouchableOpacity>

                        ))}
                    </View>
                </ScrollView >

                <View style={styles.tapbar}>
                    <TouchableOpacity onPress={() => router.push("/(tabs)")} >
                        <Ionicons name="arrow-back-circle-outline" size={35} color="#007ACC"/>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Ionicons name="home" size={30} color="#007ACC" />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => router.push("/profil")}>
                        <Ionicons name="person-circle-outline" size={35} color='#007ACC' />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => router.push("/animation")} >
                        <Ionicons name="heart" size={30} color="#007ACC" />
                    </TouchableOpacity>
                </View>


            </View>

        </SafeAreaView>

    )
};
const styles = StyleSheet.create({
    parent: {
        width: "100%",
        height: "100%",


    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        
    },
    profil: {

        height: 40,
        borderRadius: 50,

    },
    proimag: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    noti: {
        paddingTop: 10

    },
    inpu: {
        borderRadius: 15,
     
     
        width: 300,
        backgroundColor: "rgba(255,255,255,0.15)",
        borderWidth: 1,
        borderColor: "#007ACC",
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 4 },
        

    },
    tapbar: {

        flexDirection: "row",
        justifyContent: "space-around",
      
        borderRadius: 50,
        padding: 5,
        width: 300,
        height: 50,
        bottom: 30,
        left: 35,
       
        backgroundColor: "rgba(255,255,255,0.15)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.4)",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },


    }


})






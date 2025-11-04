
import React, { useEffect, useState, useRef } from "react";
import { ScrollView, Image, View, Text, FlatList, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function () {
    return (
        <SafeAreaView style={{ backgroundColor: "#E0F4FF"}}>
          
                <View style={styles.parent}>
                    <View style={styles.nav}>

                        <View style={styles.profil}>
                            <Image source={{ uri: "https://i.pinimg.com/1200x/76/68/25/76682592afd92c031352d29870274983.jpg" }} style={styles.proimag} />
                        </View>

                        <View style={styles.noti}>
                            <View><Text>Welcome Back</Text></View>
                            <View><Text style={{ fontFamily: "Bold", fontSize: 20 }}>ogee</Text></View>
                        </View>

                        <View style={styles.noti}>
                            <TouchableOpacity>
                                <Ionicons name="notifications-outline" size={30} color='#007ACC' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}><TextInput style={styles.inpu} placeholder=" 🔍  Search..." /></View>

                </View>
                
            <SafeAreaView style={{}}>
               






            </SafeAreaView>
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
        padding: 15
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
        elevation: 5,
        backgroundColor: "white",
        width: 300,

    }


})






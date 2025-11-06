
import React, { useEffect, useState, useRef } from "react";
import { ScrollView, Image, View, Text, FlatList, StyleSheet, TouchableOpacity, Animated, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fetchPlaces } from "@/services/api";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { Link, router } from "expo-router";

export default function () {
    const [data, setData] = useState([]);
    const [search, setsearch] = useState("");
    const [originalData, setOriginalData] = useState([]);
    const [activtab, setActivtab] = useState("home")

    useEffect(() => {
        const loadPlaces = async () => {
            try {
                const data = await fetchPlaces();
                setData(data);
                setOriginalData(data)
            } catch (error) {
                console.log("Error loading places", error)
            }
        };
        loadPlaces();
    }, []);
    const Search = (text) => {
        setsearch(text);
        if (text.trim() === "") {
            setData(originalData);
            return;
        }

        const filtered = originalData.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );

        setData(filtered);
    };


    return (
        <SafeAreaView style={{ backgroundColor: "#E0F4FF" }}>

            <View style={styles.parent}>

                <View style={styles.nav}>

                    <View style={styles.profil}>
                        <Image source={{ uri: "https://i.pinimg.com/1200x/76/68/25/76682592afd92c031352d29870274983.jpg" }} style={styles.proimag} />
                    </View>

                    <View style={styles.noti}>
                        <View><Text style={{ color: "#007ACC" }}>Welcome Back</Text></View>
                        <View><Text style={styles.ogee}>ogee</Text></View>
                    </View>

                    <View style={styles.noti}>
                        <TouchableOpacity>
                            <Ionicons name="notifications-outline" onPress={() => { router.push("/notification") }} size={30} color='#007ACC' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: "center", marginBottom: 10 }}><TextInput value={search} onChangeText={Search} style={styles.inpu} placeholder=" 🔍  Where do you want to go? " /></View>



                <ScrollView style={{ flex: 1 }}>
                    <View style={{ marginTop: 20, alignItems: "center", }}>
                        {data.map((item, index) => (

                            <TouchableOpacity key={index}
                                onPress={() => { router.push(`/details/${item.id}`) }}
                                style={styles.card}>
                                <Image source={{ uri: item.images[0] }} style={{ width: "100%", height: "100%", position: "absolute" }} resizeMode="cover" />
                                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                    <Text style={styles.titel}>{item.name}</Text>


                                </View>
                                <TouchableOpacity style={styles.hart}>
                                    <Ionicons name="heart" size={30} color="red" />
                                </TouchableOpacity>

                            </TouchableOpacity>


                        ))}

                    </View>
                </ScrollView >

                <View style={styles.tapbar}>
                    <TouchableOpacity onPress={() => {
                        router.push("/(tabs)");
                        setActivtab("back");
                    }} >
                        <Ionicons name="arrow-back-circle-outline" size={35} color={activtab === "back" ? "#007ACC" : "#007ACC"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActivtab("home")}>
                        <Ionicons name="home" size={30} color={activtab === "home" ? "#004E89" : "#007ACC"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        router.push("/profil");
                        setActivtab("profile")
                    }}>
                        <Ionicons name="person-circle-outline" size={35} color={activtab === "profile" ? "#004E89" : "#007ACC"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActivtab("heart")}>
                        <Ionicons name="heart" size={30} color={activtab === "heart" ? "red" : "#007ACC"} />
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
    titel: {
        fontSize: 25, color: "#007ACC", backgroundColor: "#E0F4FF",
        borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    },
    ogee: { fontFamily: "Bold", fontSize: 20, color: "#007ACC" },
    card: {
        marginBottom: 15,
        width: 300,
        height: 400,
        marginRight: 10,
        borderRadius: 30,
        overflow: "hidden",

    },
    hart: { marginTop: 300, backgroundColor: "#E0F4FF", width: 35, height: 35, borderRadius: 50, marginLeft: "45%", padding: 3 },
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

        left: 35,



    }


})






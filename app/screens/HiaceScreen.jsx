import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
const avatar = require("../../assets/avatar/avatar.jpg");
import cars from "../data/cars";

const { width } = Dimensions.get("window");

const gradient = [colors["dark-gray"], colors.black];

// import { REACT_NATIVE_APP_API_KEY } from '@env'

const API = process.env.REACT_NATIVE_APP_API_KEY
console.log(process.env.REACT_NATIVE_APP_API_KEY)
const HiaceScreen = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        let carsURL = `${process.env.REACT_NATIVE_APP_API_KEY}carRegistration/hiace`
        console.log(carsURL)
        fetch(carsURL)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))

    }, [cars]);

    console.log(data)
    return (
        <SafeAreaView>
            <ScrollView >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <LinearGradient
                        style={{
                            height: SPACING * 4,
                            width: SPACING * 4,
                            borderRadius: SPACING * 2,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        colors={[colors.light, colors["dark-gray"]]}
                    >
                        <TouchableOpacity
                            style={{
                                height: SPACING * 3,
                                width: SPACING * 3,
                                backgroundColor: colors.black,
                                borderRadius: SPACING * 1.5,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="dots-horizontal"
                                color={colors.light}
                                size={SPACING * 2}
                            />
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                        style={{
                            height: SPACING * 4,
                            width: SPACING * 4,
                            borderRadius: SPACING * 2,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        colors={[colors.light, colors["dark-gray"]]}
                    >
                        <TouchableOpacity
                            style={{
                                height: SPACING * 3,
                                width: SPACING * 3,
                                backgroundColor: colors.black,
                                borderRadius: SPACING * 1.5,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={avatar}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: SPACING * 2,
                                }}
                            />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>



                <View
                    style={{
                        marginVertical: SPACING * 3,
                    }}
                >
                    <Text
                        style={{
                            color: colors.light,
                            fontSize: SPACING * 2,
                            fontWeight: "600",
                        }}
                    >
                        Available Cars
                    </Text>
                    <View
                        style={{
                            marginTop: SPACING * 2,
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}
                    >
                        {data.map((car) => (
                            <LinearGradient
                                key={car.id}
                                colors={gradient}
                                style={{
                                    height: 230,
                                    width: width / 2 - SPACING * 3,
                                    borderRadius: SPACING * 2,
                                    marginBottom: SPACING * 2,
                                    padding: SPACING,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Ionicons
                                            name="star"
                                            color={colors.yellow}
                                            size={SPACING * 1.6}
                                        />
                                        <Text
                                            style={{
                                                color: colors.light,
                                                marginLeft: SPACING / 2,
                                            }}
                                        >
                                            {car.rating}
                                        </Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Ionicons
                                            name="heart"
                                            color={colors.light}
                                            size={SPACING * 2}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <Image
                                    style={{
                                        width: "100%",
                                        height: 100,
                                    }}
                                    source={car.image}
                                    resizeMode="contain"
                                />
                                <Text
                                    style={{
                                        fontSize: SPACING * 1.8,
                                        color: colors.light,
                                    }}
                                >
                                    {car.companyName}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: SPACING * 1.8,
                                        color: colors.light,
                                    }}
                                >
                                    {car.model}
                                </Text>

                                <Text
                                    style={{
                                        fontSize: SPACING * 1.8,
                                        color: colors.light,
                                    }}
                                >
                                    {car.modelYear}
                                </Text>
                                <View
                                    style={{
                                        marginVertical: SPACING,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: colors.light,
                                            fontSize: SPACING * 1.5,
                                        }}
                                    >
                                        PKR {car.rent}
                                    </Text>
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: SPACING / 2,
                                            overflow: "hidden",
                                        }}
                                    >
                                        <LinearGradient
                                            style={{
                                                padding: SPACING / 3,
                                                paddingHorizontal: SPACING / 2,
                                            }}
                                            colors={[colors["dark-gray"], colors.dark]}
                                        >
                                            <Ionicons
                                                name="arrow-forward"
                                                size={SPACING * 2}
                                                color={colors.light}
                                            />
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HiaceScreen;

const styles = StyleSheet.create({});

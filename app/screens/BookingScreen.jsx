import {
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import COLOR from "../config/COLOR";
import SPACING from "../config/SPACING";
// import Ionicons from "@expo/vector-icons/Ionicons";
import cars from "../data/cars";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";



const BookingScreen = () => {

    const [data, setData] = useState([])
    return (
        <>
            <ScrollView>
                <ImageBackground
                    source={colors.dark}
                    style={{ width: "100%", height: 500 }}
                >
                    <SafeAreaView>
                        <View
                            style={{
                                paddingHorizontal: SPACING,
                                justifyContent: "space-between",
                                flexDirection: "row",
                                height: "100%",
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLOR.white,
                                    width: SPACING * 4,
                                    height: SPACING * 4,
                                    borderRadius: SPACING * 2,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="chevron-back"
                                    color={COLOR.primary}
                                    size={SPACING * 3}
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    alignItems: "flex-end",
                                    justifyContent: "space-between",
                                    paddingBottom: SPACING * 8,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: COLOR.white,
                                        width: SPACING * 4,
                                        height: SPACING * 4,
                                        borderRadius: SPACING * 2,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        name="heart-outline"
                                        color={COLOR.primary}
                                        size={SPACING * 3}
                                    />
                                </TouchableOpacity>
                                <View>
                                    {data.map((car) => (
                                        <TouchableOpacity
                                            style={{
                                                width: SPACING * 6,
                                                height: SPACING * 6,
                                                padding: SPACING / 2,
                                                backgroundColor: COLOR.white,
                                                borderRadius: SPACING,
                                                marginBottom: SPACING,
                                            }}
                                        // key={index}
                                        >
                                            <Image
                                                source={car.image}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: SPACING,
                                                }}
                                            />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
                <View
                    style={{
                        backgroundColor: COLOR.white,
                        padding: SPACING * 2,
                        borderRadius: SPACING * 3,
                        bottom: SPACING * 3,
                    }}
                >
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between" }}
                    >
                        <Text
                            style={{
                                fontSize: SPACING * 2,
                                fontWeight: "bold",
                                color: COLOR.dark,
                            }}
                        >
                            {car.title}
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                            <Text
                                style={{
                                    fontSize: SPACING * 2,
                                    fontWeight: "bold",
                                    color: COLOR.dark,
                                }}
                            >
                                {car.price}
                            </Text>
                            <Text>/person</Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: SPACING * 2 }}>
                        <View style={{ flexDirection: "row", marginBottom: SPACING * 2 }}>
                            <TouchableOpacity
                                style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
                            >
                                <Text
                                    style={{
                                        color: COLOR.primary,
                                        fontWeight: "bold",
                                        fontSize: SPACING * 1.7,
                                    }}
                                >
                                    Overview
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
                            >
                                <Text>Reviews</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: SPACING * 2, flexDirection: "row" }}>
                            <View style={{ flexDirection: "row" }}>
                                <View
                                    style={{
                                        backgroundColor: COLOR.white,
                                        shadowColor: COLOR.dark,
                                        shadowOffset: { width: SPACING / 2, height: SPACING },
                                        shadowRadius: SPACING / 2,
                                        shadowOpacity: 0.1,
                                        padding: SPACING / 2,
                                        borderRadius: SPACING / 2,
                                        marginRight: SPACING,
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        name="time"
                                        size={SPACING * 3}
                                        color={COLOR.primary}
                                    />
                                </View>
                                <View style={{ marginRight: SPACING * 2 }}>
                                    <Text
                                        style={{
                                            fontSize: SPACING + 1,
                                            marginBottom: SPACING / 2,
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Duration
                                    </Text>
                                    {/* <Text style={{ fontSize: SPACING * 1.6, fontWeight: "700" }}>
                                        {car.}
                                    </Text> */}
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View
                                    style={{
                                        backgroundColor: COLOR.white,
                                        shadowColor: COLOR.dark,
                                        shadowOffset: { width: SPACING / 2, height: SPACING },
                                        shadowRadius: SPACING / 2,
                                        shadowOpacity: 0.1,
                                        padding: SPACING / 2,
                                        borderRadius: SPACING / 2,
                                        marginRight: SPACING,
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        name="star"
                                        size={SPACING * 3}
                                        color={COLOR.primary}
                                    />
                                </View>
                                <View style={{ marginRight: SPACING * 2 }}>
                                    <Text
                                        style={{
                                            fontSize: SPACING + 1,
                                            marginBottom: SPACING / 2,
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Rating
                                    </Text>
                                    <Text style={{ fontSize: SPACING * 1.6, fontWeight: "700" }}>
                                        {car.rating}out of 5
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: COLOR.dark }}>
                                {car.name}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View
                style={{ position: "absolute", bottom: SPACING * 2, width: "100%" }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: COLOR.primary,
                        padding: SPACING * 1.5,
                        marginHorizontal: SPACING * 1.6,
                        borderRadius: SPACING * 2,
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            color: COLOR.white,
                            fontSize: SPACING * 2,
                            fontWeight: "bold",
                            marginRight: SPACING * 7,
                            marginLeft: SPACING * 7,
                        }}
                    >
                        Book Now
                    </Text>
                    <MaterialCommunityIcons
                        name="arrow-forward"
                        size={SPACING * 3}
                        color={COLOR.white}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default BookingScreen;

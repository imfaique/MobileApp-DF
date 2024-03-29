import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import SPACING from "../config/SPACING";
import { useNavigation } from '@react-navigation/native';
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const logo = require("../../assets/logos/logo2.png");
import series from "../data/series";
import series1 from "../data/series1";
import series2 from "../data/series2";
import { LinearGradient } from "expo-linear-gradient";

const RatingScreen = () => {

    const navigation = useNavigation();
    const submit = () => {
        // return Alert.alert(userName, password);
        // if (id === '1') {
        //   // Alert.alert(`Thank-You ${userName}`);
        //   navigation.navigate('Car');
        // } else {
        //   navigation.navigate('Hiace');
        // }

    };

    const [booking, setBooking] = useState({
        id: 1,
        passengerName: 'alina',
        pickupLocation: 'north nazimabad',
        dropoffLocation: 'hawsbay',
        pickupTime: '10:00 AM',
    });


    const [defaultRating, setdefaultRating] = useState(2)
    const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5])

    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setdefaultRating(item)}>
                                <Image style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                            ? { uri: starImgFilled }
                                            : { uri: starImgCorner }
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }


    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingVertical: SPACING * 4,
                    }}
                >
                    <Image
                        style={{
                            height: SPACING * 7,
                            width: SPACING * 20,
                        }}
                        source={logo}
                    />
                    <Text
                        style={{
                            color: colors.white,
                            fontSize: SPACING * 3,
                            fontWeight: "150",
                        }}
                    >
                        Rate Us
                    </Text>
                    {/* <Text
              style={{
                color: colors.light,
                marginTop: SPACING / 2,
              }}
            >
              5 Searies
            </Text> */}
                </View>



                {series2.map((item) => (
                    <LinearGradient
                        key={item.id}
                        colors={[colors["dark-gray"], colors.black]}
                        style={{
                            height: 260,
                            borderRadius: SPACING * 2,
                            padding: SPACING * -2,
                            marginBottom: SPACING * 16,
                        }}
                    >

                        <SafeAreaView style={StyleSheet.container}>
                            {/* <Text style={StyleSheet.textStyle}>Rate us</Text> */}
                            <CustomRatingBar />
                            <Text style={{
                                color: "white",
                                textAlign: 'center',
                                fontSize: 23,
                                marginTop: 20,
                            }}>
                                {defaultRating + '/' + maxRating.length}
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.buttonStyle}
                                onPress={() => alert(defaultRating)}>
                                <Text style={{
                                    color: "white",
                                }}>Confirm Rating</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </LinearGradient>
                ))}

            </ScrollView>
            <TouchableOpacity>

                {/* <LinearGradient
              style={{
                padding: SPACING * 1.6,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: SPACING * 2,
              }}
              colors={[colors["dark-gray"], colors.dark]}
            >
              <Text
                style={{
                  color: colors.light,
                  fontWeight: "800",
                  fontSize: SPACING * 2,
                }}
              >
                View All
              </Text>
            </LinearGradient> */}

            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default RatingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: 'center'

    },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        marginTop: 20
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover'

    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#C29DCB',
    },
});
